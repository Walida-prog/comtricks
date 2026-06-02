import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug:        string
  title:       string
  description: string
  date:        string
  tags:        string[]
  readTime:    string
  content:     string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        title:       data.title       ?? '',
        description: data.description ?? '',
        date:        data.date         ?? '',
        tags:        data.tags         ?? [],
        readTime:    readingTime(content).text,
        content,
      }
    })
    .sort((a, b) => a.date < b.date ? 1 : -1)
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title:       data.title       ?? '',
    description: data.description ?? '',
    date:        data.date         ?? '',
    tags:        data.tags         ?? [],
    readTime:    readingTime(content).text,
    content,
  }
}