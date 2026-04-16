import { LayoutSection } from "@/app/components/ui/layout-section";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import { projectList } from "@/app/data/resume-data";
import { ProjectCard } from "@/app/features/home/components/project-card";

export function ProjectsSection() {
  return (
    <LayoutSection
      id="projects"
      label="project archive"
      title="Active deployments"
      description="From hardware prototypes to immersive mobile apps and educational game learning platforms."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <ScrollReveal key={project.title}>
            <ProjectCard title={project.title} description={project.description} tags={project.tags} />
          </ScrollReveal>
        ))}
      </div>
    </LayoutSection>
  );
}
