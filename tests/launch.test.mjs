import test from 'node:test';
import assert from 'node:assert/strict';
import {getLaunchReadiness,getPublicSitemapPaths} from '../src/lib/launch-readiness.mjs';

const shop={name:'Test shop',address:'Test street 1',postcode:'40125',city:'Bologna',legalName:'Test controller',vat:'12345678901',email:'privacy@example.test',phone:'+390511234567',hours:[{day:'Monday',hours:'09:00–18:00'}]};
const review={reviewedOn:'2026-10-19',controller:{legalName:shop.legalName,vat:shop.vat,contactEmail:shop.email,evidence:'Test controller record'},hosting:{provider:'Test host',policyUrl:'https://example.test/privacy',evidence:'Test hosting agreement'},retention:{description:'Test retention criteria',evidence:'Test configuration record'}};

test('a launch flag cannot expose an incomplete shop or an unverified privacy notice',()=>{
 const incomplete=getLaunchReadiness({siteUrl:'https://example.test',launchRequested:true,shop:{...shop,vat:'',email:''}});
 assert.equal(incomplete.ready,false);
 assert.ok(incomplete.blockers.some(issue=>issue.code==='shop-vat'));
 assert.ok(incomplete.blockers.some(issue=>issue.code==='shop-email'));
 assert.ok(incomplete.blockers.some(issue=>issue.code==='privacy-controller'));
});

test('launch uses a verified canonical origin and the privacy controller for this shop',()=>{
 const input={siteUrl:'https://example.test',launchRequested:true,shop,review};
 assert.equal(getLaunchReadiness(input).ready,true);
 assert.equal(getLaunchReadiness({...input,launchRequested:false}).ready,false);
 assert.equal(getLaunchReadiness({...input,siteUrl:'https://example.test/not-the-origin/'}).ready,false);
 assert.equal(getLaunchReadiness({...input,review:{...review,controller:{...review.controller,legalName:'Another business'}}}).ready,false);
 assert.equal(getLaunchReadiness({...input,review:{...review,reviewedOn:'2026-02-31'}}).ready,false);
});

test('sitemap includes both languages, ordinary and informational routes, with no private paths',()=>{
 const paths=getPublicSitemapPaths({mainPages:[{slug:''},{slug:'giochi-e-giocattoli'},{slug:'sigari'},{slug:'admin'}],guides:{'scegliere-un-gioco':{}},catalogAssortment:[{id:'costruzioni-lego'}],cigarRecords:[{slug:'example'}],articles:[{slug:'example-story'}]});
 assert.ok(paths.includes('/giochi-e-giocattoli/'));
 assert.ok(paths.includes('/en/giochi-e-giocattoli/'));
 assert.ok(paths.includes('/sigari/example/'));
 assert.ok(paths.includes('/approfondimenti/example-story/'));
 assert.ok(!paths.includes('/admin/'));
 assert.ok(!paths.includes('/en/admin/'));
 assert.equal(new Set(paths).size,paths.length);
});
