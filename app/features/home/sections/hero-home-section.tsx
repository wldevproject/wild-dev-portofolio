"use client";

import { HeroSection } from "@/app/features/home/components/hero-section";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

export function HeroHomeSection() {
  const { copy } = useSiteLanguage();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-0 px-6 py-12 sm:px-10 lg:px-16">
      <HeroSection
        label={copy.hero.label}
        title="MUHAMMAD FACHRIZAL."
        description={copy.hero.description}
        metrics={copy.hero.metrics}
        terminalLines={copy.hero.terminalLines}
        typewriterText={copy.hero.typewriter}
        nodeStatusLabel={copy.hero.nodeStatus}
        launchConsoleLabel={copy.hero.launchConsole}
        cpuLoadLabel={copy.hero.cpuLoad}
      />
    </div>
  );
}
