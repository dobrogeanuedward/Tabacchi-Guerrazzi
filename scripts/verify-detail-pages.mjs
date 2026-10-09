import {readFile,access,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
let total=0;
for(const prefix of ['', 'en'])for(const section of ['assortimento','sigari']){
 const directory=join('dist',prefix,section);
 const entries=(await readdir(directory,{withFileTypes:true})).filter(e=>e.isDirectory());
 assert.equal(entries.length,section==='sigari'?34:25);
 for(const entry of entries){
  const html=await readFile(join(directory,entry.name,'index.html'),'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);
  const graph=JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
  assert.ok(!graph.some(s=>['Product','Offer','AggregateRating'].includes(s['@type'])));
  const faq=graph.find(s=>s['@type']==='FAQPage');assert.ok(faq.mainEntity.length>=2);
  for(const q of faq.mainEntity){assert.ok(html.includes(q.name));assert.ok(html.includes(q.acceptedAnswer.text));}
  for(const [,href] of html.matchAll(/href="(\/(?:en\/)?(?:sigari|assortimento|schede)[^"?#]*)"/g))await access(join('dist',href,'index.html'));
  if(section==='sigari'){assert.match(html,/id="age-confirmation"/);assert.match(html,/class="official-sources"/);assert.ok(!/class="product-price"|@type":"Offer"/.test(html));}
  else assert.ok(!html.includes('id="age-confirmation"'));
  total++;
 }
}
for(const prefix of ['', 'en']){
 const home=await readFile(join('dist',prefix,'index.html'),'utf8');
 assert.match(home,/class="grouped-menu"/);assert.match(home,/class="quick-nav"/);assert.match(home,/class="angela-wordmark"/);assert.match(home,/location-label eyebrow/);
}
console.log(JSON.stringify({detailPages:total,faqMatchesVisibleContent:true,linksResolve:true,adultScope:true,groupedNavigation:true}));
