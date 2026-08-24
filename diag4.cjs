const fs = require('fs');
const c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = c.split('\n');
for (let i = 1468; i <= 1498; i++) {
    console.log(`L${i+1}: ${lines[i]}`);
}
