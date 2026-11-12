import { useState } from 'react';
import { PageHero } from '../components/ui';
import { Link, useLocale } from '../i18n';
import { paperPath } from '../seo';

export default function ResearchPage() {
  const { t, data } = useLocale();
  const r = t.research;
  const [openBib, setOpenBib] = useState(null);
  const [copied, setCopied] = useState(null);

  async function copyBibtex(paper) {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopied(paper.title);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setOpenBib(paper.title);
    }
  }

  return (
    <>
      <PageHero eyebrow={r.eyebrow} title={r.title}>
        <p className="lead">{r.lead}</p>
      </PageHero>

      <section className="container section-bottom research-list">
        {data.researchPapers.map((paper) => {
          const isOpen = openBib === paper.title;

          return (
            <article key={paper.title} className="card tool-card">
              <div className="tag-line">
                <span className="tag">{t.common.paperTag}</span>
                <span>
                  {paper.published} · {paper.author}
                </span>
              </div>
              <h2 className="card-title">
                <Link to={paperPath(paper)}>{paper.title}</Link>
              </h2>
              <p>{paper.summary}</p>
              <div className="button-row">
                <a className="btn btn-primary" href={paper.pdf} target="_blank" rel="noreferrer">
                  {t.common.readPdf}
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => copyBibtex(paper)}>
                  {copied === paper.title ? r.copied : r.copy}
                </button>
                <button type="button" className="btn btn-text" onClick={() => setOpenBib(isOpen ? null : paper.title)} aria-expanded={isOpen}>
                  {isOpen ? r.hide : r.show}
                </button>
              </div>
              {isOpen ? <pre className="code-block">{paper.bibtex}</pre> : null}
            </article>
          );
        })}
      </section>
    </>
  );
}
