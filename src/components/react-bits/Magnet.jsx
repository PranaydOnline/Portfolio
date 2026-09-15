import { useRef, useState, useEffect } from 'react';

/**
 * Magnet component inspired by React Bits (https://reactbits.dev)
 * Attracts the child element towards the mouse cursor on hover with spring physics.
 */
export default function Magnet({
  children,
  padding = 60,
  magnetStrength = 0.25,
  activeTransition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
  inactiveTransition = 'transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  wrapperClassName = '',
  innerClassName = '',
  disabled = false,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) return;

    const element = magnetRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const dist = Math.hypot(clientX - centerX, clientY - centerY);

      if (dist < Math.max(width, height) / 2 + padding) {
        setIsHovered(true);
        const deltaX = (clientX - centerX) * magnetStrength;
        const deltaY = (clientY - centerY) * magnetStrength;
        setPosition({ x: deltaX, y: deltaY });
      } else if (isHovered) {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, magnetStrength, isHovered, disabled]);

  return (
    <div ref={magnetRef} className={`inline-block ${wrapperClassName}`}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isHovered ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
