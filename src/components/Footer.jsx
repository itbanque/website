import { contactEmail, linkedInUrl } from '../data/siteData';
import { Link, useLocale } from '../i18n';

export default function Footer() {
  const { t } = useLocale();
  const f = t.footer;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/brand/logo-lockup-ink.webp" alt="itbanque" width="140" height="28" loading="lazy" />
          <p>{f.tagline}</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h3>{f.company}</h3>
            <Link to="/services">{f.services}</Link>
            <Link to="/success">{f.work}</Link>
            <Link to="/about">{f.about}</Link>
          </div>
          <div className="footer-col">
            <h3>{f.resources}</h3>
            <Link to="/research">{f.research}</Link>
            <Link to="/privacy">{f.privacy}</Link>
          </div>
          <div className="footer-col">
            <h3>{f.contact}</h3>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{f.rights}</span>
        <span>itbanque.com</span>
      </div>
    </footer>
  );
}
