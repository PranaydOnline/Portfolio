/**
 * NoiseOverlay component inspired by React Bits (https://reactbits.dev)
 * Cinematic SVG film grain overlay for physical texture and depth.
 */
export default function NoiseOverlay({ opacity = 0.035 }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 w-full h-full"
      style={{ opacity, mixBlendMode: 'overlay' }}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain)" />
      </svg>
    </div>
  );
}
