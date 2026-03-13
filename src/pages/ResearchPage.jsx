import { useState } from 'react';
import { researchPapers } from '../data/siteData';

export default function ResearchPage() {
  const [openBib, setOpenBib] = useState(null);

  return (
    <section className="container section">
      <div className="section-heading">
        <h1>Research</h1>
        <p>Applied publications in speech systems, data-centric AI, and multimodal workflows.</p>
      </div>

      <div className="stack">
        {researchPapers.map((paper) => {
          const isOpen = openBib === paper.title;

          return (
            <article key={paper.title} className="panel paper-panel">
              <h2>{paper.title}</h2>
              <p className="paper-meta">
                {paper.author} | {paper.published}
              </p>
              <p>{paper.summary}</p>
              <div className="paper-actions">
                <a className="button" href={paper.pdf} target="_blank" rel="noreferrer">
                  View PDF
                </a>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setOpenBib(isOpen ? null : paper.title)}
                >
                  {isOpen ? 'Hide BibTeX' : 'Show BibTeX'}
                </button>
              </div>
              {isOpen ? <pre>{paper.bibtex}</pre> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
