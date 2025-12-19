"use client";

import { useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

type Effect = "lift" | "glow" | "bounce";
type Speed = "150" | "300" | "500";

type Focus = "ring" | "outline" | "subtle";

const effectClasses: Record<Effect, string> = {
  lift: "hover:-translate-y-1 hover:shadow-2xl",
  glow: "hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.65)]",
  bounce: "hover:-translate-y-1 hover:animate-[bounce_1s_infinite]",
};

const speedClasses: Record<Speed, string> = {
  "150": "transition duration-150",
  "300": "transition duration-300",
  "500": "transition duration-500",
};

const focusClasses: Record<Focus, string> = {
  ring: "focus:outline-none focus:ring-4 focus:ring-sky-400/50",
  outline: "focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-slate-800/80",
  subtle: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400/50",
};

export function StatesSection() {
  const [effect, setEffect] = useState<Effect>("lift");
  const [speed, setSpeed] = useState<Speed>("300");
  const [focus, setFocus] = useState<Focus>("ring");
  const [showCode, setShowCode] = useState(false);

  const buttonClasses = `group inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white ${speedClasses[speed]} ${effectClasses[effect]} ${focusClasses[focus]} active:scale-95`;

  const codeSample = `<button class="${buttonClasses}">
  Hover & Focus me
</button>`;

  return (
    <section
      id="states"
      className="scroll-mt-28 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Lesson 4
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Hover, Focus & Motion States
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Tailwind encodes pseudo-classes and transitions right into the class name. Mix and match them to craft delightful states without custom CSS.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 text-sm text-slate-600 shadow-inner dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Hover effect
            </h3>
            <div className="flex flex-col gap-2">
              {(
                [
                  { value: "lift", label: "Lift" },
                  { value: "glow", label: "Glow" },
                  { value: "bounce", label: "Bounce" },
                ] as const
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setEffect(option.value)}
                  className={`rounded-2xl px-4 py-2 text-left font-semibold transition ${
                    effect === option.value
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Transition speed
            </h3>
            <div className="flex gap-2">
              {(
                [
                  { value: "150", label: "150ms" },
                  { value: "300", label: "300ms" },
                  { value: "500", label: "500ms" },
                ] as const
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSpeed(option.value)}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    speed === option.value
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Focus style
            </label>
            <select
              value={focus}
              onChange={(event) => setFocus(event.target.value as Focus)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-300/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-sky-500/30"
            >
              <option value="ring">Sky ring</option>
              <option value="outline">Bold outline</option>
              <option value="subtle">Subtle ring</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-sky-500/10 via-white to-white p-12 text-center shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] dark:border-slate-700 dark:from-sky-500/10 dark:via-slate-900 dark:to-slate-900">
            <button className={buttonClasses}>
              Hover & Focus me
              <span className="text-base transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-300">
              Classes applied: <span className="font-semibold text-slate-800 dark:text-slate-100">{buttonClasses}</span>
            </p>
          </div>

          {showCode && <CodeSnippet code={codeSample} language="html" />}
        </div>
      </div>
    </section>
  );
}
