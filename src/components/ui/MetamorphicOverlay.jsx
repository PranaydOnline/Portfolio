/**
 * MetamorphicOverlay
 * Full-bleed atmospheric light and radial gradient overlay that shifts hue
 * and ambient tint smoothly between chapters, avoiding hard section dividers.
 */
export default function MetamorphicOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-1000 ease-out"
      aria-hidden="true"
    >
      {/* Central Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[140px] opacity-25 transition-all duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-primary) 0%, var(--accent-secondary) 50%, transparent 80%)',
        }}
      />

      {/* Top Right Corner Ambient Light */}
      <div
        className="absolute -top-[20%] -right-[15%] w-[60vw] h-[60vh] rounded-full blur-[160px] opacity-15 transition-all duration-1000 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
        }}
      />

      {/* Bottom Left Corner Ambient Light */}
      <div
        className="absolute -bottom-[20%] -left-[15%] w-[60vw] h-[60vh] rounded-full blur-[160px] opacity-15 transition-all duration-1000 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
        }}
      />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#09090b_95%] opacity-70" />
    </div>
  );
}
