import { useMemo, useState } from 'react';
import benchmarkData from '../data/modelBenchmarks.json';

// Not routed: hidden until the benchmark data has an owner again (re-add the route in App.jsx).
const { benchmarkMetrics, modelBenchmarks, lastUpdated: benchmarksUpdated } = benchmarkData;

const defaultMetricKey = 'gpqa_diamond';

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
    if (Math.abs(score) >= 100) return score.toFixed(0);
    if (Math.abs(score) >= 1) return score.toFixed(2);
    return score.toFixed(3);
  }

  return score.toFixed(1);
}

function unitLabel(metric) {
  const direction = metric.higherIsBetter === false ? 'lower is better' : 'higher is better';
  return metric.format === 'percent' ? `score %, ${direction}` : direction;
}

const categories = [...new Set(benchmarkMetrics.map((metric) => metric.category || 'General'))];
const providers = [...new Set(modelBenchmarks.map((model) => model.provider))];

function countReporting(metricKey) {
  return modelBenchmarks.filter((model) => typeof model.scores[metricKey] === 'number').length;
}

export default function ModelsPage() {
  const [metricKey, setMetricKey] = useState(defaultMetricKey);
  const [provider, setProvider] = useState('All');
  const [view, setView] = useState('chart');

  const metric = benchmarkMetrics.find((item) => item.key === metricKey) || benchmarkMetrics[0];
  const category = metric.category || 'General';
  const categoryMetrics = benchmarkMetrics.filter((item) => (item.category || 'General') === category);

  const ranked = useMemo(() => {
    const direction = metric.higherIsBetter === false ? 1 : -1;
    return modelBenchmarks
      .filter((model) => typeof model.scores[metric.key] === 'number')
      .map((model) => ({ ...model, score: model.scores[metric.key] }))
      .sort((a, b) => direction * (a.score - b.score))
      .map((model, index) => ({ ...model, rank: index + 1 }));
  }, [metric]);

  const rows = ranked.filter((model) => provider === 'All' || model.provider === provider);
  const chartLabel = `${metric.label}: ${rows.map((row) => `${row.name} ${formatScore(row.score, metric)}`).join(', ')}`;

  function selectCategory(name) {
    const first = benchmarkMetrics.find((item) => (item.category || 'General') === name);
    if (first) setMetricKey(first.key);
  }

  return (
    <>
      <section className="page-hero container models-hero">
        <div>
          <div className="eyebrow">Tool</div>
          <h1 className="display">Model benchmark explorer</h1>
          <p className="lead">
            Compare frontier models across coding, reasoning, tool use, multimodal and professional benchmarks — to
            pick the right model for your product and workflow.
          </p>
        </div>
        <dl className="stat-row">
          <div>
            <dt>Models</dt>
            <dd>{modelBenchmarks.length}</dd>
          </div>
          <div>
            <dt>Benchmarks</dt>
            <dd>{benchmarkMetrics.length}</dd>
          </div>
          <div>
            <dt>Updated</dt>
            <dd>{benchmarksUpdated}</dd>
          </div>
        </dl>
      </section>

      <section className="container section-bottom explorer">
        <div className="bench-picker">
          <div className="picker-label">Category</div>
          <div className="chip-row compact" role="group" aria-label="Benchmark category">
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                className={`chip chip-sm ${name === category ? 'active' : ''}`}
                aria-pressed={name === category}
                onClick={() => selectCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="picker-label">Benchmark</div>
          <div className="bench-list">
            {categoryMetrics.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`bench-btn ${item.key === metric.key ? 'active' : ''}`}
                aria-pressed={item.key === metric.key}
                onClick={() => setMetricKey(item.key)}
              >
                <span className="bench-name">{item.label}</span>
                <span className="bench-count">{countReporting(item.key)} models</span>
              </button>
            ))}
          </div>
        </div>

        <div className="card chart-panel">
          <div className="chart-head">
            <div className="chart-heading">
              <div className="mono-meta">
                {category} · {unitLabel(metric)}
              </div>
              <h2>{metric.label}</h2>
              {metric.description ? <p className="muted">{metric.description}</p> : null}
            </div>
            <div className="segmented" role="group" aria-label="View">
              <button type="button" className={view === 'chart' ? 'active' : ''} aria-pressed={view === 'chart'} onClick={() => setView('chart')}>
                Chart
              </button>
              <button type="button" className={view === 'table' ? 'active' : ''} aria-pressed={view === 'table'} onClick={() => setView('table')}>
                Table
              </button>
            </div>
          </div>

          <div className="chip-row compact provider-row" role="group" aria-label="Filter by provider">
            {['All', ...providers].map((name) => (
              <button
                key={name}
                type="button"
                className={`chip chip-sm ${provider === name ? 'active' : ''}`}
                aria-pressed={provider === name}
                onClick={() => setProvider(name)}
              >
                {name}
              </button>
            ))}
          </div>

          {rows.length === 0 ? (
            <p className="muted empty-note">No {provider} model reports this benchmark yet.</p>
          ) : view === 'chart' ? (
            <div className="rank-list" role="img" aria-label={chartLabel}>
              {rows.map((row) => (
                <div className="rank-row" key={row.id}>
                  <span className="rank-num">{String(row.rank).padStart(2, '0')}</span>
                  <span className="rank-model">
                    <span className="rank-name">{row.name}</span>
                    <span className="rank-provider">{row.provider}</span>
                  </span>
                  <span className="bar-track">
                    <span
                      className={`bar-fill ${row.rank === 1 ? 'is-top' : ''}`}
                      style={{ width: `${Math.max(normalizeScore(row.score, metric), 1)}%` }}
                    />
                  </span>
                  <span className="rank-value">{formatScore(row.score, metric)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Model</th>
                    <th scope="col">Provider</th>
                    <th scope="col" className="num">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td className="mono-meta">{String(row.rank).padStart(2, '0')}</td>
                      <td className="strong">{row.name}</td>
                      <td className="muted">{row.provider}</td>
                      <td className="num">{formatScore(row.score, metric)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="chart-note">
            Scores are vendor-reported or from public leaderboards; harnesses and settings differ between sources. Top
            result marked in orange.
          </p>
        </div>
      </section>
    </>
  );
}
