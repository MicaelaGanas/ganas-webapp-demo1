"use client";

import { useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

type Category = "typography" | "colors" | "spacing" | "container";

const codeExamples: Record<Category, string> = {
  typography: `<!-- Text Sizes -->
<p class="text-xs">Extra Small Text</p>
<p class="text-sm">Small Text</p>
<p class="text-base">Base Text</p>
<p class="text-lg">Large Text</p>
<p class="text-xl">Extra Large Text</p>

<!-- Font Weights -->
<h2 class="font-thin">Thin Heading</h2>
<h2 class="font-normal">Normal Heading</h2>
<h2 class="font-semibold">Semi-Bold Heading</h2>
<h2 class="font-bold">Bold Heading</h2>`,
  colors: `<!-- Background Colors -->
<div class="bg-red-500">Red background</div>
<div class="bg-blue-300">Blue background</div>
<div class="bg-green-600">Green background</div>

<!-- Text Colors -->
<p class="text-red-600">Red text color</p>
<p class="text-gray-700">Gray text color</p>
<p class="text-green-600">Green text color</p>`,
  spacing: `<!-- Margin and Padding -->
<div class="m-4 p-2">Margin and padding</div>
<div class="mx-6 py-4">Horizontal and vertical spacing</div>

<!-- Specific sides -->
<div class="mt-4">Margin top</div>
<div class="pb-6">Padding bottom</div>
<div class="px-8">Horizontal padding</div>`,
  container: `<!-- Container with centered content -->
<div class="container mx-auto">
  <p>This content is centered with maximum width</p>
</div>

<!-- Container with padding -->
<div class="container mx-auto px-4">
  <p>Centered container with horizontal padding</p>
</div>`,
};

export function ExploringClassesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("typography");
  const [showCode, setShowCode] = useState(false);

  return (
    <section
      id="exploring-classes"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Lesson 9
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Exploring Tailwind CSS Classes
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Tailwind CSS provides an extensive set of utility classes to style HTML elements. These classes cover typography, colors, spacing, positioning, and more.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 overflow-x-auto min-w-0">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Class Categories
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {(
                [
                  { value: "typography", label: "Typography" },
                  { value: "colors", label: "Colors" },
                  { value: "spacing", label: "Spacing" },
                  { value: "container", label: "Container" },
                ] as const
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setActiveCategory(option.value)}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === option.value
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
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
              <CodeSnippet code={codeExamples[activeCategory]} language="html" className="shadow-none" />
            </div>
          )}
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] sm:p-8 lg:rounded-[2.5rem] dark:border-slate-700 dark:bg-slate-800">
            {activeCategory === "typography" && (
              <div className="space-y-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">Extra Small (text-xs)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Small (text-sm)</p>
                <p className="text-base text-slate-700 dark:text-slate-200">Base (text-base)</p>
                <p className="text-lg text-slate-800 dark:text-slate-100">Large (text-lg)</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Extra Large (text-xl)</h3>
                <div className="mt-6 space-y-2">
                  <p className="font-thin text-slate-700 dark:text-slate-300">Font Thin</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Font Semi-bold</p>
                  <p className="font-bold text-slate-900 dark:text-slate-100">Font Bold</p>
                </div>
              </div>
            )}
            {activeCategory === "colors" && (
              <div className="space-y-4">
                <div className="bg-red-500 text-white p-4 rounded-xl">Red Background</div>
                <div className="bg-blue-300 text-slate-900 p-4 rounded-xl">Blue Background</div>
                <div className="bg-green-600 text-white p-4 rounded-xl">Green Background</div>
                <div className="mt-6 space-y-2">
                  <p className="text-red-600 font-semibold">Red Text Color</p>
                  <p className="text-gray-700 font-semibold dark:text-gray-300">Gray Text Color</p>
                  <p className="text-green-600 font-semibold">Green Text Color</p>
                </div>
              </div>
            )}
            {activeCategory === "spacing" && (
              <div className="space-y-6 bg-slate-50 p-4 rounded-xl dark:bg-slate-900">
                <div className="m-4 p-2 bg-sky-500 text-white rounded-lg">m-4 p-2: Margin and Padding</div>
                <div className="mx-6 py-4 bg-emerald-500 text-white rounded-lg">mx-6 py-4: Horizontal margin, vertical padding</div>
                <div className="mt-4 bg-purple-500 text-white p-3 rounded-lg">mt-4: Margin top</div>
                <div className="px-8 bg-pink-500 text-white py-2 rounded-lg">px-8: Horizontal padding</div>
              </div>
            )}
            {activeCategory === "container" && (
              <div className="space-y-4">
                <div className="container mx-auto bg-sky-100 p-6 rounded-xl dark:bg-sky-900/30">
                  <p className="text-center text-slate-800 dark:text-slate-200 font-semibold">
                    This content is centered with maximum width
                  </p>
                </div>
                <div className="container mx-auto px-4 bg-emerald-100 p-6 rounded-xl dark:bg-emerald-900/30">
                  <p className="text-slate-800 dark:text-slate-200 font-semibold">
                    Centered container with horizontal padding
                  </p>
                </div>
              </div>
            )}
          </div>

          {showCode && (
            <div className="hidden lg:block">
              <CodeSnippet code={codeExamples[activeCategory]} language="html" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
