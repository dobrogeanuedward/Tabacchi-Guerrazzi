import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {basename,resolve} from 'node:path';
import sharp from 'sharp';

const mapping=process.argv[2];
if(!mapping)throw new Error('Pass an absolute JSON mapping of selected ImageGen sources.');
const selected=JSON.parse(await readFile(mapping,'utf8'));
const output=resolve('public/images/catalogo');
await mkdir(output,{recursive:true});
const assets=[];
for(const image of selected){
 if(!/^[a-z0-9-]+$/.test(image.id))throw new Error('Invalid image identifier.');
 const variants=[];
 for(const width of [360,720,1440]){
  const filename=`${image.id}${width===1440?'':`-${width}`}.webp`;
  const info=await sharp(image.path).rotate().resize({width}).webp({quality:84,effort:5}).toFile(`${output}/${filename}`);
  variants.push({path:`/images/catalogo/${filename}`,width:info.width,height:info.height,bytes:info.size});
 }
 assets.push({id:image.id,kind:image.kind,source:basename(image.path),prompt:image.prompt,variants});
}
await writeFile('docs/identita/catalog-photography-2026-10-14.json',JSON.stringify({
 date:'2026-10-14',method:'built-in ImageGen',
 direction:'Natural portico daylight, ivory paper, pale wood, restrained cobalt, realistic product materials',
 familyScope:'26 distinct editorial family photographs; generated photographs do not authenticate models, packaging, brands or stock.',
 productScope:'Three cable-protector photographs recreated from IMG_5342, IMG_5346, IMG_5347 and IMG_5349 provided by the user. AkenA is the distributor named on the display; EUR 3.50 is its photographed displayed price.',
 assets
},null,2)+'\n');
console.log(JSON.stringify({selected:assets.length,variants:assets.length*3,totalBytes:assets.flatMap(asset=>asset.variants).reduce((n,v)=>n+v.bytes,0)}));
