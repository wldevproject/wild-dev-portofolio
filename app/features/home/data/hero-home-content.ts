import { personalInfo } from "@/app/data/resume-data";

export const heroHomeContent = {
  label: "system_status: online",
  title: `${personalInfo.name.toUpperCase()}.`,
  description: personalInfo.summary,
  metrics: [
    {
      label: "Location",
      value: "West Java",
      accentClass: "text-[var(--color-accent)]",
    },
    {
      label: "Focus",
      value: "Software Engineer",
      accentClass: "text-[var(--color-accent-tertiary)]",
    },
  ],
  ctaPrimary: "View Projects",
  ctaSecondary: "Contact Log",
  terminalLines: [
    { text: "> BOOT SEQUENCE INITIATED", colorClass: "text-[var(--color-accent)]" },
    { text: "> IDENTITY: Muhammad Fachrizal", colorClass: "text-[var(--color-accent-secondary)]" },
    { text: "> CLASSIFICATION: Software Engineer Android", colorClass: "text-[var(--color-accent-tertiary)]" },
    { text: "> STATUS / Ping: Ready / 0.01ms", colorClass: "text-[var(--color-muted-foreground)]" },
  ],
} as const;
