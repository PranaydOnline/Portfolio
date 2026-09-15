import { useRef } from 'react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import SpotlightCard from '../react-bits/SpotlightCard';
import Magnet from '../react-bits/Magnet';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

/**
 * Projects Section (The Dimensional Portal)
 * Chapter 04: The 3D entity expands outward into an open wireframe chassis,
 * revealing the featured creative engineering artifacts.
 */
export default function Projects() {
  const sectionRef = useRef(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20 sm:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Chapter 04 / The Dimensional Portal</span>
          </span>
          <span className="h-px w-8 sm:w-12 bg-amber-500/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white">
              Selected Artifacts
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl font-light">
              Engineering breakthroughs where mathematical modeling, interactive WebGL shaders, and high-concurrency cloud systems converge.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3.5 sm:px-4 py-2 rounded-xl backdrop-blur-md self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Engineering Works</span>
          </div>
        </div>

        {/* Asymmetric Showcase Grid */}
        <div className="space-y-8 sm:space-y-12">
          {PROJECTS_DATA.map((project, index) => {
            // TODO: replace with real project data when updating portfolio works
            const isEven = index % 2 === 0;

            return (
              <SpotlightCard
                key={project.id}
                spotlightColor="rgba(245, 158, 11, 0.16)"
                borderColor="rgba(245, 158, 11, 0.3)"
                className="p-5 sm:p-8 lg:p-12 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Project Info Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>

                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">
                          {project.year}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-pink-500/15 text-pink-300 border border-pink-500/30 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-pink-400 animate-ping" />
                            Flagship
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-bold font-display text-white mb-2 hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-neutral-300 mb-4 font-mono">
                        {project.subtitle}
                      </p>

                      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.overview}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats and Action Links */}
                    <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      {/* Metric Stats */}
                      <div className="grid grid-cols-3 gap-3 sm:flex sm:gap-6 w-full sm:w-auto">
                        {project.stats.map((st) => (
                          <div key={st.label}>
                            <p className="text-[10px] sm:text-xs font-mono uppercase text-neutral-500">{st.label}</p>
                            <p className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">{st.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Buttons */}
                      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                        <Magnet magnetStrength={0.2} padding={30} wrapperClassName="flex-1 sm:flex-none">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-white text-neutral-950 font-medium text-xs font-mono tracking-wide flex items-center justify-center gap-2 transition-transform duration-200 hover:bg-neutral-200 shadow-md"
                          >
                            <span>Launch Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </Magnet>

                        <Magnet magnetStrength={0.2} padding={30}>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl glass-panel text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors flex items-center justify-center"
                            aria-label="View Source Code on GitHub"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </Magnet>
                      </div>
                    </div>
                  </div>

                  {/* Project Visual Matrix Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 flex flex-col justify-between group-hover:border-amber-500/30 transition-colors`}>

                      {/* Ambient Grid overlay */}
                      <div
                        className="absolute inset-0 opacity-15"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                          backgroundSize: '24px 24px',
                        }}
                      />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-neutral-400">
                          Artifact Spec // 0{index + 1}
                        </span>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-[0_0_10px_#f59e0b]" />
                      </div>

                      {/* Graphic Wireframe Mock Representation */}
                      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center p-4">
                        <div className="w-24 h-24 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                          <span className="text-3xl font-display font-black text-white/80">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-neutral-300 tracking-wider uppercase">
                          WebGL Accelerated Core
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span>Latency: Optimal</span>
                        <span>GPU Compute: Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
