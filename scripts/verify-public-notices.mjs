import {readdir,readFile} from 'node:fs/promises';
import {parse} from 'parse5';
import assert from 'node:assert/strict';
import {isGeneratedImage,generatedImageInventory} from '../src/data/generated-images.mjs';
import {isSoftenedProductImage,temporaryProductImageInventory} from '../src/data/product-image-treatment.mjs';
import {dataModuleLoader} from './verify-launch-readiness.mjs';
const {adultSectionSlugs}=await dataModuleLoader(process.cwd())('tobacco-information.ts');
const attrs=node=>Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));
const hasClass=(node,name)=>(attrs(node).class||'').split(/\s+/).includes(name);
const descendants=node=>[node,...(node.childNodes||[]).flatMap(descendants)];
const parents=node=>node.parentNode?[node.parentNode,...parents(node.parentNode)]:[];
const visibleLabel=node=>descendants(node).some(n=>(hasClass(n,'ai-disclosure')||hasClass(n,'ai-group-disclosure')||hasClass(n,'ai-image-caption'))&&!Object.hasOwn(attrs(n),'hidden'));
async function files(dir){const result=[];for(const e of await readdir(dir,{withFileTypes:true})){const path=dir+'/'+e.name;if(e.isDirectory())result.push(...await files(path));else if(path.endsWith('.html'))result.push(path);}return result;}
const errors=[];let generated=0,documentary=0,decorative=0,pages=0,softened=0;
for(const src of temporaryProductImageInventory){
 assert(isGeneratedImage(src),'Temporary treatment must only include registered AI reconstructions: '+src);
 await readFile('dist'+src);
}
for(const file of await files('dist')){
 const html=await readFile(file,'utf8');const dom=parse(html);const nodes=descendants(dom);pages++;
 assert(html.includes('footer-image-note'),'Missing shared image note: '+file);
 for(const button of nodes.filter(n=>n.tagName==='button'&&hasClass(n,'ai-info-button'))){
  if(parents(button).some(n=>n.tagName==='a'||n.tagName==='button'))errors.push({file,reason:'AI control nested inside another interactive control'});
  const target=attrs(button).popovertarget;const panel=nodes.find(n=>attrs(n).id===target);
  if(!target||!panel||attrs(panel).popover!=='auto'||!attrs(button)['aria-label'])errors.push({file,reason:'AI control lacks accessible disclosure panel'});
 }
 for(const img of nodes.filter(n=>n.tagName==='img')){
  const src=attrs(img).src||'';const ancestors=parents(img);
  if(isSoftenedProductImage(src)){
   softened++;
   if(attrs(img)['data-product-obscured']!=='true')errors.push({file,src,reason:'Selected reconstruction has no temporary visual treatment'});
  }else if(Object.hasOwn(attrs(img),'data-product-obscured'))errors.push({file,src,reason:'Unselected image has temporary visual treatment'});
  if(isGeneratedImage(src)){
   generated++;
   if(ancestors.some(n=>hasClass(n,'atlas-texture'))){decorative++;continue;}
   const disclosed=ancestors.some(n=>(Object.hasOwn(attrs(n),'data-ai-visual')||Object.hasOwn(attrs(n),'data-ai-disclosure-group')||n.tagName==='figure')&&visibleLabel(n));
   if(!disclosed)errors.push({file,src,reason:'Generated image has no local visible disclosure'});
  }else if(/^\/images\/(brand-stories|history-context|reference-cigars)\//.test(src)){
   documentary++;if(ancestors.some(n=>Object.hasOwn(attrs(n),'data-ai-visual')))errors.push({file,src,reason:'Authentic photograph labelled as AI'});
  }
 }
 for(const meta of nodes.filter(n=>n.tagName==='meta'&&['og:image','twitter:image'].includes(attrs(n).property||attrs(n).name))){
  if(isSoftenedProductImage(attrs(meta).content))errors.push({file,reason:'Untreated reconstruction in social preview'});
 }
 const path='/'+file.replace(/^dist\//,'').replace(/index\.html$/,'');
 const slug=path.replace(/^\/(?:en\/)?/,'').replace(/\/$/,'');
 if((adultSectionSlugs.includes(slug)||slug.startsWith('sigari/'))&&!nodes.some(n=>hasClass(n,'legal-notice')))errors.push({file,reason:'Missing regulated-content notice'});
}
for(const prefix of ['','en/']){
 const page=await readFile('dist/'+prefix+'servizi/ricariche-postepay/index.html','utf8');
 assert.match(page,/postepay-official\.webp/);assert.match(page,/Postepay/);
 const index=await readFile('dist/'+prefix+'servizi/index.html','utf8');
 assert(index.includes('servizi/ricariche-postepay/'),'Postepay detail missing from services index');
}
const cookies=await readFile('dist/cookie/index.html','utf8');assert.match(cookies,/data-clear-age-confirmation/);assert(!cookies.includes('guerrazzi_session'));
console.log(JSON.stringify({pages,registeredGeneratedFiles:generatedImageInventory.length,temporaryTreatmentFiles:temporaryProductImageInventory.length,softenedImageUses:softened,generatedImageUses:generated,decorativeAtlasUses:decorative,authenticImageUses:documentary,errors:errors.slice(0,25),errorCount:errors.length},null,2));
assert.equal(errors.length,0,'Public notice verification failed');
