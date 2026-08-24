const fs = require('fs');
let c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// The problem: the replacement script found `lastIndexOf('}', commaIndex)`
// and that '}' was in the MIDDLE of the post "equipamentos-essenciais-combate-incendio"
// (post #9), instead of the closing brace of "brigada-voluntaria-vs-bombeiro-civil" (#11).
//
// The current file has:
//   [end of new post #11]
//   },        <- correct close of post #11
//     content: `...  <- orphaned content from middle of post #9
// The beginning of the post #9 object was deleted.
//
// Strategy: 
// The .bak file has the ORIGINAL content (pre-all changes, from HEAD).
// The current file has posts 1-10 rewritten + post #11 corrupted.
//
// Fix: we need to restore the missing opening of post "equipamentos-essenciais-combate-incendio"
// from the backup. Let's find what's missing.

const bak = fs.readFileSync('src/data/blogPosts.ts.bak', 'utf8');

// Find the original post #9 in backup:
const equipStart = bak.indexOf('slug: "equipamentos-essenciais-combate-incendio"');
const primeirosStart = bak.indexOf('slug: "primeiros-socorros-ambiente-corporativo"');

const origEquip = bak.slice(bak.lastIndexOf('{', equipStart), primeirosStart - 5);
console.log('--- ORIGINAL POST 9 OPENING (first 500 chars) ---');
console.log(origEquip.slice(0, 500));
console.log('...');
console.log('--- ORIGINAL POST 9 LENGTH:', origEquip.length);
