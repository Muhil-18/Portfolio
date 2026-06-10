# S Muhilan — Personal Portfolio Website
## Complete Phased Build Prompts for Antigravity (Vercel Deployment)

---

## PRE-FLIGHT: PROJECT CONTEXT

> Copy this block at the start of every phase as the persistent context.

```
PORTFOLIO OWNER: S Muhilan
ROLE: Cloud Engineer | Cloud Computing Student | AI & Data Enthusiast
EMAIL: muhilansivaraman@gmail.com
PHONE: +91 8807798823
LOCATION: Chennai, Tamil Nadu, India
LINKEDIN: https://linkedin.com/in/muhilan-sivaraman
GITHUB: https://github.com/Muhil-18
COLLEGE: SRM Institute of Science and Technology – Ramapuram (B.Tech CSE Cloud Computing, Expected 2027, CGPA 8.05)
STACK: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion
HOST: Vercel
```

---

## PHASE 1 — Project Scaffold & Vercel-Ready Setup

```
You are an expert Next.js developer. Set up a production-ready portfolio project for S Muhilan, a Cloud Engineering student, that is fully configured for Vercel deployment.

### Tasks

1. Initialise a Next.js 14 project using the App Router with TypeScript and Tailwind CSS.

2. Install all required dependencies:
   - framer-motion (animations)
   - @next/font (Google Fonts via next/font)
   - react-icons (tech stack icons)
   - react-intersection-observer (scroll-triggered animations)
   - react-type-animation (hero typewriter effect)
   - next-themes (dark/light mode)
   - clsx and tailwind-merge (utility classnames)
   - @vercel/analytics (Vercel visitor analytics)
   - @vercel/speed-insights (Vercel performance monitoring)

3. Create a vercel.json in the project root with:
   - framework: nextjs
   - headers for security (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
   - cleanUrls: true
   - trailingSlash: false

4. Set up next.config.ts with:
   - images.domains configured for external image sources
   - output: standalone (for optimal Vercel builds)
   - compiler.removeConsole in production

5. Create the full folder structure:
   /app
     layout.tsx         (root layout with ThemeProvider, Analytics, SpeedInsights)
     page.tsx           (main page composing all sections)
     globals.css
   /components
     /ui                (reusable primitives: Button, Badge, Card, SectionHeading)
     /sections          (Hero, About, Experience, Projects, Certifications, Skills, Achievements, Resume, Gallery, Contact, Footer)
     /layout            (Navbar, ThemeToggle)
   /lib
     data.ts            (all portfolio data as typed constants)
     utils.ts           (cn() helper and misc utilities)
   /types
     index.ts           (shared TypeScript interfaces)
   /public
     /images            (placeholder dirs: profile, projects, certs, gallery)

6. In /types/index.ts define interfaces for:
   - Project { id, title, description, longDescription, techStack, githubUrl, liveUrl, imageUrl, featured }
   - Experience { company, role, duration, location, responsibilities[], outcomes[] }
   - Certification { name, provider, date, verifyUrl, imageUrl }
   - Skill { name, category, icon }
   - Achievement { title, description, type, date }

7. Populate /lib/data.ts with ALL of Muhilan's real data (do not use placeholder text):

   PROJECTS:
   - Cloudster: Autonomous Edge-Education Node (Jan 2026) — Golang, Node.js, Python, Raspberry Pi, Ollama, WebSockets. Built a self-contained offline edge computing platform for AI-powered classroom services. Engineered real-time bidirectional communication via WebSockets. Integrated Ollama to run LLMs locally. Developed Golang microservices for high-performance request handling.
   - Stock Vision AI with Apache Spark (Oct 2025) — Apache Spark, Python, PySpark MLlib, Pandas, Matplotlib. Distributed data pipelines for large-scale stock market datasets. ML models for trend forecasting and buy/sell signal generation. Spark Structured Streaming for real-time analytics. Interactive dashboards with rolling indicators.
   - ML Stock Analysis Tool (Oct 2025) — Python, Yahoo Finance API, Linear Regression, Decision Tree, Matplotlib, Seaborn. Full-featured stock analysis application fetching real-time data. Feature engineering on OHLCV data. Comparative equity performance dashboards.

   EXPERIENCE:
   - Project Intern at Institution of Engineers (India) – Qatar Chapter (Oct 2025). Developed ML stock analysis tool. Applied Linear Regression and Decision Tree algorithms for forecasting. Created visualisation dashboards using Matplotlib and Seaborn.

   CERTIFICATIONS:
   - Cloud Computing Bootcamp — CDAC Chennai & SRM IST (Feb 2026)
   - Introduction to Database Systems — NPTEL (Jan 2025)

   ACHIEVEMENTS:
   - DevsHouse '26 National Level Hackathon — GDG VIT Chennai (Mar 2026)
   - AI in Legal Domain Workshop — NIT Tiruchirappalli (Jul 2025)
   - District-level Badminton Player

   SKILLS (categorised):
   Cloud & DevOps: AWS, Docker, Kubernetes, Terraform
   Programming: Python, SQL, Java
   Data & AI: Machine Learning, Apache Spark, Data Analytics, NLP
   Tools: Git, GitHub, Linux, VS Code

8. Commit everything with a clear initial commit message.

Do not build any UI yet — only scaffold, config, and data layer.
```

