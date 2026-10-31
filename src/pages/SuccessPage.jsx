import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpecSheet from '../components/SpecSheet';
import { ArrowIcon, CtaPanel, PageHero } from '../components/ui';
import { storyFilters, successStories } from '../data/siteData';
import { caseStudyPath } from '../seo';

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
              <h2>
                <Link to={caseStudyPath(story)}>{story.title}</Link>
              </h2>
              <p className="case-lead">{story.lead}</p>
              <ul className="lettered">
                {story.body.map((item, index) => (
                  <li key={item}>
                    <span>{String.fromCharCode(97 + index)}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="text-link" to={caseStudyPath(story)}>
                Read the case study <ArrowIcon />
              </Link>
            </div>
            <SpecSheet story={story} />
          </article>
        ))}
      </section>

      <CtaPanel title="Have a system that needs to reach production?" />
    </>
  );
}
