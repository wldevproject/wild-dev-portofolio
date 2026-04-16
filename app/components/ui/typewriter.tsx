"use client";

import { useEffect, useState, type HTMLAttributes } from "react";

interface TypewriterProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({ text, speed = 70, delay = 1200, className = "", ...props }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timer = window.setTimeout(() => setIndex(index + 1), speed);
      return () => window.clearTimeout(timer);
    } else {
      const timer = window.setTimeout(() => setVisible(false), delay);
      return () => window.clearTimeout(timer);
    }
  }, [index, text, speed, delay]);

  const value = text.slice(0, index);

  return (
    <span className={`${className} typewriter-text`} {...props}>
      {value}
      <span className={`typewriter-cursor ${visible ? "" : "typewriter-cursor-hidden"}`}>_</span>
    </span>
  );
}
