import {readFile,readdir,mkdir,writeFile} from 'node:fs/promises';
import {dirname,extname,join,relative,resolve,sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import ts from 'typescript';
import {loadEnv} from 'vite';
import {getLaunchReadiness,getPublicSitemapPaths,isIndexablePath} from '../src/lib/launch-readiness.mjs';

/** Load the trusted data modules without a browser build or the private database. */
export function dataModuleLoader(root){
 const directory=resolve(root,'src/data');
 const cache=new Map();
 const pending=new Set();
 async function moduleUrl(file){
  file=resolve(file);
  if(!file.startsWith(`${directory}${sep}`))throw new Error(`Data import leaves src/data: ${file}`);
  if(cache.has(file))return cache.get(file);
  if(pending.has(file))throw new Error(`Circular data import: ${relative(root,file)}`);
  pending.add(file);
  try{
   const source=await readFile(file,'utf8');
   const code=extname(file)==='.ts'?ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText:source;
   const parsed=ts.createSourceFile(file,code,ts.ScriptTarget.ES2022,true,ts.ScriptKind.JS);
   const replacements=[];
   for(const statement of parsed.statements){
    if(!(ts.isImportDeclaration(statement)||ts.isExportDeclaration(statement))||!statement.moduleSpecifier)continue;
    const specifier=statement.moduleSpecifier;
    if(!ts.isStringLiteral(specifier)||!specifier.text.startsWith('.'))throw new Error(`Unsupported data dependency: ${relative(root,file)}`);
    const target=resolve(dirname(file),`${specifier.text}${extname(specifier.text)?'':'.ts'}`);
    replacements.push({start:specifier.getStart(parsed),end:specifier.getEnd(),value:JSON.stringify(await moduleUrl(target))});
   }
   let transformed=code;
   for(const replacement of replacements.reverse())transformed=transformed.slice(0,replacement.start)+replacement.value+transformed.slice(replacement.end);
   const url=`data:text/javascript;base64,${Buffer.from(transformed).toString('base64')}`;
   cache.set(file,url);
   return url;
  }finally{pending.delete(file);}
 }
 return async name=>import(await moduleUrl(resolve(directory,name)));
}

async function htmlFiles(directory){
 const result=[];
 for(const entry of (await readdir(directory,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name,'en'))){
  const file=join(directory,entry.name);
  if(entry.isDirectory())result.push(...await htmlFiles(file));
  else if(entry.isFile()&&entry.name.endsWith('.html'))result.push(file);
 }
 return result;
}

const attributes=tag=>Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(match=>[match[1].toLowerCase(),match[2]??match[3]??match[4]]));
const xmlText=value=>value.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&apos;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
const difference=(left,right)=>left.filter(value=>!right.has(value)).sort();

