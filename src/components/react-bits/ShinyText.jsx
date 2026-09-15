/**
 * ShinyText component inspired by React Bits (https://reactbits.dev)
 * Smooth metallic gradient shimmer sweep across typography.
 */
export default function ShinyText({
  text = '',
  disabled = false,
  speed = 4,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.95)',
  baseColor = 'rgba(161, 161, 170, 0.8)',
}) {
  return (
    <span
      className={`inline-block relative overflow-hidden bg-clip-text text-transparent font-medium ${className}`}
      style={{
        backgroundImage: disabled
          ? 'none'
          : `linear-gradient(120deg, ${baseColor} 0%, ${baseColor} 35%, ${shimmerColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`,
        backgroundSize: '250% 100%',
        animation: disabled ? 'none' : `shine-sweep ${speed}s linear infinite`,
      }}
    >
      <style>{`
        @keyframes shine-sweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      {text}
    </span>
  );
}