---

## PHASE 2 — Global Layout, Navbar & Theme System

```
Continue building S Muhilan's portfolio. The scaffold from Phase 1 is complete.

### Tasks

1. Design System — in globals.css and tailwind.config.ts define:

   COLOR PALETTE (cloud/tech inspired, works in both dark and light mode):
   - --color-primary: #0EA5E9 (sky blue — cloud computing accent)
   - --color-secondary: #6366F1 (indigo — AI/tech secondary)
   - --color-accent: #10B981 (emerald — success/highlight)
   - --color-surface-dark: #0A0F1E (deep navy — dark mode background)
   - --color-surface-light: #F8FAFC (near white — light mode background)
   - --color-text-dark: #E2E8F0
   - --color-text-light: #0F172A

   TYPOGRAPHY:
   - Display: Space Grotesk (headings, name, section titles)
   - Body: Inter (paragraphs, descriptions)
   - Mono: JetBrains Mono (code, tech badges, terminal-style elements)

   Set these as CSS custom properties and as Tailwind config extensions.

2. Root layout (app/layout.tsx):
   - Wrap with next-themes ThemeProvider (attribute="class", defaultTheme="dark")
   - Include <Analytics /> from @vercel/analytics/react
   - Include <SpeedInsights /> from @vercel/speed-insights/next
   - Set metadata: title "S Muhilan | Cloud Engineer Portfolio", description, openGraph tags, twitter card
   - Apply Space Grotesk and Inter via next/font/google

3. Navbar component:
   - Fixed top navigation with blur backdrop (backdrop-blur-md bg-surface/80)
   - Logo: "S Muhilan" in Space Grotesk bold with a sky-blue dot
   - Nav links: About, Experience, Projects, Certifications, Skills, Contact
   - Smooth scroll to section IDs on click
   - Active section highlighting using IntersectionObserver
   - Mobile hamburger menu with slide-down animation (Framer Motion)
   - ThemeToggle button (sun/moon icon, animated flip transition)
   - "Download Resume" CTA button (sky-blue outlined, top-right)

4. Reusable UI primitives in /components/ui:
   - Button.tsx — variants: primary (filled sky-blue), outline, ghost. Supports size sm/md/lg. Framer Motion scale on hover/tap.
   - Badge.tsx — tech stack pill. Tiny rounded badge with icon slot, sky-blue or indigo tint.
   - SectionHeading.tsx — section title + optional subtitle. Animated underline accent on the title word using a sky-blue gradient bar. Scroll-triggered fade-in-up via Framer Motion.
   - Card.tsx — glass morphism card (bg-white/5 dark:bg-white/5, border border-white/10, backdrop-blur-sm, rounded-2xl). Hover: subtle lift + border brightens.

5. Smooth scroll behaviour in globals.css:
   html { scroll-behavior: smooth; }
   Each section gets scroll-margin-top: 80px to account for fixed navbar.

Build only layout, navbar, theme system, and primitives. No section content yet.
```

---

## PHASE 3 — Hero Section

