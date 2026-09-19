import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import {
  GraduationCap,
  Users,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const [role, setRole] = useState<'student' | 'tutor'>('student');

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
            <span className="text-[#0F172A] font-semibold">How It Works</span>
          </nav>
        </div>
      </div>

      {/* Header with Role Selector */}
      <section className="pt-14 pb-16 border-b border-[#E2E8F0] bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <PillBadge
              text="Platform Walkthrough"
              bgColor="#EFF6FF"
              dotColor="#0EA5E9"
              textColor="#0F172A"
              borderColor="#DBEAFE"
            />
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
              How TutoConnect works
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
              A transparent mobile platform connecting students seeking guidance with educators offering tuition across Guwahati.
            </p>

            {/* Role Switcher Pills */}
            <div className="pt-2 inline-flex p-1.5 rounded-full bg-[#F0F6FF] border border-[#DBEAFE] shadow-xs">
              <button
                onClick={() => setRole('student')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  role === 'student'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-[#0F172A] hover:text-[#2563EB]'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>For Students & Parents</span>
              </button>
              <button
                onClick={() => setRole('tutor')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  role === 'tutor'
                    ? 'bg-[#0EA5E9] text-white shadow-xs'
                    : 'text-[#0F172A] hover:text-[#2563EB]'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>For Tutors & Teachers</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Flow */}
      <section className="py-20 bg-[#F8FAFC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {role === 'student' ? (
            <div className="space-y-16">
              {/* Step 1 & 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  {/* Step 1 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      01
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 01</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Discover tutors</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Search by subject, class, and your locality in Guwahati. Filter by home tuition, tutor’s location, or online arrangements.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      02
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 02</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Explore profiles</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Review qualifications, degrees, subjects taught, board experience (SEBA, CBSE, AHSEC), and teaching bio.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md bg-white rounded-[30px] p-6 border border-[#DBEAFE] shadow-xs">
                    <PhoneMockup screen="discovery" size="md" />
                  </div>
                </div>
              </div>

              {/* Step 3 & 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-[#E2E8F0]">
                <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                  <div className="w-full max-w-md bg-white rounded-[30px] p-6 border border-[#DBEAFE] shadow-xs">
                    <PhoneMockup screen="profile" size="md" />
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  {/* Step 3 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      03
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 03</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Connect directly</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Reach out to the tutor directly through the TutoConnect Android app to discuss your learning goals.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      04
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 04</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Arrange tuition</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Agree on schedules, tuition fees, and lesson locations directly with the educator without intermediary friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Tutor Flow */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  {/* Step 1 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      01
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 01</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Create profile</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Download the app, register as an educator, and input your basic profile information.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      02
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 02</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Showcase expertise</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Add your academic degrees, teaching background, subjects, and preferred localities across Guwahati.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md bg-white rounded-[30px] p-6 border border-[#DBEAFE] shadow-xs">
                    <PhoneMockup screen="tutor-onboarding" size="md" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-[#E2E8F0]">
                <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                  <div className="w-full max-w-md bg-white rounded-[30px] p-6 border border-[#DBEAFE] shadow-xs">
                    <PhoneMockup screen="profile" size="md" />
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  {/* Step 3 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      03
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 03</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Get discovered</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Students and parents searching for your subjects in your Guwahati areas can view your public profile.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-display font-bold text-sm text-[#2563EB] border border-[#DBEAFE]">
                      04
                    </div>
                    <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Step 04</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">Connect</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Receive direct inquiries and coordinate teaching logistics independently with zero commissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Get Started on Android
          </h3>
          <p className="text-white/90 text-base max-w-md mx-auto leading-relaxed">
            Experience tutor discovery designed for Guwahati on your smartphone.
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

        <div className="absolute top-8 right-14 opacity-15 pointer-events-none">
          <BrandStar size={64} color="#ffffff" />
        </div>
      </section>
    </div>
  );
};
