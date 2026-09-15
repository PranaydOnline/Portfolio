import { useRef } from 'react';
import SplitText from '../react-bits/SplitText';
import DecryptedText from '../react-bits/DecryptedText';
import ShinyText from '../react-bits/ShinyText';
import Magnet from '../react-bits/Magnet';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Sparkles } from 'lucide-react';

/**
 * Hero Section
 * Opens on a blank, spacious viewport with the single idle 3D morphing object.
 * Reveals high-impact typography using React Bits components.
 */
export default function Hero() {
  const sectionRef = useRef(null);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-8 sm:pb-12 z-10 select-none overflow-hidden"
    >
      {/* Top Status Pill */}
      <div className="w-full flex justify-center items-center">
        <div className="glass-pill px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-2 sm:gap-2.5 shadow-xl border border-white/10 hover:border-violet-500/40 transition-colors max-w-[90vw] truncate">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <ShinyText
            text={PERSONAL_INFO.status}
            className="text-[11px] sm:text-xs tracking-wider uppercase font-mono font-medium truncate"
            speed={3.5}
          />
        </div>
      </div>

      {/* Main Dramatic Display Typography */}
      <div className="text-center max-w-5xl mx-auto my-auto flex flex-col items-center w-full px-2">
        <p className="text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 font-mono mb-3 sm:mb-4 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
          <span>Interactive Portfolio & Story</span>
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight font-display text-white leading-[1.02] sm:leading-[0.95] mb-4 sm:mb-6 break-words max-w-full">
          <SplitText
            text={PERSONAL_INFO.name}
            stagger={0.04}
            duration={1.0}
            delay={0.2}
            splitBy="chars"
            className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent"
          />
        </h1>

        <div className="max-w-2xl text-sm sm:text-lg md:text-xl text-neutral-300 font-light tracking-wide leading-relaxed">
          <DecryptedText
            text={PERSONAL_INFO.role}
            speed={30}
            maxIterations={12}
            className="font-mono text-violet-300/90 font-medium text-xs sm:text-base md:text-lg"
          />
          <p className="mt-2.5 sm:mt-3 text-neutral-400 text-xs sm:text-base max-w-xl mx-auto font-sans font-normal leading-normal sm:leading-relaxed">
            {PERSONAL_INFO.shortBio}
          </p>
        </div>

        {/* Action Pills */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Magnet magnetStrength={0.2} padding={30} wrapperClassName="w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 text-center"
            >
              <span>Explore Selected Work</span>
              <span className="text-xs font-mono">↓</span>
            </a>
          </Magnet>

          <Magnet magnetStrength={0.2} padding={30} wrapperClassName="w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full glass-panel text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10 text-center flex items-center justify-center"
            >
              <span>Initiate Conversation</span>
            </a>
          </Magnet>
        </div>
      </div>


      {/* Bottom Scroll Prompt */}
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 hover:text-white transition-colors cursor-pointer"
        >
          <span>Scroll to enter story</span>
          <div className="w-5 h-9 rounded-full border border-neutral-700 flex items-start justify-center p-1 group-hover:border-violet-400 transition-colors">
            <span className="w-1.5 h-2.5 rounded-full bg-violet-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
