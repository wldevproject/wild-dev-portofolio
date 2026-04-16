"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const query = window.matchMedia("(min-width: 48rem)");
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    handleChange(query);
    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
    };
  }, []);

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
