import {readFile,mkdir,stat} from 'node:fs/promises';
import sharp from 'sharp';
const manifest=JSON.parse(await readFile('docs/identita/shooting-2026-10-15.json','utf8'));
await mkdir('public/images/collection',{recursive:true});
let count=0;let bytes=0;
for(const asset of manifest.assets.filter(a=>a.status==='selected')){
 for(const width of [360,720,1440]){
  const path=`public/images/collection/${asset.id}${width===1440?'':'-'+width}.webp`;
  await sharp(asset.source).rotate().resize({width}).webp({quality:width===1440?86:82,effort:5}).toFile(path);
  bytes+=(await stat(path)).size;count++;
 }
}
console.log(JSON.stringify({photographs:count/3,responsiveFiles:count,megabytes:Math.round(bytes/1048576*10)/10}));
