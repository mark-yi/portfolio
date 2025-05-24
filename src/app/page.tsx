export default function HomePage() {
  return (
    <div className="w-2/5 mx-auto px-4 py-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          hi, i&apos;m mark.
        </h1>
        
        <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            i&apos;m just a person who loves creating things for others.
          </p>
          
          <p>
            started coding when i was 12 and haven&apos;t stopped since. 
            i believe in building simple, elegant solutions that actually work.
          </p>
          
          <p>
            these days i spend my time working on projects that matter to me,
            learning new technologies, and helping others bring their ideas to life.
          </p>
          
          <p>
            i think the best software is invisible - it just works exactly 
            how you&apos;d expect it to, without getting in your way.
          </p>
          
          <p>
            when i&apos;m not coding, you&apos;ll find me reading, exploring new places,
            or thinking about how to make the web a better place for everyone.
          </p>
        </div>

        <div className="pt-8">
          <p className="text-gray-600">
            want to chat? reach out at{" "}
            <a 
              href="mailto:mark@example.com" 
              className="text-gray-900 hover:underline"
            >
              mark@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
