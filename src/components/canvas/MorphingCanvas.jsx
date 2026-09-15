import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { coreVertexShader, coreFragmentShader } from './shaders';
import { CHAPTER_THEMES } from '../../data/themes';

gsap.registerPlugin(ScrollTrigger);

/**
 * MorphingCanvas
 * The central visual thread of the portfolio: A procedural 3D entity rendered in WebGL.
 * Morphs, deforms, fractures into constellation particles, and shifts color palettes
 * in lockstep with the user's scroll position via GSAP ScrollTrigger scrub.
 */
export default function MorphingCanvas({ onChapterChange }) {
  const mountRef = useRef(null);
  const onChapterChangeRef = useRef(onChapterChange);
  useEffect(() => {
    onChapterChangeRef.current = onChapterChange;
  }, [onChapterChange]);


  const stateRef = useRef({
    deform: 0.25,
    twist: 0.0,
    noiseFreq: 0.8,
    noiseSpeed: 0.6,
    particleSpread: 0.12,
    coreScale: 1.4,
    wireframeOpacity: 0.22,
    targetX: 0,
    targetY: 0,
    targetZ: 4.8,
    baseZ: 4.8,
    colorA: new THREE.Color(CHAPTER_THEMES[0].object.colorA),
    colorB: new THREE.Color(CHAPTER_THEMES[0].object.colorB),
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Helper functions for viewport-aware positioning
    const isMobileViewport = () => window.innerWidth < 768;
    const isTabletViewport = () => window.innerWidth < 1024;
    const calculateResponsiveZ = (baseZ) => {
      const aspect = window.innerWidth / window.innerHeight;
      if (aspect < 1.0) {
        // Narrow screens: pull back camera inversely to aspect ratio
        return baseZ * (1.05 / Math.max(aspect, 0.52));
      }
      return baseZ;
    };
    const calculateResponsiveX = (targetX) => {
      // Center object horizontally on mobile and tablet so text is never obscured
      return isTabletViewport() ? 0 : targetX;
    };

    // Detect reduced motion & mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = isMobileViewport();

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const initialZ = calculateResponsiveZ(4.8);
    stateRef.current.targetZ = initialZ;
    stateRef.current.baseZ = 4.8;
    camera.position.set(0, 0, initialZ);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Root Entity Group
    const entityGroup = new THREE.Group();
    const baseScale = isMobile ? 0.85 : 1.0;
    entityGroup.scale.set(baseScale, baseScale, baseScale);
    scene.add(entityGroup);


    // 1. Inner Iridescent Deforming Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.5, isMobile ? 24 : 40);
    const coreMaterial = new THREE.ShaderMaterial({
      vertexShader: coreVertexShader,
      fragmentShader: coreFragmentShader,
      wireframe: false,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uDeform: { value: stateRef.current.deform },
        uTwist: { value: stateRef.current.twist },
        uNoiseFreq: { value: stateRef.current.noiseFreq },
        uFresnelPower: { value: 2.2 },
        uColorA: { value: stateRef.current.colorA },
        uColorB: { value: stateRef.current.colorB },
      },
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    entityGroup.add(coreMesh);

    // 2. Outer Wireframe Cage / Geometric Chassis
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.85, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: stateRef.current.wireframeOpacity,
      blending: THREE.AdditiveBlending,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    entityGroup.add(wireframeMesh);

    // 3. Constellation / Fracturing Particle Cloud
    const particleCount = isMobile ? 600 : 1600;
    const particleGeo = new THREE.BufferGeometry();
    const originalPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    const randomDirections = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.7 + Math.random() * 0.4;

      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;

      // Random explosion dispersal vector
      randomDirections[i * 3] = (Math.random() - 0.5) * 3.5;
      randomDirections[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      randomDirections[i * 3 + 2] = (Math.random() - 0.5) * 3.5;

      particleScales[i] = Math.random() * 0.8 + 0.4;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    
    // Create soft circular sprite texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.05 : 0.065,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xa5b4fc,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    entityGroup.add(particleSystem);

    // 4. Subtle Ambient & Dynamic Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLightA = new THREE.PointLight(0x8b5cf6, 2.5, 20);
    pointLightA.position.set(4, 3, 3);
    scene.add(pointLightA);

    const pointLightB = new THREE.PointLight(0x06b6d4, 2.0, 20);
    pointLightB.position.set(-4, -2, 2);
    scene.add(pointLightB);

    // Mouse Tracking with Easing
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 0.4;
      mouseY = normY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // GSAP ScrollTrigger Timeline: Drives the object across all sections
    const state = stateRef.current;
    const ctxCleanup = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#portfolio-root',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          onUpdate: (self) => {
            // Determine active chapter index based on scroll progress
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * CHAPTER_THEMES.length),
              CHAPTER_THEMES.length - 1
            );
            if (onChapterChangeRef.current) {
              onChapterChangeRef.current(index);
            }

          },
        },
      });

      // Section Transitions:
      // 0% -> Hero
      // ~20% -> About
      // ~40% -> Skills
      // ~60% -> Projects
      // ~80% -> Experience
      // 100% -> Contact

      const aboutTheme = CHAPTER_THEMES[1].object;
      const skillsTheme = CHAPTER_THEMES[2].object;
      const projectsTheme = CHAPTER_THEMES[3].object;
      const expTheme = CHAPTER_THEMES[4].object;
      const contactTheme = CHAPTER_THEMES[5].object;

      // 1. Hero -> About
      masterTl.to(
        state,
        {
          deform: aboutTheme.deformFactor,
          twist: 0.35,
          wireframeOpacity: aboutTheme.wireframeOpacity,
          particleSpread: aboutTheme.particleSpread,
          targetX: calculateResponsiveX(aboutTheme.offsetX),
          targetY: aboutTheme.offsetY,
          baseZ: aboutTheme.cameraZ,
          targetZ: calculateResponsiveZ(aboutTheme.cameraZ),
          ease: 'power1.inOut',
          duration: 1,
          onUpdate: () => {
            state.colorA.lerp(new THREE.Color(aboutTheme.colorA), 0.1);
            state.colorB.lerp(new THREE.Color(aboutTheme.colorB), 0.1);
            updateRootColors(CHAPTER_THEMES[1]);
          },
        },
        0.1
      );

      // 2. About -> Skills (Object Fractures into Constellation)
      masterTl.to(
        state,
        {
          deform: skillsTheme.deformFactor,
          twist: 0.75,
          wireframeOpacity: skillsTheme.wireframeOpacity,
          particleSpread: skillsTheme.particleSpread,
          targetX: calculateResponsiveX(skillsTheme.offsetX),
          targetY: skillsTheme.offsetY,
          baseZ: skillsTheme.cameraZ,
          targetZ: calculateResponsiveZ(skillsTheme.cameraZ),
          ease: 'power1.inOut',
          duration: 1,
          onUpdate: () => {
            state.colorA.lerp(new THREE.Color(skillsTheme.colorA), 0.1);
            state.colorB.lerp(new THREE.Color(skillsTheme.colorB), 0.1);
            updateRootColors(CHAPTER_THEMES[2]);
          },
        },
        1.1
      );

      // 3. Skills -> Projects (Dimensional Portal opens)
      masterTl.to(
        state,
        {
          deform: projectsTheme.deformFactor,
          twist: -0.4,
          wireframeOpacity: projectsTheme.wireframeOpacity,
          particleSpread: projectsTheme.particleSpread,
          targetX: calculateResponsiveX(projectsTheme.offsetX),
          targetY: projectsTheme.offsetY,
          baseZ: projectsTheme.cameraZ,
          targetZ: calculateResponsiveZ(projectsTheme.cameraZ),
          ease: 'power1.inOut',
          duration: 1,
          onUpdate: () => {
            state.colorA.lerp(new THREE.Color(projectsTheme.colorA), 0.1);
            state.colorB.lerp(new THREE.Color(projectsTheme.colorB), 0.1);
            updateRootColors(CHAPTER_THEMES[3]);
          },
        },
        2.1
      );

      // 4. Projects -> Experience (Chronos Strand / Helix)
      masterTl.to(
        state,
        {
          deform: expTheme.deformFactor,
          twist: 1.1,
          wireframeOpacity: expTheme.wireframeOpacity,
          particleSpread: expTheme.particleSpread,
          targetX: calculateResponsiveX(expTheme.offsetX),
          targetY: expTheme.offsetY,
          baseZ: expTheme.cameraZ,
          targetZ: calculateResponsiveZ(expTheme.cameraZ),
          ease: 'power1.inOut',
          duration: 1,
          onUpdate: () => {
            state.colorA.lerp(new THREE.Color(expTheme.colorA), 0.1);
            state.colorB.lerp(new THREE.Color(expTheme.colorB), 0.1);
            updateRootColors(CHAPTER_THEMES[4]);
          },
        },
        3.1
      );

      // 5. Experience -> Contact (Calm Radiant Luminary Gem)
      masterTl.to(
        state,
        {
          deform: contactTheme.deformFactor,
          twist: 0.05,
          wireframeOpacity: contactTheme.wireframeOpacity,
          particleSpread: contactTheme.particleSpread,
          targetX: 0,
          targetY: 0,
          baseZ: contactTheme.cameraZ,
          targetZ: calculateResponsiveZ(contactTheme.cameraZ),
          ease: 'power1.inOut',
          duration: 1,
          onUpdate: () => {
            state.colorA.lerp(new THREE.Color(contactTheme.colorA), 0.1);
            state.colorB.lerp(new THREE.Color(contactTheme.colorB), 0.1);
            updateRootColors(CHAPTER_THEMES[5]);
          },
        },
        4.1
      );

    });

    const updateRootColors = (theme) => {
      document.documentElement.style.setProperty('--accent-primary', theme.accentPrimary);
      document.documentElement.style.setProperty('--accent-secondary', theme.accentSecondary);
      document.documentElement.style.setProperty('--accent-glow', theme.accentGlow);
      document.documentElement.style.setProperty('--section-tint', theme.ambientTint);
    };

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation + Mouse Parallax

      targetRotX = mouseY * 0.6;
      targetRotY = mouseX * 0.6;
      entityGroup.rotation.x += (targetRotX - entityGroup.rotation.x) * 0.05;
      entityGroup.rotation.y += (targetRotY - entityGroup.rotation.y) * 0.05 + 0.003;
      entityGroup.rotation.z += 0.001;

      // Smooth camera interpolation
      camera.position.x += (state.targetX - camera.position.x) * 0.06;
      camera.position.y += (state.targetY - camera.position.y) * 0.06;
      camera.position.z += (state.targetZ - camera.position.z) * 0.06;

      // Update Core Shader Uniforms
      coreMaterial.uniforms.uTime.value = prefersReducedMotion ? 0.5 : elapsedTime * 0.8;
      coreMaterial.uniforms.uDeform.value = state.deform;
      coreMaterial.uniforms.uTwist.value = state.twist;
      coreMaterial.uniforms.uColorA.value = state.colorA;
      coreMaterial.uniforms.uColorB.value = state.colorB;

      // Update Wireframe
      wireframeMaterial.opacity = state.wireframeOpacity;
      wireframeMesh.rotation.y -= 0.002;
      wireframeMesh.rotation.x += 0.001;

      // Update Particle Cloud (Fracturing & Constellation spread)
      const positions = particleGeo.attributes.position.array;
      const spread = state.particleSpread;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Blend between tightly bound spherical orbit and exploded cloud
        positions[i3] = originalPositions[i3] + randomDirections[i3] * spread;
        positions[i3 + 1] = originalPositions[i3 + 1] + randomDirections[i3 + 1] * spread;
        positions[i3 + 2] = originalPositions[i3 + 2] + randomDirections[i3 + 2] * spread;
      }
      particleGeo.attributes.position.needsUpdate = true;
      particleMat.color.lerp(state.colorA, 0.05);

      // Light colors
      pointLightA.color.lerp(state.colorA, 0.08);
      pointLightB.color.lerp(state.colorB, 0.08);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      const isMobileNow = isMobileViewport();
      const isTabletNow = isTabletViewport();

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Recalculate camera Z based on current baseZ and aspect ratio
      state.targetZ = calculateResponsiveZ(state.baseZ || 4.8);
      if (isTabletNow) {
        state.targetX = 0;
      }

      entityGroup.scale.setScalar(isMobileNow ? 0.85 : 1.0);

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobileNow ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);


    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      ctxCleanup.revert();

      coreGeometry.dispose();
      coreMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform"
      aria-hidden="true"
    />
  );
}
