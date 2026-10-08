import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
// Optional argument: directory containing generated_images/ and upload/.
const base=resolve(process.argv[2]||'..')+'/';
const art=[
 ['stationery-ink','exec-89ad0b06-c3c4-4897-8093-b8e1b96656f9.png'],
 ['souvenir-ink','exec-fe3f31d8-cbca-438b-bb69-1dc013792d04.png'],
 ['essentials-ink','exec-86d9dff9-fa5b-41a7-ae25-c470fa91befe.png'],
 ['luggage-ink','exec-444adccd-d284-420a-b58c-f1b1f8fd5889.png'],
 ['phone-ink','exec-3fe01fb8-aa7c-472c-9d9a-933582b547dd.png'],
 ['party-ink','exec-d6c1012f-acbc-47f0-9ab5-1d286685b8a7.png'],
 ['sweets-ink','exec-3f78313f-752c-42a1-a9c1-ebfa759fec1e.png']
];
await mkdir('public/brand/ui',{recursive:true});
for(const [name,file] of art){
 const src=base+'generated_images/'+file;
 const meta=await sharp(src).metadata();
 if(!meta.hasAlpha)throw new Error('Missing alpha: '+name);
 for(const w of [320,600,960]){
  await sharp(src).resize({width:w}).webp({quality:84,alphaQuality:100}).toFile('public/brand/ui/'+name+(w===960?'':'-'+w)+'.webp');
 }
 console.log(name,meta.width,meta.height,'alpha',meta.hasAlpha);
}
