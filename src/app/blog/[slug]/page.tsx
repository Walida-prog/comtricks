// src/app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote }                  from 'next-mdx-remote/rsc'
import { notFound }                   from 'next/navigation'

// 1. Dit à Next.js quels slugs générer au build
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
  // → [{ slug: "idor-guide" }, { slug: "xss-basics" }...]
}

// 2. Génère les métadonnées SEO par article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title:       post.title,        // "IDOR... | ComTricks"
    description: post.description,  // affiché par Google
    openGraph: {
      title:         post.title,
      description:   post.description,
      type:          'article',
      publishedTime: post.date,
      url:           `https://comtricks.vercel.app/blog/${slug}`,
    },
  }
}

// 3. Le composant page — rendu pour chaque slug
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  // Si le slug n'existe pas → page 404 automatique
  if (!post) notFound()

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">

      {/* En-tête */}
      <header className="mb-10">
        <div className="flex gap-2 mb-3 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400">
          {post.date} · {post.readTime}
        </p>
      </header>

      {/* Contenu MDX → HTML avec styles typography */}
      <div className="prose prose-gray max-w-none">
        <MDXRemote source={post.content} />
      </div>

    </article>
  )
}