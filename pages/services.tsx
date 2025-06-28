import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Services — Itbanque</title>
        <meta name="description" content="Explore Itbanque's infrastructure and model services for frontier AI systems." />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">Itbanque</h1>
          <nav className="space-x-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="text-white">Services</Link>
            <Link href="/datasets" className="hover:text-white">Datasets</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">AI Infrastructure as a Service</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            We design and deliver the foundational layers that advanced AI systems rely on — data pipelines, model workflows, and scalable evaluation systems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-2">Speech & Language Data Pipelines</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Collection, cleaning, alignment and annotation of multilingual audio-text data. Custom formats for Whisper, MMS, and other modern architectures.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Custom Training Interfaces</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Fine-tuning, LoRA adaptation, quantization-aware training, and in-domain instruction tuning. Optimized for real-world use cases and latency constraints.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Evaluation & QA Systems</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Multi-pass eval flows, hallucination checks, BLEU/WER scoring, and human-in-the-loop trace capture to detect model regressions early.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Deployment-Ready Infrastructure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">End-to-end delivery pipelines for real-world integration — including secure data transfer, automated retraining, and agent-level memory update.</p>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-white/10 text-gray-500 text-center py-6 text-sm mt-24">
        © 2025 Itbanque — <a href="https://www.itbanque.com" className="underline hover:text-white">www.itbanque.com</a>
      </footer>
    </div>
  )
}