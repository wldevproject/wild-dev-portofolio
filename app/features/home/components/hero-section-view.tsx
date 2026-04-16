import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import { Typewriter } from "@/app/components/ui/typewriter";

interface HeroMetric {
  accentClass: string;
  label: string;
  value: string;
}

interface TerminalLine {
  colorClass: string;
  text: string;
}

interface HeroSectionViewProps {
  cpuLoad: number;
  description: string;
  label: string;
  launchConsoleLabel: string;
  metrics: readonly HeroMetric[];
  nodeStatusLabel: string;
  cpuLoadLabel: string;
  terminalLines: readonly TerminalLine[];
  titleWords: string[];
  typewriterText: string;
}

export function HeroSectionView({
  cpuLoad,
  description,
  label,
  launchConsoleLabel,
  metrics,
  nodeStatusLabel,
  cpuLoadLabel,
  terminalLines,
  titleWords,
  typewriterText,
}: HeroSectionViewProps) {
  return (
    <section className="relative flex min-h-[85vh] items-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.08)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-10">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 border border-[var(--color-accent)] px-4 py-1.5 text-2xs font-mono uppercase tracking-[0.3em]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]" />
                </span>
                <span className="text-[var(--color-accent)]">{label}</span>
              </div>

              <div className="relative">
                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                  {titleWords.map((word, index) => {
                    const colors = [
                      "text-foreground cyber-glitch",
                      "text-[var(--color-accent-secondary)]",
                      "text-foreground",
                      "text-[var(--color-accent)]",
                    ];
                    const colorClass = colors[index % colors.length];

                    return (
                      <span
                        key={index}
                        className={`${colorClass} mr-[0.25em] inline-block`}
                        data-text={index === 0 ? word : undefined}
                      >
                        {word}
                      </span>
                    );
                  })}
                </h1>

                <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 animate-pulse bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />
                <div className="pointer-events-none absolute left-0 top-1/2 h-[1px] w-2/3 translate-y-1 bg-[var(--color-accent)] opacity-30" />
              </div>

              <div className="max-w-xl border-l-2 border-[var(--color-accent)] pl-6">
                <p className="text-md leading-8 text-[var(--color-muted-foreground)] md:text-lg">
                  <span className="text-[var(--color-accent)]">&gt; </span>
                  {description}
                  <span className="ml-1 inline-block h-[1em] w-[2px] animate-[blink_1s_step-end_infinite] align-middle bg-[var(--color-accent)]" />
                </p>
              </div>

              <div className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
                <Typewriter text={typewriterText} speed={50} delay={800} />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {metrics.map((metric) => (
              <ScrollReveal key={metric.label}>
                <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-accent)]">
                  <p className={`font-ui text-xs uppercase tracking-[0.35em] ${metric.accentClass}`}>{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold uppercase tracking-[0.15em] text-foreground md:text-3xl">
                    {metric.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        <ScrollReveal>
          <div className="relative hidden lg:block">
            <div className="pointer-events-none absolute -inset-4 border border-dashed border-[rgba(0,255,136,0.15)]">
              <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[var(--color-accent)]" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[var(--color-accent)]" />
              <div className="absolute right-4 top-2 font-ui text-[10px] uppercase tracking-[0.3em] text-[rgba(0,255,136,0.4)]">
                HUD_DISPLAY_v.0.9
              </div>
            </div>

            <div className="space-y-4">
              <Card className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(0,255,136,0.16),_transparent_40%)] before:content-['']">
                <div className="terminal-header mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.35)]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.25)]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.25)]" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm">
                    <p className="font-ui uppercase tracking-[0.35em] text-[var(--color-accent)]">{nodeStatusLabel}</p>
                    <p className="mt-2 font-mono text-md text-foreground">/usr/local/bin/cyberdeck --init</p>
                  </div>
                  <pre className="terminal-panel rounded-none bg-[var(--color-background)] px-4 py-4 text-sm leading-7 text-[var(--color-foreground)]">
                    {terminalLines.map((item) => (
                      <span key={item.text} className={item.colorClass}>
                        {item.text}
                        {"\n"}
                      </span>
                    ))}
                  </pre>
                  <Button variant="ghost" className="w-full justify-center text-[var(--color-accent)]">
                    {launchConsoleLabel}
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative border border-dashed border-[var(--color-accent)] p-4">
                  <div className="absolute left-2 top-2 h-2 w-2 border-l border-t border-[var(--color-accent)]" />
                  <div className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-[var(--color-accent)]" />
                  <div className="flex h-16 items-center justify-center">
                    <svg
                      className="h-10 w-10 text-[var(--color-accent)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" />
                      <line x1="20" y1="15" x2="23" y2="15" />
                      <line x1="1" y1="9" x2="4" y2="9" />
                      <line x1="1" y1="15" x2="4" y2="15" />
                    </svg>
                  </div>
                </div>
                <div className="relative border border-dashed border-[var(--color-accent)] p-4">
                  <div className="absolute left-2 top-2 h-2 w-2 border-l border-t border-[var(--color-accent)]" />
                  <div className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-[var(--color-accent)]" />
                  <div className="text-right">
                    <p className="tabular-nums text-3xl font-black text-[var(--color-accent)]">{cpuLoad}%</p>
                    <p className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
                      {cpuLoadLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
