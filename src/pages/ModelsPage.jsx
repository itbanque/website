import { useEffect, useMemo, useRef, useState } from 'react';
import { benchmarkMetrics, modelBenchmarks } from '../data/siteData';

function normalizeScore(score, metric) {
  if (typeof score !== 'number') {
    return 0;
  }

  const min = typeof metric.min === 'number' ? metric.min : 0;
  const max = typeof metric.max === 'number' ? metric.max : 100;
  if (max <= min) {
    return 0;
  }

  const clamped = Math.min(max, Math.max(min, score));
  const ratio = (clamped - min) / (max - min);
  const normalized = metric.higherIsBetter === false ? 1 - ratio : ratio;
  return Math.round(normalized * 1000) / 10;
}

function formatScore(score, metric) {
  if (typeof score !== 'number') {
    return 'N/A';
  }

  if (metric.format === 'decimal') {
    return score.toFixed(3);
  }

  return `${score.toFixed(1)}%`;
}

export default function ModelsPage() {
  const comparisonMetrics = benchmarkMetrics.filter((metric) => metric.category !== 'Cost & speed');
  const [selectedModels, setSelectedModels] = useState(modelBenchmarks.map((model) => model.id));
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProvider, setActiveProvider] = useState('all');
  const [maxVisibleModels, setMaxVisibleModels] = useState('12');
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const modelMenuRef = useRef(null);

  const categories = [...new Set(comparisonMetrics.map((metric) => metric.category || 'General'))];
  const providers = [...new Set(modelBenchmarks.map((model) => model.provider))];
  const visibleMetrics =
    activeCategory === 'all'
      ? comparisonMetrics
      : comparisonMetrics.filter((metric) => (metric.category || 'General') === activeCategory);
  const searchableQuery = searchQuery.trim().toLowerCase();

  const filteredModelEntries = modelBenchmarks.filter((model) => {
    const matchesProvider = activeProvider === 'all' || model.provider === activeProvider;
    if (!matchesProvider) {
      return false;
    }

    if (!searchableQuery) {
      return true;
    }

    const token = `${model.name} ${model.provider}`.toLowerCase();
    return token.includes(searchableQuery);
  });

  useEffect(() => {
    if (selectedModels.length > 0) {
      return;
    }
    setSelectedModels([modelBenchmarks[0].id]);
  }, [selectedModels]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modelMenuRef.current && !modelMenuRef.current.contains(event.target)) {
        setIsModelMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsModelMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const selectedModelEntries = modelBenchmarks.filter((model) => selectedModels.includes(model.id));

  const rankedSelectedModels = useMemo(() => {
    return [...selectedModelEntries].sort((a, b) => {
      const getAverage = (model) => {
        const availableScores = visibleMetrics
          .map((metric) => model.scores[metric.key])
          .filter((score) => typeof score === 'number');

        if (!availableScores.length) {
          return -1;
        }

        const sum = availableScores.reduce((total, score) => total + score, 0);
        return sum / availableScores.length;
      };

      return getAverage(b) - getAverage(a);
    });
  }, [selectedModelEntries, visibleMetrics]);

  const modelsForChart = useMemo(() => {
    if (maxVisibleModels === 'all') {
      return rankedSelectedModels;
    }

    const limit = Number(maxVisibleModels);
    return rankedSelectedModels.slice(0, limit);
  }, [rankedSelectedModels, maxVisibleModels]);

  const addFilteredModels = () => {
    setSelectedModels((current) => [...new Set([...current, ...filteredModelEntries.map((model) => model.id)])]);
  };

  const toggleModel = (modelId) => {
    setSelectedModels((current) => {
      const isSelected = current.includes(modelId);
      if (isSelected) {
        if (current.length === 1) {
          return current;
        }
        return current.filter((id) => id !== modelId);
      }
      return [...current, modelId];
    });
  };

  const clearAllSelections = () => {
    setSelectedModels([modelBenchmarks[0].id]);
  };

  const removeSelectedModel = (modelId) => {
    setSelectedModels((current) => {
      if (current.length === 1) {
        return current;
      }
      return current.filter((id) => id !== modelId);
    });
  };

  return (
    <section className="container section">
      <div className="section-heading">
        <h1>Model Comparison</h1>
        <p>Interactive benchmark explorer with fast filtering for large model sets.</p>
      </div>

      <article className="panel model-comparison">
        <div className="section-heading left">
          <h2>Benchmark Explorer</h2>
          <p>Use top dropdown controls to select models and keep charts focused.</p>
        </div>

        <div className="top-selection-widget">
          <input
            type="text"
            className="control-input"
            placeholder="Search model name"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <select
            className="control-select"
            value={activeProvider}
            onChange={(event) => setActiveProvider(event.target.value)}
          >
            <option value="all">All providers</option>
            {providers.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
          <div className="model-dropdown" ref={modelMenuRef}>
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => setIsModelMenuOpen((value) => !value)}
              aria-expanded={isModelMenuOpen}
            >
              {selectedModels.length} models selected
            </button>
            {isModelMenuOpen ? (
              <div className="dropdown-menu">
                {filteredModelEntries.map((model) => {
                  const isChecked = selectedModels.includes(model.id);

                  return (
                    <label key={model.id} className="dropdown-item">
                      <input type="checkbox" checked={isChecked} onChange={() => toggleModel(model.id)} />
                      <span>{model.name}</span>
                      <small>{model.provider}</small>
                    </label>
                  );
                })}
              </div>
            ) : null}
          </div>
          <button type="button" className="metric-chip" onClick={addFilteredModels}>
            Select Visible
          </button>
          <button type="button" className="metric-chip" onClick={clearAllSelections}>
            Clear to One
          </button>
        </div>

        <div className="viewer-panel">
          <div className="viewer-toolbar">
            <p className="picker-help">
              {selectedModels.length} selected, showing {modelsForChart.length} in charts.
            </p>
            <label className="limit-label">
              Show
              <select
                className="control-select slim"
                value={maxVisibleModels}
                onChange={(event) => setMaxVisibleModels(event.target.value)}
              >
                <option value="8">Top 8</option>
                <option value="12">Top 12</option>
                <option value="20">Top 20</option>
                <option value="all">All</option>
              </select>
            </label>
          </div>

          <div className="selected-pills">
            {selectedModelEntries.map((model) => (
              <button key={model.id} type="button" className="selected-pill" onClick={() => removeSelectedModel(model.id)}>
                <span className="legend-dot" style={{ background: model.color }} />
                {model.name}
                <span className="pill-remove">x</span>
              </button>
            ))}
          </div>

          <div className="metric-filter">
            <button
              type="button"
              className={`metric-chip ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`metric-chip ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="benchmark-chart" role="img" aria-label="Model benchmark comparison chart">
            {visibleMetrics.map((metric) => (
              <div key={metric.key} className="chart-row">
                <p>
                  {metric.label}
                  {metric.higherIsBetter === false ? ' (lower is better)' : ''}
                </p>
                {metric.description ? <p className="metric-description">{metric.description}</p> : null}
                <div className="chart-bars">
                  {modelsForChart
                    .map((model) => {
                      const score = model.scores[metric.key];
                      const width = normalizeScore(score, metric);
                      return { model, score, width };
                    })
                    .sort((a, b) => b.width - a.width)
                    .map(({ model, score, width }) => (
                      <div key={`${model.id}-${metric.key}`} className="bar-item">
                        <span className="bar-label">{model.name}</span>
                        <div className="bar-track">
                          <div
                            className={`bar-fill ${typeof score === 'number' ? '' : 'no-score'}`}
                            style={{ width: `${width}%`, background: model.color }}
                          />
                        </div>
                        <span className="bar-value">{formatScore(score, metric)}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
