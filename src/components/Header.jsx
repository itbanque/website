import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link, NavLink, useLocale } from '../i18n';
import { localizePath, splitLocale } from '../locale';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, data } = useLocale();
  const { navItems } = data;
  const { switchTo } = t.header;

  // Same page in the other language.
  const languageSwitch = (
    <RouterLink
      className="lang-switch"
      to={localizePath(switchTo.locale, splitLocale(location.pathname).path) + location.hash}
      lang={switchTo.lang}
      hrefLang={switchTo.lang}
      aria-label={switchTo.aria}
    >
      {switchTo.label}
    </RouterLink>
  );

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand" aria-label={t.header.homeLabel}>
          <img src="/brand/logo-lockup-ink.webp" alt="itbanque" width="151" height="30" />
        </Link>

        <nav className="desktop-nav" aria-label={t.header.mainNav}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          {languageSwitch}
          <Link className="btn btn-primary btn-sm" to="/contact">
            {t.common.startProject}
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((state) => !state)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label={t.header.mobileNav}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
        {languageSwitch}
        <Link className="btn btn-primary" to="/contact">
          {t.common.startProject}
        </Link>
      </nav>
    </header>
  );
}
