import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * SplitText component inspired by React Bits (https://reactbits.dev)
 * Splits text into animated characters or words with staggered GSAP reveal.
 */
export default function SplitText({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.035,
  duration = 0.8,
  ease = 'power3.out',
  splitBy = 'words', // 'words' | 'chars'
  triggerOnScroll = false,
  triggerElement = null,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    const elements = containerRef.current.querySelectorAll('.split-item');
    if (!elements.length) return;

    // Reset initial state
    gsap.set(elements, {
      opacity: 0,
      y: 36,
      rotateX: -20,
      filter: 'blur(8px)',
    });

    const animationConfig = {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      delay,
      ease,
    };

    if (triggerOnScroll && triggerElement) {
      animationConfig.scrollTrigger = {
        trigger: triggerElement,
        start: 'top 80%',
        once: true,
      };
    }

    const tween = gsap.to(elements, animationConfig);

    return () => {
      tween.kill();
    };
  }, [text, delay, stagger, duration, ease, triggerOnScroll, triggerElement]);

  if (splitBy === 'chars') {
    return (
      <span ref={containerRef} className={`inline-block ${className}`} aria-label={text}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="split-item inline-block will-change-transform"
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  }

  // Split by words
  return (
    <span ref={containerRef} className={`inline-block ${className}`} aria-label={text}>
      {text.split(' ').map((word, index) => (
        <span key={index} className="inline-block mr-[0.25em] overflow-hidden">
          <span className="split-item inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
