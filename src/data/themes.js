// Theme definitions mapped across the 6 narrative chapters
export const CHAPTER_THEMES = [
  {
    id: 'hero',
    name: 'Genesis',
    label: '01 / Genesis',
    accentPrimary: '#8b5cf6', // Astral Violet
    accentSecondary: '#6366f1', // Indigo
    accentGlow: 'rgba(139, 92, 246, 0.45)',
    ambientTint: 'rgba(99, 102, 241, 0.08)',
    // 3D Morphing Object parameters
    object: {
      shape: 'sphere',
      deformFactor: 0.28,
      noiseSpeed: 0.6,
      wireframeOpacity: 0.22,
      particleSpread: 0.1,
      coreScale: 1.4,
      rotationSpeedY: 0.005,
      cameraZ: 4.8,
      offsetX: 0,
      offsetY: 0,
      colorA: '#8b5cf6',
      colorB: '#3b82f6',
    },
  },
  {
    id: 'about',
    name: 'Philosophy',
    label: '02 / Story',
    accentPrimary: '#06b6d4', // Electric Cyan
    accentSecondary: '#3b82f6', // Sapphire Blue
    accentGlow: 'rgba(6, 182, 212, 0.4)',
    ambientTint: 'rgba(6, 182, 212, 0.07)',
    object: {
      shape: 'prism',
      deformFactor: 0.55,
      noiseSpeed: 0.9,
      wireframeOpacity: 0.45,
      particleSpread: 0.35,
      coreScale: 1.55,
      rotationSpeedY: 0.008,
      cameraZ: 4.6,
      offsetX: 1.2, // Shifts right so content reads clearly on the left
      offsetY: 0.1,
      colorA: '#06b6d4',
      colorB: '#2563eb',
    },
  },
  {
    id: 'skills',
    name: 'Constellation',
    label: '03 / Mastery',
    accentPrimary: '#10b981', // Emerald Nebula
    accentSecondary: '#06b6d4', // Teal Cyan
    accentGlow: 'rgba(16, 185, 129, 0.4)',
    ambientTint: 'rgba(16, 185, 129, 0.07)',
    object: {
      shape: 'constellation',
      deformFactor: 0.85,
      noiseSpeed: 1.2,
      wireframeOpacity: 0.35,
      particleSpread: 1.4, // Fractured into orbiting particles
      coreScale: 1.2,
      rotationSpeedY: 0.012,
      cameraZ: 5.2,
      offsetX: -0.8,
      offsetY: 0,
      colorA: '#10b981',
      colorB: '#06b6d4',
    },
  },
  {
    id: 'projects',
    name: 'Dimensional Portal',
    label: '04 / Artifacts',
    accentPrimary: '#f59e0b', // Solar Amber
    accentSecondary: '#ec4899', // Coral Pink
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    ambientTint: 'rgba(245, 158, 11, 0.06)',
    object: {
      shape: 'portal',
      deformFactor: 1.15,
      noiseSpeed: 1.4,
      wireframeOpacity: 0.55,
      particleSpread: 1.0,
      coreScale: 1.7,
      rotationSpeedY: 0.015,
      cameraZ: 4.9,
      offsetX: 0.9,
      offsetY: -0.2,
      colorA: '#f59e0b',
      colorB: '#ec4899',
    },
  },
  {
    id: 'experience',
    name: 'Chronos Strand',
    label: '05 / Journey',
    accentPrimary: '#a855f7', // Cosmic Purple
    accentSecondary: '#6366f1', // Deep Indigo
    accentGlow: 'rgba(168, 85, 247, 0.4)',
    ambientTint: 'rgba(168, 85, 247, 0.06)',
    object: {
      shape: 'helix',
      deformFactor: 0.7,
      noiseSpeed: 0.8,
      wireframeOpacity: 0.4,
      particleSpread: 0.5,
      coreScale: 1.35,
      rotationSpeedY: 0.009,
      cameraZ: 4.7,
      offsetX: -1.1,
      offsetY: 0.1,
      colorA: '#a855f7',
      colorB: '#6366f1',
    },
  },
  {
    id: 'contact',
    name: 'Convergence',
    label: '06 / Contact',
    accentPrimary: '#38bdf8', // Sky Blue
    accentSecondary: '#c084fc', // Lavender
    accentGlow: 'rgba(56, 189, 248, 0.35)',
    ambientTint: 'rgba(56, 189, 248, 0.05)',
    object: {
      shape: 'ring',
      deformFactor: 0.15, // Calm minimal gem
      noiseSpeed: 0.3,
      wireframeOpacity: 0.3,
      particleSpread: 0.15,
      coreScale: 1.3,
      rotationSpeedY: 0.003,
      cameraZ: 4.5,
      offsetX: 0,
      offsetY: 0,
      colorA: '#38bdf8',
      colorB: '#c084fc',
    },
  },
];
