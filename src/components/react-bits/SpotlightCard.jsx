import { useRef, useState } from 'react';

/**
 * SpotlightCard component inspired by React Bits (https://reactbits.dev)
 * Dynamic cursor-aware radial highlight on container surface and borders.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(139, 92, 246, 0.15)',
  borderColor = 'rgba(139, 92, 246, 0.35)',
  size = 350,
}) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/50 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl z-0"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />
      {/* Subtle border trace */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: opacity * 0.7,
          background: `radial-gradient(${size * 0.8}px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 65%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
