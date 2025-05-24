export default function ThingsILikePage() {
  return (
    <div className="w-2/5 mx-auto px-4 py-16">
      <div className="space-y-12">
        <h1 className="text-4xl font-bold text-gray-900">
          things i like.
        </h1>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              tech stuff
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>react and typescript for building uis that don&apos;t break</p>
              <p>next.js because it makes everything easier</p>
              <p>tailwind css for styling without the mess</p>
              <p>vercel for deployment that just works</p>
              <p>linear for project management done right</p>
              <p>cursor for coding with ai assistance</p>
              <p>rust when i want to learn something new</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              books i recommend
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>&quot;the pragmatic programmer&quot; - changed how i think about code</p>
              <p>&quot;designing data-intensive applications&quot; - for understanding systems</p>
              <p>&quot;atomic habits&quot; - small changes, big results</p>
              <p>&quot;project hail mary&quot; - best sci-fi i&apos;ve read in years</p>
              <p>&quot;the mom test&quot; - how to actually talk to customers</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              tools i use daily
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>macbook pro - m2 max with way too much ram</p>
              <p>raycast instead of spotlight</p>
              <p>arc browser for everything</p>
              <p>spotify for focus music (mostly lo-fi)</p>
              <p>notion for organizing my life</p>
              <p>1password because security matters</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              things that inspire me
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>products that solve real problems elegantly</p>
              <p>open source maintainers who build for everyone</p>
              <p>indie hackers building sustainable businesses</p>
              <p>minimalist design that doesn&apos;t sacrifice function</p>
              <p>people who share what they learn</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              random interests
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>making coffee that doesn&apos;t suck</p>
              <p>mechanical keyboards (currently typing on a keychron k8)</p>
              <p>walking around cities with no destination</p>
              <p>photography when i remember to bring my camera</p>
              <p>learning languages (currently attempting japanese)</p>
              <p>cooking simple things well</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            these are just things that work for me.
            your mileage may vary.
          </p>
        </div>
      </div>
    </div>
  );
} 