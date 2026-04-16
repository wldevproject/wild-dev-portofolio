"use client";

import { useMemo, useState } from "react";
import { LayoutSection } from "@/app/components/ui/layout-section";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import type { PortfolioFocus, Project, ProjectCategory } from "@/app/data/resume-data";
import { projectList } from "@/app/data/resume-data";
import { MediaThumbnailCard } from "@/app/features/home/components/media-thumbnail-card";
import { ProjectCard } from "@/app/features/home/components/project-card";

const focusTabs: Array<{
  id: PortfolioFocus;
  label: string;
  description: string;
}> = [
  {
    id: "development",
    label: "Software",
    description: "Website, app, dashboard, and software project yang fokus ke hasil build dan fungsi.",
  },
  {
    id: "creative",
    label: "Design & Video",
    description: "Kumpulan karya desain dan video yang bisa langsung dibuka ke hasil aslinya.",
  },
];

const creativeCategoryMeta: Array<{
  id: ProjectCategory;
  label: string;
  description: string;
}> = [
  {
    id: "design",
    label: "Design",
    description: "Static visuals, UI explorations, and brand-ready compositions.",
  },
  {
    id: "reel-vertical",
    label: "Reels Vertical",
    description: "Vertical-first social edits tuned for mobile viewing.",
  },
  {
    id: "video-landscape",
    label: "Video Landscape",
    description: "Widescreen content with broader framing and steadier pacing.",
  },
  {
    id: "youtube",
    label: "YouTube",
    description: "Longer-form edits intended for deeper viewing sessions.",
  },
];

const projectsByFocus = {
  development: projectList.filter((project) => project.focus === "development"),
  creative: projectList.filter((project) => project.focus === "creative"),
} satisfies Record<PortfolioFocus, Project[]>;

