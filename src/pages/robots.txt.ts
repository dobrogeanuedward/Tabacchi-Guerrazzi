import {shop} from '../data/shop';
import {getLaunchReadiness} from '../lib/launch-readiness.mjs';

export function GET(){
 const launch=getLaunchReadiness({siteUrl:import.meta.env.PUBLIC_SITE_URL,launchRequested:import.meta.env.PUBLIC_LAUNCH_READY,shop});
 const body=launch.ready
  ?`User-agent: *\nDisallow: /admin/\nDisallow: /api/\nDisallow: /uploads/\nDisallow: /*?\nSitemap: ${new URL('/sitemap.xml',launch.siteUrl).href}\n`
  :'User-agent: *\nDisallow: /\n';
 return new Response(body,{headers:{'Content-Type':'text/plain; charset=utf-8'}});
}
