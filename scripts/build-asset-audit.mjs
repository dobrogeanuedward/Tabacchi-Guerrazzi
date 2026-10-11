import {readFile,readdir,writeFile,mkdir,stat} from 'node:fs/promises';
import {resolve,relative,join,basename,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';

// Run after npm run build:static. No packages, network calls or build mutations.
// Optional: node scripts/build-asset-audit.mjs --dist path/to/export
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const distArgument=process.argv.indexOf('--dist');
const dist=resolve(root,distArgument<0?'dist':process.argv[distArgument+1]);
const output=join(root,'docs','identita');
const slash=value=>value.replaceAll('\\','/');
const unique=values=>[...new Set(values.filter(Boolean))];
const decode=value=>value.replace(/&#(?:x([0-9a-f]+)|(\d+));/gi,(_,hex,number)=>String.fromCodePoint(parseInt(hex||number,hex?16:10))).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&nbsp;',' ');
const text=value=>decode(value.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim());
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(([,key,a,b])=>[key,decode(a??b)]));
const local=value=>{if(!value||value.startsWith('data:'))return null;try {const path=/^https?:/.test(value)?new URL(value).pathname:value.split(/[?#]/)[0];return /^\/(?:images|brand)\//.test(path)?path:null;}catch{return null;}};
async function walk(directory){let entries;try{entries=await readdir(directory,{withFileTypes:true});}catch{return [];}const result=[];for(const entry of entries.sort((a,b)=>a.name.localeCompare(b.name))){const path=join(directory,entry.name);if(entry.isDirectory())result.push(...await walk(path));else result.push(path);}return result;}
const read=path=>readFile(join(root,path),'utf8');
const auditedComponents=['src/components/Page.astro','src/components/Home.astro','src/components/CigarRecord.astro','src/components/Catalog.astro','src/pages/approfondimenti/index.astro','src/pages/approfondimenti/[slug].astro'];
const componentSources=Object.fromEntries(await Promise.all(auditedComponents.map(async path=>[path,await read(path)])));
const [htmlFiles,publicFiles,globalCss,materialManifest,replacementRegister,pageSource,articleSource,shopSource,guideSource,catalogSource,cigarSource,educationSource,visualPack]=await Promise.all([
 walk(dist).then(files=>files.filter(path=>path.endsWith('.html'))),walk(join(root,'public')),
 read('src/styles/global.css'),read('docs/identita/materials-imagegen-manifest.json').then(JSON.parse),
 read('docs/identita/asset-replacement-register.json').then(JSON.parse),read('src/data/pages.ts'),
 read('src/data/articles.ts'),read('src/data/shop.ts'),read('src/components/Guide.astro'),read('src/data/catalog-assortment.ts'),read('src/data/cigar-records.ts'),read('src/data/materials-education.ts'),read('docs/identita/visual-pack-v1-manifest.json').then(JSON.parse).catch(()=>({entries:[]}))
]);
if(!htmlFiles.length)throw new Error(`No HTML export found at ${dist}; run npm run build:static first.`);
const inventoryPaths=publicFiles.filter(path=>/\.(?:webp|png|jpe?g|avif|svg)$/i.test(path)).map(path=>'/'+slash(relative(join(root,'public'),path)));
const inventorySet=new Set(inventoryPaths);
const materials=materialManifest.assets.map(asset=>({id:asset.id,paths:asset.paths,kind:'generated-decorative-material',original:asset.original,verification:'Decorative; does not certify a species, specimen, shop interior or product.'}));
const familyData=[...catalogSource.matchAll(/^\s*\[('(?:\\.|[^'\\])*'[^\n]+)\],?$/gm)].map(([,line])=>[...line.matchAll(/'((?:\\.|[^'\\])*)'/g)].map(([,value])=>value.replaceAll("\\'","'"))).filter(values=>values.length===8).map(([id,category,it,en,brand,descriptionIt,descriptionEn,art])=>({id,category,name:[it,en],brand,art,description:[descriptionIt,descriptionEn]}));
const cigarData=JSON.parse(cigarSource.match(/const sourceRecords[^=]*=(\[[\s\S]*?\n\]);/)?.[1]||'[]');
const tobaccoSource=await read('src/data/tobacco-information.ts');
const raptusSources=await read('docs/ricognizione/raptus-sources.json').then(JSON.parse).catch(()=>null);
const stringMap=(source,name)=>Object.fromEntries([...(source.match(new RegExp(`const\\s+${name}[^=]*=\\(?\\{([^}]+)\\}`))?.[1]||'').matchAll(/(?:'([^']+)'|(\w+))\s*:\s*'([^']*)'/g)].map(([,quoted,key,value])=>[quoted||key,value]));
const pageImages=stringMap(componentSources['src/components/Page.astro'],'pageImages');
const heroStudies=stringMap(componentSources['src/components/Page.astro'],'heroStudy');
const guideImages=stringMap(guideSource,'guideImages');
const guideStudies=stringMap(guideSource,'study');
const articleImages=stringMap(componentSources['src/pages/approfondimenti/[slug].astro'],'articleImages');
const articleStudies=stringMap(componentSources['src/pages/approfondimenti/[slug].astro'],'study');
const articleClusters=Object.fromEntries([...`${articleSource}\n${educationSource}\n${tobaccoSource}`.matchAll(/slug:'([^']+)'\s*,\s*cluster:'([^']+)'/g)].map(([,slug,cluster])=>[slug,cluster]));
const staticBaseImage=source=>source.match(/<Base\b[^>]*\bimage="([^"]+)"/)?.[1];
const scientificSources=Object.fromEntries([...educationSource.matchAll(/const (\w+)Source=\{label:'([^']+)',url:'([^']+)'\}/g)].map(([,id,label,url])=>[id,{label,url,sourceFile:'src/data/materials-education.ts',verification:'Existing editorial source; this offline audit does not reverify external content.'}]));
const referenceCatalog={
 'brand-proposal':{path:'C:/Users/dobro/Desktop/TABACCHI/proposta_tabaccheria_guerrazzi_dogo_senza_prezzi.pdf',use:'Material, editorial composition and typography direction only; final logo preserved.'},
 'definitive-logo-preserve':{path:'/brand/guerrazzi-logo.webp',use:'Existing definitive logo; do not regenerate.'},
 'primary-erica-reference':scientificSources.erica,
 'primary-lignotuber-reference':scientificSources.lignotuber,
 'primary-sepiolite-reference':scientificSources.sepiolite,
 'verified-shop-address':{address:'Via Guerrazzi 10/F, 40125 Bologna',sourceFile:'src/data/shop.ts',url:'https://bounce.com/stores/bologna/7ZRpUp',use:'Exact known point; do not derive unverified distance, hours or service conditions.'},
 'real-storefront-reference':{url:'https://bounce.com/stores/bologna/7ZRpUp',photo:replacementRegister.referenceSources?.find(source=>source.photo)?.photo,use:'Architectural reference only. Original reference photo is not republished.'},
 'original-shop-photos':{register:'docs/identita/asset-replacement-register.json',use:'Recover original files and sufficient angles; people require publication permission.'},
 'actual-non-tobacco-family-photos':{register:'docs/identita/asset-replacement-register.json#catalogFamilies',use:'Dedicated real family/variant photos, not generated exact product claims.'},
 'verified-brand-originals':{use:'Original files, verified rights and relationship are needed; do not invent marks or tobacco promotion.'},
 'authentic-raptus-assets':{source:'docs/ricognizione/raptus-sources.json',officialWebsite:'https://raptusparfum.it/',use:'Authentic Raptus fragrance, bottle and packaging photographs and original brand logo require supplied originals and publication rights. The official image URLs are references, not permission to republish. The fragrance study is generic amber glass and paper, not a Raptus bottle.'},
 'neutral-archive-treatment':{sourceFiles:['src/components/CigarRecord.astro','src/styles/global.css'],use:'Apply neutral archival identity with existing materials and no tobacco merchandising.'}
};
const groupBy=(rows,key)=>Object.fromEntries(unique(rows.map(row=>row[key])).map(value=>[value,rows.filter(row=>row[key]===value).length]));
const genericPalette={identity:'#0645c0',paper:'#f8f8f3',ink:'#171a22',secondary:'#132f61'};
const palettes={default:{...genericPalette,accent:'#0645c0',surface:'#f8f8f3'}};
for(const [,name,body]of globalCss.matchAll(/\.theme-([\w-]+)\s*\{([^}]+)\}/g))palettes[name]={...genericPalette,...Object.fromEntries([...body.matchAll(/--(accent|surface)\s*:\s*(#[\da-f]+)/gi)].map(([,key,value])=>[key,value]))};
const templateSlots={
 Home:{source:'src/components/Home.astro',role:'Entry point: shop identity, categories, services and luggage storage',required:['header-logo','footer-logo','favicon','hero','thumbnail','og','texture','brand-illustration'],optional:['real-shop-photo']},
 EducationalHub:{source:'src/components/Page.astro + EducationalHero.astro + MaterialAtlas.astro',role:'Neutral adult reference hub, terminology/materials and sources',required:['header-logo','footer-logo','favicon','hero-material','thumbnail','og','texture','neutral-editorial-illustration'],optional:['educational-diagram']},
 CigarRecord:{source:'src/components/CigarRecord.astro',role:'Neutral adult archival name record; no tobacco merchandising',required:['header-logo','footer-logo','favicon','archival-theme','neutral-editorial-illustration','og','texture'],optional:[]},
 FamilyDetail:{source:'src/components/FamilyDetail.astro',role:'Non-tobacco item-family explanation, not an individual SKU',required:['header-logo','footer-logo','favicon','hero','og','texture'],optional:['real-family-photo']},
 Catalog:{source:'src/components/Catalog.astro',role:'Non-tobacco family directory with search and filters',required:['header-logo','footer-logo','favicon','thumbnail','og','texture'],optional:['real-family-photo']},
 GuideResearch:{source:'src/components/Guide.astro',role:'Sourced botanical, material, historical or terminology explanation for adults',required:['header-logo','footer-logo','favicon','og','texture'],optional:['educational-diagram','neutral-editorial-illustration']},
 GuideInformation:{source:'src/components/Guide.astro',role:'Neutral adult information on terminology, law and packaging',required:['header-logo','footer-logo','favicon','og','texture'],optional:['neutral-editorial-illustration']},
 GuidePractical:{source:'src/components/Guide.astro',role:'Practical preparation and choices; readable text remains primary',required:['header-logo','footer-logo','favicon','og'],optional:['neutral-editorial-illustration','educational-diagram','texture']},
 ArticleInformation:{source:'src/pages/approfondimenti/[slug].astro',role:'Sourced neutral adult educational article',required:['header-logo','footer-logo','favicon','og','texture'],optional:['educational-diagram','neutral-editorial-illustration']},
 ArticlePractical:{source:'src/pages/approfondimenti/[slug].astro',role:'Practical editorial article linked to its category and guide',required:['header-logo','footer-logo','favicon','og'],optional:['neutral-editorial-illustration','texture']},
 Journal:{source:'src/pages/approfondimenti/index.astro',role:'Editorial cluster directory',required:['header-logo','footer-logo','favicon','og'],optional:['thumbnail','texture']},
 LuggagePage:{source:'src/components/Page.astro',role:'Local Bounce service, address and booking instructions in IT/EN',required:['header-logo','footer-logo','favicon','hero','og','brand-illustration'],optional:['texture','educational-diagram','real-shop-photo']},
 AssortmentPage:{source:'src/components/Page.astro',role:'Non-tobacco category orientation with item families and useful links',required:['header-logo','footer-logo','favicon','hero','og','texture','brand-illustration'],optional:['real-shop-photo','real-family-photo']},
 AdultInformationPage:{source:'src/components/Page.astro',role:'Neutral adult information about a regulated category; no product merchandising or promotional asset requirement',required:['header-logo','footer-logo','favicon','og'],optional:['texture','brand-illustration']},
 Page:{source:'src/components/Page.astro',role:'Shop, services, gifts, games, history, contact or reviews',required:['header-logo','footer-logo','favicon','og'],optional:['hero','texture','brand-illustration','real-shop-photo']},
 Legal:{source:'src/pages/privacy.astro or src/pages/cookie.astro',role:'Legal information; no decorative image requirement beyond shared identity',required:['header-logo','footer-logo','favicon'],optional:[]},
 NotFound:{source:'src/pages/404.astro',role:'Error recovery and navigation',required:['header-logo','footer-logo','favicon'],optional:[]}
};
const researchSlugs=['radica-erica-arborea','schiuma-di-mare-sepiolite','pipe-materiali-storia','sigaro-struttura-termini','nicotiana-tabacum-botanica'];
const informationSlugs=['sigari-termini-informazioni','tabacco-minori-documenti','tabacco-confezioni-avvertenze'];
const informationArticleSlugs=['sigari-sigaretti-informazioni-termini','tabacco-18-anni-conferma-documento','tabacco-confezioni-fonti-informazione','radica-non-semplice-radice','schiuma-mare-nome-minerale','nomi-botanici-denominazioni-tabacco'];
const assortmentSlugs=['profumi-raptus','cartoleria','souvenir-bologna','accessori-telefono','feste-e-compleanni','piccole-necessita','dolciumi','accendini-e-accessori','ricevitoria'];
const canonicalPlans=[
 {id:'archive-folio',kind:'neutral-editorial-illustration',role:'Blank archive folio, index cards and quiet cobalt/ivory editorial composition',referenceNeeds:['brand-proposal','definitive-logo-preserve'],constraint:'No cigars, tobacco packs, brand logos, consumption or merchandising. Existing archive-reference.webp is a usable base asset.'},
 {id:'botanical-erica-study',kind:'educational-diagram',role:'Botanical visual study of Erica arborea and the root–shoot transition',referenceNeeds:['primary-erica-reference','primary-lignotuber-reference'],constraint:'Sourced botanical illustration, visibly an illustration; generated details must not be treated as identification evidence.'},
 {id:'mineral-sepiolite-study',kind:'educational-diagram',role:'Quiet pale mineral study supporting the distinction between appearance and composition',referenceNeeds:['primary-sepiolite-reference'],constraint:'No pipes or tobacco products. A generated specimen is illustrative, not mineral certification.'},
 {id:'travel-bologna-map',kind:'neutral-editorial-illustration',displayName:'Travel, luggage and abstract portico illustration',role:'Generic luggage and abstract portico motif for the travel/service cluster; not geographical cartography',referenceNeeds:['brand-proposal'],constraint:'The legacy machine ID contains map, but the asset is a generic editorial travel illustration, not a geographic map, actual building, measured route or distance. No invented shop interior, custody conditions or service proof.'},
 {id:'gifting-still-life',kind:'neutral-editorial-illustration',role:'Clean gift paper, folded card and ribbon material composition',referenceNeeds:['brand-proposal'],constraint:'Generic non-tobacco illustration; no claim of exact stock, gift-wrapping service or brand affiliation.'},
 {id:'stationery-paper-study',kind:'neutral-editorial-illustration',role:'Paper, card and stationery material composition in the existing identity',referenceNeeds:['brand-proposal'],constraint:'Generic non-tobacco illustration; no reconstructed packaging, SKU or invented brand mark.'},
 {id:'fragrance-paper-study',kind:'neutral-editorial-illustration',role:'Generic amber glass and paper scent blotter composition for the fragrance category',referenceNeeds:['brand-proposal'],constraint:'Generic material illustration only: not a Raptus bottle, fragrance, atomizer, label, pack, brand logo or photograph of authentic stock. Does not replace authentic product originals or establish permission to use official brand images.'}
];
const additionalPlans=[
 {id:'real-shop-photos',kind:'real-reference-replacement',role:'Replace generated shop/interior and people scenes with verified real references',constraint:'Needs original files, sufficient angles and permission for people; do not invent interiors.'},
 {id:'real-family-photos',kind:'real-reference-replacement',role:`Dedicated authentic photographs of the ${familyData.length} non-tobacco item families and any future approved individual products`,constraint:'Needs actual original product photographs, exact models/variants, rights and approval. Generic illustrations never count as authentic product photographs, package fidelity, stock or availability evidence.'},
 {id:'verified-brand-originals',kind:'original-artwork',role:'Optional authentic brand marks only when original files, rights and current relationship are verified',constraint:'Brand names in existing text do not establish rights to use a logo. Obtain authentic approved originals; do not regenerate or imitate brand logos or create tobacco promotion.'},
 {id:'authentic-raptus-assets',kind:'original-artwork',role:'Authentic Raptus fragrance/bottle/packaging photographs and original Raptus brand artwork for the second mandate',constraint:'The user confirms all 28 personal fragrances: Raptus I–XXIII and five 50 ml names. This does not establish daily quantities, each available format, SKU/EAN or image/logo rights. Obtain real product originals or written permission for official reference images and logo; never pass the generic fragrance-paper-study off as a Raptus bottle or packaging.'}
];
const planPaths=id=>inventoryPaths.filter(path=>new RegExp(`(?:^|/)${id}(?:-\\d+)?\\.[a-z]+$`,'i').test(path));
const topicPlans=slug=>{
 const result=[];
 if(slug===''||slug==='sigari'||slug.startsWith('sigari/')||['storia-e-serrande','marchi-e-competenze'].includes(slug)||/pipe-materiali-storia|sigaro-struttura-termini|sigari-termini-informazioni|tabacco-|sigari-sigaretti/.test(slug))result.push('archive-folio');
 if(slug==='pipe-e-tabacchi-da-pipa'||/radica|erica/.test(slug))result.push('botanical-erica-study');
 if(slug==='pipe-e-tabacchi-da-pipa'||/schiuma|sepiolite/.test(slug))result.push('mineral-sepiolite-study');
 if(slug===''||['servizi','deposito-bagagli','contatti','souvenir-bologna'].includes(slug)||/raggiungere|guerrazzi-via-guerrazzi|servizi-negozio|giochi-viaggio/.test(slug))result.push('travel-bologna-map');
 if(slug===''||['idee-regalo','feste-e-compleanni','giochi-e-giocattoli'].includes(slug)||/scegliere-un-regalo|regalo-|piccolo-pensiero|scegliere-regalo/.test(slug))result.push('gifting-still-life');
 if(slug===''||slug==='cartoleria'||/assortimento\/(?:quaderni|penne|evidenziatori|colle|cartelline|etichette)$/.test(slug))result.push('stationery-paper-study');
 if(['','profumi-raptus','assortimento/profumi-raptus','catalogo','idee-regalo','marchi-e-competenze'].includes(slug))result.push('fragrance-paper-study');
 return unique(result);
};
const templateFor=(slug,html)=>{
 if(slug==='404.html')return 'NotFound';if(['privacy','cookie'].includes(slug))return 'Legal';
 if(slug==='')return 'Home';if(/^sigari\//.test(slug))return 'CigarRecord';if(/^assortimento\//.test(slug))return 'FamilyDetail';if(slug==='catalogo')return 'Catalog';
 if(slug.startsWith('schede/')){const id=slug.slice(7);return researchSlugs.includes(id)?'GuideResearch':informationSlugs.includes(id)?'GuideInformation':'GuidePractical';}
 if(slug==='approfondimenti')return 'Journal';if(slug.startsWith('approfondimenti/'))return informationArticleSlugs.includes(slug.slice(16))?'ArticleInformation':'ArticlePractical';
 if(['sigari','pipe-e-tabacchi-da-pipa'].includes(slug))return 'EducationalHub';if(slug==='deposito-bagagli')return 'LuggagePage';
 if(['accendini-e-accessori','ricevitoria'].includes(slug))return 'AdultInformationPage';
 return assortmentSlugs.includes(slug)?'AssortmentPage':'Page';
};
function selectedCssAssets(css,classSet,idSet){
 const output=[];
 for(const [,selectors,body]of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)){
  if(!/url\(/.test(body))continue;
  const matchingSelectors=selectors.split(',').filter(selector=>{
   if(selector.trim().startsWith('@'))return false;
   const classes=[...selector.matchAll(/\.([a-zA-Z_][\w-]*)/g)].map(match=>match[1]);
   const ids=[...selector.matchAll(/#([a-zA-Z_][\w-]*)/g)].map(match=>match[1]);
   return classes.every(name=>classSet.has(name))&&ids.every(name=>idSet.has(name));
  });
  const chromeOnly=matchingSelectors.length&&matchingSelectors.every(selector=>/\.(?:site-menu|site-header|category-dropdown|menu-top|site-footer)(?:\b|[\s.:#>])/.test(selector));
  if(matchingSelectors.length)for(const [,value]of body.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)){const path=local(value);if(path)output.push({path,role:chromeOnly?'chrome-texture':'texture',detectedBy:'matching-css-selector'});}
 }
 return output;
}
function markupAssets(fragment,role){
 const output=[];
 for(const match of fragment.matchAll(/<(?:img|source)\b[^>]*>/g)){
  const values=attrs(match[0]);let kind=role;
  if(/brand-logo/.test(values.class||''))kind=role==='header'?'header-logo':role==='footer'?'footer-logo':'brand-signature';
  else if(/\/(?:brand\/ui|images\/materials)\//.test(values.src||''))kind=/\/materials\//.test(values.src||'')?'material':'brand-illustration';
  else if(/\/images\/studies\//.test(values.src||''))kind=/botanical-erica-study|mineral-sepiolite-study/.test(values.src||'')?'educational-diagram':'neutral-editorial-illustration';
  for(const candidate of [values.src,...(values.srcset||'').split(',').map(part=>part.trim().split(/\s+/)[0])]){const path=local(candidate);if(path)output.push({path,role:kind,detectedBy:'img-or-source'});}
 }
 return output;
}
function sourceOg(slug,template,theme,mainAssets){
 const staticSource={Home:'src/components/Home.astro',CigarRecord:'src/components/CigarRecord.astro',Catalog:'src/components/Catalog.astro',Journal:'src/pages/approfondimenti/index.astro'}[template];
 if(staticSource&&staticBaseImage(componentSources[staticSource]))return [staticBaseImage(componentSources[staticSource])];
 if(['EducationalHub','LuggagePage','AssortmentPage','AdultInformationPage','Page'].includes(template)){
  if(heroStudies[slug])return [`/images/studies/${heroStudies[slug]}.webp`];
  if(pageImages[slug])return [pageImages[slug]];
 }
 if(['ArticleInformation','ArticlePractical'].includes(template)){
  const id=slug.slice('approfondimenti/'.length);
  if(articleStudies[id])return [`/images/studies/${articleStudies[id]}.webp`];
  if(articleImages[articleClusters[id]])return [articleImages[articleClusters[id]]];
 }
 if(['GuideResearch','GuideInformation','GuidePractical'].includes(template)){
  const id=slug.slice('schede/'.length);
  if(guideStudies[id])return [`/images/studies/${guideStudies[id]}.webp`];
  if(guideImages[id])return [guideImages[id]];
  if(template!=='GuidePractical')return [`/images/materials/${theme==='radica'?'forest':'wood'}.webp`];
 }
 if(template==='FamilyDetail'&&slug==='assortimento/profumi-raptus')return ['/images/studies/fragrance-paper-study.webp'];
 if(template==='FamilyDetail')return unique(mainAssets.filter(asset=>/\/images\/(?:editorial|games)/.test(asset.path)).map(asset=>asset.path.replace('-desktop-800.webp','-desktop.webp'))).slice(0,1);
 // Remaining data-driven category/family source, or the Base default.
 const photo=mainAssets.find(asset=>/\/images\/editorial\/.*-desktop\.webp$/.test(asset.path));
 if(photo)return [photo.path];
 const generic=mainAssets.find(asset=>/^\/images\/(?:incontro|regalo|scelta)\.webp$/.test(asset.path));
 return [generic?.path||(['AssortmentPage','AdultInformationPage','Page'].includes(template)?`/images/materials/${({utility:'blue',bottega:'terracotta',regalo:'paper',gioco:'paper',cedro:'wood',radica:'forest',notte:'night'})[theme]||'paper'}.webp`:'/images/scelta.webp')];
}
const rows=[];
for(const file of htmlFiles){
 const html=await readFile(file,'utf8');const exportedPath=slash(relative(dist,file));
 const route=exportedPath==='index.html'?'/':exportedPath.endsWith('/index.html')?'/'+exportedPath.slice(0,-10):'/'+exportedPath;
 const lang=attrs(html.match(/<html\b[^>]*>/)?.[0]||'').lang||'it';
 const neutralRoute=route.replace(/^\/en(?=\/|$)/,'/').replace(/\/{2,}/g,'/');const slug=neutralRoute.replace(/^\/|\/$/g,'');
 const template=templateFor(slug,html);const matrix=templateSlots[template];
 const bodyAttrs=attrs(html.match(/<body\b[^>]*>/)?.[0]||'');const bodyClasses=(bodyAttrs.class||'').split(/\s+/).filter(Boolean);
 const theme=bodyClasses.find(name=>name.startsWith('theme-'))?.slice(6)||'default';
 const classSet=new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap(([,value])=>value.split(/\s+/)));
 const idSet=new Set([...html.matchAll(/id="([^"]*)"/g)].map(([,value])=>value));
 const header=html.match(/<header\b[^>]*class="[^"]*site-header[^"]*"[^>]*>[\s\S]*?<\/header>/)?.[0]||'';
 const footer=html.match(/<footer\b[^>]*class="[^"]*site-footer[^"]*"[^>]*>[\s\S]*?<\/footer>/)?.[0]||'';
 const main=html.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0]||'';
 const mainAssets=markupAssets(main,'main-image');
 const linkedCss=[];for(const [,tag]of html.matchAll(/(<link\b[^>]*>)/g)){const a=attrs(tag);if(a.rel==='stylesheet'&&a.href?.startsWith('/')){try{linkedCss.push(await readFile(join(dist,a.href),'utf8'));}catch{}}}
 const inlineCss=[...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(([,css])=>css).join('\n');
 const cssAssets=selectedCssAssets([...linkedCss,inlineCss].join('\n'),classSet,idSet);
 const metas=[...html.matchAll(/<meta\b[^>]*>/g)].map(match=>attrs(match[0]));const ogPaths=metas.filter(meta=>meta.property==='og:image'||meta.name==='twitter:image').map(meta=>local(meta.content)).filter(Boolean);
 const rawAssets=[...markupAssets(header,'header'),...markupAssets(footer,'footer'),...mainAssets,...markupAssets(html.match(/<dialog[\s\S]*?<\/dialog>/)?.[0]||'','dialog'),...cssAssets,...ogPaths.map(path=>({path,role:'og',detectedBy:'social-meta'}))];
 const favicon=attrs(html.match(/<link[^>]*rel="icon"[^>]*>/)?.[0]||'').href;if(local(favicon))rawAssets.push({path:local(favicon),role:'favicon',detectedBy:'favicon-link'});
 const appliedAssets=unique(rawAssets.map(asset=>asset.path)).map(path=>({path,exists:inventorySet.has(path),roles:unique(rawAssets.filter(asset=>asset.path===path).map(asset=>asset.role)),detectedBy:unique(rawAssets.filter(asset=>asset.path===path).map(asset=>asset.detectedBy))}));
 const appliedSet=new Set(appliedAssets.map(asset=>asset.path));const ogCandidates=sourceOg(slug,template,theme,mainAssets);
 const dataRecord=template==='FamilyDetail'?familyData.find(item=>item.id===slug.split('/')[1]):template==='CigarRecord'?cigarData.find(item=>item.slug===slug.split('/')[1]):undefined;
 const planIDs=topicPlans(slug);
 for(const plan of canonicalPlans)if([...mainAssets.map(asset=>asset.path),...ogCandidates].some(path=>planPaths(plan.id).includes(path)))planIDs.push(plan.id);
 const provisional=appliedAssets.filter(asset=>/^\/images\/(?:hero\/|editorial\/|(?:games|gifts|services|scelta|incontro|regalo)\.webp)/.test(asset.path)).map(asset=>asset.path);
 if(provisional.length)planIDs.push('real-shop-photos');if(['FamilyDetail','Catalog'].includes(template))planIDs.push('real-family-photos');
 if(slug==='marchi-e-competenze'||slug==='schede/marchi-trattati'||(template==='FamilyDetail'&&dataRecord?.brand))planIDs.push('verified-brand-originals');
 if(['profumi-raptus','assortimento/profumi-raptus','catalogo','idee-regalo','marchi-e-competenze'].includes(slug))planIDs.push('authentic-raptus-assets');
 const references=[];
 if(provisional.length)references.push({id:'original-shop-photos',need:'Recover actual shop/people files and multiple angles; compare with asset-replacement-register.json before replacement.',blocking:'photographic-replacement'});
 if(['FamilyDetail','Catalog'].includes(template))references.push({id:'actual-non-tobacco-family-photos',need:'Dedicated original photos of real articles/variants; no SKU, stock or packaging inferred from AI.',blocking:'dedicated-family-photo'});
 if(template==='CigarRecord')references.push({id:'neutral-archive-treatment',need:'Preserve neutral record and verified names; no tobacco/brand marketing photography required or planned.',blocking:false});
 for(const id of planIDs){const plan=canonicalPlans.find(plan=>plan.id===id);if(plan)references.push(...plan.referenceNeeds.map(reference=>({id:reference,need:plan.constraint,blocking:plan.kind==='educational-diagram'?'scientific-illustration-verification':false})));}
 if(planIDs.includes('verified-brand-originals'))references.push({id:'verified-brand-originals',need:'Any optional brand logo requires an authentic original file, rights and confirmed relationship. Existing textual names are not proof of logo rights. No reconstructed or generated mark.',blocking:'brand-artwork'});
 if(planIDs.includes('authentic-raptus-assets'))references.push({id:'authentic-raptus-assets',need:'Second mandate: actual Raptus bottle and pack photographs and authentic original logo with publication rights. All 28 personal fragrances are confirmed by the user; daily quantities, every format, SKU/EAN and rights are separate. Generic fragrance study is not a Raptus product.',blocking:'authentic-product-and-brand-originals'});
 const slots=[];const addSlot=(slot,required,status,assets=[],notes='')=>slots.push({slot,required,status,assets:unique(assets),notes});
 for(const slot of unique([...matrix.required,...matrix.optional])){
  const required=matrix.required.includes(slot);let assets=[];let status='not-required';let notes='';
  if(['header-logo','footer-logo','favicon'].includes(slot)){assets=appliedAssets.filter(asset=>asset.roles.includes(slot)).map(asset=>asset.path);status=assets.length?'applied':'missing';}
  else if(slot==='og'){assets=unique([...ogPaths,...ogCandidates]);status=ogPaths.length?'applied':assets.every(path=>inventorySet.has(path))?'available-not-emitted-launch-gated':'source-reference-missing';notes='Source asset and social output are separate. Noindex/domain configuration is not changed by this audit.';}
  else if(slot==='archival-theme'){status=theme==='default'?'present-but-not-applied':'applied';assets=['src/styles/global.css#theme-cedro'];notes='CigarRecord should inherit the neutral archival/editorial treatment. Existing theme rules are available; no tobacco product photograph is needed.';}
  else if(slot==='texture'||slot==='hero-material'){assets=appliedAssets.filter(asset=>asset.roles.includes('texture')||asset.roles.includes('material')).map(asset=>asset.path);status=assets.length?'applied':required?'present-but-not-applied':'optional-not-applied';if(!assets.length)assets=['/images/materials/paper.webp',...(theme==='radica'?['/images/materials/forest.webp']:[])];notes='Seven general material textures already exist. A texture used only in navigation chrome does not satisfy the content texture slot. CSS matching is static and includes possible responsive states.';}
  else if(slot==='hero'){assets=mainAssets.filter(asset=>/^\/images\//.test(asset.path)&&!asset.path.includes('/materials/')).map(asset=>asset.path);if(!assets.length)assets=mainAssets.filter(asset=>asset.path.startsWith('/brand/ui/')).map(asset=>asset.path);status=assets.length?(provisional.some(path=>assets.includes(path))?'applied-provisional':'applied'):required?'missing':'optional-not-applied';}
  else if(slot==='thumbnail'){assets=mainAssets.filter(asset=>/\/images\/(?:editorial|materials)|\/brand\/ui|\/images\/(?:games|gifts)/.test(asset.path)).map(asset=>asset.path);status=assets.length?'applied':required?'missing':'optional-not-applied';notes='Shared category/family images are intentionally not treated as exact product photos.';}
  else if(slot==='brand-illustration'){assets=mainAssets.filter(asset=>asset.path.startsWith('/brand/ui/')).map(asset=>asset.path);status=assets.length?'applied':required?'present-but-not-applied':'optional-not-applied';if(!assets.length)assets=['/brand/ui/portico-ink.webp'];}
  else if(slot==='neutral-editorial-illustration'||slot==='educational-diagram'){
   const relevant=canonicalPlans.filter(plan=>planIDs.includes(plan.id)&&(slot==='educational-diagram'?plan.kind==='educational-diagram':plan.kind==='neutral-editorial-illustration'));
   assets=relevant.flatMap(plan=>planPaths(plan.id));
   if(slot==='neutral-editorial-illustration'&&(template==='CigarRecord'||(template==='EducationalHub'&&slug==='sigari')))assets.push('/brand/ui/archive-reference.webp');
   assets=unique(assets);status=assets.some(path=>appliedSet.has(path))?'applied':assets.length?'present-but-not-applied':relevant.length?'planned-not-yet-generated':'optional-not-applied';
   notes=slot==='educational-diagram'?'Educational illustrations require source verification and an illustrative label; not photographs or specimen identification.':'Reuse existing brand UI where suitable; new compositions must stay neutral and preserve the definitive logo.';
  }
  else if(slot==='real-shop-photo'||slot==='real-family-photo'){status='requires-real-reference';notes=slot==='real-family-photo'?'Actual non-tobacco articles and variants must be photographed and approved.':'Original shop files and consistent angles must be recovered; provisional generated scenes do not count as real photos.';}
  addSlot(slot,required,status,assets,notes);
 }
 const gaps=slots.filter(slot=>!['applied','not-required','optional-not-applied'].includes(slot.status)).map(({slot,required,status,notes})=>({slot,required,status,notes}));
 const broken=appliedAssets.filter(asset=>!asset.exists);for(const asset of broken)gaps.push({slot:'broken-asset-reference',required:true,status:'missing',notes:asset.path});
 const priority=broken.length?'critical':template==='CigarRecord'||['Home','LuggagePage','EducationalHub','Catalog'].includes(template)?'high':template==='Legal'||template==='NotFound'?'low':'medium';
 const status=broken.length?'broken-reference':template==='CigarRecord'&&theme==='default'?'theme-application-needed':provisional.length?'covered-with-provisional-assets':gaps.some(gap=>gap.required&&['missing','present-but-not-applied','planned-not-yet-generated'].includes(gap.status))?'application-or-new-asset-needed':'covered';
 const title=text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]||'');const heading=text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]||'');
 rows.push({route,lang,sharedAssetKey:neutralRoute,htmlFile:slash(relative(root,file)),template,templateSource:matrix.source,title,heading,theme,expectedTheme:template==='CigarRecord'?'neutral-archive/cedro':theme,palette:palettes[theme]||palettes.default,role:matrix.role,dataReference:dataRecord?template==='FamilyDetail'?{source:'src/data/catalog-assortment.ts',id:dataRecord.id,category:dataRecord.category,mentionedBrands:dataRecord.brand,existingIllustration:`/brand/ui/${dataRecord.art}.webp`}:{source:'src/data/cigar-records.ts',slug:dataRecord.slug,group:dataRecord.group,reference:dataRecord.reference,photoReference:dataRecord.photo,scope:'Name provenance only; no tobacco product photography or promotion planned.'}:null,requiredSlots:slots,existingAssets:appliedAssets,availableButNotApplied:unique(slots.filter(slot=>slot.status==='present-but-not-applied').flatMap(slot=>slot.assets)),assetGaps:gaps,priority,status,referenceNeeds:unique(references.map(reference=>JSON.stringify(reference))).map(value=>JSON.parse(value)),assetPlanIDs:unique(planIDs),indexing:{robots:metas.find(meta=>meta.name==='robots')?.content||'',ogEmitted:ogPaths.length>0},notes:template==='CigarRecord'?['Neutral archival record. A product/brand tobacco photograph is neither required nor planned.']:[]});
}
rows.sort((a,b)=>a.route.localeCompare(b.route));
const planRows=[...canonicalPlans,...additionalPlans].map(plan=>{const generated=visualPack.entries.find(entry=>entry.id===plan.id);return {...plan,existingPaths:planPaths(plan.id),routes:rows.filter(row=>row.assetPlanIDs.includes(plan.id)).map(row=>row.route),sharedAssetKeys:unique(rows.filter(row=>row.assetPlanIDs.includes(plan.id)).map(row=>row.sharedAssetKey)),status:planPaths(plan.id).length?'asset-present-see-route-application':plan.kind==='real-reference-replacement'||plan.kind==='original-artwork'?'requires-originals-and-verification':'planned',...(generated?{generationProvenance:{manifest:'docs/identita/visual-pack-v1-manifest.json',original:generated.original,paths:[generated.web,generated.preview],scope:generated.scope,generatedAt:generated.generatedAt}}:{}),...(plan.id==='travel-bologna-map'?{isGeographicMap:false}:{}),requiresAuthenticOriginals:['real-reference-replacement','original-artwork'].includes(plan.kind),isAuthenticProductPhoto:generated?false:null,isAuthenticBrandLogo:generated?false:null};});
const inventory=await Promise.all(inventoryPaths.map(async path=>({path,bytes:(await stat(join(root,'public',path))).size,kind:path.includes('/materials/')?'generated-decorative-material':path.includes('/studies/')?'generated-educational-editorial-illustration':path.includes('/brand/ui/')?'brand-ui-illustration':/guerrazzi-logo|favicon/.test(path)?'definitive-brand-artwork':'editorial-or-legacy-image',appliedRoutes:rows.filter(row=>row.existingAssets.some(asset=>asset.path===path)).map(row=>row.route),status:rows.some(row=>row.existingAssets.some(asset=>asset.path===path))?'applied':'present-but-not-applied'})));
const requestRouteMappings=[
 {requestID:'global-hierarchy',request:'Readable section names, concrete headings, contained cards and explicit opening actions',routes:rows.map(row=>row.route),assetPlanIDs:[]},
 {requestID:'identity-and-materials',request:'Clean impactful identity inspired by the proposal; preserve the final logo and use existing general ImageGen materials',routes:rows.filter(row=>!['Legal','NotFound'].includes(row.template)).map(row=>row.route),assetPlanIDs:canonicalPlans.map(plan=>plan.id)},
 {requestID:'luggage-bounce-geo',request:'Prominent luggage storage and correct local Bounce orientation in IT/EN',routes:rows.filter(row=>row.assetPlanIDs.includes('travel-bologna-map')).map(row=>row.route),assetPlanIDs:['travel-bologna-map','real-shop-photos']},
 {requestID:'neutral-adult-editorial',request:'Sourced materials, terminology, botany and history, with consistent neutral archive treatment',routes:rows.filter(row=>['EducationalHub','CigarRecord','GuideResearch','GuideInformation','ArticleInformation'].includes(row.template)).map(row=>row.route),assetPlanIDs:['archive-folio','botanical-erica-study','mineral-sepiolite-study'],excluded:'Tobacco product/brand marketing photographs, sales catalogue, stock or buying SEO.'},
 {requestID:'real-photo-replacements',request:'Recover originals and replace provisional shop/family scenes from sufficient real references',routes:rows.filter(row=>row.assetPlanIDs.some(id=>['real-shop-photos','real-family-photos'].includes(id))).map(row=>row.route),assetPlanIDs:['real-shop-photos','real-family-photos']}
];
requestRouteMappings.push({requestID:'raptus-personal-fragrances',request:'Raptus personal fragrance category and family in IT/EN, with all 28 names confirmed by the user and no invented SKU or quantities',routes:rows.filter(row=>row.assetPlanIDs.includes('authentic-raptus-assets')).map(row=>row.route),assetPlanIDs:['fragrance-paper-study','authentic-raptus-assets'],evidence:'docs/ricognizione/raptus-sources.json',limits:'Generic illustration is not an authentic Raptus bottle or packaging. Product originals and brand logo rights remain second-mandate dependencies.'});
let commit='unknown';try{commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();}catch{}
const map={version:1,generatedAt:new Date().toISOString(),sourceCommit:commit,scope:'Autorità',basis:{export:slash(relative(root,dist)),method:'One row per exported HTML file. DOM img/source/favicon/OG plus stylesheet selectors matched to exported classes/IDs. Static CSS matching reports possible state/responsive usage, not browser-computed visibility.',sources:['src/data/pages.ts','src/data/articles.ts','src/data/shop.ts','src/components/Guide.astro','docs/identita/materials-imagegen-manifest.json','docs/identita/asset-replacement-register.json'],dataSourceBytes:{pages:pageSource.length,articles:articleSource.length,shop:shopSource.length,guide:guideSource.length},limits:['No hidden browser state or network extraction.','IT/EN route pairs share assets through sharedAssetKey.','OG asset availability is separate from launch-gated metadata emission.','No missing-image claim is made merely because an optional illustration is absent.','No new tobacco product/brand photography or marketing assets are planned.','Original shop/product photos and external brand marks require originals and verification.']},counts:{htmlRoutes:rows.length,sharedAssetKeys:unique(rows.map(row=>row.sharedAssetKey)).length,languages:groupBy(rows,'lang'),templates:groupBy(rows,'template'),statuses:groupBy(rows,'status'),priorities:groupBy(rows,'priority'),publicImageFiles:inventory.length,publicImageFilesApplied:inventory.filter(asset=>asset.status==='applied').length,publicImageFilesPresentNotApplied:inventory.filter(asset=>asset.status==='present-but-not-applied').length,generalMaterials:materials.length,brandUIFiles:inventory.filter(asset=>asset.path.startsWith('/brand/ui/')).length,cigarRecordThemeMissing:rows.filter(row=>row.template==='CigarRecord'&&row.theme==='default').length,brokenAssetReferences:rows.reduce((sum,row)=>sum+row.existingAssets.filter(asset=>!asset.exists).length,0)},templateSlotMatrix:templateSlots,existingGeneralMaterials:materials.map(material=>({...material,appliedRoutes:unique(rows.filter(row=>row.existingAssets.some(asset=>material.paths.includes(asset.path))).map(row=>row.route)),status:material.paths.some(path=>inventorySet.has(path))?'present':'missing'})),assetPlans:planRows,requestRouteMappings,realPhotoReplacementRegister:{path:'docs/identita/asset-replacement-register.json',decision:replacementRegister.decision},inventory,routes:rows};
const universalSlots=unique(Object.values(templateSlots).flatMap(template=>[...template.required,...template.optional]));
map.templateSlotMatrix=Object.fromEntries(Object.entries(templateSlots).map(([name,template])=>[name,{...template,slotPolicy:Object.fromEntries(universalSlots.map(slot=>[slot,template.required.includes(slot)?'required':template.optional.includes(slot)?'optional':'not-required']))}]));
map.referenceCatalog=referenceCatalog;
map.existingVisualPack={manifest:'docs/identita/visual-pack-v1-manifest.json',baseAssets:visualPack.entries.length,entries:visualPack.entries.map(entry=>({id:entry.id,paths:[entry.web,entry.preview],scope:entry.scope,contentRole:entry.id==='travel-bologna-map'?'Generic luggage and abstract portico illustration; not a geographical map.':'Generated educational/editorial illustration; not an authenticated specimen, commercial product photograph or shop photograph.',isGeographicMap:false,isAuthenticProductPhoto:false,isAuthenticBrandLogo:false,appliedRoutes:rows.filter(row=>row.existingAssets.some(asset=>[entry.web,entry.preview].includes(asset.path))).map(row=>row.route)}))};
map.counts.visualPackBaseAssets=visualPack.entries.length;
map.counts.visualPackFiles=inventoryPaths.filter(path=>path.startsWith('/images/studies/')).length;
map.basis.sources.push('docs/identita/visual-pack-v1-manifest.json');
map.basis.sources.push(...auditedComponents,'src/data/tobacco-information.ts');
map.basis.minimumSlotCoverageOnly=true;
map.basis.designQualityApproval=false;
map.basis.limits.push('This is minimum asset/slot coverage, not design-quality, usability, accessibility or Awwwards approval. A covered route can still require visual iteration and browser review.');
map.basis.limits.push('The generic fragrance-paper-study does not represent a Raptus bottle, package, label or authentic product photograph. Brand image references are not publication rights.');
if(raptusSources){map.basis.sources.push('docs/ricognizione/raptus-sources.json');map.raptusEvidence={source:'docs/ricognizione/raptus-sources.json',checkedOn:raptusSources.checkedOn,userConfirmation:raptusSources.userConfirmation,verifiedOverview:raptusSources.verifiedOverview,officialImageRights:raptusSources.officialImageReferences?.rights,authenticAssetsStatus:'second-mandate-requires-originals-and-publication-rights',genericStudyIsRaptusProduct:false};}
map.baseCommit=commit;
try{map.workingTreeModified=!!execFileSync('git',['status','--porcelain'],{cwd:root,encoding:'utf8'}).trim();}catch{map.workingTreeModified=null;}
map.basis.gitReference='baseCommit/sourceCommit identifies HEAD at generation time. workingTreeModified reports uncommitted or untracked files; the export can include those working-tree changes.';
map.assetPlans=map.assetPlans.map(plan=>({...plan,appliedRoutes:rows.filter(row=>row.existingAssets.some(asset=>plan.existingPaths.includes(asset.path))).map(row=>row.route),sourceReferencedRoutes:rows.filter(row=>row.requiredSlots.some(slot=>slot.slot==='og'&&slot.assets.some(path=>plan.existingPaths.includes(path)))).map(row=>row.route),availableNotAppliedRoutes:plan.existingPaths.length?plan.routes.filter(route=>!rows.find(row=>row.route===route)?.existingAssets.some(asset=>plan.existingPaths.includes(asset.path))):[],requiresOriginalsRoutes:plan.requiresAuthenticOriginals?plan.routes:[]}));
const replacementTasks=[];
for(const [bucket,entries]of [['hero',replacementRegister.newHero||[]],['editorial',replacementRegister.editorial||[]]])for(const entry of entries){const paths=entry.paths||[];replacementTasks.push({id:entry.id,bucket,phase:2,priority:entry.priority||'high',status:entry.status,reference:entry.reference,requiredOriginals:entry.shoot||entry.replaceWith,assetPaths:paths,affectedRoutes:rows.filter(row=>row.existingAssets.some(asset=>paths.includes(asset.path))).map(row=>row.route),requiresOriginalsAndVerification:true});}
for(const path of replacementRegister.legacyScenes?.paths||[])replacementTasks.push({id:`legacy-${basename(path,extname(path))}`,bucket:'legacy',phase:2,priority:replacementRegister.legacyScenes.priority||'high',status:replacementRegister.legacyScenes.status,requiredOriginals:replacementRegister.legacyScenes.shoot,assetPaths:[path],affectedRoutes:rows.filter(row=>row.existingAssets.some(asset=>asset.path===path)).map(row=>row.route),requiresOriginalsAndVerification:true,note:'Review the register against originals. Decorative brand illustrations and material textures are not automatically replaced with shop photos.'});
for(const entry of replacementRegister.catalogFamilies||[])replacementTasks.push({id:`family-${entry.id}`,bucket:'non-tobacco-family',phase:2,priority:entry.priority||'high',status:entry.status,requiredOriginals:entry.requiredShoot,assetPaths:[],affectedRoutes:rows.filter(row=>row.template==='Catalog'||row.dataReference?.id===entry.id).map(row=>row.route),requiresOriginalsAndVerification:true});
for(const entry of replacementRegister.brandSpecificAssets||[])replacementTasks.push({id:entry.id,bucket:'authentic-brand-and-product',phase:2,priority:entry.priority||'high',status:entry.status,requiredOriginals:entry.requiredOriginals,assetPaths:[],affectedRoutes:rows.filter(row=>row.assetPlanIDs.includes(entry.assetPlanID)).map(row=>row.route),requiresOriginalsAndVerification:true,reference:entry.reference});
map.secondMandate={status:'reference-dependent-not-complete',source:'docs/identita/asset-replacement-register.json',principle:'The generated editorial pack does not replace original shop/product photographs or authentic brand files. Preserve the definitive shop logo; no tobacco marketing photography is planned.',tasks:replacementTasks,authenticBrandAssets:{planID:'verified-brand-originals',status:'requires-authentic-approved-originals',optional:true,affectedRoutes:map.assetPlans.find(plan=>plan.id==='verified-brand-originals')?.routes||[]}};
map.counts.secondMandateReferenceTasks=replacementTasks.length;
map.secondMandate.authenticRaptusAssets={planID:'authentic-raptus-assets',status:'requires-authentic-originals-and-publication-rights',source:'docs/ricognizione/raptus-sources.json',affectedRoutes:map.assetPlans.find(plan=>plan.id==='authentic-raptus-assets')?.routes||[]};
map.counts.blockingAssetGaps=rows.reduce((sum,row)=>sum+row.assetGaps.filter(gap=>gap.required&&['missing','source-reference-missing'].includes(gap.status)).length,0);
map.dataCounts={nonTobaccoFamilies:familyData.length,neutralCigarRecords:cigarData.length,scientificSourceRecords:Object.keys(scientificSources).length};
map.basis.sources.push('src/data/catalog-assortment.ts','src/data/cigar-records.ts','src/data/materials-education.ts');
map.existingGeneralMaterials=map.existingGeneralMaterials.map(material=>({...material,contentAppliedRoutes:rows.filter(row=>row.existingAssets.some(asset=>material.paths.includes(asset.path)&&asset.roles.some(role=>['texture','material','main-image'].includes(role)))).map(row=>row.route),chromeOnlyRoutes:rows.filter(row=>row.existingAssets.some(asset=>material.paths.includes(asset.path)&&asset.roles.includes('chrome-texture'))&&!row.existingAssets.some(asset=>material.paths.includes(asset.path)&&asset.roles.some(role=>['texture','material','main-image'].includes(role)))).map(row=>row.route)}));
if(new Set(rows.map(row=>row.route)).size!==htmlFiles.length)throw new Error('Route coverage is incomplete or duplicated.');
if(rows.some(row=>!row.title||!row.template||!row.lang))throw new Error('A route lacks title, template or language metadata.');
const columns=['route','lang','sharedAssetKey','htmlFile','template','templateSource','title','heading','theme','expectedTheme','palette','role','dataReference','requiredSlots','existingAssets','availableButNotApplied','assetGaps','priority','status','referenceNeeds','assetPlanIDs','indexing','notes'];
const csvCell=value=>'"'+String(typeof value==='object'?JSON.stringify(value):value??'').replaceAll('"','""')+'"';
const csv='\uFEFF'+columns.map(csvCell).join(',')+'\r\n'+rows.map(row=>columns.map(column=>csvCell(row[column])).join(',')).join('\r\n')+'\r\n';
await mkdir(output,{recursive:true});
await writeFile(join(output,'asset-coverage-map.json'),JSON.stringify(map,null,2)+'\n');
await writeFile(join(output,'asset-coverage-map.csv'),csv);
console.log(JSON.stringify({outputs:['docs/identita/asset-coverage-map.json','docs/identita/asset-coverage-map.csv'],...map.counts,canonicalPlanIDs:canonicalPlans.map(plan=>plan.id)},null,2));
