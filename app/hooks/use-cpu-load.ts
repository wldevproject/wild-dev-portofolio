"use client";

import { useEffect, useState } from "react";

export function useCpuLoad(initialValue = 87) {
  const [cpuLoad, setCpuLoad] = useState(initialValue);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCpuLoad((previousLoad) => {
        const delta = Math.floor(Math.random() * 8) - 3;
        return Math.max(78, Math.min(99, previousLoad + delta));
      });
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return cpuLoad;
}
