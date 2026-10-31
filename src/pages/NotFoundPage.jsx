import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui';

export default function NotFoundPage() {
  return (
    <PageHero eyebrow="404" title="Page not found.">
      <p className="lead">The page you are looking for has moved or no longer exists.</p>
      <div className="button-row">
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
        <Link className="btn btn-ghost" to="/services">
          Our services
        </Link>
      </div>
    </PageHero>
  );
}
