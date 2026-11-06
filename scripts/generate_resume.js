const fs = require("fs");
const path = require("path");

// Function to generate a standard compliant, clean PDF file without external heavy binaries
function createResumePdf() {
  const contentStream = `
BT
/F1 18 Tf
50 740 Td
(AMIRTHA E - RESUME) Tj
0 -20 Td
/F1 11 Tf
(AI Engineer & Full-Stack Developer) Tj
0 -15 Td
/F2 9 Tf
(Email: amrthes24@gmail.com | GitHub: github.com/Amrthes | LinkedIn: linkedin.com/in/amrthes) Tj
0 -25 Td
/F1 12 Tf
(EDUCATION) Tj
0 -15 Td
/F1 10 Tf
(B.E. Computer Science and Engineering | Bannari Amman Institute of Technology, Erode) Tj
0 -14 Td
/F2 9 Tf
(Period: Sep 2024 - Present | CGPA: 8.27 / 10) Tj
0 -25 Td
/F1 12 Tf
(INDUSTRY EXPERIENCE) Tj
0 -15 Td
/F1 10 Tf
(Software Engineer Intern | Infosys Springboard [Remote] | Jul 2026 - Aug 2026) Tj
0 -14 Td
/F2 9 Tf
(- Engineered AI literacy platform with Next.js, Express, Socket.io, and local Ollama LLMs.) Tj
0 -13 Td
(- Built voice pronunciation analysis, real-time analytics, and personalized curriculum modules.) Tj
0 -18 Td
/F1 10 Tf
(Backend Engineer Intern | QiBr Technologies [Hybrid] | Jul 2026 - Sep 2026) Tj
0 -14 Td
/F2 9 Tf
(- Developed AI interior design backend services using FastAPI, PostgreSQL, and Ollama.) Tj
0 -13 Td
(- Orchestrated Llama 3.2 models and vector embeddings in a Dockerized multi-service architecture.) Tj
0 -25 Td
/F1 12 Tf
(HONORS & HACKATHONS) Tj
0 -15 Td
/F2 9 Tf
(- IEEE YESIST12 Finalist [Malaysia International]) Tj
0 -13 Td
(- 2nd Runner-Up, LudoHack 2025 [100+ competing engineering teams]) Tj
0 -13 Td
(- GuideWire Hackathon, Diamond Tier [Parametric micro-insurance platform]) Tj
0 -13 Td
(- NeuroHack 2026 Finalist [EEG emotion analysis with SVM RBF kernel optimization]) Tj
0 -13 Td
(- C-DAC Kernal Hackathon, Top 20 Finalist across India) Tj
0 -25 Td
/F1 12 Tf
(TECHNICAL SKILLS) Tj
0 -15 Td
/F2 9 Tf
(- Languages: Python, Java, JavaScript, C, SQL [Postgres/pgvector], MySQL) Tj
0 -13 Td
(- Frameworks & Tools: Next.js, Node.js, FastAPI, Express, React Native, Tailwind CSS, Git) Tj
0 -13 Td
(- ML & AI: PyTorch, TensorFlow, Scikit-learn, OpenCV, YOLOv8, ByteTrack, BERT, LLMs, VLMs) Tj
0 -25 Td
/F1 12 Tf
(LANGUAGES) Tj
0 -15 Td
/F2 9 Tf
(Tamil [Fluent], English [Professional]) Tj
ET
`.trim();

  const streamLength = Buffer.byteLength(contentStream, "utf-8");

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n`,
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `6 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
  ];

  let header = "%PDF-1.4\n";
  let body = "";
  let xref = "xref\n0 7\n0000000000 65535 f \n";
  let offset = header.length;

  for (let i = 0; i < objects.length; i++) {
    const objStr = objects[i];
    const padOffset = offset.toString().padStart(10, "0");
    xref += `${padOffset} 00000 n \n`;
    body += objStr;
    offset += objStr.length;
  }

  const startxref = offset;
  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const pdfData = header + body + xref + trailer;

  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const targetPath = path.join(publicDir, "Amirtha_E_Resume.pdf");
  fs.writeFileSync(targetPath, pdfData, "binary");
  console.log("PDF created successfully at: " + targetPath);
}

createResumePdf();
