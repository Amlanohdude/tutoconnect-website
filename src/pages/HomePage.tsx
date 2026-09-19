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
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState<'all' | 'students' | 'tutors' | 'pricing'>('all');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqCategories = [
    { id: 'all', label: 'All Questions' },
    { id: 'students', label: 'Students & Parents' },
    { id: 'tutors', label: 'Tutors & Teachers' },
    { id: 'pricing', label: 'Fees & Safety' },
  ] as const;

  const faqs = [
    {
      q: 'Is TutoConnect really 100% free with 0% commission?',
      a: 'Yes, absolutely. TutoConnect is a direct-connection platform for Guwahati. We charge zero finder fees from families and deduct 0% commission from educators. Whatever tuition fee is agreed between parent and tutor goes 100% directly to the educator.',
      category: ['pricing', 'students', 'tutors'],
      badge: '0% Commission',
    },
    {
      q: 'Which school boards and classes are supported across Guwahati?',
      a: 'Tutors on TutoConnect cover SEBA (State Board of Assam), AHSEC (Assam Higher Secondary Education Council), CBSE, and ICSE. Available tuition spans Primary (Classes 1–5), Middle (Classes 6–8), High School (Classes 9–10), Higher Secondary (Classes 11–12 Science, Commerce, Arts), and College degree courses.',
      category: ['students'],
      badge: 'Guwahati Boards',
    },
    {
      q: 'How do tuition payments work between parents and tutors?',
      a: 'Tuition payments are settled directly between parents and tutors via whatever payment method you prefer (UPI, Google Pay, PhonePe, Cash, or Direct Bank Transfer). TutoConnect does not process payments or hold any student funds in escrow, eliminating middleman cuts.',
      category: ['pricing', 'students'],
      badge: 'Direct Payment',
    },
    {
      q: 'Where can private tuition classes take place in Guwahati?',
      a: "Tuition formats are arranged flexibly between both parties. Depending on preference, classes can be Home Tuition (the tutor travels to the student's residence), Tutor's Study Location (the student attends classes at the teacher's space), Centre-based tuition, or independent online classes.",
      category: ['students', 'tutors'],
      badge: 'Flexible Formats',
    },
    {
      q: 'How can parents verify tutor qualifications and ensure safety?',
      a: 'Every tutor profile showcases degrees, qualifications, teaching background, and subjects taught. We always encourage parents to speak directly over phone or WhatsApp, request physical degree or identity verification upon first meeting, and schedule an initial trial class before confirming long-term arrangements.',
      category: ['pricing', 'students'],
      badge: 'Safety & Trust',
    },
    {
      q: 'How do educators in Guwahati register and start getting inquiries?',
      a: 'Download the TutoConnect Android app, tap "Become a Tutor", and complete your profile in under 3 minutes. Specify your academic qualifications, subjects and classes taught, and your preferred Guwahati teaching localities (e.g. Beltola, Zoo Road, Chandmari, Jalukbari). Your verified profile is then published for nearby families to discover.',
      category: ['tutors'],
      badge: 'For Educators',
    },
    {
      q: 'Does TutoConnect guarantee a minimum number of student inquiries?',
      a: 'No platform can honestly promise guaranteed student volume. TutoConnect acts as a transparent discovery bridge connecting active families with nearby educators. Tutors who provide comprehensive academic credentials, clear bios, and competitive rates see the best engagement from parents.',
      category: ['tutors', 'pricing'],
      badge: 'Transparent Terms',
    },
    {
      q: 'Does TutoConnect host in-app live video classes?',
      a: 'No. TutoConnect does not host in-app video streaming infrastructure. If a tutor and student agree to conduct online sessions, they coordinate directly using their preferred video conferencing tools such as Google Meet, Zoom, or WhatsApp video calling.',
      category: ['students', 'tutors'],
      badge: 'Platform Scope',
    },
  ];

  const filteredFaqs =
    activeFaqCategory === 'all'
      ? faqs
      : faqs.filter((f) => f.category.includes(activeFaqCategory));

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
      detail: 'Tutor travels to student residence for 1-on-1 guidance.',
      icon: <Home className="w-4 h-4 text-[#2563EB]" />,
    },
    {
      name: "Tutor's Location",
      detail: 'Student attends classes at the educator study space.',
      icon: <Building className="w-4 h-4 text-[#2563EB]" />,
    },
    {
      name: 'Centre-Based',
      detail: 'Tuition organized at educational centres or institutes.',
      icon: <Building className="w-4 h-4 text-[#2563EB]" />,
    },
    {
      name: 'Independent Online Tuition',
      detail: 'Educators arrange online sessions using their own preferred tools.',
      icon: <Laptop className="w-4 h-4 text-[#2563EB]" />,
    },
  ];

  const subjects = [
    'Mathematics',
    'Science',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Commerce & Accounts',
    'Social Science',
    'Assamese & Languages',
    'Computer Science',
  ];

  const boards = ['SEBA', 'AHSEC', 'CBSE', 'ICSE'];

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
      <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0] text-left">
        <div className="container-edufy">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Two Audiences
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              One Place. Two Sides.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
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
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] text-center">
        <div className="container-edufy">
          <div className="max-w-2xl mx-auto mb-10 space-y-2 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Android Application
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              See TutoConnect in Action
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
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
      {/* 5. TUITION / TEACHING OPTIONS & SUBJECTS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] text-left">
        <div className="container-edufy">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Scope &amp; Availability
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              Tuition for What You Need
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              Flexible teaching arrangements and subjects across all major school boards in Guwahati.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Teaching arrangements */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#475569] block mb-2">
                Teaching Arrangements
              </span>
              {teachingModes.map((mode) => (
                <div
                  key={mode.name}
                  className="p-4 rounded-[18px] bg-white border border-[#E2E8F0] flex items-start gap-3"
                >
                  <div className="mt-0.5">{mode.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">{mode.name}</div>
                    <div className="text-xs text-[#64748B] mt-0.5">{mode.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Popular subjects & Boards */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569] block mb-3">
                  Popular Subjects
                </span>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-3.5 py-1.5 rounded-full bg-white text-[#0F172A] text-xs font-medium border border-[#E2E8F0]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569] block mb-3">
                  School Boards Covered
                </span>
                <div className="flex flex-wrap gap-2">
                  {boards.map((board) => (
                    <span
                      key={board}
                      className="px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold border border-[#DBEAFE]"
                    >
                      {board}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-[18px] bg-white border border-[#E2E8F0] text-[11px] text-[#64748B] leading-relaxed">
                TutoConnect connects students/parents and tutors directly. Independent online tuition
                is arranged directly between them; TutoConnect does not currently provide in-app video
                classes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GUWAHATI SEO SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0] text-left">
        <div className="container-edufy">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Guwahati, Assam
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              Tuition in Guwahati
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              TutoConnect helps students and parents discover tutors across Guwahati and connect
              directly based on subject, location, and teaching preference. Whether you need
              tuition near Beltola, Hatigaon, Zoo Road, Chandmari, Dispur, or Jalukbari, connect
              directly with educators for school curriculum and board preparation.
            </p>
            <div className="pt-2">
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
      {/* 7. CENTERED PREMIUM FAQ SECTION WITH CATEGORY TABS (Approach 1) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
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
          {/* Centered Header */}
          <div className="max-w-2xl mx-auto mb-10 space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Got Questions?
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
              Clear, transparent answers to help students, parents, and private tutors connect with confidence in Guwahati.
            </p>
          </div>

          {/* Centered Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {faqCategories.map((cat) => {
              const isActive = activeFaqCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFaqCategory(cat.id);
                    setOpenFaq(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Centered Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-[22px] bg-white border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#93C5FD] shadow-[0px_8px_20px_0px_rgba(37,99,235,0.06)]'
                      : 'border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 text-[#2563EB] border border-blue-100 self-start sm:self-auto">
                        {faq.badge}
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#EFF6FF] text-[#2563EB]' : 'bg-[#F1F5F9] text-[#64748B]'
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Reassurance & Direct Support Box (Centered) */}
          <div className="mt-14 max-w-xl mx-auto p-6 sm:p-8 rounded-[26px] bg-white border border-[#E2E8F0] text-center space-y-3 shadow-xs">
            <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A]">
              Still have questions about tuition in Guwahati?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
              Our Guwahati-based team is here to assist parents, students, and educators with any platform questions.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:tutoconnect.support@gmail.com"
                className="btn-pill-white text-xs px-4 py-2.5 inline-flex items-center gap-2"
              >
                <span>Email Support</span>
              </a>
              <button
                onClick={() => onNavigate('/contact/')}
                className="btn-pill-primary text-xs px-5 py-2.5 inline-flex items-center gap-2"
              >
                <span>Contact Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white text-left">
        <div className="container-edufy">
          <div className="p-8 sm:p-14 rounded-[32px] bg-[#1E3A8A] text-white relative overflow-hidden shadow-lg">
            {/* Ambient gradients */}
            <div
              className="absolute -right-20 -top-20 w-96 h-96 bg-[#2563EB]/30 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#0EA5E9]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#0EA5E9] border border-white/10">
                Android Application
              </span>

              <h2 className="font-display-section text-white">
                Ready to get started with TutoConnect?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Find tuition in Guwahati or create your tutor profile and connect with local learners.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
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
