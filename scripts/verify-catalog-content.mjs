import {readFile,access,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
import {parse} from 'parse5';
const descendants=node=>[node,...(node.childNodes||[]).flatMap(descendants)];
const attrs=node=>Object.fromEntries((node.attrs||[]).map(attribute=>[attribute.name,attribute.value]));
const hasClass=(node,name)=>(attrs(node).class||'').split(/\s+/).includes(name);
const text=node=>node.nodeName==='#text'?node.value:(node.childNodes||[]).map(text).join('');
const educationalGuides=['sigari-termini-informazioni','tabacco-minori-documenti','tabacco-confezioni-avvertenze','radica-erica-arborea','schiuma-di-mare-sepiolite','pipe-materiali-storia','sigaro-struttura-termini','nicotiana-tabacum-botanica'];
const materialGuides=educationalGuides.slice(3);
const familyCount=(await readdir('dist/assortimento',{withFileTypes:true})).filter(e=>e.isDirectory()).length;
assert.ok(familyCount>=26);
for(const prefix of ['', '/en']){
 const html=await readFile(join('dist',prefix,'catalogo/index.html'),'utf8');
 const nodes=descendants(parse(html));
 const cards=nodes.filter(node=>hasClass(node,'product-card'));
 const familyCards=cards.filter(node=>hasClass(node,'assortment-card'));
 assert.equal(familyCards.length,familyCount);
 assert.equal(cards.length,familyCount+1);
 const cardNames=[],cardRoutes=[];
 for(const card of cards){
  assert.equal(card.tagName,'article','Catalogue cards must contain a heading link and separate image controls');
  const elements=descendants(card),headings=elements.filter(node=>node.tagName==='h2');
  assert.equal(headings.length,1,'Each catalogue card needs one heading');
  const links=elements.filter(node=>node.tagName==='a');
  assert.equal(links.length,1,'Each catalogue card needs one destination link');
  const link=links[0],href=attrs(link).href;
  assert.ok(descendants(headings[0]).includes(link)&&hasClass(link,'catalog-card-link'),'Card navigation belongs in its heading');
  assert.ok(!descendants(link).some(node=>['button','input','select','textarea','details','img'].includes(node.tagName)),'Image disclosure controls must remain outside the card link');
  assert.ok(attrs(card)['data-category']&&attrs(card)['data-search'],'Catalogue filters need the card category and search text');
  if(hasClass(card,'assortment-card'))assert.ok(attrs(card)['data-treatment'],'Family cards keep their visual treatment');
  assert.ok(href.startsWith(`${prefix}/${hasClass(card,'assortment-card')?'assortimento':'catalogo'}/`),'Card destination must preserve the current language and record type');
  assert.ok(elements.some(node=>node.tagName==='img'&&attrs(node).src&&attrs(node).alt),'Each card needs its image and useful alternative text');
  await access(join('dist',href,'index.html'));
  cardNames.push(text(link));cardRoutes.push(href);
 }
 assert.equal(new Set(cardRoutes).size,cards.length,'Catalogue cards must link to distinct records');
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
 const list=graph.find(x=>x['@type']==='ItemList');assert.equal(list.itemListElement.length,familyCount+1);
 assert.deepEqual(list.itemListElement.map(item=>item.name),cardNames,'Structured catalogue names must match the visible heading links');
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
console.log(JSON.stringify({catalogueFamilies:familyCount,languages:2,informationGuides:educationalGuides.length*2,newEducationalArticles:3,ageScope:'passed',sourceLinks:'passed',noTobaccoOffers:true}));
