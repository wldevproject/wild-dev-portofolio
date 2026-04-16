import { ScrollReveal } from "@/app/components/ui/scroll-reveal";

interface ExperienceRole {
  role: string;
  period: string;
  description: string;
  skills?: string[];
}

interface ExperienceItem {
  id: string;
  company: string;
  roles: ExperienceRole[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-accent)] before:via-[var(--color-accent-secondary)] before:to-transparent md:before:mx-auto md:before:translate-x-0">
      {experiences.map((item, index) => {
        const isLeftCard = index % 2 === 0;

        return (
          <ScrollReveal key={item.id}>
            <div
              className={`group is-active relative flex items-center justify-between md:justify-normal ${
                isLeftCard ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-[var(--color-accent)] bg-[var(--color-background)] shadow-[0_0_10px_rgba(0,255,136,0.5)] md:order-1 ${
                  isLeftCard ? "md:-translate-x-1/2" : "md:translate-x-1/2"
                }`}
              >
                <div className="h-3 w-3 animate-pulse bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]" />
              </div>

              <div className="cyber-chamfer w-[calc(100%-4rem)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-accent-secondary)] md:w-[calc(50%-2.5rem)]">
                <div className="mb-6 border-b border-[var(--color-border)] pb-4 font-ui text-md uppercase tracking-[0.2em] text-[var(--color-accent-tertiary)]">
                  @ {item.company}
                </div>

                <div className="space-y-6">
                  {item.roles?.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className={roleIndex !== 0 ? "border-t border-[rgba(255,255,255,0.05)] pt-6" : ""}
                    >
                      <div className="mb-3 flex flex-col justify-between gap-2 xl:flex-row xl:items-start">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">{role.role}</h3>
                        <span className="shrink-0 font-ui text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] xl:mt-1">
                          [ {role.period} ]
                        </span>
                      </div>
                      <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                        {role.description}
                      </p>
                      {role.skills && role.skills.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className="border border-[var(--color-border)] px-2 py-1 font-mono text-xs uppercase text-[var(--color-muted-foreground)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
