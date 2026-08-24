const fs = require('fs');
const c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const s = c.indexOf('slug: "prevencao-perdas-patrimoniais"');
const e = c.indexOf('slug: "simulado-evacuacao-plano-abandono"');
console.log(c.slice(s - 5, e + 50));
