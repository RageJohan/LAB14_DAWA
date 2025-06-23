import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://lab14-dawa.onrender.com';

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

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
