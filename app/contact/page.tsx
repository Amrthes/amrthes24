import React from "react";
import Link from "next/link";
import { ContactSection } from "@/components/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact // Amirtha E",
  description: "Direct communications dispatch console for Amirtha E.",
};

export default function ContactPage() {
  return (
    <div className="py-8 space-y-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 hover:underline"
        >
          <span>←</span>
          <span>RETURN_TO_HOME_INDEX</span>
        </Link>
      </div>
      <ContactSection />
    </div>
  );
}
