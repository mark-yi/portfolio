import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="w-2/5 mx-auto px-4 py-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          hi, i&apos;m mark.
        </h1>
        
        <div className="space-y-4">
          <Link 
            href="/why-i-do"
            className="block text-lg text-gray-700 hover:text-gray-900"
          >
            why i do
          </Link>
          <Link 
            href="/what-i-did"
            className="block text-lg text-gray-700 hover:text-gray-900"
          >
            what i did
          </Link>
          <Link 
            href="/things-i-like"
            className="block text-lg text-gray-700 hover:text-gray-900"
          >
            things i like
          </Link>
        </div>
      </div>
    </div>
  );
}
