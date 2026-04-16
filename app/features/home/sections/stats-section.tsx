const stats = [
  { value: "10+", label: "Projects Deployed", accentClass: "text-[var(--color-accent)]" },
  { value: "5", label: "Years Android Exp", accentClass: "text-[var(--color-accent-secondary)]" },
  { value: "1", label: "Year Hardware/IoT Exp", accentClass: "text-[var(--color-accent-tertiary)]" },
  { value: "3.3", label: "Computer Science GPA", accentClass: "text-[var(--color-accent)]" },
];

export function StatsSection() {
  return (
    <section id="stats" className="border-y border-[var(--color-border)] bg-[var(--color-muted)]/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 divide-[var(--color-border)] px-6 py-12 sm:px-10 lg:flex-row lg:divide-x lg:px-16">
        {stats.map((stat) => (
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
