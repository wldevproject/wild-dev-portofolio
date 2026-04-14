import { type HTMLAttributes, forwardRef } from "react";

type CardVariant = "default" | "terminal" | "holographic";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-[var(--color-card)] border border-[var(--color-border)] shadow-none",
  terminal:
    "bg-[var(--color-background)] border border-[var(--color-border)] shadow-none pt-6",
  holographic:
    "bg-[rgba(28,28,46,0.32)] border border-[rgba(0,255,136,0.18)] shadow-[0_0_35px_rgba(0,255,136,0.12)] backdrop-blur-xl",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`cyber-card cyber-chamfer relative overflow-hidden rounded-none p-6 transition-all duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
Card.displayName = "Card";
