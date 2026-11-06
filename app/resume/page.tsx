import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { DEPLOYMENTS } from "@/data/experience";
import { ACTIVITY_LOGS } from "@/data/logs";
import { STACK_DATA } from "@/data/stack";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { Badge } from "@/components/ui/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume // Amirtha E // AI Engineer",
  description: "Curriculum Vitae and engineering credentials of Amirtha E.",
};

export default function ResumePage() {
  return (
    <div className="py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-8 font-mono text-xs">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline"
        >
          <span>←</span>
          <span>RETURN_TO_HOME_INDEX</span>
        </Link>

        {/* Download Button */}
        <div className="flex items-center gap-3">
          <a
            href="/Amirtha_E_Resume.pdf"
            download="Amirtha_E_Resume.pdf"
            className="px-4 py-2 rounded bg-emerald-500 text-black font-bold tracking-wider hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>[ DOWNLOAD_RESUME.PDF ]</span>
            <span>↓</span>
          </a>
          <a
            href="/Amirtha_E_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
          >
            OPEN_RAW_PDF ↗
          </a>
        </div>
      </div>

      {/* Header Info Banner */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 p-6 relative overflow-hidden space-y-3">
        <CornerAccents color="accent" size="md" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] text-emerald-400 font-bold mb-1">
              // CURRICULUM_VITAE // OFFICIAL_SYSTEM_RECORD
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-sm text-cyan-400 mt-0.5">
              &gt; {PROFILE_DATA.tagline}
            </p>
          </div>

          <div className="text-right space-y-1 text-slate-400 text-[11px] self-start md:self-auto">
            <div>EMAIL: {PROFILE_DATA.contact.email}</div>
            <div>
              LINKEDIN:{" "}
              <a
                href={PROFILE_DATA.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                in/amrthes
              </a>
            </div>
            <div>
              GITHUB:{" "}
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                github.com/Amrthes
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded PDF Viewer Panel */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-2xl space-y-0">
        <CornerAccents color="muted" size="sm" />

        {/* PDF Viewer Header */}
        <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-slate-200">
              EMBEDDED_PDF_VIEWER: /public/Amirtha_E_Resume.pdf
            </span>
          </div>
          <span className="text-slate-500 text-[10px]">PAGES: 1 OF 1</span>
        </div>

        {/* Iframe Viewer */}
        <div className="w-full h-[650px] bg-slate-950 relative">
          <iframe
            src="/Amirtha_E_Resume.pdf#toolbar=0"
            className="w-full h-full border-none"
            title="Amirtha E Resume PDF"
          />
        </div>

        {/* Fallback & Download notice */}
        <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-slate-500 text-[11px]">
          <span>
            If the embedded PDF does not render on your device, use the direct download button above.
          </span>
          <a
            href="/Amirtha_E_Resume.pdf"
            download="Amirtha_E_Resume.pdf"
            className="text-emerald-400 hover:underline font-bold"
          >
            Direct Download (PDF) ↓
          </a>
        </div>
      </div>

      {/* Structured Text Dossier (Accessible / Mobile Fallback) */}
      <div className="rounded border border-slate-800 bg-cyber-card/90 p-6 sm:p-8 space-y-6">
        <CornerAccents color="cyan" size="sm" />

        <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            // STRUCTURED_RESUME_TEXT_VIEW
          </h2>
          <Badge variant="cyan" size="xs">
            PLAINTEXT_SYNCED
          </Badge>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
            &gt; 01. EDUCATION
          </h3>
          <div className="pl-4 border-l-2 border-emerald-500/40 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-slate-200 font-bold">
              <span>{PROFILE_DATA.education.degree}</span>
              <span className="text-slate-500 text-[11px]">{PROFILE_DATA.education.period}</span>
            </div>
            <div className="text-slate-400">
              {PROFILE_DATA.education.institution}, {PROFILE_DATA.education.location}
            </div>
            <div className="text-emerald-400 font-bold">
              CGPA: {PROFILE_DATA.education.cgpa}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
            &gt; 02. INTERNSHIPS &amp; INDUSTRY EXPERIENCE
          </h3>
          {DEPLOYMENTS.map((deploy) => (
            <div key={deploy.id} className="pl-4 border-l-2 border-slate-700 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-slate-200 font-bold">
                <span>
                  {deploy.role} — {deploy.company} ({deploy.workMode})
                </span>
                <span className="text-slate-500 text-[11px]">{deploy.period}</span>
              </div>
              <p className="font-sans text-slate-300">{deploy.summary}</p>
              <ul className="list-disc pl-4 font-sans text-slate-400 space-y-1 text-[11px]">
                {deploy.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hackathon Awards & Achievements */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
            &gt; 03. HONORS &amp; HACKATHON RECOGNITIONS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4">
            {ACTIVITY_LOGS.map((log) => (
              <div key={log.id} className="p-2.5 rounded bg-slate-900/40 border border-slate-800">
                <div className="text-emerald-300 font-bold">{log.event}</div>
                <div className="text-slate-400 font-sans text-[11px] mt-0.5">{log.detail}</div>
                <div className="text-slate-600 text-[10px] mt-1">{log.rawDate}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
            &gt; 04. TECHNICAL SKILLS
          </h3>
          <div className="pl-4 space-y-2">
            {STACK_DATA.map((cat) => (
              <div key={cat.pid} className="space-y-1">
                <span className="text-slate-400 font-semibold">{cat.name}:</span>{" "}
                <span className="text-slate-300">
                  {cat.items.map((it) => it.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spoken Languages */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
            &gt; 05. SPOKEN LANGUAGES
          </h3>
          <div className="pl-4 flex items-center gap-4 text-slate-300">
            {PROFILE_DATA.spokenLanguages.map((l) => (
              <span key={l.language}>
                {l.language}: <span className="text-emerald-400 font-bold">{l.proficiency}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
