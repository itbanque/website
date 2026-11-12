import { useState } from 'react';
import { ArrowIcon } from '../components/ui';
import { contactEmail, linkedInUrl } from '../data/siteData';
import { useLocale } from '../i18n';

export default function ContactPage() {
  const { t } = useLocale();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  // Indexes into c.needs, so the selection survives a language switch.
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
    const subject = `${c.mailSubject}${form.company ? ` — ${form.company}` : ''}`;
    const body = [
      `${c.name}: ${form.name}`,
      `${c.company}: ${form.company}`,
      `${c.email}: ${form.email}`,
      `${c.mailInterested}: ${selected.map((index) => c.needs[index]).join(t.common.listSeparator) || '—'}`,
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
          <div className="eyebrow">{c.eyebrow}</div>
          <h1 className="display">{c.title}</h1>
          <p className="lead">{c.lead}</p>

          <ul className="numbered-list">
            {c.helpAreas.map((area, index) => (
              <li key={area}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {area}
              </li>
            ))}
          </ul>

          <dl className="contact-facts">
            <div>
              <dt>{c.email}</dt>
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
              <dt>{c.response}</dt>
              <dd>{c.responseTime}</dd>
            </div>
          </dl>
        </div>

        <form className="card form-card" onSubmit={handleSubmit}>
          <h2 className="card-title">{c.formTitle}</h2>
          <div className="field-row">
            <label className="field">
              {c.name}
              <input type="text" name="name" autoComplete="name" required value={form.name} onChange={update('name')} />
            </label>
            <label className="field">
              {c.company}
              <input type="text" name="company" autoComplete="organization" value={form.company} onChange={update('company')} />
            </label>
          </div>
          <label className="field">
            {c.workEmail}
            <input type="email" name="email" autoComplete="email" required value={form.email} onChange={update('email')} />
          </label>
          <fieldset className="need-set">
            <legend>{c.needLegend}</legend>
            <div className="chip-row compact">
              {c.needs.map((need, index) => (
                <label key={need} className={`check-chip ${selected.includes(index) ? 'active' : ''}`}>
                  <input type="checkbox" checked={selected.includes(index)} onChange={() => toggleNeed(index)} />
                  {need}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            {c.details}
            <textarea
              name="message"
              rows="5"
              placeholder={c.placeholder}
              value={form.message}
              onChange={update('message')}
            />
          </label>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            {c.send} <ArrowIcon />
          </button>
          <p className="form-note" role="status">
            {sent ? c.sentNote(contactEmail) : c.note}
          </p>
        </form>
      </div>
    </section>
  );
}
