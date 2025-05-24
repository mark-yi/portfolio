export default function WhatIDidPage() {
  return (
    <div className="w-2/5 mx-auto px-4 py-16">
      <div className="space-y-12">
        <h1 className="text-4xl font-bold text-gray-900">
          what i did.
        </h1>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              senior frontend engineer at startup x
            </h2>
            <p className="text-gray-600 text-sm">
              2022 - 2024
            </p>
            <p className="text-gray-700 leading-relaxed">
              built the entire frontend from scratch using react and typescript.
              worked directly with the ceo to define product direction.
              scaled the platform from 0 to 10k+ daily active users.
              implemented realtime features, payment systems, and mobile-responsive design.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              freelance full-stack developer
            </h2>
            <p className="text-gray-600 text-sm">
              2020 - 2022
            </p>
            <p className="text-gray-700 leading-relaxed">
              helped early-stage startups and small businesses build their mvps.
              worked with react, node.js, postgresql, and aws.
              specialized in rapid prototyping and clean, maintainable code.
              delivered 15+ projects on time and under budget.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              open source projects
            </h2>
            <p className="text-gray-600 text-sm">
              ongoing
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-gray-900">
                  project alpha
                </h3>
                <p className="text-gray-700 text-sm">
                  a lightweight state management library for react. 2k+ stars on github.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  cli tool beta
                </h3>
                <p className="text-gray-700 text-sm">
                  command line tool for automating common development tasks. written in rust.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  blog posts & tutorials
                </h3>
                <p className="text-gray-700 text-sm">
                  wrote technical articles that have been read by 50k+ developers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              random experiments
            </h2>
            <p className="text-gray-700 leading-relaxed">
              built a chrome extension that got 1k+ users before i got bored.
              created a slack bot that helped teams track their goals.
              made a tiny weather app that just shows if you need a jacket.
              built and launched dozens of small projects that taught me something new.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            some stuff worked out. most of it didn&apos;t.
            but i learned something from everything.
          </p>
        </div>
      </div>
    </div>
  );
} 