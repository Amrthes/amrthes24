export interface ActivityLog {
  id: string;
  timestamp: string;
  rawDate: string;
  category: "ACHIEVEMENT" | "DEPLOYMENT" | "SYSTEM";
  event: string;
  detail: string;
  badge: string;
  severity: "success" | "warning" | "info" | "highlight";
}

export const ACTIVITY_LOGS: ActivityLog[] = [
  {
    id: "LOG_001",
    timestamp: "2026.07.15 09:00:00",
    rawDate: "Jul 2026",
    category: "DEPLOYMENT",
    event: "Internships Deployment Initialized",
    detail: "Commenced simultaneous industry engineering roles at Infosys Springboard (Software Engineer Intern) and QiBr Technologies (Backend Engineer Intern).",
    badge: "SYS_DUAL_DEPLOY",
    severity: "highlight",
  },
  {
    id: "LOG_002",
    timestamp: "2026.04.22 14:30:15",
    rawDate: "Apr 2026",
    category: "ACHIEVEMENT",
    event: "NeuroHack 2026 Finalist",
    detail: "Recognized as Finalist for EEG emotion analysis model built on the DREAMER dataset, achieving highest mean F1 benchmark using optimized SVM (RBF).",
    badge: "FINALIST",
    severity: "success",
  },
  {
    id: "LOG_003",
    timestamp: "2025.11.10 18:45:00",
    rawDate: "Nov 2025",
    category: "ACHIEVEMENT",
    event: "2nd Runner-Up, LudoHack 2025",
    detail: "Awarded 2nd Runner-Up podium finish in an intensive competitive hackathon featuring over 100+ participating engineering teams.",
    badge: "PODIUM_RANK",
    severity: "highlight",
  },
  {
    id: "LOG_004",
    timestamp: "2025.09.28 11:20:45",
    rawDate: "Sep 2025",
    category: "ACHIEVEMENT",
    event: "GuideWire Hackathon — Diamond Tier",
    detail: "Achieved elite Diamond Tier distinction for building a dockerized gig-worker parametric micro-insurance platform with dynamic pricing and automated fraud triggers.",
    badge: "DIAMOND_TIER",
    severity: "success",
  },
  {
    id: "LOG_005",
    timestamp: "2025.07.18 16:15:30",
    rawDate: "Jul 2025",
    category: "ACHIEVEMENT",
    event: "IEEE YESIST12 Finalist (Malaysia)",
    detail: "Selected as an International Finalist representing technological innovation at the prestigious IEEE YESIST12 held in Malaysia.",
    badge: "GLOBAL_FINALIST",
    severity: "highlight",
  },
  {
    id: "LOG_006",
    timestamp: "2025.03.14 10:05:12",
    rawDate: "Mar 2025",
    category: "ACHIEVEMENT",
    event: "C-DAC Kernal Hackathon — Top 20 Finalist",
    detail: "Ranked among the Top 20 Finalists across India in high-stakes kernel and systems computing challenges hosted by C-DAC.",
    badge: "TOP_20_FINALIST",
    severity: "info",
  },
];
