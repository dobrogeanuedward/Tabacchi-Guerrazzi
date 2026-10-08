import {spawn} from 'node:child_process';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createServer} from 'node:net';
import {once} from 'node:events';
import {randomBytes} from 'node:crypto';
import assert from 'node:assert/strict';

const temporary=mkdtempSync(join(tmpdir(),'guerrazzi-e2e-'));
process.env.DATA_DIR=temporary;
const {passwordHash}=await import('../src/lib/auth.mjs');
const {db}=await import('../src/lib/store.mjs');
const username=`test-${randomBytes(8).toString('hex')}`;
const password=randomBytes(32).toString('hex');
db.prepare('INSERT INTO admin VALUES (1,?,?)').run(username,passwordHash(password));
db.close();
const reservation=createServer();reservation.listen(0,'127.0.0.1');await once(reservation,'listening');
const port=reservation.address().port;
await new Promise(resolve=>reservation.close(resolve));
const base=`http://127.0.0.1:${port}`;
const server=spawn(process.execPath,['dist/server/entry.mjs'],{
 env:{...process.env,HOST:'127.0.0.1',PORT:String(port),ALLOW_LOCAL_UPLOADS:'true'},stdio:'ignore'
});
let cookie='';
const post=(path,body,origin=base)=>fetch(base+path,{
 method:'POST',redirect:'manual',headers:{Origin:origin,
 ...(typeof body==='string'?{'Content-Type':'application/json'}:{}),...(cookie?{Cookie:cookie}:{})},body
});
const product={nameIt:'Prodotto solo per il test',nameEn:'Test product only',
 descriptionIt:'Questa scheda è un test isolato.',descriptionEn:'This listing is an isolated test.',
 brand:'',category:'giochi',gallery:[],image:'/images/games.webp',availability:'on-request',price:'',status:'draft'};
try {
 let ready=false;
 for(let i=0;i<40;i++){
  if(server.exitCode!==null)throw new Error('Test server failed to start.');
  try{if((await fetch(base+'/')).ok){ready=true;break;}}catch{}
  await new Promise(resolve=>setTimeout(resolve,200));
 }
 assert.ok(ready,'Test server must be ready.');
 assert.equal((await post('/api/products',JSON.stringify(product))).status,401);
 assert.equal((await post('/api/login',new URLSearchParams({username,password}),'https://other.example')).status,403);
 const login=await post('/api/login',new URLSearchParams({username,password}));
 assert.equal(login.status,200);cookie=login.headers.get('set-cookie').split(';')[0];
 assert.equal((await fetch(base+'/admin/',{headers:{Cookie:cookie}})).status,200);
 let response=await post('/api/products',JSON.stringify(product));assert.equal(response.status,200);
 let p=(await response.json()).product;
 assert.ok(!(await (await fetch(base+'/catalogo/')).text()).includes(product.nameIt));
 response=await post('/api/products',JSON.stringify({...p,status:'published'}));assert.equal(response.status,200);
 p=(await response.json()).product;
 assert.ok((await (await fetch(base+'/catalogo/')).text()).includes(product.nameIt));
 assert.ok((await (await fetch(base+'/en/catalogo/'+p.slug+'/')).text()).includes(product.nameEn));
 const form=new FormData();form.append('image',new Blob([readFileSync('public/images/games.webp')],{type:'image/webp'}),'game.webp');
 const upload=await post('/api/upload',form);assert.equal(upload.status,200);
 const image=(await upload.json()).url;assert.match(image,/^\/uploads\/[a-f0-9-]+\.webp$/);
 assert.equal((await fetch(base+image)).headers.get('content-type'),'image/webp');
 response=await post('/api/products',JSON.stringify({...p,status:'archived'}));assert.equal(response.status,200);
 assert.ok(!(await (await fetch(base+'/catalogo/')).text()).includes(product.nameIt));
 assert.equal((await post('/api/logout',new URLSearchParams())).status,303);
 assert.equal((await post('/api/products',JSON.stringify(product))).status,401);
 console.log('E2E passed: access, CSRF, login, admin, publication, English detail, upload, archive and logout.');
} finally {
 if(server.exitCode===null){server.kill();await once(server,'exit');}
 rmSync(temporary,{recursive:true,force:true});
}
