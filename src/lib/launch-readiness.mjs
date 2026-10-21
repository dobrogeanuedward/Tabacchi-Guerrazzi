/**
 * Launch evidence belongs in source control, alongside the information it supports.
 * Empty values describe work still required; the environment flag is not evidence.
 */
export const privacyReview = {
 reviewedOn: '',
 controller: {legalName:'',vat:'',contactEmail:'',evidence:''},
 hosting: {provider:'',policyUrl:'',evidence:''},
 retention: {description:'',evidence:''},
};

/**
 * The owner explicitly requested public launch on 20 October 2026 and deferred
 * the business/privacy details until that evening. Keep that unfinished work
 * visible as warnings; this authorization is limited to the confirmed domain.
 * It does not assert that the privacy review or business records are complete.
 */
export const launchAuthorization = {
 siteUrl: 'https://guerrazzidiangela.it/',
 approvedOn: '2026-10-20',
 evidence: 'Owner: “ok allora risolvi tuttooo”; business identity details: “te li mando poi stasera intanto procedi senza”.',
 deferredChecks: ['shop-legalName','shop-vat','shop-email','privacy-controller','privacy-hosting','privacy-retention','privacy-review-date'],
};

const present=value=>typeof value==='string'&&value.trim().length>0;
const normalized=value=>typeof value==='string'?value.trim():'';
const validEmail=value=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized(value));
const normalizedVat=value=>normalized(value).replace(/^IT/i,'').replaceAll(' ','');
const validDate=value=>{
 if(!/^\d{4}-\d{2}-\d{2}$/.test(normalized(value)))return false;
 const date=new Date(`${value}T00:00:00Z`);
 return !Number.isNaN(date.valueOf())&&date.toISOString().slice(0,10)===value;
};

/** Accept only a canonical HTTPS origin, never a deployment-derived fallback. */
export function normalizeSiteUrl(value){
 if(!present(value))return '';
 try{
  const url=new URL(value.trim());
  if(url.protocol!=='https:'||url.username||url.password||url.port||url.search||url.hash||url.pathname!=='/')return '';
  if(!url.hostname.includes('.')||url.hostname==='localhost'||url.hostname.endsWith('.localhost')||url.hostname.endsWith('.local')||/^\d{1,3}(?:\.\d{1,3}){3}$/.test(url.hostname))return '';
  return `${url.origin}/`;
 }catch{return '';}
}

/** All public categories remain eligible; only utility/private routes are omitted. */
export function isIndexablePath(pathname){
 return !/^\/(?:en\/)?(?:404(?:\.html|\/)?|privacy\/?|cookie\/?|admin(?:\/|$)|api(?:\/|$)|uploads(?:\/|$))$/.test(pathname)
  &&!/^\/(?:en\/)?(?:admin|api|uploads)\//.test(pathname);
}

