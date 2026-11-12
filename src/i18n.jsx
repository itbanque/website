import { createContext, useContext, useMemo } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import * as dataEn from './data/siteData';
import * as dataZh from './data/siteData.zh';
import stringsEn from './locales/en';
import stringsZh from './locales/zh';
import { defaultLocale, localizePath, splitLocale } from './locale';

export const siteData = { en: dataEn, zh: dataZh };
export const strings = { en: stringsEn, zh: stringsZh };

const LocaleContext = createContext(defaultLocale);

// The URL is the single source of truth for the active locale.
export function LocaleProvider({ children }) {
  const { pathname } = useLocation();
  const { locale } = splitLocale(pathname);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

// locale: 'en' | 'zh' · t: UI strings · data: localized site content · href: prefixes an internal path
export function useLocale() {
  const locale = useContext(LocaleContext);
  return useMemo(
    () => ({
      locale,
      t: strings[locale],
      data: siteData[locale],
      href: (path) => localizePath(locale, path)
    }),
    [locale]
  );
}

// Drop-in replacements for react-router's links: `to` is written without a locale prefix.
export function Link({ to, ...props }) {
  const { href } = useLocale();
  return <RouterLink to={href(to)} {...props} />;
}

export function NavLink({ to, ...props }) {
  const { href } = useLocale();
  return <RouterNavLink to={href(to)} {...props} />;
}
