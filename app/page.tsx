import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { LogsSection } from "@/components/logs/LogsSection";
import { WorkSection } from "@/components/work/WorkSection";
import { StackSection } from "@/components/stack/StackSection";
import { SystemExperienceSection } from "@/components/system/SystemExperienceSection";
import { BioSection } from "@/components/bio/BioSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 00 // HERO */}
      <HeroSection />

      {/* 01 // LOGS */}
      <LogsSection />

      {/* 02 // WORK */}
      <WorkSection />

      {/* 03 // STACK */}
      <StackSection />

      {/* 04 // SYSTEM */}
      <SystemExperienceSection />

      {/* 05 // BIO */}
      <BioSection />

      {/* 06 // CONTACT */}
      <ContactSection />
    </div>
  );
}
