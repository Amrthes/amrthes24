export interface StackCategory {
  pid: string;
  name: string;
  description: string;
  badge: string;
  items: Array<{
    name: string;
    executable: string;
    versionHint?: string;
    category?: string;
    level: string;
  }>;
}

export const STACK_DATA: StackCategory[] = [
  {
    pid: "PID_1042",
    name: "CORE_LANGUAGES",
    description: "Low-level system languages, compiled runtimes, and relational database query dialects.",
    badge: "SYS_LANG_LAYER",
    items: [
      { name: "Python", executable: ">python.sh", versionHint: "3.11+", level: "Primary" },
      { name: "Java", executable: ">java.sh", versionHint: "JDK 21", level: "Core" },
      { name: "JavaScript", executable: ">node.sh", versionHint: "ES2024", level: "Full-Stack" },
      { name: "C", executable: ">gcc_kernel.sh", versionHint: "C17", level: "Systems" },
      { name: "SQL (Postgres)", executable: ">psql_pgvector.sh", versionHint: "v16+", level: "Database" },
      { name: "MySQL", executable: ">mysql.sh", versionHint: "v8.0", level: "Relational" },
    ],
  },
  {
    pid: "PID_2084",
    name: "FRAMEWORKS_AND_TOOLS",
    description: "Application servers, real-time gateways, responsive styling, and API integration environments.",
    badge: "APP_FRAMEWORK_LAYER",
    items: [
      { name: "Next.js", executable: ">next_app_router.sh", versionHint: "v14/15", level: "Production" },
      { name: "Node.js", executable: ">node_runtime.sh", versionHint: "LTS", level: "Backend" },
      { name: "FastAPI", executable: ">uvicorn_fastapi.sh", versionHint: "Async", level: "High Perf" },
      { name: "Express", executable: ">express_server.sh", versionHint: "REST/WS", level: "Backend" },
      { name: "React Native", executable: ">react_native.sh", versionHint: "Mobile", level: "Client" },
      { name: "Tailwind CSS", executable: ">tailwind_jit.sh", versionHint: "Utility", level: "UI/UX" },
      { name: "Git", executable: ">git_vcs.sh", versionHint: "CLI/CI", level: "Workflow" },
      { name: "Postman", executable: ">postman_api.sh", versionHint: "Testing", level: "Verification" },
    ],
  },
  {
    pid: "PID_9000",
    name: "AI_DATA_MATRIX",
    description: "Deep learning frameworks, computer vision trackers, vector embeddings, and large multimodal models.",
    badge: "NEURAL_ACCELERATOR",
    items: [
      { name: "PyTorch", executable: ">torch_cuda.sh", versionHint: "Deep Learning", level: "Primary" },
      { name: "TensorFlow", executable: ">tf_engine.sh", versionHint: "Deep Learning", level: "Model Dev" },
      { name: "Scikit-learn", executable: ">sklearn_pipeline.sh", versionHint: "Classifiers", level: "Statistical ML" },
      { name: "NumPy", executable: ">numpy_tensor.sh", versionHint: "Vector Math", level: "Compute" },
      { name: "Pandas", executable: ">pandas_dataframe.sh", versionHint: "Data Wrangling", level: "Analytics" },
      { name: "OpenCV", executable: ">opencv_stream.sh", versionHint: "Vision Ops", level: "Edge CV" },
      { name: "YOLO", executable: ">yolov8_detector.sh", versionHint: "Real-time Detection", level: "Inference" },
      { name: "BERT", executable: ">bert_encoder.sh", versionHint: "Transformers", level: "NLP" },
      { name: "LLMs", executable: ">ollama_llama3.sh", versionHint: "Local Inference", level: "RAG & Agents" },
      { name: "VLMs", executable: ">vision_language.sh", versionHint: "Multimodal", level: "Vision-Language" },
    ],
  },
];
