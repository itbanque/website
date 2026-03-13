import { useState } from 'react';
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
  const [selectedModels, setSelectedModels] = useState(modelBenchmarks.map((model) => model.id));
  const [activeCategory, setActiveCategory] = useState('all');

  const selectedModelEntries = modelBenchmarks.filter((model) => selectedModels.includes(model.id));
  const categories = [...new Set(benchmarkMetrics.map((metric) => metric.category || 'General'))];
  const visibleMetrics =
    activeCategory === 'all'
      ? benchmarkMetrics
      : benchmarkMetrics.filter((metric) => (metric.category || 'General') === activeCategory);

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

  return (
    <section className="container section">
      <div className="section-heading">
        <h1>Model Comparison</h1>
        <p>Interactive benchmark comparison across major LLMs.</p>
      </div>

      <article className="panel model-comparison">
        <div className="section-heading left">
          <h2>LLM Benchmark Comparison</h2>
          <p>Select any models and compare capability scores across benchmark categories from GPT-5.4 evals.</p>
        </div>

        <div className="model-picker-grid">
          {modelBenchmarks.map((model) => {
            const isSelected = selectedModels.includes(model.id);

            return (
              <label key={model.id} className={`model-option ${isSelected ? 'selected' : ''}`}>
                <input type="checkbox" checked={isSelected} onChange={() => toggleModel(model.id)} />
                <span>{model.name}</span>
                <small>{model.provider}</small>
              </label>
            );
          })}
        </div>

        <p className="picker-help">
          {selectedModels.length} selected. You can compare all displayed models.
        </p>

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

        <div className="comparison-legend">
          {selectedModelEntries.map((model) => (
            <div key={model.id} className="legend-item">
              <span className="legend-dot" style={{ background: model.color }} />
              <span>{model.name}</span>
            </div>
          ))}
        </div>

        <div className="benchmark-chart" role="img" aria-label="Model benchmark comparison chart">
          {visibleMetrics.map((metric) => (
            <div key={metric.key} className="chart-row">
              <p>
                {metric.label}
                {metric.higherIsBetter === false ? ' (lower is better)' : ''}
              </p>
              <div className="chart-bars">
                {selectedModelEntries.map((model) => {
                  const score = model.scores[metric.key];
                  const width = normalizeScore(score, metric);

                  return (
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
