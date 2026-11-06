export interface Project {
  slug: string;
  pid: string;
  title: string;
  tagline: string;
  summary: string;
  category: "LLM & AGENTS" | "COMPUTER VISION" | "SYSTEM SECURITY" | "FINTECH" | "NEUROSCIENCE";
  featured: boolean;
  stack: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  architectureOverview: string;
  architectureNodes: {
    id: string;
    label: string;
    sublabel: string;
    type: "input" | "process" | "ai" | "storage" | "output";
  }[];
  architectureFlow: { from: string; to: string; label?: string }[];
  outcome: string[];
  githubUrl: string; // TODO: Replace placeholder with specific project repository when public
  demoUrl?: string;
  visualType: "audio-waveform" | "rag-flow" | "camera-tracking" | "terminal-security" | "pricing-matrix" | "eeg-waves";
}

export const PROJECTS: Project[] = [
  {
    slug: "literacy-learning-platform",
    pid: "PID_1091",
    title: "AI-Powered Literacy Learning Platform",
    tagline: "Adaptive literacy education with streaming local LLMs and real-time voice feedback",
    summary: "An intelligent learning system combining local LLM tutoring, voice pronunciation analysis, and real-time telemetry analytics to empower literacy acquisition.",
    category: "LLM & AGENTS",
    featured: true,
    stack: ["Next.js", "Express", "Socket.io", "SQLite", "Ollama"],
    metrics: [
      { label: "STREAM LATENCY", value: "<180ms" },
      { label: "FEEDBACK", value: "Real-time Voice" },
      { label: "ENGINE", value: "Local LLM / Ollama" },
    ],
    problem:
      "Traditional online literacy platforms provide static exercises that lack dynamic interactive speech coaching, immediate pedagogical feedback, or adaptive difficulty pacing suited for diverse learners.",
    approach: [
      "Engineered an interactive student interface in Next.js providing personalized visual lessons and voice pronunciation drills.",
      "Implemented a low-latency Express & Socket.io duplex stream for bi-directional audio streaming and continuous feedback.",
      "Integrated local Ollama inference to stream pedagogical guidance dynamically without relying on costly external API keys.",
      "Built real-time learning analytics dashboards tracking phonetic accuracy, comprehension speed, and historical mastery in SQLite.",
    ],
    architectureOverview:
      "Client audio capture -> Socket.io Gateway -> Speech Pronunciation Engine -> Local Ollama LLM Stream -> Real-time SQLite Analytics Sync",
    architectureNodes: [
      { id: "client", label: "Next.js UI", sublabel: "Audio & WebSockets", type: "input" },
      { id: "gateway", label: "Express Server", sublabel: "Socket.io Duplex", type: "process" },
      { id: "llm", label: "Ollama Runtime", sublabel: "Streaming Teacher Agent", type: "ai" },
      { id: "voice", label: "Speech Engine", sublabel: "Phonetic Evaluation", type: "process" },
      { id: "db", label: "SQLite DB", sublabel: "Progress & Metrics", type: "storage" },
      { id: "analytics", label: "Live Dashboard", sublabel: "Telemetry & Insights", type: "output" },
    ],
    architectureFlow: [
      { from: "client", to: "gateway", label: "Audio stream" },
      { from: "gateway", to: "voice", label: "Acoustic features" },
      { from: "gateway", to: "llm", label: "Prompt context" },
      { from: "voice", to: "gateway", label: "Accuracy score" },
      { from: "llm", to: "gateway", label: "Token stream" },
      { from: "gateway", to: "db", label: "Record session" },
      { from: "gateway", to: "client", label: "Real-time feedback" },
    ],
    outcome: [
      "Achieved sub-200ms token-streaming response times running on self-hosted local Ollama instances.",
      "Delivered real-time voice pronunciation analysis that pinpoints phonetic mispronunciations instantly.",
      "Provided personalized lesson progression adapts dynamically to individual learner performance.",
    ],
    // TODO: Connect official repository URL when public
    githubUrl: "https://github.com/Amrthes/literacy-learning-platform",
    visualType: "audio-waveform",
  },
  {
    slug: "student-support-voicebot",
    pid: "PID_2048",
    title: "AI-Powered Student Support Voicebot",
    tagline: "Voice-driven RAG knowledge base & real-time academic records assistant",
    summary: "Voice-first institutional assistant integrating vector search over campus documents with direct academic ERP queries for instant CGPA and attendance answers.",
    category: "LLM & AGENTS",
    featured: true,
    stack: ["FastAPI", "LangChain", "Ollama", "PostgreSQL/pgvector", "HuggingFace", "Google OAuth"],
    metrics: [
      { label: "VECTOR DB", value: "pgvector" },
      { label: "AUTH", value: "Google OAuth 2.0" },
      { label: "RETRIEVAL", value: "RAG Hybrid" },
    ],
    problem:
      "Students navigate fragmented campus portals to find syllabus details, academic policies, attendance percentages, and GPA metrics, resulting in administrative backlogs and slow query resolution.",
    approach: [
      "Built a FastAPI asynchronous backend with LangChain handling multi-source orchestration between tabular student records and unstructured PDFs.",
      "Implemented a PostgreSQL + pgvector vector store powered by HuggingFace embeddings for accurate campus knowledge retrieval.",
      "Configured Google OAuth 2.0 authentication to securely bind student sessions to their private academic records (CGPA, attendance, timetable).",
      "Integrated local Ollama LLMs to generate concise, voice-synthesized conversational answers with strict contextual grounding.",
    ],
    architectureOverview:
      "Student Voice / Text -> Google OAuth Auth Guard -> FastAPI Engine -> LangChain RAG -> PostgreSQL / pgvector & Student ERP -> Ollama Speech Response",
    architectureNodes: [
      { id: "user", label: "Voice / Web UI", sublabel: "Authenticated Session", type: "input" },
      { id: "auth", label: "Google OAuth", sublabel: "Role-Based Token Verification", type: "process" },
      { id: "api", label: "FastAPI Router", sublabel: "LangChain Orchestrator", type: "process" },
      { id: "vec", label: "pgvector DB", sublabel: "HuggingFace Embeddings", type: "storage" },
      { id: "erp", label: "Student Data DB", sublabel: "CGPA & Attendance", type: "storage" },
      { id: "llm", label: "Ollama Engine", sublabel: "Contextual RAG Synthesis", type: "ai" },
    ],
    architectureFlow: [
      { from: "user", to: "auth", label: "Auth challenge" },
      { from: "auth", to: "api", label: "Authorized query" },
      { from: "api", to: "vec", label: "Semantic search" },
      { from: "api", to: "erp", label: "SQL lookup" },
      { from: "vec", to: "llm", label: "Context chunks" },
      { from: "erp", to: "llm", label: "Student metrics" },
      { from: "llm", to: "user", label: "Voice synthesis reply" },
    ],
    outcome: [
      "Enabled instant zero-friction voice queries for academic attendance records and cumulative CGPA.",
      "Achieved high-precision factual answers from institutional PDF documents without hallucination.",
      "Secured private student records behind Google OAuth with encrypted session states.",
    ],
    // TODO: Connect official repository URL when public
    githubUrl: "https://github.com/Amrthes/student-support-voicebot",
    visualType: "rag-flow",
  },
  {
    slug: "video-analytics-activity-tracking",
    pid: "PID_3019",
    title: "AI Video Analytics & Human Activity Tracking",
    tagline: "Multi-camera human tracking, dwell time computation, and zone transition analysis",
    summary: "Edge-ready computer vision telemetry pipeline combining YOLOv8 detection with ByteTrack state tracking to map human movement dynamics and activity timelines.",
    category: "COMPUTER VISION",
    featured: true,
    stack: ["Python", "Flask", "YOLOv8", "ByteTrack", "OpenCV", "NumPy"],
    metrics: [
      { label: "DETECTOR", value: "YOLOv8 Realtime" },
      { label: "TRACKER", value: "ByteTrack Associator" },
      { label: "TELEMETRY", value: "Zone / Dwell Matrix" },
    ],
    problem:
      "Facility surveillance systems often record passive footage without generating structured business intelligence on spatial traffic, dwell duration, or security perimeter breaches.",
    approach: [
      "Deployed YOLOv8 for robust object and pedestrian detection under variable lighting and camera angles.",
      "Integrated ByteTrack with low-score bounding box association to eliminate track fragmentation during severe occlusions.",
      "Engineered appearance embedding vectors and custom polygon zone logic to monitor dwell times and cross-zone transitions.",
      "Constructed a lightweight Flask web dashboard streaming live telemetry overlays and generating retrospective activity timelines.",
    ],
    architectureOverview:
      "RTSP Video Feed -> Frame Preprocessing (OpenCV) -> YOLOv8 Detection -> ByteTrack Association -> Zone Analytics Engine -> Flask Telemetry Dashboard",
    architectureNodes: [
      { id: "feed", label: "RTSP Video Stream", sublabel: "Multi-Camera Feed", type: "input" },
      { id: "cv", label: "OpenCV Pipeline", sublabel: "Frame Normalization", type: "process" },
      { id: "yolo", label: "YOLOv8 Model", sublabel: "Object & Person BBoxes", type: "ai" },
      { id: "bytetrack", label: "ByteTrack", sublabel: "Kalman Filter & Trajectory", type: "process" },
      { id: "zones", label: "Spatial Logic", sublabel: "Dwell Time & Transitions", type: "process" },
      { id: "dash", label: "Flask Dashboard", sublabel: "Live Timeline & Heatmaps", type: "output" },
    ],
    architectureFlow: [
      { from: "feed", to: "cv", label: "Video frames" },
      { from: "cv", to: "yolo", label: "Normalized image" },
      { from: "yolo", to: "bytetrack", label: "Detections & confidence" },
      { from: "bytetrack", to: "zones", label: "Unique Track IDs" },
      { from: "zones", to: "dash", label: "Telemetry metrics" },
    ],
    outcome: [
      "Consistent tracking across camera occlusions with minimal identity switches.",
      "Real-time dwell time measurement accurate within specified security polygons.",
      "Generated detailed time-stamped activity timelines for operational security analysis.",
    ],
    // TODO: Connect official repository URL when public
    githubUrl: "https://github.com/Amrthes/video-analytics-activity-tracking",
    visualType: "camera-tracking",
  },
  {
    slug: "safeexec-command-security",
    pid: "PID_4096",
    title: "SafeExec: AI Linux Command Security Engine",
    tagline: "Kernel-level Bash hook parser with eBPF telemetry, XGBoost classification, and LLM intent auditing",
    summary: "Proactive terminal security engine intercepting Linux commands before shell execution, auditing malicious intent via AST parsing, eBPF system calls, and XGBoost models.",
    category: "SYSTEM SECURITY",
    featured: true,
    stack: ["Bash hooks", "AST parsing", "eBPF", "XGBoost", "Python", "LLM Intent Analysis"],
    metrics: [
      { label: "INTERCEPT", value: "Pre-execution Hook" },
      { label: "MODEL", value: "XGBoost + LLM Intent" },
      { label: "MONITOR", value: "eBPF Syscall Trace" },
    ],
    problem:
      "Destructive or obfuscated shell commands (accidental `rm -rf`, privilege escalation exploits, supply-chain injected payloads) run unchecked, compromising server environments instantly.",
    approach: [
      "Developed a custom Bash pre-execution hook layer that captures raw command strings before execution.",
      "Implemented Abstract Syntax Tree (AST) token parsing to de-obfuscate nested subshells, base64 pipes, and variable expansions.",
      "Trained an XGBoost classification model to evaluate risk vectors against known adversarial command sequences.",
      "Coupled with eBPF probes for active syscall monitoring and an LLM intent analyzer for ambiguous high-privilege operations.",
    ],
    architectureOverview:
      "Terminal Command -> Pre-exec Bash Hook -> AST Tokenizer -> XGBoost Risk Scorer -> eBPF Syscall Monitor -> LLM Intent Evaluator -> Exec / Terminate",
    architectureNodes: [
      { id: "shell", label: "Terminal / Bash", sublabel: "User Keystroke Input", type: "input" },
      { id: "hook", label: "Bash Trap Hook", sublabel: "Pre-Execution Interception", type: "process" },
      { id: "ast", label: "AST Parser", sublabel: "Deobfuscation & Tokenization", type: "process" },
      { id: "xgb", label: "XGBoost Classifier", sublabel: "Heuristic Risk Scoring", type: "ai" },
      { id: "ebpf", label: "eBPF Telemetry", sublabel: "Kernel Syscall Guard", type: "storage" },
      { id: "audit", label: "LLM Intent Agent", sublabel: "Privilege Escalation Review", type: "ai" },
      { id: "enforce", label: "Security Enforcer", sublabel: "ALLOW / ISOLATE / BLOCK", type: "output" },
    ],
    architectureFlow: [
      { from: "shell", to: "hook", label: "Command entered" },
      { from: "hook", to: "ast", label: "Raw string" },
      { from: "ast", to: "xgb", label: "Feature vector" },
      { from: "xgb", to: "ebpf", label: "If suspicious" },
      { from: "xgb", to: "audit", label: "If ambiguous" },
      { from: "audit", to: "enforce", label: "Verdict policy" },
      { from: "enforce", to: "shell", label: "Permit or abort" },
    ],
    outcome: [
      "Zero-latency pre-exec interception preventing unauthorized disk wipers and reverse shells.",
      "High-accuracy risk classification on obfuscated bash pipelines.",
      "Granular audit trails detailing intercepted command semantics for system administrators.",
    ],
    // TODO: Connect official repository URL when public
    githubUrl: "https://github.com/Amrthes/SafeExec-security-engine",
    visualType: "terminal-security",
  },
  {
    slug: "gig-worker-insurance-platform",
    pid: "PID_5120",
    title: "Gig-Worker Parametric Insurance Platform",
    tagline: "GuideWire Diamond Tier: Dockerized dynamic risk pricing with automated instant claims",
    summary: "Parametric micro-insurance engine designed for gig economy delivery workers, featuring weather and telematics triggers, fraud detection heuristics, and instant payouts.",
    category: "FINTECH",
    featured: true,
    stack: ["Docker", "Next.js", "Express", "PostgreSQL", "GuideWire APIs", "Dynamic Pricing Model"],
    metrics: [
      { label: "HONOR", value: "Diamond Tier (GuideWire)" },
      { label: "SETTLEMENT", value: "Automated Instant" },
      { label: "CONTAINERS", value: "Docker Compose" },
    ],
    problem:
      "Gig delivery personnel face immediate income disruption from extreme weather, vehicular breakdowns, and localized curfews without access to flexible, affordable micro-insurance policies.",
    approach: [
      "Architected a containerized microservice suite adhering to GuideWire modern insurance integration patterns.",
      "Built dynamic risk pricing algorithms calculating real-time premiums based on weather APIs, route exposure, and historical telemetry.",
      "Engineered automated parametric claim triggers (e.g., rainfall > 50mm or flood alerts) that bypass manual claims filing.",
      "Incorporated fraud detection heuristics verifying delivery app telematics against weather station feeds before executing instant payouts.",
    ],
    architectureOverview:
      "Worker App -> Dockerized API Gateway -> Dynamic Pricing Engine -> Telemetry & Weather Feeds -> Fraud Scorer -> Instant Claim Payouts",
    architectureNodes: [
      { id: "worker", label: "Worker Portal", sublabel: "Next.js Mobile-First UI", type: "input" },
      { id: "gw", label: "API Gateway", sublabel: "Dockerized Express Router", type: "process" },
      { id: "oracle", label: "Weather Oracle", sublabel: "Parametric Trigger Feeds", type: "storage" },
      { id: "pricing", label: "Dynamic Pricing", sublabel: "Actuarial Risk Engine", type: "ai" },
      { id: "fraud", label: "Fraud Detector", sublabel: "Cross-Telemetry Verifier", type: "process" },
      { id: "payout", label: "Payout System", sublabel: "Instant Disbursement API", type: "output" },
    ],
    architectureFlow: [
      { from: "worker", to: "gw", label: "Active shift telemetry" },
      { from: "oracle", to: "gw", label: "Severe weather alert" },
      { from: "gw", to: "pricing", label: "Shift parameters" },
      { from: "gw", to: "fraud", label: "Claim trigger data" },
      { from: "fraud", to: "payout", label: "Verified claim" },
      { from: "payout", to: "worker", label: "Immediate wallet transfer" },
    ],
    outcome: [
      "Awarded Diamond Tier in the GuideWire Hackathon for innovative actuarial design.",
      "Eliminated manual paperwork with 100% automated parametric claims settlement.",
      "Fully containerized deployment with reproducible Docker configurations.",
    ],
    // TODO: Connect official repository URL when public
    githubUrl: "https://github.com/Amrthes/gig-worker-insurance-guidewire",
    visualType: "pricing-matrix",
  },
  {
    slug: "eeg-emotion-analysis",
    pid: "PID_6244",
    title: "NeuroHack EEG Emotion Analysis",
    tagline: "NeuroHack Finalist: DREAMER dataset emotion classification with SVM RBF kernel optimization",
    summary: "Neuroscience biosignal classification pipeline extracting spectral band power features from the DREAMER EEG dataset to predict valence and arousal affective states.",
    category: "NEUROSCIENCE",
    featured: true,
    stack: ["Python", "Scikit-learn", "SciPy", "NumPy", "Matplotlib", "DREAMER Dataset"],
    metrics: [
      { label: "HONOR", value: "NeuroHack 2026 Finalist" },
      { label: "DATASET", value: "DREAMER EEG" },
      { label: "ALGORITHM", value: "SVM (RBF) Best Mean F1" },
    ],
    problem:
      "Decoding affective human emotion from raw multi-channel electroencephalogram (EEG) signals is notoriously difficult due to ocular artifacts, high noise, and inter-subject signal variance.",
    approach: [
      "Preprocessed raw DREAMER dataset EEG channels with bandpass filtering (0.5 - 45 Hz) to remove baseline drift and power line interference.",
      "Extracted Differential Entropy (DE) and Power Spectral Density (PSD) across Theta, Alpha, Beta, and Gamma frequency bands.",
      "Evaluated multiple machine learning classifiers with rigorous cross-validation across subjects.",
      "Identified Support Vector Machines with Radial Basis Function kernel (SVM RBF) as achieving the highest mean F1 score across valence and arousal dimensions.",
    ],
    architectureOverview:
      "DREAMER 14-Channel EEG -> Bandpass Filter & Artifact Removal -> PSD / DE Feature Extraction -> SVM (RBF) Classifier -> Affective State Prediction",
    architectureNodes: [
      { id: "eeg", label: "DREAMER EEG", sublabel: "14-Channel Biosignals", type: "input" },
      { id: "filter", label: "Bandpass Filter", sublabel: "0.5–45 Hz Artifact Removal", type: "process" },
      { id: "psd", label: "Feature Extraction", sublabel: "PSD & Differential Entropy", type: "process" },
      { id: "svm", label: "SVM (RBF Kernel)", sublabel: "Hyperparameter Tuned Model", type: "ai" },
      { id: "metrics", label: "Evaluation Suite", sublabel: "Cross-Subject F1 Validation", type: "storage" },
      { id: "affect", label: "State Classifier", sublabel: "Valence / Arousal Output", type: "output" },
    ],
    architectureFlow: [
      { from: "eeg", to: "filter", label: "Raw microvolts" },
      { from: "filter", to: "psd", label: "Cleaned signals" },
      { from: "psd", to: "svm", label: "Frequency band vectors" },
      { from: "svm", to: "metrics", label: "Validation splits" },
      { from: "svm", to: "affect", label: "Final predicted quadrant" },
    ],
    outcome: [
      "Recognized as a Finalist at NeuroHack 2026 for high-accuracy biosignal decoding.",
      "Established SVM (RBF) as the leading classifier with the best mean F1 benchmark on the DREAMER dataset.",
      "Engineered automated feature extraction pipeline handling subject variance reliably.",
    ],
    // TODO: Connect official repository URL when public
    githubUrl: "https://github.com/Amrthes/neurohack-eeg-emotion-analysis",
    visualType: "eeg-waves",
  },
];
