import { Link } from 'react-router-dom';
import { serviceCards } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-badge">Enterprise AI Infrastructure</div>
        <h1>Intelligent Data and AI Systems Built for Measurable Outcomes</h1>
        <p>
          Itbanque helps teams design and operate production-grade data, model, and software systems that
          move from prototype to reliable business value.
        </p>
        <div className="hero-actions">
          <a className="button" href="mailto:contact@itbanque.com">
            Start a Conversation
          </a>
          <Link className="button button-secondary" to="/services">
            Explore Services
          </Link>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <h2>What We Offer</h2>
          <p>Three integrated service layers that support modern AI delivery.</p>
        </div>
        <div className="card-grid">
          {serviceCards.map((card) => (
            <article key={card.title} className="card">
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
