"use client";

import { useEffect, useState } from "react";

export function useScrollThreshold(threshold: number) {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateThresholdState = () => {
      frameId = 0;
      setHasPassedThreshold(window.scrollY > threshold);
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateThresholdState);
    };

    updateThresholdState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return hasPassedThreshold;
}
