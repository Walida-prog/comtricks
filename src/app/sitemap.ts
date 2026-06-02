import { getAllPosts } from '@/lib/posts'

export default function sitemap() {
  const posts = getAllPosts()

  const articles = posts.map(post => ({
    url: `https://comtricks.vercel.app/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://comtricks.vercel.app',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://comtricks.vercel.app/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...articles,
  ]
}