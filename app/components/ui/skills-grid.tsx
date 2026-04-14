import { ScrollReveal } from "./scroll-reveal";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {categories.map((category) => (
        <ScrollReveal key={category.title}>
          <div className="flex flex-col gap-4">
            <h3 className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-tertiary)] flex items-center gap-2">
              <span className="text-[var(--color-accent)]">{">"}</span> {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 p-5 border border-[var(--color-border)] bg-[var(--color-card)] cyber-chamfer-sm">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground bg-[var(--color-muted)] border border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-neon"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
