import { type HTMLAttributes } from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface CTAPanelProps extends HTMLAttributes<HTMLElement> {
  label: string;
  title: string;
  description: string;
  primaryText: string;
  secondaryText: string;
}

export function CTAPanel({
  label,
  title,
  description,
  primaryText,
  secondaryText,
  className = "",
  ...props
}: CTAPanelProps) {
  return (
    <Card
      variant="holographic"
      className={`border-[var(--color-border)] p-8 ${className}`}
      {...props}
    >
      <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
        {label}
      </p>
      <h3 className="mt-4 text-3xl font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
        {description}
      </p>
      <div className="mt-8 flex flex-col gap-3 lg:flex-row">
        <Button variant="glitch" className="w-full justify-center text-[var(--background)] px-4 whitespace-normal break-all sm:break-normal text-xs sm:text-sm md:text-base">
          {primaryText}
        </Button>
        <Button variant="secondary" className="w-full justify-center px-4 whitespace-normal text-xs sm:text-sm md:text-base">
          {secondaryText}
        </Button>
      </div>
    </Card>
  );
}
