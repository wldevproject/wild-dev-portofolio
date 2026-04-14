"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  className = "",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`reveal-item ${visible ? "reveal-item-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
