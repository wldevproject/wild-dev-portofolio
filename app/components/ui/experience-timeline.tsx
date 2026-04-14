import { ScrollReveal } from "./scroll-reveal";

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
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-accent)] before:via-[var(--color-accent-secondary)] before:to-transparent">
      {experiences.map((item, index) => {
        const isLeftCard = index % 2 === 0;
        return (
        <ScrollReveal key={item.id}>
          <div className={`relative flex items-center justify-between md:justify-normal ${isLeftCard ? "md:flex-row-reverse" : ""} group is-active`}>
            {/* Timeline marker */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-none border border-[var(--color-accent)] bg-[var(--color-background)] shrink-0 md:order-1 ${isLeftCard ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} shadow-[0_0_10px_rgba(0,255,136,0.5)] z-10`}>
              <div className="w-3 h-3 bg-[var(--color-accent)] animate-pulse shadow-[0_0_5px_#00ff88]"></div>
            </div>
            
            {/* Content card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 cyber-chamfer border border-[var(--color-border)] bg-[var(--color-card)] transition-all hover:border-[var(--color-accent-secondary)] hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]">
              <div className="font-ui text-lg uppercase tracking-[0.2em] text-[var(--color-accent-tertiary)] mb-6 pb-4 border-b border-[var(--color-border)]">
                @ {item.company}
              </div>
              
              <div className="space-y-6">
                {item.roles?.map((role, rIdx) => (
                  <div key={rIdx} className={rIdx !== 0 ? "pt-6 border-t border-[rgba(255,255,255,0.05)]" : ""}>
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-3 gap-2">
                      <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">
                        {role.role}
                      </h3>
                      <span className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] shrink-0 xl:mt-1">
                        [ {role.period} ]
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-4 whitespace-pre-line">
                      {role.description}
                    </p>
                    {role.skills && role.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {role.skills.map((skill) => (
                          <span key={skill} className="text-xs font-mono text-[var(--color-muted-foreground)] border border-[var(--color-border)] px-2 py-1 uppercase">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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
