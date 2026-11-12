import { PageHero } from '../components/ui';
import { contactEmail } from '../data/siteData';
import { useLocale } from '../i18n';

export default function PrivacyPage() {
  const { t } = useLocale();
  const p = t.privacy;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title}>
        <p className="lead">{p.effective}</p>
      </PageHero>
      <section className="container section-bottom">
        <div className="prose">
          {p.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
          <article>
            <h2>{p.contactTitle}</h2>
            <p>
              {p.contactBefore}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              {p.contactAfter}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
