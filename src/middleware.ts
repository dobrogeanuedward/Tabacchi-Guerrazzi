import {defineMiddleware} from 'astro:middleware';
export const onRequest=defineMiddleware(async(context,next)=>{
 const response=await next();
 response.headers.set('X-Content-Type-Options','nosniff');
 response.headers.set('Referrer-Policy','strict-origin-when-cross-origin');
 response.headers.set('X-Frame-Options','DENY');
 response.headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=()');
 if(context.url.pathname.startsWith('/admin')||context.url.pathname.startsWith('/api')){response.headers.set('Cache-Control','private, no-store');response.headers.set('X-Robots-Tag','noindex, nofollow');}
 return response;
});
