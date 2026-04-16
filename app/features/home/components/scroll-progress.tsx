"use client";

import { useScrollProgress } from "@/app/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-[rgba(255,255,255,0.08)]">
      <div className="h-full bg-[var(--color-accent)] transition-all duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
