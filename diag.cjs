const fs = require('fs');
const c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = c.split('\n');
// Print lines 1470-1490
for (let i = 1468; i <= 1495; i++) {
    console.log(`L${i+1}: ${lines[i]}`);
}
