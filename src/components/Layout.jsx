import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SeoManager from './SeoManager';

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

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <SeoManager />
      <ScrollManager />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
