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
  return (
    <Card className="border-[var(--color-border)] bg-[var(--color-card)] p-6">
      <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">{status}</p>
      <h3 className="mt-4 text-xl sm:text-2xl font-semibold uppercase tracking-[0.1em] text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-none border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.25em] text-[var(--color-muted-foreground)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
