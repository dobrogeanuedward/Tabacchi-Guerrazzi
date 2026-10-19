import {createHash} from 'node:crypto';
import {readFile,readdir,mkdir,writeFile} from 'node:fs/promises';
import {dirname,extname,join,relative,resolve,sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {parse} from 'parse5';
import {dataModuleLoader} from './verify-launch-readiness.mjs';
import {isIndexablePath,normalizeSiteUrl} from '../src/lib/launch-readiness.mjs';

const ignoredTextTags=new Set(['script','style','noscript','template']);
const boilerplateClasses=/^(?:breadcrumb|brand-signature|brand-visit|reference-related|reference-visit|reference-return|neighborhood-links|category-pathways|record-related|record-links|family-related|family-continuation|visit-cta|page-visit|official-sources|reading-index|journal-index)$/;
const attr=(node,name)=>node?.attrs?.find(item=>item.name===name)?.value;
const classes=node=>(attr(node,'class')||'').split(/\s+/);
const compact=value=>value.replace(/\s+/g,' ').trim();
const words=value=>(value.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu)||[]);
const clean=value=>compact(value.normalize('NFKC').toLocaleLowerCase('it'));
const hash=value=>createHash('sha256').update(value).digest('hex');

function walk(node,visit){visit(node);for(const child of node.childNodes||[])walk(child,visit);}
function findAll(node,predicate){const result=[];walk(node,current=>{if(predicate(current))result.push(current);});return result;}
function ancestor(node,predicate){for(let current=node;current;current=current.parentNode)if(predicate(current))return current;return null;}
function boilerplate(node){return ['nav','footer','dialog','form'].includes(node.tagName)||classes(node).some(value=>boilerplateClasses.test(value));}
function text(node,{editorial=false}={}){
 if(!node||ignoredTextTags.has(node.tagName)||(editorial&&boilerplate(node)))return '';
 if(node.nodeName==='#text')return node.value;
 return (node.childNodes||[]).map(child=>text(child,{editorial})).join(' ');
}
function accessibleName(node,ids){
 const labelled=attr(node,'aria-labelledby');
 if(labelled)return compact(labelled.split(/\s+/).map(id=>text(ids.get(id))).join(' '));
 if(attr(node,'aria-label'))return compact(attr(node,'aria-label'));
 return compact(text(node)+' '+findAll(node,item=>item.tagName==='img').map(item=>attr(item,'alt')||'').join(' '));
}
async function filesIn(directory){
 const result=[];
 for(const entry of (await readdir(directory,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name,'en'))){
  const file=join(directory,entry.name);
  if(entry.isDirectory())result.push(...await filesIn(file));else if(entry.isFile())result.push(file);
 }
 return result;
}
function pagePath(file,directory){const name=relative(directory,file).split(sep).join('/');return name==='index.html'?'/':`/${name.replace(/index\.html$/,'')}`;}
function schemaTypes(value,result=new Set()){
 if(Array.isArray(value))for(const entry of value)schemaTypes(entry,result);
 else if(value&&typeof value==='object')for(const [key,entry] of Object.entries(value)){
  if(key==='@type'){for(const type of Array.isArray(entry)?entry:[entry])if(typeof type==='string')result.add(type);}
  else if(entry&&typeof entry==='object')schemaTypes(entry,result);
 }
 return result;
}
function duplicateGroups(pages,key){
 const groups=new Map();
 for(const page of pages){const value=page[key];if(!value)continue;const group=groups.get(value)||[];group.push(page.path);groups.set(value,group);}
 return [...groups].filter(([,paths])=>paths.length>1).map(([value,paths])=>({value,paths:paths.sort()})).sort((a,b)=>a.paths[0].localeCompare(b.paths[0],'en'));
}
function shingles(value){const tokens=words(clean(value));const result=new Set();for(let index=0;index<=tokens.length-5;index++)result.add(tokens.slice(index,index+5).join(' '));return result;}

