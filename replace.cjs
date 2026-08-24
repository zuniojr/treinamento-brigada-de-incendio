const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogPosts.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newPost = `{
    slug: "brigada-voluntaria-vs-bombeiro-civil",
    title: "Brigada Voluntária ou Bombeiro Civil: Qual a Diferença?",
    excerpt: "Confundir brigada voluntária com bombeiro civil pode gerar multas pesadas. Entenda as exigências legais e descubra o modelo ideal para a sua empresa agora.",
    category: "Legislação & Normas",
    date: "02 de Julho, 2024",
    readTime: "4 min de leitura",
    author: "Eng. Roberto Silva",
    authorRole: "Especialista em Proteção Contra Incêndio, CREA-SP",
    authorBio: "Engenheiro de segurança com mais de 15 anos de experiência em projetos de proteção contra incêndio em grandes indústrias e condomínios logísticos.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Formatura de brigadistas corporativos após conclusão de treinamento de formação.",
    tags: [
      "brigada voluntária",
      "bombeiro civil",
      "diferença bombeiro civil e brigadista",
      "quando contratar bombeiro civil",
      "lei 11901 bombeiro civil",
      "nbr 14276",
      "treinamento brigada corporativa",
      "bombeiro civil terceirizado"
    ],
    sections: [
      { id: "risco-confusao", title: "1. O Risco de Confundir as Duas Funções" },
      { id: "exigencias-brigada", title: "2. O que a Lei Exige da Brigada Voluntária?" },
      { id: "quando-bombeiro-civil-obrigatorio", title: "3. Quando o Bombeiro Civil é Obrigatório?" },
      { id: "diferencas-praticas", title: "4. Diferenças Práticas: Custos e Rotina" },
      { id: "veredito-empresa", title: "5. O Veredito para a Sua Empresa" }
    ],
    content: \`
<p>
Muitos gestores chegam até nós com a mesma dúvida: "Preciso contratar um bombeiro civil ou apenas treinar meus funcionários?"
</p>
<p>
Confundir essas duas funções não é apenas um detalhe técnico. É um erro de conformidade que pode custar caro — tanto em autuações do Corpo de Bombeiros quanto durante uma emergência real, quando a apólice de seguro patrimonial pode ser invalidada.
</p>

<h2 id="risco-confusao">1. O Risco de Confundir as Duas Funções</h2>
<p>
Durante nossas consultorias para renovação de AVCB, frequentemente encontramos empresas de médio porte pagando caro por contratos terceirizados de bombeiro civil sem necessidade. Por outro lado, vemos grandes eventos operando apenas com voluntários, descumprindo a legislação. 
</p>
<p>
A linha que divide a <strong>brigada voluntária</strong> e o <strong>bombeiro civil profissional</strong> é muito clara na lei. Entender isso economiza recursos e garante a segurança jurídica da operação.
</p>

<h2 id="exigencias-brigada">2. O que a Lei Exige da Brigada Voluntária?</h2>
<p>
A brigada de incêndio voluntária é formada pelos próprios colaboradores da sua empresa. Eles exercem suas funções diárias normais, mas recebem treinamento específico para agir como a <strong>primeira linha de defesa</strong> em caso de princípio de incêndio ou emergência médica.
</p>
<p>
Ela é regulamentada pela norma técnica <strong>NBR 14276</strong> e instruída pelas normas do Corpo de Bombeiros estadual (como o CBMSC).
</p>
<ul>
  <li><strong>Vínculo:</strong> São funcionários comuns (RH, operação, vendas) que se voluntariam ou são designados.</li>
  <li><strong>Remuneração:</strong> Não recebem adicional salarial por serem brigadistas, salvo acordos sindicais específicos.</li>
  <li><strong>Foco:</strong> Evacuação segura, uso de extintores e primeiros socorros básicos até o socorro profissional chegar.</li>
</ul>

<h2 id="quando-bombeiro-civil-obrigatorio">3. Quando o Bombeiro Civil é Obrigatório?</h2>
<p>
O Bombeiro Civil é um profissional com dedicação exclusiva. Ele não atende telefone na recepção e não opera empilhadeira. A função dele é puramente prevenir e combater riscos.
</p>
<p>
A profissão é regida pela <strong>Lei Federal 11.901/2009</strong>. Na prática, a contratação desse profissional é obrigatória em cenários de alto risco e grande concentração de pessoas, como:
</p>
<ul>
  <li>Shopping centers e grandes lojas de departamento.</li>
  <li>Eventos com grande aglomeração (shows, estádios).</li>
  <li>Hospitais, clínicas e casas de repouso de grande porte.</li>
  <li>Indústrias com alto risco de explosão (como refinarias).</li>
</ul>

<h2 id="diferencas-praticas">4. Diferenças Práticas: Custos e Rotina</h2>
<p>
Manter uma brigada voluntária exige um investimento anual baixo: basicamente o custo do treinamento (reciclagem anual) e o tempo que os colaboradores passam na instrução. 
</p>
<p>
Já um Bombeiro Civil representa um custo de folha de pagamento significativo. Ele possui piso salarial, adicional de periculosidade (30%) e jornada específica (geralmente escala 12x36). Um erro comum que observamos na prática é a empresa contratar um vigilante e exigir que ele acumule a função de bombeiro civil — uma prática ilegal que gera passivo trabalhista gigantesco.
</p>

<h2 id="veredito-empresa">5. O Veredito para a Sua Empresa</h2>
<p>
Para a imensa maioria das empresas — comércios, escritórios, transportadoras e indústrias de risco médio —, a <strong>Brigada Voluntária bem treinada</strong> resolve 100% da exigência legal. Invista em treinamentos práticos de qualidade para seus funcionários. 
</p>
<p>
Se você ainda tem dúvidas sobre o enquadramento da sua edificação, <a href="/contato">fale com nossa equipe de engenharia</a>. Nós analisamos seu projeto arquitetônico e dizemos exatamente o que a legislação do seu estado exige.
</p>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O brigadista voluntário recebe adicional de periculosidade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O brigadista voluntário exerce suas funções normais de trabalho e atua na brigada apenas em emergências, não tendo direito ao adicional de periculosidade exclusivo da categoria de bombeiro civil."
      }
    },
    {
      "@type": "Question",
      "name": "A empresa é obrigada a contratar bombeiro civil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A contratação só é obrigatória para edificações específicas de alto risco ou grande aglomeração, como shoppings, estádios e indústrias de alto risco, conforme a legislação estadual e a Lei 11.901/2009."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a validade do treinamento da brigada voluntária?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O treinamento da brigada de incêndio voluntária deve ser renovado a cada 12 meses, através de reciclagem teórica e prática obrigatória."
      }
    }
  ]
}
</script>
\`
  }`;

const startIndex = content.indexOf('slug: "brigada-voluntaria-vs-bombeiro-civil"');
const endIndex = content.indexOf('slug: "prevencao-perdas-patrimoniais"');

if (startIndex !== -1 && endIndex !== -1) {
    // Find the opening brace before startIndex
    const braceStartIndex = content.lastIndexOf('{', startIndex);
    
    // Find the comma and closing brace before endIndex
    const commaIndex = content.lastIndexOf(',', endIndex);
    const braceEndIndex = content.lastIndexOf('}', commaIndex);
    
    if (braceStartIndex !== -1 && braceEndIndex !== -1) {
        const firstPart = content.slice(0, braceStartIndex);
        const secondPart = content.slice(braceEndIndex + 1); // skip the '}'
        
        const newContent = firstPart + newPost + secondPart;
        
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log("Substituição concluída com sucesso usando indexOf!");
    } else {
        console.log("Falha ao encontrar chaves delimitadoras.");
    }
} else {
    console.log("Não foi possível encontrar as strings de referência.");
}

