// src/app/blog/page.tsx
import Link        from 'next/link'
import { getAllPosts } from '@/lib/posts'

// Métadonnées SEO de cette page
// Next.js les injecte dans <head> automatiquement
// Résultat dans l'onglet : "Articles | ComTricks"
export const metadata = {
  title: 'Articles',
  description: 'Tous les articles ComTricks sur le pentest et bug bounty',
}

// Server Component — s'exécute au build, lit les fichiers MDX
export default function BlogPage() {
  const posts = getAllPosts()  // lit content/posts/*.mdx

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Articles
      </h1>
      <p className="text-gray-500 mb-10">
        Pentest · Bug Bounty · Write-ups CTF
      </p>

      {/* Si aucun article : message d'attente */}
      {posts.length === 0 && (
        <p className="text-gray-400">
          Aucun article pour l'instant.
        </p>
      )}

      <ul className="flex flex-col gap-10">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">

              {/* Tags */}
              <div className="flex gap-2 mb-2">
                {post.tags.map(tag => (
                  <span key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Titre — bleu au survol */}
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 mt-1 text-sm">
                {post.description}
              </p>

              {/* Date + temps de lecture */}
              <p className="text-xs text-gray-400 mt-2">
                {post.date} · {post.readTime}
              </p>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}