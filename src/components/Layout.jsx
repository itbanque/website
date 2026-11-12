import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SeoManager from './SeoManager';
import { LocaleProvider, useLocale } from '../i18n';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function Shell({ children }) {
  const { locale } = useLocale();
  return (
    <div className="app-shell" data-locale={locale}>
      <SeoManager />
      <ScrollManager />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <LocaleProvider>
      <Shell>{children}</Shell>
    </LocaleProvider>
  );
}
