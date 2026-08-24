import type { APIRoute } from 'astro';
import { allPosts } from '../data/blogPosts';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, '') : 'https://treinamentobrigadadeincendio.com.br';
  const lastMod = new Date().toISOString().split('T')[0];

  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/formacao-de-brigada', priority: '1.0', changefreq: 'monthly' },
    { path: '/primeiros-socorros', priority: '0.9', changefreq: 'monthly' },
    { path: '/treinamento-in-company', priority: '0.9', changefreq: 'monthly' },
    { path: '/modulos-personalizados', priority: '0.9', changefreq: 'monthly' },
    { path: '/consultoria-tecnica', priority: '0.9', changefreq: 'monthly' },
    { path: '/plano-de-abandono-de-area', priority: '0.9', changefreq: 'monthly' },
    { path: '/simulados-de-emergencia', priority: '0.9', changefreq: 'monthly' },
    { path: '/diferenciais', priority: '0.8', changefreq: 'monthly' },
    { path: '/sobre', priority: '0.8', changefreq: 'monthly' },
    { path: '/contato', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/termos-de-uso', priority: '0.5', changefreq: 'monthly' },
    { path: '/politica-de-privacidade', priority: '0.5', changefreq: 'monthly' },
    { path: '/consideracoes-importantes', priority: '0.6', changefreq: 'monthly' },
    { path: '/trabalhe-conosco', priority: '0.6', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${allPosts
  .map(
    (post) => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
