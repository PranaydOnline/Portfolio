import { useRef } from 'react';
import { ABOUT_DATA } from '../../data/portfolioData';
import SpotlightCard from '../react-bits/SpotlightCard';
import DecryptedText from '../react-bits/DecryptedText';
import { Compass, Cpu, Layers } from 'lucide-react';

/**
 * About / Story Section
 * Chapter 02: The Morphing Object compacts and translates to the right,
 * clearing negative space on the left for the narrative to unfold.
 */
export default function About() {
  const sectionRef = useRef(null);

  const pillarIcons = [
    <Compass key="compass" className="w-5 h-5 text-cyan-400" />,
    <Cpu key="cpu" className="w-5 h-5 text-blue-400" />,
    <Layers key="layers" className="w-5 h-5 text-indigo-400" />,
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20 sm:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            Chapter 02 / Philosophy
          </span>
          <span className="h-px w-8 sm:w-12 bg-cyan-500/40" />
        </div>

        {/* Narrative Split: Left side heavy with text, right side balances the 3D entity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              {ABOUT_DATA.headline}
            </h2>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
              {ABOUT_DATA.narrative.map((paragraph, index) => (
                <p key={index} className="backdrop-blur-xs">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick stats banner */}
            <div className="pt-4 flex flex-wrap gap-4 sm:gap-8 border-t border-neutral-800">
              <div>
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">Philosophy</p>
                <p className="text-lg sm:text-xl font-bold font-display text-white mt-0.5 sm:mt-1">Visceral Utility</p>
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">Discipline</p>
                <p className="text-lg sm:text-xl font-bold font-display text-white mt-0.5 sm:mt-1">Creative Systems</p>
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">Execution</p>
                <p className="text-lg sm:text-xl font-bold font-display text-white mt-0.5 sm:mt-1">60FPS WebGL</p>
              </div>
            </div>
          </div>

          {/* Right column placeholder spacing where the 3D crystalline object rotates */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center pointer-events-none min-h-[350px]">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-72 h-72 rounded-full border border-cyan-500/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-20">
          {ABOUT_DATA.pillars.map((pillar, index) => (
            <SpotlightCard
              key={pillar.title}
              spotlightColor="rgba(6, 182, 212, 0.18)"
              borderColor="rgba(6, 182, 212, 0.35)"
              className="p-6 sm:p-8 group hover:border-cyan-500/40 transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  {pillarIcons[index]}
                </div>
                <span className="text-xs font-mono text-neutral-500">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="pt-4 border-t border-neutral-800/80 flex items-baseline justify-between">
                <span className="text-2xl font-bold font-mono text-cyan-400">
                  <DecryptedText text={pillar.metric} speed={50} maxIterations={8} />
                </span>
                <span className="text-xs font-mono text-neutral-400">{pillar.submetric}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
