import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
const staticExport=process.env.ASTRO_STATIC_EXPORT==='true';
const origin=process.env.PUBLIC_SITE_URL;
const allowedDomains=[{hostname:'localhost'},{hostname:'127.0.0.1'}];
if(origin)allowedDomains.push({hostname:new URL(origin).hostname});
export default defineConfig({
 output:staticExport?'static':'server',
 ...(staticExport?{srcDir:'./.static-export/src'}:{adapter:node({mode:'standalone'})}),
 server:{port:4321,host:true},
 security:{allowedDomains},
 vite:{build:{rollupOptions:{maxParallelFileOps:1}},resolve:{preserveSymlinks:process.platform==='win32'},ssr:{external:['node:sqlite']}}
});
