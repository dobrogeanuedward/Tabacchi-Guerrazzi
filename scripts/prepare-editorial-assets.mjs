import sharp from 'sharp';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
const sourceDir=resolve(process.argv[2]||'../generated_images');
const manifest=JSON.parse(await readFile('docs/identita/editorial-production-manifest.json','utf8'));
await mkdir('public/images/editorial',{recursive:true});
const sizes={};
for(const asset of manifest.selected){
 const src=join(sourceDir,asset.sourceFile),orientation=asset.orientation;
 const meta=await sharp(src).metadata();
 if(orientation==='mobile'&&meta.height<=meta.width)throw new Error('Expected portrait: '+asset.id);
 if(orientation==='desktop'&&meta.width<=meta.height)throw new Error('Expected landscape: '+asset.id);
 sizes[asset.name]||={};
 for(const width of orientation==='mobile'?[480,960]:[800,1600]){
  const filename=asset.name+'-'+orientation+((width===960||width===1600)?'':'-'+width)+'.webp';
  const result=await sharp(src).resize({width}).webp({quality:82,effort:5}).toFile('public/images/editorial/'+filename);
  if(width===960||width===1600)sizes[asset.name][orientation]={width:result.width,height:result.height};
  console.log(filename,result.size);
 }
}
// Mechanical image metadata output consumed by picture/source dimensions.
await writeFile('src/data/editorial-assets.json',JSON.stringify(sizes,null,2)+'\n');
