export const contactEmail = 'contact@itbanque.com';
export const linkedInUrl = 'https://www.linkedin.com/company/it-banque/';

export const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/success' },
  { label: 'Research', to: '/research' },
  { label: 'About', to: '/about' }
];

export const serviceCards = [
  {
    key: 'data',
    index: '01',
    short: 'Data',
    title: 'Data services',
    tagline: 'mining · collection · labeling',
    points: [
      'Data mining for hard-to-find operational signals.',
      'Scalable collection pipelines for structured and unstructured data.',
      'High-accuracy text, audio and vision labeling workflows.'
    ]
  },
  {
    key: 'models',
    index: '02',
    short: 'Models',
    title: 'Model services',
    tagline: 'fine-tuning · evaluation · optimization',
    points: [
      'Training and optimization from baseline to production.',
      'Fine-tuning for speech, language and multimodal domains.',
      'Evaluation harnesses for reliability and deployment readiness.'
    ]
  },
  {
    key: 'software',
    index: '03',
    short: 'Software',
    title: 'Software solutions',
    tagline: 'platforms · integration · observability',
    points: [
      'Custom product and platform engineering for AI-first teams.',
      'Integration across data pipelines, APIs and model endpoints.',
      'Secure enterprise delivery with observability and maintenance.'
    ]
  }
];

export const domains = [
  { key: 'language', title: 'Language & LLMs', body: 'Fine-tuning, evaluation and model integration.' },
  { key: 'vision', title: 'Computer vision', body: 'Video understanding and expert labeling.' },
  { key: 'speech', title: 'Speech & audio', body: 'Recognition and translation across languages.' },
  { key: 'automation', title: 'Automation', body: 'Workflow, browser and marketplace platforms.' }
];

export const processSteps = [
  { title: 'Define outcomes', body: 'Every engagement starts with clear outcomes and measurable milestones.' },
  { title: 'Build hands-on', body: 'We work inside your team, from raw input to validated model output.' },
  { title: 'Evaluate consistently', body: 'Experiments scale, evaluations stay consistent, quality stays traceable.' },
  { title: 'Hand over cleanly', body: 'Documentation and delivery standards built for long-term maintainability.' }
];

// Ordered so the home page and Work page lead with breadth rather than any single domain.
export const successStories = [
  {
    id: 'action-recognition',
    filter: 'Vision',
    label: 'Computer vision · Sports',
    title: 'Supervised action recognition for competitive sports analysis',
    cardTitle: 'Supervised action recognition for match analysis',
    summary: 'Fine-grained movement classification across full-length competitive match video.',
    lead: 'Fine-grained movement classification for full-length match videos.',
    body: [
      'Defined a supervised pipeline with 100+ expert-labeled action classes and segment-level annotations.',
      'Trained a transformer video model for clip-level prediction and real-time inference in review workflows.',
      'Delivered a custom labeling interface to accelerate dataset expansion and QA feedback loops.'
    ],
    figures: [
      { value: '100+', label: 'action classes' },
      { value: 'Real-time', label: 'inference' }
    ],
    tags: ['Video transformer', 'Expert labeling', 'Labeling UI']
  },
  {
    id: 'sneakers-radar',
    filter: 'Automation',
    label: 'Automation · Commerce',
    title: 'Sneakers Radar: cross-platform sneaker automation',
    cardTitle: 'Sneakers Radar',
    summary: 'Listing, delisting and repricing across StockX, GOAT and Poizon from one live inventory library.',
    lead: 'Automated listing, delisting and pricing across StockX, GOAT and Poizon.',
    body: [
      'One automation platform connecting StockX, GOAT and Poizon into a single operational workflow.',
      'A live inventory library pushes instant listings, delistings and price updates to all three marketplaces.',
      'Automated price inquiry and undercutting logic reacts to market shifts without manual repricing.'
    ],
    figures: [
      { value: '3', label: 'marketplaces unified' },
      { value: 'Auto', label: 'price undercutting' }
    ],
    marketplaces: ['StockX', 'GOAT', 'Poizon'],
    tags: ['Auto list & delist', 'Repricing', 'Price inquiry']
  },
  {
    id: 'talk2dom',
    filter: 'Automation',
    label: 'Developer tools · QA',
    title: 'Talk2Dom: AI-powered element locator',
    cardTitle: 'Talk2Dom — AI element locator',
    summary: 'Natural-language browser automation that turns intent into precise DOM targets.',
    lead: 'Natural-language browser automation for QA and data workflows.',
    body: [
      'Turns user intent into precise DOM targeting for Selenium and Playwright.',
      'OpenAI-compatible API drops into existing automation stacks.',
      'Cuts maintenance in brittle, selector-heavy test and scraping systems.'
    ],
    figures: [
      { value: 'OpenAI', label: '-compatible API' },
      { value: '2', label: 'frameworks: Selenium, Playwright' }
    ],
    tags: ['Selenium', 'Playwright', 'OpenAI-compatible', 'DOM locator']
  },
  {
    id: 'whisper-media',
    filter: 'Speech',
    label: 'Speech · Media intelligence',
    title: 'Multilingual Whisper fine-tuning for global media intelligence',
    cardTitle: 'Multilingual speech recognition for media',
    summary: 'Fine-tuned Whisper models for five languages, built for subtitle and indexing workflows.',
    lead: 'Production speech recognition across Japanese, Korean, Mandarin, Cantonese and French.',
    body: [
      'Built and aligned over 1,200 hours of domain-specific entertainment speech with timestamp-level quality controls.',
      'Fine-tuned Whisper small and medium with targeted LoRA adapters for code-switching and low-latency scenarios.',
      'Delivered sub-15% WER in noisy media conditions, unlocking scalable subtitle and indexing workflows.'
    ],
    figures: [
      { value: '5', label: 'languages' },
      { value: '<15%', label: 'WER, noisy media' }
    ],
    spec: [
      { value: '5', label: 'languages' },
      { value: '1,200h', label: 'aligned speech' },
      { value: '<15%', label: 'WER, noisy media' },
      { value: 'LoRA', label: 'on Whisper S / M' }
    ],
    tags: ['Whisper', 'LoRA', 'ASR', 'Subtitling']
  }
];

export const storyFilters = ['Vision', 'Automation', 'Speech'];

export const researchPapers = [
  {
    title: 'Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models',
    author: 'Jian Feng',
    published: 'July 2025',
    summary:
      'Evaluates lightweight fine-tuning strategies that improve Japanese-to-Chinese speech translation using curated subtitle-aligned corpora.',
    pdf: '/assets/papers/Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models.pdf',
    bibtex: `@misc{feng2025whisper,\n  title={Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models},\n  author={Jian Feng},\n  year={2025},\n  url={https://www.itbanque.com/assets/papers/Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models.pdf}\n}`
  }
];
