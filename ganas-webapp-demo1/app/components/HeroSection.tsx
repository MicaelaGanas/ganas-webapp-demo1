"use client";

import { ThemeToggle } from "./ThemeToggle";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mb-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-sky-300/10 to-transparent p-6 text-slate-900 shadow-[0_40px_120px_-50px_rgba(14,165,233,0.8)] transition sm:p-10 lg:mb-16 lg:rounded-[3rem] lg:p-12 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_55%)]" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6 lg:max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-600 shadow-lg backdrop-blur sm:px-4 dark:bg-slate-800/80 dark:text-sky-300">
            Interactive Tutorial
          </span>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl dark:text-slate-100">
            How to Use Tailwind CSS
          </h1>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl dark:text-slate-300">
            Build responsive, expressive interfaces faster than ever. Follow along with live previews, editable examples, and guided explanations tailored for beginners.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#installing-tailwind"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-sky-500 hover:shadow-2xl sm:w-auto"
            >
              Start learning
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#utility-classes"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-sky-300"
            >
              Explore utilities
            </a>
          </div>
        </div>
        <div className="relative mt-8 w-full rounded-[2rem] bg-white/85 p-5 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-4 hover:shadow-[0_40px_120px_-40px_rgba(14,165,233,0.7)] sm:mt-10 sm:p-8 lg:max-w-md dark:bg-slate-900/90">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500 dark:text-slate-400">
              Live preview
            </p>
            <ThemeToggle />
          </div>
          <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-700 shadow-inner dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <p className="font-semibold text-slate-900 dark:text-white">Tailwind in action</p>
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 text-xs shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl dark:bg-slate-900">
              <span className="font-medium text-slate-600 dark:text-slate-400">Hero button classes</span>
              <code className="rounded-xl bg-slate-900 p-3 font-mono text-[11px] text-slate-100">
                bg-sky-600 hover:-translate-y-1 hover:bg-sky-500 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300/40
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
