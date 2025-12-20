"use client";

import { useState } from "react";
import { CodeSnippet } from "../CodeSnippet";

const htmlSnippet = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
    <title>My Tailwind CSS Project</title>
</head>
<body>
    <div class="bg-blue-500 text-white text-center py-4">
        <h1 class="text-4xl font-bold">Welcome to Tailwind CSS</h1>
        <p class="mt-4">A utility-first CSS framework.</p>
    </div>
    <div class="container mx-auto mt-8 p-4">
        <p class="text-lg">Get started with Tailwind CSS and create amazing web interfaces.</p>
    </div>
</body>
</html>`;

export function FirstProjectSection() {
  const [showCode, setShowCode] = useState(false);

  return (
    <section
      id="first-project"
      className="scroll-mt-28 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
    >
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Lesson 8
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Creating Your First Tailwind CSS Project
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Let's create a simple HTML file and apply Tailwind CSS classes to style it.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm text-slate-600 shadow-inner sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 overflow-x-auto min-w-0">
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Quick Start Steps
            </h3>
            <ol className="space-y-3 leading-relaxed list-decimal list-inside">
              <li>Create an HTML file (e.g., index.html)</li>
              <li>Add the Tailwind CSS CDN link in the head</li>
              <li>Start using Tailwind utility classes</li>
              <li>Open in your browser to see the results</li>
            </ol>
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
              <CodeSnippet code={htmlSnippet} language="html" className="shadow-none" />
            </div>
          )}
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-45px_rgba(14,165,233,0.7)] lg:rounded-[2.5rem] dark:border-slate-700 dark:bg-slate-800 overflow-hidden">
            <div className="bg-blue-500 text-white text-center py-4">
              <h3 className="text-2xl font-bold">Welcome to Tailwind CSS</h3>
              <p className="mt-3 text-sm">A utility-first CSS framework.</p>
            </div>
            <div className="p-6">
              <p className="text-base text-slate-700 dark:text-slate-300">
                Get started with Tailwind CSS and create amazing web interfaces.
              </p>
            </div>
          </div>

          {showCode && (
            <div className="hidden lg:block">
              <CodeSnippet code={htmlSnippet} language="html" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
