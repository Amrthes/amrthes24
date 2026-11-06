"use client";

import React, { useState } from "react";
import { ACTIVITY_LOGS, ActivityLog } from "@/data/logs";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { GlitchText } from "@/components/hero/GlitchText";

export function LogsSection() {
  const [filter, setFilter] = useState<"ALL" | "ACHIEVEMENT" | "DEPLOYMENT">("ALL");

  const filteredLogs = ACTIVITY_LOGS.filter((log) => {
    if (filter === "ALL") return true;
    return log.category === filter;
  });

  const getSeverityBadge = (log: ActivityLog) => {
    switch (log.severity) {
      case "highlight":
        return <Badge variant="accent">{log.badge}</Badge>;
      case "success":
        return <Badge variant="cyan">{log.badge}</Badge>;
      case "info":
        return <Badge variant="muted">{log.badge}</Badge>;
      default:
        return <Badge variant="outline">{log.badge}</Badge>;
    }
  };

  return (
    <section id="logs" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
            // TELEMETRY_FEED
          </div>
          <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-3">
            <span>01 //</span>
            <GlitchText text="SYSTEM_ACTIVITY_LOGS" />
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-1 max-w-xl">
            Chronological audit log of hackathon recognitions, podium finishes, and enterprise deployments.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <span className="text-slate-500 mr-1 text-[11px]">FILTER:</span>
          {(["ALL", "ACHIEVEMENT", "DEPLOYMENT"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-2.5 py-1 rounded border transition-colors ${
                filter === cat
                  ? "border-emerald-500 bg-emerald-950/40 text-emerald-400 font-bold"
                  : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Window Container */}
      <div className="relative rounded border border-slate-800 bg-cyber-card/90 overflow-hidden shadow-2xl backdrop-blur-md">
        <CornerAccents color="muted" size="md" />

        {/* Console Top Bar */}
        <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-300 font-semibold tracking-wider">
              bash - tail -f /var/log/achievements.journal
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-emerald-400 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>STREAMING_LIVE</span>
          </div>
        </div>

        {/* Logs Feed Body */}
        <div className="divide-y divide-slate-800/60 font-mono text-xs">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="p-4 sm:p-5 hover:bg-slate-900/40 transition-colors group relative"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3">
                {/* Left: Timestamp & Event Title */}
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-slate-500 text-[11px] font-mono">
                      [{log.timestamp}]
                    </span>
                    <span className="text-[10px] text-cyan-400/90 font-mono tracking-wider bg-cyan-950/30 px-1.5 py-0.5 rounded border border-cyan-800/30">
                      SYS_EVENT_{log.id}
                    </span>
                    <span className="text-slate-600">//</span>
                    <span className="text-white font-bold group-hover:text-emerald-400 transition-colors text-sm sm:text-base font-sans">
                      {log.event}
                    </span>
                  </div>

                  {/* Detail paragraph */}
                  <p className="font-sans text-slate-300 text-xs sm:text-sm pl-2 sm:pl-4 border-l-2 border-slate-700/60 leading-relaxed">
                    {log.detail}
                  </p>
                </div>

                {/* Right: Badge & Date */}
                <div className="flex items-center lg:flex-col lg:items-end justify-between gap-2 self-start shrink-0">
                  {getSeverityBadge(log)}
                  <span className="text-slate-500 text-[11px] font-mono">
                    PERIOD: {log.rawDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Status Footer */}
        <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 font-mono text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">&gt;</span>
            <span>SHOWING {filteredLogs.length} OF {ACTIVITY_LOGS.length} AUDIT ENTRIES</span>
          </div>
          <div className="text-slate-600">
            INTEGRITY_CHECK: VERIFIED // SHA256_OK
          </div>
        </div>
      </div>
    </section>
  );
}