export function getLaunchReadiness({siteUrl='',launchRequested=false,shop={},review=privacyReview,authorization=launchAuthorization}={}){
 const checks=[];
 const check=(code,passed,message)=>checks.push({code,passed:!!passed,message});
 const requested=launchRequested===true||launchRequested==='true';
 const canonical=normalizeSiteUrl(siteUrl);
 check('canonical-origin',!!canonical,'Configurare PUBLIC_SITE_URL con l’origine HTTPS canonica confermata.');
 for(const [field,label] of [['name','nome del negozio'],['address','indirizzo'],['postcode','CAP'],['city','città'],['legalName','ragione sociale']]){
  check(`shop-${field}`,present(shop[field]),`Completare il ${label} nei dati dell’attività.`);
 }
 check('shop-vat',/^\d{11}$/.test(normalizedVat(shop.vat)),'Confermare una partita IVA italiana di 11 cifre.');
 check('shop-email',validEmail(shop.email),'Confermare un indirizzo email valido dell’attività.');
 const phone=normalized(shop.phone).replace(/[^\d+]/g,'');
 check('shop-phone',/^\+?\d{7,15}$/.test(phone),'Confermare il numero di telefono dell’attività.');
 check('shop-hours',Array.isArray(shop.hours)&&shop.hours.length>0&&shop.hours.every(row=>present(row.day)&&present(row.hours)),'Completare gli orari ufficiali del banco; gli orari h24 del distributore sono distinti.');
 const controller=review?.controller||{};
 check('privacy-controller',present(controller.evidence)&&present(shop.legalName)&&normalized(controller.legalName)===normalized(shop.legalName)&&normalizedVat(controller.vat)===normalizedVat(shop.vat)&&validEmail(controller.contactEmail)&&normalized(controller.contactEmail).toLowerCase()===normalized(shop.email).toLowerCase(),'Documentare i dati del titolare dell’informativa, coerenti con ragione sociale, partita IVA ed email dell’attività.');
 const hosting=review?.hosting||{};
 check('privacy-hosting',present(hosting.provider)&&!!normalizeSiteUrlPolicy(hosting.policyUrl)&&present(hosting.evidence),'Documentare il fornitore hosting effettivo e la relativa informativa sul trattamento tecnico.');
 const retention=review?.retention||{};
 check('privacy-retention',present(retention.description)&&present(retention.evidence),'Documentare i tempi o criteri di conservazione applicabili ai trattamenti tecnici effettivi.');
 check('privacy-review-date',validDate(review?.reviewedOn),'Registrare la data della verifica dell’informativa (AAAA-MM-GG).');
 const deferrable=new Set(['shop-legalName','shop-vat','shop-email','privacy-controller','privacy-hosting','privacy-retention','privacy-review-date']);
 const authorized=!!canonical&&canonical===normalizeSiteUrl(authorization?.siteUrl)&&validDate(authorization?.approvedOn)&&present(authorization?.evidence);
 const deferred=new Set(authorized?(authorization.deferredChecks||[]).filter(code=>deferrable.has(code)):[]);
 const outstanding=checks.filter(item=>!item.passed).map(({code,message})=>({code,message}));
 const blockers=outstanding.filter(item=>!deferred.has(item.code));
 const warnings=outstanding.filter(item=>deferred.has(item.code));
 return {requested,ready:requested&&blockers.length===0,fullyComplete:outstanding.length===0,siteUrl:canonical,checks,blockers,warnings,...(authorized?{authorization:{approvedOn:authorization.approvedOn,evidence:authorization.evidence}}:{})};
}

function normalizeSiteUrlPolicy(value){
 if(!present(value))return '';
 try{const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password?url.href:'';}catch{return '';}
}

/**
 * @typedef {Object} SitemapData
 * @property {{slug:string}[]} [mainPages]
 * @property {Record<string,unknown>} [guides]
 * @property {{id:string}[]} [catalogAssortment]
 * @property {{slug:string}[]} [cigarRecords]
 * @property {{slug:string}[]} [catalogueBrands]
 * @property {{slug:string}[]} [serviceIdentities]
 * @property {{slug:string}[]} [cigarBrandStories]
 * @property {{slug:string}[]} [products]
 * @property {{slug:string}[]} [articles]
 */
/**
 * Shared by the endpoint and the audit, including the closed preview build.
 * @param {SitemapData} data
 * @returns {string[]}
 */
export function getPublicSitemapPaths({mainPages=[],guides={},catalogAssortment=[],cigarRecords=[],catalogueBrands=[],serviceIdentities=[],cigarBrandStories=[],products=[],articles=[]}={}){
 const paths=[];
 for(const prefix of ['', '/en']){
  for(const page of mainPages)paths.push(`${prefix}/${page.slug?`${page.slug}/`:''}`);
  for(const slug of Object.keys(guides))paths.push(`${prefix}/schede/${slug}/`);
  for(const item of catalogAssortment)paths.push(`${prefix}/assortimento/${item.id}/`);
  for(const item of cigarRecords)paths.push(`${prefix}/sigari/${item.slug}/`);
  for(const item of catalogueBrands)paths.push(`${prefix}/marchi/${item.slug}/`);
  for(const item of serviceIdentities)paths.push(`${prefix}/servizi/${item.slug}/`);
  for(const item of cigarBrandStories)paths.push(`${prefix}/sigari/storie/${item.slug}/`);
  for(const item of products)paths.push(`${prefix}/catalogo/${item.slug}/`);
 }
 paths.push('/approfondimenti/',...articles.map(article=>`/approfondimenti/${article.slug}/`));
 return [...new Set(paths)].filter(isIndexablePath).sort();
}
