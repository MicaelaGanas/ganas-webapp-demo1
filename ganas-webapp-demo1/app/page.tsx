"use client";

import { useMemo } from "react";
import { HeroSection } from "./components/HeroSection";
import { SidebarNav } from "./components/SidebarNav";
import { ThemeToggle } from "./components/ThemeToggle";
import { InstallingTailwindSection } from "./components/sections/InstallingTailwindSection";
import { UtilityClassesSection } from "./components/sections/UtilityClassesSection";
import { LayoutSection } from "./components/sections/LayoutSection";
import { StatesSection } from "./components/sections/StatesSection";
import { ResponsiveSection } from "./components/sections/ResponsiveSection";
import { PlaygroundSection } from "./components/sections/PlaygroundSection";
import { useScrollSpy } from "./hooks/useScrollSpy";

const sectionList = [
  { id: "home", title: "Welcome" },
  { id: "installing-tailwind", title: "Install Tailwind" },
  { id: "utility-classes", title: "Utility Classes" },
  { id: "layout", title: "Flexbox & Grid" },
  { id: "states", title: "States & Motion" },
  { id: "responsive", title: "Responsive" },
  { id: "playground", title: "Playground" },
];

export default function Home() {
  const sectionIds = useMemo(() => sectionList.map((section) => section.id), []);
  const activeId = useScrollSpy({
    sectionIds,
    offset: -140,
  });

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-lg font-black text-white shadow-lg shadow-sky-500/40">
              TW
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Tutorial blog
              </p>
              <h1 className="text-lg font-bold">How to Use Tailwind CSS</h1>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#installing-tailwind"
              className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
            >
              Skip to lessons
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row">
        <SidebarNav sections={sectionList} activeId={activeId} />

        <main className="flex-1 space-y-14 pb-16">
          <div className="flex flex-wrap items-center gap-3 sm:hidden">
            {sectionList.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  activeId === section.id
                    ? "bg-sky-500 text-white shadow-lg"
                    : "bg-white text-slate-600 shadow hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {section.title}
              </a>
            ))}
          </div>

          <HeroSection />
          <InstallingTailwindSection />
          <UtilityClassesSection />
          <LayoutSection />
          <StatesSection />
          <ResponsiveSection />
          <PlaygroundSection />
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white/80 py-10 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-center sm:flex-row sm:items-center sm:justify-between">
          <p>
            Built with Tailwind CSS, Express.js, and vanilla JavaScript concepts for aspiring frontend engineers.
          </p>
          <a
            href="#home"
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
