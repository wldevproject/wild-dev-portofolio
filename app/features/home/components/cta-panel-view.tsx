import { type HTMLAttributes } from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

export interface LinkOption {
  label: string;
  url: string;
}

interface CTAPanelViewProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  dialogLabel?: string;
  dialogOpen: boolean;
  label: string;
  primaryHref?: string;
  primaryText: string;
  secondaryLinks: readonly LinkOption[];
  secondaryText: string;
  title: string;
  onCloseDialog: () => void;
  onOpenDialog: () => void;
}

export function CTAPanelView({
  description,
  dialogLabel = "select_destination",
  dialogOpen,
  label,
  primaryHref,
  primaryText,
  secondaryLinks,
  secondaryText,
  title,
  onCloseDialog,
  onOpenDialog,
  className = "",
  ...props
}: CTAPanelViewProps) {
  return (
    <>
      <Card variant="holographic" className={`border-[var(--color-border)] p-8 ${className}`} {...props}>
        <p className="font-ui text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">{label}</p>
        <h3 className="mt-4 text-3xl font-semibold uppercase tracking-[0.18em] text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted-foreground)]">{description}</p>
        <div className="mt-8 flex flex-col gap-3">
          {primaryHref ? (
            <a href={`mailto:${primaryHref}`} className="w-full">
              <Button
                variant="glitch"
                className="w-full justify-center whitespace-normal break-all px-4 text-xs text-[var(--background)] sm:break-normal sm:text-sm md:text-base"
              >
                {primaryText}
              </Button>
            </a>
          ) : (
            <Button
              variant="glitch"
              className="w-full justify-center whitespace-normal break-all px-4 text-xs text-[var(--background)] sm:break-normal sm:text-sm md:text-base"
            >
              {primaryText}
            </Button>
          )}
          <Button
            variant="secondary"
            className="w-full justify-center whitespace-normal px-4 text-xs sm:text-sm md:text-base"
            onClick={onOpenDialog}
          >
            {secondaryText}
          </Button>
        </div>
      </Card>

      {dialogOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onCloseDialog}>
          <div className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm" />

          <div
            className="relative mx-6 w-full max-w-sm overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] p-0"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background)] px-6 py-4">
              <span className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {dialogLabel}
              </span>
              <button
                onClick={onCloseDialog}
                className="font-mono text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-accent)]"
              >
                [×]
              </button>
            </div>

            <div className="space-y-2 p-4">
              {secondaryLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-4 border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 font-mono text-sm uppercase tracking-[0.15em] text-foreground transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  onClick={onCloseDialog}
                >
                  <span className="text-[var(--color-accent)]">&gt;</span>
                  {link.label}
                  <span className="ml-auto text-xs text-[var(--color-muted-foreground)]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
