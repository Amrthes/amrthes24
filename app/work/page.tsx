import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { GlitchText } from "@/components/hero/GlitchText";

export const metadata = {
  title: "Work Modules // Amirtha E",
  description: "Comprehensive portfolio of AI, computer vision, and systems engineering projects.",
};

export default function WorkIndexPage() {
  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Breadcrumb Header */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-slate-800/80 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline"
        >
          <span>←</span>
          <span>RETURN_TO_HOME_INDEX</span>
        </Link>
        <span className="text-cyan-400">TOTAL_MODULES: 06</span>
      </div>

      <div>
        <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
          // ARCHIVE_INDEX
        </div>
        <h1 className="text-3xl sm:text-4xl font-mono font-bold text-white flex items-center gap-3">
          <span>02 //</span>
          <GlitchText text="ALL_WORK_MODULES" />
        </h1>
        <p className="font-sans text-sm text-slate-400 mt-2 max-w-2xl">
          Deep-dive architecture case studies covering local LLM tutoring, voicebot RAG systems, real-time video analytics, Linux security engines, parametric fintech, and EEG emotion classification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
