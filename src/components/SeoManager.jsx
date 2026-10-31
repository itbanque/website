import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, siteName } from '../seo';

function upsertMeta(name, content, useProperty = false) {
  const selector = useProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    if (useProperty) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!url) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

// Page-specific tags carry data-seo so they can be swapped wholesale on navigation.
function replacePageTags(seo) {
  document.head.querySelectorAll('[data-seo]').forEach((element) => element.remove());

  seo.meta.forEach(([name, content]) => {
    const element = document.createElement('meta');
    element.setAttribute('name', name);
    element.setAttribute('content', content);
    element.setAttribute('data-seo', '');
    document.head.appendChild(element);
  });

  seo.jsonLd.forEach((data) => {
    const element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo', '');
    element.textContent = JSON.stringify(data);
    document.head.appendChild(element);
  });
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeo(location.pathname);

    document.title = seo.title;
    upsertMeta('description', seo.description);
    upsertMeta('robots', seo.robots);

    upsertMeta('og:type', seo.type, true);
    upsertMeta('og:site_name', siteName, true);
    upsertMeta('og:title', seo.title, true);
    upsertMeta('og:description', seo.description, true);
    upsertMeta('og:url', seo.url || window.location.href, true);
    upsertMeta('og:image', seo.image, true);

    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', seo.title);
    upsertMeta('twitter:description', seo.description);
    upsertMeta('twitter:image', seo.image);

    upsertCanonical(seo.url);
    replacePageTags(seo);
  }, [location.pathname]);

  return null;
}
