import { type HTMLAttributes, type ReactNode } from "react";

interface LayoutSectionProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function LayoutSection({
  label,
  title,
  description,
  actions,
  children,
  className = "",
  ...props
}: LayoutSectionProps) {
  return (
    <section className={`relative overflow-hidden rounded-none ${className}`} {...props}>
      <div className="layout-section-bg absolute inset-0 pointer-events-none" />
      <div className="relative px-0 py-10 sm:px-2 lg:px-0">
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
