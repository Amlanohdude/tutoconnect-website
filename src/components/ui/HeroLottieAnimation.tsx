import React, { useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light';

interface HeroLottieAnimationProps {
  className?: string;
}

export const HeroLottieAnimation: React.FC<HeroLottieAnimationProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animLoaded, setAnimLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let anim: AnimationItem | null = null;
    let isMounted = true;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    fetch('/teacher-student-lottie.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((animationData) => {
        if (!containerRef.current || !isMounted) return;

        // Ensure container is empty before loading animation
        containerRef.current.innerHTML = '';

        anim = lottie.loadAnimation({
          container: containerRef.current,
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
        console.error('Failed to load Teacher-Student Hero Lottie animation:', err);
      });

    return () => {
      isMounted = false;
      if (anim) {
        anim.destroy();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`relative w-full max-w-[520px] mx-auto flex items-center justify-center ${className}`}>
      {/* Subtle Ambient Radial Backlight for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />

      {/* Pure Lottie Animation Canvas - No pills, badges, or card borders */}
      <div
        ref={containerRef}
        className={`relative z-10 w-full aspect-[640/520] transition-opacity duration-500 ${
          animLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        role="img"
        aria-label="TutoConnect 1-on-1 Teacher and Student Tutoring Animation"
      />
    </div>
  );
};

