import { CtaPanel, Eyebrow, PageHero } from '../components/ui';
import { processSteps } from '../data/siteData';

const blocks = [
  {
    title: 'Why infrastructure matters',
    body: 'Infrastructure is not the headline, but it determines whether AI progress is durable. We design systems where experiments can scale, evaluations stay consistent, and quality remains traceable.'
  },
  {
    title: 'Our mission',
    body: 'We accelerate responsible AI by building dependable data infrastructure. From raw input to validated model outputs, our work is driven by quality, transparency, and reproducibility.'
  },
  {
    title: 'Our team',
    body: 'Our team combines infrastructure engineering, ML research, linguistics, and product execution experience. We have shipped critical systems in both startups and enterprise environments.'
  },
  {
    title: 'How we operate',
    body: 'Every engagement starts with clear outcomes and measurable milestones. We work hands-on with your team and provide documentation and delivery standards that support long-term maintainability.'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About itbanque"
        title="Enterprise-grade infrastructure for real-world AI programs."
      />

      <section className="container section-tight">
        <div className="about-grid">
          {blocks.map((block, index) => (
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
          <Eyebrow>Our values</Eyebrow>
          <h2 className="section-title">Move forward, or fall behind.</h2>
          <p className="muted">
            We build with purpose, focus on measurable outcomes, and deliver systems that stand the test of time.
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
