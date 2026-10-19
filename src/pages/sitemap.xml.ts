import {catalogueBrands} from '../data/brand-catalogue';
import {serviceIdentities} from '../data/service-identities';
import {cigarBrandStories} from '../data/cigar-brand-stories';
import {catalogAssortment} from '../data/catalog-assortment';
import {cigarRecords} from '../data/cigar-records';
import {mainPages,shop} from '../data/shop';
import {guides} from '../data/pages';
import {articles} from '../data/articles';
import {getProducts} from '../lib/catalog.mjs';
import {getLaunchReadiness,getPublicSitemapPaths} from '../lib/launch-readiness.mjs';

export function GET(){
 const launch=getLaunchReadiness({siteUrl:import.meta.env.PUBLIC_SITE_URL,launchRequested:import.meta.env.PUBLIC_LAUNCH_READY,shop});
 const paths=launch.ready?getPublicSitemapPaths({mainPages,guides,catalogAssortment,cigarRecords,catalogueBrands,serviceIdentities,cigarBrandStories,products:getProducts({publicOnly:true}),articles}):[];
 const escape=(value:string)=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
 const body=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${escape(new URL(path,launch.siteUrl).href)}</loc></url>`).join('')}</urlset>`;
 return new Response(body,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
