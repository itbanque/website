import { Link } from 'react-router-dom';
import { ArrowIcon, CtaPanel, Eyebrow, Icon } from '../components/ui';
import { domains, processSteps, researchPapers, serviceCards, successStories } from '../data/siteData';

export default function HomePage() {
  const paper = researchPapers[0];
  const layers = [...serviceCards].reverse();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="dot" />
              Enterprise AI infrastructure
            </div>
            <h1 className="display">
              Data, models and software — built to reach production.
            </h1>
            <p className="lead">
              itbanque designs and operates production-grade data, model and software systems that move from
              prototype to reliable business value.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/contact">
                Start a conversation <ArrowIcon />
              </Link>
              <Link className="btn btn-ghost btn-lg" to="/success">
                See our work
              </Link>
            </div>
          </div>

          <div className="layer-stack" aria-label="Service layers">
            {layers.map((layer, position) => (
              <div key={layer.key} className={`layer layer-${position} ${layer.key === 'data' ? 'layer-primary' : ''}`}>
                <span className="layer-index">{layer.index}</span>
                <div>
                  <div className="layer-title">{layer.short}</div>
                  <div className="layer-tagline">{layer.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" aria-label="Domains we work in">
        <div className="container domain-strip">
          {domains.map((domain) => (
            <div className="domain" key={domain.key}>
              <span className="accent-icon">
                <Icon name={domain.key} size={28} />
              </span>
              <h3>{domain.title}</h3>
              <p>{domain.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head row">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="section-title">Three layers. One delivery team.</h2>
          </div>
          <p className="section-intro">
            Integrated service layers that support modern AI delivery — engage one, or let us carry the whole stack.
          </p>
        </div>
        <div className="card-grid">
          {serviceCards.map((card) => (
            <article key={card.key} className="card service-card">
              <div className="card-top">
                <span className="mono-meta">
                  {card.index} / {card.short}
                </span>
                <span className="icon-box">
                  <Icon name={card.key} />
                </span>
              </div>
              <h3>{card.title}</h3>
              <ul className="rule-list">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="band-dark">
        <div className="container section">
          <div className="section-head row">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="section-title">Shipped, measured, in use.</h2>
            </div>
            <Link className="text-link" to="/success">
              All case studies <ArrowIcon />
            </Link>
          </div>
          <div className="case-grid">
            {successStories.map((story) => (
              <Link key={story.id} className="card case-card" to={`/success#${story.id}`}>
                <div className="mono-meta">{story.label}</div>
                <h3>{story.cardTitle}</h3>
                <p>{story.summary}</p>
                <div className="case-figures">
                  {story.figures.map((figure, index) => (
                    <div key={figure.label}>
                      <div className={`figure ${index === 0 ? 'accent' : ''}`}>{figure.value}</div>
                      <div className="figure-label">{figure.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container section process">
        <div className="process-intro">
          <Eyebrow>Research</Eyebrow>
          <h2 className="section-title">We publish what we learn.</h2>
          <p className="muted">Applied work from our delivery programs, written up so others can build on it.</p>
        </div>
        <div className="research-feature">
          <article className="card tool-card">
            <div className="tag-line">
              <span className="tag">Paper</span>
              <span>
                {paper.published} · {paper.author}
              </span>
            </div>
            <h3>{paper.title}</h3>
            <p>{paper.summary}</p>
            <div className="button-row">
              <a className="btn btn-primary" href={paper.pdf} target="_blank" rel="noreferrer">
                Read PDF
              </a>
              <Link className="btn btn-ghost" to="/research">
                All research
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="rule-top">
        <div className="container section process">
          <div className="process-intro">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="section-title">Move forward, or fall behind.</h2>
            <p className="muted">
              Infrastructure isn’t the headline, but it decides whether AI progress lasts. Our team combines
              infrastructure engineering, ML research, linguistics and product execution.
            </p>
          </div>
          <ol className="steps">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <div className="mono-meta accent">Step {String(index + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