```
Continue S Muhilan's portfolio. Layout and navbar are complete.

### Build the Hero Section (app/sections/Hero.tsx)

Design a full-viewport hero that feels like a cloud-native terminal dashboard, not a generic developer template.

SIGNATURE ELEMENT: A subtle animated grid of glowing dots in the background (CSS grid of 1px dots with a radial gradient mask that follows cursor position via JS), representing cloud nodes — this is the page's memorable visual identity.

LAYOUT:
Left column (60%):
- Eyebrow text: "Available for Internships & Roles" with a pulsing green dot
- Name: "S Muhilan" — massive, Space Grotesk 700, with "Muhilan" in sky-blue gradient
- Typewriter animation cycling: "Cloud Engineer" → "AI & Data Enthusiast" → "Full-Stack Developer" → "Edge Computing Builder" using react-type-animation
- 3-line bio: "I build scalable cloud systems, AI-driven analytics tools, and offline-first edge platforms. Currently pursuing B.Tech CSE (Cloud Computing) at SRM IST, Chennai."
- Three CTA buttons side by side:
  * "Download Resume" (primary sky-blue, download icon)
  * "View Projects" (outline, arrow icon)
  * "Contact Me" (ghost, mail icon)
- Social row: GitHub icon link, LinkedIn icon link

Right column (40%):
- Profile image placeholder: circular frame with animated sky-blue + indigo gradient ring spinning slowly. Inner: rounded-full image with subtle glow. File: /public/images/profile.jpg (use a placeholder gradient if image absent)
- Below image: animated stats grid (2x2):
  * 3 Projects Completed
  * 2 Certifications
  * 10+ Technologies
  * 2 Hackathons / Events
  Each stat: large number in sky-blue (count-up animation on mount), small grey label below.

ANIMATIONS:
- On page load: staggered fade-in-up for eyebrow → name → typewriter → bio → buttons (Framer Motion stagger 0.15s)
- Stats: count-up numbers using a simple useEffect counter when in viewport
- Gradient ring on profile: CSS animation rotate 8s linear infinite
- Dot grid: radial gradient spotlight follows mouse (mousemove event, requestAnimationFrame)

MOBILE:
- Stack columns vertically (image on top, content below)
- Profile image: 160px, centered
- Stats: 2x2 grid maintained
```

---

## PHASE 4 — About & Experience Sections

```
Continue S Muhilan's portfolio. Hero is complete.

### 4A — About Section

Section ID: "about"
Layout: Two columns — left is text, right is an interactive card stack.

LEFT:
- SectionHeading: "About Me"
- 2-paragraph bio expanding on: Cloud Computing specialisation at SRM IST, passion for building systems that work at the edge of connectivity, interest in how AI transforms data into decisions, goal to become a Cloud Solutions Architect.
- Technical interest tags (Badge components): Cloud Architecture, Machine Learning, Data Engineering, Edge Computing, Full-Stack Development, AI Analytics
- Personal note: "When I'm not building cloud systems, I compete at district-level badminton — precision and strategy on the court, the same I bring to engineering."

RIGHT (interactive):
- A terminal-style card (dark bg, monospace font, JetBrains Mono) showing a mock "whoami" CLI output:
  $ whoami
  > S Muhilan
  $ cat about.json
  {
    "role": "Cloud Engineer (aspiring)",
    "college": "SRM IST Ramapuram",
    "cgpa": 8.05,
    "specialisation": "Cloud Computing",
    "interests": ["AWS", "Apache Spark", "Edge AI", "DevOps"],
    "currently_learning": "Kubernetes, Terraform",
    "open_to": "Internships & Entry-Level Roles"
  }
- Typing animation for the terminal output using Framer Motion
- Sky-blue cursor blink

### 4B — Experience Section

Section ID: "experience"
Layout: Vertical timeline (centred line with alternating left/right cards on desktop, single column on mobile)

Timeline entries (from data.ts):

1. PROJECT INTERN — Institution of Engineers (India), Qatar Chapter | Oct 2025
   Card content:
   - Role badge: "Project Intern" (emerald)
   - Company + duration
   - Responsibilities:
     * Developed ML stock analysis tool using Python and Yahoo Finance API
     * Applied Linear Regression and Decision Tree algorithms for price forecasting
     * Created visualisation dashboards using Matplotlib and Seaborn
   - Outcomes: "Delivered a functional forecasting system; gained hands-on ML project experience"
   - Tech badges: Python, Yahoo Finance API, Matplotlib, Seaborn, scikit-learn

2. CLOUD COMPUTING BOOTCAMP — CDAC Chennai & SRM IST | Feb 2026
   Card content:
   - Role badge: "Training Program" (sky-blue)
   - 2-line description of cloud skills covered
   - Tech badges: AWS, Cloud Architecture, DevOps

3. WORKSHOP — AI in Legal Domain | NIT Tiruchirappalli | Jul 2025
   Card content:
   - Role badge: "Workshop" (indigo)
   - 1-line description

TIMELINE ANIMATION:
- Each card fades in from its side (left cards slide from left, right cards from right) when scrolled into view using IntersectionObserver + Framer Motion.
- The centre line draws itself downward as user scrolls (scaleY animation).
- Timeline dot pulses with a ring expand on enter.
```

