const fs = require('fs');
const filePath = 'src/data/blogPosts.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find the line indices we need
const brigadaSlugLine = lines.findIndex(l => l.includes('slug: "brigada-voluntaria-vs-bombeiro-civil"'));
const prevencaoSlugLine = lines.findIndex(l => l.includes('slug: "prevencao-perdas-patrimoniais"'));

console.log('brigada-voluntaria slug at line:', brigadaSlugLine + 1);
console.log('prevencao-perdas slug at line:', prevencaoSlugLine + 1);

// Find the opening brace of brigada-voluntaria object (go backwards from slug line)
let brigadaObjStart = brigadaSlugLine;
while (brigadaObjStart > 0 && !lines[brigadaObjStart].match(/^\s*\{/)) {
    brigadaObjStart--;
}
console.log('brigada object starts at line:', brigadaObjStart + 1, '|', JSON.stringify(lines[brigadaObjStart]));

// Find the opening brace of prevencao object (go backwards from its slug line)
let prevencaoObjStart = prevencaoSlugLine;
while (prevencaoObjStart > 0 && !lines[prevencaoObjStart].match(/^\s*\{/)) {
    prevencaoObjStart--;
}
console.log('prevencao object starts at line:', prevencaoObjStart + 1, '|', JSON.stringify(lines[prevencaoObjStart]));

// Show the lines between the end of brigada object open and start of prevencao
console.log('\n--- ORIGINAL POST #11 (brigada-voluntaria) ---');
for (let i = brigadaObjStart; i < prevencaoObjStart; i++) {
    console.log(`L${i+1}: ${lines[i]}`);
}
console.log('--- END ---');
