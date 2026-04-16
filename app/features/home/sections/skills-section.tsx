"use client";

import { LayoutSection } from "@/app/components/ui/layout-section";
import { skillCategories } from "@/app/data/resume-data";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";
import { SkillsGrid } from "@/app/features/home/components/skills-grid";

export function SkillsSection() {
  const { copy } = useSiteLanguage();

  return (
    <LayoutSection
      id="skills"
      label={copy.skills.label}
      title={copy.skills.title}
      description={copy.skills.description}
    >
      <SkillsGrid categories={skillCategories} />
    </LayoutSection>
  );
}
