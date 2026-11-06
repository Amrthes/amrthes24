"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { TerminalContactForm } from "./TerminalContactForm";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { GlitchText } from "@/components/hero/GlitchText";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10">
        <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
          // COMMS_LINK &amp; INQUIRIES
        </div>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-3">
          <span>06 //</span>
          <GlitchText text="CONNECT_INTERFACE" />
        </h2>
        <p className="font-sans text-sm text-slate-400 mt-1 max-w-2xl">
          Establish direct communication for AI engineering roles, open-source R&amp;D, or hackathon collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Channels List (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-xl">
            <CornerAccents color="muted" size="sm" />

            <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold tracking-wider">
                PRIMARY_CHANNELS // VERIFIED
              </span>
              <span className="text-slate-500 text-[10px]">ALL_CHANNELS_OPEN</span>
            </div>

            <div className="p-5 space-y-3 font-mono text-xs">
              {/* Email Link */}
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="p-3 rounded border border-slate-800 bg-slate-900/40 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all flex items-center justify-between group block"
              >
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">EMAIL_TRANSMISSION</div>
                  <div className="text-white group-hover:text-emerald-300 font-semibold mt-0.5">
                    {PROFILE_DATA.contact.email}
                  </div>
                </div>
                <span className="text-slate-600 group-hover:text-emerald-400 text-sm">✉</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={PROFILE_DATA.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-slate-800 bg-slate-900/40 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all flex items-center justify-between group block"
              >
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">PROFESSIONAL_NETWORK</div>
                  <div className="text-white group-hover:text-emerald-300 font-semibold mt-0.5">
                    linkedin.com/in/amrthes
                  </div>
                </div>
                <span className="text-slate-600 group-hover:text-emerald-400 text-sm">↗</span>
              </a>

              {/* GitHub Link */}
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-slate-800 bg-slate-900/40 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all flex items-center justify-between group block"
              >
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">SOURCE_REPOSITORIES</div>
                  <div className="text-white group-hover:text-emerald-300 font-semibold mt-0.5">
                    github.com/Amrthes
                  </div>
                </div>
                <span className="text-slate-600 group-hover:text-emerald-400 text-sm">⌥</span>
              </a>

              {/* LeetCode Link (Marked with clear TODO comment) */}
              {/* TODO: Connect user's confirmed LeetCode profile handle */}
              <a
                href={PROFILE_DATA.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-slate-800/80 bg-slate-900/20 hover:border-amber-500/40 transition-all flex items-center justify-between group block"
              >
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">ALGORITHMIC_PROFILE</div>
                  <div className="text-slate-400 group-hover:text-amber-300 font-semibold mt-0.5">
                    LeetCode [Profile Handle Pending]
                  </div>
                </div>
                <span className="text-amber-500/60 group-hover:text-amber-400 text-sm">⚡</span>
              </a>
            </div>

            {/* Quick Status Bar */}
            <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 font-mono text-[11px] text-slate-500 flex items-center justify-between">
              <span>LOCATION: TAMIL NADU, INDIA</span>
              <span className="text-emerald-400">TIMEZONE: IST (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Right: Dispatch Terminal Form (7 cols) */}
        <div className="lg:col-span-7">
          <TerminalContactForm />
        </div>
      </div>
    </section>
  );
}
