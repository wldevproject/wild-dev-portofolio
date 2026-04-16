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
  description: string;
  label: string;
  launchConsoleLabel: string;
  metrics: readonly HeroMetric[];
  nodeStatusLabel: string;
  cpuLoadLabel: string;
  terminalLines: readonly TerminalLine[];
  title: string;
  typewriterText: string;
}

export function HeroSection({
  description,
  label,
  launchConsoleLabel,
  metrics,
  nodeStatusLabel,
  cpuLoadLabel,
  terminalLines,
  title,
  typewriterText,
}: HeroSectionProps) {
  const cpuLoad = useCpuLoad();

  return (
    <HeroSectionView
      cpuLoad={cpuLoad}
      description={description}
      label={label}
      launchConsoleLabel={launchConsoleLabel}
      metrics={metrics}
      nodeStatusLabel={nodeStatusLabel}
      cpuLoadLabel={cpuLoadLabel}
      terminalLines={terminalLines}
      titleWords={title.split(" ")}
      typewriterText={typewriterText}
    />
  );
}
