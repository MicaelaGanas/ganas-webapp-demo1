"use client";

import { useCallback } from "react";

interface SidebarNavProps {
  sections: { id: string; title: string }[];
  activeId: string;
}

export function SidebarNav({ sections, activeId }: SidebarNavProps) {
  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav
      aria-label="Tutorial sections"
      className="sticky top-24 hidden h-[calc(100vh-6rem)] min-w-[220px] flex-col gap-2 overflow-y-auto rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur sm:flex dark:bg-slate-900/70"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
        Sections
      </p>
      <ol className="space-y-2 text-sm">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => handleScroll(section.id)}
                className={`group w-full rounded-2xl px-4 py-3 text-left font-medium transition-all ${
                  isActive
                    ? "bg-sky-500/10 text-sky-600 ring-2 ring-sky-500/50 dark:bg-sky-400/10 dark:text-sky-300"
                    : "text-slate-600 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <span className="flex items-center justify-between">
                  {section.title}
                  <span className="text-xs uppercase tracking-wider text-slate-400 transition group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
                    {isActive ? "Now" : "View"}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
