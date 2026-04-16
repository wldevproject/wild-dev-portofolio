"use client";

import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

export function StatsSection() {
  const { copy } = useSiteLanguage();

  return (
    <section id="stats" className="border-y border-[var(--color-border)] bg-[var(--color-muted)]/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 divide-[var(--color-border)] px-6 py-12 sm:px-10 lg:flex-row lg:divide-x lg:px-16">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="flex-1 space-y-2 text-center lg:text-left">
            <div className={`text-4xl font-black uppercase tracking-widest lg:text-5xl ${stat.accentClass}`}>
              {stat.value}
            </div>
            <div className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
