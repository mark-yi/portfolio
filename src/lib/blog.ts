import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  content: string
  readingTime: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const { text: readingTimeText } = readingTime(content)

      return {
        slug,
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? new Date().toISOString(),
        excerpt: data.excerpt as string | undefined,
        tags: (data.tags as string[]) ?? [],
        content,
        readingTime: readingTimeText,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    let fileContents: string
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
      if (fs.existsSync(mdxPath)) {
        fileContents = fs.readFileSync(mdxPath, 'utf8')
      } else {
        return null
      }
    }

    const { data, content } = matter(fileContents)
    const { text: readingTimeText } = readingTime(content)

    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? new Date().toISOString(),
      excerpt: data.excerpt as string | undefined,
      tags: (data.tags as string[]) ?? [],
      content,
      readingTime: readingTimeText,
    }
  } catch {
    return null
  }
} 