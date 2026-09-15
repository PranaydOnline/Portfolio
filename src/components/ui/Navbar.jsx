import { useState, useEffect } from 'react';
import Magnet from '../react-bits/Magnet';
import { Menu, X } from 'lucide-react';

/**
 * Navbar
 * Floating glassmorphic navigation bar with active chapter tracking,
 * magnetic desktop pills, and responsive mobile navigation drawer.
 */
export default function Navbar({ activeChapterIndex = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#about', index: 1 },
    { name: 'Constellation', href: '#skills', index: 2 },
    { name: 'Artifacts', href: '#projects', index: 3 },
    { name: 'Journey', href: '#experience', index: 4 },
    { name: 'Contact', href: '#contact', index: 5 },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-4 sm:px-8 lg:px-12 py-4 sm:py-5 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Mark */}
          <Magnet magnetStrength={0.25} padding={25}>
            <a
              href="#hero"
              className={`px-3.5 sm:px-4 py-2 rounded-2xl transition-all duration-300 flex items-center gap-2.5 ${
                scrolled
                  ? 'glass-pill shadow-lg shadow-black/40 border-white/10'
                  : 'bg-transparent'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_#8b5cf6]" />
              <span className="font-display font-black text-sm tracking-wider text-white">
                PRANAV
              </span>
            </a>
          </Magnet>

          {/* Desktop Center Pill Navigation */}
          <nav
            className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'glass-pill shadow-xl shadow-black/50 border-white/15'
                : 'glass-panel-subtle border-white/5'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeChapterIndex === link.index;
              return (
                <Magnet key={link.name} magnetStrength={0.2} padding={15}>
                  <a
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 block ${
                      isActive
                        ? 'bg-white/15 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] font-semibold'
                        : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </Magnet>
              );
            })}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Magnet magnetStrength={0.25} padding={20}>
              <a
                href="#contact"
                className="hidden sm:flex px-4 py-2 rounded-xl glass-pill text-xs font-mono text-neutral-200 hover:text-white hover:border-violet-500/40 transition-colors items-center gap-2 border border-white/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Let's Talk</span>
              </a>
            </Magnet>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl glass-pill text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-neutral-950/80 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-12 px-6 transition-all animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col space-y-4 max-w-sm mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              Navigation // Chapters
            </p>
            {navLinks.map((link) => {
              const isActive = activeChapterIndex === link.index;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-5 py-3.5 rounded-2xl text-base font-mono flex items-center justify-between border transition-all ${
                    isActive
                      ? 'bg-white/10 border-violet-500/40 text-white font-bold'
                      : 'border-white/5 bg-neutral-900/40 text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-500 font-mono">
                    0{link.index}
                  </span>
                </a>
              );
            })}

            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full py-3.5 rounded-2xl bg-white text-neutral-950 font-mono font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Initiate Conversation</span>
              </a>
            </div>
          </div>

          <div className="text-center text-xs font-mono text-neutral-600">
            Tap anywhere to close
          </div>
        </div>
      )}
    </>
  );
}
