import { useState } from 'react';
import { CtaPanel, PageHero } from '../components/ui';
import { storyFilters, successStories } from '../data/siteData';

function SpecSheet({ story }) {
  if (story.marketplaces) {
    return (
      <aside className="spec">
        <div className="spec-title">One inventory → three marketplaces</div>
        <div className="flow">
          <div className="flow-source">Inventory library</div>
          <div className="flow-targets">
            {story.marketplaces.map((market) => (
              <div key={market}>{market}</div>
            ))}
          </div>
        </div>
        <div className="tag-row">
          {story.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </aside>
    );
  }

  const figures = story.spec || story.figures;
  return (
    <aside className="spec">
      <div className="spec-title">Spec sheet</div>
      <div className="spec-grid">
        {figures.map((figure, index) => (
          <div key={figure.label}>
            <div className={`figure ${index === 0 ? 'accent' : ''}`}>{figure.value}</div>
            <div className="figure-label">{figure.label}</div>
          </div>
        ))}
      </div>
      <div className="tag-row">
        {story.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default function SuccessPage() {
  const [filter, setFilter] = useState('All');
  const visible = successStories.filter((story) => filter === 'All' || story.filter === filter);

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Systems in production, not slideware."
      >
        <div className="chip-row" role="group" aria-label="Filter by discipline">
          {['All', ...storyFilters].map((name) => (
            <button
              key={name}
              type="button"
              className={`chip ${filter === name ? 'active' : ''}`}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name === 'All' ? `All · ${successStories.length}` : name}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="container section-bottom">
        {visible.map((story) => (
          <article key={story.id} id={story.id} className="case-row">
            <div className="case-body">
              <div className="mono-meta">
                <span className="accent">{String(successStories.indexOf(story) + 1).padStart(2, '0')}</span> —{' '}
                {story.label}
              </div>
              <h2>{story.title}</h2>
              <p className="case-lead">{story.lead}</p>
              <ul className="lettered">
                {story.body.map((item, index) => (
                  <li key={item}>
                    <span>{String.fromCharCode(97 + index)}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <SpecSheet story={story} />
          </article>
        ))}
      </section>

      <CtaPanel title="Have a system that needs to reach production?" />
    </>
  );
}
