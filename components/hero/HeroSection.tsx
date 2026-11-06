"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { GlitchText } from "./GlitchText";
import { NeuralGraphFallback } from "./NeuralGraphFallback";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";

// Lazy-load Three.js WebGL component with static fallback
const NeuralNodeGraph = dynamic(() => import("./NeuralNodeGraph"), {
  ssr: false,
  loading: () => <NeuralGraphFallback />,
});

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-12 px-4 sm:px-6 overflow-hidden border-b border-slate-800/80"
    >
      {/* Background Grid & Scanline Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-bg/40 to-cyber-bg pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
        {/* Left Column: Command & Identity Text */}
        <div className="lg:col-span-7 space-y-6">
          {/* System Telemetry Header */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-semibold">&gt; INITIALIZING_SHELL:</span>
            <Badge variant="accent" size="xs">
              SYS_OPERATIONAL
            </Badge>
            <span className="text-slate-600">//</span>
            <span className="text-cyan-400 font-mono text-[11px]">NODE: BANNARI_AMMAN_INST</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              [ 00 // CORE_OPERATOR ]
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold tracking-tight text-white flex flex-wrap items-baseline gap-2">
              <GlitchText text={PROFILE_DATA.name} className="text-slate-100" />
              <span className="text-emerald-400 text-3xl sm:text-5xl animate-pulse">_</span>
            </h1>
            <p className="text-lg sm:text-2xl font-mono text-emerald-400 font-medium tracking-tight">
              &gt; {PROFILE_DATA.tagline}
            </p>
          </div>

          {/* Brief Description */}
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl border-l-2 border-emerald-500/40 pl-4 py-1 bg-emerald-950/10">
            Specialized in deploying local LLM runtimes, edge computer vision telemetry, and kernel-level Linux command security. Multi-time national and international hackathon finalist with enterprise production internships.
          </p>

          {/* System Metrics Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {PROFILE_DATA.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 bg-cyber-card/80 border border-slate-800 rounded relative group hover:border-emerald-500/50 transition-colors"
              >
                <CornerAccents size="sm" color="muted" />
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base font-mono font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-[9px] font-sans text-slate-500 truncate mt-0.5">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs sm:text-sm">
            <Link
              href="/resume"
              className="px-5 py-2.5 rounded bg-emerald-500 text-black font-bold tracking-wider hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all flex items-center gap-2"
            >
              <span>[ VIEW_RESUME ]</span>
              <span className="text-xs">↗</span>
            </Link>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded border border-slate-700 bg-cyber-panel/60 text-slate-200 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20 transition-all flex items-center gap-2"
            >
              <span>[ INITIALIZE_CONTACT ]</span>
              <span className="text-xs">✉</span>
            </a>

            <a
              href={PROFILE_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors flex items-center gap-1.5"
            >
              <span>GITHUB</span>
              <span className="text-[11px]">⌥</span>
            </a>
          </div>
        </div>

        {/* Right Column: WebGL Neural Node Graph */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full relative rounded-lg border border-slate-800/80 bg-cyber-card/40 backdrop-blur-sm overflow-hidden p-2 sm:p-4">
            <CornerAccents size="md" color="accent" />
            
            {/* Top Telemetry Overlay */}
            <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 px-2 py-1 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>NEURAL_NODE_GRAPH // 3D_WEBGL</span>
              </div>
              <span className="text-emerald-400">FPS: 60 // 55 NODES</span>
            </div>

            {/* Three.js Canvas */}
            <NeuralNodeGraph />

            {/* Bottom Telemetry Overlay */}
            <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 px-2 pt-2 border-t border-slate-800/60">
              <span>INTERACTIVE // DRAG / HOVER TO ROTATE</span>
              <span className="text-cyan-400/80">[ SYNAPSE_LINK: ACTIVE ]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full pt-8 z-10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-emerald-500">&gt;</span>
          <span className="text-slate-400">system_exec --scroll-down</span>
          <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse" />
        </div>

        <a
          href="#logs"
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group cursor-pointer"
        >
          <span className="tracking-widest uppercase">Scroll to Explore</span>
          <span className="group-hover:translate-y-1 transition-transform text-emerald-400">↓</span>
        </a>

        <div className="hidden sm:block text-slate-600 text-[11px]">
          TERMINAL_STYLE // gd03_INSPIRATION
        </div>
      </div>
    </section>
  );
}
