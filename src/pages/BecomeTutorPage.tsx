import React from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import { motion } from 'motion/react';
import {
  Check,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  GraduationCap,
} from 'lucide-react';

interface BecomeTutorPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const BecomeTutorPage: React.FC<BecomeTutorPageProps> = ({ onNavigate }) => {
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
            <span className="text-[#0F172A] font-semibold">Become a Tutor</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-18 md:pb-22 border-b border-[#E2E8F0] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left relative z-10">
              <PillBadge
                text="Educator Community • Guwahati, Assam"
                bgColor="#EFF6FF"
                dotColor="#0EA5E9"
                textColor="#0F172A"
                borderColor="#DBEAFE"
              />

              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
                Looking for students? Join TutoConnect.
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] max-w-xl leading-relaxed">
                Connect directly with students and parents in Guwahati seeking tuition. Showcase your qualifications, choose your preferred localities, and teach on your terms with 0% commission.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#0F172A]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs border border-[#DBEAFE]">
                    ✓
                  </span>
                  <span>Create a detailed educator profile highlighting your university degrees</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs border border-[#DBEAFE]">
                    ✓
                  </span>
                  <span>Specify your subjects, grade levels, and preferred localities in Guwahati</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs border border-[#DBEAFE]">
                    ✓
                  </span>
                  <span>Connect directly with learners without platform commission cuts</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=in.tutoconnect.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dbecome_a_tutor"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-become-tutor-cta"
                  className="btn-tuto-primary px-8 py-3.5 font-semibold text-sm cursor-pointer inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Become a Tutor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-medium text-[#64748B]">
                  Free registration on Android • 0% commission
                </span>
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
                <PhoneMockup screen="tutor-onboarding" size="md" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear 4-Step Breakdown */}
      <section className="py-20 bg-[#F8FAFC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-white text-xs font-semibold text-[#2563EB] border border-[#DBEAFE]">
              Onboarding Process
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
              How to become discoverable
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              A straightforward sequence to publish your teaching availability in Guwahati.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-[22px] bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                01
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A]">Create your profile</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Download the Android app and set up your educator profile with your contact and academic background details.
              </p>
            </div>

            <div className="p-7 rounded-[22px] bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                02
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A]">Showcase expertise</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Add your degrees, university background, and teaching experience across specific school and college boards.
              </p>
            </div>

            <div className="p-7 rounded-[22px] bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                03
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A]">Set preferences</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Choose the localities in Guwahati you cover and whether you offer home, centre, or online tuition.
              </p>
            </div>

            <div className="p-7 rounded-[22px] bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                04
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A]">Connect directly</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Respond to student inquiries and arrange scheduling and tuition fees directly with 0% platform commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Educator FAQ Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-3">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Frequently asked questions by educators
            </h3>
            <p className="text-[#64748B] text-base leading-relaxed">
              Transparent details regarding teaching opportunities on TutoConnect.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Does TutoConnect guarantee students or tuition income?',
                a: 'No. TutoConnect is a tutor discovery and direct-connection platform. It does not guarantee student placements, tuition enquiries, or earnings. The number of enquiries a tutor receives can depend on factors such as location, subjects, experience, profile information, and local demand in Guwahati.',
              },
              {
                q: 'Does TutoConnect currently charge tutors a commission?',
                a: 'No. During our initial launch, TutoConnect does not deduct a commission from tuition fees. Tutors and students or parents can discuss and agree on tuition fees directly.',
              },
              {
                q: 'How can tutors find students in Guwahati?',
                a: 'Create a detailed tutor profile with your subjects, classes, qualifications, experience, tuition rates, and preferred teaching locations. Students and parents searching for tuition in those areas may discover your profile through TutoConnect.',
              },
              {
                q: 'Can I choose where I teach in Guwahati?',
                a: 'Yes. Tutors can specify the Guwahati localities where they prefer to teach. This helps students and parents discover tutors whose preferred teaching areas match their requirements.',
              },
              {
                q: 'Can tutors teach online, at home, or at a tuition centre?',
                a: "Yes. Tutors can indicate the teaching modes they offer, such as online classes, teaching at the student's home, teaching from their own location, or teaching at a tuition centre, depending on their setup.",
              },
              {
                q: 'Does TutoConnect provide an online classroom or video tool?',
                a: 'TutoConnect currently focuses on helping students, parents, and tutors discover and connect with one another. Tutors offering online tuition can use their preferred external meeting platform, such as Google Meet or Zoom.',
              },
              {
                q: 'What information can I add to my tutor profile?',
                a: 'Tutors can provide information such as their subjects, classes taught, qualifications, teaching experience, preferred teaching locations, available teaching modes, availability, and tuition rates. A complete and accurate profile can help students and parents understand whether the tutor matches their requirements.',
              },
              {
                q: 'Is TutoConnect free for tutors?',
                a: 'TutoConnect is currently free for tutors during our initial launch. We currently do not deduct commission from tuition fees. As the platform develops, optional paid features or subscription services may be introduced, and any applicable charges will be clearly communicated before they apply.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs space-y-2"
              >
                <h4 className="font-display font-bold text-base text-[#0F172A]">
                  {faq.q}
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clear CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Download the TutoConnect Android App
          </h3>
          <p className="text-white/90 text-base max-w-lg mx-auto leading-relaxed">
            Get started by creating your educator profile and connecting with learners in Guwahati.
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
