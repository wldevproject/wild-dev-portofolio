import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import { Typewriter } from "@/app/components/ui/typewriter";

interface HeroSectionProps {
  label: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; accentClass: string }>;
  ctaPrimary: string;
  ctaSecondary: string;
  terminalLines: Array<{ text: string; colorClass: string }>;
}

export function HeroSection({
  label,
  title,
  description,
  metrics,
  ctaPrimary,
  ctaSecondary,
  terminalLines,
}: HeroSectionProps) {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.3fr_0.95fr] lg:items-center">
      <div className="space-y-10">
        <ScrollReveal>
          <div className="space-y-4">
            <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-secondary)]">
              {label}
            </p>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-[0.22em] text-foreground md:text-6xl lg:text-7xl">
              <span className="cyber-glitch block" data-text={title}>
                {title}
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-muted-foreground)] md:text-lg">
              {description}
            </p>
            <div className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
              <Typewriter text="injecting payload..." speed={50} delay={800} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {metrics.map((metric) => (
            <ScrollReveal key={metric.label}>
              <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                <p className={`text-sm uppercase tracking-[0.35em] ${metric.accentClass}`}>
                  {metric.label}
                </p>
                <p className="mt-4 text-3xl font-semibold uppercase tracking-[0.2em] text-foreground">
                  {metric.value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button>{ctaPrimary}</Button>
            <Button variant="secondary">{ctaSecondary}</Button>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Card className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(0,255,136,0.16),_transparent_40%)] before:content-['']">
          <div className="terminal-header mb-6 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.35)]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.25)]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.25)]" />
          </div>
          <div className="space-y-5">
            <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-sm">
              <p className="font-ui uppercase tracking-[0.35em] text-[var(--color-accent)]">node status</p>
              <p className="mt-2 font-mono text-base text-foreground">/usr/local/bin/cyberdeck --init</p>
            </div>
            <pre className="terminal-panel rounded-none bg-[var(--color-background)] px-4 py-5 text-sm leading-7 text-[var(--color-foreground)]">
              {terminalLines.map((item) => (
                <span key={item.text} className={item.colorClass}>
                  {item.text}
                  {'\n'}
                </span>
              ))}
            </pre>
            <Button variant="ghost" className="w-full justify-center text-[var(--color-accent)]">
              Launch console
            </Button>
          </div>
        </Card>
      </ScrollReveal>
    </section>
  );
}
