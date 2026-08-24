const fs = require('fs');

const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = content.split('\n');

// Vamos procurar por todas as linhas que contenham 'slug:'
const posts = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('slug:')) {
    // Acha o slug
    const match = line.match(/slug:\s*["']([^"']+)["']/);
    if (match) {
      const slug = match[1];
      // Acha o início do objeto buscando a linha '{' anterior
      let objStart = i;
      while (objStart > 0 && !lines[objStart].match(/^\s*\{/)) {
        objStart--;
      }
      
      // Vamos tentar detectar se o post está reescrito. 
      // Os posts reescritos têm tags com caixa mista (ex: "Brigada Voluntária", "Lei 11.901/2009", "Prevenção de Incêndios")?
      // Ou talvez possamos ler as tags ou alguma outra propriedade?
      // Vamos pegar o título e tags.
      let title = '';
      let tagsLine = '';
      for (let j = objStart; j < i + 15; j++) {
        if (lines[j].includes('title:')) {
          const titleMatch = lines[j].match(/title:\s*["']([^"']+)["']/);
          if (titleMatch) title = titleMatch[1];
        }
        if (lines[j].includes('tags:')) {
          tagsLine = lines[j];
        }
      }

      posts.push({
        slug,
        line: objStart + 1, // 1-indexed
        title,
        tagsLine: tagsLine.trim()
      });
    }
  }
}

console.log(JSON.stringify(posts, null, 2));
