import { HeroSection } from "@/app/features/home/components/hero-section";
import { heroHomeContent } from "@/app/features/home/data/hero-home-content";

export function HeroHomeSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-0 px-6 py-12 sm:px-10 lg:px-16">
      <HeroSection
        label={heroHomeContent.label}
        title={heroHomeContent.title}
        description={heroHomeContent.description}
        metrics={heroHomeContent.metrics}
        ctaPrimary={heroHomeContent.ctaPrimary}
        ctaSecondary={heroHomeContent.ctaSecondary}
        terminalLines={heroHomeContent.terminalLines}
      />
    </div>
  );
}
