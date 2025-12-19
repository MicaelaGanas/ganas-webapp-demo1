"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tailwind-tutorial-dark-mode";

const getInitialPreference = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const storedPreference = localStorage.getItem(STORAGE_KEY);
  if (storedPreference !== null) {
    return storedPreference === "true";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/**
 * Synchronises dark mode preference with local storage and the root html element.
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(getInitialPreference);
  const [hasStoredPreference, setHasStoredPreference] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem(STORAGE_KEY) !== null;
  });

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle("dark", isDark);

    if (hasStoredPreference) {
      localStorage.setItem(STORAGE_KEY, String(isDark));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [isDark, hasStoredPreference]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!hasStoredPreference) {
        setIsDark(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [hasStoredPreference]);

  const toggle = () => {
    setHasStoredPreference(true);
    setIsDark((prev) => !prev);
  };

  return { isDark, toggle };
}
