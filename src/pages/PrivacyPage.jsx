import { PageHero } from '../components/ui';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We may collect information you provide directly, including name, email, and message details. We also collect technical usage information such as browser metadata and page interactions.'
  },
  {
    title: '2. How We Use Information',
    body: 'Information is used to respond to inquiries, improve services, monitor site performance, and meet legal obligations.'
  },
  {
    title: '3. Data Sharing',
    body: 'We do not sell personal data. We may share limited data with trusted providers operating under confidentiality agreements.'
  },
  {
    title: '4. Cookies',
    body: 'We use cookies and similar technologies for analytics and site functionality. You can manage cookie behavior in browser settings.'
  },
  {
    title: '5. Your Rights',
    body: 'You can request access, correction, or deletion of your data by contacting contact@itbanque.com.'
  },
  {
    title: '6. Policy Updates',
    body: 'This policy may be updated periodically. Revisions will be posted on this page with an updated effective date.'
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy">
        <p className="lead">Effective date: July 1, 2025</p>
      </PageHero>
      <section className="container section-bottom">
        <div className="prose">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
          <article>
            <h2>7. Contact</h2>
            <p>
              Questions about this policy can be sent to <a href="mailto:contact@itbanque.com">contact@itbanque.com</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
