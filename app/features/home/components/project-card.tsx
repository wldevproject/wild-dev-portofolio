import type { Project } from "@/app/data/resume-data";
import { Card } from "@/app/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project["category"], string> = {
  software: "software build",
  design: "design asset",
  "reel-vertical": "short-form vertical",
  "video-landscape": "landscape video",
  youtube: "youtube edit",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isDevelopment = project.focus === "development";
  const status = (project.status ?? (isDevelopment ? "live" : "published")).toLowerCase();
  const isActive = status === "live" || status === "published";
  const accentColor = isDevelopment ? "var(--color-accent)" : "var(--color-accent-tertiary)";
  const accentHoverClass = isDevelopment
    ? "group-hover:border-[var(--color-accent)]"
    : "group-hover:border-[var(--color-accent-tertiary)]";
  const accentTextClass = isDevelopment ? "text-[var(--color-accent)]" : "text-[var(--color-accent-tertiary)]";
  const titleHoverClass = isDevelopment
    ? "group-hover:text-[var(--color-accent-tertiary)]"
    : "group-hover:text-[var(--color-accent-secondary)]";
  const tagHoverClass = isDevelopment
    ? "group-hover:border-[rgba(0,255,136,0.3)] hover:!border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    : "group-hover:border-[rgba(0,212,255,0.3)] hover:!border-[var(--color-accent-tertiary)] hover:text-[var(--color-accent-tertiary)]";
  const footerBorderClass = isDevelopment
    ? "group-hover:border-[rgba(0,255,136,0.1)]"
    : "group-hover:border-[rgba(0,212,255,0.12)]";
  const badgeLabel = project.platform ?? (isDevelopment ? "Deployment" : "Media");

  return (
    <Card
      className={`group relative z-10 flex h-full flex-col border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors duration-300 ${accentHoverClass} lg:p-8`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 mb-2 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {isActive ? (
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: accentColor }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full shadow-[0_0_5px_currentColor]"
                style={{ color: accentColor, backgroundColor: accentColor }}
              />
            </span>
          ) : null}
          <div className="space-y-1">
            <p className={`font-ui text-xs uppercase tracking-[0.28em] ${accentTextClass}`}>{badgeLabel}</p>
            <p className="font-ui text-[0.6rem] uppercase tracking-[0.28em] text-[var(--color-muted-foreground)]">
              sys.{status}
            </p>
          </div>
        </div>

        <div
          className={`h-4 w-4 border-r-2 border-t-2 border-[var(--color-border)] transition-colors ${
            isDevelopment ? "group-hover:border-[var(--color-accent)]" : "group-hover:border-[var(--color-accent-tertiary)]"
          }`}
        />
      </div>

      <div className="relative z-10">
        <h3
          className={`mt-4 text-xl font-bold uppercase tracking-wider text-foreground transition-colors ${titleHoverClass} md:text-2xl`}
        >
          <span
            className={`-ml-4 inline-block translate-x-[-10px] opacity-0 transition-all group-hover:mr-2 group-hover:ml-0 group-hover:translate-x-0 group-hover:opacity-100 ${accentTextClass}`}
          >
            &gt;
          </span>
          {project.title}
        </h3>

        <p className="mt-5 flex-grow text-sm leading-relaxed text-[var(--color-muted-foreground)] md:text-base">
          {project.description}
        </p>
      </div>

      <div
        className={`relative z-10 mt-8 mt-auto border-t border-[rgba(255,255,255,0.03)] pt-6 transition-colors ${footerBorderClass}`}
      >
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`cursor-default rounded-none border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] transition-colors ${tagHoverClass}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-ui text-[0.65rem] uppercase tracking-[0.32em] text-[var(--color-muted-foreground)]">
            {categoryLabels[project.category]}
          </p>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`font-ui text-[0.68rem] uppercase tracking-[0.28em] transition-colors ${accentTextClass}`}
            >
              open casefile
            </a>
          ) : (
            <span className="font-ui text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted-foreground)]">
              internal archive
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
