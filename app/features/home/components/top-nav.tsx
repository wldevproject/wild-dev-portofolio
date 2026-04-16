"use client";

import dynamic from "next/dynamic";
import { TopNavView } from "@/app/features/home/components/top-nav-view";
import { useTopNavState } from "@/app/features/home/hooks/use-top-nav-state";

const CvModal = dynamic(
  () => import("@/app/features/home/components/cv-modal").then((module) => module.CvModal),
  { ssr: false }
);

export function TopNav() {
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

  return (
    <>
      <TopNavView
        activeSection={activeSection}
        floatingHover={floatingHover}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        navSections={navSections}
        onCloseMenu={closeMenu}
        onFloatingMouseEnter={handleFloatingMouseEnter}
        onFloatingMouseLeave={handleFloatingMouseLeave}
        onMenuToggle={toggleMenu}
        onOpenCvModal={openCvModal}
      />
      <CvModal isOpen={cvModalOpen} onClose={closeCvModal} />
    </>
  );
}
