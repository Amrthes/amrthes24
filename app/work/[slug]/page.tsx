import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { MiniProjectVisual } from "@/components/work/MiniProjectVisual";
import { Metadata } from "next";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} // Case Study // Amirtha E`,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-10">
      {/* Back Link & Breadcrumb Header */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-slate-800/80 pb-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline hover:text-emerald-300 transition-colors"
        >
          <span>←</span>
          <span>RETURN_TO_SYSTEM_WORK</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-bold">{project.pid}</span>
          <span className="text-slate-600">//</span>
          <span className="text-cyan-400 uppercase">{project.category}</span>
        </div>
      </div>

      {/* Case Study Header Card */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-2xl p-6 sm:p-8 space-y-4">
        <CornerAccents color="accent" size="md" />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="accent" size="xs">
              SPECIFICATION_VERIFIED
            </Badge>
            <span className="text-slate-500 text-xs font-mono">// ARCHITECTURE_CASE_STUDY</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-emerald-400">
            &gt; {project.tagline}
          </p>
        </div>

        {/* Mini Project Visual Preview */}
        <div className="pt-2">
          <MiniProjectVisual type={project.visualType} />
        </div>

        {/* Executive Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 font-mono text-xs">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="p-3 bg-slate-900/60 rounded border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase block">{metric.label}</span>
              <span className="text-emerald-300 font-bold text-sm block mt-1">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1. Problem Statement */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative p-6 space-y-3">
        <CornerAccents color="muted" size="sm" />
        <div className="font-mono text-xs text-rose-400 tracking-wider uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          <span>01 // PROBLEM_STATEMENT &amp; BOTTLENECKS</span>
        </div>
        <p className="text-sm sm:text-base font-sans text-slate-200 leading-relaxed pl-3 border-l-2 border-rose-500/40">
          {project.problem}
        </p>
      </div>

      {/* 2. System Architecture Diagram (SVG) */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative p-6 space-y-4">
        <CornerAccents color="cyan" size="md" />
        <div className="flex items-center justify-between font-mono text-xs">
          <div className="text-cyan-400 tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>02 // SYSTEM_ARCHITECTURE_DIAGRAM</span>
          </div>
          <span className="text-slate-500 text-[10px]">PIPELINE_SCHEMATIC</span>
        </div>

        <div className="p-4 bg-slate-950/80 rounded border border-slate-800/80 font-mono text-xs space-y-3">
          <div className="text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
            &gt; PIPELINE_OVERVIEW: {project.architectureOverview}
          </div>

          {/* Dynamic SVG Architecture Node Flow */}
          <div className="w-full overflow-x-auto py-2">
            <div className="min-w-[600px] flex items-center justify-between gap-3 px-2">
              {project.architectureNodes.map((node, i) => (
                <React.Fragment key={node.id}>
                  {/* Node Box */}
                  <div className="p-3 rounded border border-slate-700 bg-slate-900 text-center flex-1 space-y-1 relative group hover:border-emerald-400 transition-colors">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">
                      [{node.type}]
                    </span>
                    <span className="font-bold text-white text-xs block group-hover:text-emerald-300">
                      {node.label}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {node.sublabel}
                    </span>
                  </div>

                  {/* Inter-node connector arrow */}
                  {i < project.architectureNodes.length - 1 && (
                    <div className="flex flex-col items-center justify-center text-emerald-400 shrink-0">
                      <span className="text-xs font-mono">→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Approach & Engineering Implementation */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative p-6 space-y-4">
        <CornerAccents color="muted" size="sm" />
        <div className="font-mono text-xs text-emerald-400 tracking-wider uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>03 // ENGINEERING_APPROACH &amp; DESIGN</span>
        </div>
        <ul className="space-y-3 text-sm font-sans text-slate-300">
          {project.approach.map((step, idx) => (
            <li
              key={idx}
              className="p-3 bg-slate-900/40 rounded border border-slate-800/80 flex items-start gap-3"
            >
              <span className="font-mono text-emerald-400 text-xs font-bold pt-0.5 shrink-0">
                [{idx + 1}]
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Tech Stack Breakdown */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative p-6 space-y-4">
        <CornerAccents color="muted" size="sm" />
        <div className="font-mono text-xs text-slate-400 tracking-wider uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span>04 // DEPLOYED_TECHNOLOGY_STACK</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-emerald-300 font-semibold flex items-center gap-1.5"
            >
              <span className="text-slate-500">&gt;</span>
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 5. Outcome & Benchmarks */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative p-6 space-y-4">
        <CornerAccents color="accent" size="sm" />
        <div className="font-mono text-xs text-emerald-400 tracking-wider uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>05 // MEASURED_OUTCOMES &amp; BENCHMARKS</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.outcome.map((res, i) => (
            <div
              key={i}
              className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 text-xs font-sans text-slate-200 leading-relaxed"
            >
              <span className="font-mono text-emerald-400 text-[10px] block mb-1">
                KEY_RESULT_0{i + 1}
              </span>
              {res}
            </div>
          ))}
        </div>
      </div>

      {/* 6. GitHub Link & Source Action */}
      <div className="rounded border border-slate-800 bg-slate-950/90 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div>
          <div className="text-slate-400 font-semibold mb-0.5">SOURCE_CODE_REPOSITORY</div>
          <div className="text-[11px] text-slate-500">
            {/* TODO: Connect public GitHub repo link once marked public */}
            Target: {project.githubUrl}
          </div>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded bg-emerald-500 text-black font-bold tracking-wider hover:bg-emerald-400 transition-all flex items-center gap-2"
        >
          <span>[ EXPLORE_ON_GITHUB ]</span>
          <span>↗</span>
        </a>
      </div>

      {/* Next / Previous Project Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/80 font-mono text-xs">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <span>← PREV: {prevProject.pid}</span>
          </Link>
        ) : (
          <span className="text-slate-600">FIRST_MODULE</span>
        )}

        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <span>NEXT: {nextProject.pid} →</span>
          </Link>
        ) : (
          <span className="text-slate-600">LAST_MODULE</span>
        )}
      </div>
    </div>
  );
}
