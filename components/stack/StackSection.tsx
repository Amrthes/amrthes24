"use client";

import React, { useState } from "react";
import { STACK_DATA } from "@/data/stack";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { GlitchText } from "@/components/hero/GlitchText";

export function StackSection() {
  const [activeExecutable, setActiveExecutable] = useState<string | null>(null);

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-800/80">
      {/* Section Header */}
      <div className="mb-10">
        <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
          // COMPILER_AND_RUNTIME_REGISTRY
        </div>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-3">
          <span>03 //</span>
          <GlitchText text="TECH_ARSENAL_PROCESS_MATRIX" />
        </h2>
        <p className="font-sans text-sm text-slate-400 mt-1 max-w-2xl">
          Active system processes, deep learning pipelines, and backend runtimes registered in memory.
        </p>
      </div>

      {/* Process Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {STACK_DATA.map((processCard) => (
          <div
            key={processCard.pid}
            className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl"
          >
            <CornerAccents color="muted" size="sm" />

            {/* Header with PID */}
            <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">{processCard.pid}</span>
                <span className="text-slate-600">//</span>
                <span className="text-slate-200 font-semibold">{processCard.name}</span>
              </div>
              <Badge variant="accent" size="xs">
                {processCard.badge}
              </Badge>
            </div>

            {/* Description */}
            <div className="px-4 py-2.5 bg-slate-900/30 border-b border-slate-800/60 font-sans text-xs text-slate-400">
              {processCard.description}
            </div>

            {/* Executable items list (>Python.sh style) */}
            <div className="p-4 space-y-2 font-mono text-xs flex-1">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-slate-800/40 flex items-center justify-between">
                <span>EXECUTABLE_INVOCATION</span>
                <span>STATUS / ROLE</span>
              </div>

              {processCard.items.map((item) => {
                const isHovered = activeExecutable === item.executable;
                return (
                  <div
                    key={item.executable}
                    onMouseEnter={() => setActiveExecutable(item.executable)}
                    onMouseLeave={() => setActiveExecutable(null)}
                    className={`p-2 rounded border transition-all duration-150 flex items-center justify-between cursor-pointer group ${
                      isHovered
                        ? "border-emerald-500/80 bg-emerald-950/40 text-emerald-300 shadow-[0_0_10px_rgba(0,255,102,0.15)]"
                        : "border-slate-800/70 bg-slate-950/40 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${isHovered ? "text-emerald-400" : "text-slate-500"}`}>
                        &gt;
                      </span>
                      <span className="font-semibold text-white group-hover:text-emerald-300">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        ({item.executable})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.versionHint && (
                        <span className="text-[9px] text-cyan-400/80 bg-cyan-950/40 px-1.5 py-0.2 rounded border border-cyan-800/30 hidden sm:inline-block">
                          {item.versionHint}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 font-mono">
                        [{item.level}]
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Telemetry */}
            <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800 font-mono text-[10px] text-slate-500 flex items-center justify-between">
              <span>THREADS: RUNNING (0x0{processCard.items.length})</span>
              <span className="text-emerald-400">HEAP: CLEAN</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
