"use client";

import { type HTMLAttributes, useState, useEffect, useCallback } from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface LinkOption {
  label: string;
  url: string;
}

interface CTAPanelProps extends HTMLAttributes<HTMLElement> {
  label: string;
  title: string;
  description: string;
  primaryText: string;
  primaryHref?: string;
  secondaryText: string;
  secondaryLinks?: LinkOption[];
}

export function CTAPanel({
  label,
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryLinks = [],
  className = "",
  ...props
}: CTAPanelProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDialog = useCallback(() => setDialogOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!dialogOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [dialogOpen, closeDialog]);

  return (
    <>
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
        <div className="mt-8 flex flex-col gap-3">
          {primaryHref ? (
            <a href={`mailto:${primaryHref}`} className="w-full">
              <Button variant="glitch" className="w-full justify-center text-[var(--background)] px-4 whitespace-normal break-all sm:break-normal text-xs sm:text-sm md:text-base">
                {primaryText}
              </Button>
            </a>
          ) : (
            <Button variant="glitch" className="w-full justify-center text-[var(--background)] px-4 whitespace-normal break-all sm:break-normal text-xs sm:text-sm md:text-base">
              {primaryText}
            </Button>
          )}
          <Button
            variant="secondary"
            className="w-full justify-center px-4 whitespace-normal text-xs sm:text-sm md:text-base"
            onClick={() => {
              if (secondaryLinks.length > 0) {
                setDialogOpen(true);
              }
            }}
          >
            {secondaryText}
          </Button>
        </div>
      </Card>

      {/* ═══ Link Selection Dialog ═══ */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeDialog}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm" />

          {/* Dialog */}
          <div
            className="relative w-full max-w-sm mx-6 border border-[var(--color-border)] bg-[var(--color-card)] p-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-background)]">
              <span className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                select_destination
              </span>
              <button
                onClick={closeDialog}
                className="font-mono text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors"
              >
                [×]
              </button>
            </div>

            {/* Links */}
            <div className="p-4 space-y-2">
              {secondaryLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full px-5 py-4 border border-[var(--color-border)] bg-[var(--color-background)] font-mono text-sm uppercase tracking-[0.15em] text-foreground transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  onClick={closeDialog}
                >
                  <span className="text-[var(--color-accent)]">&gt;</span>
                  {link.label}
                  <span className="ml-auto text-[var(--color-muted-foreground)] text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
