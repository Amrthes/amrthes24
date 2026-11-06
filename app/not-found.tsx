import React from "react";
import Link from "next/link";
import { CornerAccents } from "@/components/ui/CornerAccents";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 font-mono">
      <div className="max-w-md w-full rounded border border-rose-900/50 bg-cyber-card/90 p-8 text-center relative overflow-hidden shadow-2xl">
        <CornerAccents color="accent" size="md" />

        <div className="text-rose-500 text-6xl font-extrabold tracking-widest mb-2">
          404
        </div>
        <div className="text-xs text-rose-400 font-bold uppercase tracking-wider mb-4">
          ERR_TARGET_NODE_NOT_FOUND
        </div>

        <p className="text-slate-400 text-xs font-sans mb-6">
          The requested route does not map to any known system service, process card, or case study module.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all text-xs"
        >
          <span>[ RETURN_TO_ROOT ]</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
