import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Contact — Itbanque</title>
        <meta name="description" content="Get in touch with the Itbanque team" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">Itbanque</h1>
          <nav className="space-x-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/datasets" className="hover:text-white">Datasets</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">Let’s Connect</h2>
          <p className="text-gray-400 text-lg mb-10">
            We're building with teams across the world — startups, labs, and enterprise partners.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="text-center">
  <a href="mailto:contact@itbanque.com" className="inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition">
    Email Us: contact@itbanque.com
  </a>
</div>

          
        </div>
      </main>

      <footer className="bg-black border-t border-white/10 text-gray-500 text-center py-6 text-sm mt-24">
        © 2025 Itbanque — <a href="https://www.itbanque.com" className="underline hover:text-white">www.itbanque.com</a>
      </footer>
    </div>
  )
}
