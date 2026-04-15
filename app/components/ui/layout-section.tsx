import { type HTMLAttributes, type ReactNode } from "react";

interface LayoutSectionProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
  /** Extra classes for the full-bleed outer wrapper (backgrounds, borders) */
  bgClassName?: string;
}

export function LayoutSection({
  label,
  title,
  description,
  actions,
  children,
  className = "",
  bgClassName = "",
  ...props
}: LayoutSectionProps) {
  return (
    <section
      className={`relative w-full ${bgClassName}`}
      {...props}
    >
      {/* Layer 1: Full-bleed background */}
      <div className="layout-section-bg absolute inset-0 pointer-events-none" />

      {/* Layer 2: Constrained content */}
      <div className={`relative mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-16 ${className}`}>
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
        <div className="mt-14 md:mt-24 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
