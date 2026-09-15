import { useRef } from 'react';
import { SKILLS_DATA } from '../../data/portfolioData';
import SpotlightCard from '../react-bits/SpotlightCard';
import { Terminal, Box, Server, Sparkles, Orbit } from 'lucide-react';

/**
 * Skills Section (The Fractured Constellation)
 * Chapter 03: The central object fractures into orbiting particles and fragments.
 * Skills map directly to these fragments across an asymmetric grid.
 */
export default function Skills() {
  const sectionRef = useRef(null);

  const categoryIcons = [
    <Box key="3d" className="w-5 h-5 text-emerald-400" />,
    <Terminal key="frontend" className="w-5 h-5 text-teal-400" />,
    <Server key="backend" className="w-5 h-5 text-cyan-400" />,
    <Sparkles key="design" className="w-5 h-5 text-green-400" />,
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20 sm:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase flex items-center gap-2">
            <Orbit className="w-3.5 h-3.5" />
            <span>Chapter 03 / The Fractured Constellation</span>
          </span>
          <span className="h-px w-8 sm:w-12 bg-emerald-500/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white">
              Technical Constellation
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl font-light">
              As the core entity deconstructs, its constituent vertices arrange into technical competencies spanning procedural mathematics, reactive frontends, and distributed backends.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400 bg-neutral-900/60 border border-neutral-800 px-3.5 sm:px-4 py-2 rounded-xl backdrop-blur-md self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Core Domains • 24 Specializations</span>
          </div>
        </div>

        {/* Asymmetric Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {SKILLS_DATA.map((category, index) => (
            <SpotlightCard
              key={category.category}
              spotlightColor="rgba(16, 185, 129, 0.16)"
              borderColor="rgba(16, 185, 129, 0.32)"
              className="p-6 sm:p-8 flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      {categoryIcons[index]}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">
                        Domain 0{index + 1}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono transition-all duration-200 flex items-center gap-1.5 sm:gap-2 border ${
                        skill.hot
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:border-emerald-400'
                          : 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      {skill.hot && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                      )}
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-neutral-400 opacity-60">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


              <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Constellation Cluster</span>
                <span className="text-emerald-400">Status: Active</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
