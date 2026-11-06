import React from "react";
import { cn } from "@/lib/utils";
import { CornerAccents } from "./CornerAccents";

interface TerminalWindowProps {
  title?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
  showCorners?: boolean;
}

export function TerminalWindow({
  title = "TERMINAL_CONSOLE",
  badge,
  children,
  className,
  headerRight,
  showCorners = true,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "relative rounded-sm border border-slate-800 bg-cyber-card/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-slate-700",
        className
      )}
    >
      {showCorners && <CornerAccents color="muted" size="sm" />}
      
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-950/80 border-b border-slate-800/80 select-none font-mono text-xs">
        <div className="flex items-center gap-2">
          {/* Simulated window controls */}
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 font-medium tracking-wider">{title}</span>
          {badge && (
            <span className="text-[10px] text-emerald-400 bg-emerald-950/50 px-1.5 py-0.2 border border-emerald-800/40 rounded">
              {badge}
            </span>
          )}
        </div>

        {headerRight && <div className="text-slate-500">{headerRight}</div>}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 text-sm text-slate-300 font-sans">{children}</div>
    </div>
  );
}
