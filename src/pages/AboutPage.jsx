import { CtaPanel, Eyebrow, PageHero } from '../components/ui';
import { useLocale } from '../i18n';

export default function AboutPage() {
  const { t, data } = useLocale();
  const a = t.about;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} />

      <section className="container section-tight">
        <div className="about-grid">
          {a.blocks.map((block, index) => (
            <article key={block.title} className="card">
              <div className="mono-meta accent">{String(index + 1).padStart(2, '0')}</div>
              <h2 className="card-title">{block.title}</h2>
              <p className="muted">{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section process">
        <div className="process-intro">
          <Eyebrow>{a.valuesEyebrow}</Eyebrow>
          <h2 className="section-title">{a.valuesTitle}</h2>
          <p className="muted">{a.valuesIntro}</p>
        </div>
        <ol className="steps">
          {data.processSteps.map((step, index) => (
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
