import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { PhoneShowcaseCarousel } from '../components/ui/PhoneShowcaseCarousel';
import { InteractiveTiltPhone } from '../components/ui/InteractiveTiltPhone';
import { HowItWorksPinboard, StepItem } from '../components/ui/HowItWorksPinboard';
import {
  ArrowRight,
  Download,
  ChevronDown,
  ChevronUp,
  Home,
  Building,
  Laptop,
  Plus,
  GraduationCap,
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Is TutoConnect free to use? Does TutoConnect charge commission?',
      a: 'TutoConnect is currently free to use for students, parents, and tutors during our initial launch. We currently do not charge families a finder fee or deduct commission from tuition fees. Any tuition fee agreed between a student or parent and a tutor is paid directly between them.',
    },
    {
      q: 'Can I find tutors and tuition in Guwahati?',
      a: 'Yes. TutoConnect is launching in Guwahati with tutors offering tuition for a range of school subjects, academic needs, and exam preparation. Depending on tutor availability, students and parents can find tutors for Mathematics, Science, English, Languages, Commerce, Arts, and other subjects.',
    },
    {
      q: 'Which school boards and classes are supported in Guwahati?',
      a: 'Tutors on TutoConnect can offer tuition for students following ASSEB (formerly SEBA) Division-I, ASSEB Division-II (formerly AHSEC), CBSE, and ICSE curricula. Available tutors may cover Primary (Classes 1–5), Middle School (Classes 6–8), High School (Classes 9–10), Higher Secondary (Classes 11–12), and selected college-level subjects.',
    },
    {
      q: 'Where can tuition classes take place?',
      a: "Tuition arrangements depend on the tutor and student. TutoConnect supports different learning preferences, including home tuition at the student's residence, classes at the tutor's location or tuition centre, and online tuition.",
    },
    {
      q: "How can I check a tutor's qualifications and experience?",
      a: 'Tutor profiles can include information such as qualifications, subjects taught, teaching experience, preferred classes, location, and tuition rates. Parents and students should review the profile carefully and speak directly with the tutor before finalizing tuition. You can also ask the tutor to provide relevant qualification or identity documents and consider an introductory class before making a longer-term arrangement.',
    },
    {
      q: 'How can I find a tutor near me in Guwahati?',
      a: 'Search for tutors based on your subject, class, and preferred location. Tutor profiles can indicate the areas they serve, helping students and parents discover tutors around localities such as Beltola, Hatigaon, Dispur, Chandmari, Zoo Road, Jalukbari, and other parts of Guwahati, subject to tutor availability.',
    },
    {
      q: 'How do tuition payments work between parents and tutors?',
      a: 'TutoConnect currently does not process or hold tuition payments. Parents or students and tutors arrange payment directly between themselves using a mutually agreed method such as UPI, bank transfer, or cash.',
    },
    {
      q: 'How can tutors join TutoConnect?',
      a: 'Tutors can download the TutoConnect Android app, choose "Become a Tutor," and create their tutor profile. They can add their subjects, qualifications, experience, preferred teaching locations, availability, and tuition rates so students and parents can discover them.',
    },
    {
      q: 'Will TutoConnect always be free?',
      a: 'TutoConnect is currently free during our initial launch. As the platform grows, we may introduce optional paid features, subscriptions, or other in-app services. Any future charges will be clearly communicated before they apply.',
    },
  ];

  const homeSteps: StepItem[] = [
    {
      number: '01',
      title: 'Discover',
      description: 'Search tutors matching your class, subject, and area in Guwahati. Filter verified educator profiles.',
      colorTheme: 'blue',
    },
    {
      number: '02',
      title: 'Connect',
      description: 'Reach out directly via phone call or WhatsApp with zero middleman commissions or platform cut.',
      colorTheme: 'cyan',
    },
    {
      number: '03',
      title: 'Arrange',
      description: 'Agree on schedule, fees, and location directly with the educator without intermediary friction.',
      colorTheme: 'purple',
    },
  ];

  const teachingModes = [
    {
      name: 'Home Tuition',
      tagline: 'Personalized 1-on-1 guidance at student’s home.',
      badge: 'At Your Residence',
      graphic: (
        <svg viewBox="0 0 160 88" className="w-full h-full max-h-24 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lampGlow" x1="68" y1="46" x2="90" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="44" r="34" fill="#EFF6FF" />
          {/* House Blueprint Outline */}
          <path d="M52 58 L52 42 L80 20 L108 42 L108 58" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M96 28 L96 22 L102 22 L102 33" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Window */}
          <rect x="71" y="30" width="18" height="18" rx="2.5" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
          <line x1="80" y1="30" x2="80" y2="48" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.7" />
          <line x1="71" y1="39" x2="89" y2="39" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.7" />
          {/* Desk & Lamp Light Beam */}
          <line x1="38" y1="68" x2="122" y2="68" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="66,48 102,68 62,68" fill="url(#lampGlow)" />
          {/* Desk Lamp */}
          <path d="M56 68 L56 52 Q56 46 64 46 L68 46" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M66 43 L74 50 L64 52 Z" fill="#2563EB" />
          {/* Study Book */}
          <path d="M74 65 Q80 62 86 65 Q80 67 74 65 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      name: "Tutor's Space",
      tagline: 'Focused classes at educator’s private studio.',
      badge: 'Educator Studio',
      graphic: (
        <svg viewBox="0 0 160 88" className="w-full h-full max-h-24 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="44" r="34" fill="#F0F9FF" />
          {/* Easel / Whiteboard */}
          <rect x="54" y="18" width="52" height="36" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
          {/* Chart / Lesson lines */}
          <path d="M62 44 L70 36 L78 40 L94 28" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="62" y1="26" x2="76" y2="26" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
          {/* Easel Stand Legs */}
          <line x1="64" y1="54" x2="56" y2="70" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="96" y1="54" x2="104" y2="70" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="80" y1="54" x2="80" y2="70" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Pin */}
          <circle cx="80" cy="18" r="2" fill="#2563EB" />
          {/* Book Stack */}
          <rect x="110" y="60" width="14" height="3.5" rx="1" fill="#38BDF8" stroke="#0284C7" strokeWidth="0.8" />
          <rect x="108" y="64.5" width="18" height="4" rx="1" fill="#2563EB" />
          <line x1="38" y1="70" x2="122" y2="70" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Tuition Centre',
      tagline: 'Structured batches at local coaching institutes.',
      badge: 'Institute Batches',
      graphic: (
        <svg viewBox="0 0 160 88" className="w-full h-full max-h-24 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="44" r="34" fill="#EEF2FF" />
          {/* Academy Roof / Pediment */}
          <polygon points="80,16 46,32 114,32" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="80" cy="25" r="3.5" fill="#2563EB" />
          <rect x="44" y="32" width="72" height="4" rx="1" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.2" />
          {/* Classical Columns */}
          <rect x="52" y="36" width="6" height="24" rx="1" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.2" />
          <rect x="70" y="36" width="6" height="24" rx="1" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.2" />
          <rect x="84" y="36" width="6" height="24" rx="1" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.2" />
          <rect x="102" y="36" width="6" height="24" rx="1" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.2" />
          {/* Arched Entrance */}
          <path d="M74 60 L74 46 A6 6 0 0 1 86 46 L86 60 Z" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.2" />
          {/* Plinth Base */}
          <rect x="42" y="60" width="76" height="4" rx="1" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.2" />
          <line x1="36" y1="65.5" x2="124" y2="65.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Independent Online',
      tagline: 'Live interactive video sessions via Meet or Zoom.',
      badge: 'Direct Virtual',
      graphic: (
        <svg viewBox="0 0 160 88" className="w-full h-full max-h-24 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="44" r="34" fill="#F0FDFA" />
          {/* Laptop Screen */}
          <rect x="54" y="20" width="52" height="34" rx="3" fill="#0F172A" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="57" y="23" width="46" height="28" rx="1.5" fill="#1E293B" />
          {/* Tutor Video Screen */}
          <rect x="60" y="26" width="24" height="16" rx="1" fill="#2563EB" />
          <circle cx="72" cy="31" r="2.8" fill="#BFDBFE" />
          <path d="M66 40 Q72 36 78 40" stroke="#BFDBFE" strokeWidth="1" fill="none" />
          {/* Student Thumbnail */}
          <rect x="88" y="26" width="12" height="9" rx="1" fill="#334155" />
          {/* Live Waveform */}
          <path d="M60 46 L65 46 L67 44 L69 48 L71 43 L73 47 L75 46 L81 46" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" fill="none" />
          {/* Laptop Base Deck */}
          <path d="M44 56 L116 56 L112 60 L48 60 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.2" strokeLinejoin="round" />
          <rect x="74" y="56" width="12" height="1.5" rx="0.5" fill="#94A3B8" />
          {/* Connection Signal Waves */}
          <circle cx="118" cy="26" r="2.5" fill="#0EA5E9" />
          <path d="M122 21 A7 7 0 0 1 122 31" stroke="#0EA5E9" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M125 17 A12 12 0 0 1 125 35" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" fill="none" opacity="0.6" />
        </svg>
      ),
    },
  ];

  const riverSubjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'General Science',
    'English',
    'Commerce & Accounts',
    'Economics',
    'Assamese',
    'Social Science',
    'Computer Science',
    'Business Studies',
    'Hindi',
    'Bengali',
    'Sanskrit',
  ];

  const riverBoardsAndLevels = [
    'ASSEB Div-I (SEBA)',
    'ASSEB Div-II (AHSEC)',
    'CBSE Curriculum',
    'ICSE & ISC',
    'Class 9–10 Boards',
    'Class 11–12 Science',
    'Class 11–12 Commerce',
    'Class 11–12 Arts',
    'Middle School (6–8)',
    'Primary (1–5)',
    'Foundation & Revision',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0EA5E9] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Asymmetrical Two-Column Split) */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E2E8F0] overflow-hidden">
        <div className="container-edufy">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Display typography, concise statement, dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#2563EB]">
                <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                <span>Guwahati, Assam • Android App</span>
              </div>

              <h1 className="font-display-hero text-[#0F172A]">
                Find Tuition &amp; Tutors <br className="hidden sm:inline" />
                in Guwahati
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] max-w-xl leading-relaxed">
                Discover tutors, explore their profiles, and connect directly for tuition that fits
                your needs.
              </p>

              {/* Dual Action Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-find-tutor-btn"
                  onClick={() => onNavigate('/tuition/guwahati/')}
                  className="btn-pill-primary"
                >
                  <span>Find a Tutor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-become-tutor-btn"
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="btn-pill-white"
                >
                  <span>Become a Tutor</span>
                </button>
              </div>

              {/* Android Indicator */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B]">
                <a
                  href="https://play.google.com/store/apps/details?id=in.tutoconnect.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#2563EB] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Get TutoConnect on Google Play</span>
                </a>
                <span className="text-[#CBD5E1]">•</span>
                <span>Android App</span>
              </div>
            </motion.div>

            {/* Right: Authentic Android Phone Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative p-5 sm:p-8 rounded-[36px] bg-[#F8FAFC] border border-[#E2E8F0]">
                <InteractiveTiltPhone maxTilt={10} scaleOnHover={1.02} enableGlare={true}>
                  <PhoneMockup screen="discovery" size="lg" />
                </InteractiveTiltPhone>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TWO-SIDED ENTRY ("One Place. Two Sides.") */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="container-edufy">
          <div className="max-w-2xl mx-auto mb-14 space-y-2.5 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Two Audiences
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              One Place. Two Sides.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
              Direct discovery and connection for both sides of tuition in Guwahati.
            </p>
          </div>

          {/* Editorial Split: Two cohesive surfaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Side A: Students & Parents */}
            <div className="p-8 sm:p-10 rounded-[28px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white text-[11px] font-bold uppercase tracking-wider text-[#2563EB] border border-[#E2E8F0]">
                  FOR STUDENTS &amp; PARENTS
                </span>
                <h3 className="font-display-sub text-[#0F172A]">
                  Looking for Tuition?
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Discover tutors matching your class, subjects, and neighbourhood in Guwahati.
                  Review teacher profiles and connect directly.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('/tuition/guwahati/')}
                  className="btn-pill-primary"
                >
                  <span>Find a Tutor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Side B: Tutors & Teachers */}
            <div className="p-8 sm:p-10 rounded-[28px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white text-[11px] font-bold uppercase tracking-wider text-[#0284C7] border border-[#E2E8F0]">
                  FOR TUTORS &amp; TEACHERS
                </span>
                <h3 className="font-display-sub text-[#0F172A]">
                  Looking for Students?
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Create your tutor profile to showcase your qualifications, subjects, and
                  teaching preferences to students and parents looking for tuition.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="btn-pill-white"
                >
                  <span>Become a Tutor</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0F172A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. REAL APP SHOWCASE (3-Phone Stage Carousel) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-edufy">
          <div className="max-w-2xl mx-auto mb-14 space-y-2.5 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Android Application
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              See TutoConnect in Action
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
              Experience how students and tutors connect directly in Guwahati.
            </p>
          </div>

          {/* Interactive 3-Phone Stage Carousel */}
          <PhoneShowcaseCarousel />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW IT WORKS PINBOARD (21st.dev Animated Flow) */}
      {/* ========================================================================= */}
      <HowItWorksPinboard
        steps={homeSteps}
        title="How It Works"
        eyebrow="Simple Process"
        subtitle="Three direct steps to connect students and tutors in Guwahati with 0% commission."
        showCta={true}
        onNavigate={onNavigate}
        ctaText="Learn more about how TutoConnect works"
        ctaRoute="/how-it-works/"
        className="border-b border-[#E2E8F0]"
      />

      {/* ========================================================================= */}
      {/* 5. TUITION / TEACHING OPTIONS & SUBJECTS (Idea 1: River Stream) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        {/* Technical SEO: Schema.org Course ItemList for Subject & Board Coverage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Guwahati Tuition Subjects & Curricula',
              description:
                'TutoConnect tuition subjects, educational boards, and classes supported across Guwahati, Assam',
              itemListElement: [
                {
                  '@type': 'Course',
                  position: 1,
                  name: 'Mathematics Tuition in Guwahati',
                  description:
                    'Tuition for Class 1 to 12 Mathematics covering ASSEB SEBA, CBSE, and ICSE boards in Guwahati.',
                  provider: {
                    '@type': 'Organization',
                    name: 'TutoConnect',
                    sameAs: 'https://tutoconnect.in',
                  },
                },
                {
                  '@type': 'Course',
                  position: 2,
                  name: 'Science & Physics Tuition in Guwahati',
                  description:
                    'General Science, Physics, Chemistry, and Biology tuition for Secondary and Higher Secondary students.',
                  provider: {
                    '@type': 'Organization',
                    name: 'TutoConnect',
                    sameAs: 'https://tutoconnect.in',
                  },
                },
                {
                  '@type': 'Course',
                  position: 3,
                  name: 'Commerce & Accountancy Tuition in Guwahati',
                  description:
                    'Accountancy, Business Studies, and Economics tuition for AHSEC and CBSE Class 11-12 students.',
                  provider: {
                    '@type': 'Organization',
                    name: 'TutoConnect',
                    sameAs: 'https://tutoconnect.in',
                  },
                },
                {
                  '@type': 'Course',
                  position: 4,
                  name: 'ASSEB (SEBA & AHSEC) Board Tuition',
                  description:
                    'Vernacular and English medium state board tuition for HSLC and Higher Secondary exams in Guwahati.',
                  provider: {
                    '@type': 'Organization',
                    name: 'TutoConnect',
                    sameAs: 'https://tutoconnect.in',
                  },
                },
                {
                  '@type': 'Course',
                  position: 5,
                  name: 'CBSE & ICSE Board Tuition in Guwahati',
                  description:
                    'Comprehensive school tuition for CBSE and ICSE students across Beltola, Hatigaon, Zoo Road, and Guwahati.',
                  provider: {
                    '@type': 'Organization',
                    name: 'TutoConnect',
                    sameAs: 'https://tutoconnect.in',
                  },
                },
              ],
            }),
          }}
        />

        <div className="container-edufy">
          {/* Centered Minimal Header */}
          <div className="max-w-2xl mx-auto mb-10 space-y-2 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Scope &amp; Availability
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              Tuition for What You Need
            </h2>
            <p className="text-sm text-[#64748B] max-w-lg mx-auto leading-relaxed">
              Discover educators by subject, curriculum, and preferred teaching format.
            </p>
          </div>

          {/* Modern SaaS Feature Art Cards (4 Teaching Formats) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {teachingModes.map((mode) => (
              <div
                key={mode.name}
                className="rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-200 group overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Art Canvas */}
                <div className="h-28 bg-[#F8FAFC] group-hover:bg-[#F0F7FF]/60 border-b border-[#E2E8F0]/70 flex items-center justify-center p-3 relative overflow-hidden transition-colors duration-200">
                  {mode.graphic}
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {mode.name}
                    </h3>
                    <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">
                      {mode.tagline}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded-md border border-[#DBEAFE]">
                      {mode.badge}
                    </span>
                    <span className="text-[10px] font-medium text-[#94A3B8] group-hover:text-[#2563EB] transition-colors inline-flex items-center gap-0.5">
                      <span>Available</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* River Stream: Dual Continuous Infinite Flows */}
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Curriculum &amp; Subject Coverage
              </span>
              <span className="text-[10px] text-[#94A3B8]">
                Hover stream to pause
              </span>
            </div>

            {/* River Stream Wrapper with Edge Mask and Hover Pause */}
            <div className="mask-river-fade overflow-hidden py-1 space-y-2.5 pause-hover">
              {/* Stream 1: Popular Subjects (Flows Left) */}
              <div className="animate-river-left flex items-center gap-2.5 w-max py-0.5">
                {[...riverSubjects, ...riverSubjects].map((subject, idx) => (
                  <span
                    key={`stream-sub-${idx}`}
                    className="px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#2563EB] hover:text-[#2563EB] transition-colors duration-150 cursor-default select-none text-xs font-medium text-[#0F172A] whitespace-nowrap"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              {/* Stream 2: Boards & Stages (Flows Right) */}
              <div className="animate-river-right flex items-center gap-2.5 w-max py-0.5">
                {[...riverBoardsAndLevels, ...riverBoardsAndLevels].map((board, idx) => (
                  <span
                    key={`stream-board-${idx}`}
                    className="px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs hover:bg-white hover:border-[#0284C7] hover:text-[#0F172A] transition-colors duration-150 cursor-default select-none text-xs font-medium text-[#475569] whitespace-nowrap"
                  >
                    {board}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Context & Direct Link */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span className="text-xs text-[#64748B]">
              0% platform commission • Direct connection with educators
            </span>
            <button
              onClick={() => onNavigate('/tuition/guwahati/')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] shrink-0 group"
            >
              <span>Explore tutors in Guwahati</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GUWAHATI SEO SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="container-edufy">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Guwahati, Assam
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              Tuition in Guwahati
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              TutoConnect helps students and parents discover tutors across Guwahati and connect
              directly based on subject, location, and teaching preference. Whether you need
              tuition near Beltola, Hatigaon, Zoo Road, Chandmari, Dispur, or Jalukbari, connect
              directly with educators for school curriculum and board preparation.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                id="explore-guwahati-btn"
                onClick={() => onNavigate('/tuition/guwahati/')}
                className="btn-pill-primary"
              >
                <span>Explore Tuition in Guwahati</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ULTRA-CLEAN MINIMAL FAQ (Linear / Apple Divider Style) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        {/* Technical SEO: Schema.org FAQPage Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />

        <div className="container-edufy relative z-10">
          {/* Centered Minimal Header */}
          <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center space-y-3">
            <h2 className="font-display-section text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
              Clear, transparent answers about tuition discovery, fees, and safety in Guwahati.
            </p>
          </div>

          {/* Hairline Divider List */}
          <div className="max-w-3xl mx-auto border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="group">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer select-none transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center shrink-0 text-[#64748B] group-hover:text-[#2563EB] transition-transform duration-200 ${
                        isOpen ? 'rotate-45 text-[#2563EB]' : ''
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Minimal 1-Line Contact Prompt */}
          <div className="mt-12 text-center text-sm text-[#64748B]">
            <span>Have another question? </span>
            <button
              onClick={() => onNavigate('/contact/')}
              className="font-medium text-[#2563EB] hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <span>Reach out to our Guwahati team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-edufy">
          <div className="p-8 sm:p-14 rounded-[32px] bg-[#1E3A8A] text-white relative overflow-hidden shadow-lg text-center">
            {/* Ambient gradients */}
            <div
              className="absolute -right-20 -top-20 w-96 h-96 bg-[#2563EB]/30 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#0EA5E9]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#0EA5E9] border border-white/10">
                Android Application
              </span>

              <h2 className="font-display-section text-white">
                Ready to get started with TutoConnect?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg mx-auto">
                Find tuition in Guwahati or create your tutor profile and connect with local learners.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=in.tutoconnect.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-[#1E3A8A] font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#1E3A8A]" />
                  <span>Download on Google Play</span>
                </a>

                <button
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors cursor-pointer"
                >
                  <span>Become a Tutor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
