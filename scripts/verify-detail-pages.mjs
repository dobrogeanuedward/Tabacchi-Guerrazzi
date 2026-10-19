import {readFile,access,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {join} from 'node:path';
let total=0;
const sectionCounts={};
for(const prefix of ['', 'en'])for(const section of ['assortimento','sigari']){
 const directory=join('dist',prefix,section);
 const entries=(await readdir(directory,{withFileTypes:true})).filter(e=>e.isDirectory()&&e.name!=='storie');
 if(!prefix){assert.ok(entries.length>=(section==='sigari'?34:26));sectionCounts[section]=entries.length;}
 else assert.equal(entries.length,sectionCounts[section]);
 for(const entry of entries){
  const html=await readFile(join(directory,entry.name,'index.html'),'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);
  const graph=JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
  assert.ok(!graph.some(s=>['Product','Offer','AggregateRating'].includes(s['@type'])));
  const faq=graph.find(s=>s['@type']==='FAQPage');
  if(section==='assortimento'){
   assert.ok(faq?.mainEntity.length>=2,'A family must answer its practical questions');
   for(const q of faq.mainEntity){assert.ok(html.includes(q.name));assert.ok(html.includes(q.acceptedAnswer.text));}
   assert.match(html,/family-story|collection-narrative/,'A family needs its own narrative');
  }
  for(const [,href] of html.matchAll(/href="(\/(?:en\/)?(?:sigari|assortimento|schede)[^"?#]*)"/g))await access(join('dist',href,'index.html'));
  if(section==='sigari'){
   assert.match(html,/id="age-confirmation"/);
   assert.match(html,/class="official-sources"/,'A historical record must link its sources');
   assert.ok(/<h1[^>]*>[^<]+<\/h1>\s*<p[^>]*>[^<]+<\/p>/.test(html)||/class="record-context(?: |")/.test(html),'A cigar name needs factual or historical prose');
   assert.ok(!/class="product-price"|@type":"Offer"|record-related|class="record-plate"/.test(html));
   assert.doesNotMatch(html,/ricognizione fotografica|photographic survey|immagine fotografica generata/);
  }
  else assert.ok(!html.includes('id="age-confirmation"'));
  total++;
 }
}
for(const prefix of ['', 'en']){
 const home=await readFile(join('dist',prefix,'index.html'),'utf8');
 assert.match(home,/class="grouped-menu"/);assert.match(home,/centered-header/);assert.match(home,/class="category-menu"/);assert.doesNotMatch(home,/class="quick-nav"/);assert.match(home,/class="angela-wordmark"/);assert.match(home,/location-label eyebrow/);
 assert.equal((home.match(/data-slide-to=/g)||[]).length,6);
 const main=home.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1];
 assert.ok(main.indexOf('class="luggage-feature"')<main.indexOf('class="discover wrap"'));
 for(const slug of ['idee-regalo','giochi-e-giocattoli','sigari','pipe-e-tabacchi-da-pipa','profumi-raptus'])assert.ok(main.includes(`href="${prefix?'/en':''}/${slug}/"`));
 const luggage=await readFile(join('dist',prefix,'deposito-bagagli','index.html'),'utf8');
 const graph=JSON.parse(luggage.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
 const service=graph.find(s=>s['@type']==='Service');assert.equal(service.availableChannel.serviceUrl,'https://bounce.com/stores/bologna/7ZRpUp');
 const faq=graph.find(s=>s['@type']==='FAQPage');for(const q of faq.mainEntity){assert.ok(luggage.includes(q.name));assert.ok(luggage.includes(q.acceptedAnswer.text));}
}
console.log(JSON.stringify({detailPages:total,faqMatchesVisibleContent:true,linksResolve:true,adultScope:true,groupedNavigation:true}));
