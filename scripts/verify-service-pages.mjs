import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {join} from 'node:path';
import {parse} from 'parse5';
import {dataModuleLoader} from './verify-launch-readiness.mjs';

const load=dataModuleLoader(process.cwd());
const {serviceIdentities}=await load('service-identities.ts');
const {counterServiceConfirmation}=await load('confirmed-counter-services.ts');
const {shop}=await load('shop.ts');
for(const slug of counterServiceConfirmation.slugs){
 const service=serviceIdentities.find(s=>s.slug===slug);
 assert(service,`Missing owner-confirmed service: ${slug}`);
 assert.equal(service.hours,'counter');
 assert(!service.provider,`Do not infer a provider for owner-confirmed service: ${slug}`);
 assert(service.faqs.length>=3,`Missing practical answers: ${slug}`);
}
const attrs=node=>Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));
const nodes=node=>[node,...(node.childNodes||[]).flatMap(nodes)];
const text=node=>node.nodeName==='#text'?node.value:(node.childNodes||[]).map(text).join(' ');
const compact=value=>value.replace(/\s+/g,' ').trim();
const read=async route=>{
 const html=await readFile(join('dist',route,'index.html'),'utf8');
 const all=nodes(parse(html));
 const graph=all.filter(n=>n.tagName==='script'&&attrs(n).type==='application/ld+json').flatMap(n=>JSON.parse((n.childNodes||[]).map(c=>c.value||'').join('')));
 return {html,all,graph,main:all.find(n=>n.tagName==='main')};
};

let pages=0,faqAnswers=0;
for(const [prefix,language,l] of [['','it',0],['/en','en',1]]){
 const directory=await read(`${prefix}/servizi/`);
 const list=directory.graph.find(g=>g['@type']==='ItemList');
 assert.equal(list.itemListElement.length,serviceIdentities.filter(s=>!s.overview).length+1);
 assert(directory.all.some(n=>attrs(n).id==='servizi-disponibili'));
 for(const service of serviceIdentities){
  const route=`${prefix}/servizi/${service.slug}/`;
  const page=await read(route);
  const content=compact(text(page.main));
  assert.equal(page.all.filter(n=>n.tagName==='h1').length,1,route);
  assert.match(text(page.all.find(n=>n.tagName==='h1')),/Bologna/,route);
  assert.equal(attrs(page.all.find(n=>n.tagName==='html')).lang,language);
  const structured=page.graph.find(g=>g['@type']==='Service');
  assert(structured,`Missing Service schema: ${route}`);
  const place=structured.availableChannel.serviceLocation;
  assert.equal(place.name,shop.name);assert.equal(place.address.streetAddress,shop.address);
  assert.equal(place.address.addressLocality,'Bologna');assert.equal(place.address.postalCode,shop.postcode);
  assert.equal(place.telephone,shop.phone);assert.equal(place.hasMap,shop.maps);
  assert.equal(structured.areaServed.name,'Bologna');
  assert(content.includes(`${shop.postcode} ${shop.city}`));
  assert(page.all.some(n=>n.tagName==='a'&&attrs(n).href===shop.maps));
  assert(page.all.some(n=>n.tagName==='a'&&attrs(n).href===`tel:${shop.phone.replace(/\s/g,'')}`));
  assert(page.all.some(n=>attrs(n)['aria-label']===(language==='it'?'Percorsi a piedi per Via Guerrazzi 10/F':'Walking routes to Via Guerrazzi 10/F')));
  assert(service.logos.length>0||counterServiceConfirmation.slugs.includes(service.slug),`Missing documented service identity: ${route}`);
  const socialImage=page.all.find(n=>n.tagName==='meta'&&attrs(n).property==='og:image');
  assert(socialImage&&!attrs(socialImage).content.includes('undefined'),`Invalid service sharing image: ${route}`);
  for(const logo of service.logos){
   const src=`/brand/partners/${logo.file}`;await access(join('dist',src));
   assert(page.all.some(n=>n.tagName==='img'&&attrs(n).src===src&&attrs(n).alt===logo.name),route);
  }
  const faq=page.graph.find(g=>g['@type']==='FAQPage');
  assert(faq?.mainEntity.length>=2,`Missing substantive FAQs: ${route}`);
  assert.equal(faq.mainEntity.length,service.faqs.length);
  for(const question of faq.mainEntity){
   assert(content.includes(compact(question.name)),route);
   assert(content.includes(compact(question.acceptedAnswer.text)),route);faqAnswers++;
  }
  assert(!page.all.some(n=>attrs(n).id==='age-confirmation'),route);
  assert(!page.graph.some(g=>['Offer','Product','AggregateRating'].includes(g['@type'])),route);
  assert.equal(structured.hoursAvailable[0].opens,service.hours==='always'?'00:00':shop.hours[0].opens);
  if(!service.overview)assert(directory.html.includes(`href="${route}"`),`Service not discoverable: ${route}`);
  for(const link of page.all.filter(n=>n.tagName==='a')){
   const href=attrs(link).href||'';
   if(href.startsWith('/')&&!href.startsWith('//'))await access(join('dist',href.split(/[?#]/)[0],'index.html'));
  }
  pages++;
 }
 const bounce=await read(`${prefix}/deposito-bagagli/`);
 assert(bounce.html.includes('/brand/partners/bounce-official.svg'));
 assert(bounce.html.includes('https://bounce.com/stores/bologna/7ZRpUp'));
 const storage=bounce.graph.find(g=>g['@type']==='Service');
 assert.equal(storage.provider.address.streetAddress,shop.address);assert.equal(storage.provider.telephone,shop.phone);assert.equal(storage.provider.hasMap,shop.maps);assert.equal(storage.brand.name,'Bounce');
 for(const guide of ['ricariche-telefoniche','bollettini-e-pagopa']){
  const page=await read(`${prefix}/schede/${guide}/`);
  assert(!page.graph.some(g=>g['@type']==='Service'),`Keep practical guides distinct from local service pages: ${guide}`);
 }
}
console.log(JSON.stringify({serviceTemplatePages:pages,dedicatedServicePages:pages-2+2,documentedServices:serviceIdentities.filter(s=>!s.overview).length+1,ownerConfirmedCounterServices:counterServiceConfirmation.slugs.length,overviewPages:2,faqAnswers,localPlaceAndPhone:true,providedLogosVerified:true,practicalGuidesSeparateFromServicePages:true,bounceBookingPreserved:true}));
