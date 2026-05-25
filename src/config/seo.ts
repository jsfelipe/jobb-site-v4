import seoData from './seo-data.json';

export const SITE_URL = seoData.siteUrl;

export const FAVICON_URL = seoData.faviconUrl;

export const GTM_ID = 'GTM-5GJQK9J';
export const GA_UA_ID = 'UA-2333523-48';
export const GA_ADS_ID = 'AW-16671625107';
export const FB_PIXEL_ID = '1034771331705073';

export type SeoMeta = {
  title: string;
  description: string;
  keywords?: string;
  noindex?: boolean;
};

export const DEFAULT_SEO: SeoMeta = seoData.defaultSeo;

export const ROUTE_SEO: Record<string, SeoMeta> = seoData.routeSeo;

export function getSeoForPath(pathname: string): SeoMeta {
  return ROUTE_SEO[pathname] ?? DEFAULT_SEO;
}

export function getCanonicalUrl(pathname: string): string {
  const path = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${SITE_URL}${path}`;
}

/** Rotas legadas do site Next (2023) → /funcionalidades */
export const FUNCIONALIDADES_LEGACY_REDIRECTS = [
  '/funcionalidades/orcamentos',
  '/funcionalidades/financeiro',
  '/funcionalidades/tarefas',
  '/funcionalidades/equipamentos',
  '/funcionalidades/cadastro',
  '/funcionalidades/ordem-do-dia',
] as const;

/** Rotas estáticas geradas no build (HTML com metas já renderizadas) */
export const PRERENDER_ROUTES = seoData.prerenderRoutes as readonly string[];
