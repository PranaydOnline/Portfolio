import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Magnet from '../react-bits/Magnet';

/**
 * SoundToggle
 * Optional subtle audio cue generator utilizing Web Audio API.
 * Defaults to muted to respect user environment.
 */
export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playTone = useCallback((frequency = 440, duration = 0.08, type = 'sine') => {
    if (isMuted || !audioCtxRef.current) return;

    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore audio failure
    }
  }, [isMuted]);


  const playToneRef = useRef(playTone);
  useEffect(() => {
    playToneRef.current = playTone;
  }, [playTone]);


  const toggleSound = () => {
    initAudio();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      setTimeout(() => {
        playToneRef.current(587.33, 0.12, 'triangle');
      }, 50);
    }
  };

  useEffect(() => {
    if (isMuted) return;

    const handleInteraction = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hoverable="true"]')
      ) {
        playToneRef.current(784, 0.06, 'sine');
      }
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, [isMuted]);


  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <Magnet magnetStrength={0.25} padding={20}>
        <button
          onClick={toggleSound}
          className="p-2.5 rounded-xl glass-pill text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors flex items-center gap-2 text-xs font-mono cursor-pointer shadow-lg"
          title={isMuted ? 'Enable subtle atmospheric sound' : 'Mute sound'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Audio: Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
              <span className="hidden md:inline text-[11px] text-violet-300">Audio: On</span>
            </>
          )}
        </button>
      </Magnet>
    </div>
  );
}
