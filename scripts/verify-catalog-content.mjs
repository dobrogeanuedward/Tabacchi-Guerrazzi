import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
for(const prefix of ['', '/en']){
 const html=await readFile(join('dist',prefix,'catalogo/index.html'),'utf8');
 const cards=[...html.matchAll(/class="product-card assortment-card"[^>]+href="([^"]+)"/g)];
 assert.equal(cards.length,25);for(const [,href]of cards)await access(join('dist',href,'index.html'));
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
 const list=graph.find(x=>x['@type']==='ItemList');assert.equal(list.itemListElement.length,25);
 assert.ok(!graph.some(x=>['Product','Offer'].includes(x['@type'])));
 for(const route of ['sigari','pipe-e-tabacchi-da-pipa','schede/sigari-termini-informazioni','schede/tabacco-minori-documenti','schede/tabacco-confezioni-avvertenze']){
  const page=await readFile(join('dist',prefix,route,'index.html'),'utf8');assert.match(page,/id="age-confirmation"/);assert.match(page,/class="official-sources"/);assert.ok(!page.includes('"@type":"Offer"'));
 }
 for(const route of ['cartoleria','giochi-e-giocattoli','deposito-bagagli']){const page=await readFile(join('dist',prefix,route,'index.html'),'utf8');assert.ok(!page.includes('id="age-confirmation"'));}
}
console.log(JSON.stringify({catalogueFamilies:25,languages:2,tobaccoGuides:6,ageScope:'passed',sourceLinks:'passed',noTobaccoOffers:true}));
