"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StatusPill } from "@/components/ui/StatusPill";

export function HeaderBreadcrumb() {
  const pathname = usePathname();
  const [timeString, setTimeString] = useState<string>("");
  const [latency] = useState<number>(24);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toISOString().replace("T", " ").substring(0, 19) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format breadcrumb based on pathname
  const getBreadcrumbs = () => {
    if (pathname === "/") {
      return (
        <span className="flex items-center gap-2">
          <span className="text-slate-500">ROOT</span>
          <span className="text-slate-600">/</span>
          <span className="text-emerald-400 font-semibold tracking-wider">HOME</span>
          <span className="text-slate-600">&gt;</span>
          <span className="text-slate-400">INDEX.SYS</span>
        </span>
      );
    }
    const segments = pathname.split("/").filter(Boolean);
    return (
      <span className="flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="text-slate-500 hover:text-emerald-400 transition-colors">
          ROOT
        </Link>
        {segments.map((seg, idx) => {
          const isLast = idx === segments.length - 1;
          const href = "/" + segments.slice(0, idx + 1).join("/");
          return (
            <React.Fragment key={seg}>
              <span className="text-slate-600">/</span>
              {isLast ? (
                <span className="text-emerald-400 font-semibold tracking-wider uppercase">
                  {seg}
                </span>
              ) : (
                <Link href={href} className="text-slate-400 hover:text-emerald-400 transition-colors uppercase">
                  {seg}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </span>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-cyber-bg/90 backdrop-blur-md px-4 sm:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs text-slate-400">
        {/* Left: Breadcrumbs & Node ID */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-sm animate-pulse" />
            <span className="hidden sm:inline-block text-slate-500 font-bold">NODE_01:</span>
          </div>
          <div className="text-[11px] sm:text-xs">{getBreadcrumbs()}</div>
        </div>

        {/* Right: Telemetry & Status */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-500">
            <span>PING:</span>
            <span className="text-cyan-400">{latency}ms</span>
            <span className="text-slate-600">|</span>
            <span>TIME:</span>
            <span className="text-slate-400">{timeString || "SYNCING..."}</span>
          </div>

          <StatusPill status="online" label="SYS_ONLINE" className="py-0.5 px-2 text-[10px]" />
        </div>
      </div>
    </header>
  );
}
