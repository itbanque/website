import { Link } from 'react-router-dom';
import { contactEmail } from '../data/siteData';

export function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const iconPaths = {
  data: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  models: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M6.7 7.1l3.6 3.8M6.7 16.9l3.6-3.8M13.7 10.9l3.6-3.8M13.7 13.1l3.6 3.8" />
    </>
  ),
  software: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18M8 13l-2 2 2 2M12 17h4" />
    </>
  ),
  language: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  vision: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10.5l5-3v9l-5-3" />
    </>
  ),
  speech: <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" />,
  automation: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </>
  )
};

export function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

export function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display">{title}</h1>
      {children}
    </section>
  );
}

export function CtaPanel({ title = 'Let’s build intelligent systems together.' }) {
  return (
    <section className="container section-bottom">
      <div className="cta-panel">
        <img className="cta-mark" src="/brand/mark-glow.png" alt="" aria-hidden="true" />
        <div className="cta-copy">
          <div className="eyebrow-pill">
            <span className="dot" />
            Reply within 24–48 hours
          </div>
          <h2>{title}</h2>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-primary btn-lg" to="/contact">
            Start a project <ArrowIcon />
          </Link>
          <a className="cta-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
