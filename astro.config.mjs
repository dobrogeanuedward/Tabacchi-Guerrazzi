import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
const staticExport=process.env.ASTRO_STATIC_EXPORT==='true';
export default defineConfig({
 output:staticExport?'static':'server',
 ...(staticExport?{srcDir:'./.static-export/src'}:{adapter:node({mode:'standalone'})}),
 server:{port:4321,host:true},
 vite:{ssr:{external:['node:sqlite']}}
});
