"use client";

import { useMemo, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { SidebarNav } from "./components/SidebarNav";
import { ThemeToggle } from "./components/ThemeToggle";
import { InstallingTailwindSection } from "./components/sections/InstallingTailwindSection";
import { UtilityClassesSection } from "./components/sections/UtilityClassesSection";
import { LayoutSection } from "./components/sections/LayoutSection";
import { StatesSection } from "./components/sections/StatesSection";
import { ResponsiveSection } from "./components/sections/ResponsiveSection";
import { PlaygroundSection } from "./components/sections/PlaygroundSection";
import { ConfiguringTailwindSection } from "./components/sections/ConfiguringTailwindSection";
import { FirstProjectSection } from "./components/sections/FirstProjectSection";
import { ExploringClassesSection } from "./components/sections/ExploringClassesSection";
import { useScrollSpy } from "./hooks/useScrollSpy";

const sectionList = [
  { id: "home", title: "Welcome" },
  { id: "installing-tailwind", title: "Install Tailwind" },
  { id: "utility-classes", title: "Utility Classes" },
  { id: "layout", title: "Flexbox & Grid" },
  { id: "states", title: "States & Motion" },
  { id: "responsive", title: "Responsive" },
  { id: "playground", title: "Playground" },
  { id: "configuring-tailwind", title: "Configuring Tailwind" },
  { id: "first-project", title: "First Project" },
  { id: "exploring-classes", title: "Exploring Classes" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = useMemo(() => sectionList.map((section) => section.id), []);
  const activeId = useScrollSpy({
    sectionIds,
    offset: -140,
  });

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
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
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-3">
              <a
                href="#installing-tailwind"
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                Skip to lessons
              </a>
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex xl:hidden items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 top-[68px] bg-black/50 z-40 xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav className="fixed top-[68px] left-0 right-0 h-auto max-h-[calc(100vh-68px)] bg-white dark:bg-slate-900 z-50 overflow-y-auto xl:hidden border-t border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="p-4 space-y-2">
                {sectionList.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      activeId === section.id
                        ? "bg-sky-500 text-white shadow-lg"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </nav>
          </>
        )}
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:py-16">
        <div className="hidden xl:block">
          <SidebarNav sections={sectionList} activeId={activeId} />
        </div>

        <main className="flex-1 space-y-14 pb-16">
          <HeroSection />
          <InstallingTailwindSection />
          <UtilityClassesSection />
          <LayoutSection />
          <StatesSection />
          <ResponsiveSection />
          <PlaygroundSection />
          <ConfiguringTailwindSection />
          <FirstProjectSection />
          <ExploringClassesSection />
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
