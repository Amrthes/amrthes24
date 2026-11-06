"use client";

import React, { useState, useEffect } from "react";

export function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPercent(0);
        return;
      }
      const percent = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2 select-none pointer-events-none font-mono text-[10px]"
      aria-hidden="true"
    >
      {/* Top telemetry badge */}
      <span className="text-slate-500 tracking-tighter">POS</span>

      {/* Percentage read-out */}
      <div className="px-1.5 py-0.5 rounded border border-emerald-950 bg-black/80 text-emerald-400 font-bold tracking-widest text-[11px] shadow-[0_0_8px_rgba(0,255,102,0.2)]">
        {scrollPercent.toString().padStart(3, "0")}%
      </div>

      {/* Vertical Track and Indicator */}
      <div className="relative w-1.5 h-36 sm:h-48 bg-slate-900 border border-slate-800 rounded-full overflow-hidden my-1">
        <div
          className="w-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-emerald-500 transition-all duration-100 shadow-[0_0_8px_#00ff66]"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Segment tick indicators */}
      <div className="flex flex-col gap-1 text-[8px] text-slate-600">
        <span className={scrollPercent > 20 ? "text-emerald-500" : ""}>- 25</span>
        <span className={scrollPercent > 50 ? "text-emerald-500" : ""}>- 50</span>
        <span className={scrollPercent > 75 ? "text-emerald-500" : ""}>- 75</span>
        <span className={scrollPercent === 100 ? "text-emerald-500" : ""}>- 100</span>
      </div>

      <span className="text-slate-600 tracking-tighter">SYS</span>
    </div>
  );
}
