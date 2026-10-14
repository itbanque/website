import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand" aria-label="itbanque home">
          <img src="/brand/logo-lockup-ink.png" alt="itbanque" width="140" height="30" />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link className="btn btn-primary btn-sm" to="/contact">
            Start a project
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((state) => !state)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
        <Link className="btn btn-primary" to="/contact">
          Start a project
        </Link>
      </nav>
    </header>
  );
}