/** Deterministic report: no timestamps, estimates or implicit launch approval. */
export async function auditLaunchReadiness({root=process.cwd(),siteUrl,launchRequested,outputDirectory='dist',sourceOnly=false}={}){
 root=resolve(root);
 const environment=loadEnv('production',root,'PUBLIC_');
 const load=dataModuleLoader(root);
 const shopData=await load('shop.ts');
 const gate=getLaunchReadiness({siteUrl:siteUrl??environment.PUBLIC_SITE_URL,launchRequested:launchRequested??environment.PUBLIC_LAUNCH_READY,shop:shopData.shop});
 // The static export replaces managed database records with an empty store.
 const data={...shopData,...await load('pages.ts'),...await load('catalog-assortment.ts'),...await load('cigar-records.ts'),...await load('brand-catalogue.ts'),...await load('service-identities.ts'),...await load('cigar-brand-stories.ts'),...await load('articles.ts'),products:(await load('catalog-products.mjs')).catalogProducts};
 const candidates=getPublicSitemapPaths(data);
 const report={schemaVersion:1,mode:gate.ready?'launch':'noindex-preview',gate,routeCoverage:{candidateCount:candidates.length,verified:false},output:{verified:false,issues:[]}};
 if(sourceOnly)return report;
 const output=resolve(root,outputDirectory);
 let files;
 try{files=await htmlFiles(output);}catch(error){
  if(error.code!=='ENOENT')throw error;
  report.output.issues.push({code:'build-output-missing',message:`Manca l’export statico ${outputDirectory}; eseguire prima build:static.`});
  return report;
 }
 const pages=await Promise.all(files.map(async file=>{
  const relativePath=relative(output,file).split(sep).join('/');
  const pathname=relativePath==='index.html'?'/':`/${relativePath.replace(/index\.html$/,'')}`;
  const html=await readFile(file,'utf8');
  const tags=[...html.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map(match=>attributes(match[0]));
  const robots=tags.filter(tag=>['robots','googlebot','bingbot'].includes(tag.name?.toLowerCase()));
  return {pathname,noindex:robots.some(tag=>/(?:^|[,\s])(?:noindex|none)(?:$|[,\s])/i.test(tag.content||'')),canonical:tags.find(tag=>tag.rel?.toLowerCase()==='canonical')?.href||''};
 }));
 const actual=pages.map(page=>page.pathname).filter(isIndexablePath).sort();
 const missingPages=difference(candidates,new Set(actual));
 const omittedPages=difference(actual,new Set(candidates));
 report.routeCoverage={candidateCount:candidates.length,htmlCount:pages.length,eligibleHtmlCount:actual.length,verified:missingPages.length===0&&omittedPages.length===0,missingPages,omittedPages};
 const issue=(code,message,path)=>report.output.issues.push({code,message,...(path?{path}:{})});
 if(missingPages.length)issue('sitemap-routes-without-page','La lista della sitemap contiene route senza una pagina HTML esportata.');
 if(omittedPages.length)issue('pages-omitted-from-sitemap','Pagine pubbliche esportate mancanti dalla lista candidata della sitemap.');
 for(const page of pages){
  const eligible=isIndexablePath(page.pathname);
  if(!gate.ready&&!page.noindex)issue('preview-page-indexable','La pagina di anteprima deve avere noindex.',page.pathname);
  if(!eligible&&!page.noindex)issue('utility-page-indexable','La pagina di utilità deve avere noindex.',page.pathname);
  if(gate.ready&&eligible&&page.noindex)issue('launch-page-noindex','La pagina prevista nella sitemap conserva noindex.',page.pathname);
  if(gate.ready&&eligible&&page.canonical!==new URL(page.pathname,gate.siteUrl).href)issue('canonical-mismatch','Il canonical deve corrispondere alla route pubblica e all’origine configurata.',page.pathname);
 }
 let sitemap='';let robots='';
 try{sitemap=await readFile(join(output,'sitemap.xml'),'utf8');}catch{issue('sitemap-missing','Manca sitemap.xml nell’export.');}
 try{robots=await readFile(join(output,'robots.txt'),'utf8');}catch{issue('robots-missing','Manca robots.txt nell’export.');}
 const locations=[...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(match=>xmlText(match[1]));
 const expected=gate.ready?candidates.map(path=>new URL(path,gate.siteUrl).href):[];
 if(locations.length!==new Set(locations).size)issue('sitemap-duplicates','La sitemap contiene URL duplicati.');
 const missingUrls=difference(expected,new Set(locations));
 const unexpectedUrls=difference(locations,new Set(expected));
 if(missingUrls.length||unexpectedUrls.length)issue('sitemap-output-mismatch','La sitemap esportata non corrisponde al gate e alle pagine effettive.');
 if(!gate.ready&&!/^Disallow:\s*\/\s*$/m.test(robots))issue('preview-robots-open','robots.txt deve mantenere Disallow: / durante l’anteprima.');
 if(gate.ready&&(/^Disallow:\s*\/\s*$/m.test(robots)||!robots.includes(`Sitemap: ${new URL('/sitemap.xml',gate.siteUrl).href}`)))issue('launch-robots-mismatch','robots.txt deve aprire il sito pubblico e indicare la sitemap canonica.');
 report.output.sitemap={urlCount:locations.length,missingUrls,unexpectedUrls};
 report.output.verified=report.output.issues.length===0;
 return report;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
 const args=process.argv.slice(2);
 const report=await auditLaunchReadiness({sourceOnly:args.includes('--source-only')});
 const json=`${JSON.stringify(report,null,2)}\n`;
 const outputIndex=args.indexOf('--output');
 if(outputIndex!==-1){
  if(!args[outputIndex+1])throw new Error('--output requires a destination path.');
  const destination=resolve(args[outputIndex+1]);
  await mkdir(dirname(destination),{recursive:true});
  await writeFile(destination,json);
 }
 console.log(json.trimEnd());
 if((!args.includes('--source-only')&&!report.output.verified)||(args.includes('--require-ready')&&!report.gate.ready))process.exitCode=1;
}
