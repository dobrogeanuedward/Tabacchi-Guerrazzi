import {readFile,access,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
import sharp from 'sharp';

const productSlug='proteggi-fili-animaletti-akena';
let checkedFamilies=0,checkedProducts=0,checkedPages=0;
const familyCount=(await readdir('dist/assortimento',{withFileTypes:true})).filter(e=>e.isDirectory()).length;
let familyPhotos=0;
for(const prefix of ['', 'en']){
 const catalogue=await readFile(join('dist',prefix,'catalogo/index.html'),'utf8');
 const cards=[...catalogue.matchAll(/<a class="product-card assortment-card"[\s\S]*?<\/a>/g)].map(match=>match[0]);
 assert.equal(cards.length,familyCount);
 const photos=cards.map(card=>{
  const source=card.match(/<img[^>]+src="([^"]+)"/)[1];
  assert.match(source,/^\/images\/(?:catalogo|collection)\//);
  assert.ok(!card.includes('/brand/ui/'));
  assert.match(card,/srcset=/);
  return source;
 });
 familyPhotos=new Set(photos).size;
 assert.ok(familyPhotos>=26);
 for(const card of cards){
  const route=card.match(/href="([^"?#]+)"/)[1];
  const detail=await readFile(join('dist',route,'index.html'),'utf8');
  assert.match(detail,/family-visual-photo/);
  assert.ok(detail.includes(card.match(/<img[^>]+src="([^"]+)"/)[1]));
  checkedFamilies++;
 }
 const route=`/${prefix?`${prefix}/`:''}catalogo/${productSlug}/`;
 assert.ok(catalogue.includes(`href="${route}"`));
 const product=await readFile(join('dist',route,'index.html'),'utf8');
 assert.equal((product.match(/<h1(?:\s|>)/g)||[]).length,1);
 assert.equal((product.match(/data-product-src=/g)||[]).length,3);
 assert.match(product,/AkenA/);
 assert.match(product,/Selezionato e distribuito da|Selected and distributed by/);
 assert.ok(!product.includes('id="age-confirmation"'));
 const graph=JSON.parse(product.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
 assert.ok(graph.some(item=>item['@type']==='Product'&&item.image.length===3));
 const category=await readFile(join('dist',prefix,'accessori-telefono/index.html'),'utf8');
 assert.ok(category.includes(`href="${route}"`));
 for(const source of [...product.matchAll(/data-product-src="([^"]+)"/g)].map(match=>match[1]))await access(join('dist',source));
 checkedProducts++;
}
const manifest=JSON.parse(await readFile('docs/identita/catalog-photography-2026-10-14.json','utf8'));
assert.equal(manifest.assets.length,29);
for(const asset of manifest.assets)for(const variant of asset.variants){
 const path=join('dist',variant.path);
 await access(path);
 const metadata=await sharp(path).metadata();
 assert.equal(metadata.width,variant.width);
 assert.equal(metadata.height,variant.height);
 assert.equal(metadata.format,'webp');
}
const october=JSON.parse(await readFile('docs/identita/shooting-2026-10-15.json','utf8'));
const selected=october.assets.filter(asset=>asset.status==='selected');
assert.equal(selected.length,34);
for(const asset of selected)for(const width of [360,720,1440]){
 const path=join('dist','images','collection',`${asset.id}${width===1440?'':'-'+width}.webp`);
 const metadata=await sharp(path).metadata();
 assert.equal(metadata.width,width);assert.equal(metadata.format,'webp');
}
async function scan(directory){
 for(const entry of await readdir(directory,{withFileTypes:true})){
  const path=join(directory,entry.name);
  if(entry.isDirectory())await scan(path);
  else if(entry.name.endsWith('.html')){
   const html=await readFile(path,'utf8');
   for(const [link] of html.matchAll(/<a\b[\s\S]*?<\/a>/g))assert.ok(!/[→↗←↓➜➔➡]/u.test(link),`Arrow in linked control: ${path}`);
   checkedPages++;
  }
 }
}
await scan('dist');
const luggage=await readFile('dist/deposito-bagagli/index.html','utf8');
assert.ok(luggage.includes('https://bounce.com/stores/bologna/7ZRpUp'));
console.log(JSON.stringify({familyPhotographs:familyPhotos,familyPages:checkedFamilies,productPages:checkedProducts,newShootingPhotographs:selected.length,optimisedFiles:87+selected.length*3,linkedControlsWithoutArrows:checkedPages,bounceLinkPreserved:true}));
