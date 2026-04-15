"use client";

import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import { Typewriter } from "@/app/components/ui/typewriter";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  metrics: Array<{ label: string; value: string; accentClass: string }>;
  ctaPrimary: string;
  ctaSecondary: string;
  terminalLines: Array<{ text: string; colorClass: string }>;
}

export function HeroSection({
  label,
  title,
  subtitle,
  description,
  metrics,
  ctaPrimary,
  ctaSecondary,
  terminalLines,
}: HeroSectionProps) {
  const [cpuLoad, setCpuLoad] = useState(87);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad((prev) => {
        const delta = Math.floor(Math.random() * 8) - 3;
        return Math.max(78, Math.min(99, prev + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Split title into words for multi-color rendering
  const titleWords = title.split(" ");

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Circuit grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Gradient mesh accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-full grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left Column: Content */}
        <div className="space-y-10">
          <ScrollReveal>
            <div className="space-y-8">
              {/* System status badge */}
              <div className="inline-flex items-center gap-2 border border-[var(--color-accent)] px-4 py-1.5 text-2xs font-mono uppercase tracking-[0.3em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]"></span>
                </span>
                <span className="text-[var(--color-accent)]">{label}</span>
              </div>

              {/* Multi-gradient headline */}
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-[0.05em]">
                  {titleWords.map((word, i) => {
                    const colors = [
                      "text-foreground cyber-glitch",
                      "text-[var(--color-accent-secondary)]",
                      "text-foreground",
                      "text-[var(--color-accent)]",
                    ];
                    const colorClass = colors[i % colors.length];
                    return (
                      <span
                        key={i}
                        className={`${colorClass} inline-block mr-[0.25em]`}
                        data-text={i === 0 ? word : undefined}
                      >
                        {word}
                      </span>
                    );
                  })}
                </h1>

                {/* Horizontal glitch line through title */}
                <div className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60 pointer-events-none animate-pulse" />
                <div className="absolute top-1/2 left-0 w-2/3 h-[1px] translate-y-1 bg-[var(--color-accent)] opacity-30 pointer-events-none" />
              </div>

              {/* Description with terminal prefix */}
              <div className="border-l-2 border-[var(--color-accent)] pl-6 max-w-xl">
                <p className="text-md md:text-lg leading-8 text-[var(--color-muted-foreground)]">
                  <span className="text-[var(--color-accent)]">&gt; </span>
                  {description}
                  <span className="inline-block w-[2px] h-[1em] bg-[var(--color-accent)] ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
                </p>
              </div>

              {/* Typewriter */}
              <div className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
                <Typewriter text="injecting payload..." speed={50} delay={800} />
              </div>
            </div>
          </ScrollReveal>

          {/* Metrics row */}
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {metrics.map((metric) => (
              <ScrollReveal key={metric.label}>
                <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-accent)]">
                  <p className={`font-ui text-xs uppercase tracking-[0.35em] ${metric.accentClass}`}>
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl md:text-3xl font-semibold uppercase tracking-[0.15em] text-foreground">
                    {metric.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Buttons */}
          <ScrollReveal>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button>{ctaPrimary} <span className="ml-1">→</span></Button>
              <Button variant="ghost">{ctaSecondary}</Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: HUD Terminal Panel */}
        <ScrollReveal>
          <div className="hidden lg:block relative">
            {/* Decorative HUD frame */}
            <div className="absolute -inset-4 border border-dashed border-[rgba(0,255,136,0.15)] pointer-events-none">
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)]" />
              <div className="absolute top-2 right-4 font-ui text-[10px] uppercase tracking-[0.3em] text-[rgba(0,255,136,0.4)]">
                HUD_DISPLAY_v.0.9
              </div>
            </div>

            <div className="space-y-4">
              {/* Terminal card */}
              <Card className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(0,255,136,0.16),_transparent_40%)] before:content-['']">
                <div className="terminal-header mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.35)]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.25)]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.25)]" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-none border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm">
                    <p className="font-ui uppercase tracking-[0.35em] text-[var(--color-accent)]">node status</p>
                    <p className="mt-2 font-mono text-md text-foreground">/usr/local/bin/cyberdeck --init</p>
                  </div>
                  <pre className="terminal-panel rounded-none bg-[var(--color-background)] px-4 py-4 text-sm leading-7 text-[var(--color-foreground)]">
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

              {/* CPU load mini-widget */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-dashed border-[var(--color-accent)] p-4 relative">
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[var(--color-accent)]" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[var(--color-accent)]" />
                  <div className="flex items-center justify-center h-16">
                    <svg className="w-10 h-10 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
                      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
                    </svg>
                  </div>
                </div>
                <div className="border border-dashed border-[var(--color-accent)] p-4 relative">
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[var(--color-accent)]" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[var(--color-accent)]" />
                  <div className="text-right">
                    <p className="text-3xl font-black text-[var(--color-accent)] tabular-nums">{cpuLoad}%</p>
                    <p className="font-ui text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">CPU_LOAD</p>
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
