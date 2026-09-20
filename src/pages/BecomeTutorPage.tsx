import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { BrandStar } from '../components/ui/Decorations';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ArrowRight,
  ChevronDown,
  Users,
  MapPin,
  Zap,
} from 'lucide-react';

interface BecomeTutorPageProps {
  onNavigate: (route: PageRoute) => void;
}

const FAQS = [
  {
    q: 'Does TutoConnect guarantee students or tuition income?',
    a: 'No. TutoConnect is a tutor discovery and direct-connection platform. We do not guarantee student placements or earnings. Enquiries depend on your subjects, qualifications, preferred localities, and local student demand in Guwahati.',
  },
  {
    q: 'Does TutoConnect charge tutors any commission?',
    a: 'No. During our launch, TutoConnect deducts 0% commission from tuition fees. You and the student or parent negotiate and agree on class schedules and fees directly.',
  },
  {
    q: 'How can tutors find students in Guwahati?',
    a: 'Create a complete educator profile with your degrees, subjects taught, teaching experience, and preferred Guwahati localities. Students and parents searching in those areas can discover and contact you directly.',
  },
  {
    q: 'Can I choose my preferred teaching areas in Guwahati?',
    a: 'Yes. You can select specific neighbourhoods (such as Beltola, Zoo Road, Chandmari, or Dispur) where you are comfortable travelling for home tuition or offering classes.',
  },
  {
    q: 'Can tutors teach online, at home, or at a tuition centre?',
    a: "Yes. You can offer home tuition at the student's residence, classes at your own study location, centre-based coaching, or online classes depending on your preference.",
  },
  {
    q: 'Does TutoConnect provide an in-app video classroom tool?',
    a: 'TutoConnect focuses on seamless local discovery and direct connection. If you offer online tuition, you can conduct classes over your preferred external platform like Google Meet or Zoom.',
  },
  {
    q: 'What information should I add to my tutor profile?',
    a: 'Add your university degrees, board specializations (SEBA, CBSE, AHSEC), subjects, hourly/monthly rates, teaching experience, and available days to maximize relevant inquiries.',
  },
  {
    q: 'Is TutoConnect free to join for educators?',
    a: 'Yes, joining TutoConnect and creating an educator profile is completely free with 0% platform commission cuts.',
  },
];

export const BecomeTutorPage: React.FC<BecomeTutorPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Safe Schema.org JSON-LD structured data for Google Search Rich Snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Become a Discoverable Tutor in Guwahati on TutoConnect',
        description: 'Four simple steps to register, create your educator profile, and connect directly with students in Guwahati.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Create your profile',
            text: 'Download the TutoConnect Android app and set up your educator profile with your academic background.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Showcase expertise',
            text: 'Add your degrees, university qualifications, and board specializations (SEBA, CBSE, AHSEC).',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Set preferences',
            text: 'Select your preferred Guwahati localities and teaching modes (Home, Centre, or Online).',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Connect directly',
            text: 'Receive direct student inquiries and arrange tuition terms with 0% platform commission.',
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A]">
      {/* Schema.org Structured Data for Mobile & Technical SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-[#E2E8F0] py-3.5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-[#2563EB] cursor-pointer transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]/40" />
            <span className="text-[#0F172A] font-semibold">Become a Tutor</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-20 border-b border-[#E2E8F0] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                <span>Guwahati, Assam</span>
                <span className="text-[#CBD5E1] font-light">|</span>
                <span className="text-[#64748B] font-medium tracking-normal normal-case">Educator Community</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.1]">
                Looking for students? Join TutoConnect.
              </h1>

              <p className="text-sm sm:text-base text-[#64748B] max-w-xl leading-relaxed">
                Connect directly with students and parents across Guwahati seeking tuition. Showcase your qualifications, select your preferred localities, and teach on your own terms.
              </p>

              {/* Scannable Micro-Pills (Replaces text-heavy checklist) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">0% Commission</div>
                    <div className="text-[11px] text-[#64748B]">Keep 100% of fees</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">Direct Inquiries</div>
                    <div className="text-[11px] text-[#64748B]">No middleman cuts</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">Guwahati-Wide</div>
                    <div className="text-[11px] text-[#64748B]">Choose your areas</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=in.tutoconnect.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dbecome_a_tutor"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-become-tutor-cta"
                  className="btn-tuto-primary px-7 py-3.5 font-semibold text-sm cursor-pointer inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Become a Tutor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-medium text-[#64748B]">
                  Free registration on Android
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-2">
              {/* Soft Ambient Radial Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Floating Studio Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="relative z-10 cursor-pointer select-none drop-shadow-[0_24px_45px_rgba(15,23,42,0.16)] will-change-transform"
              >
                <PhoneMockup screen="tutor-onboarding" size="md" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear 4-Step Breakdown */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
              Onboarding Process
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              How to become discoverable
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Publish your teaching availability in Guwahati in 4 quick steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3 hover:border-[#BFDBFE] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-xs text-[#2563EB] border border-[#DBEAFE]">
                01
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Create Profile</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Download the Android app and set up your educator profile with your contact and academic background.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3 hover:border-[#BFDBFE] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-xs text-[#2563EB] border border-[#DBEAFE]">
                02
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Add Credentials</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Showcase degrees, university background, and teaching experience across SEBA, CBSE, and AHSEC boards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3 hover:border-[#BFDBFE] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-xs text-[#2563EB] border border-[#DBEAFE]">
                03
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Set Preferences</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Select your preferred Guwahati localities and choose between Home, Centre, or Online tuition modes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3 hover:border-[#BFDBFE] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-xs text-[#2563EB] border border-[#DBEAFE]">
                04
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Connect Directly</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Respond to student inquiries and agree on schedules and tuition fees directly with 0% commission cuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Educator FAQ Section (Accordion) */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
              Educator FAQ
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Frequently asked questions by educators
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Transparent answers about joining and teaching on TutoConnect.
            </p>
          </div>

          {/* Interactive Accordions for High Scannability + Deep SEO Crawlability */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? 'border-[#BFDBFE] bg-white shadow-sm'
                      : 'border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#CBD5E1]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 text-left font-display font-semibold text-sm sm:text-base text-[#0F172A] flex justify-between items-center gap-3 cursor-pointer min-h-[48px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2563EB]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clear CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Download the TutoConnect Android App
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Create your educator profile in minutes and start receiving direct inquiries across Guwahati.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('/download/')}
              className="btn-tuto-secondary px-8 py-3.5 font-semibold text-sm cursor-pointer inline-flex items-center gap-2 shadow-md"
            >
              <span>Download Android App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-12 opacity-15 pointer-events-none">
          <BrandStar size={64} color="#ffffff" />
        </div>
      </section>
    </div>
  );
};
