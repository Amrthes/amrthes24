"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  code: string;
  href: string;
  isExternalPage?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "INDEX", code: "00", href: "/#hero" },
  { id: "logs", label: "LOGS", code: "01", href: "/#logs" },
  { id: "work", label: "WORK", code: "02", href: "/#work" },
  { id: "stack", label: "STACK", code: "03", href: "/#stack" },
  { id: "system", label: "SYSTEM", code: "04", href: "/#system" },
  { id: "bio", label: "BIO", code: "05", href: "/#bio" },
  { id: "resume", label: "RESUME", code: "06", href: "/resume", isExternalPage: true },
  { id: "contact", label: "CONTACT", code: "07", href: "/#contact" },
];

export function StickyNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/resume")) setActiveSection("resume");
      else if (pathname.startsWith("/work")) setActiveSection("work");
      else if (pathname.startsWith("/contact")) setActiveSection("contact");
      return;
    }

    const sectionElements = ["hero", "logs", "work", "stack", "system", "bio", "contact"].map((id) =>
      document.getElementById(id)
    );

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className="sticky top-[41px] z-30 w-full border-b border-slate-800/60 bg-cyber-bg/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Brand Callout */}
          <Link
            href="/#hero"
            className="flex items-center gap-2 font-mono text-sm tracking-wider font-bold text-slate-100 hover:text-emerald-400 transition-colors group"
          >
            <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">&gt;</span>
            <span className="tracking-widest">AMIRTHA_E</span>
            <span className="text-[10px] text-slate-500 font-normal hidden sm:inline">v2.6</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-sm transition-all duration-200 border flex items-center gap-1.5",
                    isActive
                      ? "border-emerald-500/60 bg-emerald-950/30 text-emerald-300 shadow-[0_0_12px_rgba(0,255,102,0.12)]"
                      : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-800 hover:bg-slate-900/40"
                  )}
                >
                  <span className="text-[10px] text-slate-600 font-normal">[{item.code}]</span>
                  <span>{item.label}</span>
                  {isActive && <span className="w-1 h-1 rounded-full bg-emerald-400 ml-0.5" />}
                </Link>
              );
            })}
          </div>

          {/* Quick Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/resume"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 font-mono text-xs hover:bg-emerald-500 hover:text-black transition-all font-medium"
            >
              <span>RESUME.PDF</span>
              <span className="text-[10px]">↓</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded border border-slate-800 text-slate-400 hover:text-emerald-400 font-mono text-xs flex items-center gap-1"
              aria-label="Toggle navigation menu"
            >
              <span>{isMobileMenuOpen ? "[CLOSE]" : "[NAV]"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-800/80 font-mono text-xs grid grid-cols-2 gap-2 bg-cyber-bg/95">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded border flex items-center justify-between",
                    isActive
                      ? "border-emerald-500/60 bg-emerald-950/40 text-emerald-400"
                      : "border-slate-800 text-slate-400 hover:bg-slate-900/50"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-slate-600">[{item.code}]</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