---

## PHASE 5 — Projects Section

```
Continue S Muhilan's portfolio. About and Experience sections are complete.

### Build the Projects Section

Section ID: "projects"

LAYOUT CONCEPT:
- Filter bar at top: "All" | "Cloud" | "AI/ML" | "Data Engineering" — pills that filter project cards
- Featured project (Cloudster) gets a wide hero card spanning full width
- Below: 2-column grid for the remaining projects

FEATURED CARD (Cloudster):
- Full-width card, glass morphism
- Left: project image placeholder (a custom SVG illustration of a Raspberry Pi connected to cloud nodes)
- Right:
  - "Featured Project" eyebrow in sky-blue monospace
  - Title: "Cloudster: Autonomous Edge-Education Node"
  - Tags: Golang, Node.js, Python, Raspberry Pi, Ollama, WebSockets
  - 4-point description:
    * Self-contained offline edge AI platform for classroom environments
    * Real-time bidirectional WebSocket communication across multiple devices
    * Local LLM inference using Ollama — no cloud dependency
    * Golang microservices + Node.js API orchestration + Python AI pipelines
  - GitHub button + "Jan 2026" date badge
  - Hover: glowing sky-blue border pulse

GRID CARDS (Stock Vision AI, ML Stock Analysis Tool):
Each card:
  - Project image area (gradient placeholder with tech icon overlay)
  - Tech stack badges (top-right cluster)
  - Title (Space Grotesk bold)
  - 2-sentence description
  - Expandable "Read More" — Framer Motion height animation revealing full 4-point description
  - Bottom row: GitHub icon link | date badge
  - Hover: lift (translateY -6px) + border brightens

PROJECT DATA:
Stock Vision AI (Oct 2025): Apache Spark, PySpark MLlib, Python, Pandas, Matplotlib — distributed stock market prediction pipeline, real-time Structured Streaming, buy/sell signal ML models, rolling indicators dashboard.

ML Stock Analysis Tool (Oct 2025): Python, Yahoo Finance API, Linear Regression, Decision Tree, Matplotlib, Seaborn — real-time stock data fetching, OHLCV feature engineering, comparative equity performance dashboards, internship deliverable.

FILTER BEHAVIOUR:
- Clicking a filter pill animates cards out (opacity 0, scale 0.95) then filters and animates back in (stagger 0.1s)
- "All" shows all three
- "Cloud" shows Cloudster
- "AI/ML" shows Cloudster + ML Stock Analysis Tool
- "Data Engineering" shows Stock Vision AI + ML Stock Analysis Tool

MOBILE: Single column, no featured wide card — all cards equal width.
```

---

## PHASE 6 — Certifications, Skills & Achievements Sections

