import Head from 'next/head'
import Link from 'next/link'

export default function Datasets() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Datasets — Itbanque</title>
        <meta name="description" content="Explore Itbanque's curated speech and language datasets for production-grade AI systems." />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">Itbanque</h1>
          <nav className="space-x-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/datasets" className="text-white">Datasets</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">Curated Data for Speech & Translation AI</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            We publish production-quality datasets that support the development of Whisper-class ASR, TTS, and multilingual models. Designed for training, evaluation, and transfer learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-2">ScreenTalk_ZH2ZH</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Chinese subtitle-style ASR dataset sourced from broadcast media. Designed to benchmark Chinese-only speech models and enable in-domain fine-tuning.
            </p>
            <a
              href="https://huggingface.co/datasets/Itbanque/ScreenTalk_ZH2ZH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#db4a2b] text-sm hover:underline"
            >View on Hugging Face</a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">ScreenTalk_JA2ZH</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Japanese-Chinese parallel subtitle dataset for speech translation training. Enables evaluation and pretraining of cross-lingual ASR systems.
            </p>
            <a
              href="https://huggingface.co/datasets/Itbanque/ScreenTalk_JA2ZH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#db4a2b] text-sm hover:underline"
            >View on Hugging Face</a>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-white/10 text-gray-500 text-center py-6 text-sm mt-24">
        © 2025 Itbanque — <a href="https://www.itbanque.com" className="underline hover:text-white">www.itbanque.com</a>
      </footer>
    </div>
  )
}