"use client";

import { useMemo, useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

type ColorOption = "sky" | "rose" | "emerald" | "amber";
type SpacingOption = "tight" | "cozy" | "roomy";
type TypographyOption = "sans" | "serif" | "mono";

const colorMap: Record<ColorOption, string> = {
  sky: "bg-sky-500 text-white",
  rose: "bg-rose-500 text-white",
  emerald: "bg-emerald-500 text-white",
  amber: "bg-amber-500 text-slate-900",
};

const spacingMap: Record<SpacingOption, string> = {
  tight: "px-4 py-3",
  cozy: "px-6 py-4",
  roomy: "px-8 py-6",
};

const typographyMap: Record<TypographyOption, { heading: string; body: string }> = {
  sans: { heading: "font-sans text-xl", body: "font-sans text-sm" },
  serif: { heading: "font-serif text-2xl", body: "font-serif text-base" },
  mono: { heading: "font-mono text-lg", body: "font-mono text-xs" },
};

export function UtilityClassesSection() {
  const [color, setColor] = useState<ColorOption>("sky");
  const [spacing, setSpacing] = useState<SpacingOption>("cozy");
  const [typography, setTypography] = useState<TypographyOption>("sans");
  const [showCode, setShowCode] = useState(false);

  const previewClasses = useMemo(
    () => `${colorMap[color]} ${spacingMap[spacing]} rounded-3xl transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl`,
    [color, spacing]
  );

  const headingClasses = typographyMap[typography].heading;
  const bodyClasses = typographyMap[typography].body;

  const codeSample = `<!-- Tailwind utilities compose directly onto elements -->\n<div class="${previewClasses} ${headingClasses}">\n  Hey Tailwind!\n</div>`;

  return (
    <section
      id="utility-classes"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Lesson 2
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Utility Classes = Lego Bricks for Your UI
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Tailwind ships thousands of single-purpose classes. Mix them together to control color, spacing, and typography without leaving your markup.
          </p>
        </div>
      </header>

      <div className="mt-10 grid gap-8 md:gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Color palette
            </p>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(colorMap).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setColor(option as ColorOption)}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold capitalize transition ${
                    color === option
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Spacing scale
            </p>
            <div className="grid gap-2 sm:flex sm:flex-col">
              {Object.keys(spacingMap).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSpacing(option as SpacingOption)}
                  className={`rounded-2xl px-4 py-2 text-left text-sm font-semibold capitalize transition ${
                    spacing === option
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Typography
            </label>
            <select
              value={typography}
              onChange={(event) => setTypography(event.target.value as TypographyOption)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-300/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-sky-500/30"
            >
              <option value="sans">Sans</option>
              <option value="serif">Serif</option>
              <option value="mono">Mono</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-800 sm:w-auto dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] sm:p-8 lg:rounded-[2.5rem] dark:border-slate-700 dark:bg-slate-800">
            <div className={previewClasses}>
              <h3 className={`${headingClasses} font-black text-white drop-shadow dark:text-white`}>
                Utility magic ✨
              </h3>
              <p className={`${bodyClasses} mt-3 text-white/90 dark:text-white/80`}>
                These classes stack to control color, spacing, and type—pick the combo that fits your brand.
              </p>
            </div>
          </div>

          {showCode && <CodeSnippet code={codeSample} language="html" />}
        </div>
      </div>
    </section>
  );
}
