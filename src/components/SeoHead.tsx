import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  FAVICON_URL,
  GA_ADS_ID,
  GA_UA_ID,
  getCanonicalUrl,
  getSeoForPath,
} from '@/config/seo';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function SeoHead() {
  const { pathname } = useLocation();
  const seo = getSeoForPath(pathname);
  const canonical = getCanonicalUrl(pathname);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_UA_ID, { page_path: pathname });
      window.gtag('config', GA_ADS_ID, { page_path: pathname });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords ? <meta name="keywords" content={seo.keywords} /> : null}
      <link rel="canonical" href={canonical} />
      {seo.noindex ? <meta name="robots" content="noindex, follow" /> : null}

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Sistema Jobb" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <link rel="icon" type="image/png" sizes="16x16" href={FAVICON_URL} />
    </Helmet>
  );
}
