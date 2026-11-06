import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#06080a",
          surface: "#0b0f17",
          panel: "#101622",
          card: "#0d131e",
          border: "#1b2533",
          borderBright: "#2a3b50",
          accent: "#00ff66", // electric green
          accentGlow: "rgba(0, 255, 102, 0.15)",
          cyan: "#00f0ff", // electric cyan
          cyanGlow: "rgba(0, 240, 255, 0.15)",
          amber: "#ffb800",
          danger: "#ff3366",
          text: "#e6edf3",
          muted: "#7d8b99",
          dim: "#475569",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(27, 37, 51, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 37, 51, 0.4) 1px, transparent 1px)",
        "scanline-pattern": "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
      },
      animation: {
        "pulse-fast": "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-sweep": "radar 4s linear infinite",
        "glitch-flicker": "flicker 0.15s ease infinite alternate",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flicker: {
          "0%": { opacity: "0.95" },
          "100%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
