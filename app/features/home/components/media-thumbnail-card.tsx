import type { Project } from "@/app/data/resume-data";

interface MediaThumbnailCardProps {
  project: Project;
}

const categoryLabelMap: Record<Project["category"], string> = {
  software: "software build",
  design: "design",
  "reel-vertical": "vertical reel",
  "video-landscape": "landscape video",
  youtube: "youtube",
};

const accentMap: Record<Project["category"], string> = {
  software: "var(--color-accent)",
  design: "var(--color-accent-secondary)",
  "reel-vertical": "var(--color-accent-tertiary)",
  "video-landscape": "var(--color-accent-tertiary)",
  youtube: "var(--color-accent-secondary)",
};

export function MediaThumbnailCard({ project }: MediaThumbnailCardProps) {
  const accentColor = accentMap[project.category];
  const platformLabel = project.platform ?? "Media";
  const gear = project.gear ?? [];
  const software = project.software ?? [];

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group cyber-chamfer-sm relative block overflow-hidden border border-[var(--color-border)] bg-[rgba(10,10,15,0.84)] p-5 transition-all duration-150 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.3)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_42%,rgba(0,212,255,0.06))] opacity-70" />

      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full shadow-[0_0_10px_currentColor]"
                style={{ color: accentColor, backgroundColor: accentColor }}
              />
              <p className="font-ui text-[0.6rem] uppercase tracking-[0.28em] text-[var(--color-muted-foreground)]">
                {platformLabel}
              </p>
            </div>

            <h3 className="max-w-lg text-lg font-black uppercase tracking-[0.12em] text-foreground transition-colors group-hover:text-[var(--color-accent-tertiary)]">
              {project.title}
            </h3>
          </div>

          <span
            className="shrink-0 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1 font-ui text-[0.58rem] uppercase tracking-[0.28em] text-[var(--color-muted-foreground)]"
          >
            {categoryLabelMap[project.category]}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
            <p className="font-ui text-[0.56rem] uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
              Gear
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground">
              {gear.length > 0 ? gear.join(", ") : "-"}
            </p>
          </div>

          <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
            <p className="font-ui text-[0.56rem] uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
              Apps
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground">
              {software.length > 0 ? software.join(", ") : "-"}
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 font-ui text-[0.58rem] uppercase tracking-[0.24em] text-[var(--color-muted-foreground)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)] pt-4">
          <p className="font-ui text-[0.58rem] uppercase tracking-[0.28em] text-[var(--color-muted-foreground)]">
            Klik untuk buka hasil asli
          </p>
          <span className="font-ui text-[0.62rem] uppercase tracking-[0.28em]" style={{ color: accentColor }}>
            open link
          </span>
        </div>
      </div>
    </a>
  );
}
