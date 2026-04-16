"use client";

import { useEffect, useState } from "react";

interface SectionTarget {
  id: string;
}

export function useActiveSection(
  sections: readonly SectionTarget[],
  initialSection = "home"
) {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => ({ id: section.id, node: document.getElementById(section.id) }))
      .filter((entry): entry is { id: string; node: HTMLElement } => Boolean(entry.node));

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { threshold: [0.2, 0.6], rootMargin: "-20% 0px -40% 0px" }
    );

    sectionElements.forEach((entry) => observer.observe(entry.node));

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
