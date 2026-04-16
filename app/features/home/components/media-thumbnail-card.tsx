"use client";

import type { Project } from "@/app/data/resume-data";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

interface MediaThumbnailCardProps {
  project: Project;
}

const accentMap: Record<Project["category"], string> = {
  software: "var(--color-accent)",
  design: "var(--color-accent-secondary)",
  "reel-vertical": "var(--color-accent-tertiary)",
  "video-landscape": "var(--color-accent-tertiary)",
  youtube: "var(--color-accent-secondary)",
};

export function MediaThumbnailCard({ project }: MediaThumbnailCardProps) {
  const { copy } = useSiteLanguage();
  const accentColor = accentMap[project.category];
  const platformLabel = project.platform ?? copy.projects.platformFallback;
  const gear = project.gear ?? [];
  const software = project.software ?? [];
  const compactTags = project.tags.slice(0, 3).join(" / ");

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group cyber-chamfer-sm relative block h-full overflow-hidden border border-[var(--color-border)] bg-[rgba(10,10,15,0.84)] p-5 transition-all duration-150 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.3)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_42%,rgba(0,212,255,0.06))] opacity-70" />

      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full shadow-[0_0_10px_currentColor]"
              style={{ color: accentColor, backgroundColor: accentColor }}
            />
            <p className="font-ui text-[0.58rem] uppercase tracking-[0.28em] text-[var(--color-muted-foreground)]">
              {platformLabel}
            </p>
          </div>

          <span
            className="shrink-0 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1 font-ui text-[0.54rem] uppercase tracking-[0.24em] text-[var(--color-muted-foreground)]"
          >
            {copy.projects.cardCategoryLabels[project.category]}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-black uppercase leading-[1.45] tracking-[0.1em] text-foreground transition-colors [text-wrap:balance] group-hover:text-[var(--color-accent-tertiary)] sm:text-lg">
            {project.title}
          </h3>
          {compactTags ? (
            <p className="truncate font-ui text-[0.56rem] uppercase tracking-[0.24em] text-[var(--color-muted-foreground)]">
              {compactTags}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2.5">
            <p className="font-ui text-[0.56rem] uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
              {copy.projects.gear}
            </p>
            <p className="mt-1.5 text-sm leading-6 text-foreground">
              {gear.length > 0 ? gear.join(", ") : "-"}
            </p>
          </div>

          <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2.5">
            <p className="font-ui text-[0.56rem] uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
              {copy.projects.apps}
            </p>
            <p className="mt-1.5 text-sm leading-6 text-foreground">
              {software.length > 0 ? software.join(", ") : "-"}
            </p>
          </div>
        </div>

        <p
          className="text-sm leading-6 text-[var(--color-muted-foreground)]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)] pt-4">
          <p className="max-w-[70%] font-ui text-[0.56rem] uppercase tracking-[0.24em] text-[var(--color-muted-foreground)]">
            {copy.projects.linkHint}
          </p>
          <span className="font-ui text-[0.62rem] uppercase tracking-[0.28em]" style={{ color: accentColor }}>
            {copy.projects.openLink}
          </span>
        </div>
      </div>
    </a>
  );
}
