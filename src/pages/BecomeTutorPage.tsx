import React from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { InteractiveTiltPhone } from '../components/ui/InteractiveTiltPhone';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
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

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-[#F0F6FF] rounded-[30px] p-6 border border-[#DBEAFE] shadow-xs flex justify-center">
                <InteractiveTiltPhone maxTilt={10} scaleOnHover={1.02} enableGlare={true}>
                  <PhoneMockup screen="tutor-onboarding" size="md" />
                </InteractiveTiltPhone>
              </div>
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
            <div className="p-6 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs space-y-2">
              <h4 className="font-display font-bold text-base text-[#0F172A]">
                Does TutoConnect guarantee students or income?
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                No. TutoConnect is a discovery and direct connection platform. It does not guarantee student placements or earnings. Discovery depends on local family demand, subjects taught, and geographic proximity in Guwahati.
              </p>
            </div>

            <div className="p-6 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs space-y-2">
              <h4 className="font-display font-bold text-base text-[#0F172A]">
                Are there commission cuts on my tuition fees?
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                No. TutoConnect does not take a percentage or commission cut from tuition fees. You and the student or parent agree on hourly or monthly rates directly.
              </p>
            </div>

            <div className="p-6 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs space-y-2">
              <h4 className="font-display font-bold text-base text-[#0F172A]">
                Does TutoConnect provide an online classroom or video tool?
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                No. TutoConnect is a matchmaking directory. Tutors offering remote instruction use their preferred external video software (such as Google Meet or Zoom).
              </p>
            </div>

            <div className="p-6 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs space-y-2">
              <h4 className="font-display font-bold text-base text-[#0F172A]">
                Can I specify which parts of Guwahati I want to travel to?
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Yes. During onboarding, you select the specific localities you prefer (such as Beltola, Zoo Road, Chandmari, Dispur, etc.) so that parents in those areas can discover your profile.
              </p>
            </div>
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
