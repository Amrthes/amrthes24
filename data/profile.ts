export interface ProfileData {
  name: string;
  callsign: string;
  tagline: string;
  systemStatus: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
  };
  bioParagraphs: string[];
  spokenLanguages: Array<{ language: string; proficiency: string }>;
  contact: {
    email: string;
    linkedIn: string;
    github: string;
    leetcode: string; // TODO: Replace placeholder with user's actual LeetCode profile handle once confirmed
  };
  metrics: Array<{ label: string; value: string; detail: string }>;
}

export const PROFILE_DATA: ProfileData = {
  name: "Amirtha E",
  callsign: "AMRITHE_SYS_01",
  tagline: "AI Engineer & Full-Stack Developer",
  systemStatus: "ONLINE // OPERATIONAL",
  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "Bannari Amman Institute of Technology",
    location: "Erode, India",
    period: "Sep 2024 – Present",
    cgpa: "8.27 / 10",
  },
  bioParagraphs: [
    "AI Engineer and Full-Stack Developer specialized in building intelligent agentic systems, RAG architectures, and computer vision pipelines.",
    "Proven track record across international and national hackathons, securing finalist ranks at IEEE YESIST12 (Malaysia), NeuroHack, and GuideWire Diamond Tier.",
    "Experienced in production deployments with local LLM runtimes (Ollama, Llama 3.2), low-latency audio processing, and Linux kernel-level command security engines.",
    "Driven by building resilient, low-latency systems that bridge modern machine learning models with robust full-stack engineering."
  ],
  spokenLanguages: [
    { language: "Tamil", proficiency: "Fluent" },
    { language: "English", proficiency: "Professional" },
  ],
  contact: {
    email: "amrthes24@gmail.com",
    linkedIn: "https://www.linkedin.com/in/amrthes",
    github: "https://github.com/Amrthes",
    // TODO: Insert confirmed LeetCode username when available
    leetcode: "https://leetcode.com/u/TODO_Amrthes",
  },
  metrics: [
    { label: "CGPA", value: "8.27/10", detail: "Bannari Amman Inst. of Tech" },
    { label: "HACKATHONS", value: "6+ RECOGNITIONS", detail: "IEEE YESIST12, LudoHack, GuideWire" },
    { label: "INTERNSHIPS", value: "2 DEPLOYED", detail: "Infosys Springboard, QiBr Tech" },
    { label: "SYSTEM STATUS", value: "100% OPERATIONAL", detail: "Active for Opportunities" },
  ],
};
