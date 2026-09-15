import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor component inspired by React Bits (https://reactbits.dev)
 * Smooth trailing cursor with interactive state scaling on hoverable targets.
 */
export default function CustomCursor({
  color = 'rgba(255, 255, 255, 0.85)',
  ringColor = 'rgba(139, 92, 246, 0.45)',
}) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check for touch device or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hoverable elements
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hoverable="true"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      );
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const render = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } hidden md:block`}
    >
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full will-change-transform"
        style={{
          backgroundColor: color,
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border transition-all duration-200 ease-out will-change-transform ${
          isHovering
            ? 'scale-150 border-white/60 bg-white/5'
            : isClicking
            ? 'scale-90 border-violet-400/80 bg-violet-500/20'
            : 'scale-100 border-neutral-400/30'
        }`}
        style={{
          boxShadow: isHovering ? `0 0 20px ${ringColor}` : 'none',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </div>
  );
}
