import Header from './Header';
import Footer from './Footer';
import SeoManager from './SeoManager';

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <SeoManager />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
