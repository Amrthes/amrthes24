import React from "react";
import { cn } from "@/lib/utils";

interface CornerAccentsProps {
  className?: string;
  color?: "accent" | "cyan" | "muted";
  size?: "sm" | "md";
}

export function CornerAccents({
  className,
  color = "accent",
  size = "md",
}: CornerAccentsProps) {
  const colorMap = {
    accent: "border-emerald-500/70 text-emerald-400",
    cyan: "border-cyan-500/70 text-cyan-400",
    muted: "border-slate-600/70 text-slate-500",
  };

  const len = size === "sm" ? "w-2 h-2" : "w-3 h-3";

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-10", className)}>
      {/* Top Left */}
      <span
        className={cn(
          "absolute top-0 left-0 border-t-2 border-l-2",
          len,
          colorMap[color]
        )}
      />
      {/* Top Right */}
      <span
        className={cn(
          "absolute top-0 right-0 border-t-2 border-r-2",
          len,
          colorMap[color]
        )}
      />
      {/* Bottom Left */}
      <span
        className={cn(
          "absolute bottom-0 left-0 border-b-2 border-l-2",
          len,
          colorMap[color]
        )}
      />
      {/* Bottom Right */}
      <span
        className={cn(
          "absolute bottom-0 right-0 border-b-2 border-r-2",
          len,
          colorMap[color]
        )}
      />
    </div>
  );
}
