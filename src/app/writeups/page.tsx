import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Write-ups',
  description: 'Write-ups CTF et bug bounty sur ComTricks',
}

export default function WriteupsPage() {
  const posts = getAllPosts().filter(post =>
    post.tags.includes('writeup')
  )

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Write-ups
      </h1>
      <p className="text-gray-500 mb-10">
        CTF - Bug Bounty - Pentest
      </p>

      {posts.length === 0 && (
        <p className="text-gray-400">Aucun write-up pour l'instant.</p>
      )}

      <ul className="flex flex-col gap-10">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">
              <div className="flex gap-2 mb-2">
                {post.tags.map(tag => (
                  <span key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                {post.description}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {post.date} - {post.readTime}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}