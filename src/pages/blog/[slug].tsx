import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'

type Post = {
    title: string
    content: string
}

const BlogPost: NextPage = () => {
    const router = useRouter()
    const { slug } = router.query

    const posts: Record<string, Post> = {
        'que-es-nextjs': {
            title: 'Què és Next.js?',
            content: 'Next.js és un framework per React que permet renderitzar al servidor, generar pàgines estàtiques i més.',
        },
        'renderitzat-ssr': {
            title: 'Renderitzat amb SSR',
            content: 'El SSR (Server Side Rendering) és una tècnica que permet renderitzar pàgines al servidor per millorar el SEO.',
        },
    }

    if (typeof slug !== 'string') {
        return <p className="p-6 text-center">Carregant...</p>
    }

    const post = posts[slug]

    if (!post) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-red-500">Article no trobat</h1>
                <Link href="/">
                    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Torna a l’inici
                    </button>
                </Link>
            </main>
        )
    }

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main className="max-w-3xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">{post.title}</h1>
                <p className="text-gray-700 text-lg mb-8">{post.content}</p>

                <Link href="/">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Torna a l’inici
                    </button>
                </Link>
            </main>
        </>
    )
}

export default BlogPost
