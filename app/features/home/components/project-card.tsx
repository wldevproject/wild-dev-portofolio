import { Card } from "@/app/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status?: string;
}

export function ProjectCard({ title, description, tags, status = "live" }: ProjectCardProps) {
  const isLive = status.toLowerCase() === "live";

  return (
    <Card className="group relative z-10 flex h-full flex-col border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors duration-300 hover:border-[var(--color-accent)] lg:p-8">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 mb-2 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {isLive ? (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]" />
            </span>
          ) : null}
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">sys.{status}</p>
        </div>

        <div className="h-4 w-4 border-r-2 border-t-2 border-[var(--color-border)] transition-colors group-hover:border-[var(--color-accent)]" />
      </div>

      <div className="relative z-10">
        <h3 className="mt-4 text-xl font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-[var(--color-accent-tertiary)] md:text-2xl">
          <span className="-ml-4 inline-block translate-x-[-10px] text-[var(--color-accent)] opacity-0 transition-all group-hover:mr-2 group-hover:ml-0 group-hover:translate-x-0 group-hover:opacity-100">
            &gt;
          </span>
          {title}
        </h3>

        <p className="mt-5 flex-grow text-sm leading-relaxed text-[var(--color-muted-foreground)] md:text-base">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-auto mt-8 flex flex-wrap gap-2 border-t border-[rgba(255,255,255,0.03)] pt-6 transition-colors group-hover:border-[rgba(0,255,136,0.1)]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="cursor-default rounded-none border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] transition-colors group-hover:border-[rgba(0,255,136,0.3)] hover:!border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
