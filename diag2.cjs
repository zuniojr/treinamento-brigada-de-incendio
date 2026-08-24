const fs = require('fs');
let c = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// The issue is that around L1479 we have the tail of one post object
// followed directly by another 'content' field without a new object.
// Let's find the exact bad part:
// "  },\n    content: `" should be "  },\n  {\n    ..."
// We need to see what's around braceEndIndex that got sliced incorrectly.

// Let's find the problem area and fix it:
// Bad: the post block for "brigada-voluntaria-vs-bombeiro-civil" 
// accidentally consumed part of the "equipamentos-essenciais-combate-incendio" post.

// What we see at L1479:
//   `    <- end of brigada-voluntaria content
//   },   <- closes the object
//     content: `  <- orphaned content field!
// 
// This means the replacement cut the file at the closing '}' of the equipamentos post
// when it should have kept it intact.

// The fix: remove the orphaned second object block and reconstruct properly.
// We need to look for the pattern where we have:
//   `\n  },\n    content: `

const badPattern = '`\n  },\n    content: `';
const idx = c.indexOf(badPattern);
if (idx !== -1) {
    console.log('Found bad pattern at index:', idx);
    console.log('Context around it:');
    console.log(c.slice(idx - 200, idx + 500));
} else {
    console.log('Bad pattern not found directly.');
    // Try with \r\n
    const badPattern2 = '`\r\n  },\r\n    content: `';
    const idx2 = c.indexOf(badPattern2);
    if (idx2 !== -1) {
        console.log('Found bad pattern (CRLF) at index:', idx2);
        console.log(c.slice(idx2 - 200, idx2 + 500));
    } else {
        console.log('Pattern not found with CRLF either.');
    }
}
