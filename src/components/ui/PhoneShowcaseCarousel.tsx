import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PhoneMockup, ScreenType } from '../PhoneMockup';
import {
  Search,
  ShieldCheck,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StepItem {
  id: ScreenType;
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const steps: StepItem[] = [
  {
    id: 'discovery',
    step: '01',
    badge: 'Smart Discovery',
    title: 'Search Tutors by Locality & Curriculum',
    subtitle: 'Hyperlocal discovery across Guwahati',
    description:
      'Explore verified educators across Guwahati neighborhoods including Beltola, Hatigaon, Zoo Road, Chandmari, and Jalukbari. Filter by curriculum boards (SEBA, CBSE, AHSEC), class grades, and preferred subjects.',
    icon: Search,
    highlights: [
      'Locality-based matching across Guwahati',
      'Filter by SEBA, AHSEC & CBSE boards',
      'Hourly rates transparently displayed upfront',
    ],
  },
  {
    id: 'profile',
    step: '02',
    badge: 'Verified Credentials',
    title: 'Inspect Detailed Educator Qualifications',
    subtitle: 'Transparent background & ratings',
    description:
      'Review complete academic backgrounds, university degrees, verified identity badges, student ratings, teaching tenure, and supported formats (home tuition, online, or tutor study center).',
    icon: ShieldCheck,
    highlights: [
      'Verified academic degrees & qualifications',
      'Authentic student & parent feedback ratings',
      'Flexible home, study center, or online classes',
    ],
  },
  {
    id: 'tutor-onboarding',
    step: '03',
    badge: 'Direct Connect',
    title: 'Direct WhatsApp & Phone Booking with 0% Fees',
    subtitle: 'Zero middleman commissions',
    description:
      'Communicate directly with tutors via phone or WhatsApp. Schedule trial sessions and agree on class timings on mutually comfortable terms without any agency commission or recurring platform cuts.',
    icon: MessageSquare,
    highlights: [
      'Direct one-tap WhatsApp & phone connect',
      'Zero platform commissions on tutor tuition fees',
      'Personalized schedule arranged directly',
    ],
  },
];

const AUTO_ROTATE_MS = 6000;

export const PhoneShowcaseCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentStep = steps[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }, []);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-rotation timer (pauses on user interaction)
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

  // Keyboard navigation for accessibility
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
    <section
      role="region"
      aria-label="TutoConnect Interactive App Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="w-full relative outline-none select-none"
    >
      {/* Technical SEO: Schema.org HowTo JSON-LD for rich Google snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Find Tuition & Verified Tutors in Guwahati with TutoConnect',
            description:
              'Step-by-step guide to discovering verified home and online tutors in Guwahati with 0% middleman fees.',
            step: steps.map((s, idx) => ({
              '@type': 'HowToStep',
              position: idx + 1,
              name: s.title,
              text: s.description,
            })),
          }),
        }}
      />

      {/* Top Tab Controller: 3 Interactive Step Pills */}
      <div className="flex items-center justify-center mb-10 sm:mb-14">
        <div
          role="tablist"
          aria-label="App showcase steps"
          className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-xs max-w-full overflow-x-auto scrollbar-none gap-1 sm:gap-2"
        >
          {steps.map((item, idx) => {
            const isActive = idx === currentIndex;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                role="tab"
                id={`showcase-tab-${item.id}`}
                aria-selected={isActive}
                aria-controls={`showcase-panel-${item.id}`}
                onClick={() => handleSelect(idx)}
                className={`relative flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-xs font-semibold'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                }`}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#E2E8F0] text-[#475569]'
                  }`}
                >
                  {item.step}
                </span>
                <span className="hidden xs:inline sm:inline">{item.badge}</span>
                <Icon className="w-3.5 h-3.5 opacity-80" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Grid: Editorial Feature Card on Left, Clean Flat Device Frame on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
        {/* Left Column: Semantic Benefit Copy & Feature Callouts */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              id={`showcase-panel-${currentStep.id}`}
              role="tabpanel"
              aria-labelledby={`showcase-tab-${currentStep.id}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="space-y-6"
            >
              {/* Step Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  Step {currentStep.step} • {currentStep.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] leading-snug">
                  {currentStep.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#2563EB]">
                  {currentStep.subtitle}
                </p>
              </div>

              {/* Explanatory Paragraph for SEO & User Context */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {currentStep.description}
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-2.5 pt-2 border-t border-[#E2E8F0]/80">
                {currentStep.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Interactive Slide Controls & Autoplay Indicator */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:shadow-xs"
                    title="Previous step"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={togglePlayPause}
                    className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:shadow-xs"
                    title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5 text-[#2563EB]" />
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer shadow-2xs hover:shadow-xs"
                    title="Next step"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5 ml-2">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        idx === currentIndex ? 'w-6 bg-[#2563EB]' : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                      }`}
                      aria-label={`Jump to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Flat 2D Studio Device Mockup (Zero 3D Tilt, Ultra-Lightweight & Smooth) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative py-4">
          {/* Subtle Ambient Radial Backlight Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Clean Flat 2D Device Mockup */}
          <div className="relative z-10 drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <PhoneMockup screen={currentStep.id} size="lg" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
