export const SITE_URL = 'https://sistemajobb.com.br';

export const FAVICON_URL =
  'https://arquivos-jobbgestor.s3.amazonaws.com/appImgs/favicon.png';

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

export const DEFAULT_SEO: SeoMeta = {
  title:
    'Sistema de Gestão para Produtoras de Vídeo, Eventos, Cinema, Áudio, Audiovisual e Economia Criativa - Sistema Jobb',
  description:
    'Gerencie sua Produtora de Vídeo, Cinema, Agência de Eventos, Áudio e Estúdio. Gestão Economia Criativa. Controle todos os processos e custos em cada etapa.',
  keywords:
    'Sistema produtora video, sistema produtora audio, Vídeo, Agência de Eventos, eventos corporativos,Áudio, Sistemas Vídeo, economia criativa, Estúdios, Produtoras Vídeo, Estúdios áudio, controle financeiro, software',
};

export const ROUTE_SEO: Record<string, SeoMeta> = {
  '/': DEFAULT_SEO,
  '/funcionalidades': {
    title: 'Funcionalidades | Sistema Jobb',
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
  },
  '/clientes': {
    title: 'Clientes | Sistema Jobb',
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
  },
  '/estudantes-professores': {
    title: 'Estudantes e Professores | Sistema Jobb',
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
  },
  '/politica-de-privacidade': {
    title: 'Política de Privacidade | Sistema Jobb',
    description: 'Política de privacidade do Sistema Jobb.',
    noindex: true,
  },
  '/termos-de-uso': {
    title: 'Termos de Uso | Sistema Jobb',
    description: 'Termos de uso do Sistema Jobb.',
    noindex: true,
  },
  '/teste-gratis': {
    title: 'Teste Grátis | Sistema Jobb',
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
  },
  '/teste-gratis/sucesso': {
    title: 'Cadastro realizado | Sistema Jobb',
    description: DEFAULT_SEO.description,
    noindex: true,
  },
  '/teste-gratis/pagamentosuccess': {
    title: 'Pagamento confirmado | Sistema Jobb',
    description: DEFAULT_SEO.description,
    noindex: true,
  },
};

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
export const PRERENDER_ROUTES = [
  '/',
  '/funcionalidades',
  '/clientes',
  '/estudantes-professores',
  '/teste-gratis',
] as const;
