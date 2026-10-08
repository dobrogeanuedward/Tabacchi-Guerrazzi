import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
const categories=['cartoleria','souvenir-bologna','accessori-telefono','feste-e-compleanni','piccole-necessita','dolciumi','accendini-e-accessori','ricevitoria','deposito-bagagli'];
const guides=['ricariche-telefoniche','bollettini-e-pagopa','scegliere-un-regalo','scegliere-un-gioco','raggiungere-il-negozio','marchi-trattati'];
let contextualLinks=0,guideLinks=0;
for(const prefix of ['', '/en']){
 for(const slug of categories){
  const html=await readFile(join('dist',prefix,slug,'index.html'),'utf8');
  assert.match(html,/class="category-answer"/);assert.equal((html.match(/<h1[\s>]/g)||[]).length,1);
  const section=html.match(/<section class="category-pathways"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(section,`${prefix}/${slug}: missing contextual section`);
  const targets=[...section.matchAll(/href="([^"]+)"/g)].map(m=>m[1]);assert.equal(targets.length,2);
  for(const target of targets){assert.ok(target.startsWith(`${prefix}/`));await access(join('dist',target,'index.html'));contextualLinks++;}
  const json=html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  const graph=JSON.parse(json);assert.ok(graph.every(Boolean));
  const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if(canonical){
   const store=graph.find(x=>x['@type']==='Store'),site=graph.find(x=>x['@type']==='WebSite'),page=graph.find(x=>x['@type']==='WebPage');
   assert.equal(store['@id'],new URL('/#store',canonical).href);assert.equal(page.about['@id'],store['@id']);assert.equal(page.isPartOf['@id'],site['@id']);
  }
 }
 for(const slug of guides){
  const html=await readFile(join('dist',prefix,'schede',slug,'index.html'),'utf8');
  const section=html.match(/<section class="article-related"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(section,`${prefix}/schede/${slug}: missing contextual category section`);
  for(const category of categories){if(section.includes(`href="${prefix}/${category}/"`))guideLinks++;}
 }
}
assert.ok(guideLinks>=20,'Missing guide-to-category connections');
console.log(JSON.stringify({categories:18,contextualLinks,guideCategoryLinks:guideLinks,schemas:'valid',result:'passed'}));
