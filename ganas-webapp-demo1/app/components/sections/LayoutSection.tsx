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
  "2": "grid-cols-1 sm:grid-cols-2",
  "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  auto: "grid-cols-1 sm:grid-flow-col sm:auto-cols-max",
};

export function LayoutSection() {
  const [mode, setMode] = useState<LayoutMode>("flex");
  const [alignment, setAlignment] = useState<Alignment>("center");
  const [columns, setColumns] = useState<GridColumns>("3");
  const [showCode, setShowCode] = useState(false);

  const containerClasses = useMemo(() => {
    if (mode === "flex") {
      return `flex flex-wrap ${flexAlignClasses[alignment]} gap-4 sm:gap-6`;
    }

    return `grid ${gridColumnClasses[columns]} gap-4 sm:gap-6`;
  }, [mode, alignment, columns]);

  const codeSample = `<section class="${containerClasses} rounded-3xl bg-slate-900/90 p-6 text-white">
  <div class="rounded-2xl bg-slate-800 p-4">Card A</div>
  <div class="rounded-2xl bg-slate-800 p-4">Card B</div>
  <div class="rounded-2xl bg-slate-800 p-4">Card C</div>
</section>`;

  return (
    <section
      id="layout"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
        <div className="inline-flex w-full items-center gap-2 rounded-full bg-slate-100 p-1 text-sm font-semibold sm:w-auto sm:gap-0 dark:bg-slate-800">
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
              className={`flex-1 rounded-full px-5 py-2 transition sm:flex-none ${
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

      <div className="mt-10 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 overflow-x-auto min-w-0">
          {mode === "flex" ? (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Main axis alignment
              </p>
              <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-col">
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
                    className={`w-full rounded-2xl px-4 py-2 text-left font-semibold transition ${
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
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
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
                    className={`w-full rounded-2xl px-4 py-2 text-sm font-semibold transition ${
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
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800 p-6 text-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] sm:p-8 lg:rounded-[2.5rem] dark:border-slate-700">
            <div className={`${containerClasses} rounded-[1.75rem] bg-slate-800/80 p-5 text-sm sm:p-6`}
            >
              {["A", "B", "C"].map((label) => (
                <div
                  key={label}
                  className="flex h-20 min-w-[88px] items-center justify-center rounded-2xl bg-slate-700 text-lg font-semibold"
                >
                  {label}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Utilities applied: <span className="font-semibold text-white">{containerClasses}</span>
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
