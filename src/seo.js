import { linkedInUrl, researchPapers, serviceCards, successStories } from './data/siteData';

export const siteName = 'itbanque';
export const siteUrl = 'https://www.itbanque.com';
export const defaultImage = `${siteUrl}/brand/og-image.png`;

const staticPages = {
  '/': {
    title: 'AI Data Labeling, Model Fine-Tuning & AI Software | itbanque',
    description:
      'itbanque delivers AI data collection and labeling, model fine-tuning and evaluation, and custom AI software — production-grade systems for speech, vision and language.'
  },
  '/services': {
    title: 'AI Data, Model Fine-Tuning & Software Services | itbanque',
    description:
      'End-to-end AI services: data mining, collection and labeling; LLM, speech and vision model fine-tuning and evaluation; and AI software integration with observability.',
    breadcrumb: 'Services'
  },
  '/success': {
    title: 'AI Case Studies: Vision, Speech & Automation | itbanque',
    description:
      'Production AI case studies: sports action recognition, multilingual Whisper fine-tuning, marketplace automation for StockX, GOAT and Poizon, and AI browser automation.',
    breadcrumb: 'Case studies'
  },
  '/research': {
    title: 'Applied AI Research: Speech Translation & Whisper | itbanque',
    description:
      'Applied AI research from itbanque on speech recognition, speech translation and lightweight Whisper models, with PDFs and BibTeX citations.',
    breadcrumb: 'Research'
  },
  '/about': {
    title: 'About itbanque — Enterprise AI Engineering Team',
    description:
      'itbanque is an AI engineering team combining infrastructure engineering, ML research, linguistics and product delivery to take AI systems from prototype to production.',
    breadcrumb: 'About'
  },
  '/contact': {
    title: 'Contact itbanque — Start an AI Project',
    description:
      'Contact itbanque about data labeling programs, model training and fine-tuning, or custom AI software. We reply within 24–48 hours.',
    breadcrumb: 'Contact'
  },
  '/privacy': {
    title: 'Privacy Policy | itbanque',
    description: 'How itbanque collects, uses and protects personal information submitted through this website.',
    breadcrumb: 'Privacy policy'
  }
};

const notFound = {
  title: 'Page Not Found | itbanque',
  description: 'The page you are looking for does not exist.',
  robots: 'noindex,follow'
};

export const caseStudyPath = (story) => `/success/${story.id}`;
export const paperPath = (paper) => `/research/${paper.slug}`;

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/brand/mark.png`,
  description: staticPages['/'].description,
  email: 'contact@itbanque.com',
  sameAs: [linkedInUrl],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'contact@itbanque.com',
    url: `${siteUrl}/contact`
  }
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: { '@id': organization['@id'] }
};

function breadcrumbs(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}

function absolute(path) {
  return `${siteUrl}${encodeURI(path)}`;
}

function caseStudySeo(story) {
  const path = caseStudyPath(story);
  return {
    title: `${story.title} | itbanque case study`,
    description: `${story.summary} ${story.body[1]}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: story.title,
        description: story.summary,
        keywords: story.tags.join(', '),
        url: `${siteUrl}${path}`,
        image: defaultImage,
        author: { '@id': organization['@id'] },
        publisher: { '@id': organization['@id'] }
      },
      breadcrumbs([
        { name: 'Case studies', path: '/success' },
        { name: story.cardTitle, path }
      ])
    ]
  };
}

function paperSeo(paper) {
  const path = paperPath(paper);
  return {
    title: `${paper.title} | itbanque research`,
    description: paper.summary,
    type: 'article',
    // Google Scholar reads Highwire Press tags.
    meta: [
      ['citation_title', paper.title],
      ...paper.authors.map((author) => ['citation_author', author]),
      ['citation_publication_date', paper.date.replaceAll('-', '/')],
      ['citation_pdf_url', absolute(paper.pdf)],
      ['citation_abstract_html_url', `${siteUrl}${path}`]
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ScholarlyArticle',
        headline: paper.title,
        name: paper.title,
        abstract: paper.abstract.join(' '),
        datePublished: paper.date,
        author: paper.authors.map((name) => ({ '@type': 'Person', name })),
        publisher: { '@id': organization['@id'] },
        url: `${siteUrl}${path}`,
        encoding: { '@type': 'MediaObject', encodingFormat: 'application/pdf', contentUrl: absolute(paper.pdf) }
      },
      breadcrumbs([
        { name: 'Research', path: '/research' },
        { name: paper.title, path }
      ])
    ]
  };
}

const servicesJsonLd = serviceCards.map((card) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: card.title,
  serviceType: card.tagline,
  description: card.points.join(' '),
  provider: { '@id': organization['@id'] },
  url: `${siteUrl}/services`
}));

// Returns everything the <head> needs for a path; unknown paths get a noindex 404 entry.
export function getSeo(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  let page;

  if (staticPages[path]) {
    const entry = staticPages[path];
    const jsonLd = path === '/' ? [organization, website] : [breadcrumbs([{ name: entry.breadcrumb, path }])];
    if (path === '/services') jsonLd.push(...servicesJsonLd);
    page = { ...entry, jsonLd };
  } else {
    const story = successStories.find((item) => caseStudyPath(item) === path);
    const paper = researchPapers.find((item) => paperPath(item) === path);
    page = story ? caseStudySeo(story) : paper ? paperSeo(paper) : null;
  }

  if (!page) {
    return { ...notFound, url: null, image: defaultImage, type: 'website', meta: [], jsonLd: [] };
  }

  return {
    robots: 'index,follow',
    type: 'website',
    meta: [],
    image: defaultImage,
    ...page,
    url: `${siteUrl}${path}`
  };
}

// Every indexable URL, in sitemap order.
export const indexablePaths = [
  ...Object.keys(staticPages),
  ...successStories.map(caseStudyPath),
  ...researchPapers.map(paperPath)
];
