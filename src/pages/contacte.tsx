import Head from 'next/head'

export default function Contacte() {
    return (
        <>
            <Head>
                <title>Contacte</title>
            </Head>
            <main className="min-h-screen bg-white p-10 text-center">
                <h1 className="text-3xl font-bold text-blue-700">Contacta amb nosaltres</h1>
                <p className="mt-4 text-gray-600">
                    Aquesta és una pàgina de contacte fictícia per a la demo del treball de recerca.
                </p>
            </main>
        </>
    )
}
