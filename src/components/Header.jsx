import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData';

function LinkItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          Itbanque
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((state) => !state)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <LinkItem key={item.to} {...item} />
          ))}
        </nav>
      </div>

      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <LinkItem key={item.to} {...item} onClick={() => setOpen(false)} />
        ))}
      </nav>
    </header>
  );
}
