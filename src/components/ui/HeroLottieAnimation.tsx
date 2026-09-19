import React, { useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light';
import { ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface HeroLottieAnimationProps {
  className?: string;
}

export const HeroLottieAnimation: React.FC<HeroLottieAnimationProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animLoaded, setAnimLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let anim: AnimationItem | null = null;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    fetch('/education-lottie.json')
      .then((res) => res.json())
      .then((animationData) => {
        if (!containerRef.current) return;

        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: !prefersReducedMotion,
          autoplay: !prefersReducedMotion,
          animationData,
        });

        anim.addEventListener('DOMLoaded', () => {
          setAnimLoaded(true);
        });
      })
      .catch((err) => {
        console.error('Failed to load Hero Lottie animation:', err);
      });

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  return (
    <div className={`relative w-full max-w-[480px] mx-auto ${className}`}>
      {/* Outer Card Wrapper */}
      <div className="relative p-6 sm:p-8 rounded-[36px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px]">
        {/* Subtle Background Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#EFF6FF_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Accent Badge Top-Right */}
        <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#E2E8F0] shadow-2xs text-[11px] font-semibold text-[#0F172A]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <MapPin className="w-3 h-3 text-[#2563EB]" />
          <span>Guwahati, Assam</span>
        </div>

        {/* Lottie Animation Canvas */}
        <div
          ref={containerRef}
          className={`relative z-10 w-full aspect-square max-w-[380px] mx-auto transition-opacity duration-500 ${
            animLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="TutoConnect Education & Tutor Discovery Animation"
        />

        {/* Floating Badges Bottom Row */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#E2E8F0] shadow-2xs text-[11px] font-semibold text-[#0F172A] pointer-events-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Verified Tutors</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#E2E8F0] shadow-2xs text-[11px] font-semibold text-[#2563EB] pointer-events-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            <span>0% Commission</span>
          </div>
        </div>
      </div>
    </div>
  );
};
