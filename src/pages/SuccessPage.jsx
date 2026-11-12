import { useState } from 'react';
import SpecSheet from '../components/SpecSheet';
import { ArrowIcon, CtaPanel, PageHero } from '../components/ui';
import { Link, useLocale } from '../i18n';
import { caseStudyPath } from '../seo';

const ALL = 'all';

export default function SuccessPage() {
  const { locale, t, data } = useLocale();
  const { storyFilters, successStories } = data;
  // Filter names are localized, so remember which locale the selection was made in.
  const [selection, setSelection] = useState({ locale, filter: ALL });
  const filter = selection.locale === locale ? selection.filter : ALL;
  const setFilter = (name) => setSelection({ locale, filter: name });
  const visible = successStories.filter((story) => filter === ALL || story.filter === filter);

  return (
    <>
      <PageHero eyebrow={t.success.eyebrow} title={t.success.title}>
        <div className="chip-row" role="group" aria-label={t.success.filterLabel}>
          {[ALL, ...storyFilters].map((name) => (
            <button
              key={name}
              type="button"
              className={`chip ${filter === name ? 'active' : ''}`}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name === ALL ? `${t.common.all} · ${successStories.length}` : name}
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
                {t.success.readMore} <ArrowIcon />
              </Link>
            </div>
            <SpecSheet story={story} />
          </article>
        ))}
      </section>

      <CtaPanel title={t.cta.production} />
    </>
  );
}
