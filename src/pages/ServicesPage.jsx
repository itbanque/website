import { Link } from 'react-router-dom';
import { serviceCards } from '../data/siteData';

export default function ServicesPage() {
  return (
    <section className="container section">
      <div className="section-heading">
        <h1>Services</h1>
        <p>End-to-end delivery across data pipelines, model systems, and software engineering.</p>
      </div>
      <div className="card-grid">
        {serviceCards.map((card) => (
          <article key={card.title} className="card">
            <h2>{card.title}</h2>
            <ul>
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="values-callout service-tool-callout">
        <h2>Benchmark Explorer</h2>
        <p>
          Compare model performance across coding, reasoning, long-context, multimodal, and academic benchmarks
          to support model selection for your product and workflow.
        </p>
        <Link className="button" to="/models">
          Open Model Comparison
        </Link>
      </article>
    </section>
  );
}
