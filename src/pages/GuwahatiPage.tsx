import React from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import { motion } from 'motion/react';
import {
  MapPin,
  Check,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Home,
  Laptop,
  Building,
} from 'lucide-react';

interface GuwahatiPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const GuwahatiPage: React.FC<GuwahatiPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A]">
      {/* Breadcrumbs */}
      <div className="border-b border-[#E2E8F0] py-3.5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
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
      <section className="pt-14 pb-16 md:pt-18 md:pb-22 border-b border-[#E2E8F0] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left relative z-10">
              <PillBadge
                text="Guwahati, Assam • Local Discovery Hub"
                bgColor="#EFF6FF"
                dotColor="#0EA5E9"
                textColor="#0F172A"
                borderColor="#DBEAFE"
              />

              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
                Find Tuition & Tutors in Guwahati
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] max-w-xl leading-relaxed">
                Looking for tuition in Guwahati? TutoConnect helps students and parents discover educators and connect directly across all major neighbourhoods with 0% platform commission.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/download/')}
                  className="btn-tuto-primary px-8 py-3.5 font-semibold text-sm cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Get Android App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="btn-tuto-white px-8 py-3.5 font-semibold text-sm cursor-pointer"
                >
                  Teach in Guwahati
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-4">
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
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-12 space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Tuition for both sides in Guwahati.
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              Whether you need instruction for school boards or you are an educator offering tuition, TutoConnect makes finding and connecting direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Side A */}
            <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-5">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#EFF6FF] text-xs font-semibold text-[#2563EB] border border-[#DBEAFE]">
                For Students & Parents
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Looking for tuition in Guwahati?
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                From SEBA and CBSE school curricula to AHSEC Class 11–12 board preparations, discover educators active across Guwahati.
              </p>
              <ul className="space-y-2.5 text-xs text-[#0F172A] pt-1">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Discover home tutors visiting your residential area</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Find tutors teaching at their study space or local centres</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Contact educators directly to discuss timings, syllabi, and fees</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/download/')}
                  className="btn-tuto-primary px-6 py-3 font-semibold text-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Browse Tutors in App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Side B */}
            <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-5">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#E0F2FE] text-xs font-semibold text-[#0284C7] border border-[#BAE6FD]">
                For Tutors & Teachers
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Looking for students in Guwahati?
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Dedicated teachers, lecturers, and subject experts can build a profile and make their credentials visible to families searching for guidance.
              </p>
              <ul className="space-y-2.5 text-xs text-[#0F172A] pt-1">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Highlight your degrees, teaching background, and subjects</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Select specific localities where you are available to teach</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Communicate directly with students without platform commissions</span>
                </li>
              </ul>
              <div className="pt-4">
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

      {/* Formats & Localities Editorial */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Formats */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Tuition Formats in Guwahati
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Different learners need different environments. Tutors on TutoConnect list their preferred teaching arrangements clearly:
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-5 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] border border-[#DBEAFE] flex-shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#0F172A]">Home Tuition</div>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      Personalized 1-on-1 tutoring conducted at the student’s residence in Guwahati.
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] border border-[#DBEAFE] flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#0F172A]">Tutor's Location</div>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      Lessons held at the educator's residence or private study setup.
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] border border-[#DBEAFE] flex-shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#0F172A]">Centre-Based Tuition</div>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      Classes conducted at coaching centres or designated educational facilities.
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] border border-[#DBEAFE] flex-shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#0F172A]">Online Tuition</div>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      Offered by select tutors using their preferred video tools. TutoConnect does not provide in-app video classes.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Localities & Boards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Key Localities in Guwahati
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Find educators located near your neighbourhood to minimize travel and coordinate sessions easily:
                </p>
                <div className="flex flex-wrap gap-2 text-xs pt-1">
                  {[
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
                  ].map((loc) => (
                    <span
                      key={loc}
                      className="px-3.5 py-1.5 rounded-full bg-[#F0F6FF] border border-[#DBEAFE] font-medium text-[#0F172A] hover:bg-[#DBEAFE] transition-colors"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <h4 className="font-display font-bold text-lg text-[#0F172A] mb-3">
                  Academic Boards & Standards
                </h4>
                <div className="grid grid-cols-2 gap-3.5 text-xs text-[#64748B]">
                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                    <strong className="block text-[#0F172A] font-bold mb-0.5">SEBA Board</strong>
                    Class 9 & 10 HSLC core subjects
                  </div>
                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                    <strong className="block text-[#0F172A] font-bold mb-0.5">AHSEC Board</strong>
                    Class 11 & 12 Science, Arts & Commerce
                  </div>
                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                    <strong className="block text-[#0F172A] font-bold mb-0.5">CBSE Framework</strong>
                    NCERT foundational syllabus
                  </div>
                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                    <strong className="block text-[#0F172A] font-bold mb-0.5">ICSE / ISC</strong>
                    Literature, sciences & mathematics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Discover Tutors in Guwahati on Android
          </h3>
          <p className="text-white/90 text-base max-w-lg mx-auto leading-relaxed">
            Download TutoConnect to browse educator profiles or create your tutor profile today.
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