export function ProjectsSection() {
  const [activeFocus, setActiveFocus] = useState<PortfolioFocus>("development");

  const availableCreativeTabs = useMemo(
    () =>
      creativeCategoryMeta.filter((category) =>
        projectsByFocus.creative.some((project) => project.category === category.id)
      ),
    []
  );

  const [activeCreativeCategory, setActiveCreativeCategory] = useState<ProjectCategory>(
    availableCreativeTabs[0]?.id ?? "reel-vertical"
  );

  const activeCreativeMeta =
    availableCreativeTabs.find((category) => category.id === activeCreativeCategory) ?? availableCreativeTabs[0];

  const creativeProjects = projectsByFocus.creative.filter(
    (project) => project.category === activeCreativeCategory
  );

  return (
    <LayoutSection
      id="projects"
      label="portfolio focus"
      title="Pilih yang ingin Anda lihat"
      description="Biar cepat dan tidak bikin bingung, portfolio ini dibagi jadi dua jalur utama. Pilih Software kalau Anda ingin lihat project coding, atau Design & Video kalau Anda ingin lihat karya visual."
      actions={
        <div className="terminal-panel cyber-chamfer-sm relative overflow-hidden border border-[rgba(0,255,136,0.18)] bg-[rgba(10,10,15,0.75)] px-5 py-4 text-left">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,136,0.06),transparent)] opacity-60" />
          <p className="font-ui text-[0.62rem] uppercase tracking-[0.32em] text-[var(--color-accent)]">
            {activeFocus === "development" ? "focus://software" : "focus://design-video"}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
            &gt;{" "}
            {activeFocus === "development"
              ? "Masuk ke kumpulan project software: website, aplikasi, dashboard, dan sistem."
              : "Masuk ke daftar desain dan video. Setiap item bisa langsung dibuka ke hasil aslinya."}
          </p>
        </div>
      }
    >
      <div className="space-y-8">
        <div className="cyber-chamfer relative overflow-hidden border border-[rgba(255,0,255,0.16)] bg-[rgba(18,18,26,0.78)] p-3">
          <div className="pointer-events-none absolute inset-0 circuit-grid opacity-45" />
          <div
            role="tablist"
            aria-label="Portfolio focus"
            className="relative grid gap-3 sm:grid-cols-2"
          >
            {focusTabs.map((tab) => {
              const isActive = tab.id === activeFocus;
              const projectCount = projectsByFocus[tab.id].length;

              return (
                <button
                  key={tab.id}
                  id={`portfolio-tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`portfolio-panel-${tab.id}`}
                  onClick={() => setActiveFocus(tab.id)}
                  className={`cyber-chamfer-sm relative min-h-[124px] overflow-hidden border px-5 py-4 text-left transition-all duration-150 ${
                    isActive
                      ? "border-[rgba(0,255,136,0.45)] bg-[rgba(0,255,136,0.08)] shadow-[0_0_18px_rgba(0,255,136,0.14)]"
                      : "border-[var(--color-border)] bg-[rgba(10,10,15,0.72)] hover:border-[rgba(0,212,255,0.28)] hover:bg-[rgba(0,212,255,0.05)]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_45%,rgba(0,212,255,0.08))]" />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`font-ui text-[0.62rem] uppercase tracking-[0.3em] ${
                            isActive ? "text-[var(--color-accent)]" : "text-[var(--color-accent-tertiary)]"
                          }`}
                        >
                          {tab.id === "development" ? "for software" : "for design & video"}
                        </p>
                        <h3 className="mt-2 text-xl font-black uppercase tracking-[0.14em] text-foreground">
                          {tab.label}
                        </h3>
                      </div>

                      <p className="font-heading text-3xl font-black uppercase tracking-[0.16em] text-foreground">
                        {String(projectCount).padStart(2, "0")}
                      </p>
                    </div>

                    <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">{tab.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`portfolio-panel-${activeFocus}`}
          role="tabpanel"
          aria-labelledby={`portfolio-tab-${activeFocus}`}
          className="space-y-8"
        >
          {activeFocus === "development" ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectsByFocus.development.map((project) => (
                <ScrollReveal key={project.title}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                <div className="max-w-2xl space-y-3">
                  <p className="font-ui text-[0.62rem] uppercase tracking-[0.32em] text-[var(--color-accent-tertiary)]">
                    design & video gallery
                  </p>
                  <h3 className="text-2xl font-black uppercase tracking-[0.16em] text-foreground">
                    Lihat Karya Visual Dengan Ringkas
                  </h3>
                  <p className="text-sm leading-7 text-[var(--color-muted-foreground)]">
                    Formatnya dibuat lebih sederhana supaya cepat dibaca. Klik satu item untuk membuka hasil asli di
                    Instagram atau YouTube.
                  </p>
                </div>

                {activeCreativeMeta ? (
                  <div className="cyber-chamfer-sm border border-[rgba(0,212,255,0.22)] bg-[rgba(0,212,255,0.05)] px-4 py-3">
                    <p className="font-ui text-[0.58rem] uppercase tracking-[0.3em] text-[var(--color-accent-tertiary)]">
                      active category
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
                      {activeCreativeMeta.description}
                    </p>
                  </div>
                ) : null}
              </div>

              {availableCreativeTabs.length > 0 ? (
                <div
                  role="tablist"
                  aria-label="Creative categories"
                  className="flex flex-wrap gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4"
                >
                  {availableCreativeTabs.map((category) => {
                    const isActive = category.id === activeCreativeCategory;
                    const projectCount = projectsByFocus.creative.filter(
                      (project) => project.category === category.id
                    ).length;

                    return (
                      <button
                        key={category.id}
                        id={`creative-tab-${category.id}`}
                        role="tab"
                        type="button"
                        aria-selected={isActive}
                        aria-controls={`creative-panel-${category.id}`}
                        onClick={() => setActiveCreativeCategory(category.id)}
                        className={`cyber-chamfer-sm min-h-[44px] border px-4 py-3 font-ui text-[0.62rem] uppercase tracking-[0.28em] transition-all duration-150 ${
                          isActive
                            ? "border-[rgba(0,212,255,0.42)] bg-[rgba(0,212,255,0.09)] text-[var(--color-accent-tertiary)] shadow-[0_0_16px_rgba(0,212,255,0.12)]"
                            : "border-[var(--color-border)] bg-[rgba(10,10,15,0.76)] text-[var(--color-muted-foreground)] hover:border-[rgba(255,0,255,0.26)] hover:text-foreground"
                        }`}
                      >
                        {category.label} [{String(projectCount).padStart(2, "0")}]
                      </button>
                    );
                  })}
                </div>
              ) : null}

              <div
                id={`creative-panel-${activeCreativeCategory}`}
                role="tabpanel"
                aria-labelledby={`creative-tab-${activeCreativeCategory}`}
                className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
              >
                {creativeProjects.map((project) => (
                  <ScrollReveal key={project.title}>
                    <MediaThumbnailCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutSection>
  );
}
