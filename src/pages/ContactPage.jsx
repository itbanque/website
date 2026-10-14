import { useState } from 'react';
import { ArrowIcon } from '../components/ui';
import { contactEmail, linkedInUrl } from '../data/siteData';

const helpAreas = [
  'Data collection and labeling programs',
  'Model training, optimization and evaluation',
  'Custom AI software and systems integration',
  'Enterprise AI strategy and execution'
];

const needs = ['Data', 'Models', 'Software', 'Strategy'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);

  function update(field) {
    return (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  }

  function toggleNeed(need) {
    setSelected((current) => (current.includes(need) ? current.filter((item) => item !== need) : [...current, need]));
  }

  // The site is static, so the form composes an email in the visitor's mail app.
  function handleSubmit(event) {
    event.preventDefault();
    const subject = `Project inquiry${form.company ? ` — ${form.company}` : ''}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Interested in: ${selected.join(', ') || '—'}`,
      '',
      form.message
    ].join('\n');
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="contact-wrap">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="eyebrow">Contact</div>
          <h1 className="display">
            Let’s build intelligent systems together.
          </h1>
          <p className="lead">
            Whether you need data pipelines, model fine-tuning or AI software integration, we’ll design the right
            delivery path for your team.
          </p>

          <ul className="numbered-list">
            {helpAreas.map((area, index) => (
              <li key={area}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {area}
              </li>
            ))}
          </ul>

          <dl className="contact-facts">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                  it-banque
                </a>
              </dd>
            </div>
            <div>
              <dt>Response</dt>
              <dd>24–48 hours</dd>
            </div>
          </dl>
        </div>

        <form className="card form-card" onSubmit={handleSubmit}>
          <h2 className="card-title">Tell us about your project</h2>
          <div className="field-row">
            <label className="field">
              Name
              <input type="text" name="name" autoComplete="name" required value={form.name} onChange={update('name')} />
            </label>
            <label className="field">
              Company
              <input type="text" name="company" autoComplete="organization" value={form.company} onChange={update('company')} />
            </label>
          </div>
          <label className="field">
            Work email
            <input type="email" name="email" autoComplete="email" required value={form.email} onChange={update('email')} />
          </label>
          <fieldset className="need-set">
            <legend>What do you need?</legend>
            <div className="chip-row compact">
              {needs.map((need) => (
                <label key={need} className={`check-chip ${selected.includes(need) ? 'active' : ''}`}>
                  <input type="checkbox" checked={selected.includes(need)} onChange={() => toggleNeed(need)} />
                  {need}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            Project details
            <textarea
              name="message"
              rows="5"
              placeholder="Goals, timeline, and the data or systems you already have."
              value={form.message}
              onChange={update('message')}
            />
          </label>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Send message <ArrowIcon />
          </button>
          <p className="form-note" role="status">
            {sent
              ? `Your email app should open with the message ready. If it didn’t, write to ${contactEmail}.`
              : 'Opens your email app with the details filled in.'}
          </p>
        </form>
      </div>
    </section>
  );
}
