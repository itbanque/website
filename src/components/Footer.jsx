import { Link } from 'react-router-dom';
import { contactEmail, linkedInUrl } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/brand/logo-lockup-ink.png" alt="itbanque" width="130" height="28" />
          <p>Dependable data infrastructure for the next generation of AI systems.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h3>Company</h3>
            <Link to="/services">Services</Link>
            <Link to="/success">Work</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer-col">
            <h3>Resources</h3>
            <Link to="/research">Research</Link>
            <Link to="/privacy">Privacy policy</Link>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 itbanque. All rights reserved.</span>
        <span>itbanque.com</span>
      </div>
    </footer>
  );
}
