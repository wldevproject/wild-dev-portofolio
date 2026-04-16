"use client";

import { HeroSectionView } from "@/app/features/home/components/hero-section-view";
import { useCpuLoad } from "@/app/hooks/use-cpu-load";

interface HeroMetric {
  accentClass: string;
  label: string;
  value: string;
}

interface TerminalLine {
  colorClass: string;
  text: string;
}

interface HeroSectionProps {
  ctaPrimary: string;
  ctaSecondary: string;
  description: string;
  label: string;
  metrics: readonly HeroMetric[];
  terminalLines: readonly TerminalLine[];
  title: string;
}

export function HeroSection({
  ctaPrimary,
  ctaSecondary,
  description,
  label,
  metrics,
  terminalLines,
  title,
}: HeroSectionProps) {
  const cpuLoad = useCpuLoad();

  return (
    <HeroSectionView
      cpuLoad={cpuLoad}
      ctaPrimary={ctaPrimary}
      ctaSecondary={ctaSecondary}
      description={description}
      label={label}
      metrics={metrics}
      terminalLines={terminalLines}
      titleWords={title.split(" ")}
    />
  );
}
