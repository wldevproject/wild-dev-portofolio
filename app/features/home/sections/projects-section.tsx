"use client";

import { useEffect, useMemo, useState } from "react";
import { LayoutSection } from "@/app/components/ui/layout-section";
import { ScrollReveal } from "@/app/components/ui/scroll-reveal";
import type { PortfolioFocus, Project, ProjectCategory } from "@/app/data/resume-data";
import { projectList } from "@/app/data/resume-data";
import { MediaThumbnailCard } from "@/app/features/home/components/media-thumbnail-card";
import { ProjectCard } from "@/app/features/home/components/project-card";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";

const creativeCategoryIds: ProjectCategory[] = ["design", "reel-vertical", "video-landscape", "youtube"];

const projectsByFocus = {
  development: projectList.filter((project) => project.focus === "development"),
  creative: projectList.filter((project) => project.focus === "creative"),
} satisfies Record<PortfolioFocus, Project[]>;

function getFocusFromHash(hash: string): PortfolioFocus | null {
  if (hash === "#projects/developper") {
    return "development";
  }

  if (hash === "#projects/multimedia") {
    return "creative";
  }

  return null;
}

export function ProjectsSection() {
  const { copy } = useSiteLanguage();
  const [activeFocus, setActiveFocus] = useState<PortfolioFocus>("development");

  const availableCreativeTabs = useMemo(
    () =>
      creativeCategoryIds.filter((category) =>
        projectsByFocus.creative.some((project) => project.category === category)
      ),
    []
  );

  const [activeCreativeCategory, setActiveCreativeCategory] = useState<ProjectCategory>(
    availableCreativeTabs[0] ?? "reel-vertical"
  );

  useEffect(() => {
    const syncFromHash = () => {
      const nextFocus = getFocusFromHash(window.location.hash.toLowerCase());

      if (nextFocus) {
        setActiveFocus(nextFocus);
        document.getElementById("projects")?.scrollIntoView({ block: "start" });
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeCreativeMeta =
    availableCreativeTabs.find((category) => category === activeCreativeCategory) ?? availableCreativeTabs[0];

  const creativeProjects = projectsByFocus.creative.filter(
    (project) => project.category === activeCreativeCategory
  );

  const handleFocusChange = (focus: PortfolioFocus) => {
    setActiveFocus(focus);
    window.history.replaceState(null, "", copy.projects.hash[focus]);
    document.getElementById("projects")?.scrollIntoView({ block: "start" });
  };

  const focusTabs = [
    {
      id: "development" as const,
      label: copy.projects.focusTabs.development.label,
      description: copy.projects.focusTabs.development.description,
      lane: copy.projects.focusTabs.development.lane,
    },
    {
      id: "creative" as const,
      label: copy.projects.focusTabs.creative.label,
      description: copy.projects.focusTabs.creative.description,
      lane: copy.projects.focusTabs.creative.lane,
    },
  ];

  return (
    <LayoutSection
      id="projects"
      label={copy.projects.sectionLabel}
      title={copy.projects.title}
      description={copy.projects.description}
      actions={
        <div className="terminal-panel cyber-chamfer-sm relative overflow-hidden border border-[rgba(0,255,136,0.18)] bg-[rgba(10,10,15,0.75)] px-5 py-4 text-left">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,136,0.06),transparent)] opacity-60" />
          <p className="font-ui text-[0.62rem] uppercase tracking-[0.32em] text-[var(--color-accent)]">
            {activeFocus === "development" ? copy.projects.focusPathSoftware : copy.projects.focusPathCreative}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
            &gt; {activeFocus === "development" ? copy.projects.focusTextSoftware : copy.projects.focusTextCreative}
          </p>
        </div>
      }
    >
      <div className="space-y-8">
        <div className="cyber-chamfer relative overflow-hidden border border-[rgba(255,0,255,0.16)] bg-[rgba(18,18,26,0.78)] p-3">
          <div className="pointer-events-none absolute inset-0 circuit-grid opacity-45" />
          <div role="tablist" aria-label={copy.projects.ariaLabel} className="relative grid gap-3 sm:grid-cols-2">
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
                  onClick={() => handleFocusChange(tab.id)}
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
                          {tab.lane}
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
                    {copy.projects.galleryLabel}
                  </p>
                  <h3 className="text-2xl font-black uppercase tracking-[0.16em] text-foreground">
                    {copy.projects.galleryTitle}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--color-muted-foreground)]">
                    {copy.projects.galleryDescription}
                  </p>
                </div>

                {activeCreativeMeta ? (
                  <div className="cyber-chamfer-sm border border-[rgba(0,212,255,0.22)] bg-[rgba(0,212,255,0.05)] px-4 py-3">
                    <p className="font-ui text-[0.58rem] uppercase tracking-[0.3em] text-[var(--color-accent-tertiary)]">
                      {copy.projects.activeCategory}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
                      {copy.projects.categories[activeCreativeMeta].description}
                    </p>
                  </div>
                ) : null}
              </div>

              {availableCreativeTabs.length > 0 ? (
                <div
                  role="tablist"
                  aria-label={copy.projects.creativeAriaLabel}
                  className="flex flex-wrap gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4"
                >
                  {availableCreativeTabs.map((category) => {
                    const isActive = category === activeCreativeCategory;
                    const projectCount = projectsByFocus.creative.filter(
                      (project) => project.category === category
                    ).length;

                    return (
                      <button
                        key={category}
                        id={`creative-tab-${category}`}
                        role="tab"
                        type="button"
                        aria-selected={isActive}
                        aria-controls={`creative-panel-${category}`}
                        onClick={() => setActiveCreativeCategory(category)}
                        className={`cyber-chamfer-sm min-h-[44px] border px-4 py-3 font-ui text-[0.62rem] uppercase tracking-[0.28em] transition-all duration-150 ${
                          isActive
                            ? "border-[rgba(0,212,255,0.42)] bg-[rgba(0,212,255,0.09)] text-[var(--color-accent-tertiary)] shadow-[0_0_16px_rgba(0,212,255,0.12)]"
                            : "border-[var(--color-border)] bg-[rgba(10,10,15,0.76)] text-[var(--color-muted-foreground)] hover:border-[rgba(255,0,255,0.26)] hover:text-foreground"
                        }`}
                      >
                        {copy.projects.categories[category].label} [{String(projectCount).padStart(2, "0")}]
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
