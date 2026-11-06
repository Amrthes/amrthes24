"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { GlitchText } from "@/components/hero/GlitchText";

export function BioSection() {
  return (
    <section id="bio" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-800/80">
      {/* Section Header */}
      <div className="mb-10">
        <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
          // BIOMETRIC_AND_DOSSIER_VERIFICATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-3">
          <span>05 //</span>
          <GlitchText text="IDENTITY_VERIFIED" />
        </h2>
        <p className="font-sans text-sm text-slate-400 mt-1 max-w-2xl">
          Core profile specifications, academic credentials, cryptographic validation, and natural language parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Profile Photo / Biometric HUD Placeholder (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-xl">
            <CornerAccents color="accent" size="md" />

            {/* Top HUD Bar */}
            <div className="px-3 py-2 bg-slate-950/90 border-b border-slate-800 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                BIOMETRIC_LOCK
              </span>
              <span className="text-cyan-400">STATUS: MATCHED</span>
            </div>

            {/* Photo / Avatar Placeholder Slot */}
            <div className="relative aspect-square w-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
              {/* Scanline line overlay */}
              <div className="absolute inset-0 bg-scanline-pattern opacity-30 pointer-events-none" />

              {/* Scanning Laser Animation */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70 animate-scan pointer-events-none" />

              {/* Biometric Reticle & Silhouette */}
              <div className="relative w-36 h-36 rounded-full border border-dashed border-emerald-500/50 flex items-center justify-center bg-cyber-surface/60 group-hover:border-emerald-400 transition-colors">
                <span className="absolute -top-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
                <span className="absolute -bottom-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />

                <div className="text-center font-mono space-y-1">
                  <div className="text-4xl text-emerald-400/90 font-light select-none">
                    AE
                  </div>
                  <div className="text-[9px] text-slate-500 tracking-wider">
                    OPERATOR_PHOTO
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 z-10">
                <Badge variant="accent" size="sm">
                  SECURITY_CLEARANCE: PASS
                </Badge>
              </div>

              <div className="text-[10px] font-mono text-slate-500 mt-2">
                SHA256: 8f9b42...e0c14a
              </div>
            </div>

            {/* Bottom Card Telemetry */}
            <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>CALLSIGN:</span>
              <span className="text-emerald-400 font-bold">{PROFILE_DATA.callsign}</span>
            </div>
          </div>

          {/* Spoken Languages Card */}
          <div className="p-4 rounded border border-slate-800 bg-cyber-card/80 font-mono text-xs space-y-2">
            <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center justify-between">
              <span>NATURAL_LANGUAGES:</span>
              <span className="text-cyan-400">SPEECH_I/O</span>
            </div>
            <div className="space-y-1.5 pt-1">
              {PROFILE_DATA.spokenLanguages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/80"
                >
                  <span className="text-white font-medium">{lang.language}</span>
                  <Badge variant="cyan" size="xs">
                    {lang.proficiency}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Academic Credentials & Bio Statement (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Academic Dossier Card */}
          <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-xl">
            <CornerAccents color="muted" size="sm" />

            <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold tracking-wider">
                ACADEMIC_CREDENTIALS // INSTITUTION_REGISTRY
              </span>
              <Badge variant="accent" size="xs">
                CGPA: {PROFILE_DATA.education.cgpa}
              </Badge>
            </div>

            <div className="p-5 space-y-3 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-white">
                  {PROFILE_DATA.education.degree}
                </h3>
                <span className="text-xs text-slate-500">
                  {PROFILE_DATA.education.period}
                </span>
              </div>

              <div className="text-sm text-cyan-400 font-semibold">
                {PROFILE_DATA.education.institution}, {PROFILE_DATA.education.location}
              </div>

              <div className="p-3 bg-slate-900/50 rounded border border-slate-800/80 text-xs font-sans text-slate-300 leading-relaxed">
                Pursuing comprehensive undergraduate studies in Computer Science and Engineering with an academic CGPA of{" "}
                <span className="text-emerald-300 font-mono font-bold">8.27/10</span>, focused on machine learning architectures, system security protocols, and scalable full-stack engineering.
              </div>
            </div>
          </div>

          {/* First-Person Bio Dossier */}
          <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-xl">
            <CornerAccents color="muted" size="sm" />

            <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 font-mono text-xs flex items-center justify-between">
              <span className="text-slate-300 font-semibold tracking-wider">
                DOSSIER_STATEMENT // AMIRTHA_E
              </span>
              <span className="text-slate-500 text-[11px]">FORMAT: FIRST_PERSON</span>
            </div>

            <div className="p-5 space-y-3 font-sans text-sm text-slate-300 leading-relaxed">
              {PROFILE_DATA.bioParagraphs.map((para, index) => (
                <p
                  key={index}
                  className="pl-3 border-l-2 border-emerald-500/40 bg-slate-900/20 py-1"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Links Footer */}
            <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 font-mono text-xs flex flex-wrap items-center justify-between gap-3">
              <div className="text-slate-500 text-[11px]">
                LOOKING_FOR: AI / FULL-STACK ROLES &amp; RESEARCH COLLABORATIONS
              </div>
              <a
                href="#contact"
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
              >
                <span>OPEN_COMMS</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
