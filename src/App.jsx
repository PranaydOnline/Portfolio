import { useState } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import MorphingCanvas from './components/canvas/MorphingCanvas';
import MetamorphicOverlay from './components/ui/MetamorphicOverlay';
import NoiseOverlay from './components/react-bits/NoiseOverlay';
import CustomCursor from './components/react-bits/CustomCursor';
import Navbar from './components/ui/Navbar';
import ScrollProgress from './components/ui/ScrollProgress';
import SoundToggle from './components/ui/SoundToggle';

// Narrative Chapters
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function App() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Initialize Lenis momentum scrolling linked to GSAP ScrollTrigger
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-violet-500/30 selection:text-white">
      {/* 1. Procedural 3D WebGL Morphing Entity */}
      <MorphingCanvas
        currentChapterIndex={activeChapterIndex}
        onChapterChange={setActiveChapterIndex}
      />

      {/* 2. Full-bleed Ambient Metamorphic Light Overlay */}
      <MetamorphicOverlay />

      {/* 3. Subtle Film Grain Texture */}
      <NoiseOverlay opacity={0.03} />

      {/* 4. Luxury Custom Trailing Cursor */}
      <CustomCursor />

      {/* 5. Navigation & UI Controls */}
      <Navbar activeChapterIndex={activeChapterIndex} />
      <ScrollProgress activeChapterIndex={activeChapterIndex} />
      <SoundToggle />

      {/* 6. Main Narrative Content Container */}
      <main id="portfolio-root" className="relative z-10 w-full overflow-hidden">
        {/* Chapter 01: Genesis */}
        <Hero />

        {/* Chapter 02: Philosophy */}
        <About />

        {/* Chapter 03: The Fractured Constellation */}
        <Skills />

        {/* Chapter 04: The Dimensional Portal */}
        <Projects />

        {/* Chapter 05: The Chronos Strand */}
        <Experience />

        {/* Chapter 06: The Convergence */}
        <Contact />
      </main>
    </div>
  );
}
