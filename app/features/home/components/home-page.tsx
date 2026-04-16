import { TopNav } from "@/app/features/home/components/top-nav";
import { EducationSection } from "@/app/features/home/sections/education-section";
import { ExperienceSection } from "@/app/features/home/sections/experience-section";
import { HeroHomeSection } from "@/app/features/home/sections/hero-home-section";
import { ProjectsSection } from "@/app/features/home/sections/projects-section";
import { SectionDivider } from "@/app/features/home/sections/section-divider";
import { SkillsSection } from "@/app/features/home/sections/skills-section";
import { StatsSection } from "@/app/features/home/sections/stats-section";
import { StatusContactSection } from "@/app/features/home/sections/status-contact-section";

export function HomePage() {
  return (
    <main id="home" className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <TopNav />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(0,255,136,0.18),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.14),_transparent_40%)]" />

      <HeroHomeSection />
      <StatsSection />
      <SkillsSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <StatusContactSection />
    </main>
  );
}
