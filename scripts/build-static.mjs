import {cp,rm,writeFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {resolve} from 'node:path';

const destination=resolve('.static-export');
const productionUrl=process.env.PUBLIC_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:'');
try {
 await rm(destination,{recursive:true,force:true});
 await cp('src',`${destination}/src`,{recursive:true});
 for (const route of ['admin','api','uploads','catalogo/[slug].astro','en/catalogo/[slug].astro']) {
  await rm(`${destination}/src/pages/${route}`,{recursive:true,force:true});
 }
 // The first public version has no approved product inventory. Never seed fictional stock.
 await writeFile(`${destination}/src/lib/store.mjs`,'export function getProducts(){return [];}\n');
 for (const route of ['robots.txt.ts','sitemap.xml.ts']) {
  const {readFile}=await import('node:fs/promises');
  const path=`${destination}/src/pages/${route}`;
  await writeFile(path,`export const prerender=true;\n${await readFile(path,'utf8')}`);
 }
 await new Promise((resolve,reject)=>{
  const child=spawn('npm',['run','build'],{stdio:'inherit',env:{...process.env,ASTRO_STATIC_EXPORT:'true',PUBLIC_SITE_URL:productionUrl}});
  child.once('error',reject);
  child.once('exit',code=>code===0?resolve():reject(new Error(`Static build failed (${code}).`)));
 });
} finally {
 await rm(destination,{recursive:true,force:true});
}
