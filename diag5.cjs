const fs = require('fs');
const c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// esbuild usa linhas sem considerar \r — vamos contar apenas com \n
const lines = c.split('\n');
console.log('Total lines (split by \\n):', lines.length);

// Show lines 1475-1485 (1-indexed)
for (let i = 1474; i <= 1490; i++) {
    console.log(`L${i+1}: ${JSON.stringify(lines[i])}`);
}
