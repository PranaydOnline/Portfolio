# Pranav Deshmukh — Immersive Storytelling Portfolio

An Awwwards/FWA-tier interactive single-page portfolio built for **Pranav Deshmukh**. 
Rather than a static resume page, the experience unfolds as a cinematic journey driven by **"The Morphing Object"**—a central 3D procedural WebGL entity that deforms, fractures into constellation particles, and transforms color palettes in lockstep with the user's scroll.

---

## ✨ Features & Architecture

- **The Morphing Object (Three.js WebGL)**:
  - Custom GLSL simplex noise vertex displacement and fresnel iridescent rim shader.
  - Dual-layer design: inner iridescent core + outer wireframe lattice + orbiting constellation particle cloud (1,600+ particles).
  - GSAP `ScrollTrigger` with `scrub: 1.2` directly mapping scroll progress across 6 story chapters:
    1. **Genesis (Hero)**: Blank canvas, idle breathing celestial core, high negative space.
    2. **Philosophy (About)**: Compacts into an articulated crystalline prism, clearing left-hand space for narrative story and philosophy pillars.
    3. **Constellation (Skills)**: Fractures into orbiting particles representing the 4 core engineering domains.
    4. **Dimensional Portal (Projects)**: Wireframe chassis opens outward to reveal asymmetric project artifacts.
    5. **Chronos Strand (Experience)**: Twists into a dimensional helix/timeline.
    6. **Convergence (Contact)**: Resolves into a serene, radiant luminary gem.
  - Interactive mouse tilt with momentum inertia.
  - Graceful mobile optimization and `prefers-reduced-motion` compliance.

- **Buttery Smooth Scroll**:
  - **Lenis** momentum scrolling synchronized with GSAP's internal ticker (`gsap.ticker.lagSmoothing(0)`).

- **React Bits Primitives (Implemented in `src/components/react-bits/`)**:
  - `SplitText`: Animated typography reveal splitting words/letters with staggered GSAP ease.
  - `DecryptedText`: Cyberpunk character-cycling scramble reveal on view entry.
  - `ShinyText`: Dynamic metallic shimmer / light-sweep effect on badges and colophon.
  - `SpotlightCard`: Cursor-following radial light and border highlight on cards.
  - `Magnet`: Physics-based spring attraction pulling interactive buttons toward cursor hover.
  - `CustomCursor`: Trailing ring cursor with interactive scaling and clicking feedback.
  - `NoiseOverlay`: Physical film grain texture canvas overlay.

- **Metamorphic Overlays**:
  - Full-bleed ambient radial glows and blur overlays dynamically tied to CSS variables (`--accent-primary`, `--accent-secondary`, `--accent-glow`) that shift hue between chapters without hard dividers.

- **Interactive Contact Experience**:
  - Working form UI stub with input validation, dispatch loading state, and confirmation toast.
  - Direct 1-click email copy to clipboard.
  - Direct links to GitHub, LinkedIn, Twitter/X, and Resume.
  - Optional subtle Web Audio UI blip generator (`SoundToggle`).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **3D Graphics**: Three.js (WebGL + GLSL shaders)
- **Animation**: GSAP 3.15 + ScrollTrigger
- **Smooth Scrolling**: Lenis
- **Styling**: Tailwind CSS v4 + PostCSS
- **Icons**: Lucide React + custom SVG brand icons
- **Typography**: Google Fonts (*Syne*, *Space Grotesk*, *Inter*, *JetBrains Mono*)

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg               # Bespoke 3D geometric SVG mark
│   └── og-image.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── MorphingCanvas.jsx   # Procedural Three.js 3D entity & ScrollTrigger timeline
│   │   │   └── shaders.js           # GLSL Simplex 3D noise vertex & fresnel fragment shaders
│   │   ├── react-bits/              # React Bits UI primitives
│   │   │   ├── SplitText.jsx        # Staggered letter/word reveal
│   │   │   ├── DecryptedText.jsx    # Character scramble effect
│   │   │   ├── ShinyText.jsx        # Metallic sweep highlight
│   │   │   ├── SpotlightCard.jsx    # Cursor-aware card border/glow
│   │   │   ├── Magnet.jsx           # Spring-physics magnetic attraction
│   │   │   ├── CustomCursor.jsx     # Luxury trailing ring follower
│   │   │   └── NoiseOverlay.jsx     # Cinematic SVG film grain
│   │   ├── sections/
│   │   │   ├── Hero.jsx             # Chapter 01: Genesis (blank opening canvas)
│   │   │   ├── About.jsx            # Chapter 02: Philosophy (narrative + pillars)
│   │   │   ├── Skills.jsx           # Chapter 03: Constellation (asymmetric skill grid)
│   │   │   ├── Projects.jsx         # Chapter 04: Dimensional Portal (flagship works)
│   │   │   ├── Experience.jsx       # Chapter 05: Chronos Strand (career timeline)
│   │   │   └── Contact.jsx          # Chapter 06: Convergence (form stub + socials)
│   │   └── ui/
│   │       ├── Icons.jsx            # GitHub, LinkedIn, Twitter/X vector marks
│   │       ├── MetamorphicOverlay.jsx # Ambient color shifting atmosphere
│   │       ├── Navbar.jsx           # Floating glassmorphic navigation pill
│   │       ├── ScrollProgress.jsx   # Fixed vertical chapter indicators
│   │       └── SoundToggle.jsx      # Web Audio atmospheric cue toggle
│   ├── data/
│   │   ├── portfolioData.js         # Content, projects, skills, and bio (with TODO tags)
│   │   └── themes.js                # Chapter color tokens and 3D deformation parameters
│   ├── hooks/
│   │   └── useSmoothScroll.js       # Lenis + GSAP ScrollTrigger synchronization
│   ├── App.jsx                      # Main assembly
│   ├── index.css                    # Tailwind v4, custom theme tokens & glass styles
│   └── main.jsx
├── index.html                       # SEO metadata, OpenGraph tags, and font preconnects
├── vite.config.js                   # Vite + Tailwind plugin config
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open `http://localhost:5173` to explore the site.

### 3. Build for production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

---

## ✏️ Customizing Content & Projects

All copy, project data, and social links are centrally configured in:
👉 [`src/data/portfolioData.js`](src/data/portfolioData.js)

Search for `// TODO: replace with real project data` to quickly locate and update:
1. **Bio & Status**: `PERSONAL_INFO` (name, tagline, email, location, status).
2. **Projects**: `PROJECTS_DATA` (title, overview, metrics, demo links, GitHub links).
3. **Skills**: `SKILLS_DATA` (categories, skill names, proficiency levels, hot tags).
4. **Experience**: `EXPERIENCE_DATA` (companies, roles, years, bullet achievements).
5. **Theme Colors & 3D Shapes**: [`src/data/themes.js`](src/data/themes.js) to customize the color palettes and deformation properties per section.
