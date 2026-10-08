import {login,sameOrigin,sessionCookie} from '../../lib/auth.mjs';
export async function POST({request,cookies,clientAddress}:any){
 if(!sameOrigin(request))return new Response('Origine non valida.',{status:403});
 if(Number(request.headers.get('content-length'))>10000)return new Response('Richiesta troppo grande.',{status:413});
 const f=await request.formData();const username=String(f.get('username')||'');const password=String(f.get('password')||'');
 if(password.length>500||username.length>200)return new Response('Dati non validi.',{status:400});
 const result=login(username,password,clientAddress);
 if(result.error)return new Response(JSON.stringify({error:result.error}),{status:result.status,headers:{'Content-Type':'application/json'}});
 cookies.set(sessionCookie,result.token,{httpOnly:true,sameSite:'lax',secure:new URL(request.url).protocol==='https:',path:'/',maxAge:8*60*60});
 return new Response(JSON.stringify({ok:true}),{headers:{'Content-Type':'application/json'}});
}
