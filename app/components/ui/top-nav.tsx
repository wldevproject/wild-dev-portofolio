"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ScrollProgress } from "@/app/components/ui/scroll-progress";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "status", label: "System" },
  { id: "contact", label: "Contact" },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => ({ id: section.id, node: document.getElementById(section.id) }))
      .filter((entry): entry is { id: string; node: HTMLElement } => Boolean(entry.node));

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.6], rootMargin: "-20% 0px -40% 0px" }
    );

    sectionElements.forEach((entry) => observer.observe(entry.node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative z-40 border-b border-[var(--color-border)] bg-[rgba(10,10,15,0.92)]/95 backdrop-blur-xl">
      <ScrollProgress />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="#home" className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
          WILD DEV
        </Link>

        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.25em] text-[var(--color-muted-foreground)] md:flex">
          {sections.slice(1).map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`transition ${
                activeSection === section.id
                  ? "text-[var(--color-accent)]"
                  : "hover:text-[var(--color-accent)]"
              }`}
              aria-current={activeSection === section.id ? "page" : undefined}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="#contact"
            className="hidden rounded-none border border-[var(--color-accent)] px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:bg-[rgba(0,255,136,0.08)] md:inline-flex"
          >
            Open Comms
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-[var(--color-border)] text-[var(--color-accent)] transition hover:bg-[rgba(0,255,136,0.08)] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="font-mono text-base">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-full z-50 border-t border-[var(--color-border)] bg-[rgba(10,10,15,0.98)] p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.25em] text-[var(--color-muted-foreground)]">
            {sections.slice(1).map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  activeSection === section.id
                    ? "text-[var(--color-accent)]"
                    : "hover:text-[var(--color-accent)]"
                }`}
              >
                {section.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-none border border-[var(--color-accent)] px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:bg-[rgba(0,255,136,0.08)]"
            >
              Open Comms
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
