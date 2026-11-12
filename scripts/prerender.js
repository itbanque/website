// Runs after the client and SSR builds: writes one static HTML file per route so crawlers get real
// content, per-page <head> tags and a 200 status, plus 404.html and sitemap.xml.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, getSeo, indexablePaths, siteName, siteUrl } = await import(join(ssrDir, 'entry-server.js'));
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Keep "</script>" inside JSON from closing the tag early.
const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

function headTags(seo) {
  const meta = (attr, key, content) => `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  return [
    `<title>${escapeAttr(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'robots', seo.robots),
    seo.url ? `<link rel="canonical" href="${escapeAttr(seo.url)}" />` : '',
    meta('property', 'og:type', seo.type),
    meta('property', 'og:site_name', siteName),
    meta('property', 'og:locale', seo.ogLocale),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    seo.url ? meta('property', 'og:url', seo.url) : '',
    meta('property', 'og:image', seo.image),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', seo.image),
    ...seo.alternates.map(
      ({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${escapeAttr(href)}" data-seo />`
    ),
    ...seo.meta.map(([name, content]) => `<meta name="${name}" content="${escapeAttr(content)}" data-seo />`),
    ...seo.jsonLd.map((data) => `<script type="application/ld+json" data-seo>${safeJson(data)}</script>`)
  ]
    .filter(Boolean)
    .join('\n    ');
}

function page(path) {
  if (
    !template.includes('<html lang="en">') ||
    !template.includes('<!--seo-head-->') ||
    !template.includes('<div id="root"></div>')
  ) {
    throw new Error('dist/index.html is missing the <html lang>, <!--seo-head--> or #root placeholder');
  }
  const seo = getSeo(path);
  return template
    .replace('<html lang="en">', `<html lang="${seo.lang}">`)
    .replace('<!--seo-head-->', headTags(seo))
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);
}

for (const path of indexablePaths) {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(path));
}

writeFileSync(join(dist, '404.html'), page('/404'));

// Each URL lists its translations so search engines pair the language versions.
const urls = indexablePaths
  .map((path) => {
    const links = getSeo(path)
      .alternates.map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
      .join('\n');
    return `  <url>\n    <loc>${siteUrl}${path}</loc>\n${links}\n  </url>`;
  })
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${indexablePaths.length} pages, 404.html and sitemap.xml`);
