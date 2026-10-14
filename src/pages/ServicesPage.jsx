import { CtaPanel, Eyebrow, Icon, PageHero } from '../components/ui';
import { domains, processSteps, serviceCards } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end delivery, from raw data to running software."
      >
        <p className="lead">
          Data pipelines, model systems and software engineering — engage one layer, or let one team carry the
          whole stack.
        </p>
      </PageHero>

      <section className="container section-tight">
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
              <h2 className="card-title">{card.title}</h2>
              <p className="mono-meta">{card.tagline}</p>
              <ul className="rule-list">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
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

      <section className="container section process">
        <div className="process-intro">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="section-title">Clear outcomes, measurable milestones.</h2>
          <p className="muted">
            We work hands-on with your team and provide documentation and delivery standards that support long-term
            maintainability.
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
      </section>


      <CtaPanel />
    </>
  );
}
