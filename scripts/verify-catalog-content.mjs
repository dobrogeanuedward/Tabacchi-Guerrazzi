import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
const educationalGuides=['sigari-termini-informazioni','tabacco-minori-documenti','tabacco-confezioni-avvertenze','radica-erica-arborea','schiuma-di-mare-sepiolite','pipe-materiali-storia','sigaro-struttura-termini','nicotiana-tabacum-botanica'];
const materialGuides=educationalGuides.slice(3);
for(const prefix of ['', '/en']){
 const html=await readFile(join('dist',prefix,'catalogo/index.html'),'utf8');
 const cards=[...html.matchAll(/class="product-card assortment-card"[^>]+href="([^"]+)"/g)];
 assert.equal(cards.length,26);for(const [,href]of cards)await access(join('dist',href,'index.html'));
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
 const list=graph.find(x=>x['@type']==='ItemList');assert.equal(list.itemListElement.length,26);
 assert.ok(!graph.some(x=>['Product','Offer'].includes(x['@type'])));
 for(const route of ['sigari','pipe-e-tabacchi-da-pipa',...educationalGuides.map(s=>`schede/${s}`)]){
  const page=await readFile(join('dist',prefix,route,'index.html'),'utf8');assert.match(page,/id="age-confirmation"/);assert.match(page,/class="official-sources"/);assert.ok(!page.includes('"@type":"Offer"'));
 }
 for(const route of materialGuides){
  const page=await readFile(join('dist',prefix,'schede',route,'index.html'),'utf8');
  assert.equal((page.match(/<h1(?:\s|>)/g)||[]).length,1);
  assert.match(page,/class="reference-cover wrap"/);assert.match(page,/data-reading-index/);assert.match(page,/Guida informativa|Information guide/);
  assert.ok(!page.includes('Plan your visit')&&!page.includes('Informazioni per la visita'));
  const graph=JSON.parse(page.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
  const article=graph.find(s=>s['@type']==='Article');
  assert.equal(article.inLanguage,prefix?'en':'it');assert.ok(article.citation.length>0);
  for(const url of article.citation)assert.ok(page.includes(url.replaceAll('&','&amp;'))||page.includes(url));
 }
 for(const route of ['sigari','pipe-e-tabacchi-da-pipa']){
  const page=await readFile(join('dist',prefix,route,'index.html'),'utf8');
  assert.match(page,/education-hero/);assert.match(page,/id="atlante"/);assert.match(page,/id="norme"/);
  assert.match(page,/atlas-card-action/);assert.match(page,/information-guides/);
  for(const [,href]of page.matchAll(/href="(\/(?:en\/)?schede\/[^"#]+)"/g))await access(join('dist',href,'index.html'));
 }
 for(const route of ['cartoleria','giochi-e-giocattoli','deposito-bagagli','profumi-raptus']){const page=await readFile(join('dist',prefix,route,'index.html'),'utf8');assert.ok(!page.includes('id="age-confirmation"'));}
}
for(const slug of ['radica-non-semplice-radice','schiuma-mare-nome-minerale','nomi-botanici-denominazioni-tabacco']){
 const page=await readFile(join('dist','approfondimenti',slug,'index.html'),'utf8');
 assert.match(page,/id="age-confirmation"/);assert.match(page,/class="editorial-cover wrap"/);assert.match(page,/Articolo informativo/);assert.match(page,/data-reading-index/);
 assert.match(page,/class="official-sources"/);assert.ok(!page.includes('"@type":"Offer"'));
 for(const [,href]of page.matchAll(/href="(\/(?:schede|pipe-e-tabacchi-da-pipa|sigari|approfondimenti)[^"#]*)"/g))await access(join('dist',href,'index.html'));
}
console.log(JSON.stringify({catalogueFamilies:26,languages:2,informationGuides:educationalGuides.length*2,newEducationalArticles:3,ageScope:'passed',sourceLinks:'passed',noTobaccoOffers:true}));
