"use client";

import React, { useState } from "react";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { PROFILE_DATA } from "@/data/profile";

export function TerminalContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "ERR_PARAM_REQUIRED: SENDER_ID";
    if (!formData.email.trim()) {
      errs.email = "ERR_PARAM_REQUIRED: RETURN_ADDR";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "ERR_SYNTAX: INVALID_EMAIL_FORMAT";
    }
    if (!formData.subject.trim()) errs.subject = "ERR_PARAM_REQUIRED: PACKET_HEADER";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "ERR_PAYLOAD_TOO_SHORT: MIN_10_CHARS";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("transmitting");
    setStatusMessage("PACKET_ENCRYPTION_INITIATED -> TRANSMITTING TO DISPATCH_NODE...");

    // Simulate encrypted network transmission
    setTimeout(() => {
      setStatus("success");
      setStatusMessage("TRANSMISSION_ACK_RECEIVED: MESSAGE DISPATCHED SUCCESSFULLY.");

      // Open mailto fallback option
      const mailtoUrl = `mailto:${PROFILE_DATA.contact.email}?subject=${encodeURIComponent(
        `[PORTFOLIO_CONTACT] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`
      )}`;

      // Offer direct mail client fallback
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <div className="rounded border border-slate-800 bg-cyber-card/90 overflow-hidden relative shadow-2xl">
      <CornerAccents color="muted" size="sm" />

      {/* Terminal Form Header */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <span className="text-white font-semibold">COMMS_DISPATCH_TERMINAL</span>
        </div>
        <span className="text-slate-500 text-[10px]">PROTOCOL: SECURE_SSL_P2P</span>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 font-mono text-xs">
        {/* Name Field */}
        <div className="space-y-1">
          <label className="text-slate-400 block font-semibold">
            &gt; SENDER_IDENTITY: <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Alex Mercer / Lead Recruiter"
            className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
          />
          {errors.name && <p className="text-rose-400 text-[10px]">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-slate-400 block font-semibold">
            &gt; RETURN_ADDRESS (EMAIL): <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. contact@domain.com"
            className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
          />
          {errors.email && <p className="text-rose-400 text-[10px]">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div className="space-y-1">
          <label className="text-slate-400 block font-semibold">
            &gt; PACKET_SUBJECT: <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. AI Engineering Collaboration / Opportunity"
            className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
          />
          {errors.subject && <p className="text-rose-400 text-[10px]">{errors.subject}</p>}
        </div>

        {/* Message Payload */}
        <div className="space-y-1">
          <label className="text-slate-400 block font-semibold">
            &gt; MESSAGE_PAYLOAD: <span className="text-rose-400">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Type your message, opportunity specifications, or inquiry..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-mono transition-colors resize-y"
          />
          {errors.message && <p className="text-rose-400 text-[10px]">{errors.message}</p>}
        </div>

        {/* Status Telemetry Banner */}
        {statusMessage && (
          <div
            className={`p-3 rounded border text-[11px] font-mono ${
              status === "success"
                ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
                : status === "transmitting"
                ? "bg-cyan-950/40 border-cyan-500/50 text-cyan-300 animate-pulse"
                : "bg-rose-950/40 border-rose-500/50 text-rose-300"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* Submit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={status === "transmitting"}
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-emerald-500 text-black font-bold tracking-wider hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all font-mono disabled:opacity-50 cursor-pointer"
          >
            {status === "transmitting" ? "[ TRANSMITTING... ]" : "[ DISPATCH_MESSAGE ]"}
          </button>

          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="text-[11px] text-slate-400 hover:text-emerald-400 underline underline-offset-4 font-mono transition-colors"
          >
            Or launch local mail client directly ({PROFILE_DATA.contact.email})
          </a>
        </div>
      </form>
    </div>
  );
}
