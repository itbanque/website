import { useLocale } from '../i18n';

export default function SpecSheet({ story }) {
  const { t } = useLocale();

  if (story.marketplaces) {
    return (
      <aside className="spec">
        <div className="spec-title">{t.spec.marketplacesTitle}</div>
        <div className="flow">
          <div className="flow-source">{t.spec.inventory}</div>
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
      <div className="spec-title">{t.spec.title}</div>
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
