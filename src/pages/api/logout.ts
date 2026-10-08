import {logout,sameOrigin} from '../../lib/auth.mjs';
export async function POST({request,cookies}:any){if(!sameOrigin(request))return new Response('Origine non valida.',{status:403});logout(cookies);return new Response(null,{status:303,headers:{Location:'/admin/login/'}});}
