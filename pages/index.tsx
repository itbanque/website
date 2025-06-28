import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Itbanque — Data for Next-Gen AI</title>
        <meta name="description" content="Infrastructure, datasets, and workflows for frontier AI systems." />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">Itbanque</h1>
          <nav className="space-x-6 text-sm text-gray-300">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/datasets" className="hover:text-white">Datasets</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 text-white">
            Data Infrastructure<br />for Next-Gen AI Systems
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            We build high-integrity datasets and data pipelines for organizations pushing the boundaries of artificial intelligence.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">Get in Touch</Link>
        </div>
      </section>

      <section className="py-28 px-6 md:px-12 text-center bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-white">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="text-lg font-medium mb-2">Frontier Dataset Design</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Multilingual, domain-specific, and synthetic data generation pipelines designed for emerging model classes.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Model Training Interfaces</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Fine-tuning, LoRA, and instruction training workflows for ASR, LLM, and multimodal systems.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Evaluation & Safety Ops</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Custom metrics, alignment testing, regression capture, and scalable evaluation frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 text-gray-500 text-center py-6 text-sm">
        © 2025 Itbanque — <a href="https://www.itbanque.com" className="underline hover:text-white">www.itbanque.com</a>
      </footer>
    </div>
  )
}