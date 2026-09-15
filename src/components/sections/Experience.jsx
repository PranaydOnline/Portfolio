import { useRef } from 'react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import SpotlightCard from '../react-bits/SpotlightCard';
import { History, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';

/**
 * Experience Section (The Chronos Strand)
 * Chapter 05: The 3D entity morphs into a continuous dimensional helix/strand,
 * tracing milestones along an interactive chronological timeline.
 */
export default function Experience() {
  const sectionRef = useRef(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20 sm:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase flex items-center gap-2">
            <History className="w-3.5 h-3.5" />
            <span>Chapter 05 / The Chronos Strand</span>
          </span>
          <span className="h-px w-8 sm:w-12 bg-purple-500/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white">
              Career Trajectory
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl font-light">
              Architectural leadership and engineering milestones across high-growth startups, creative technology studios, and spatial computing laboratories.
            </p>
          </div>
        </div>

        {/* Vertical Chronos Timeline */}
        <div className="relative border-l border-neutral-800/90 ml-2 sm:ml-6 pl-4 sm:pl-10 space-y-8 sm:space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.company} className="relative group">

              {/* Glowing Timeline Marker centered on border line */}
              <div className="absolute -left-[24px] sm:-left-[48px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-neutral-950 border-2 border-purple-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>
              </div>

              {/* Card Content */}
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.15)"
                borderColor="rgba(168, 85, 247, 0.3)"
                className="p-5 sm:p-8 hover:border-purple-500/40 transition-all duration-300"
              >

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {exp.period}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-mono text-neutral-300 mt-1 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-900/80 border border-neutral-800 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
