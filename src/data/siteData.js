import benchmarkData from './modelBenchmarks.json';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Success', to: '/success' },
  { label: 'Research', to: '/research' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

export const serviceCards = [
  {
    title: 'Data Services',
    points: [
      'Data mining for hard-to-find operational signals.',
      'Scalable collection pipelines for structured and unstructured data.',
      'High-accuracy text, audio, and vision labeling workflows.'
    ]
  },
  {
    title: 'Model Services',
    points: [
      'Model training and optimization from baseline to production.',
      'Fine-tuning for speech, language, and multimodal domains.',
      'Evaluation harnesses for reliability and deployment readiness.'
    ]
  },
  {
    title: 'Software Solutions',
    points: [
      'Custom product and platform engineering for AI-first teams.',
      'System integration across data pipelines, APIs, and model endpoints.',
      'Secure enterprise delivery with observability and maintenance.'
    ]
  }
];

export const successStories = [
  {
    title: 'Multilingual Whisper Fine-Tuning for Global Media Intelligence',
    lead: 'Production speech recognition across Japanese, Korean, Mandarin, Cantonese, and French.',
    body: [
      'Built and aligned over 1,200 hours of domain-specific entertainment speech data with timestamp-level quality controls.',
      'Fine-tuned Whisper small and medium models with targeted LoRA adapters for code-switching and low-latency scenarios.',
      'Delivered sub-15% WER in noisy media conditions and unlocked scalable subtitle and indexing workflows.'
    ],
    tags: ['5 Languages', '1,200h Speech', 'Whisper + LoRA', 'Sub-15% WER']
  },
  {
    title: 'Supervised Action Recognition for Competitive Sports Analysis',
    lead: 'Fine-grained movement classification for full-length match videos.',
    body: [
      'Defined a supervised pipeline with 100+ expert-labeled action classes and segment-level annotations.',
      'Trained a transformer video model for clip-level prediction and real-time inference in practical review workflows.',
      'Delivered a custom labeling interface to accelerate continuous dataset expansion and QA feedback loops.'
    ],
    tags: ['100+ Classes', 'Real-Time Inference', 'Expert Labeling', 'Transformer Backbone']
  },
  {
    title: 'Sneakers Radar: Cross-Platform Sneaker Automation',
    lead: 'Automated listing, delisting, and pricing operations across StockX, GOAT, and Poizon.',
    body: [
      'Unified automation platform connecting StockX, GOAT, and Poizon into a single operational workflow.',
      'Maintains a live inventory library so teams can push instant listings, delistings, and price updates across all three marketplaces from one place.',
      'Automates price inquiry and competitive undercutting logic, letting reseller teams react to market shifts without manual repricing.'
    ],
    tags: ['StockX + GOAT + Poizon', 'Auto List & Delist', 'Price Inquiry & Repricing', 'Inventory Library']
  },
  {
    title: 'Talk2Dom: AI-Powered Element Locator',
    lead: 'Natural-language browser automation for QA and data workflows.',
    body: [
      'Transforms user intent into precise DOM targeting for Selenium and Playwright environments.',
      'Provides an OpenAI-compatible API for integration into existing automation stacks.',
      'Reduces maintenance overhead in brittle selector-heavy test and scraping systems.'
    ],
    tags: ['OpenAI-Compatible', 'Selenium + Playwright', 'DOM Locator', 'Automation API']
  }
];

export const researchPapers = [
  {
    title: 'Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models',
    author: 'Jian Feng',
    published: 'July 2025',
    summary:
      'This paper evaluates lightweight fine-tuning strategies that improve Japanese-to-Chinese speech translation using curated subtitle-aligned corpora.',
    pdf: '/assets/papers/Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models.pdf',
    bibtex: `@misc{feng2025whisper,\n  title={Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models},\n  author={Jian Feng},\n  year={2025},\n  url={https://www.itbanque.com/assets/papers/Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models.pdf}\n}`
  }
];

export const benchmarkMetrics = benchmarkData.benchmarkMetrics;
export const modelBenchmarks = benchmarkData.modelBenchmarks;
