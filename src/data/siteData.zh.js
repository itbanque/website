// Chinese content. Mirrors the exports of siteData.js; ids, slugs, keys and file paths must stay identical.
export { contactEmail, linkedInUrl } from './siteData';

export const navItems = [
  { label: '服务', to: '/services' },
  { label: '案例', to: '/success' },
  { label: '研究', to: '/research' },
  { label: '关于', to: '/about' }
];

export const serviceCards = [
  {
    key: 'data',
    index: '01',
    short: '数据',
    title: '数据服务',
    tagline: '挖掘 · 采集 · 标注',
    points: [
      '挖掘难以获取的业务运营信号。',
      '面向结构化与非结构化数据的可扩展采集管线。',
      '高准确率的文本、音频与视觉标注流程。'
    ]
  },
  {
    key: 'models',
    index: '02',
    short: '模型',
    title: '模型服务',
    tagline: '微调 · 评测 · 优化',
    points: [
      '从基线到生产环境的训练与优化。',
      '面向语音、语言与多模态领域的模型微调。',
      '保障可靠性与上线就绪度的评测体系。'
    ]
  },
  {
    key: 'software',
    index: '03',
    short: '软件',
    title: '软件解决方案',
    tagline: '平台 · 集成 · 可观测性',
    points: [
      '为 AI 优先的团队定制产品与平台工程。',
      '打通数据管线、API 与模型端点的系统集成。',
      '具备可观测性与持续维护的安全企业级交付。'
    ]
  }
];

export const domains = [
  { key: 'language', title: '语言与大模型', body: '微调、评测与模型集成。' },
  { key: 'vision', title: '计算机视觉', body: '视频理解与专家级标注。' },
  { key: 'speech', title: '语音与音频', body: '跨语言的识别与翻译。' },
  { key: 'automation', title: '自动化', body: '工作流、浏览器与电商平台自动化。' }
];

export const processSteps = [
  { title: '明确目标', body: '每一次合作都从清晰的目标和可衡量的里程碑开始。' },
  { title: '深度共建', body: '我们融入您的团队，从原始输入一路做到经过验证的模型输出。' },
  { title: '一致评测', body: '实验可以扩展，评测口径保持一致，质量全程可追溯。' },
  { title: '清晰交接', body: '文档与交付标准为长期可维护性而设计。' }
];

