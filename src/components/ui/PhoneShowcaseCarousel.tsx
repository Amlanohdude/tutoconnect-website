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
    id: 'discovery',
    step: '01',
    badge: 'Hyperlocal Search',
    title: 'Find Tuition & Tutors in Guwahati',
    seoDescription:
      'Search home tutors and tuition centers across Beltola, Hatigaon, Zoo Road, Chandmari, and Jalukbari for SEBA, CBSE, and AHSEC boards.',
  },
  {
    id: 'profile',
    step: '02',
    badge: 'Verified Credentials',
    title: 'Review Detailed Educator Profiles',
    seoDescription:
      'Examine verified educator backgrounds, academic degrees from Gauhati University, student review ratings, and transparent hourly rates.',
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
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  const currentSlide = slides[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleSelect = (index: number) => {
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
      className="w-full relative outline-none select-none flex flex-col items-center"
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
      {/* 3-PHONE STAGE (100% Lightweight 2D GPU Transforms, Zero 3D Engine Overhead) */}
      {/* ========================================================================= */}
      <div className="relative w-full h-[580px] sm:h-[640px] flex items-center justify-center overflow-hidden">
        {/* Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[540px] h-[480px] sm:h-[540px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Left Flanking Phone (Flat 2D Tilt with Smooth Spring Hover Reaction) */}
        <motion.div
          onClick={handlePrev}
          initial={false}
          animate={{
            rotate: -4,
            scale: 0.88,
            opacity: 0.45,
          }}
          whileHover={{
            scale: 0.92,
            opacity: 0.8,
            rotate: -2,
            y: -6,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="hidden md:block absolute left-1/2 -translate-x-[calc(50%+160px)] lg:-translate-x-[calc(50%+185px)] z-10 cursor-pointer pointer-events-auto select-none will-change-transform"
          title={`Previous: ${slides[prevIndex].title}`}
          aria-hidden="true"
        >
          <div className="pointer-events-none drop-shadow-[0_16px_30px_rgba(15,23,42,0.14)]">
            <PhoneMockup screen={slides[prevIndex].id} size="md" />
          </div>
        </motion.div>

        {/* Center Focal Phone (Flat 2D with Spring Lift & Animated 2D Axis Tilt on Hover) */}
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
          <div className="drop-shadow-[0_24px_45px_rgba(15,23,42,0.18)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
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

        {/* Right Flanking Phone (Flat 2D Tilt with Smooth Spring Hover Reaction) */}
        <motion.div
          onClick={handleNext}
          initial={false}
          animate={{
            rotate: 4,
            scale: 0.88,
            opacity: 0.45,
          }}
          whileHover={{
            scale: 0.92,
            opacity: 0.8,
            rotate: 2,
            y: -6,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="hidden md:block absolute left-1/2 -translate-x-[calc(50%-160px)] lg:-translate-x-[calc(50%-185px)] z-10 cursor-pointer pointer-events-auto select-none will-change-transform"
          title={`Next: ${slides[nextIndex].title}`}
          aria-hidden="true"
        >
          <div className="pointer-events-none drop-shadow-[0_16px_30px_rgba(15,23,42,0.14)]">
            <PhoneMockup screen={slides[nextIndex].id} size="md" />
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* MINIMAL SCREEN CAPTION & PROGRESS DOTS (Crisp, High-Converting & SEO-Friendly) */}
      {/* ========================================================================= */}
      <div className="mt-4 flex flex-col items-center space-y-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2 }}
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

      {/* Accessible Figcaption for Search Crawlers (Googlebot / Bingbot) */}
      <figcaption className="sr-only">
        TutoConnect Android App interface demonstration:
        1. Find Tuition & Tutors in Guwahati across Beltola, Hatigaon, Zoo Road, Chandmari, and Jalukbari for SEBA, CBSE, AHSEC boards.
        2. Review Detailed Educator Profiles with verified degrees and authentic reviews.
        3. Connect Directly via WhatsApp or phone with 0% middleman commission.
      </figcaption>
    </figure>
  );
};
