import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/ui';
import { researchPapers } from '../data/siteData';
import { paperPath } from '../seo';
import NotFoundPage from './NotFoundPage';

export default function PaperPage() {
  const { slug } = useParams();
  const paper = researchPapers.find((item) => paperPath(item) === `/research/${slug}`);

  if (!paper) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero eyebrow={<Link to="/research">← Research</Link>} title={paper.title}>
        <p className="lead">
          {paper.published} · {paper.authors.join(', ')}
        </p>
        <div className="button-row">
          <a className="btn btn-primary" href={paper.pdf} target="_blank" rel="noreferrer">
            Read PDF
          </a>
        </div>
      </PageHero>

      <section className="container section-bottom">
        <div className="prose">
          <article>
            <h2>Abstract</h2>
            {paper.abstract.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <article>
            <h2>Cite this paper</h2>
            <pre className="code-block">{paper.bibtex}</pre>
          </article>
        </div>
      </section>
    </>
  );
}