export const successStories = [
  {
    id: 'action-recognition',
    filter: '视觉',
    label: '计算机视觉 · 体育',
    title: '面向竞技体育分析的监督式动作识别',
    cardTitle: '用于比赛分析的监督式动作识别',
    summary: '对完整时长的竞技比赛视频进行细粒度动作分类。',
    lead: '面向完整比赛视频的细粒度动作分类。',
    body: [
      '搭建监督学习管线，包含 100 多个由专家标注的动作类别和片段级标注。',
      '训练视频 Transformer 模型，实现片段级预测，并在复盘流程中实时推理。',
      '交付定制标注界面，加快数据集扩充与质检反馈闭环。'
    ],
    figures: [
      { value: '100+', label: '动作类别' },
      { value: '实时', label: '推理' }
    ],
    tags: ['视频 Transformer', '专家标注', '标注界面']
  },
  {
    id: 'sneakers-radar',
    filter: '自动化',
    label: '自动化 · 电商',
    title: 'Sneakers Radar：跨平台球鞋交易自动化',
    cardTitle: 'Sneakers Radar',
    summary: '基于同一套实时库存，在 StockX、GOAT 和得物（Poizon）上自动上架、下架与调价。',
    lead: '在 StockX、GOAT 和得物（Poizon）上自动上架、下架与定价。',
    body: [
      '一个自动化平台，把 StockX、GOAT 和得物整合进同一套运营流程。',
      '实时库存中心将上架、下架和价格更新即时推送到三个平台。',
      '自动询价与压价逻辑随行情变化及时响应，无需人工调价。'
    ],
    figures: [
      { value: '3', label: '个平台打通' },
      { value: '自动', label: '压价跟价' }
    ],
    marketplaces: ['StockX', 'GOAT', '得物'],
    tags: ['自动上下架', '自动调价', '询价']
  },
  {
    id: 'talk2dom',
    filter: '自动化',
    label: '开发者工具 · 测试',
    title: 'Talk2Dom：AI 驱动的页面元素定位器',
    cardTitle: 'Talk2Dom — AI 元素定位器',
    summary: '用自然语言驱动浏览器自动化，把意图转化为精确的 DOM 目标。',
    lead: '面向测试与数据流程的自然语言浏览器自动化。',
    body: [
      '将用户意图转化为 Selenium 和 Playwright 可用的精确 DOM 定位。',
      '兼容 OpenAI 的 API，可直接接入现有自动化技术栈。',
      '降低选择器繁多、容易失效的测试与爬取系统的维护成本。'
    ],
    figures: [
      { value: 'OpenAI', label: '兼容 API' },
      { value: '2', label: '个框架：Selenium、Playwright' }
    ],
    tags: ['Selenium', 'Playwright', '兼容 OpenAI', 'DOM 定位']
  },
  {
    id: 'whisper-media',
    filter: '语音',
    label: '语音 · 媒体智能',
    title: '面向全球媒体智能的多语言 Whisper 微调',
    cardTitle: '面向媒体场景的多语言语音识别',
    summary: '针对五种语言微调 Whisper 模型，服务于字幕与内容索引流程。',
    lead: '覆盖日语、韩语、普通话、粤语和法语的生产级语音识别。',
    body: [
      '构建并对齐超过 1,200 小时的影视娱乐领域语音数据，并做到时间戳级别的质量控制。',
      '使用针对性的 LoRA 适配器微调 Whisper small 与 medium，应对语码转换和低延迟场景。',
      '在嘈杂的媒体环境下实现低于 15% 的词错误率（WER），支撑可规模化的字幕与索引流程。'
    ],
    figures: [
      { value: '5', label: '种语言' },
      { value: '<15%', label: 'WER（嘈杂媒体）' }
    ],
    spec: [
      { value: '5', label: '种语言' },
      { value: '1,200h', label: '对齐语音' },
      { value: '<15%', label: 'WER（嘈杂媒体）' },
      { value: 'LoRA', label: '基于 Whisper S / M' }
    ],
    tags: ['Whisper', 'LoRA', '语音识别', '字幕']
  }
];

export const storyFilters = ['视觉', '自动化', '语音'];

export const researchPapers = [
  {
    // The paper itself is written in English, so its title and BibTeX stay untranslated.
    title: 'Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models',
    slug: 'whisper-japanese-to-chinese-speech-translation',
    author: 'Jian Feng',
    authors: ['Jian Feng'],
    published: '2025 年 7 月',
    date: '2025-07',
    summary: '评估多种轻量级微调策略，利用精选的字幕对齐语料提升日语到中文的语音翻译效果。',
    abstract: [
      '本文研究 Whisper 轻量级模型在非英语语言对之间直接翻译的潜力，重点关注日语到中文的语音翻译。Whisper 开箱即支持多语言转写和以英语为目标语言的翻译，但不支持其他翻译方向。',
      '我们使用一个高质量数据集对 Whisper 的 base 和 tiny 两个版本进行微调，数据来自与简体中文字幕对齐的日本电影、电视剧和动画。结果显示，base 模型在真实数据上取得了可观的 BLEU 分数，而 tiny 模型则难以生成语义完整的输出。',
      '这些发现表明，Whisper 的架构可以适配非英语翻译任务，但模型规模仍是关键因素。本研究也展示了在 GPU 受限或边缘计算环境中部署紧凑型语音识别与翻译模型的潜力，并为资源受限场景下多语言翻译的准确率与效率权衡提供了参考。'
    ],
    pdf: '/assets/papers/Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models.pdf',
    bibtex: `@misc{feng2025whisper,\n  title={Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models},\n  author={Jian Feng},\n  year={2025},\n  url={https://www.itbanque.com/assets/papers/Adapting Whisper for Japanese-to-Chinese Speech Translation on Lightweight Models.pdf}\n}`
  }
];
