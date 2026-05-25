/**
 * Gera HTML estático por rota após `vite build` (metas do react-helmet no HTML).
 * Requer: npm run build && npx playwright install chromium
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');
const previewPort = 4173;
const previewUrl = `http://127.0.0.1:${previewPort}`;

const PRERENDER_ROUTES = [
  '/',
  '/funcionalidades',
  '/clientes',
  '/estudantes-professores',
  '/teste-gratis',
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* servidor ainda não subiu */
    }
    await sleep(500);
  }
  throw new Error(`Preview não respondeu em ${url}`);
}

function startPreview() {
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  return spawn(npx, ['vite', 'preview', '--port', String(previewPort), '--strictPort'], {
    cwd: root,
    stdio: 'inherit',
  });
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

  if (!fs.existsSync(path.join(distDir, 'index.html'))) {
    console.error('[prerender] Execute "npm run build" antes do prerender.');
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error(
      '[prerender] Playwright não instalado. Rode: npm i -D playwright && npx playwright install chromium',
    );
    process.exit(1);
  }

  const preview = startPreview();

  try {
    await waitForServer(previewUrl);
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    for (const route of PRERENDER_ROUTES) {
      const url = `${previewUrl}${route}`;
      console.log(`[prerender] ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
      await page.waitForSelector('#root > *', { timeout: 30_000 });

      const html = await page.content();
      const outFile = outputPathForRoute(route);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html, 'utf8');
      console.log(`[prerender] → ${path.relative(root, outFile)}`);
    }

    await browser.close();
    console.log('[prerender] Concluído.');
  } finally {
    preview.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error('[prerender]', err);
  process.exit(1);
});
