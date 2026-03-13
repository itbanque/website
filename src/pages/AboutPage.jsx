const blocks = [
  {
    title: 'Why Infrastructure Matters',
    body: 'Infrastructure is not the headline, but it determines whether AI progress is durable. We design systems where experiments can scale, evaluations stay consistent, and quality remains traceable.'
  },
  {
    title: 'Our Mission',
    body: 'We accelerate responsible AI by building dependable data infrastructure. From raw input to validated model outputs, our work is driven by quality, transparency, and reproducibility.'
  },
  {
    title: 'Our Team',
    body: 'Our team combines infrastructure engineering, ML research, linguistics, and product execution experience. We have shipped critical systems in both startups and enterprise environments.'
  },
  {
    title: 'How We Operate',
    body: 'Every engagement starts with clear outcomes and measurable milestones. We work hands-on with your team and provide documentation and delivery standards that support long-term maintainability.'
  }
];

export default function AboutPage() {
  return (
    <section className="container section">
      <div className="section-heading">
        <h1>About Itbanque</h1>
        <p>Enterprise-grade infrastructure for real-world AI programs.</p>
      </div>
      <div className="split-grid">
        {blocks.map((block) => (
          <article key={block.title} className="panel">
            <h2>{block.title}</h2>
            <p>{block.body}</p>
          </article>
        ))}
      </div>
      <article className="values-callout">
        <h2>Our Values</h2>
        <p>
          Move forward, or fall behind. We build with purpose, focus on measurable outcomes, and deliver
          systems that stand the test of time.
        </p>
      </article>
    </section>
  );
}
