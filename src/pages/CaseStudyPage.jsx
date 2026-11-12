import { useParams } from 'react-router-dom';
import SpecSheet from '../components/SpecSheet';
import { CtaPanel, Eyebrow, PageHero } from '../components/ui';
import { Link, useLocale } from '../i18n';
import { caseStudyPath } from '../seo';
import NotFoundPage from './NotFoundPage';

export default function CaseStudyPage() {
  const { id } = useParams();
  const { t, data } = useLocale();
  const { successStories } = data;
  const story = successStories.find((item) => item.id === id);

  if (!story) {
    return <NotFoundPage />;
  }

  const others = successStories.filter((item) => item !== story);

  return (
    <>
      <PageHero eyebrow={<Link to="/success">{t.caseStudy.back}</Link>} title={story.title}>
        <p className="lead">{story.lead}</p>
      </PageHero>

      <section className="container section-bottom">
        <article className="case-row">
          <div className="case-body">
            <div className="mono-meta">{story.label}</div>
            <p className="case-lead">{story.summary}</p>
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
      </section>

      <section className="container section-bottom">
        <Eyebrow>{t.caseStudy.more}</Eyebrow>
        <ul className="rule-list">
          {others.map((item) => (
            <li key={item.id}>
              <Link to={caseStudyPath(item)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaPanel title={t.cta.production} />
    </>
  );
}
