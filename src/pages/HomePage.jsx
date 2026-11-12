import { ArrowIcon, CtaPanel, Eyebrow, Icon } from '../components/ui';
import { Link, useLocale } from '../i18n';
import { caseStudyPath, paperPath } from '../seo';

export default function HomePage() {
  const { t, data } = useLocale();
  const { domains, processSteps, researchPapers, serviceCards, successStories } = data;
  const h = t.home;
  const paper = researchPapers[0];
  const layers = [...serviceCards].reverse();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="dot" />
              {h.pill}
            </div>
            <h1 className="display">{h.title}</h1>
            <p className="lead">{h.lead}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/contact">
                {h.primaryCta} <ArrowIcon />
              </Link>
              <Link className="btn btn-ghost btn-lg" to="/success">
                {h.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="layer-stack" aria-label={h.layersLabel}>
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

      <section className="container section">
        <div className="section-head row">
          <div>
            <Eyebrow>{h.servicesEyebrow}</Eyebrow>
            <h2 className="section-title">{h.servicesTitle}</h2>
          </div>
          <p className="section-intro">{h.servicesIntro}</p>
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
              <Eyebrow>{h.workEyebrow}</Eyebrow>
              <h2 className="section-title">{h.workTitle}</h2>
            </div>
            <Link className="text-link" to="/success">
              {h.workLink} <ArrowIcon />
            </Link>
          </div>
          <div className="case-grid">
            {successStories.map((story) => (
              <Link key={story.id} className="card case-card" to={caseStudyPath(story)}>
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
          <Eyebrow>{h.researchEyebrow}</Eyebrow>
          <h2 className="section-title">{h.researchTitle}</h2>
          <p className="muted">{h.researchIntro}</p>
        </div>
        <div className="research-feature">
          <article className="card tool-card">
            <div className="tag-line">
              <span className="tag">{t.common.paperTag}</span>
              <span>
                {paper.published} · {paper.author}
              </span>
            </div>
            <h3>
              <Link to={paperPath(paper)}>{paper.title}</Link>
            </h3>
            <p>{paper.summary}</p>
            <div className="button-row">
              <a className="btn btn-primary" href={paper.pdf} target="_blank" rel="noreferrer">
                {t.common.readPdf}
              </a>
              <Link className="btn btn-ghost" to="/research">
                {h.allResearch}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="rule-top">
        <div className="container section process">
          <div className="process-intro">
            <Eyebrow>{h.processEyebrow}</Eyebrow>
            <h2 className="section-title">{h.processTitle}</h2>
            <p className="muted">{h.processIntro}</p>
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
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
