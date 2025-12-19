"use client";

import { useMemo, useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

const starterClasses = "bg-gradient-to-br from-sky-500 to-indigo-500 text-white px-8 py-6 rounded-3xl shadow-2xl";

export function PlaygroundSection() {
  const [classes, setClasses] = useState(starterClasses);
  const [showCode, setShowCode] = useState(false);

  const previewClasses = useMemo(() => {
    return `${classes} transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)]`;
  }, [classes]);

  const codeSample = `<div class="${classes}">
  Tailwind Playground
</div>`;

  return (
    <section
      id="playground"
      className="scroll-mt-28 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Lesson 6
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Editable Class Playground
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Type Tailwind classes to instantly preview the UI. Experiment safely by mixing utilities, breakpoints, and state variants.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 text-sm text-slate-600 shadow-inner dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Tailwind classes
          </label>
          <textarea
            value={classes}
            onChange={(event) => setClasses(event.target.value)}
            rows={6}
            className="w-full resize-none rounded-3xl border border-slate-200 bg-white p-4 font-mono text-xs text-slate-700 shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-300/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-sky-500/30"
            placeholder="Enter Tailwind utility classes"
          />
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Tip: Use responsive prefixes (<span className="font-semibold text-slate-700 dark:text-slate-200">md:</span>), pseudo states (<span className="font-semibold text-slate-700 dark:text-slate-200">hover:</span>), and color utilities together.
          </p>

          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800 p-10 text-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] dark:border-slate-700">
            <div className={previewClasses}>
              <h3 className="text-2xl font-black tracking-tight">Tailwind Playground</h3>
              <p className="mt-3 text-sm text-white/80">
                Try editing the class string on the left to change this card in real time.
              </p>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Applied classes: <span className="font-semibold text-white">{classes}</span>
            </p>
          </div>

          {showCode && <CodeSnippet code={codeSample} language="html" />}
        </div>
      </div>
    </section>
  );
}
