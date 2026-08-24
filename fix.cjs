const fs = require('fs');

// Read current (corrupted) file and the original backup
let current = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const bak = fs.readFileSync('src/data/blogPosts.ts.bak', 'utf8');

// -----------------------------------------------------------------------
// PROBLEM:
// The replace.cjs script used lastIndexOf('}', commaIndex) to find the end
// of the brigada-voluntaria-vs-bombeiro-civil post. But it found a '}' that
// was INSIDE the equipamentos-essenciais-combate-incendio post (which came
// before prevencao-perdas-patrimoniais in the file, due to different ordering).
//
// As a result, the beginning of the equipamentos post was deleted and we now have:
//   [end of new brigada-voluntaria post #11]
//   },
//     content: `...equipamentos content...    <-- orphaned, no opening object!
//
// FIX STRATEGY:
// 1. Find the orphaned "content:" field that starts the equipamentos block
// 2. Get the full equipamentos post object from the BACKUP (original)
// 3. Find WHERE in the current file the orphaned content starts
// 4. Replace from there back to the closing of brigada-voluntaria (keep it),
//    then insert the full equipamentos object in place of the orphaned content
// -----------------------------------------------------------------------

// Step 1: Find the bad splice in the current file
// We know the bad pattern is:  `\r\n  },\r\n    content: `
const badPattern = '`\r\n  },\r\n    content: `';
const badIdx = current.indexOf(badPattern);

if (badIdx === -1) {
    console.log('ERROR: bad pattern not found in current file!');
    process.exit(1);
}

console.log('Found bad pattern at index:', badIdx);

// The "good" end of the new post #11 is at badIdx + the backtick
// We want to keep everything up to and including `\r\n  },\r\n` (i.e. the close of brigada-voluntaria)
// Then inject the FULL equipamentos post from backup, then continue from "prevencao-perdas-patrimoniais" onward

// The split point in current file: keep up to (badIdx + 1 + 2 + 2 + 2) = end of `\r\n  },\r\n`
// backtick is at badIdx, then \r\n  },\r\n = 8 chars => badIdx + 1 + 8 = badIdx + 9
const keepUpTo = badIdx + 1 + '\r\n  },\r\n'.length; // keep: `\r\n  },\r\n
const firstPart = current.slice(0, keepUpTo);

// Step 2: Get the full equipamentos post from backup
const equipSlugMarker = 'slug: "equipamentos-essenciais-combate-incendio"';
const primeirosSlugMarker = 'slug: "primeiros-socorros-ambiente-corporativo"';

const equipStartInBak = bak.lastIndexOf('{', bak.indexOf(equipSlugMarker));
const equipEndInBak = bak.lastIndexOf('},', bak.indexOf(primeirosSlugMarker));

const equipPostFromBak = bak.slice(equipStartInBak, equipEndInBak + 2); // include "},\r\n"
console.log('Equipment post from backup (first 200 chars):', equipPostFromBak.slice(0, 200));
console.log('Equipment post from backup (last 100 chars):', equipPostFromBak.slice(-100));

// Step 3: Find where to resume in current file
// After the orphaned content block ends, it should have `\r\n  },\r\n  {\r\n    slug: "primeiros-socorros-ambiente-corporativo"
// But wait - the current file was ALREADY rewritten for post #10 (primeiros-socorros).
// So after the orphaned equipamentos content, we should find the primeiros-socorros post.
// The orphaned content ends with its closing backtick+},
// The current file after the bad zone: find where primeiros-socorros starts

const primeirosInCurrent = current.indexOf('slug: "primeiros-socorros-ambiente-corporativo"');
if (primeirosInCurrent === -1) {
    console.log('ERROR: primeiros-socorros not found in current file!');
    process.exit(1);
}
// Back up to the opening '{' of that object
const primeirosObjStart = current.lastIndexOf('{', primeirosInCurrent);
// The secondPart starts at primeirosObjStart (we want to keep the rest of the file from there)
const secondPart = current.slice(primeirosObjStart);

// Step 4: Assemble the fixed file
// firstPart = everything up to end of brigada-voluntaria close
// equipPostFromBak = the full equipment post (from backup)  
// secondPart = primeiros-socorros onward (which has been rewritten)

// But we need a separator: between firstPart and equipPostFromBak, 
// and between equipPostFromBak and secondPart.
// firstPart ends with `\r\n  },\r\n` so we need `  {` to open equipamentos
// equipPostFromBak starts with `{` so we just add `  ` prefix?
// Actually equipPostFromBak from the bak file starts with `{\r\n    slug:` — no leading spaces
// Let's check the formatting

// firstPart ends with:  },\r\n  (we already have  at start of next line from keepUpTo)
// Let's just concatenate smartly

const fixedContent = firstPart + '  ' + equipPostFromBak + '\r\n  ' + secondPart;

fs.writeFileSync('src/data/blogPosts.ts', fixedContent, 'utf8');
console.log('\n✅ File fixed successfully!');
console.log('First part length:', firstPart.length);
console.log('Equipment post length:', equipPostFromBak.length);
console.log('Second part length:', secondPart.length);
console.log('Total fixed file length:', fixedContent.length);
