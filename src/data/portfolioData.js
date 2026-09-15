// Data file for Pranav Deshmukh's Portfolio
// NOTE: For customizing personal details and project entries, update the items below.

export const PERSONAL_INFO = {
  name: 'Pranav Deshmukh',
  role: 'Creative Technologist & Full-Stack Architect',
  shortBio: 'Engineering high-velocity web experiences, procedural 3D interfaces, and resilient software architectures where mathematics meets aesthetic precision.',
  status: 'Open for Select Consulting & Engineering Roles',
  location: 'San Francisco & Remote Worldwide',
  email: 'pranav.deshmukh.eng@gmail.com', // TODO: replace with real email
  github: 'https://github.com/pranavdeshmukh', // TODO: replace with real github
  linkedin: 'https://linkedin.com/in/pranavdeshmukh', // TODO: replace with real linkedin
  twitter: 'https://x.com/pranav_builds', // TODO: replace with real twitter/x
  resumeUrl: '#',
};

export const ABOUT_DATA = {
  headline: 'Crafting visceral digital experiences at the frontier of technology and art.',
  narrative: [
    'I build digital artifacts that challenge the boundary between utility and sensation. My journey began in low-level systems and graphics programming, evolving into architectural leadership for modern web platforms.',
    'I believe web interfaces should not merely render data; they should evoke emotion, respect cognitive load, and respond organically to human input with fluid physics, tactile micro-interactions, and 60fps computational elegance.',
  ],
  pillars: [
    {
      title: 'Aesthetic Rigor',
      description: 'Zero tolerance for bland defaults. Custom typography, calculated easing curves, harmonic color palettes, and balanced negative space.',
      metric: '60–120 FPS',
      submetric: 'Fluid WebGL motion',
    },
    {
      title: 'Architectural Depth',
      description: 'Designing scalable frontends and cloud topologies engineered to withstand millions of concurrent sessions with sub-millisecond latencies.',
      metric: '< 100ms',
      submetric: 'First Contentful Paint',
    },
    {
      title: 'Creative Computing',
      description: 'Leveraging GLSL fragment shaders, procedural particle physics, and mathematical geometry deformation to create memorable visual identities.',
      metric: '100%',
      submetric: 'Bespoke custom shaders',
    },
  ],
};

