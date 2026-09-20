import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { BrandStar } from '../components/ui/Decorations';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Home,
  Laptop,
  Building,
  CheckCircle2,
  Zap,
  GraduationCap,
} from 'lucide-react';

interface GuwahatiPageProps {
  onNavigate: (route: PageRoute) => void;
}

const GUWAHATI_FAQS = [
  {
    q: 'How do I find a home tutor in Guwahati near me?',
    a: 'Download the TutoConnect Android app, select your locality (e.g. Beltola, Zoo Road, Chandmari, or Dispur), choose your subject and board, and browse verified educator profiles in your neighbourhood.',
  },
  {
    q: 'Are there tutors for SEBA, AHSEC, and CBSE boards in Guwahati?',
    a: 'Yes. Educators on TutoConnect cover primary, secondary, and higher secondary curricula including SEBA HSLC (Class 9–10), AHSEC HS (Class 11–12 Science, Arts, Commerce), CBSE, and ICSE.',
  },
  {
    q: 'Does TutoConnect charge students or parents any fee?',
    a: 'No. Discovering tutors and connecting directly with educators on TutoConnect is completely free with 0% platform commission.',
  },
  {
    q: 'What tuition modes are available in Guwahati?',
    a: 'You can choose from personalized home tuition at your residence, classes held at the tutor’s location, local centre coaching, or remote online tuition.',
  },
];

const LOCALITIES = [
  'Beltola',
  'Zoo Road',
  'Chandmari',
  'Uzan Bazar',
  'Dispur',
  'Ganeshguri',
  'Ulubari',
  'Panbazar',
  'Jalukbari',
  'Silpukhuri',
  'Hatigaon',
  'Kahilipara',
  'Bhangagarh',
  'Rehabari',
];

export const GuwahatiPage: React.FC<GuwahatiPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Safe Schema.org JSON-LD structured data for Google Search local SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        name: 'TutoConnect Guwahati',
        url: 'https://tutoconnect.in/tuition/guwahati/',
        description:
          'Find home tuition, school tutors, and exam preparation in Guwahati. Connect directly with verified educators with 0% platform commission.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Guwahati',
          addressRegion: 'Assam',
          addressCountry: 'IN',
        },
        areaServed: LOCALITIES.map((loc) => ({
          '@type': 'AdministrativeArea',
          name: `${loc}, Guwahati`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: GUWAHATI_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A]">
      {/* Schema.org Structured Data for Local & Mobile Technical SEO */}
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
            <span className="text-[#64748B]">Tuition</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]/40" />
            <span className="text-[#0F172A] font-semibold">Guwahati</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-20 border-b border-[#E2E8F0] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                <span>Guwahati, Assam</span>
                <span className="text-[#CBD5E1] font-light">|</span>
                <span className="text-[#64748B] font-medium tracking-normal normal-case">Tuition & Tutor Network</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.1]">
                Find Tuition & Tutors in Guwahati
              </h1>

              <p className="text-sm sm:text-base text-[#64748B] max-w-xl leading-relaxed">
                Looking for tuition in Guwahati? TutoConnect connects students and parents directly with verified educators across all major localities with 0% platform commission.
              </p>

              {/* Scannable Micro-Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">All Localities</div>
                    <div className="text-[11px] text-[#64748B]">Beltola to Jalukbari</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">Flexible Modes</div>
                    <div className="text-[11px] text-[#64748B]">Home, Centre & Online</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">0% Commission</div>
                    <div className="text-[11px] text-[#64748B]">Direct coordination</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/download/')}
                  className="btn-tuto-primary px-7 py-3.5 font-semibold text-sm cursor-pointer inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Get Android App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="btn-tuto-white px-7 py-3.5 font-semibold text-sm cursor-pointer border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all"
                >
                  Teach in Guwahati
                </button>
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
                <PhoneMockup screen="discovery" size="md" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Sided Focus in Guwahati */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Tuition for both sides in Guwahati
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Whether you need instruction for school boards or you are an educator offering classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Side A: Students */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4 hover:border-[#BFDBFE] transition-colors">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                For Students & Parents
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                Looking for tuition in Guwahati?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Find home tutors and coaching options for SEBA, CBSE, and AHSEC Class 11–12 board preparations.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Verified home tutors visiting your residential area</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Tutors with dedicated study setups or coaching centres</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Direct contact with educators to discuss schedule and fees</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/download/')}
                  className="btn-tuto-primary px-6 py-3 font-semibold text-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Browse Tutors in App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Side B: Tutors */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4 hover:border-[#BFDBFE] transition-colors">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                For Tutors & Teachers
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                Looking for students in Guwahati?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Dedicated teachers and subject experts can build a profile and connect directly with local families.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <span>Highlight your university degrees, subjects, and experience</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <span>Select specific Guwahati neighbourhoods where you teach</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <span>Direct inquiries from students with 0% platform cuts</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="btn-tuto-secondary px-6 py-3 font-semibold text-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Join as a Guwahati Tutor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Formats (Modern 2x2 Matrix) */}
      <section className="py-14 sm:py-18 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
              Flexible Modes
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Tuition Formats in Guwahati
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Choose the learning environment that best matches your student’s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 hover:bg-white hover:border-[#BFDBFE] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#DBEAFE]">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Home Tuition</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Personalized 1-on-1 tutoring conducted at the student’s residence in Guwahati.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 hover:bg-white hover:border-[#BFDBFE] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#DBEAFE]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Tutor's Location</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Lessons held at the educator’s residence or private study setup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 hover:bg-white hover:border-[#BFDBFE] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#DBEAFE]">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Centre-Based Tuition</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Classes conducted at coaching centres or designated educational facilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 hover:bg-white hover:border-[#BFDBFE] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#DBEAFE]">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#0F172A]">Online Tuition</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Interactive remote classes held over external meeting platforms like Google Meet or Zoom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localities & Boards Section */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Localities Cloud */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Key Localities in Guwahati
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Find educators located near your neighbourhood to coordinate sessions easily:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs pt-2">
                {LOCALITIES.map((loc) => (
                  <span
                    key={loc}
                    className="px-3.5 py-2 rounded-full bg-white border border-[#E2E8F0] font-medium text-[#0F172A] hover:border-[#BFDBFE] hover:bg-[#EFF6FF] transition-colors cursor-default"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Boards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Academic Boards & Standards
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Curriculum support across major school and higher secondary boards:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#64748B] pt-2">
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0]">
                  <strong className="block text-[#0F172A] font-bold mb-0.5 text-sm">SEBA Board</strong>
                  Class 9 & 10 HSLC core subjects
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0]">
                  <strong className="block text-[#0F172A] font-bold mb-0.5 text-sm">AHSEC Board</strong>
                  Class 11 & 12 Science, Arts & Commerce
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0]">
                  <strong className="block text-[#0F172A] font-bold mb-0.5 text-sm">CBSE Framework</strong>
                  NCERT foundational syllabus
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0]">
                  <strong className="block text-[#0F172A] font-bold mb-0.5 text-sm">ICSE / ISC</strong>
                  Literature, sciences & mathematics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Guwahati FAQ Section */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
              Local FAQ
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Frequently asked questions in Guwahati
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Everything you need to know about finding tuition in Guwahati.
            </p>
          </div>

          <div className="space-y-3">
            {GUWAHATI_FAQS.map((faq, index) => {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Discover Tutors in Guwahati on Android
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Download TutoConnect to browse educator profiles or join as a tutor today.
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

        <div className="absolute -top-6 right-10 opacity-15 pointer-events-none">
          <BrandStar size={64} color="#ffffff" />
        </div>
      </section>
    </div>
  );
};

