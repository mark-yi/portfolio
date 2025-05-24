import { notFound } from 'next/navigation'
import { getPostBySlug } from '~/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '../../../mdx-components'

export default function WhyIDoPage() {
  const post = getPostBySlug('why-i-do')

  if (!post) {
    notFound()
  }

  const components = useMDXComponents({})

  return (
    <div className="w-2/5 mx-auto px-4 py-16">
      <article>
        <div className="prose prose-gray max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </div>
  )
} 