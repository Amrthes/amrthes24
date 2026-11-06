import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { MiniProjectVisual } from "./MiniProjectVisual";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative rounded border border-slate-800 bg-cyber-card/90 overflow-hidden flex flex-col justify-between group hover:border-emerald-500/60 transition-all duration-300 shadow-lg">
      <CornerAccents color="muted" size="sm" />

      {/* Top Bar with PID and Category */}
      <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold tracking-wider">{project.pid}</span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-400 text-[11px]">{project.category}</span>
        </div>
        <Badge variant="cyan" size="xs">
          PRODUCTION_READY
        </Badge>
      </div>

      {/* Mini Animated Visual */}
      <div className="p-4 bg-slate-950/40 border-b border-slate-800/80">
        <MiniProjectVisual type={project.visualType} />
      </div>

      {/* Main Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400/90 font-medium">
            &gt; {project.tagline}
          </p>
          <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80 font-mono text-[10px]">
          {project.metrics.map((m) => (
            <div key={m.label} className="p-1.5 rounded bg-slate-900/50 border border-slate-800/60">
              <div className="text-slate-500 uppercase truncate">{m.label}</div>
              <div className="text-emerald-300 font-bold truncate mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button: View Case Study */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
          <Link
            href={`/work/${project.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded font-mono text-xs font-bold text-emerald-400 border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-500 hover:text-black transition-all"
          >
            <span>[ VIEW_CASE_STUDY ]</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
