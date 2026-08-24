const fs = require('fs');

const path = './src/data/blogPosts.ts';
let content = fs.readFileSync(path, 'utf8');

const newPost = `{
    slug: "brigada-voluntaria-vs-bombeiro-civil",
    title: "Brigada Voluntária ou Bombeiro Civil? A Escolha Legal e Segura",
    excerpt: "Descubra a diferença exata entre brigada voluntária e bombeiro civil. Entenda as obrigações legais para proteger sua empresa sem gastar mais que o necessário.",
    category: "Legislação & Normas",
    date: "02 de Julho, 2024",
    readTime: "4 min de leitura",
    author: "Eng. Roberto Silva",
    authorRole: "Especialista em Proteção Contra Incêndio, CREA-SP",
    authorBio: "Engenheiro de segurança com mais de 15 anos de experiência em projetos de proteção contra incêndio em grandes indústrias e condomínios logísticos.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Formatura de brigadistas corporativos após conclusão de treinamento de formação.",
    tags: ["Brigada Voluntária", "Bombeiro Civil", "Lei 11.901/2009", "NBR 14276", "Prevenção de Incêndios", "Segurança Corporativa", "Gestão de Riscos"],
    sections: [
      { id: "o-que-realmente-faz-uma-brigada-voluntaria", title: "O que realmente faz uma Brigada Voluntária?" },
      { id: "bombeiro-civil-o-profissional-dedicado", title: "Bombeiro Civil: O profissional dedicado" },
      { id: "diferencas-praticas-no-dia-a-dia-da-sua-empresa", title: "Diferenças práticas no dia a dia da sua empresa" },
      { id: "qual-modelo-a-lei-exige-para-o-seu-negocio", title: "Qual modelo a lei exige para o seu negócio?" },
      { id: "perguntas-frequentes-faq", title: "Perguntas Frequentes (FAQ)" }
    ],
    content: \`
<p>
Muitos gestores chegam até nós com uma dúvida que parece simples, mas gera dores de cabeça gigantescas: "Preciso contratar um bombeiro civil ou apenas treinar meus funcionários?". Durante nossas consultorias de regularização de AVCB, vemos que confundir esses dois papéis custa caro — não só em autuações, mas também na segurança real da equipe.
</p>
<p>
Vamos direto ao ponto. Entender essa distinção legal evita multas pesadas e garante que sua empresa tenha a resposta certa na hora de uma emergência.
</p>

<h2 id="o-que-realmente-faz-uma-brigada-voluntaria">O que realmente faz uma Brigada Voluntária?</h2>
<p>
A brigada de incêndio é formada pelo seu próprio time. São colaboradores normais — analistas, operadores, recepcionistas — que recebem um treinamento especializado. Eles atuam <strong>apenas como a primeira resposta</strong> até a chegada do resgate oficial. Essa formação segue a NBR 14276 e não exige remuneração extra pela função de segurança, pois ela acontece junto com as atividades diárias de cada um.
</p>

<h2 id="bombeiro-civil-o-profissional-dedicado">Bombeiro Civil: O profissional dedicado</h2>
<p>
Aqui a história muda de figura. O bombeiro civil não é um funcionário que "ajuda" na emergência. Ele é um profissional dedicado integralmente à prevenção e ao combate de riscos. 
Regulamentado pela Lei Federal 11.901/2009, esse especialista possui formação rigorosa, carga horária específica e piso salarial próprio. Um erro comum que observamos na prática é tentar substituir a brigada por um único bombeiro civil para economizar em treinamentos — uma péssima ideia que descumpre normas em 90% dos casos.
</p>

<h2 id="diferencas-praticas-no-dia-a-dia-da-sua-empresa">Diferenças práticas no dia a dia da sua empresa</h2>
<p>
Para clarear a decisão, olhe para esses quatro fatores centrais:
</p>
<ul>
  <li><strong>Vínculo empregatício:</strong> O brigadista acumula funções. O bombeiro civil trabalha exclusivamente com segurança.</li>
  <li><strong>Exigência legal:</strong> Brigadas seguem instruções técnicas estaduais e a NBR 14276. O bombeiro civil obedece à lei federal 11.901.</li>
  <li><strong>Custo envolvido:</strong> Treinar sua equipe é muito mais barato do que manter profissionais dedicados 24/7.</li>
  <li><strong>Jornada de trabalho:</strong> O brigadista atua apenas no momento do sinistro. O bombeiro civil faz rondas e inspeções diárias contínuas.</li>
</ul>

<h2 id="qual-modelo-a-lei-exige-para-o-seu-negocio">Qual modelo a lei exige para o seu negócio?</h2>
<p>
Se você administra um escritório, comércio comum ou fábrica de pequeno e médio porte, a brigada voluntária bem capacitada é a solução ideal e perfeitamente legal. 
Agora, se a sua responsabilidade envolve hospitais com mais de 200 leitos, shoppings centers, casas de show ou grandes refinarias, a contratação de bombeiros civis passa a ser obrigatória. Na dúvida, consulte o Corpo de Bombeiros da sua região.
</p>
<p>
Quer garantir que sua empresa está 100% dentro da lei? <strong>Fale com nossos especialistas</strong> e agende uma avaliação do seu projeto de prevenção contra incêndios.
</p>

<h2 id="perguntas-frequentes-faq">Perguntas Frequentes (FAQ)</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Minha empresa precisa ter brigada voluntária e bombeiro civil ao mesmo tempo?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">Depende da classificação de risco e ocupação do seu prédio. Em locais de grande aglomeração, como shoppings e estádios, a legislação exige a presença de ambos para atuar em conjunto.</p>
    </div>
  </div>
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">O brigadista voluntário ganha adicional de periculosidade?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">Não. Como o brigadista atua de forma voluntária e esporádica, apenas durante treinamentos ou emergências pontuais, a lei não exige o pagamento de adicional de periculosidade.</p>
    </div>
  </div>
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Posso contratar um bombeiro civil e dispensar a formação da brigada?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">Na maioria das normativas estaduais, não. A presença do bombeiro civil não anula a obrigatoriedade de treinar funcionários locais para compor a brigada de emergência da edificação.</p>
    </div>
  </div>
</div>
    \`
  }`;

const startIndex = content.indexOf('slug: "brigada-voluntaria-vs-bombeiro-civil"');
const prevBraceIndex = content.lastIndexOf('{', startIndex);

// Find the next slug
const nextSlugIndex = content.indexOf('slug: "prevencao-perdas-patrimoniais"');
const endBraceIndex = content.lastIndexOf('}', nextSlugIndex);

if (prevBraceIndex !== -1 && endBraceIndex !== -1 && nextSlugIndex !== -1) {
    const before = content.slice(0, prevBraceIndex);
    const after = content.slice(endBraceIndex + 1); // skip the '}'
    
    // We add the '}' to the newPost since endBraceIndex was pointing to '}' which we sliced off
    content = before + newPost + after;
    fs.writeFileSync(path, content, 'utf8');
    console.log("Updated post successfully.");
} else {
    console.log("Could not find the post bounds.");
}
