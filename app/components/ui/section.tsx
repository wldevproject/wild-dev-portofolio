import { type HTMLAttributes, type ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function Section({
  label,
  title,
  description,
  actions,
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section className={`space-y-8 ${className}`} {...props}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          {label ? (
            <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent-secondary)]">
              {label}
            </p>
          ) : null}
          <h2 className="text-4xl font-black uppercase tracking-[0.16em] text-foreground md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)]">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)] lg:text-right">
            {actions}
          </div>
        ) : null}
      </div>
      {children}
    </section>
  );
}
