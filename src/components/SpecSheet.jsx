export default function SpecSheet({ story }) {
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
