"use client";

import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  const { language } = useSiteLanguage();
  const titleMap: Record<string, { id: string; en: string }> = {
    "Mobile / Frontend / App": {
      id: "Mobile / Frontend / Aplikasi",
      en: "Mobile / Frontend / App",
    },
    "Backend / Database / CMS": {
      id: "Backend / Database / CMS",
      en: "Backend / Database / CMS",
    },
    "Hardware / IoT / Game Engine": {
      id: "Hardware / IoT / Game Engine",
      en: "Hardware / IoT / Game Engine",
    },
    "Design / UI / UX": {
      id: "Desain / UI / UX",
      en: "Design / UI / UX",
    },
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {categories.map((category) => (
        <ScrollReveal key={category.title}>
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-tertiary)]">
              <span className="text-[var(--color-accent)]">{">"}</span>{" "}
              {titleMap[category.title]?.[language] ?? category.title}
            </h3>
            <div className="cyber-chamfer-sm flex flex-wrap gap-3 border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="border border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
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
