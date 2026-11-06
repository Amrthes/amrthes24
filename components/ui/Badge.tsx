import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "cyan" | "amber" | "danger" | "muted" | "outline";
  size?: "xs" | "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "accent",
  size = "xs",
  className,
}: BadgeProps) {
  const variantStyles = {
    accent: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    cyan: "bg-cyan-950/40 text-cyan-400 border-cyan-500/30",
    amber: "bg-amber-950/40 text-amber-400 border-amber-500/30",
    danger: "bg-rose-950/40 text-rose-400 border-rose-500/30",
    muted: "bg-slate-900/60 text-slate-400 border-slate-700/50",
    outline: "bg-transparent text-slate-300 border-slate-700 hover:border-emerald-500/50",
  };

  const sizeStyles = {
    xs: "text-[10px] px-2 py-0.5 tracking-wider font-mono",
    sm: "text-xs px-2.5 py-1 tracking-wide font-mono",
    md: "text-sm px-3 py-1.5 font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border rounded-sm transition-colors duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
