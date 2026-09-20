import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PhoneMockup, ScreenType } from '../PhoneMockup';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideItem {
  id: ScreenType;
  step: string;
  badge: string;
  title: string;
  seoDescription: string;
}

const slides: SlideItem[] = [
  {
    id: 'chat',
    step: '01',
    badge: 'Direct Educator Messaging',
    title: 'Message & Arrange Directly with Tutors',
    seoDescription:
      'Chat directly with verified Guwahati tutors. Ask questions about syllabus coverage, agree on class timings, schedule demo sessions, and arrange tuition without middleman fees.',
  },
  {
    id: 'profile',
    step: '02',
    badge: 'Verified Credentials',
    title: 'Review Detailed Educator Profiles',
    seoDescription:
      'Examine verified educator backgrounds, academic degrees from top institutions (IIT Madras, Gauhati University), student review ratings, and transparent hourly rates.',
  },
  {
    id: 'tutor-onboarding',
    step: '03',
    badge: '0% Middleman Fees',
    title: 'Connect & Arrange Directly',
    seoDescription:
      'Connect directly via WhatsApp or phone with zero commission fees, agent markups, or hidden middleman charges.',
  },
];

const AUTO_ROTATE_MS = 5000;

export const PhoneShowcaseCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<-1 | 1>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const currentSlide = slides[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleSelect = (index: number) => {
    setDirection(index >= currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-rotation timer (pauses automatically on hover or when user toggles play/pause)
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, AUTO_ROTATE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, handleNext]);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  };

  return (
    <figure
      role="region"
      aria-roledescription="carousel"
      aria-label="TutoConnect Android App Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="w-full relative outline-none focus:outline-none focus:ring-0 focus-visible:outline-none border-none select-none flex flex-col items-center"
    >
      {/* ========================================================================= */}
      {/* TECHNICAL SEO: Schema.org SoftwareApplication JSON-LD Structured Data */}
      {/* ========================================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'TutoConnect',
            operatingSystem: 'Android',
            applicationCategory: 'EducationalApplication',
            description:
              'Discover verified tutors and arrange private home or online tuition across Guwahati, Assam with zero commission fees.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'INR',
            },
            areaServed: {
              '@type': 'City',
              name: 'Guwahati',
            },
            downloadUrl:
              'https://play.google.com/store/apps/details?id=in.tutoconnect.app',
          }),
        }}
      />

      {/* ========================================================================= */}
      {/* 3-PHONE STAGE (Persistent Identity Stage Orbit, Pure GPU Transforms) */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[660px] sm:min-h-[720px] py-8 flex items-center justify-center overflow-visible">
        {/* Soft Ambient Radial Glow (Seamless blend into white canvas) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[600px] h-[520px] sm:h-[600px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* 3-Phone Stage Anchor Box */}
        <div className="relative w-[310px] sm:w-[330px] h-[630px] flex items-center justify-center">
          {slides.map((slide, index) => {
            const diff = index - currentIndex;
            let rel = diff;
            if (diff === 2) rel = -1;
            if (diff === -2) rel = 1;

            const isFocal = rel === 0;
            const isLeft = rel === -1;
            const isRight = rel === 1;
            const isWrapping = (direction === 1 && isRight) || (direction === -1 && isLeft);

            // Responsive stage coordinates
            const xPos = isFocal ? 0 : isRight ? (isDesktop ? 205 : 220) : isDesktop ? -205 : -220;
            const rotateDeg = isFocal ? 0 : isRight ? 4 : -4;
            const scaleVal = isFocal ? 1 : 0.94;
            const opacityVal = isFocal ? 1 : isDesktop ? 0.6 : 0;
            const zIndexVal = isFocal ? 30 : isWrapping ? 5 : 10;

            return (
              <motion.div
                key={slide.id}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                initial={false}
                animate={{
                  x: xPos,
                  rotate: rotateDeg,
                  scale: scaleVal,
                  opacity: opacityVal,
                  zIndex: zIndexVal,
                }}
                whileHover={
                  isFocal
                    ? {
                        y: -8,
                        scale: 1.02,
                        rotate: -1.5,
                      }
                    : {
                        scale: 0.97,
                        opacity: 0.85,
                        rotate: isRight ? 2 : -2,
                        y: -6,
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                  mass: 0.9,
                }}
                className={`absolute top-0 left-0 w-full h-full will-change-transform ${
                  isFocal ? 'cursor-default pointer-events-auto' : 'cursor-pointer pointer-events-auto'
                } ${!isDesktop && !isFocal ? 'pointer-events-none' : ''}`}
                style={{
                  zIndex: zIndexVal,
                }}
                title={
                  isLeft
                    ? `Previous: ${slide.title}`
                    : isRight
                      ? `Next: ${slide.title}`
                      : slide.title
                }
                aria-hidden={!isFocal}
                tabIndex={isFocal ? 0 : -1}
              >
                <div
                  className="w-full h-full flex items-center justify-center transition-shadow duration-300"
                  style={{
                    filter: isFocal
                      ? 'drop-shadow(0 24px 45px rgba(15,23,42,0.18))'
                      : 'drop-shadow(0 20px 35px rgba(15,23,42,0.12))',
                  }}
                >
                  <PhoneMockup screen={slide.id} size="lg" />
                </div>
              </motion.div>
            );
          })}

          {/* Floating Dark Glassmorphic Control Capsule (Anchored at Focal Stage Bottom) */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1.5 flex items-center gap-2 shadow-2xl pointer-events-auto">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Previous screen"
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            {/* Pause / Play Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-white" />
              ) : (
                <Play className="w-3.5 h-3.5 text-white ml-0.5" />
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Next screen"
              aria-label="Next screen"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MINIMAL SCREEN CAPTION & PROGRESS DOTS (Crisp, High-Converting & SEO-Friendly) */}
      {/* ========================================================================= */}
      <div className="mt-4 flex flex-col items-center space-y-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 16 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -16 : 16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="text-xs sm:text-sm font-semibold text-[#0F172A] text-center"
          >
            <span className="text-[#2563EB] font-bold">{currentSlide.step}</span>
            <span className="mx-2 text-[#CBD5E1]">•</span>
            <span>{currentSlide.title}</span>
          </motion.div>
        </AnimatePresence>

        {/* Minimal Navigation Dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((s, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={s.id}
                onClick={() => handleSelect(idx)}
                className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive ? 'w-5 bg-[#2563EB]' : 'w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                }`}
                aria-label={`Jump to ${s.title}`}
                aria-selected={isActive}
              />
            );
          })}
        </div>
      </div>

      {/* Accessible Figcaption for Search Crawlers (Googlebot / Bingbot / AI Crawlers) */}
      <figcaption className="sr-only">
        TutoConnect Android App interface demonstration:
        1. Message & Arrange Directly with Tutors in Guwahati without middleman fees or platform cuts.
        2. Review Detailed Educator Profiles with verified degrees and authentic reviews.
        3. Connect & Onboard Directly via WhatsApp or phone with 0% middleman commission.
      </figcaption>
    </figure>
  );
};
