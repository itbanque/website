import { useState } from 'react';
import { PageHero } from '../components/ui';
import { researchPapers } from '../data/siteData';

export default function ResearchPage() {
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
      <PageHero eyebrow="Research" title="We publish what we learn.">
        <p className="lead">Applied publications in speech systems, data-centric AI and multimodal workflows.</p>
      </PageHero>

      <section className="container section-bottom research-list">
        {researchPapers.map((paper) => {
          const isOpen = openBib === paper.title;

          return (
            <article key={paper.title} className="card tool-card">
              <div className="tag-line">
                <span className="tag">Paper</span>
                <span>
                  {paper.published} · {paper.author}
                </span>
              </div>
              <h2 className="card-title">{paper.title}</h2>
              <p>{paper.summary}</p>
              <div className="button-row">
                <a className="btn btn-primary" href={paper.pdf} target="_blank" rel="noreferrer">
                  Read PDF
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => copyBibtex(paper)}>
                  {copied === paper.title ? 'Copied' : 'Copy BibTeX'}
                </button>
                <button type="button" className="btn btn-text" onClick={() => setOpenBib(isOpen ? null : paper.title)} aria-expanded={isOpen}>
                  {isOpen ? 'Hide BibTeX' : 'Show BibTeX'}
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
