import { type HTMLAttributes, type ReactNode } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function SectionHeader({
  label,
  title,
  description,
  actions,
  className = "",
  ...props
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`} {...props}>
      <div className="space-y-4">
        <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-secondary)]">
          {label}
        </p>
        <h2 className="text-4xl font-black uppercase tracking-[0.16em] text-foreground md:text-5xl">
          {title}
        </h2>
      </div>
      {actions ? (
        <div className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)] lg:text-right">
          {actions}
        </div>
      ) : (
        <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}
