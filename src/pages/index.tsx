import Head from 'next/head'
import Link from 'next/link'
import BlogPreview from '@/components/BlogPreview'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo Next.js</title>
        <meta name="description" content="Projecte de demostració amb Next.js" />
      </Head>
      <Header />

      <main className="min-h-screen bg-gray-100 px-6 py-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-center text-blue-700">Benvingut a la Demo de Next.js</h1>
          <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
            Aquesta aplicació mostra una estructura bàsica d’un projecte Next.js amb enllaços, imatges i components reutilitzables.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <BlogPreview
            title="Què és Next.js?"
            excerpt="Descobreix les característiques clau de Next.js i com pot millorar el desenvolupament web modern."
            image="/images/nextjs1.png"
            slug="/blog/que-es-nextjs"
          />
          <BlogPreview
            title="Renderitzat amb SSR"
            excerpt="Explorem com funciona el Server Side Rendering a Next.js i per què és important per al SEO."
            image="/images/ssr.png"
            slug="/blog/renderitzat-ssr"
          />
        </section>
      </main>

      <Footer />
    </>
  )
}
