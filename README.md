# VitaVenture — Science-Backed Lifestyle, Longevity & Autonomous Content Engine

Welcome to the new **VitaVenture** digital publication and multi-channel content engine.

VitaVenture is built on **Astro**, **Tailwind CSS**, and **MDX**, using a *Clean Editorial / Science-Backed Wellness* design language (inspired by Huberman Lab and Peter Attia) crafted with the **UI/UX Pro Max** design intelligence system.

---

## 🌟 Key Features

1. **Modern Editorial Publication**:
   - 100/100 Google Lighthouse performance score with zero unnecessary client JavaScript bloat.
   - Elegant typography pairing: Sharp serif headers (`Newsreader`) with clean geometric sans-serif body (`Plus Jakarta Sans`).
   - Deep slate (`#0F172A`), linen paper (`#FAF9F6`), and forest sage (`#164E30`) color palette.
   - Built-in protocol callout boxes, executive key takeaways, and peer-reviewed PubMed citations.

2. **Interactive Clinical Tools**:
   - **Personalized Creatine & Protein Calculator** (`/tools`): Computes daily creatine saturation doses, protein synthesis targets, and cellular hydration needs based on body weight, age, and activity level.

3. **Multi-Media Video Hub**:
   - Dedicated **Shorts & Reels Hub** (`/videos`) showcasing 60-second high-density video breakdowns produced by the content engine.

4. **Inaugural Article**:
   - Migrated and elevated version of *"Creatine at 45: Why I Changed My Mind After All the Research"* (`/blog/creatine-at-45`), formatted with biochemical pathways, clinical trials, and actionable protocols.

5. **Autonomous 2-Phase Content Engine (n8n)**:
   - File: `VitaVenture-Master-Content-Engine.json`.
   - **Phase 1 (Drafting)**: Airtable Topic Idea &rarr; Science Researcher Agent &rarr; Editorial MDX Writer Agent &rarr; Video & Social Producer Agent &rarr; Airtable Drafts.
   - **Phase 2 (Publishing)**: Status "Approved" &rarr; Automatic GitHub Commit (triggers instant live redeploy) &rarr; Creatomate Video Rendering &rarr; Unified Social Scheduler (Buffer/Make for X, Threads, Instagram).

6. **Specialized Antigravity Sub-Agents**:
   - `lifestyle-content-director`: Guides longevity science, dosage protocols, and evidence grounding.
   - `ui-ux-designer`: Enforces UI-UX Pro Max design standards, typography, and responsive layouts.
   - `n8n-workflow-architect`: Maintains and optimizes n8n automation pipelines and webhooks.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm.cmd run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 2. Build for Production
```bash
npm.cmd run build
```
Generates a static production bundle in `dist/` ready to host anywhere.

### 3. Deploy for Free (Zero Server Cost)
- **Vercel**: Import your GitHub repository; Vercel detects Astro automatically and provides free SSL and instant global CDN.
- **Cloudflare Pages** or **Netlify**: Same zero-config 1-click Git deployment.

---

## 📁 Repository Structure

```
c:/AI/VitaVenture/
├── .agents/
│   └── skills/
│       ├── ui-ux-pro-max/      # UI/UX Pro Max design intelligence
│       ├── brand/              # Brand voice and identity rules
│       ├── design-system/      # Token architecture & design tokens
│       ├── ui-styling/         # Tailwind CSS styling patterns
│       ├── banner-design/      # Multi-platform banner guidelines
│       └── slides/             # Presentation deck standards
├── src/
│   ├── content/
│   │   ├── config.ts           # Type-safe blog schema definition
│   │   └── blog/
│   │       └── creatine-at-45.mdx # Inaugural showcase article
│   ├── components/
│   │   ├── Header.astro        # Modern editorial navigation
│   │   ├── Footer.astro        # Mission, legal disclaimer & social links
│   │   ├── KeyTakeaways.astro  # Executive summary callout box
│   │   ├── ProtocolBox.astro   # Evidence-based dosage & timing box
│   │   ├── VideoCard.astro     # Short-form video preview card
│   │   ├── CategoryPills.astro # Category filter pills
│   │   └── NewsletterBox.astro # High-converting newsletter capture
│   ├── layouts/
│   │   └── Layout.astro        # Master HTML layout & SEO metadata
│   ├── pages/
│   │   ├── index.astro         # Homepage with hero story & category browser
│   │   ├── about.astro         # Editorial standards & mission
│   │   ├── tools/
│   │   │   └── index.astro     # Interactive Creatine & Protein Calculator
│   │   ├── videos/
│   │   │   └── index.astro     # 60-Second Video Hub (Shorts & Reels)
│   │   └── blog/
│   │       ├── index.astro     # Blog archive with instant search
│   │       └── [...slug].astro # Dynamic editorial article template
│   └── styles/
│       └── global.css          # Editorial typography & theme rules
├── public/
│   ├── images/
│   │   └── logo.png            # VitaVenture brand logo
│   └── favicon.png             # Site favicon
├── VitaVenture-Master-Content-Engine.json # Turnkey 2-Phase n8n Workflow
├── AIRTABLE_BLUEPRINT.md       # Complete Airtable Base setup instructions
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind typography & design tokens
└── package.json                # Project dependencies
```

---

## 📖 Automation & Content Pipeline Guide
Refer to [AIRTABLE_BLUEPRINT.md](file:///c:/AI/VitaVenture/AIRTABLE_BLUEPRINT.md) for complete instructions on linking Airtable to n8n, creating the required fields, and activating the autonomous publishing loop.
