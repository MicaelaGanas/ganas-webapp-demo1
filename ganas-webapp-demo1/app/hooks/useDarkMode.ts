"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tailwind-tutorial-dark-mode";

/**
 * Synchronises dark mode preference with local storage and the root html element.
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedPreference = localStorage.getItem(STORAGE_KEY);
    if (storedPreference) {
      setIsDark(storedPreference === "true");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem(STORAGE_KEY, String(isDark));
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}
