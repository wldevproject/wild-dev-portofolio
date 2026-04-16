import { LayoutSection } from "@/app/components/ui/layout-section";
import { ExperienceTimeline } from "@/app/features/home/components/experience-timeline";
import { experienceList } from "@/app/data/resume-data";

export function ExperienceSection() {
  return (
    <LayoutSection
      id="experience"
      label="career traces"
      title="Service Record"
      description="Historical log of my professional journey acting as a Software Engineer and Hardware Programmer across multiple agencies and corporations."
    >
      <ExperienceTimeline experiences={experienceList} />
    </LayoutSection>
  );
}