```
Continue S Muhilan's portfolio. Projects section is complete.

### 6A — Certifications Section

Section ID: "certifications"
SectionHeading: "Certifications & Recognition"

Layout: Card grid (3 columns desktop, 2 tablet, 1 mobile)

Certification cards (from data.ts):
1. Cloud Computing Bootcamp — CDAC Chennai & SRM IST | Feb 2026
2. Introduction to Database Systems — NPTEL | Jan 2025

Each card:
- Top: gradient banner (sky-blue to indigo) with a cloud/database icon centred
- Provider name in monospace
- Certification title bold
- Date badge (emerald pill)
- "View Certificate" button (outline, disabled/greyed if no URL, enabled if verifyUrl present)
- Hover: gentle float + banner glow

Below certs, show an Achievements subsection inline:
- DevsHouse '26 National Level Hackathon — GDG VIT Chennai (Mar 2026) — trophy icon, indigo card
- AI in Legal Domain Workshop — NIT Tiruchirappalli (Jul 2025) — scroll icon, sky-blue card
- District-Level Badminton Player — 🏸 icon, emerald card

### 6B — Skills Section

Section ID: "skills"
SectionHeading: "Technical Skills"

Layout: Tab-based (Framer Motion AnimatePresence for tab switch)

Tabs: Cloud & DevOps | Programming | Data & AI | Tools

Each tab shows a grid of skill cards. Each skill card:
- Large react-icon for the technology (centred)
- Technology name below
- Animated progress bar or proficiency ring on card hover (no static bars — only animate on hover to avoid feeling generic)
- Subtle category colour tint

SKILL DATA:
Cloud & DevOps: AWS (react-icons/si SiAmazonaws), Docker (SiDocker), Kubernetes (SiKubernetes), Terraform (SiTerraform)
Programming: Python (SiPython), SQL (SiPostgresql), Java (SiJava)
Data & AI: Machine Learning, Apache Spark (SiApachespark), Data Analytics, NLP
Tools: Git (SiGit), GitHub (SiGithub), Linux (SiLinux), VS Code (SiVisualstudiocode)

SIGNATURE ELEMENT for Skills: On tab switch, the background of the skills panel briefly flashes the category's accent colour at 5% opacity, reinforcing the category identity.

### 6C — Stats / Counter Banner

Between Certifications and Skills, insert a full-width dark banner with animated counters:
- 3 Projects Built
- 2 Certifications
- 10+ Technologies
- 2 Events / Hackathons
- 8.05 CGPA

Counters animate from 0 when scrolled into view. Sky-blue numbers, grey labels.
```

---

## PHASE 7 — Contact Section, Footer & Final Polish

```
Continue S Muhilan's portfolio. All main sections are complete.

### 7A — Contact Section

Section ID: "contact"
SectionHeading: "Get In Touch"

Layout: Two columns

LEFT — Contact info card:
- "Open to opportunities" status badge (pulsing green dot)
- Short paragraph: "Whether you have an internship opportunity, a project idea, or just want to connect — my inbox is always open."
- Contact details list:
  * 📧 muhilansivaraman@gmail.com
  * 📍 Chennai, Tamil Nadu, India
  * 💼 linkedin.com/in/muhilan-sivaraman (link)
  * 💻 github.com/Muhil-18 (link)
- Social icon row: GitHub, LinkedIn (large icons, hover scale)

RIGHT — Contact form:
Fields: Name, Email, Subject, Message (textarea)
- Floating label animation (label rises on focus/fill)
- Sky-blue focus ring on inputs
- Submit button: "Send Message" with paper-plane icon
- On submit: call a Next.js API route (/api/contact) that returns a mock success response for now (log to console). Show success toast: "Message sent! I'll get back to you soon."
- Form validation: required fields, email format check, error states shown inline
- Framer Motion: form slides in from right on scroll into view

### 7B — Footer

- Dark background (slightly lighter than page bg)
- Three columns:
  Left: "S Muhilan" logo + 1-line tagline "Building scalable systems from Chennai to the cloud."
  Centre: Quick links (About, Projects, Experience, Contact)
  Right: Social icons (GitHub, LinkedIn) + "Download Resume" button
- Bottom bar: "© 2026 S Muhilan. Built with Next.js & deployed on Vercel."
- Subtle top border: 1px sky-blue/20

### 7C — Final Polish & Vercel Deployment Config

1. SEO — in app/layout.tsx update metadata fully:
   - title: "S Muhilan | Cloud Engineer & CS Undergraduate"
   - description: "Portfolio of S Muhilan — Cloud Engineer, AI enthusiast, and CS undergraduate at SRM IST Chennai. Explore projects in edge computing, ML, and data engineering."
   - keywords: Cloud Engineer, AWS, Apache Spark, Edge Computing, Chennai, SRM IST, Python, Machine Learning
   - openGraph: title, description, url, siteName, images (og-image)
   - twitter: card summary_large_image

2. API Route — create app/api/contact/route.ts:
   - POST handler accepting { name, email, subject, message }
   - Validate inputs server-side
   - Log to console (production: replace with Resend/Nodemailer)
   - Return { success: true, message: "Received" }

3. Environment variables — create .env.local.example:
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   CONTACT_EMAIL=muhilansivaraman@gmail.com
   (RESEND_API_KEY= for future email integration)

4. vercel.json — finalise:
   {
     "framework": "nextjs",
     "cleanUrls": true,
     "trailingSlash": false,
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           { "key": "X-Frame-Options", "value": "DENY" },
           { "key": "X-Content-Type-Options", "value": "nosniff" },
           { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
         ]
       }
     ]
   }

5. Performance:
   - Add next/image for all images with priority on hero
   - Add loading="lazy" on below-fold images
   - Ensure Framer Motion respects prefers-reduced-motion: use useReducedMotion() hook and disable animations if true

6. Accessibility:
   - All interactive elements have aria-label
   - Focus visible outlines (ring-2 ring-sky-400)
   - Color contrast AA compliant

7. README.md — generate a professional README with:
   - Project overview
   - Tech stack
   - Local dev setup (npm install, npm run dev)
   - Vercel deployment instructions
   - Environment variables table
   - Folder structure

### DEPLOYMENT CHECKLIST (include as a comment in vercel.json):
- Push to GitHub repo
- Import repo in vercel.com/new
- Set environment variables in Vercel dashboard
- Vercel auto-detects Next.js — deploy
- Add custom domain if available
- Enable Vercel Analytics in dashboard
```

