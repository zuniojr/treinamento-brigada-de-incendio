const fs = require('fs');
const c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// esbuild aparentemente vê o arquivo sem \r (como se fosse LF puro)
// Vamos ver o que o esbuild "vê" na L1479
// A coluna 2 indica caractere índice 1 (0-indexed) da linha 1479

// Approach: let's count backticks to find unclosed template literals
// This is the most common cause of "Expected ] but found }" in TS
let backtickCount = 0;
let lastOpenBacktick = -1;
let lineCount = 1;

for (let i = 0; i < c.length; i++) {
    if (c[i] === '\n') lineCount++;
    if (c[i] === '`') {
        backtickCount++;
        if (backtickCount % 2 === 1) {
            // opening backtick
            lastOpenBacktick = i;
        }
    }
    
    // Check at certain milestones
    if (lineCount > 1479 && backtickCount % 2 === 1) {
        console.log(`At line 1479+, backtick count is ODD (${backtickCount}) - UNCLOSED template literal!`);
        console.log('Last opening backtick at index:', lastOpenBacktick);
        // Find what line that is
        const beforeLast = c.slice(0, lastOpenBacktick);
        const lineOfLast = (beforeLast.match(/\n/g) || []).length + 1;
        console.log('That backtick is on line:', lineOfLast);
        console.log('Context:', JSON.stringify(c.slice(lastOpenBacktick - 50, lastOpenBacktick + 50)));
        break;
    }
}

if (backtickCount % 2 === 0) {
    console.log('All backticks are balanced. Total:', backtickCount);
    console.log('The issue might be something else. Checking for unbalanced brackets...');
    
    // Check for the specific line 1479 area
    let ln = 1;
    let inStr = false;
    let inTmpl = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === '\n') {
            ln++;
            if (ln === 1478) {
                console.log('At L1478 start, inTmpl:', inTmpl, 'inStr:', inStr);
            }
            if (ln === 1479) {
                console.log('At L1479 start, inTmpl:', inTmpl, 'inStr:', inStr);
                console.log('chars at L1479:', JSON.stringify(c.slice(i+1, i+50)));
                break;
            }
        }
    }
}
