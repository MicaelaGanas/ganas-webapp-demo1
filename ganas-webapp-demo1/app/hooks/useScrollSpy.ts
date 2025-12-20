"use client";

import { useEffect, useState } from "react";

interface ScrollSpyArgs {
  sectionIds: string[];
  offset?: number;
}

export function useScrollSpy({ sectionIds, offset = 0 }: ScrollSpyArgs) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length || typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop)[0];

        if (visibleEntry?.target) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: `${offset}px 0px -70% 0px`,
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
