import { Card } from "@/app/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  status = "live",
}: ProjectCardProps) {
  const isLive = status.toLowerCase() === "live";

  return (
    <Card className="group relative border-[var(--color-border)] bg-[var(--color-card)] p-6 lg:p-8 transition-colors duration-300 hover:border-[var(--color-accent)] flex flex-col h-full z-10">
      {/* Background grid pattern that appears on hover */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      
      <div className="relative z-10 flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          {isLive && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)] shadow-[0_0_5px_#00ff88]"></span>
            </span>
          )}
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            sys.{status}
          </p>
        </div>
        
        {/* Decorative structural corner */}
        <div className="h-4 w-4 border-t-2 border-r-2 border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors" />
      </div>
      
      <div className="relative z-10">
        <h3 className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground group-hover:text-[var(--color-accent-tertiary)] transition-colors">
          <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all inline-block -ml-4 group-hover:ml-0 translate-x-[-10px] group-hover:translate-x-0">
            &gt;
          </span>
          {title}
        </h3>
        
        <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--color-muted-foreground)] flex-grow">
          {description}
        </p>
      </div>
      
      <div className="mt-8 relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-[rgba(255,255,255,0.03)] group-hover:border-[rgba(0,255,136,0.1)] transition-colors">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-none border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] transition-colors group-hover:border-[rgba(0,255,136,0.3)] hover:!border-[var(--color-accent)] hover:text-[var(--color-accent)] cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
