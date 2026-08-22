---
name: seo-blog-writer-claude
description: >-
  Use esta skill quando o usuário solicitar a redação, revisão, estruturação ou otimização de artigos para blog focados em SEO (Search Engine Optimization), GEO (Generative Engine Optimization) e tom humano Anti-AI.
---

# SEO Blog Writer Skill

Esta skill transforma qualquer material de pesquisa, notas, URLs ou temas em artigos de blog de altíssima qualidade, otimizados para SEO e GEO, com linguagem 100% natural e humana, prevenindo a detecção por ferramentas Anti-AI.

---

## ETAPA 1: Entender o Input do Usuário

O usuário poderá fornecer:
- Um tema/ideia de artigo.
- Um texto bruto, rascunho ou transcrição.
- Uma URL de artigo concorrente ou de referência.
- Uma palavra-chave principal ou intenção de busca.

Analise brevemente o conteúdo antes de escrever:
```text
Tipo de Input: [URL / Texto / Tema / Concorrente]
Tópico Principal: [Assunto central]
Público-Alvo: [Perfil dos leitores e clientes do nicho]
Ângulo/Diferencial: [Abordagem única e prática]
```

---

## ETAPA 2: Diretrizes de Redação Humana (Anti-AI Detection)

Regras fundamentais para garantir tom natural, humano e alto engajamento, atendendo aos critérios de E-E-A-T do Google.

### 1. Burstiness — Ritmo de Frases Variado
IAs tendem a escrever frases com tamanhos previsíveis e homogêneos.
- **Regra:** Alterne frases muito curtas (3 a 6 palavras) com frases mais longas e explicativas.
- Exemplo: *"Essa ferramenta economiza horas. Não por mágica — mas porque elimina as tarefas manuais e repetitivas que você vem adiando há semanas."*

### 2. Perplexidade — Vocabulário Natural e Expressões Diretas
- Use termos diretos, jargões reais do nicho e metáforas vivas.
- Evite construções acadêmicas ou formais demais se o objetivo for um tom conversacional e prático.

### 3. E-E-A-T — Sinais de Experiência Prática
- Inclua marcadores de primeira pessoa e vivência de campo:
  - *"Durante nossos treinamentos práticos..."*
  - *"Na rotina das empresas que atendemos, vemos que..."*
  - *"Um erro comum que observamos na prática é..."*
- Pelo menos 2 a 3 marcadores de experiência real a cada 500 palavras.

### 4. Expressões Banidas (Zero Tolerância com Vício de IA)
Elimine sumariamente as seguintes frases/expressões:
- *"No mundo de hoje / Na era digital / No cenário atual"*
- *"É importante notar / Vale ressaltar / Cabe destacar"*
- *"Em conclusão / Em resumo / Para finalizar"*
- *"Vamos mergulhar em / Vamos explorar"*
- *"Abrangente / robusto / alavancar / utilizar"*
- *"Este artigo irá cobrir..."*
- Qualquer parágrafo iniciando com *"Além disso,"*, *"Ademais,"*, *"Portanto,"* de forma repetitiva.

### 5. Formatação Dinâmica e Imprevisível
- Listas de tópicos não devem ter sempre exatamente 5 itens (varie entre 4, 6, 7 ou 9).
- Use negritos no meio das frases para destacar conceitos-chave.
- Utilize travessões — como este — para quebras de raciocínio.

---

## ETAPA 3: Estrutura Padrão de Saída

Entregue o conteúdo estruturado nos seguintes blocos prontos para publicação:

### 1. CAMPOS DO POST
- **Título do Post (H1):** Claro, focado no benefício e na palavra-chave. (50-65 caracteres)
- **Descrição Curta / Resumo:** 2 a 3 frases envolventes. (120-160 caracteres)
- **Categoria e Tags:** Tags estratégicas relacionadas ao nicho.

### 2. CONFIGURAÇÕES DE SEO
- **Título SEO (Title Tag):** Otimizado para buscas (máx. 60 caracteres).
- **Meta Description:** Com palavra-chave principal e chamada para ação (máx. 160 caracteres).
- **Palavras-Chave Foco:** Palavra-chave principal e variações de cauda longa.
- **Alt Text da Imagem de Capa:** Descritivo e otimizado.

### 3. SCHEMA DE FAQ (Rich Snippets & AI Search)
- Forneça de 3 a 5 perguntas frequentes em formato de Schema JSON-LD ou lista de Perguntas e Respostas diretas e objetivas (50-100 palavras por resposta).

### 4. SUMÁRIO / ÍNDICE (Table of Contents)
- Relação ordenada dos cabeçalhos H2.

### 5. CONTEÚDO DO ARTIGO (Markdown)
- Artigo completo estruturado com H2 e H3.
- Introdução direta (sem enrolação ou "neste artigo veremos").
- Parágrafos curtos e dinâmicos.
- Conclusão focada em Chamada para Ação (CTA) clara ou próximo passo prático.

---

## ETAPA 4: Checagem de Qualidade

Antes de responder, verifique:
- [ ] O artigo evita jargões genéricos de IA?
- [ ] A meta descrição possui menos de 160 caracteres?
- [ ] O título SEO possui menos de 60 caracteres?
- [ ] Existem marcadores de experiência ou aplicação prática no conteúdo?
- [ ] A leitura flui de forma natural e agradável?