---

## PHASE 8 — Enhancements & Extras (Optional)

```
Continue S Muhilan's portfolio. Core site is complete and deployed.

Add the following enhancements:

### 8A — Interactive Education Timeline
In the About section, below the terminal card, add a horizontal scrollable timeline:
- SRM IST B.Tech Cloud Computing (2023–2027) — sky-blue node
- Class XII, Christ the King Boys Matric School, Kumbakonam (2023) — indigo node
Each node: year pill, institution name, achievement. Scroll-triggered line draw animation.

### 8B — Dark/Light Mode Refinement
- Light mode: use #F0F9FF (sky-50) base, #0F172A text, sky-blue accents maintained
- Ensure all glass cards, terminal elements, and badge colours adapt cleanly
- ThemeToggle: animated sun↔moon morph using SVG path transition (Framer Motion)

### 8C — Project Image Placeholders → Real Screenshots
- Create a script public/images/generate-placeholders.js that generates gradient SVG placeholders for each project until real screenshots are added
- Each SVG uses project-specific colours and shows the project name + primary tech icon

### 8D — Resume Embed Section
Section ID: "resume"
- Embedded PDF viewer using an <iframe> or react-pdf
- "Download Resume" button (primary)
- "View Full Screen" button (opens in new tab)
- Resume file: /public/Muhilan_S_Resume.pdf

### 8E — 404 Page
- Custom app/not-found.tsx
- Cloud-themed: "404 — Page not found in any availability zone"
- Animated cloud icon drifting
- "Return Home" button

### 8F — Loading Screen
- Full-screen loader shown on first visit
- Animates: "> Initialising portfolio..." terminal text typing out
- Fades out after 1.5s revealing the site
- Stored in sessionStorage so it only shows once per session
```

---

## QUICK REFERENCE — Vercel Deployment Steps

```bash
# 1. Push your project to GitHub
git init
git add .
git commit -m "feat: initial portfolio build"
git remote add origin https://github.com/Muhil-18/portfolio.git
git push -u origin main

# 2. Deploy on Vercel
# Go to https://vercel.com/new
# Import your GitHub repo
# Framework: Next.js (auto-detected)
# Root directory: ./
# Build command: npm run build (auto)
# Output directory: .next (auto)

# 3. Add environment variables in Vercel dashboard
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
CONTACT_EMAIL = muhilansivaraman@gmail.com

# 4. Enable Analytics
# Vercel Dashboard → Your Project → Analytics → Enable

# 5. Custom domain (optional)
# Vercel Dashboard → Your Project → Settings → Domains → Add
```

---

## SECTION ID REFERENCE

| Section | ID | Navbar Link |
|---|---|---|
| Hero | hero | — |
| About | about | About |
| Experience | experience | Experience |
| Projects | projects | Projects |
| Certifications | certifications | Certifications |
| Skills | skills | Skills |
| Contact | contact | Contact |
| Resume | resume | Resume (footer) |

---

## COLOR TOKEN QUICK REFERENCE

| Token | Hex | Usage |
|---|---|---|
| Primary | #0EA5E9 | Accents, CTAs, highlights |
| Secondary | #6366F1 | AI/tech badges, secondary accents |
| Accent | #10B981 | Success states, "available" status |
| Surface Dark | #0A0F1E | Dark mode background |
| Surface Light | #F8FAFC | Light mode background |
| Border | #ffffff1a | Glass card borders |

---

*Build phase by phase. Each prompt is self-contained and references the persistent context at the top. After each phase, verify in browser before proceeding to the next.*
