import { useState, useEffect } from 'react';
import { CHAPTER_THEMES } from '../../data/themes';

/**
 * ScrollProgress
 * Fixed vertical chapter indicator for desktop, plus an ultra-sleek
 * horizontal reading progress bar at the top of the viewport for mobile/tablet devices.
 */
export default function ScrollProgress({ activeChapterIndex = 0 }) {
  const currentChapter = CHAPTER_THEMES[activeChapterIndex] || CHAPTER_THEMES[0];
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(Math.max(window.scrollY / totalHeight, 0), 1));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile / Tablet Top Scroll Bar */}
      <div
        className="fixed top-0 left-0 w-full h-[2px] z-50 lg:hidden bg-neutral-900/60 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-sky-400 transition-all duration-75 ease-out shadow-[0_0_8px_var(--accent-glow)]"
          style={{ width: `${scrollPercent * 100}%` }}
        />
      </div>

      {/* Desktop Vertical Progress Aside */}
      <aside
        className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-4 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Active Chapter Label */}
        <div className="rotate-90 origin-center mb-6 text-[11px] font-mono tracking-widest text-neutral-400 uppercase whitespace-nowrap">
          {currentChapter.label}
        </div>

        {/* Chapter Indicator Dots */}
        <div className="flex flex-col items-center gap-3">
          {CHAPTER_THEMES.map((chapter, idx) => {
            const isActive = idx === activeChapterIndex;
            const isPassed = idx < activeChapterIndex;

            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="pointer-events-auto group relative py-1 flex items-center justify-center cursor-pointer"
                title={chapter.name}
              >
                <span
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-2.5 h-6 bg-white shadow-[0_0_12px_var(--accent-glow)]'
                      : isPassed
                      ? 'w-1.5 h-1.5 bg-neutral-500 hover:bg-neutral-300'
                      : 'w-1.5 h-1.5 bg-neutral-800 hover:bg-neutral-500'
                  }`}
                />
                <span className="absolute right-6 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                  {chapter.name}
                </span>
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
