"use client";

import { LayoutSection } from "@/app/components/ui/layout-section";
import { ExperienceTimeline } from "@/app/features/home/components/experience-timeline";
import { experienceList } from "@/app/data/resume-data";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

export function ExperienceSection() {
  const { copy } = useSiteLanguage();

  return (
    <LayoutSection
      id="experience"
      label={copy.experience.label}
      title={copy.experience.title}
      description={copy.experience.description}
    >
      <ExperienceTimeline experiences={experienceList} />
    </LayoutSection>
  );
}
