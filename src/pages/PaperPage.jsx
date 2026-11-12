import { useParams } from 'react-router-dom';
import { PageHero } from '../components/ui';
import { Link, useLocale } from '../i18n';
import { paperPath } from '../seo';
import NotFoundPage from './NotFoundPage';

export default function PaperPage() {
  const { slug } = useParams();
  const { t, data } = useLocale();
  const paper = data.researchPapers.find((item) => paperPath(item) === `/research/${slug}`);

  if (!paper) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero eyebrow={<Link to="/research">{t.paper.back}</Link>} title={paper.title}>
        <p className="lead">
          {paper.published} · {paper.authors.join(t.common.listSeparator)}
        </p>
        <div className="button-row">
          <a className="btn btn-primary" href={paper.pdf} target="_blank" rel="noreferrer">
            {t.common.readPdf}
          </a>
        </div>
      </PageHero>

      <section className="container section-bottom">
        <div className="prose">
          <article>
            <h2>{t.paper.abstract}</h2>
            {paper.abstract.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <article>
            <h2>{t.paper.cite}</h2>
            <pre className="code-block">{paper.bibtex}</pre>
          </article>
        </div>
      </section>
    </>
  );
}
