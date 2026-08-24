const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = content.split('\n');

const posts = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('slug:')) {
    const match = line.match(/slug:\s*["']([^"']+)["']/);
    if (match) {
      const slug = match[1];
      let objStart = i;
      while (objStart > 0 && !lines[objStart].match(/^\s*\{/)) {
        objStart--;
      }
      
      let title = '';
      let tags = [];
      
      // Procurando propriedades adicionais a partir de objStart
      for (let j = objStart; j < objStart + 30 && j < lines.length; j++) {
        if (lines[j].includes('title:')) {
          const titleMatch = lines[j].match(/title:\s*["']([^"']+)["']/);
          if (titleMatch) title = titleMatch[1];
        }
        if (lines[j].includes('tags:')) {
          const tagsMatch = lines[j].match(/tags:\s*\[(.*?)\]/);
          if (tagsMatch) {
            tags = tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
          } else {
            // Pode estar quebrado em várias linhas, vamos tentar achar
            let tagStr = lines[j];
            let k = j;
            while (!tagStr.includes(']') && k < lines.length - 1) {
              k++;
              tagStr += lines[k];
            }
            const multiLineMatch = tagStr.match(/tags:\s*\[(.*?)\]/);
            if (multiLineMatch) {
              tags = multiLineMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
            }
          }
        }
      }

      // Critério para ver se o post foi concluído:
      // O plano diz que reescrita do post de acordo com a skill 'seo-blog-writer-claude'
      // inclui E-E-A-T, FAQ schema, tags em caixa mista e estratégicas.
      // O post reescrito geralmente possui tags capitalizadas de forma bonita (ex: "Brigada Voluntária", "Lei 11.901/2009").
      // Se olharmos no original, as tags costumavam ser todas minúsculas (ex: "prevencao de perdas", "patrimonio", "seguranca empresarial").
      // Vamos checar se o post tem FAQ (se tem "FAQPage" ou "FAQ" no HTML ou se as tags estão capitalizadas).
      // Vamos ler o conteúdo do post para ver se tem FAQ ou se as tags estão capitalizadas.
      // Vamos buscar o final do objeto do post para analisar as tags e o FAQ.
      let hasFAQ = false;
      let postContent = '';
      
      // Acha onde termina o objeto (próximo '{' de abertura ou final do arquivo)
      let nextObjStart = i + 1;
      while (nextObjStart < lines.length && !lines[nextObjStart].match(/^\s*\{/)) {
        nextObjStart++;
      }
      postContent = lines.slice(objStart, nextObjStart).join('\n');
      
      if (postContent.includes('FAQPage') || postContent.includes('itemtype="https://schema.org/Question"') || postContent.includes('Perguntas Frequentes')) {
        hasFAQ = true;
      }
      
      // Se tem tags capitalizadas (ex: "Brigada Voluntária" ou "Passo a Passo")
      // Vamos contar quantas tags têm letras maiúsculas
      const capitalTags = tags.filter(t => /[A-Z]/.test(t) && t !== 'AVCB' && t !== 'NR' && t !== 'NR23' && t !== 'NR-23' && t !== 'NBR' && t !== 'ABNT' && t !== 'CBMSC' && t !== 'RH' && t !== 'PNG' && t !== 'RCP' && t !== 'DEA' && t !== 'APH');
      const isReWritten = hasFAQ || capitalTags.length >= 2;

      posts.push({
        slug,
        line: objStart + 1,
        title,
        tags,
        hasFAQ,
        capitalTagsCount: capitalTags.length,
        isReWritten
      });
    }
  }
}

// Criar a pasta scratch se não existir
if (!fs.existsSync('scratch')) {
  fs.mkdirSync('scratch');
}

fs.writeFileSync('scratch/posts_status.json', JSON.stringify(posts, null, 2), 'utf8');
console.log('Posts status written to scratch/posts_status.json');
