"use client";

import React from "react";
import { DEPLOYMENTS } from "@/data/experience";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { GlitchText } from "@/components/hero/GlitchText";

export function SystemExperienceSection() {
  return (
    <section id="system" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-800/80">
      {/* Section Header */}
      <div className="mb-10">
        <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
          // PRODUCTION_RUNTIMES
        </div>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-3">
          <span>04 //</span>
          <GlitchText text="SYSTEM_DEPLOYMENT_TIMELINE" />
        </h2>
        <p className="font-sans text-sm text-slate-400 mt-1 max-w-2xl">
          Historical deployments across industry engineering internships, featuring local LLM runtimes, audio duplex streaming, and Dockerized microservice backends.
        </p>
      </div>

      {/* Deployments Timeline Container */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-cyan-500 before:to-slate-800 before:pointer-events-none">
        {DEPLOYMENTS.map((deploy) => (
          <div key={deploy.id} className="relative pl-8 sm:pl-12">
            {/* Timeline Node Point */}
            <div className="absolute left-1.5 sm:left-3.5 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-bg border-2 border-emerald-400 shadow-[0_0_10px_#00ff66] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            </div>

            {/* Deployment Card */}
            <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden shadow-xl hover:border-slate-700 transition-all duration-300">
              <CornerAccents color="muted" size="sm" />

              {/* Deployment Bar */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-emerald-400 font-bold">{deploy.id}</span>
                  <span className="text-slate-600">//</span>
                  <span className="text-cyan-400 font-semibold">{deploy.commitHash}</span>
                  <span className="text-slate-600">//</span>
                  <span className="text-slate-400">MODE: {deploy.workMode}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="cyan" size="xs">
                    {deploy.status}
                  </Badge>
                  <span className="text-slate-500 text-[11px]">
                    {deploy.period} ({deploy.duration})
                  </span>
                </div>
              </div>

              {/* Main Body */}
              <div className="p-5 space-y-4">
                {/* Title & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-mono font-bold text-white">
                      {deploy.role}
                    </h3>
                    <div className="text-sm font-mono text-emerald-400 font-medium">
                      @ {deploy.company} ({deploy.location})
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded border border-slate-800/80">
                  {deploy.summary}
                </p>

                {/* Detailed Responsibilities */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="text-emerald-400">&gt;</span>
                    <span>MISSION_SPECIFICATIONS &amp; CONTRIBUTIONS:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-sans text-slate-300 pl-4 list-disc marker:text-emerald-400">
                    {deploy.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">
                    DEPLOYED_STACK:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {deploy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Telemetry Output Log */}
                <div className="p-3 bg-black/60 rounded border border-slate-800/80 font-mono text-[11px] text-slate-400 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>SYS_CONTAINER_LOGS</span>
                    <span className="text-emerald-400">STREAM: ACTIVE</span>
                  </div>
                  {deploy.telemetryLogs.map((logLine, idx) => (
                    <div key={idx} className="text-slate-300 truncate">
                      {logLine}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
