import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-12 first:mt-0 border-b-2 border-gray-200 pb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-m text-gray-700 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-gray-900 hover:underline font-medium"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 mb-6 text-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-600">
        {children}
      </em>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">
        {children}
      </strong>
    ),
    hr: () => (
      <hr className="border-gray-300 my-8" />
    ),
    ...components,
  }
} 