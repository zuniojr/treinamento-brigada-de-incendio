const fs = require('fs');
const c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = c.split('\n');

// Show lines 1540-1490 (where brigada-voluntaria should be)
// Find it first
const brigLine = lines.findIndex(l => l.includes('brigada-voluntaria-vs-bombeiro-civil'));
console.log('brigada-voluntaria-vs-bombeiro-civil found at line:', brigLine + 1);

// Show lines around the new post #11 content
for (let i = brigLine - 2; i <= brigLine + 20; i++) {
    console.log(`L${i+1}: ${lines[i]}`);
}
