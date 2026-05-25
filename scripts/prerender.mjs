/**
 * Gera HTML estático por rota após `vite build` (metas do SeoHead no <head>).
 * Sem Playwright — compatível com Vercel (sem libs do Chromium).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import seoData from '../src/config/seo-data.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getCanonicalUrl(pathname) {
  const segment = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${seoData.siteUrl}${segment}`;
}

function getSeoForPath(pathname) {
  return seoData.routeSeo[pathname] ?? seoData.defaultSeo;
}

function replaceTag(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html;
}

function applySeoToHtml(html, route) {
  const seo = getSeoForPath(route);
  const canonical = getCanonicalUrl(route);
  let out = html;

  out = replaceTag(out, /<title>[^<]*<\/title>/i, `<title>${escapeAttr(seo.title)}</title>`);

  out = replaceTag(
    out,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
  );

  if (seo.keywords) {
    out = replaceTag(
      out,
      /<meta\s+name="keywords"[^>]*>/i,
      `<meta name="keywords" content="${escapeAttr(seo.keywords)}" />`,
    );
  } else {
    out = out.replace(/<meta\s+name="keywords"[^>]*>\s*/i, '');
  }

  out = replaceTag(
    out,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
  );

  if (seo.noindex) {
    if (/<meta\s+name="robots"[^>]*>/i.test(out)) {
      out = replaceTag(
        out,
        /<meta\s+name="robots"[^>]*>/i,
        `<meta name="robots" content="noindex, follow" />`,
      );
    } else {
      out = out.replace('</head>', `    <meta name="robots" content="noindex, follow" />\n  </head>`);
    }
  } else {
    out = out.replace(/<meta\s+name="robots"[^>]*>\s*/i, '');
  }

  const ogPairs = [
    ['og:title', seo.title],
    ['og:description', seo.description],
    ['og:url', canonical],
  ];
  for (const [prop, content] of ogPairs) {
    out = replaceTag(
      out,
      new RegExp(`<meta\\s+property="${prop.replace(':', '\\:')}"[^>]*>`, 'i'),
      `<meta property="${prop}" content="${escapeAttr(content)}" />`,
    );
  }

  const twitterPairs = [
    ['twitter:title', seo.title],
    ['twitter:description', seo.description],
  ];
  for (const [name, content] of twitterPairs) {
    out = replaceTag(
      out,
      new RegExp(`<meta\\s+name="${name}"[^>]*>`, 'i'),
      `<meta name="${name}" content="${escapeAttr(content)}" />`,
    );
  }

  out = replaceTag(
    out,
    /<link\s+rel="icon"[^>]*>/i,
    `<link rel="icon" type="image/png" sizes="16x16" href="${escapeAttr(seoData.faviconUrl)}" />`,
  );

  return out;
}

function outputPathForRoute(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  const segment = route.replace(/^\//, '');
  return path.join(distDir, segment, 'index.html');
}

async function main() {
  if (process.env.SKIP_PRERENDER === '1') {
    console.log('[prerender] SKIP_PRERENDER=1 — ignorado.');
    return;
  }

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('[prerender] Execute "npm run build:client" antes do prerender.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  for (const route of seoData.prerenderRoutes) {
    const html = applySeoToHtml(template, route);
    const outFile = outputPathForRoute(route);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');
    console.log(`[prerender] ${route} → ${path.relative(root, outFile)}`);
  }

  console.log('[prerender] Concluído.');
}

main().catch((err) => {
  console.error('[prerender]', err);
  process.exit(1);
});
