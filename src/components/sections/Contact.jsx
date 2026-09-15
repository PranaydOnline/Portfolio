import { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import SpotlightCard from '../react-bits/SpotlightCard';
import Magnet from '../react-bits/Magnet';
import ShinyText from '../react-bits/ShinyText';
import { Send, Copy, Check, FileText, Sparkles, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../ui/Icons';

/**
 * Contact Section (The Convergence)
 * Chapter 06: The morphing entity settles back into a serene, radiant luminary ring.
 * Working interactive form UI stub with realistic submission states and social handles.
 */
export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    // Simulate graceful network dispatch
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-20 sm:pt-32 pb-10 sm:pb-12 z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full my-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter 06 / The Convergence</span>
          </span>
          <span className="h-px w-8 sm:w-12 bg-sky-500/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.05]">
                Let’s create something extraordinary.
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Whether you’re commissioning an Awwwards-caliber digital experience, architecting a high-throughput platform, or discussing advisory roles—my inbox is open.
              </p>
            </div>

            {/* Email Direct Pill */}
            <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-neutral-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 overflow-hidden min-w-0">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <div className="truncate min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase">Direct Frequency</p>
                  <p className="text-xs sm:text-sm font-mono text-white truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <Magnet magnetStrength={0.2} padding={20} wrapperClassName="self-end sm:self-auto">
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </Magnet>
            </div>


            {/* Location & Status Info */}
            <div className="space-y-3 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Q2/Q3 2026 Opportunities</span>
              </div>
            </div>

            {/* Social Pills */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Connect / Networks</p>
              <div className="flex flex-wrap gap-3">
                <Magnet magnetStrength={0.25} padding={25}>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-panel text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </Magnet>

                <Magnet magnetStrength={0.25} padding={25}>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-panel text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </Magnet>

                <Magnet magnetStrength={0.25} padding={25}>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-panel text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    <TwitterXIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span>Twitter/X</span>
                  </a>
                </Magnet>


                <Magnet magnetStrength={0.25} padding={25}>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    className="px-4 py-2 rounded-xl glass-panel text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Resume (PDF)</span>
                  </a>
                </Magnet>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.15)"
              borderColor="rgba(56, 189, 248, 0.3)"
              className="p-8 sm:p-12 hover:border-sky-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Initiate Project Vision
              </h3>
              <p className="text-neutral-400 text-sm mb-8 font-light">
                Fill out the inquiry channel below and I will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                    Name / Identity <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-sky-500/80 focus:ring-1 focus:ring-sky-500/50 font-mono text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                    Email Address <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="satoshi@domain.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-sky-500/80 focus:ring-1 focus:ring-sky-500/50 font-mono text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                    Scope of Collaboration / Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, timeline, and architectural objectives..."
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-sky-500/80 focus:ring-1 focus:ring-sky-500/50 font-mono text-sm transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Magnet magnetStrength={0.2} padding={30}>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-neutral-950 font-medium font-mono text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-900 font-semibold">Message Transmitted</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </Magnet>

                  {formStatus === 'success' && (
                    <p className="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Thank you! Your dispatch was received. Pranav will reply promptly.</span>
                    </p>
                  )}
                </div>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <p>© {new Date().getFullYear()} Pranav Deshmukh. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Engineered with</span>
          <ShinyText text="React • Three.js • GSAP • React Bits" speed={4} />
        </p>
      </footer>
    </section>
  );
}
