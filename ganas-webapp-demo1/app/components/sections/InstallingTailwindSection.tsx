"use client";

import { useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

const snippets = {
  cdn: `<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css"
/>\n\n<div class="bg-sky-600 text-white px-6 py-3 rounded-full">Tailwind via CDN</div>`,
  node: `npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init\n\n// tailwind.config.js\nmodule.exports = {\n  content: ["./src/**/*.{html,js,jsx,tsx}"],\n  theme: { extend: {} },\n  plugins: [],\n};`,
} as const;

type TabKey = keyof typeof snippets;

export function InstallingTailwindSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("cdn");
  const [showCode, setShowCode] = useState(false);

  const highlightClasses =
    activeTab === "cdn"
      ? "bg-sky-500 text-white"
      : "bg-emerald-500 text-white";

  return (
    <section
      id="installing-tailwind"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Lesson 1
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Installing Tailwind CSS
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Tailwind can be added instantly via a CDN for prototypes or wired into your build with Node.js for production apps. Toggle the setup steps, then inspect the live preview to see what changes.
          </p>
        </div>
        <div className="flex w-full items-center gap-2 rounded-full bg-slate-100 p-1 text-sm font-semibold sm:w-auto sm:gap-0 dark:bg-slate-800">
          {(
            [
              { key: "cdn", label: "CDN" },
              { key: "node", label: "Node.js" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 rounded-full px-4 py-2 transition sm:flex-none ${
                activeTab === tab.key
                  ? "bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-slate-100"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-6 overflow-x-auto min-w-0">
          <article className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {activeTab === "cdn" ? (
              <ul className="space-y-3">
                <li>
                  Drop a single <code className="rounded bg-slate-900 px-1 text-xs text-white">&lt;link&gt;</code> tag into your HTML head.
                </li>
                <li>Perfect for CodePen demos or rapid experiments.</li>
                <li>No build step required—class changes apply immediately.</li>
              </ul>
            ) : (
              <ul className="space-y-3">
                <li>Install Tailwind as a development dependency inside your Node.js project.</li>
                <li>Generate the config file and point <span className="font-semibold text-slate-700 dark:text-slate-200">content</span> to all template files.</li>
                <li>Use a build tool (Next.js, Vite, Remix) to tree-shake unused styles for production.</li>
              </ul>
            )}
          </article>
          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-800 sm:w-auto dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
          {showCode && (
            <div className="lg:hidden overflow-hidden min-w-0">
              <CodeSnippet code={snippets[activeTab]} language={activeTab === "cdn" ? "html" : "bash"} className="shadow-none" />
            </div>
          )}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] sm:p-8 lg:rounded-[2.5rem] dark:border-slate-700 dark:bg-slate-800">
          <span className="absolute -top-9 right-6 origin-center -rotate-12 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg dark:bg-slate-700">
            Live UI
          </span>
          <div className="flex flex-col items-center gap-6">
            <div className={`rounded-3xl px-6 py-3 text-base font-semibold shadow-lg transition duration-500 ${highlightClasses}`}>
              {activeTab === "cdn" ? "Linked via CDN" : "Compiled with Node.js"}
            </div>
            <div className="grid w-full gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left text-sm leading-relaxed text-slate-600 shadow-inner dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-slate-100">What changed?</p>
              {activeTab === "cdn" ? (
                <p>
                  The classes are available immediately. Try editing text in the HTML editor—your changes show up without rebuilding.
                </p>
              ) : (
                <p>
                  Tailwind scans your project files, generates only the utilities you use, and produces a tiny CSS bundle.
                </p>
              )}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-slate-200 px-3 py-1 font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                  {activeTab === "cdn" ? "drop-in-ready" : "production-optimized"}
                </span>
                <span className="rounded-full bg-slate-200 px-3 py-1 font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                  {activeTab === "cdn" ? "no build step" : "purge unused styles"}
                </span>
              </div>
            </div>
          </div>
          {showCode && (
            <div className="hidden lg:block">
              <CodeSnippet code={snippets[activeTab]} language={activeTab === "cdn" ? "html" : "bash"} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
