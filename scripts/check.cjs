const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
for(const file of fs.readdirSync('js').filter(f=>f.endsWith('.js'))) cp.execFileSync(process.execPath,['--check',path.join('js',file)]);
const html=fs.readFileSync('index.html','utf8');for(const match of html.matchAll(/(?:src|href)="((?:js|css|assets)\/[^"#]+)"/g)){if(!fs.existsSync(match[1]))throw Error('Missing asset '+match[1]);}
console.log('All application scripts parse; all local entrypoint assets exist.');
