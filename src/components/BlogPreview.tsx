import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BlogPreviewProps = {
    title: string
    excerpt: string
    image: string
    slug: string
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, excerpt, image, slug }) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
            <Image src={image} alt={title} width={600} height={300} className="rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
            <p className="text-gray-600 mt-2">{excerpt}</p>
            <Link href={`/${slug}`} className="text-blue-500 mt-4 inline-block">Llegeix més →</Link>
        </div>
    )
}

export default BlogPreview
