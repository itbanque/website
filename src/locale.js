// Locale routing helpers with no React dependency, shared by the app, SEO and the prerender script.
// English lives at the root ("/services"); every other locale is prefixed ("/zh/services").
export const defaultLocale = 'en';
export const locales = ['en', 'zh'];
export const htmlLang = { en: 'en', zh: 'zh-CN' };
export const ogLocale = { en: 'en_US', zh: 'zh_CN' };

// "/zh/services/" -> { locale: 'zh', path: '/services' }
export function splitLocale(pathname) {
  let locale = defaultLocale;
  let path = pathname;

  for (const candidate of locales) {
    if (candidate === defaultLocale) continue;
    if (pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`)) {
      locale = candidate;
      path = pathname.slice(candidate.length + 1) || '/';
    }
  }

  if (path.length > 1) path = path.replace(/\/+$/, '') || '/';
  return { locale, path };
}

// ('zh', '/services') -> '/zh/services'; ('zh', '/') -> '/zh'
export function localizePath(locale, path) {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}
