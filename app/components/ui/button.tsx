import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "default" | "secondary" | "ghost" | "glitch";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "button-primary border-[2px] border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] shadow-none hover:bg-[rgba(0,255,136,0.08)] hover:shadow-neon focus-visible:ring-[var(--color-ring)]",
  secondary:
    "button-secondary border-[2px] border-[var(--color-accent-secondary)] bg-transparent text-[var(--color-accent-secondary)] shadow-none hover:bg-[rgba(255,0,255,0.1)] hover:shadow-neon-secondary focus-visible:ring-[var(--color-accent-secondary)]",
  ghost:
    "button-ghost border-transparent bg-[rgba(255,255,255,0.05)] text-[var(--color-accent)] hover:bg-[rgba(0,255,136,0.06)] focus-visible:ring-[var(--color-ring)]",
  glitch:
    "button-glitch border-[2px] border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--background)] shadow-neon hover:brightness-105 focus-visible:ring-[var(--color-ring)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", className = "", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-none px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";
