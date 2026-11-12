import { CtaPanel, Eyebrow, Icon, PageHero } from '../components/ui';
import { useLocale } from '../i18n';

export default function ServicesPage() {
  const { t, data } = useLocale();
  const { domains, processSteps, serviceCards } = data;
  const s = t.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title}>
        <p className="lead">{s.lead}</p>
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

      <section className="band" aria-label={t.common.domainsLabel}>
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
          <Eyebrow>{s.processEyebrow}</Eyebrow>
          <h2 className="section-title">{s.processTitle}</h2>
          <p className="muted">{s.processIntro}</p>
        </div>
        <ol className="steps">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <div className="mono-meta accent">{t.common.step(String(index + 1).padStart(2, '0'))}</div>
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
