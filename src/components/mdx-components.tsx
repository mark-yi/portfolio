import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-5xl font-bold text-gray-900 mb-12 mt-16 first:mt-0 border-b-2 border-gray-200 pb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-12">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-10">
        {children}
      </h3>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
      <a 
        href={href} 
        className="text-gray-900 hover:underline font-medium"
        target={typeof href === 'string' && href.startsWith('http') ? '_blank' : undefined}
        rel={typeof href === 'string' && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 mb-6 text-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }: { children: React.ReactNode }) => (
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-gray-600">
        {children}
      </em>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
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