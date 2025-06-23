export default function handler(req, res) {
  const baseUrl = 'https://mi-proyecto-seo.com'; // Cámbialo al dominio real
  const pages = ['/', '/home', '/blog', '/contacto'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <changefreq>weekly</changefreq>
    </url>`;
    })
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
