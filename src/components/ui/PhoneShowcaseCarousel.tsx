import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PhoneMockup, ScreenType } from '../PhoneMockup';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveTiltPhone } from './InteractiveTiltPhone';

interface SlideItem {
  id: ScreenType;
  title: string;
  step: string;
}

const slides: SlideItem[] = [
  {
    id: 'discovery',
    step: '01',
    title: 'Find Tuition & Tutors in Guwahati',
  },
  {
    id: 'profile',
    step: '02',
    title: 'Review Detailed Educator Profiles',
  },
  {
    id: 'tutor-onboarding',
    step: '03',
    title: 'Connect & Arrange Directly',
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

  // Auto-rotation
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

  // Keyboard navigation
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
      aria-label="TutoConnect Phone Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="w-full relative outline-none select-none flex flex-col items-center"
    >
      {/* Technical SEO: Schema.org SoftwareApplication JSON-LD */}
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
              'Discover tutors and connect directly for tuition across Guwahati, Assam with zero middleman commissions.',
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
      {/* 21st.dev EXACT PHONE CAROUSEL STAGE WITH 3D TILT ANIMATION */}
      {/* ========================================================================= */}
      <div className="relative w-full h-[620px] sm:h-[660px] flex items-center justify-center overflow-hidden">
        {/* Ambient Backlight Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#2563EB]/15 via-[#0EA5E9]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Left Flanking Phone (21st.dev Stack Position with Stage Perspective) */}
        <div
          onClick={handlePrev}
          className="hidden md:block absolute left-1/2 -translate-x-[calc(50%+160px)] lg:-translate-x-[calc(50%+190px)] z-10 scale-[0.88] opacity-40 blur-[0.4px] hover:opacity-75 transition-all duration-300 cursor-pointer pointer-events-auto select-none"
          title={`Previous: ${slides[prevIndex].title}`}
          aria-hidden="true"
        >
          <InteractiveTiltPhone
            maxTilt={6}
            restingRotateY={10}
            scaleOnHover={0.93}
            enableGlare={false}
          >
            <div className="pointer-events-none">
              <PhoneMockup screen={slides[prevIndex].id} size="md" />
            </div>
          </InteractiveTiltPhone>
        </div>

        {/* Center Active Phone (21st.dev Focal Device with Interactive 3D Spring Tilt) */}
        <div className="relative z-20 scale-100 opacity-100 drop-shadow-2xl">
          <InteractiveTiltPhone
            maxTilt={14}
            perspective={1100}
            scaleOnHover={1.03}
            enableGlare={true}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              >
                <PhoneMockup screen={currentSlide.id} size="lg" />
              </motion.div>
            </AnimatePresence>

            {/* 21st.dev Floating Dark Glassmorphic Control Capsule */}
            <div
              style={{ transform: 'translateZ(25px)' }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black/85 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 flex items-center gap-2.5 shadow-2xl pointer-events-auto"
            >
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="w-7 h-7 rounded-full bg-neutral-800/90 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                className="w-7 h-7 rounded-full bg-neutral-800/90 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                className="w-7 h-7 rounded-full bg-neutral-800/90 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Next screen"
                aria-label="Next screen"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </InteractiveTiltPhone>
        </div>

        {/* Right Flanking Phone (21st.dev Stack Position with Stage Perspective) */}
        <div
          onClick={handleNext}
          className="hidden md:block absolute left-1/2 -translate-x-[calc(50%-160px)] lg:-translate-x-[calc(50%-190px)] z-10 scale-[0.88] opacity-40 blur-[0.4px] hover:opacity-75 transition-all duration-300 cursor-pointer pointer-events-auto select-none"
          title={`Next: ${slides[nextIndex].title}`}
          aria-hidden="true"
        >
          <InteractiveTiltPhone
            maxTilt={6}
            restingRotateY={-10}
            scaleOnHover={0.93}
            enableGlare={false}
          >
            <div className="pointer-events-none">
              <PhoneMockup screen={slides[nextIndex].id} size="md" />
            </div>
          </InteractiveTiltPhone>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MINIMAL SCREEN CAPTION & DOT INDICATOR BELOW THE STAGE */}
      {/* ========================================================================= */}
      <div className="mt-4 flex flex-col items-center space-y-2.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2 }}
            className="text-xs sm:text-sm font-semibold text-[#0F172A]"
          >
            <span className="text-[#2563EB] font-bold">{currentSlide.step}</span>
            <span className="mx-2 text-[#CBD5E1]">•</span>
            <span>{currentSlide.title}</span>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
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

      {/* Accessible Figcaption for Search Crawlers */}
      <figcaption className="sr-only">
        TutoConnect Android App interface demonstration: 01 Find Tuition & Tutors in Guwahati, 02
        Review Detailed Educator Profiles, and 03 Connect & Arrange Directly.
      </figcaption>
    </figure>
  );
};
