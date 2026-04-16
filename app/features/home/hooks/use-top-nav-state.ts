"use client";

import { useState } from "react";
import { useActiveSection } from "@/app/hooks/use-active-section";
import { useScrollThreshold } from "@/app/hooks/use-scroll-threshold";
import { siteSections } from "@/app/lib/site-sections";

const navSections = siteSections.slice(1);

export function useTopNavState() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [floatingHover, setFloatingHover] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const activeSection = useActiveSection(siteSections);
  const isScrolled = useScrollThreshold(120);

  return {
    activeSection,
    cvModalOpen,
    floatingHover,
    isScrolled,
    menuOpen,
    navSections,
    closeCvModal: () => setCvModalOpen(false),
    closeMenu: () => setMenuOpen(false),
    handleFloatingMouseEnter: () => setFloatingHover(true),
    handleFloatingMouseLeave: () => setFloatingHover(false),
    openCvModal: () => setCvModalOpen(true),
    toggleMenu: () => setMenuOpen((open) => !open),
  };
}
