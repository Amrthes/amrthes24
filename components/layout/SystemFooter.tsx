import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { CornerAccents } from "@/components/ui/CornerAccents";

export function SystemFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-cyber-surface/90 pt-12 pb-8 px-4 sm:px-6 relative overflow-hidden font-mono text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          {/* Identity & Status */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-slate-100 text-sm tracking-widest uppercase">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans">
              {PROFILE_DATA.tagline}
            </p>
            <div className="text-[11px] text-emerald-400/90 bg-emerald-950/30 border border-emerald-900/50 p-2 rounded relative">
              <CornerAccents size="sm" color="accent" />
              <div className="flex items-center justify-between">
                <span>SYSTEM_STATUS:</span>
                <span className="font-bold">OPERATIONAL</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 mt-1">
                <span>SECURITY_LEVEL:</span>
                <span>AUTHENTICATED</span>
              </div>
            </div>
          </div>

          {/* System Navigation */}
          <div className="space-y-2">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] font-semibold">
              // DIRECTORY_INDEX
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link href="/#logs" className="hover:text-emerald-400 transition-colors">
                  &gt; 01 // ACTIVITY_LOGS
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-emerald-400 transition-colors">
                  &gt; 02 // WORK_MODULES
                </Link>
              </li>
              <li>
                <Link href="/#stack" className="hover:text-emerald-400 transition-colors">
                  &gt; 03 // TECH_ARSENAL
                </Link>
              </li>
              <li>
                <Link href="/#system" className="hover:text-emerald-400 transition-colors">
                  &gt; 04 // DEPLOYMENT_TIMELINE
                </Link>
              </li>
              <li>
                <Link href="/#bio" className="hover:text-emerald-400 transition-colors">
                  &gt; 05 // IDENTITY_VERIFIED
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect_Via */}
          <div className="space-y-2">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] font-semibold">
              // CONNECT_VIA
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500">✉</span>
                  <span>{PROFILE_DATA.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500">⌥</span>
                  <span>github.com/Amrthes</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500">⚑</span>
                  <span>linkedin.com/in/amrthes</span>
                </a>
              </li>
              <li>
                {/* TODO: Update with confirmed LeetCode profile link */}
                <a
                  href={PROFILE_DATA.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-500"
                >
                  <span className="text-amber-500">⚡</span>
                  <span>LeetCode [Profile Pending]</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Terminal Telemetry */}
          <div className="space-y-2">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] font-semibold">
              // TELEMETRY_FEED
            </span>
            <div className="p-3 bg-cyber-bg border border-slate-800 rounded font-mono text-[11px] text-slate-400 space-y-1">
              <div className="text-slate-500">&gt; telemetry --ping</div>
              <div className="text-cyan-400">RTT: 24ms (SSL_SECURE)</div>
              <div className="text-slate-500">&gt; host --info</div>
              <div className="text-slate-400">HOST: VERCEL_EDGE // INDIA</div>
              <div className="text-emerald-400/90">&gt; LIGHTHOUSE: 90+ TARGET</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <div>
            © {currentYear} {PROFILE_DATA.name}. Built with Next.js App Router, TypeScript, Tailwind CSS &amp; Three.js.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/resume" className="hover:text-emerald-400 transition-colors">
              RESUME.SYS
            </Link>
            <span className="text-slate-700">|</span>
            <a href="#hero" className="hover:text-emerald-400 transition-colors">
              BACK_TO_TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
