"use client";

import { useMemo, useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

type LayoutMode = "flex" | "grid";

type Alignment = "start" | "center" | "between";

type GridColumns = "2" | "3" | "auto";

const flexAlignClasses: Record<Alignment, string> = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
};

const gridColumnClasses: Record<GridColumns, string> = {
  "2": "grid-cols-2",
  "3": "grid-cols-3",
  auto: "grid-flow-col auto-cols-max",
};

export function LayoutSection() {
  const [mode, setMode] = useState<LayoutMode>("flex");
  const [alignment, setAlignment] = useState<Alignment>("center");
  const [columns, setColumns] = useState<GridColumns>("3");
  const [showCode, setShowCode] = useState(false);

  const containerClasses = useMemo(() => {
    if (mode === "flex") {
      return `flex ${flexAlignClasses[alignment]} gap-6`;
    }

    return `grid ${gridColumnClasses[columns]} gap-6`;
  }, [mode, alignment, columns]);

  const codeSample = `<section class="${containerClasses} rounded-3xl bg-slate-900/90 p-6 text-white">
  <div class="rounded-2xl bg-slate-800 p-4">Card A</div>
  <div class="rounded-2xl bg-slate-800 p-4">Card B</div>
  <div class="rounded-2xl bg-slate-800 p-4">Card C</div>
</section>`;

  return (
    <section
      id="layout"
      className="scroll-mt-28 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Lesson 3
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Flexbox vs. Grid Layouts
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            Flip between layout modes and tune their alignment. Tailwind abstracts the CSS properties into intuitive utilities.
          </p>
        </div>
        <div className="inline-flex rounded-full bg-slate-100 p-1 text-sm font-semibold dark:bg-slate-800">
          {(
            [
              { value: "flex", label: "Flexbox" },
              { value: "grid", label: "Grid" },
            ] as const
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setMode(option.value)}
              className={`rounded-full px-5 py-2 transition ${
                mode === option.value
                  ? "bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-slate-100"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 text-sm text-slate-600 shadow-inner dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {mode === "flex" ? (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Main axis alignment
              </p>
              <div className="flex flex-col gap-2">
                {(
                  [
                    { value: "start", label: "Start" },
                    { value: "center", label: "Center" },
                    { value: "between", label: "Space between" },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setAlignment(option.value)}
                    className={`rounded-2xl px-4 py-2 text-left font-semibold transition ${
                      alignment === option.value
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                        : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Column count
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                    { value: "auto", label: "Auto-flow" },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setColumns(option.value)}
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                      columns === option.value
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                        : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800 p-8 text-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] dark:border-slate-700">
            <div className={`${containerClasses} rounded-[2rem] bg-slate-800/80 p-6 text-sm`}
            >
              {["A", "B", "C"].map((label) => (
                <div
                  key={label}
                  className="flex h-20 min-w-[100px] items-center justify-center rounded-2xl bg-slate-700 text-lg font-semibold"
                >
                  {label}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Utilities applied: <span className="font-semibold text-white">{containerClasses}</span>
            </p>
          </div>

          {showCode && <CodeSnippet code={codeSample} language="html" />}
        </div>
      </div>
    </section>
  );
}
