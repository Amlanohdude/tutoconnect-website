import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { ArrowRight } from 'lucide-react';

export interface StepItem {
  number: string;
  title: string;
  description: string;
  colorTheme?: 'blue' | 'cyan' | 'purple' | 'orange';
}

export interface StepPosition {
  className: string;
  rotate: string;
}

interface HowItWorksPinboardProps {
  steps: StepItem[];
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  showCta?: boolean;
  onNavigate?: (route: PageRoute) => void;
  ctaText?: string;
  ctaRoute?: PageRoute;
  className?: string;
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card: React.FC<{
  step: StepItem;
  position: StepPosition;
}> = ({ step, position }) => {
  const themeStyles = {
    blue: {
      bg: 'bg-blue-50/90',
      text: 'text-[#2563EB]',
      border: 'border-blue-100',
      badge: 'bg-blue-100 text-blue-800',
    },
    cyan: {
      bg: 'bg-sky-50/90',
      text: 'text-[#0284C7]',
      border: 'border-sky-100',
      badge: 'bg-sky-100 text-sky-800',
    },
    purple: {
      bg: 'bg-purple-50/90',
      text: 'text-purple-600',
      border: 'border-purple-100',
      badge: 'bg-purple-100 text-purple-800',
    },
    orange: {
      bg: 'bg-amber-50/90',
      text: 'text-amber-600',
      border: 'border-amber-100',
      badge: 'bg-amber-100 text-amber-800',
    },
  };

  const theme = themeStyles[step.colorTheme || 'blue'];

  return (
    <div
      className={`relative w-full md:w-[300px] transition-all duration-300 hover:z-30 hover:scale-105 hover:rotate-0 cursor-default select-none ${position.rotate} ${position.className}`}
    >
      <div className="bg-white p-2.5 rounded-[26px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.07)] border border-slate-100 hover:border-slate-200 transition-colors">
        <Pin className={`w-7 h-7 ${theme.text} z-20 mb-4 mx-auto drop-shadow-xs`} />
        <div
          className={`${theme.bg} border ${theme.border} rounded-[18px] p-5 h-full flex flex-col relative overflow-hidden text-left`}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className={`${theme.text} text-3xl font-extrabold tracking-tight font-display`}
            >
              {step.number}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${theme.badge} uppercase tracking-wider`}>
              Step
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] leading-tight mb-2 tracking-tight">
            {step.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const HowItWorksPinboard: React.FC<HowItWorksPinboardProps> = ({
  steps,
  title = 'How It Works',
  eyebrow = 'Simple Process',
  subtitle = 'Transparent direct steps to connect students and tutors in Guwahati.',
  showCta = false,
  onNavigate,
  ctaText = 'Learn more about how TutoConnect works',
  ctaRoute = '/how-it-works/',
  className = '',
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  const isThreeSteps = steps.length === 3;

  // Staggered zig-zag coordinates
  const positionsThree: StepPosition[] = [
    { className: 'md:absolute md:top-0 md:left-[10%] lg:md:left-[15%]', rotate: 'rotate-3 md:rotate-6' },
    { className: 'md:absolute md:top-[160px] md:right-[10%] lg:md:right-[15%]', rotate: '-rotate-3 md:-rotate-6' },
    { className: 'md:absolute md:top-[380px] md:left-[12%] lg:md:left-[18%]', rotate: 'rotate-2 md:rotate-5' },
  ];

  const positionsFour: StepPosition[] = [
    { className: 'md:absolute md:top-0 md:left-[10%] lg:md:left-[15%]', rotate: 'rotate-3 md:rotate-6' },
    { className: 'md:absolute md:top-[160px] md:right-[10%] lg:md:right-[15%]', rotate: '-rotate-3 md:-rotate-6' },
    { className: 'md:absolute md:top-[360px] md:left-[10%] lg:md:left-[15%]', rotate: 'rotate-2 md:rotate-5' },
    { className: 'md:absolute md:top-[520px] md:right-[10%] lg:md:right-[15%]', rotate: '-rotate-2 md:-rotate-5' },
  ];

  const positions = isThreeSteps ? positionsThree : positionsFour;
  const stageHeight = isThreeSteps ? 680 : 860;

  // Generate SVG curved connector path
  const pathD = isThreeSteps
    ? 'M 290 140 C 480 140, 520 280, 710 280 C 850 280, 520 440, 290 480'
    : 'M 290 140 C 480 140, 520 280, 710 280 C 850 280, 520 440, 290 480 C 290 560, 520 640, 710 640';

  return (
    <section
      aria-label={title}
      className={`relative py-16 sm:py-24 bg-white overflow-hidden text-center select-none ${className}`}
    >
      {/* Technical SEO: Schema.org HowTo Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: `${title} - TutoConnect`,
            description: subtitle,
            step: steps.map((s, idx) => ({
              '@type': 'HowToStep',
              position: idx + 1,
              name: s.title,
              text: s.description,
            })),
          }),
        }}
      />

      {/* Subtle Notebook-Ruled Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '100% 32px',
          marginTop: '4px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white"
        aria-hidden="true"
      />

      <div className="container-edufy relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-14 space-y-2.5 text-center">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display-section text-[#0F172A]">{title}</h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* 21st.dev Pinboard Stage */}
        <div className="relative max-w-5xl mx-auto">
          <div
            className={`relative w-full flex flex-col space-y-8 md:space-y-0 md:block ${
              isThreeSteps ? 'md:h-[680px]' : 'md:h-[860px]'
            }`}
          >
            {/* Animated Flowing SVG Dashed Line (Desktop Only) */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
              viewBox={`0 0 1000 ${stageHeight}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d={pathD}
                stroke="#CBD5E1"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={
                  prefersReducedMotion
                    ? { strokeDashoffset: 0 }
                    : { strokeDashoffset: -140 }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </svg>

            {/* Semantic Ordered List for Accessibility & SEO */}
            <ol className="contents list-none p-0 m-0">
              {steps.map((step, idx) => (
                <li key={step.number} className="contents">
                  <Card step={step} position={positions[idx % positions.length]} />
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Optional Section CTA */}
        {showCta && onNavigate && (
          <div className="mt-12 text-center relative z-20">
            <button
              onClick={() => onNavigate(ctaRoute)}
              className="btn-pill-white inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#2563EB]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
