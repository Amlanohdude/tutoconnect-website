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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

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
      {/* 3-PHONE STAGE (Identical True-Size Phones, Zero Clipping, Pure 2D Smooth Transforms) */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[660px] sm:min-h-[720px] py-8 flex items-center justify-center overflow-visible">
        {/* Soft Ambient Radial Glow (Seamless blend into white canvas) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[600px] h-[520px] sm:h-[600px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Left Flanking Phone (True Size "lg", Flat 2D Angle with Spring Hover Reaction) */}
        <motion.div
          onClick={handlePrev}
          initial={false}
          animate={{
            rotate: -4,
            scale: 1,
            opacity: 0.6,
          }}
          whileHover={{
            scale: 1.02,
            opacity: 0.85,
            rotate: -2,
            y: -6,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="hidden md:block absolute left-1/2 -translate-x-[calc(50%+175px)] lg:-translate-x-[calc(50%+205px)] z-10 cursor-pointer pointer-events-auto select-none will-change-transform"
          title={`Previous: ${slides[prevIndex].title}`}
          aria-hidden="true"
        >
          <div className="pointer-events-none drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)]">
            <PhoneMockup screen={slides[prevIndex].id} size="lg" />
          </div>
        </motion.div>

        {/* Center Focal Phone (True Size "lg", Spring Lift & Subtle 2D Angle on Hover) */}
        <motion.div
          initial={false}
          whileHover={{
            y: -10,
            scale: 1.025,
            rotate: -1.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="relative z-20 cursor-pointer select-none will-change-transform"
        >
          <div className="relative drop-shadow-[0_24px_45px_rgba(15,23,42,0.18)]">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 190 : -190,
                    opacity: 0,
                    scale: 0.94,
                    rotate: dir > 0 ? 4 : -4,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      x: { type: 'spring', stiffness: 280, damping: 26 },
                      scale: { type: 'spring', stiffness: 280, damping: 26 },
                      rotate: { type: 'spring', stiffness: 280, damping: 26 },
                      opacity: { duration: 0.28, ease: 'easeOut' },
                    },
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -190 : 190,
                    opacity: 0,
                    scale: 0.94,
                    rotate: dir > 0 ? -4 : 4,
                    transition: {
                      x: { type: 'spring', stiffness: 280, damping: 26 },
                      scale: { type: 'spring', stiffness: 280, damping: 26 },
                      rotate: { type: 'spring', stiffness: 280, damping: 26 },
                      opacity: { duration: 0.22, ease: 'easeIn' },
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="will-change-transform"
              >
                <PhoneMockup screen={currentSlide.id} size="lg" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Dark Glassmorphic Control Capsule */}
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
        </motion.div>

        {/* Right Flanking Phone (True Size "lg", Flat 2D Angle with Spring Hover Reaction) */}
        <motion.div
          onClick={handleNext}
          initial={false}
          animate={{
            rotate: 4,
            scale: 1,
            opacity: 0.6,
          }}
          whileHover={{
            scale: 1.02,
            opacity: 0.85,
            rotate: 2,
            y: -6,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="hidden md:block absolute left-1/2 -translate-x-[calc(50%-175px)] lg:-translate-x-[calc(50%-205px)] z-10 cursor-pointer pointer-events-auto select-none will-change-transform"
          title={`Next: ${slides[nextIndex].title}`}
          aria-hidden="true"
        >
          <div className="pointer-events-none drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)]">
            <PhoneMockup screen={slides[nextIndex].id} size="lg" />
          </div>
        </motion.div>
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