/** Static evidence only; keyboard, screen reader, contrast and live visibility need browser QA. */
export async function auditSiteContent({root=process.cwd(),outputDirectory='dist',siteUrl=process.env.PUBLIC_SITE_URL}={}){
 root=resolve(root);const directory=resolve(root,outputDirectory);
 const files=await filesIn(directory);
 const load=dataModuleLoader(root);
 const {catalogueBrands}=await load('brand-catalogue.ts');
 const {guides,pages:sourcePages}=await load('pages.ts');
 const {articles,clusters}=await load('articles.ts');
 const {adultSectionSlugs}=await load('tobacco-information.ts');
 const pages=[];const issues=[];
 const issue=(code,path,details,severity='warning')=>issues.push({code,severity,path,...details});
 for(const file of files.filter(file=>file.endsWith('.html'))){
  const html=await readFile(file,'utf8');const document=parse(html);const all=findAll(document,node=>!!node.tagName);
  const main=all.find(node=>node.tagName==='main');const ids=new Map();const duplicateIds=[];
  for(const node of all){const id=attr(node,'id');if(id){if(ids.has(id))duplicateIds.push(id);ids.set(id,node);}}
  const path=pagePath(file,directory);const content=main||document;
  const editorial=compact(text(content,{editorial:true}));
  const mainText=compact(text(content));
  const headingNodes=all.filter(node=>/^h[1-6]$/.test(node.tagName));
  const h1=headingNodes.filter(node=>node.tagName==='h1').map(node=>compact(text(node)));
  const title=compact(text(all.find(node=>node.tagName==='title')));
  const metas=all.filter(node=>node.tagName==='meta');
  const descriptions=metas.filter(node=>attr(node,'name')?.toLowerCase()==='description').map(node=>attr(node,'content')||'');
  const jsonNodes=all.filter(node=>node.tagName==='script'&&attr(node,'type')==='application/ld+json');
  const jsonLd=[];const jsonErrors=[];
  for(const node of jsonNodes){try{jsonLd.push(JSON.parse((node.childNodes||[]).map(item=>item.value||'').join('')));}catch(error){jsonErrors.push(error.message);}}
  const imageNodes=all.filter(node=>node.tagName==='img');
  const imageRecords=imageNodes.map(node=>({src:attr(node,'src')||'',alt:attr(node,'alt'),width:attr(node,'width')||'',height:attr(node,'height')||'',scope:ancestor(node,item=>item===main)?'main':'shell'}));
  const links=all.filter(node=>node.tagName==='a'&&attr(node,'href')).map(node=>({href:attr(node,'href'),text:accessibleName(node,ids),scope:ancestor(node,item=>item===main)?(ancestor(node,item=>item!==main&&boilerplate(item))?'main-template':'editorial'):'shell'}));
  const resources=[];
  for(const node of all){
   for(const name of ['src','poster']){const value=attr(node,name);if(value)resources.push({url:value,kind:node.tagName,scope:ancestor(node,item=>item===main)?'main':'shell'});}
   const srcset=attr(node,'srcset');if(srcset)for(const candidate of srcset.split(',')){const url=candidate.trim().split(/\s+/)[0];if(url)resources.push({url,kind:`${node.tagName}-srcset`,scope:ancestor(node,item=>item===main)?'main':'shell'});}
   if(node.tagName==='link'&&['stylesheet','icon','preload','modulepreload'].includes(attr(node,'rel')))resources.push({url:attr(node,'href'),kind:attr(node,'rel'),scope:'shell'});
   const style=attr(node,'style')||'';for(const match of style.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g))resources.push({url:match[1],kind:'inline-style',scope:ancestor(node,item=>item===main)?'main':'shell'});
   if(node.tagName==='meta'&&['og:image','twitter:image'].includes(attr(node,'property')||attr(node,'name')))resources.push({url:attr(node,'content'),kind:'social-image',scope:'metadata'});
  }
  const gate=all.find(node=>attr(node,'id')==='age-confirmation');
  const slug=path.replace(/^\/en(?=\/)/,'').replace(/^\/|\/$/g,'');
  const expectsGate=adultSectionSlugs.includes(slug)||slug.startsWith('sigari/');
  const regulatedKind=slug==='ricevitoria'?'gambling-counter':slug==='accendini-e-accessori'?'adult-accessories':expectsGate?'tobacco-information':null;
  const types=[...new Set(jsonLd.flatMap(value=>[...schemaTypes(value)]))].sort();
  const record={path,language:attr(all.find(node=>node.tagName==='html'),'lang')||'',title,description:descriptions[0]||'',h1,counts:{h1:h1.length,headings:headingNodes.length,jsonLdBlocks:jsonNodes.length,images:imageNodes.length,mainImages:imageRecords.filter(image=>image.scope==='main').length,wordsMain:words(mainText).length,wordsEditorial:words(editorial).length,wordsOutsideMain:words(compact(text(document))).length-words(mainText).length,links:links.length,editorialLinks:links.filter(link=>link.scope==='editorial').length},jsonLdTypes:types,images:imageRecords,regulatedKind,ageGate:{expected:expectsGate,present:!!gate,labelResolved:gate?!!ids.get(attr(gate,'aria-labelledby')):null,descriptionResolved:gate?!!ids.get(attr(gate,'aria-describedby')):null,acceptButton:gate?findAll(gate,node=>node.tagName==='button'&&attr(node,'data-age-accept')!==undefined).length>0:null,exitLink:gate?findAll(gate,node=>node.tagName==='a'&&attr(node,'href')!==undefined).length>0:null},_ids:ids,_links:links,_resources:resources,_editorial:editorial,_document:document,_file:file};
  pages.push(record);
  if(h1.length!==1)issue('h1-count',path,{count:h1.length},'error');
  if(!title)issue('title-missing',path,{},'error');
  if(descriptions.length!==1||!compact(descriptions[0]||''))issue('description-count',path,{count:descriptions.length},isIndexablePath(path)?'error':'warning');
  if(jsonErrors.length)issue('jsonld-invalid',path,{errors:jsonErrors},'error');
  if(jsonNodes.length===0)issue('jsonld-missing',path,{});
  if(duplicateIds.length)issue('duplicate-ids',path,{ids:[...new Set(duplicateIds)]},'error');
  for(const image of imageRecords){if(image.alt===undefined)issue('image-alt-missing',path,{src:image.src},'error');if(!image.width||!image.height)issue('image-dimensions-missing',path,{src:image.src});}
  for(const link of links)if(!link.text)issue('link-name-empty',path,{href:link.href,scope:link.scope},'error');
  if(expectsGate&&!gate)issue('age-gate-missing',path,{},'error');
  if(gate&&(!record.ageGate.labelResolved||!record.ageGate.descriptionResolved||!record.ageGate.acceptButton||!record.ageGate.exitLink))issue('age-gate-structure',path,{checks:record.ageGate},'error');
  if(regulatedKind&&regulatedKind!=='adult-accessories'&&types.some(type=>['Product','Offer','AggregateOffer','AggregateRating'].includes(type)))issue('regulated-commercial-schema',path,{types:types.filter(type=>['Product','Offer','AggregateOffer','AggregateRating'].includes(type))},'review');
 }
 pages.sort((a,b)=>a.path.localeCompare(b.path,'en'));
 const origin=normalizeSiteUrl(siteUrl)||pages.map(page=>page._document).map(document=>findAll(document,node=>node.tagName==='link'&&attr(node,'rel')==='canonical')[0]).map(node=>attr(node,'href')).map(value=>{try{return new URL(value).origin+'/';}catch{return '';}}).find(Boolean)||'https://audit.invalid/';
 const byPath=new Map(pages.map(page=>[page.path,page]));
 const knownFiles=new Set(files.map(file=>relative(directory,file).split(sep).join('/')));
 const brokenLinks=[];const brokenAnchors=[];const missingAssets=new Map();const remoteAssets=new Map();
 const incoming=new Map(pages.map(page=>[page.path,new Set()]));const editorialIncoming=new Map(pages.map(page=>[page.path,new Set()]));const edges=new Map(pages.map(page=>[page.path,new Set()]));
 const resolveLocal=(value,from)=>{try{const url=new URL(value,new URL(from,origin));return url.origin===new URL(origin).origin?url:null;}catch{return null;}};
 const fileFor=url=>{try{return decodeURIComponent(url.pathname).replace(/^\//,'');}catch{return url.pathname.replace(/^\//,'');}};
 const resolvePage=url=>byPath.get(url.pathname)||byPath.get(`${url.pathname.replace(/\/$/,'')}/`)||byPath.get(url.pathname.replace(/index\.html$/,''));
 function checkAsset(resource,from){
  if(!resource.url||resource.url.startsWith('#')||/^(?:data|blob):/.test(resource.url))return;
  const url=resolveLocal(resource.url,from);
  if(!url){if(/^https?:\/\//.test(resource.url)){const entries=remoteAssets.get(resource.url)||new Set();entries.add(from);remoteAssets.set(resource.url,entries);}return;}
  if(knownFiles.has(fileFor(url)))return;
  const key=url.pathname;const record=missingAssets.get(key)||{asset:key,uses:[]};
  if(!record.uses.some(use=>use.from===from&&use.kind===resource.kind))record.uses.push({from,kind:resource.kind,scope:resource.scope});
  missingAssets.set(key,record);
 }
 for(const page of pages){
  for(const resource of page._resources)checkAsset(resource,page.path);
  for(const link of page._links){
   const url=resolveLocal(link.href,page.path);if(!url)continue;
   const target=resolvePage(url);
   if(!target){if(!knownFiles.has(fileFor(url)))brokenLinks.push({from:page.path,href:link.href,target:url.pathname,scope:link.scope,text:link.text});continue;}
   if(target.path!==page.path){incoming.get(target.path).add(page.path);edges.get(page.path).add(target.path);if(link.scope==='editorial')editorialIncoming.get(target.path).add(page.path);}
   if(url.hash&&url.hash!=='#'){let id;try{id=decodeURIComponent(url.hash.slice(1));}catch{id=url.hash.slice(1);}if(!target._ids.has(id))brokenAnchors.push({from:page.path,href:link.href,target:target.path,id,scope:link.scope});}
   if(page.regulatedKind&&page.regulatedKind!=='adult-accessories'&&link.scope==='editorial'&&/\/catalogo(?:\/|$)/.test(target.path))issue('regulated-to-commercial-path',page.path,{href:link.href,text:link.text},'review');
  }
 }
 for(const file of files.filter(file=>extname(file)==='.css')){
  const css=await readFile(file,'utf8');const from=`/${relative(directory,file).split(sep).join('/')}`;
  for(const match of css.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g))checkAsset({url:match[1],kind:'stylesheet-url',scope:'asset'},from);
 }
 const eligible=pages.filter(page=>isIndexablePath(page.path));
 const noIncoming=eligible.filter(page=>!['/','/en/'].includes(page.path)&&incoming.get(page.path).size===0).map(page=>page.path);
 const noEditorialIncoming=eligible.filter(page=>!['/','/en/'].includes(page.path)&&editorialIncoming.get(page.path).size===0).map(page=>page.path);
 const reachable=new Set();const queue=['/','/en/'].filter(path=>byPath.has(path));while(queue.length){const current=queue.shift();if(reachable.has(current))continue;reachable.add(current);queue.push(...(edges.get(current)||[]));}
 const unreachable=eligible.filter(page=>!reachable.has(page.path)).map(page=>page.path);
 const exactDuplicates=duplicateGroups(eligible.filter(page=>page.counts.wordsEditorial>=80).map(page=>({...page,contentHash:hash(clean(page._editorial))})),'contentHash');
 const shingleCache=new Map(eligible.filter(page=>page.counts.wordsEditorial>=80).map(page=>[page.path,shingles(page._editorial)]));const nearDuplicates=[];
 for(let index=0;index<eligible.length;index++)for(let other=index+1;other<eligible.length;other++){
  const left=eligible[index],right=eligible[other];if(left.language!==right.language||!shingleCache.has(left.path)||!shingleCache.has(right.path))continue;
  const a=shingleCache.get(left.path),b=shingleCache.get(right.path);if(Math.min(a.size,b.size)/Math.max(a.size,b.size)<.88)continue;
  let intersection=0;for(const value of a)if(b.has(value))intersection++;
  const similarity=intersection/(a.size+b.size-intersection);if(similarity>=.88&&hash(clean(left._editorial))!==hash(clean(right._editorial)))nearDuplicates.push({paths:[left.path,right.path],fiveWordShingleJaccard:Number(similarity.toFixed(3))});
 }
 const genericBrands=catalogueBrands.filter(brand=>brand.note[0].startsWith(`${brand.name} fa parte dei marchi della bottega.`));
 const authoredBrands=catalogueBrands.filter(brand=>brand.noteOrigin==='authored');
 const catalogueDerivedBrands=catalogueBrands.filter(brand=>brand.noteOrigin==='catalogue');
 const unclassifiedBrands=catalogueBrands.filter(brand=>!['authored','catalogue'].includes(brand.noteOrigin));
 const articleProblems=[];
 for(const article of articles){if(!clusters.some(cluster=>cluster.id===article.cluster))articleProblems.push({slug:article.slug,code:'cluster-missing',cluster:article.cluster});if(!guides[article.guide])articleProblems.push({slug:article.slug,code:'guide-missing',guide:article.guide});if(!article.sections?.length)articleProblems.push({slug:article.slug,code:'sections-empty'});}
 const guideProblems=[];for(const [slug,guide] of Object.entries(guides)){if(!sourcePages[guide.parent]&&!['','il-quartiere','catalogo'].includes(guide.parent))guideProblems.push({slug,code:'parent-missing',parent:guide.parent});if(!guide.sections?.length)guideProblems.push({slug,code:'sections-empty'});}
 const guidePaths=eligible.filter(page=>/^\/(?:en\/)?schede\//.test(page.path));const articlePaths=eligible.filter(page=>/^\/approfondimenti\/.+\/$/.test(page.path));
 const imageUsage=new Map();for(const page of eligible)for(const image of page.images.filter(image=>image.scope==='main')){const uses=imageUsage.get(image.src)||new Set();uses.add(page.path);imageUsage.set(image.src,uses);}
 const reusedMainImages=[...imageUsage].filter(([,uses])=>uses.size>4).map(([src,uses])=>({src,pageCount:uses.size,paths:[...uses].sort()})).sort((a,b)=>b.pageCount-a.pageCount||a.src.localeCompare(b.src,'en'));
 const report={schemaVersion:1,scope:{directory:outputDirectory,method:'HTML DOM + local assets + trusted source data',browserChecksPerformed:false,editorialWordCountNote:'Excludes global shell, navigation and known repeated visit/related/source blocks; a word count is evidence, not a content-quality verdict.'},summary:{pages:pages.length,eligiblePages:eligible.length,images:pages.reduce((sum,page)=>sum+page.counts.images,0),brokenInternalLinks:brokenLinks.length,brokenAnchors:brokenAnchors.length,missingAssets:missingAssets.size,orphans:noIncoming.length,withoutEditorialIncoming:noEditorialIncoming.length,unreachableFromHome:unreachable.length,duplicateTitleGroups:duplicateGroups(eligible,'title').length,duplicateDescriptionGroups:duplicateGroups(eligible,'description').length,exactEditorialDuplicateGroups:exactDuplicates.length,nearEditorialDuplicatePairs:nearDuplicates.length,errors:issues.filter(item=>item.severity==='error').length},sources:{brands:{total:catalogueBrands.length,authoredNotes:authoredBrands.length,catalogueDerivedNotes:catalogueDerivedBrands.length,unclassifiedNotes:unclassifiedBrands.length,noteOriginMeaning:{authored:'Dedicated editorial note',catalogue:'Description assembled from documented catalogue families; not an independently researched brand history'},catalogueDerivedPaths:catalogueDerivedBrands.flatMap(brand=>[`/marchi/${brand.slug}/`,`/en/marchi/${brand.slug}/`]),unclassifiedPaths:unclassifiedBrands.flatMap(brand=>[`/marchi/${brand.slug}/`,`/en/marchi/${brand.slug}/`]),genericFallback:genericBrands.length,genericFallbackPaths:genericBrands.flatMap(brand=>[`/marchi/${brand.slug}/`,`/en/marchi/${brand.slug}/`])},guides:{definitions:Object.keys(guides).length,renderedPages:guidePaths.length,problems:guideProblems},articles:{definitions:articles.length,renderedPages:articlePaths.length,clusterCount:clusters.length,emptyClusters:clusters.filter(cluster=>!articles.some(article=>article.cluster===cluster.id)).map(cluster=>cluster.id),problems:articleProblems}},links:{brokenPages:brokenLinks,brokenAnchors,orphans:noIncoming,withoutEditorialIncoming:noEditorialIncoming,unreachableFromHome:unreachable},assets:{missing:[...missingAssets.values()].sort((a,b)=>a.asset.localeCompare(b.asset,'en')),remote:[...remoteAssets].map(([url,uses])=>({url,pages:[...uses].sort()})),reusedMainImages,pagesWithoutMainImages:eligible.filter(page=>page.counts.mainImages===0).map(page=>page.path)},duplicates:{titles:duplicateGroups(eligible,'title'),descriptions:duplicateGroups(eligible,'description'),exactEditorial:exactDuplicates,nearEditorial:nearDuplicates},issues,pages:pages.map(page=>{const {_ids,_links,_resources,_editorial,_document,_file,...record}=page;return record;})};
 return report;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
 const args=process.argv.slice(2);const report=await auditSiteContent();const json=`${JSON.stringify(report,null,2)}\n`;
 const outputIndex=args.indexOf('--output');if(outputIndex!==-1){if(!args[outputIndex+1])throw new Error('--output requires a destination path.');const destination=resolve(args[outputIndex+1]);await mkdir(dirname(destination),{recursive:true});await writeFile(destination,json);}
 console.log(args.includes('--summary')?JSON.stringify({summary:report.summary,sources:report.sources},null,2):json.trimEnd());
 if(report.summary.errors||report.summary.brokenInternalLinks||report.summary.brokenAnchors||report.summary.missingAssets)process.exitCode=1;
}
