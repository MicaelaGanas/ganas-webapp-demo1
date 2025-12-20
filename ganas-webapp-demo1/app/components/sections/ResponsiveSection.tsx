"use client";

import { useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

const previewConfigs = {
  mobile: {
    label: "Mobile",
    classes:
      "grid gap-4 rounded-3xl bg-white/90 p-5 shadow-lg sm:p-6 lg:grid-cols-1 dark:bg-slate-800/90",
    content: [
      "Stacked cards",
      "Buttons full width",
      "Typography 16px",
    ],
    wrapper: "sm:grid-cols-1",
  },
  tablet: {
    label: "Tablet",
    classes:
      "grid gap-4 rounded-3xl bg-white/90 p-5 shadow-lg sm:grid-cols-2 sm:p-6 dark:bg-slate-800/90",
    content: [
      "Two-column split",
      "Buttons inline",
      "Typography 18px",
    ],
    wrapper: "sm:grid-cols-2",
  },
  desktop: {
    label: "Desktop",
    classes:
      "grid gap-4 rounded-3xl bg-white/90 p-5 shadow-lg sm:p-6 md:grid-cols-[2fr_1fr] dark:bg-slate-800/90",
    content: [
      "Sidebar adds",
      "Buttons compact",
      "Typography 18-20px",
    ],
    wrapper: "md:grid-cols-[2fr_1fr]",
  },
} as const;

type BreakpointKey = keyof typeof previewConfigs;

export function ResponsiveSection() {
  const [activeBreakpoint, setActiveBreakpoint] = useState<BreakpointKey>("mobile");
  const [showCode, setShowCode] = useState(false);

  const codeSample = `<div class="grid gap-4 ${previewConfigs.mobile.wrapper} ${previewConfigs.tablet.wrapper} ${previewConfigs.desktop.wrapper}">
  <article class="rounded-3xl bg-white p-6 shadow-lg">Content</article>
  <aside class="rounded-3xl bg-white p-6 shadow-lg">Sidebar</aside>
</div>`;

  return (
    <section
      id="responsive"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Lesson 5
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Responsive Design with Breakpoints
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Tailwind prefixes utilities with breakpoint shortcuts—add <span className="font-semibold text-slate-800 dark:text-slate-100">sm:</span>, <span className="font-semibold text-slate-800 dark:text-slate-100">md:</span>, <span className="font-semibold text-slate-800 dark:text-slate-100">lg:</span>, and beyond to progressively enhance your layout.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 overflow-x-auto min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Breakpoint preview
          </p>
          <div className="grid gap-2 sm:flex sm:flex-col">
            {(Object.keys(previewConfigs) as BreakpointKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveBreakpoint(key)}
                className={`w-full rounded-2xl px-4 py-2 text-left text-sm font-semibold transition ${
                  activeBreakpoint === key
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {previewConfigs[key].label}
              </button>
            ))}
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
              <CodeSnippet code={codeSample} language="html" className="shadow-none" />
            </div>
          )}
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800 p-8 text-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] sm:p-10 lg:rounded-[2.5rem] dark:border-slate-700">
            <div className={`${previewConfigs[activeBreakpoint].classes} transition-all duration-500`}
            >
              {previewConfigs[activeBreakpoint].content.map((text) => (
                <div
                  key={text}
                  className="rounded-2xl bg-slate-900/70 p-5 text-left text-sm font-semibold"
                >
                  {text}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Active classes: <span className="font-semibold text-white">{previewConfigs[activeBreakpoint].classes}</span>
            </p>
          </div>

          {showCode && (
            <div className="hidden lg:block">
              <CodeSnippet code={codeSample} language="html" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
