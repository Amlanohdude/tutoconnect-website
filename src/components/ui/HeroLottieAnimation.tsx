import React, { useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light';
import { motion } from 'motion/react';
import { InteractiveTiltPhone } from './InteractiveTiltPhone';
import { PhoneMockup } from '../PhoneMockup';

interface HeroLottieAnimationProps {
  className?: string;
}

export const HeroLottieAnimation: React.FC<HeroLottieAnimationProps> = ({ className = '' }) => {
  const studentAnimRef = useRef<HTMLDivElement>(null);
  const [animLoaded, setAnimLoaded] = useState(false);

  useEffect(() => {
    if (!studentAnimRef.current) return;

    let anim: AnimationItem | null = null;
    let isMounted = true;

    // Respect user's prefers-reduced-motion setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    fetch('/student-lottie.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((animationData) => {
        if (!studentAnimRef.current || !isMounted) return;

        // Clear any previous SVGs before instantiating
        studentAnimRef.current.innerHTML = '';

        anim = lottie.loadAnimation({
          container: studentAnimRef.current,
          renderer: 'svg',
          loop: !prefersReducedMotion,
          autoplay: !prefersReducedMotion,
          animationData,
        });

        anim.addEventListener('DOMLoaded', () => {
          if (isMounted) {
            setAnimLoaded(true);
          }
        });
      })
      .catch((err) => {
        console.error('Failed to load student Lottie animation:', err);
      });

    return () => {
      isMounted = false;
      if (anim) {
        anim.destroy();
      }
      if (studentAnimRef.current) {
        studentAnimRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`relative w-full max-w-[480px] sm:max-w-[540px] mx-auto flex items-center justify-center select-none ${className}`}>
      {/* Ambient Radial Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Layer 1: Floating Animated Student Companion (Popped into the foreground z-30 in front of the phone) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{
          opacity: animLoaded ? 1 : 0,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          opacity: { duration: 0.4 },
          scale: { duration: 0.5 },
        }}
        className="absolute -top-6 -right-2 sm:-top-10 sm:-right-8 md:-top-12 md:-right-12 z-30 w-52 sm:w-60 md:w-68 aspect-square pointer-events-none drop-shadow-[0_15px_30px_rgba(15,23,42,0.22)]"
        aria-hidden="true"
      >
        <div ref={studentAnimRef} className="w-full h-full" />
      </motion.div>

      {/* Layer 2: Authentic 3D Interactive Phone Mockup (Front Anchor) */}
      <div className="relative z-20 pt-4 sm:pt-6 pr-6 sm:pr-10">
        <InteractiveTiltPhone
          maxTilt={12}
          scaleOnHover={1.03}
          enableGlare={true}
          restingRotateY={-5}
          restingRotateX={3}
        >
          <PhoneMockup screen="discovery" size="md" />
        </InteractiveTiltPhone>
      </div>
    </div>
  );
};

