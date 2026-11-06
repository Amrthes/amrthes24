export interface Deployment {
  id: string;
  role: string;
  company: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-Site";
  period: string;
  duration: string;
  status: "COMPLETED" | "ACTIVE" | "MAINTENANCE";
  summary: string;
  responsibilities: string[];
  techStack: string[];
  commitHash: string;
  telemetryLogs: string[];
}

export const DEPLOYMENTS: Deployment[] = [
  {
    id: "DEPLOY_INFOSYS_2026",
    role: "Software Engineer Intern",
    company: "Infosys Springboard",
    location: "Remote",
    workMode: "Remote",
    period: "Jul 2026 – Aug 2026",
    duration: "2 Months",
    status: "COMPLETED",
    summary:
      "Engineered an AI-powered adaptive literacy platform integrating voice pronunciation diagnostics, real-time learning telemetry, and localized LLM pedagogical assistance.",
    responsibilities: [
      "Built full-stack web architecture using Next.js for client interfaces and Express with Socket.io for duplex real-time communication.",
      "Integrated local Ollama inference to drive intelligent, low-latency conversational tutoring and customized lesson generation.",
      "Engineered speech pronunciation feedback systems analyzing phoneme-level acoustics for student vocal exercises.",
      "Designed and deployed comprehensive learning analytics pipelines tracking student retention, session pace, and community benchmarks.",
    ],
    techStack: ["Next.js", "Express", "Socket.io", "Ollama", "SQLite", "Speech Processing"],
    commitHash: "git#inf_spr_8a92b",
    telemetryLogs: [
      "[INFO] Socket.io duplex channel established with sub-180ms latency.",
      "[INFO] Local Ollama teacher agent prompt template tuned for adaptive scaffolding.",
      "[INFO] Speech pronunciation analytics module integrated into lesson progress store.",
    ],
  },
  {
    id: "DEPLOY_QIBR_2026",
    role: "Backend Engineer Intern",
    company: "QiBr Technologies",
    location: "Hybrid",
    workMode: "Hybrid",
    period: "Jul 2026 – Sep 2026",
    duration: "3 Months",
    status: "COMPLETED",
    summary:
      "Engineered backend microservices for an AI interior design engine featuring Llama 3.2 conversational guidance, spatial session management, and Dockerized database pipelines.",
    responsibilities: [
      "Architected high-throughput REST and streaming endpoints using FastAPI connected to persistent PostgreSQL datastores.",
      "Integrated Llama 3.2 local model instances via Ollama and semantic embedding pipelines for AI-assisted room redesign dialogues.",
      "Implemented stateful session management tracking multi-turn user prompt history, spatial constraints, and design iterations.",
      "Dockerized the complete full-stack architecture ensuring isolated deployment environments for backend routers, model runners, and database volumes.",
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Ollama", "Llama 3.2", "Docker", "Vector Embeddings"],
    commitHash: "git#qibr_be_f74c1",
    telemetryLogs: [
      "[INFO] FastAPI async connection pool initialized with PostgreSQL 16.",
      "[INFO] Llama 3.2 3B/8B model orchestration configured with Ollama backend.",
      "[INFO] Multi-container Docker Compose deployment verified with persistent volumes.",
    ],
  },
];
