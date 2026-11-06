import React from "react";

export function NeuralGraphFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none opacity-40 select-none">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[480px] max-h-[480px] animate-pulse"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="180" stroke="#1b2533" strokeDasharray="4 4" strokeWidth="1" />
        <circle cx="250" cy="250" r="100" stroke="#00ff66" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="250" cy="250" r="40" stroke="#00f0ff" strokeOpacity="0.3" strokeWidth="1" />

        {/* Neural Network Nodes */}
        <g stroke="#00ff66" strokeOpacity="0.3" strokeWidth="1">
          <line x1="120" y1="180" x2="250" y2="120" />
          <line x1="250" y1="120" x2="380" y2="190" />
          <line x1="380" y1="190" x2="350" y2="340" />
          <line x1="350" y1="340" x2="250" y2="390" />
          <line x1="250" y1="390" x2="140" y2="330" />
          <line x1="140" y1="330" x2="120" y2="180" />
          
          {/* Inner Mesh */}
          <line x1="120" y1="180" x2="250" y2="250" />
          <line x1="250" y1="120" x2="250" y2="250" />
          <line x1="380" y1="190" x2="250" y2="250" />
          <line x1="350" y1="340" x2="250" y2="250" />
          <line x1="250" y1="390" x2="250" y2="250" />
          <line x1="140" y1="330" x2="250" y2="250" />
        </g>

        {/* Nodes */}
        <circle cx="250" cy="250" r="6" fill="#00ff66" className="drop-shadow-[0_0_8px_#00ff66]" />
        <circle cx="120" cy="180" r="4" fill="#00f0ff" />
        <circle cx="250" cy="120" r="4" fill="#00ff66" />
        <circle cx="380" cy="190" r="4" fill="#00f0ff" />
        <circle cx="350" cy="340" r="4" fill="#00ff66" />
        <circle cx="250" cy="390" r="4" fill="#00f0ff" />
        <circle cx="140" cy="330" r="4" fill="#00ff66" />
      </svg>
    </div>
  );
}
