"use client";

import { educationList } from "@/app/data/resume-data";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

export function EducationSection() {
  const { copy } = useSiteLanguage();

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
        {educationList.map((item) => (
          <div key={item.id} className="relative border border-dashed border-[rgba(0,255,136,0.3)] p-8 md:p-12">
            <div className="absolute -left-[3px] -top-[3px] h-5 w-5 border-l-2 border-t-2 border-[var(--color-accent)]" />
            <div className="absolute -right-[3px] -top-[3px] h-5 w-5 border-r-2 border-t-2 border-[var(--color-accent)]" />
            <div className="absolute -bottom-[3px] -left-[3px] h-5 w-5 border-b-2 border-l-2 border-[var(--color-accent)]" />
            <div className="absolute -bottom-[3px] -right-[3px] h-5 w-5 border-b-2 border-r-2 border-[var(--color-accent)]" />

            {item.roles.map((role, index) => (
              <div key={`${item.id}-${role.period}-${index}`} className="space-y-6">
                <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {copy.education.label}
                </p>
                <h2 className="text-2xl font-bold leading-tight tracking-wider text-foreground md:text-4xl">
                  {role.role}, {item.company}.
                </h2>
                <div className="space-y-5 pt-2">
                  {role.description
                    .split("\n")
                    .filter(Boolean)
                    .map((line) => (
                      <p
                        key={`${item.id}-${role.period}-${line}`}
                        className="text-sm leading-relaxed text-[var(--color-muted-foreground)] md:text-base"
                      >
                        <span className="mr-2 font-bold text-[var(--color-accent)]">&gt;&gt;</span>
                        {line}
                      </p>
                    ))}
                </div>
                <div className="border-t border-[rgba(255,255,255,0.05)] pt-4">
                  <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {`» ${copy.education.classOfPrefix}_${role.period}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
