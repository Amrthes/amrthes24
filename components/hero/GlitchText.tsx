"use client";

import React, { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  intervalMs?: number;
}

const GLYPHS = "0101_#@!<>{}[]%^&*~/\\=+";

export function GlitchText({
  text,
  className = "",
  scrambleOnHover = true,
  intervalMs = 30,
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const triggerScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length * 2;

    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 2) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
      iteration += 1;
    }, intervalMs);
  };

  useEffect(() => {
    // Initial reveal scramble
    triggerScramble();
  }, [text]);

  return (
    <span
      onMouseEnter={() => scrambleOnHover && triggerScramble()}
      className={`font-mono transition-colors select-none ${className}`}
    >
      {displayText}
    </span>
  );
}
