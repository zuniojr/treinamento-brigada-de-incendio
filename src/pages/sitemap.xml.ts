import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, '') : 'https://treinamentobrigadadeincendio.com.br';
  const lastMod = new Date().toISOString().split('T')[0];

  const blogPosts = [
    'atestado-de-brigada-de-incendio',
    'broche-brigada-de-incendio',
    'formacao-de-brigadistas',
    'validade-do-treinamento-de-brigada-de-incendio',
    'logo-brigada-de-incendio',
    'organograma-brigada-de-incendio',
    'botom-brigada-de-incendio',
    'treinamento-de-brigada-de-incendio-guia-completo',
    'brigada-de-incendio-barra-velha-sc',
    'botoes-brigada-de-incendio',
    'o-que-e-brigada-de-incendio',
    'validade-do-treinamento-de-brigada-de-incendio-itajai',
    'brigada-de-incendio-em-condominios',
    'curso-de-formacao-de-brigada-de-incendio-em-barra-velha-sc',
    'curso-de-combate-a-incendio-para-empresas',
    'treinamento-de-combate-a-incendio-empresarial',
    'curso-de-brigada-para-empresas-em-barra-velha-sc',
    'bracadeira-brigada-de-incendio'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/primeiros-socorros</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/treinamento-in-company</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/modulos-personalizados</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/consultoria-tecnica</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/plano-de-abandono-de-area</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/simulados-de-emergencia</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/diferenciais</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/contato</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/termos-de-uso</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${siteUrl}/politica-de-privacidade</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${siteUrl}/consideracoes-importantes</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${siteUrl}/trabalhe-conosco</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${siteUrl}/blog</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${blogPosts
  .map(
    (slug) => `  <url>
    <loc>${siteUrl}/blog/${slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
