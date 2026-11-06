import React from "react";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  status?: "online" | "syncing" | "standby" | "alert";
  label?: string;
  className?: string;
}

export function StatusPill({
  status = "online",
  label = "SYSTEM_STATUS: ONLINE",
  className,
}: StatusPillProps) {
  const dotColor = {
    online: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
    syncing: "bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-pulse",
    standby: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
    alert: "bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-ping",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded border border-emerald-950 bg-black/60 backdrop-blur-sm font-mono text-[11px] tracking-wider text-emerald-400 select-none",
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full inline-block", dotColor[status])} />
      <span>{label}</span>
    </div>
  );
}
