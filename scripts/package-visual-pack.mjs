import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const repo=process.cwd();
const out=path.resolve(repo,'../../outputs/visual-pack-v1');
const manifest=JSON.parse(await fs.readFile(path.join(repo,'docs/identita/visual-pack-v1-manifest.json'),'utf8'));
await fs.mkdir(path.join(repo,'public/images/studies'),{recursive:true});
for(const folder of ['originals','web']) await fs.mkdir(path.join(out,folder),{recursive:true});
for(const entry of manifest.entries){
 await fs.copyFile(entry.original,path.join(out,'originals',entry.id+'.png'));
 for(const width of [1536,768]){
  const file=entry.id+(width===768?'-768':'')+'.webp';
  const dest=path.join(repo,'public/images/studies',file);
  await sharp(entry.original).resize({width}).webp({quality:87,effort:6}).toFile(dest);
  await fs.copyFile(dest,path.join(out,'web',file));
 }
 entry.bytes=(await fs.stat(path.join(repo,'public',entry.web))).size;
}
const json=JSON.stringify(manifest,null,2)+'\n';
await fs.writeFile(path.join(repo,'docs/identita/visual-pack-v1-manifest.json'),json);
await fs.writeFile(path.join(out,'manifest.json'),json);
console.log(JSON.stringify(manifest.entries.map(({id,bytes})=>({id,bytes}))));
