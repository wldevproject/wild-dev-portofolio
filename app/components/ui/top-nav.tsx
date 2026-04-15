"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ScrollProgress } from "@/app/components/ui/scroll-progress";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "status", label: "System" },
  { id: "contact", label: "Contact" },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 120 : false
  );
  const [floatingHover, setFloatingHover] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 120);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
    <>
      {/* ─── ORIGINAL TOP NAV ─── */}
      <header
        className={`relative z-40 border-b border-[var(--color-border)] bg-[rgba(10,10,15,0.92)]/95 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
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
              className="hidden rounded-none border border-[var(--color-accent)] px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:bg-[rgba(0,255,136,0.08)] md:inline-flex"
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
              <span className="font-mono text-md">{menuOpen ? "×" : "≡"}</span>
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
                className="rounded-none border border-[var(--color-accent)] px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:bg-[rgba(0,255,136,0.08)]"
              >
                Open Comms
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      {/* ─── FLOATING SIDE NAV (appears on scroll) ─── */}
      <div
        className={`fixed z-50 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
          isScrolled ? "right-4 opacity-100" : "right-[-80px] opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setFloatingHover(true)}
        onMouseLeave={() => setFloatingHover(false)}
      >
        <nav
          className={`flex flex-col items-center gap-1 py-3 px-2 border bg-[rgba(10,10,15,0.92)] backdrop-blur-xl transition-all duration-300 ${
            floatingHover
              ? "border-[var(--color-accent)] shadow-[0_0_20px_rgba(0,255,136,0.15)]"
              : "border-[var(--color-border)]"
          }`}
        >
          {/* Logo at top */}
          <Link
            href="#home"
            className="font-ui text-2xs uppercase tracking-[0.2em] text-[var(--color-accent)] px-2 py-2 mb-1 border-b border-[var(--color-border)] w-full text-center"
            title="Home"
          >
            WD
          </Link>

          {sections.slice(1).map((section) => {
            const isActive = activeSection === section.id;
            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                title={section.label}
                className={`relative w-8 h-8 flex items-center justify-center rounded-none text-2xs font-mono uppercase transition-all duration-200 group ${
                  isActive
                    ? "text-[var(--color-accent)] bg-[rgba(0,255,136,0.1)]"
                    : "text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] hover:bg-[rgba(0,255,136,0.05)]"
                }`}
              >
                {/* First 2 letters as icon */}
                <span className="leading-none">{section.label.slice(0, 2).toUpperCase()}</span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[3px] h-3 bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]" />
                )}

                {/* Tooltip on hover */}
                <span className="absolute right-full mr-3 px-2 py-1 text-2xs font-ui uppercase tracking-[0.2em] text-[var(--color-accent)] bg-[var(--color-background)] border border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                  {section.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ─── SCROLL PROGRESS (fixed when floating) ─── */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <ScrollProgress />
        </div>
      )}
    </>
  );
}
