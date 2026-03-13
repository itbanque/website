import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Itbanque</h3>
          <p>Building dependable data infrastructure for the next generation of AI systems.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/success">Success</Link>
            <Link to="/research">Research</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:contact@itbanque.com">contact@itbanque.com</a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/company/it-banque/" target="_blank" rel="noreferrer">
              it-banque
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Itbanque. All rights reserved.</span>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