export const SKILLS_DATA = [
  {
    category: 'Creative Development & 3D',
    description: 'Procedural meshes, shader pipelines, interactive physics, and spatial user experiences.',
    skills: [
      { name: 'Three.js / WebGL', level: 'Mastery', hot: true },
      { name: 'GLSL Shaders', level: 'Advanced', hot: true },
      { name: 'GSAP & ScrollTrigger', level: 'Mastery', hot: true },
      { name: 'Canvas2D / SVG Morphing', level: 'Mastery' },
      { name: 'React Three Fiber (R3F)', level: 'Advanced' },
      { name: 'Physics (Rapier / Cannon)', level: 'Proficient' },
    ],
  },
  {
    category: 'Frontend Engineering',
    description: 'Modern component systems, reactive state engines, and micro-frontend architectures.',
    skills: [
      { name: 'React / Next.js', level: 'Mastery', hot: true },
      { name: 'TypeScript', level: 'Mastery', hot: true },
      { name: 'Tailwind CSS / PostCSS', level: 'Mastery' },
      { name: 'Vite / Webpack / Turbopack', level: 'Advanced' },
      { name: 'Web Performance Optimization', level: 'Mastery', hot: true },
      { name: 'Accessibility (WCAG AAA)', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend & Cloud Systems',
    description: 'Distributed microservices, realtime event streams, and edge data architectures.',
    skills: [
      { name: 'Node.js / Express / Bun', level: 'Advanced' },
      { name: 'Python / FastAPI', level: 'Advanced' },
      { name: 'GraphQL & REST APIs', level: 'Mastery' },
      { name: 'PostgreSQL / Prisma', level: 'Advanced' },
      { name: 'Redis / Realtime WebSockets', level: 'Advanced', hot: true },
      { name: 'Docker / AWS / Cloudflare Edge', level: 'Proficient' },
    ],
  },
  {
    category: 'Architecture & Design Tools',
    description: 'Creative engineering workflows, interactive prototyping, and design systems.',
    skills: [
      { name: 'Figma to Code Pipeline', level: 'Mastery' },
      { name: 'Design System Governance', level: 'Mastery', hot: true },
      { name: 'CI/CD & GitHub Actions', level: 'Advanced' },
      { name: 'Unit / E2E Testing (Vitest/Playwright)', level: 'Advanced' },
      { name: 'Blender 3D Modeling / UVs', level: 'Proficient' },
    ],
  },
];

// Flagship Projects
// TODO: replace with real project data when ready
export const PROJECTS_DATA = [
  {
    id: 'chronos-engine',
    title: 'Chronos Realtime Simulation Engine',
    subtitle: 'High-performance WebGL time-series visualizer handling 500k telemetry points',
    category: '3D Simulation / Data Viz',
    featured: true,
    year: '2025',
    // TODO: replace with real project data
    overview: 'An in-browser spatial visualization engine built for autonomous flight logs. Renders orbital trajectories, wind vectors, and sensor anomalies with GPU instanced buffer geometry and custom compute shaders.',
    technologies: ['React', 'Three.js', 'GLSL', 'Web Workers', 'Tailwind CSS', 'WebSockets'],
    stats: [
      { label: 'FPS', value: '120fps' },
      { label: 'Data Points', value: '500,000' },
      { label: 'GPU Memory', value: '< 65MB' },
    ],
    demoUrl: 'https://example.com/chronos', // TODO: replace with real link
    repoUrl: 'https://github.com/pranavdeshmukh/chronos-engine', // TODO: replace with real link
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: '#f59e0b',
  },
  {
    id: 'aether-studio',
    title: 'Aether Generative Soundscapes',
    subtitle: 'Interactive spatial audio synthesizer with responsive generative WebGL visuals',
    category: 'Audio / Creative Computing',
    featured: true,
    year: '2024',
    // TODO: replace with real project data
    overview: 'An ambient audio experience where users modulate acoustic harmonic chords mapped to procedural fluid dynamics. Audio spectrum analysis drives vertex displacement on a morphing 3D manifold in real time.',
    technologies: ['Web Audio API', 'React', 'Three.js', 'GSAP ScrollTrigger', 'Tailwind CSS'],
    stats: [
      { label: 'Audio Latency', value: '4.2ms' },
      { label: 'Oscillators', value: 'Polyphonic 16' },
      { label: 'Awwwards', value: 'Site of the Day' },
    ],
    demoUrl: 'https://example.com/aether', // TODO: replace with real link
    repoUrl: 'https://github.com/pranavdeshmukh/aether-studio', // TODO: replace with real link
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    accentColor: '#ec4899',
  },
  {
    id: 'nexus-design-system',
    title: 'Nexus Enterprise Design System',
    subtitle: 'Multi-brand headless token framework powering 30+ distributed web applications',
    category: 'Architecture / Design System',
    featured: false,
    year: '2024',
    // TODO: replace with real project data
    overview: 'Engineered an accessible, zero-runtime CSS token engine and component library for cross-platform products. Reduced engineering handoff time by 40% while ensuring 100% WCAG AAA color contrast compliance.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Style Dictionary', 'Storybook', 'Figma API'],
    stats: [
      { label: 'Adopted Apps', value: '32 Teams' },
      { label: 'Bundle Footprint', value: '7.8 KB' },
      { label: 'Accessibility', value: '100% AAA' },
    ],
    demoUrl: 'https://example.com/nexus', // TODO: replace with real link
    repoUrl: 'https://github.com/pranavdeshmukh/nexus-system', // TODO: replace with real link
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: '#06b6d4',
  },
  {
    id: 'lumina-cloud',
    title: 'Lumina Cloud Edge Platform',
    subtitle: 'Serverless real-time edge telemetry dashboard with collaborative live cursors',
    category: 'Full-Stack / Distributed Cloud',
    featured: false,
    year: '2023',
    // TODO: replace with real project data
    overview: 'Distributed monitoring console enabling multi-tenant engineering teams to trace microservice spans in real time with WebSocket CRDT synchronization, optimistic UI updates, and zero-flicker re-renders.',
    technologies: ['Next.js', 'FastAPI', 'Redis Streams', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    stats: [
      { label: 'Sync Latency', value: '< 18ms' },
      { label: 'Throughput', value: '12k events/s' },
      { label: 'Uptime', value: '99.99%' },
    ],
    demoUrl: 'https://example.com/lumina', // TODO: replace with real link
    repoUrl: 'https://github.com/pranavdeshmukh/lumina-cloud', // TODO: replace with real link
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: '#8b5cf6',
  },
];

// Experience Milestones
export const EXPERIENCE_DATA = [
  {
    period: '2024 — PRESENT',
    role: 'Lead Creative Engineer & Architect',
    company: 'Vanguard Interactive Labs',
    location: 'San Francisco, CA',
    summary: 'Directing the creative technology studio in prototyping next-generation interactive web products, 3D WebGL experiences, and high-conversion flagship platforms for global brands.',
    highlights: [
      'Architected 12 Awwwards-nominated client web applications with custom WebGL shaders and GSAP ScrollTrigger pipelines.',
      'Reduced core web vitals LCP across portfolio sites by 64% through custom asset streaming pipelines and dynamic vertex LOD.',
      'Mentored 8 senior engineers in creative computing and GPU-accelerated UI interaction patterns.',
    ],
    technologies: ['Three.js', 'React', 'GSAP', 'GLSL', 'TypeScript', 'Tailwind CSS'],
  },
  {
    period: '2022 — 2024',
    role: 'Senior Full-Stack Engineer',
    company: 'Hyperion Spatial Systems',
    location: 'Remote',
    summary: 'Engineered realtime data visualization dashboards, 3D digital twins, and distributed streaming telemetry backends.',
    highlights: [
      'Built a WebGL spatial rendering engine that handled 250k dynamic geometry instances at steady 60fps.',
      'Designed end-to-end WebSocket communication protocol with protobuf serialization, cutting client payload overhead by 48%.',
      'Spearheaded the migration of legacy monolithic client code into a modular micro-frontend architecture.',
    ],
    technologies: ['React', 'Node.js', 'WebGL', 'Docker', 'PostgreSQL', 'Redis'],
  },
  {
    period: '2020 — 2022',
    role: 'Frontend Software Engineer',
    company: 'Aura Interactive Studio',
    location: 'New York, NY',
    summary: 'Crafted bespoke marketing web experiences, e-commerce flagship storefronts, and brand storytelling portals.',
    highlights: [
      'Developed 20+ responsive web applications with rich micro-animations, SVG morphing, and physics interactions.',
      'Co-authored internal component library and animation primitive guidelines adopted across all engineering pods.',
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'GSAP', 'CSS3/Sass', 'REST APIs'],
  },
];
