"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { GlitchText } from "@/components/hero/GlitchText";

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "LLM & AGENTS", "COMPUTER VISION", "SYSTEM SECURITY", "FINTECH", "NEUROSCIENCE"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "ALL") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="work" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
            // ARTIFACTS_AND_REPOSITORIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-3">
            <span>02 //</span>
            <GlitchText text="FEATURED_WORK_MODULES" />
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-1 max-w-2xl">
            Selected engineering architectures spanning local LLM applications, multimodal vision pipelines, eBPF systems security, and biometric classifiers.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 flex-wrap font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded border transition-all ${
                selectedCategory === cat
                  ? "border-emerald-500 bg-emerald-950/40 text-emerald-400 font-bold"
                  : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
