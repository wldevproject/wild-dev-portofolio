import { LayoutSection } from "@/app/components/ui/layout-section";
import { skillCategories } from "@/app/data/resume-data";
import { SkillsGrid } from "@/app/features/home/components/skills-grid";

export function SkillsSection() {
  return (
    <LayoutSection
      id="skills"
      label="competency matrix"
      title="Core Technologies"
      description="Precision-mapped capabilities across multiple domains, from mobile interfaces to embedded systems."
    >
      <SkillsGrid categories={skillCategories} />
    </LayoutSection>
  );
}
