"use client";

import dynamic from "next/dynamic";
import { TopNavView } from "@/app/features/home/components/top-nav-view";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";
import { useTopNavState } from "@/app/features/home/hooks/use-top-nav-state";

const CvModal = dynamic(
  () => import("@/app/features/home/components/cv-modal").then((module) => module.CvModal),
  { ssr: false }
);

export function TopNav() {
  const { copy, language, setLanguage } = useSiteLanguage();
  const {
    activeSection,
    closeCvModal,
    closeMenu,
    cvModalOpen,
    floatingHover,
    handleFloatingMouseEnter,
    handleFloatingMouseLeave,
    isScrolled,
    menuOpen,
    navSections,
    openCvModal,
    toggleMenu,
  } = useTopNavState();

  const localizedNavSections = navSections.map((section) => ({
    ...section,
    label: copy.nav.sections[section.id as keyof typeof copy.nav.sections] ?? section.label,
  }));

  return (
    <>
      <TopNavView
        activeSection={activeSection}
        floatingHover={floatingHover}
        isScrolled={isScrolled}
        language={language}
        menuOpen={menuOpen}
        navSections={localizedNavSections}
        navText={copy.nav}
        onCloseMenu={closeMenu}
        onFloatingMouseEnter={handleFloatingMouseEnter}
        onFloatingMouseLeave={handleFloatingMouseLeave}
        onLanguageChange={setLanguage}
        onMenuToggle={toggleMenu}
        onOpenCvModal={openCvModal}
      />
      <CvModal isOpen={cvModalOpen} onClose={closeCvModal} />
    </>
  );
}
