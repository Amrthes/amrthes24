import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HeaderBreadcrumb } from "@/components/layout/HeaderBreadcrumb";
import { StickyNav } from "@/components/layout/StickyNav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SystemFooter } from "@/components/layout/SystemFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirtha E // AI Engineer & Full-Stack Developer",
  description:
    "Personal portfolio and system dossier of Amirtha E, specializing in local LLMs, RAG architectures, computer vision tracking, and low-latency systems engineering.",
  keywords: [
    "Amirtha E",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Ollama",
    "LangChain",
    "YOLOv8",
    "FastAPI",
    "Next.js",
    "Bannari Amman Institute of Technology",
  ],
  authors: [{ name: "Amirtha E", url: "https://github.com/Amrthes" }],
  creator: "Amirtha E",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-amrthes.vercel.app",
    title: "Amirtha E // AI Engineer & Full-Stack Developer",
    description:
      "Terminal-styled system dashboard showcasing local LLM deployments, RAG platforms, computer vision telemetry, and hackathon achievements.",
    siteName: "Amirtha E Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirtha E // AI Engineer & Full-Stack Developer",
    description:
      "Terminal-styled system dashboard showcasing local LLM deployments, RAG platforms, computer vision telemetry, and hackathon achievements.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-cyber-bg text-cyber-text antialiased font-sans flex flex-col selection:bg-emerald-400 selection:text-black">
        {/* Subtle scanline overlay for aesthetic depth */}
        <div className="fixed inset-0 pointer-events-none scanline-overlay opacity-20 z-50" />

        {/* Global System Breadcrumb Header */}
        <HeaderBreadcrumb />

        {/* Sticky System Navigation */}
        <StickyNav />

        {/* Fixed Scroll Percentage & Telemetry Indicator */}
        <ScrollProgress />

        {/* Page Content */}
        <main className="flex-1 w-full relative">{children}</main>

        {/* System Telemetry Footer */}
        <SystemFooter />
      </body>
    </html>
  );
}
