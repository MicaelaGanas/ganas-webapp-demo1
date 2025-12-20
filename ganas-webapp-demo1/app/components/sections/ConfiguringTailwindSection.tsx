"use client";

import { useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

const configSnippet = `// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}`;

export function ConfiguringTailwindSection() {
  const [showCode, setShowCode] = useState(false);

  return (
    <section
      id="configuring-tailwind"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Lesson 7
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Configuring Tailwind CSS
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Tailwind CSS comes with a configuration file, tailwind.config.js, where you can customize various aspects of your project's styles.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 overflow-x-auto min-w-0">
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Configuration Options
            </h3>
            <ul className="space-y-3 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">content:</strong> Specify files to scan for classes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">theme:</strong> Customize colors, spacing, fonts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">extend:</strong> Add custom values without replacing defaults</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                <span><strong className="text-slate-800 dark:text-slate-200">plugins:</strong> Add third-party plugins</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-800 sm:w-auto dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>

          {showCode && (
            <div className="lg:hidden overflow-hidden min-w-0">
              <CodeSnippet code={configSnippet} language="javascript" className="shadow-none" />
            </div>
          )}
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800 p-6 text-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] sm:p-8 lg:rounded-[2.5rem] dark:border-slate-700">
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-800/80 p-5">
                <h3 className="text-lg font-bold">Custom Configuration</h3>
                <p className="mt-2 text-sm text-slate-300">
                  The config file lets you extend Tailwind's defaults, add custom colors, spacing scales, and more. You can also configure which variants are enabled for each utility.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-blue-600 p-3 text-center text-xs font-semibold">
                  Custom Color
                </div>
                <div className="rounded-xl bg-emerald-600 p-3 text-center text-xs font-semibold">
                  Custom Color
                </div>
              </div>
            </div>
          </div>

          {showCode && (
            <div className="hidden lg:block">
              <CodeSnippet code={configSnippet} language="javascript" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
