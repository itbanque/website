import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteName = 'Itbanque';
const siteUrl = 'https://www.itbanque.com';
const defaultImage = `${siteUrl}/assets/IT.png`;

const routeSeo = {
  '/': {
    title: 'Enterprise AI Infrastructure',
    description:
      'Itbanque builds enterprise-grade data infrastructure, model systems, and AI software for measurable outcomes.',
    robots: 'index,follow'
  },
  '/services': {
    title: 'AI Services',
    description:
      'End-to-end AI delivery across data pipelines, model development, fine-tuning, evaluation, and software integration.',
    robots: 'index,follow'
  },
  '/success': {
    title: 'Success Stories',
    description: 'Selected case studies and real delivery outcomes from multi-domain AI programs.',
    robots: 'index,follow'
  },
  '/models': {
    title: 'LLM Model Comparison',
    description: 'Compare LLM benchmark scores across coding, math, reasoning, multilingual, and instruction tasks.',
    robots: 'noindex,nofollow'
  },
  '/research': {
    title: 'Research and Benchmarks',
    description: 'Applied AI research publications and benchmark-based model capability comparisons.',
    robots: 'index,follow'
  },
  '/about': {
    title: 'About Itbanque',
    description: 'Learn about Itbanque mission, team, values, and approach to enterprise AI infrastructure.',
    robots: 'index,follow'
  },
  '/contact': {
    title: 'Contact',
    description: 'Contact Itbanque for AI data pipelines, model optimization, and enterprise AI software services.',
    robots: 'index,follow'
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'Read Itbanque privacy policy and data handling practices.',
    robots: 'index,follow'
  }
};

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
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const current = routeSeo[location.pathname] || routeSeo['/'];
    const title = `${current.title} | ${siteName}`;
    const url = `${siteUrl}${location.pathname}`;

    document.title = title;
    upsertMeta('description', current.description);
    upsertMeta('robots', current.robots || 'index,follow');

    upsertMeta('og:type', 'website', true);
    upsertMeta('og:site_name', siteName, true);
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', current.description, true);
    upsertMeta('og:url', url, true);
    upsertMeta('og:image', defaultImage, true);

    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', current.description);
    upsertMeta('twitter:image', defaultImage);

    upsertCanonical(url);
  }, [location.pathname]);

  return null;
}
