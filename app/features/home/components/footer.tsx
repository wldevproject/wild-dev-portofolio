"use client";

import Link from "next/link";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

export function Footer() {
  const { copy } = useSiteLanguage();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(10,10,15,0.95)] text-[var(--color-muted-foreground)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-secondary)]">
              {copy.footer.label}
            </p>
            <h3 className="text-2xl font-semibold uppercase tracking-[0.18em] text-foreground">{copy.footer.title}</h3>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)]">
              {copy.footer.description}
            </p>
          </div>
          <div className="grid gap-3 text-sm uppercase tracking-[0.25em] text-[var(--color-muted-foreground)] sm:grid-cols-2">
            <Link href="#home" className="transition hover:text-[var(--color-accent)]">
              {copy.nav.sections.home}
            </Link>
            <Link href="#projects" className="transition hover:text-[var(--color-accent)]">
              {copy.nav.sections.projects}
            </Link>
            <Link href="#status" className="transition hover:text-[var(--color-accent)]">
              {copy.nav.sections.status}
            </Link>
            <Link href="#contact" className="transition hover:text-[var(--color-accent)]">
              {copy.nav.sections.contact}
            </Link>
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] pt-6 text-2xs text-[var(--color-muted-foreground)]">
          <p className="font-mono">{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
