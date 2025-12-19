"use client";

import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export function CodeSnippet({ code, language = "bash" }: CodeSnippetProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-slate-100 shadow-xl dark:border-slate-700 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800/60 bg-slate-900/80 px-5 py-3 text-xs uppercase tracking-[0.25em] text-slate-400 dark:border-slate-800">
        <span>{language}</span>
        <button
          type="button"
          onClick={() => copy(code)}
          className="rounded-full border border-slate-700 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
