// English UI strings. zh.js must keep the same shape.
export default {
  common: {
    startProject: 'Start a project',
    step: (number) => `Step ${number}`,
    all: 'All',
    paperTag: 'Paper',
    readPdf: 'Read PDF',
    domainsLabel: 'Domains we work in',
    listSeparator: ', '
  },
  header: {
    homeLabel: 'itbanque home',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    // The switcher names the language it switches to, in that language.
    switchTo: { locale: 'zh', label: '中文', lang: 'zh-CN', aria: '切换到中文' }
  },
  footer: {
    tagline: 'Dependable data infrastructure for the next generation of AI systems.',
    company: 'Company',
    services: 'Services',
    work: 'Work',
    about: 'About',
    resources: 'Resources',
    research: 'Research',
    privacy: 'Privacy policy',
    contact: 'Contact',
    rights: '© 2026 itbanque. All rights reserved.'
  },
  cta: {
    reply: 'Reply within 24–48 hours',
    title: 'Let’s build intelligent systems together.',
    production: 'Have a system that needs to reach production?'
  },
  spec: {
    marketplacesTitle: 'One inventory → three marketplaces',
    inventory: 'Inventory library',
    title: 'Spec sheet'
  },
  home: {
    pill: 'Enterprise AI infrastructure',
    title: 'Data, models and software — built to reach production.',
    lead: 'itbanque designs and operates production-grade data, model and software systems that move from prototype to reliable business value.',
    primaryCta: 'Start a conversation',
    secondaryCta: 'See our work',
    layersLabel: 'Service layers',
    servicesEyebrow: 'What we do',
    servicesTitle: 'Three layers. One delivery team.',
    servicesIntro:
      'Integrated service layers that support modern AI delivery — engage one, or let us carry the whole stack.',
    workEyebrow: 'Selected work',
    workTitle: 'Shipped, measured, in use.',
    workLink: 'All case studies',
    researchEyebrow: 'Research',
    researchTitle: 'We publish what we learn.',
    researchIntro: 'Applied work from our delivery programs, written up so others can build on it.',
    allResearch: 'All research',
    processEyebrow: 'How we work',
    processTitle: 'Move forward, or fall behind.',
    processIntro:
      'Infrastructure isn’t the headline, but it decides whether AI progress lasts. Our team combines infrastructure engineering, ML research, linguistics and product execution.'
  },
  services: {
    eyebrow: 'Services',
    title: 'End-to-end delivery, from raw data to running software.',
    lead: 'Data pipelines, model systems and software engineering — engage one layer, or let one team carry the whole stack.',
    processEyebrow: 'How we work',
    processTitle: 'Clear outcomes, measurable milestones.',
    processIntro:
      'We work hands-on with your team and provide documentation and delivery standards that support long-term maintainability.'
  },
  success: {
    eyebrow: 'Case studies',
    title: 'Systems in production, not slideware.',
    filterLabel: 'Filter by discipline',
    readMore: 'Read the case study'
  },
  caseStudy: {
    back: '← Case studies',
    more: 'More case studies'
  },
  research: {
    eyebrow: 'Research',
    title: 'We publish what we learn.',
    lead: 'Applied publications in speech systems, data-centric AI and multimodal workflows.',
    copy: 'Copy BibTeX',
    copied: 'Copied',
    show: 'Show BibTeX',
    hide: 'Hide BibTeX'
  },
  paper: {
    back: '← Research',
    abstract: 'Abstract',
    cite: 'Cite this paper'
  },
  about: {
    eyebrow: 'About itbanque',
    title: 'Enterprise-grade infrastructure for real-world AI programs.',
    blocks: [
      {
        title: 'Why infrastructure matters',
        body: 'Infrastructure is not the headline, but it determines whether AI progress is durable. We design systems where experiments can scale, evaluations stay consistent, and quality remains traceable.'
      },
      {
        title: 'Our mission',
        body: 'We accelerate responsible AI by building dependable data infrastructure. From raw input to validated model outputs, our work is driven by quality, transparency, and reproducibility.'
      },
      {
        title: 'Our team',
        body: 'Our team combines infrastructure engineering, ML research, linguistics, and product execution experience. We have shipped critical systems in both startups and enterprise environments.'
      },
      {
        title: 'How we operate',
        body: 'Every engagement starts with clear outcomes and measurable milestones. We work hands-on with your team and provide documentation and delivery standards that support long-term maintainability.'
      }
    ],
    valuesEyebrow: 'Our values',
    valuesTitle: 'Move forward, or fall behind.',
    valuesIntro:
      'We build with purpose, focus on measurable outcomes, and deliver systems that stand the test of time.'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build intelligent systems together.',
    lead: 'Whether you need data pipelines, model fine-tuning or AI software integration, we’ll design the right delivery path for your team.',
    helpAreas: [
      'Data collection and labeling programs',
      'Model training, optimization and evaluation',
      'Custom AI software and systems integration',
      'Enterprise AI strategy and execution'
    ],
    needs: ['Data', 'Models', 'Software', 'Strategy'],
    email: 'Email',
    response: 'Response',
    responseTime: '24–48 hours',
    formTitle: 'Tell us about your project',
    name: 'Name',
    company: 'Company',
    workEmail: 'Work email',
    needLegend: 'What do you need?',
    details: 'Project details',
    placeholder: 'Goals, timeline, and the data or systems you already have.',
    send: 'Send message',
    note: 'Opens your email app with the details filled in.',
    sentNote: (email) => `Your email app should open with the message ready. If it didn’t, write to ${email}.`,
    mailSubject: 'Project inquiry',
    mailInterested: 'Interested in'
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    effective: 'Effective date: July 1, 2025',
    sections: [
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
    ],
    contactTitle: '7. Contact',
    contactBefore: 'Questions about this policy can be sent to ',
    contactAfter: '.'
  },
  notFound: {
    title: 'Page not found.',
    lead: 'The page you are looking for has moved or no longer exists.',
    home: 'Back to home',
    services: 'Our services'
  },
  seo: {
    home: 'Home',
    caseStudies: 'Case studies',
    research: 'Research',
    caseStudyTitle: (title) => `${title} | itbanque case study`,
    paperTitle: (title) => `${title} | itbanque research`,
    pages: {
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
    },
    notFound: {
      title: 'Page Not Found | itbanque',
      description: 'The page you are looking for does not exist.'
    }
  }
};
