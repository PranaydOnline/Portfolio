import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * DecryptedText component inspired by React Bits (https://reactbits.dev)
 * Randomly scrambles characters before resolving to original string.
 */
export default function DecryptedText({
  text = '',
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start', // 'start' | 'end' | 'center'
  useOriginalCharsOnly = false,
  className = '',
  parentClassName = '',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><',
  animateOn = 'view', // 'view' | 'hover'
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const originalLength = text.length;

    clearInterval(intervalRef.current);
    setIsScrambling(true);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';

            let isResolved = false;
            if (sequential) {
              if (revealDirection === 'start') {
                isResolved = index < Math.floor((iteration / maxIterations) * originalLength);
              } else if (revealDirection === 'end') {
                isResolved = index >= originalLength - Math.floor((iteration / maxIterations) * originalLength);
              } else {
                const center = originalLength / 2;
                const distFromCenter = Math.abs(index - center);
                isResolved = distFromCenter <= (iteration / maxIterations) * (originalLength / 2);
              }
            } else {
              isResolved = iteration >= maxIterations;
            }

            if (isResolved) return char;

            if (useOriginalCharsOnly) {
              return text[Math.floor(Math.random() * originalLength)];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');
      });

      iteration++;

      if (iteration > maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  }, [characters, maxIterations, revealDirection, sequential, speed, text, useOriginalCharsOnly]);

  const scrambleRef = useRef(scramble);
  useEffect(() => {
    scrambleRef.current = scramble;
  }, [scramble]);



  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              scrambleRef.current();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      const el = containerRef.current;
      if (el) {
        observer.observe(el);
      }

      return () => {
        if (el) observer.unobserve(el);
        observer.disconnect();
        clearInterval(intervalRef.current);
      };
    }
  }, [animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && !isScrambling) {
      scramble();
    }
  };


  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block ${parentClassName}`}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
