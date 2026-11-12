import { Link, useLocale } from '../i18n';
import { PageHero } from '../components/ui';

export default function NotFoundPage() {
  const { t } = useLocale();
  const n = t.notFound;

  return (
    <PageHero eyebrow="404" title={n.title}>
      <p className="lead">{n.lead}</p>
      <div className="button-row">
        <Link className="btn btn-primary" to="/">
          {n.home}
        </Link>
        <Link className="btn btn-ghost" to="/services">
          {n.services}
        </Link>
      </div>
    </PageHero>
  );
}
