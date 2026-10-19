import {cp,rm,writeFile,readFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {dirname,resolve} from 'node:path';
import {loadEnv} from 'vite';
import {auditLaunchReadiness} from './verify-launch-readiness.mjs';

const root=resolve('.');
const destination=resolve(root,'.static-export');
if(dirname(destination)!==root)throw new Error('Static export directory must stay inside the project.');
const environment=loadEnv('production',root,'PUBLIC_');
const productionUrl=environment.PUBLIC_SITE_URL||'';
const launchRequested=environment.PUBLIC_LAUNCH_READY==='true';
const preflight=await auditLaunchReadiness({siteUrl:productionUrl,launchRequested,sourceOnly:true});
if(launchRequested&&!preflight.gate.ready){
 console.error(JSON.stringify(preflight,null,2));
 throw new Error('Indicizzazione richiesta con dati di lancio incompleti. Consultare gate.blockers; la build di anteprima richiede PUBLIC_LAUNCH_READY=false.');
}
try {
 await rm(destination,{recursive:true,force:true});
 await cp('src',`${destination}/src`,{recursive:true});
 for (const route of ['admin','api','uploads']) {
  await rm(`${destination}/src/pages/${route}`,{recursive:true,force:true});
 }
 // Database articles stay on the Node runtime; documented catalogue articles
 // come from catalog-products.mjs and are shared with the static export.
 await writeFile(`${destination}/src/lib/store.mjs`,'export function getProducts(){return [];}\nexport function getProductBySlug(){return null;}\n');
 for (const route of ['robots.txt.ts','sitemap.xml.ts']) {
  const path=`${destination}/src/pages/${route}`;
  await writeFile(path,`export const prerender=true;\n${await readFile(path,'utf8')}`);
 }
 await new Promise((resolve,reject)=>{
  const child=spawn(process.execPath,['node_modules/astro/astro.js','build'],{stdio:'inherit',env:{...process.env,ASTRO_STATIC_EXPORT:'true',PUBLIC_SITE_URL:preflight.gate.siteUrl,PUBLIC_LAUNCH_READY:String(launchRequested)}});
  child.once('error',reject);
  child.once('exit',code=>code===0?resolve():reject(new Error(`Static build failed (${code}).`)));
 });
 const report=await auditLaunchReadiness({siteUrl:preflight.gate.siteUrl,launchRequested});
 for(const route of ['privacy','cookie']){
  const html=await readFile(resolve(root,'dist',route,'index.html'),'utf8');
  if(html.includes('guerrazzi_session')||html.includes('cookie di autenticazione per la gestione')){
   throw new Error(`The static ${route} page describes an administrative cookie absent from the public export.`);
  }
 }
 console.log(JSON.stringify(report,null,2));
 if(!report.output.verified)throw new Error('Static export failed launch/preview consistency checks; see output.issues.');
} finally {
 await rm(destination,{recursive:true,force:true});
}
