import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white shadow p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-700">Demo Next.js</Link>
                <nav className="space-x-4">
                    <Link href="/" className="text-gray-700 hover:text-blue-600">Inici</Link>
                </nav>
            </div>
        </header>
    )
}
