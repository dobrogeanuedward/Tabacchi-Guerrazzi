import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
export const dataDir=resolve(process.env.DATA_DIR||'./data');
mkdirSync(dataDir,{recursive:true});
export const db=new DatabaseSync(resolve(dataDir,'guerrazzi.sqlite'));
db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
 CREATE TABLE IF NOT EXISTS admin(id INTEGER PRIMARY KEY CHECK(id=1), username TEXT NOT NULL, password TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, expires INTEGER NOT NULL);
 CREATE TABLE IF NOT EXISTS attempts(key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires INTEGER NOT NULL);
 CREATE TABLE IF NOT EXISTS products(id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, data TEXT NOT NULL, status TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 1, updated INTEGER NOT NULL);`);
export const allowedCategories=['regali','giochi','cartoleria','accessori'];
export const allowedStatuses=['draft','published','archived'];
export function validateProduct(input){
 const clean={};
 for(const k of ['nameIt','nameEn','descriptionIt','descriptionEn','brand','image','availability']){const value=input[k]??'';if(typeof value!=='string')throw new Error('Campo non valido.');clean[k]=value.trim();if(clean[k].length>(k.startsWith('description')?6000:500))throw new Error('Testo troppo lungo.');}
 if(!clean.nameIt)throw new Error('Inserisci il nome in italiano.');
 if(!allowedCategories.includes(input.category))throw new Error('Categoria non pubblicabile.');clean.category=input.category;
 if(!allowedStatuses.includes(input.status))throw new Error('Stato non valido.');clean.status=input.status;
 if(!['available','on-request','unavailable'].includes(clean.availability))throw new Error('Disponibilità non valida.');
 const validImage=s=>/^\/uploads\/[a-f0-9-]{36}\.webp$/.test(s)||/^\/images\/[a-z0-9-]+\.webp$/.test(s)||(/^https:\/\/pub-b39e5084f7324516a4fe99c212a65c5f\.r2\.dev\/clients\/guerrazzi\/uploads\/[a-f0-9-]{36}\.webp$/.test(s));
 if(clean.image&&!validImage(clean.image))throw new Error('Immagine non valida. Caricala dal pannello.');
 if(!Array.isArray(input.gallery)||input.gallery.length>5||input.gallery.some(s=>typeof s!=='string'||!validImage(s)))throw new Error('La galleria può contenere fino a 5 immagini.');clean.gallery=input.gallery;
 const price=input.price===''||input.price==null?null:Number(input.price);if(price!==null&&(!Number.isFinite(price)||price<0||price>100000))throw new Error('Prezzo non valido.');clean.price=price;
 if(clean.status==='published'&&(!clean.nameEn||!clean.descriptionIt||!clean.descriptionEn||!clean.image))throw new Error('Per pubblicare servono nome inglese, entrambe le descrizioni e immagine principale.');
 return clean;
}
const decode=r=>r?{...JSON.parse(r.data),id:r.id,slug:r.slug,status:r.status,version:r.version,updated:r.updated}:null;
export function getProducts({publicOnly=false}={}){return db.prepare(`SELECT * FROM products ${publicOnly?"WHERE status='published'":''} ORDER BY updated DESC`).all().map(decode);}
export function getProduct(id){return decode(db.prepare('SELECT * FROM products WHERE id=?').get(id));}
export function getProductBySlug(slug){return decode(db.prepare("SELECT * FROM products WHERE slug=? AND status='published'").get(slug));}
export function saveProduct(input){
 const clean=validateProduct(input);const id=input.id||randomUUID();const old=getProduct(id);
 const slug=old?.slug||`${clean.nameIt.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80)||'prodotto'}-${id.slice(0,8)}`;
 const now=Date.now();
 if(old){const result=db.prepare('UPDATE products SET data=?,status=?,version=version+1,updated=? WHERE id=? AND version=?').run(JSON.stringify(clean),clean.status,now,id,Number(input.version));if(result.changes!==1)throw new Error('Questa scheda è stata modificata. Ricaricala prima di salvare.');}
 else{if(input.id)throw new Error('Scheda non trovata.');db.prepare('INSERT INTO products (id,slug,data,status,updated) VALUES (?,?,?,?,?)').run(id,slug,JSON.stringify(clean),clean.status,now);}
 return getProduct(id);
}
