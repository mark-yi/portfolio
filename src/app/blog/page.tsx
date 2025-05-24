import Link from 'next/link'
import { getAllPosts } from '~/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  if (posts.length === 0) {
    return (
      <div className="w-2/5 mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">blog</h1>
        <p className="text-gray-600">
          no posts yet. create your first post in{' '}
          <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
            content/posts/
          </code>
        </p>
      </div>
    )
  }

  return (
    <div className="w-2/5 mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 mb-2">
                {post.title}
              </h2>
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            {post.excerpt && (
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.excerpt}
              </p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
} 