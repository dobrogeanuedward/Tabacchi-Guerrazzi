import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
import {db} from './store.mjs';
export const sessionCookie='guerrazzi_session';
const hash=s=>createHash('sha256').update(s).digest('hex');
export function passwordHash(password){const salt=randomBytes(16).toString('hex');return `${salt}:${scryptSync(password,salt,64).toString('hex')}`;}
export function verifyPassword(password,saved){try{const [salt,key]=saved.split(':');const expected=Buffer.from(key,'hex');const actual=scryptSync(password,salt,64);return actual.length===expected.length&&timingSafeEqual(actual,expected);}catch{return false;}}
export function sessionValid(cookies){const token=cookies.get(sessionCookie)?.value;if(!token)return false;const r=db.prepare('SELECT expires FROM sessions WHERE token=?').get(hash(token));return !!r&&r.expires>Date.now();}
export function requireSession(cookies){if(!sessionValid(cookies))throw new Error('Accesso richiesto.');}
export function login(username,password,clientAddress){
 const key=hash(clientAddress||'unknown');const now=Date.now();db.prepare('DELETE FROM attempts WHERE expires<?').run(now);db.prepare('DELETE FROM sessions WHERE expires<?').run(now);
 const attempt=db.prepare('SELECT * FROM attempts WHERE key=?').get(key);if(attempt?.count>=6)return {error:'Troppi tentativi. Riprova tra 15 minuti.',status:429};
 const admin=db.prepare('SELECT * FROM admin WHERE id=1').get();const valid=verifyPassword(password,admin?.password||'00:00');
 if(!admin||username!==admin.username||!valid){db.prepare('INSERT INTO attempts (key,count,expires) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1').run(key,now+15*60*1000);return {error:'Credenziali non valide.',status:401};}
 db.prepare('DELETE FROM attempts WHERE key=?').run(key);const token=randomBytes(32).toString('hex');db.prepare('INSERT INTO sessions VALUES (?,?)').run(hash(token),now+8*60*60*1000);return {token};
}
export function logout(cookies){const token=cookies.get(sessionCookie)?.value;if(token)db.prepare('DELETE FROM sessions WHERE token=?').run(hash(token));cookies.delete(sessionCookie,{path:'/'});}
export function sameOrigin(request){return request.headers.get('origin')===new URL(request.url).origin;}
