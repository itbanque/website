import * as dataEn from './data/siteData';
import * as dataZh from './data/siteData.zh';
import stringsEn from './locales/en';
import stringsZh from './locales/zh';
import { htmlLang, locales, localizePath, ogLocale, splitLocale } from './locale';

export const siteName = 'itbanque';
export const siteUrl = 'https://www.itbanque.com';
export const defaultImage = `${siteUrl}/brand/og-image.png`;

const siteData = { en: dataEn, zh: dataZh };
const strings = { en: stringsEn, zh: stringsZh };

// Locale-free paths; links add the locale prefix (see i18n.jsx).
export const caseStudyPath = (story) => `/success/${story.id}`;
export const paperPath = (paper) => `/research/${paper.slug}`;

const pageUrl = (locale, path) => `${siteUrl}${localizePath(locale, path)}`;

function organization(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/brand/mark.png`,
    description: strings[locale].seo.pages['/'].description,
    email: dataEn.contactEmail,
    sameAs: [dataEn.linkedInUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: dataEn.contactEmail,
      url: pageUrl(locale, '/contact'),
      availableLanguage: ['English', 'Chinese']
    }
  };
}

const organizationRef = { '@id': `${siteUrl}/#organization` };

function website(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: pageUrl(locale, '/'),
    inLanguage: htmlLang[locale],
    publisher: organizationRef
  };
}

function breadcrumbs(locale, trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: strings[locale].seo.home, path: '/' }, ...trail].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(locale, item.path)
    }))
  };
}

function absolute(path) {
  return `${siteUrl}${encodeURI(path)}`;
}

function caseStudySeo(locale, story) {
  const path = caseStudyPath(story);
  const t = strings[locale].seo;
  return {
    title: t.caseStudyTitle(story.title),
    description: `${story.summary} ${story.body[1]}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: story.title,
        description: story.summary,
        keywords: story.tags.join(', '),
        inLanguage: htmlLang[locale],
        url: pageUrl(locale, path),
        image: defaultImage,
        author: organizationRef,
        publisher: organizationRef
      },
      breadcrumbs(locale, [
        { name: t.caseStudies, path: '/success' },
        { name: story.cardTitle, path }
      ])
    ]
  };
}

function paperSeo(locale, paper) {
  const path = paperPath(paper);
  const t = strings[locale].seo;
  return {
    title: t.paperTitle(paper.title),
    description: paper.summary,
    type: 'article',
    // Google Scholar reads Highwire Press tags.
    meta: [
      ['citation_title', paper.title],
      ...paper.authors.map((author) => ['citation_author', author]),
      ['citation_publication_date', paper.date.replaceAll('-', '/')],
      ['citation_pdf_url', absolute(paper.pdf)],
      ['citation_abstract_html_url', pageUrl(locale, path)]
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
        publisher: organizationRef,
        url: pageUrl(locale, path),
        encoding: { '@type': 'MediaObject', encodingFormat: 'application/pdf', contentUrl: absolute(paper.pdf) }
      },
      breadcrumbs(locale, [
        { name: t.research, path: '/research' },
        { name: paper.title, path }
      ])
    ]
  };
}

function servicesJsonLd(locale) {
  return siteData[locale].serviceCards.map((card) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: card.title,
    serviceType: card.tagline,
    description: card.points.join(' '),
    provider: organizationRef,
    url: pageUrl(locale, '/services')
  }));
}

// hreflang links: one per locale plus x-default pointing at the English page.
function alternates(path) {
  return [
    ...locales.map((locale) => ({ hreflang: htmlLang[locale], href: pageUrl(locale, path) })),
    { hreflang: 'x-default', href: `${siteUrl}${path}` }
  ];
}

// Returns everything the <head> needs for a path; unknown paths get a noindex 404 entry.
export function getSeo(pathname) {
  const { locale, path } = splitLocale(pathname);
  const t = strings[locale].seo;
  const { successStories, researchPapers } = siteData[locale];
  const base = { lang: htmlLang[locale], ogLocale: ogLocale[locale] };
  let page;

  if (t.pages[path]) {
    const entry = t.pages[path];
    const jsonLd =
      path === '/'
        ? [organization(locale), website(locale)]
        : [breadcrumbs(locale, [{ name: entry.breadcrumb, path }])];
    if (path === '/services') jsonLd.push(...servicesJsonLd(locale));
    page = { ...entry, jsonLd };
  } else {
    const story = successStories.find((item) => caseStudyPath(item) === path);
    const paper = researchPapers.find((item) => paperPath(item) === path);
    page = story ? caseStudySeo(locale, story) : paper ? paperSeo(locale, paper) : null;
  }

  if (!page) {
    return {
      ...base,
      ...t.notFound,
      robots: 'noindex,follow',
      url: null,
      image: defaultImage,
      type: 'website',
      meta: [],
      jsonLd: [],
      alternates: []
    };
  }

  return {
    ...base,
    robots: 'index,follow',
    type: 'website',
    meta: [],
    image: defaultImage,
    ...page,
    url: pageUrl(locale, path),
    alternates: alternates(path)
  };
}

// Every indexable URL, in sitemap order: all English pages, then each other locale.
const basePaths = [
  ...Object.keys(stringsEn.seo.pages),
  ...dataEn.successStories.map(caseStudyPath),
  ...dataEn.researchPapers.map(paperPath)
];

export const indexablePaths = locales.flatMap((locale) => basePaths.map((path) => localizePath(locale, path)));
