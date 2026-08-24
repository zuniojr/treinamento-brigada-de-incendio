const fs = require('fs');
const { execSync } = require('child_process');

try {
  // 1. Obter o arquivo íntegro do commit anterior via git show
  console.log('Obtendo src/data/blogPosts.ts do commit a2d6615...');
  const oldContent = execSync('git show a2d6615:src/data/blogPosts.ts', { encoding: 'utf8' });

  // 2. Extrair o post de Equipamentos do oldContent
  const equipSlug = 'slug: "equipamentos-essenciais-combate-incendio"';
  const nextSlug = 'slug: "primeiros-socorros-ambiente-corporativo"';

  const equipSlugIdx = oldContent.indexOf(equipSlug);
  if (equipSlugIdx === -1) {
    throw new Error('Equipamentos slug não encontrado no arquivo antigo!');
  }
  const equipStartIdx = oldContent.lastIndexOf('{', equipSlugIdx);

  const nextSlugIdx = oldContent.indexOf(nextSlug);
  if (nextSlugIdx === -1) {
    throw new Error('Primeiros socorros slug não encontrado no arquivo antigo!');
  }
  // Encontrar o fechamento do objeto de Equipamentos antes de Primeiros Socorros
  const equipEndIdx = oldContent.lastIndexOf('},', nextSlugIdx) + 2; // incluir "},"

  const cleanEquipBlock = oldContent.slice(equipStartIdx, equipEndIdx);
  console.log('Bloco de equipamentos íntegro extraído. Tamanho:', cleanEquipBlock.length);

  // 3. Ler o arquivo atual
  const currentContent = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

  // 4. Achar a região quebrada no arquivo atual
  const currentEquipSlugIdx = currentContent.indexOf(equipSlug);
  if (currentEquipSlugIdx === -1) {
    throw new Error('Equipamentos slug não encontrado no arquivo atual!');
  }
  const currentEquipStartIdx = currentContent.lastIndexOf('{', currentEquipSlugIdx);

  // Achar o primeiros-socorros REAL e íntegro no arquivo atual
  // Ele deve vir depois da região corrompida. O primeiros-socorros real começa com slug, title, excerpt etc.
  // Vamos buscar por 'slug: "primeiros-socorros-ambiente-corporativo"' a partir do final da região corrompida.
  // A região corrompida termina com a reabertura do primeiros-socorros real.
  // Vamos buscar o segundo índice de primeiros-socorros slug no arquivo atual (o primeiro é o quebrado, o segundo é o real)
  const firstSocorrosIdx = currentContent.indexOf(nextSlug);
  const secondSocorrosIdx = currentContent.indexOf(nextSlug, firstSocorrosIdx + 100);

  if (secondSocorrosIdx === -1) {
    throw new Error('Segundo (real) slug de Primeiros Socorros não encontrado no arquivo atual!');
  }
  const currentSocorrosStartIdx = currentContent.lastIndexOf('{', secondSocorrosIdx);

  // 5. Reconstruir o arquivo atual
  const before = currentContent.slice(0, currentEquipStartIdx);
  const after = currentContent.slice(currentSocorrosStartIdx);

  // Vamos formatar bonitinho para alinhar as chaves
  const newContent = before + cleanEquipBlock + '\n  ' + after;

  fs.writeFileSync('src/data/blogPosts.ts', newContent, 'utf8');
  console.log('Arquivo src/data/blogPosts.ts corrigido com sucesso!');

} catch (err) {
  console.error('Erro ao corrigir o arquivo:', err.message);
  process.exit(1);
}
