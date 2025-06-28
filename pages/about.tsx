import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>About — Itbanque</title>
        <meta name="description" content="Learn more about Itbanque's mission, values, and team." />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">Itbanque</h1>
          <nav className="space-x-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/datasets" className="hover:text-white">Datasets</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">Purpose-Built Data Infrastructure for AI
</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            Itbanque is an infrastructure company creating scalable, high-integrity data workflows to accelerate the development of enterprise-grade AI systems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We believe foundational models need foundational data. Our mission is to enable responsible, secure, and efficient AI development through powerful data infrastructure that meets real-world demands.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Our People</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're a distributed team of engineers, researchers, and product builders with deep backgrounds in AI infrastructure, speech & language tech, and large-scale dataset architecture. We operate globally with a core team based in Canada.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-white/10 text-gray-500 text-center py-6 text-sm mt-24">
        © 2025 Itbanque — <a href="https://www.itbanque.com" className="underline hover:text-white">www.itbanque.com</a>
      </footer>
    </div>
  )
}