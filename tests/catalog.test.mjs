import test,{after} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const temporary=mkdtempSync(join(tmpdir(),'guerrazzi-test-'));
process.env.DATA_DIR=temporary;
const store=await import('../src/lib/store.mjs');
const auth=await import('../src/lib/auth.mjs');
after(()=>{store.db.close();rmSync(temporary,{recursive:true,force:true});});
const product=()=>({nameIt:'Gioco di prova',nameEn:'Test game',descriptionIt:'Descrizione di prova.',descriptionEn:'Test description.',brand:'',category:'giochi',image:'/images/games.webp',gallery:[],availability:'on-request',price:'',status:'draft'});

test('draft, published and archived states control actual public visibility',()=>{
 const draft=store.saveProduct(product());
 assert.equal(store.getProductBySlug(draft.slug),null);
 assert.equal(store.getProducts({publicOnly:true}).length,0);
 const published=store.saveProduct({...draft,status:'published'});
 assert.equal(store.getProductBySlug(published.slug).id,draft.id);
 assert.equal(store.getProducts({publicOnly:true}).length,1);
 const unpublished=store.saveProduct({...published,status:'draft'});
 assert.equal(store.getProductBySlug(unpublished.slug),null);
 const archived=store.saveProduct({...unpublished,status:'archived'});
 assert.equal(store.getProducts({publicOnly:true}).length,0);
 assert.equal(store.getProduct(archived.id).slug,draft.slug);
});

test('two editors cannot silently overwrite a newer revision',()=>{
 const original=store.saveProduct(product());
 const updated=store.saveProduct({...original,nameIt:'Versione aggiornata'});
 assert.throws(()=>store.saveProduct({...original,nameIt:'Versione obsoleta'}),/modificata/);
 assert.equal(store.getProduct(original.id).nameIt,updated.nameIt);
});

test('publishing requires bilingual content and an image, and excludes tobacco',()=>{
 assert.throws(()=>store.saveProduct({...product(),status:'published',descriptionEn:''}),/pubblicare/);
 assert.throws(()=>store.saveProduct({...product(),status:'published',image:''}),/pubblicare/);
 assert.throws(()=>store.saveProduct({...product(),category:'sigari'}),/Categoria/);
 assert.throws(()=>store.saveProduct({...product(),category:'tabacco'}),/Categoria/);
});

test('gallery and image input cannot create arbitrary remote or executable URLs',()=>{
 assert.throws(()=>store.saveProduct({...product(),image:'javascript:alert(1)'}),/Immagine/);
 assert.throws(()=>store.saveProduct({...product(),gallery:['https://example.com/track.png']}),/galleria/);
 assert.throws(()=>store.saveProduct({...product(),gallery:Array(6).fill('/images/games.webp')}),/galleria/);
 assert.throws(()=>store.saveProduct({...product(),price:-1}),/Prezzo/);
 assert.equal(store.saveProduct({...product(),price:0}).price,0);
});

test('passwords are salted, sessions expire and logout revokes access',()=>{
 const password='A-long-test-password-937!';
 const hash=auth.passwordHash(password);
 assert.notEqual(hash,auth.passwordHash(password));
 assert.equal(auth.verifyPassword(password,hash),true);
 assert.equal(auth.verifyPassword('wrong',hash),false);
 assert.equal(auth.verifyPassword(password,'broken'),false);
 store.db.prepare('INSERT INTO admin VALUES (1,?,?)').run('test-admin',hash);
 const loggedIn=auth.login('test-admin',password,'test-client');
 const cookies={get:()=>({value:loggedIn.token}),delete:()=>{}};
 assert.equal(auth.sessionValid(cookies),true);
 store.db.prepare('UPDATE sessions SET expires=0').run();
 assert.equal(auth.sessionValid(cookies),false);
 const second=auth.login('test-admin',password,'test-client');
 const active={get:()=>({value:second.token}),delete:()=>{}};
 auth.logout(active);
 assert.equal(auth.sessionValid(active),false);
});

test('brute-force attempts are limited and cross-origin writes are rejected',()=>{
 for(let i=0;i<6;i++)assert.equal(auth.login('test-admin','wrong','rate-test').status,401);
 assert.equal(auth.login('test-admin','wrong','rate-test').status,429);
 const local=new Request('https://shop.example/api/products',{method:'POST',headers:{Origin:'https://shop.example'}});
 const foreign=new Request('https://shop.example/api/products',{method:'POST',headers:{Origin:'https://other.example'}});
 assert.equal(auth.sameOrigin(local),true);
 assert.equal(auth.sameOrigin(foreign),false);
});
