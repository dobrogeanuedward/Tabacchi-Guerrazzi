import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {join} from 'node:path';
import {parse} from 'parse5';
import sharp from 'sharp';
import {isGeneratedImage} from '../src/data/generated-images.mjs';

const photos=JSON.parse(await readFile('src/data/fototeca-assets.json','utf8'));
const descendants=node=>[node,...(node.childNodes||[]).flatMap(descendants)];
const attrs=node=>Object.fromEntries((node.attrs||[]).map(attribute=>[attribute.name,attribute.value]));
const hasClass=(node,name)=>(attrs(node).class||'').split(/\s+/).includes(name);
const readPage=async route=>parse(await readFile(join('dist',route,'index.html'),'utf8'));
const familyIds=new Set(photos.flatMap(photo=>photo.familyIds||[]));
const categorySlugs=new Set(photos.flatMap(photo=>photo.categorySlugs||[]));
const prohibited=new Set(['sigari','pipe-e-tabacchi-da-pipa','accendini-e-accessori','ricevitoria','ploom','servizi/self-service']);
let responsiveFiles=0,families=0,categories=0,sections=0;

for(const photo of photos){
 assert(photo.id&&photo.alt.it&&photo.alt.en,'Missing photographic identity or alternative text');
 assert(!photo.categorySlugs?.some(slug=>prohibited.has(slug)),`Informative area received a new promotional photo: ${photo.id}`);
 assert(photo.familyIds?.length||photo.categorySlugs?.length||photo.sectionIds?.length,`Photograph has no use: ${photo.id}`);
 const variants=(photo.srcset||'').split(',').map(variant=>variant.trim().split(/\s+/)).filter(([path])=>path);
 assert(variants.length>=2,`Responsive variants missing: ${photo.id}`);
 for(const [path,width] of variants){
  const file=join('dist',path);await access(file);
  const metadata=await sharp(file).metadata();
  assert.equal(metadata.width,Number(width.replace(/w$/,'')),`Incorrect source width: ${path}`);
  assert.equal(metadata.format,'webp');assert.equal(isGeneratedImage(path),photo.generated!==false,`Incorrect disclosure registration: ${path}`);responsiveFiles++;
 }
 const metadata=await sharp(join('dist',photo.src)).metadata();
 assert.equal(metadata.width,photo.width);assert.equal(metadata.height,photo.height);
}

for(const prefix of ['','en/']){
 const catalog=descendants(await readPage(`${prefix}catalogo`));
 for(const id of familyIds){
  const expected=photos.find(photo=>photo.familyIds?.includes(id));
  const dom=descendants(await readPage(`${prefix}assortimento/${id}`));
  const gallery=dom.find(node=>Object.hasOwn(attrs(node),'data-photo-gallery'));
  assert(gallery,`Missing family gallery: ${prefix}${id}`);
  const panels=descendants(gallery).filter(node=>Object.hasOwn(attrs(node),'data-photo-panel'));
  assert(panels.length>=2,`Historical family photograph missing: ${prefix}${id}`);
  const primary=descendants(panels[0]).find(node=>node.tagName==='img');
  const historical=descendants(panels[1]).find(node=>node.tagName==='img');
  assert.equal(attrs(primary).src,expected.src);
  assert(!attrs(historical).src.startsWith('/images/fototeca/'),`Second photo is not historical: ${prefix}${id}`);
  assert(descendants(panels[0]).some(node=>Object.hasOwn(attrs(node),'data-photo-brand')),`Missing original corner logo: ${prefix}${id}`);
  assert(dom.some(node=>node.tagName==='meta'&&attrs(node).property==='og:image'&&attrs(node).content.endsWith(expected.src)),`Family OG does not match primary: ${id}`);
  const card=catalog.find(node=>node.tagName==='article'&&hasClass(node,'assortment-card')&&descendants(node).some(child=>attrs(child).href===`/${prefix}assortimento/${id}/`));
  assert(card,`Missing catalogue card: ${prefix}${id}`);
  assert.equal(attrs(descendants(card).find(node=>node.tagName==='img')).src,expected.src);
  families++;
 }
 for(const slug of categorySlugs){
  if(slug==='catalogo')continue;
  const expected=photos.find(photo=>photo.categorySlugs?.includes(slug));
  const dom=descendants(await readPage(`${prefix}${slug}`));
  const gallery=dom.find(node=>Object.hasOwn(attrs(node),'data-photo-gallery'));
  assert(gallery,`Missing category gallery: ${prefix}${slug}`);
  assert.equal(attrs(descendants(gallery).find(node=>node.tagName==='img')).src,expected.src);
  if(!slug.startsWith('servizi/')){
   const panels=descendants(gallery).filter(node=>Object.hasOwn(attrs(node),'data-photo-panel'));
   assert(panels.length>=2,`Historical category image missing: ${prefix}${slug}`);
   assert(!attrs(descendants(panels[1]).find(node=>node.tagName==='img')).src.startsWith('/images/fototeca/'),`Second category image is not historical: ${prefix}${slug}`);
  }
  assert(dom.some(node=>node.tagName==='meta'&&attrs(node).property==='og:image'&&attrs(node).content.endsWith(expected.src)),`Category OG does not match primary: ${slug}`);
  categories++;
 }
 for(const photo of photos.filter(photo=>photo.sectionIds?.includes('raptus-ambienti-tessuti'))){
  const dom=descendants(await readPage(`${prefix}profumi-raptus`));
  const section=dom.find(node=>node.tagName==='section'&&hasClass(node,'room-fragrance'));
  assert(section,`Missing room and fabric fragrance section: ${prefix}`);
  assert(descendants(section).some(node=>node.tagName==='img'&&attrs(node).src===photo.src),`Room fragrance photograph missing: ${prefix}${photo.id}`);
  sections++;
 }
}
console.log(JSON.stringify({photographs:photos.length,responsiveFiles,familyPages:families,categoryPages:categories,sectionPlacements:sections,historicalSecondImagesPreserved:true,originalCornerLogo:true}));
