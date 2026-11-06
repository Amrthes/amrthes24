# Amirtha E // Portfolio & System Dashboard

A high-performance personal portfolio website engineered for **Amirtha E** (AI Engineer & Full-Stack Developer), designed in the dark terminal and system dashboard aesthetic inspired by `gd03.me`.

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18 / 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom cyberpunk terminal theme, CRT scanline overlay, telemetry tokens)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS Keyframes
- **3D WebGL Element**: [Three.js](https://threejs.org/) interactive neural network node graph (lazy-loaded with zero-SSR, respects `prefers-reduced-motion`, with SVG wireframe fallback)
- **Icons & UI**: [Lucide React](https://lucide.dev/), Monospace typography (`JetBrains Mono`, `Inter`)
- **Deployment**: Optimized for [Vercel](https://vercel.com/) with static pre-rendering (`generateStaticParams`)

---

## 🗂️ Project Architecture

```
my_portfolio/
├── app/
│   ├── layout.tsx              # Root layout with breadcrumbs, sticky nav, scroll tracker & metadata
│   ├── page.tsx                # Master dashboard landing page (Sections 00 - 06)
│   ├── globals.css             # Cyberpunk theme styles, scanline overlay, scrollbars
│   ├── work/
│   │   ├── page.tsx            # All projects archive index
│   │   └── [slug]/
│   │       └── page.tsx        # In-depth architectural case studies with SVG diagrams
│   ├── resume/
│   │   └── page.tsx            # Embedded PDF viewer + structured dossier + direct download
│   ├── contact/
│   │   └── page.tsx            # Dedicated comms interface
│   └── not-found.tsx           # Cyberpunk 404 terminal error page
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx     # Hero command header, CTAs, and WebGL container
│   │   ├── NeuralNodeGraph.tsx # Lightweight Three.js rotating neural node graph
│   │   ├── NeuralGraphFallback.tsx # Static SVG fallback for mobile / reduced motion
│   │   └── GlitchText.tsx      # Terminal text scramble / decode animation
│   ├── logs/
│   │   └── LogsSection.tsx     # Live terminal activity feed with severity filters
│   ├── work/
│   │   ├── WorkSection.tsx     # Grid of featured projects
│   │   ├── ProjectCard.tsx     # Large terminal card with metrics & PID tags
│   │   └── MiniProjectVisual.tsx # Interactive visual widgets (equalizer, camera tracker, EEG)
│   ├── stack/
│   │   └── StackSection.tsx    # Tech Arsenal with fake PIDs & >executable.sh hover cards
│   ├── system/
│   │   └── SystemExperienceSection.tsx # Experience deployment timeline with commit hashes
│   ├── bio/
│   │   └── BioSection.tsx      # Verified identity dossier, academic records & languages
│   ├── contact/
│   │   ├── ContactSection.tsx  # Channel links (Email, LinkedIn, GitHub, LeetCode)
│   │   └── TerminalContactForm.tsx # Client-side validated terminal dispatcher
│   ├── layout/
│   │   ├── HeaderBreadcrumb.tsx# Root > Home > Index live status bar
│   │   ├── StickyNav.tsx       # Sticky navbar with section indicators
│   │   ├── ScrollProgress.tsx  # Fixed 0%–100% telemetry scroll indicator
│   │   └── SystemFooter.tsx    # Terminal telemetry footer & legal
│   └── ui/
│       ├── Badge.tsx           # Terminal badges (accent, cyan, amber, danger)
│       ├── CornerAccents.tsx   # HUD corner brackets [+]
│       ├── StatusPill.tsx      # Glowing status indicator
│       └── TerminalWindow.tsx  # Framed terminal window component
├── data/
│   ├── profile.ts              # Core profile, degree, CGPA, bio, and contact links
│   ├── logs.ts                 # Timestamped awards, hackathon finishes, and deployments
│   ├── projects.ts             # 6 detailed case study specs & architecture node flows
│   ├── stack.ts                # Tech Arsenal broken down into PID processes
│   └── experience.ts           # Industry internship deployment records
├── public/
│   └── Amirtha_E_Resume.pdf    # Official resume document
├── scripts/
│   └── generate_resume.js      # Utility script to generate the resume PDF
├── tailwind.config.ts          # Terminal color tokens & scanline patterns
└── tsconfig.json
```

---

## 🛠️ Development & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Run the Production Server
```bash
npm run start
```

---

## 🚀 Deployment on Vercel

The portfolio is pre-configured for instant zero-configuration deployment on **Vercel**:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Amirtha E portfolio"
   git remote add origin https://github.com/Amrthes/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **"Deploy"**.
6. The site will be built with static page optimization (`/`, `/resume`, `/work/[slug]`) and served on Vercel's global edge network.

---

## ⚙️ Content Editing & Maintenance

All content is cleanly decoupled in the `/data` folder for frictionless updates:
- **Profile / Bio / Contact**: [`data/profile.ts`](file:///c:/Users/amrth/Downloads/my_portfolio/data/profile.ts)
- **Activity & Awards Feed**: [`data/logs.ts`](file:///c:/Users/amrth/Downloads/my_portfolio/data/logs.ts)
- **Projects & Case Studies**: [`data/projects.ts`](file:///c:/Users/amrth/Downloads/my_portfolio/data/projects.ts)
- **Tech Arsenal (PIDs)**: [`data/stack.ts`](file:///c:/Users/amrth/Downloads/my_portfolio/data/stack.ts)
- **Experience Timeline**: [`data/experience.ts`](file:///c:/Users/amrth/Downloads/my_portfolio/data/experience.ts)
- **Resume File**: Place your updated PDF at [`public/Amirtha_E_Resume.pdf`](file:///c:/Users/amrth/Downloads/my_portfolio/public/Amirtha_E_Resume.pdf)

> **TODO Markers**: Open links marked with `// TODO:` (e.g. LeetCode profile handle) in [`data/profile.ts`](file:///c:/Users/amrth/Downloads/my_portfolio/data/profile.ts) to update personal URLs as they become available.
