import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import { HowItWorksPinboard, StepItem } from '../components/ui/HowItWorksPinboard';
import {
  GraduationCap,
  Users,
  ChevronRight,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (route: PageRoute) => void;
}

const studentSteps: StepItem[] = [
  {
    number: '01',
    title: 'Discover Tutors',
    description: 'Search by subject, class, and your locality in Guwahati. Filter by home tuition, tutor’s study space, or online classes.',
    colorTheme: 'blue',
  },
  {
    number: '02',
    title: 'Explore Profiles',
    description: 'Review verified qualifications, degrees, subjects taught, board expertise (SEBA, CBSE, AHSEC), and educator bios.',
    colorTheme: 'cyan',
  },
  {
    number: '03',
    title: 'Direct Contact',
    description: 'Reach out to the educator directly via phone call or WhatsApp through the app with zero intermediary fees.',
    colorTheme: 'purple',
  },
  {
    number: '04',
    title: 'Arrange Tuition',
    description: 'Agree on schedules, tuition fees, and lesson locations directly with 0% platform commission or hidden markups.',
    colorTheme: 'orange',
  },
];

const tutorSteps: StepItem[] = [
  {
    number: '01',
    title: 'Create Profile',
    description: 'Download the app, register as an educator in Guwahati, and input your teaching preferences in under 3 minutes.',
    colorTheme: 'blue',
  },
  {
    number: '02',
    title: 'Showcase Expertise',
    description: 'Highlight your academic degrees, teaching background, subjects, and preferred localities across Guwahati.',
    colorTheme: 'cyan',
  },
  {
    number: '03',
    title: 'Get Discovered',
    description: 'Students and parents searching for your subjects in your Guwahati areas can view your verified public profile.',
    colorTheme: 'purple',
  },
  {
    number: '04',
    title: 'Connect Directly',
    description: 'Receive direct student inquiries and coordinate teaching logistics independently while keeping 100% of your earnings.',
    colorTheme: 'orange',
  },
];

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
      <section className="pt-14 pb-12 border-b border-[#E2E8F0] bg-white text-left">
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

      {/* 21st.dev Pinboard 4-Step Animated Flow */}
      <HowItWorksPinboard
        key={role}
        steps={role === 'student' ? studentSteps : tutorSteps}
        eyebrow={role === 'student' ? '4-Step Student Walkthrough' : '4-Step Educator Walkthrough'}
        title={role === 'student' ? 'How Students & Parents Connect' : 'How Tutors & Teachers Connect'}
        subtitle={
          role === 'student'
            ? 'Follow these four direct steps to discover, evaluate, and arrange private home or online tuition across Guwahati.'
            : 'Follow these four steps to register your teaching qualifications, gain visibility across Guwahati neighbourhoods, and start tutoring.'
        }
        showCta={false}
      />

      {/* Visual Mobile Screen Mockups Showcase */}
      <section className="py-20 bg-[#F8FAFC] border-t border-b border-[#E2E8F0] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              In-App Experience
            </span>
            <h2 className="font-display-section text-[#0F172A]">
              {role === 'student' ? 'What You See in the App' : 'Educator Experience in the App'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              {role === 'student'
                ? 'High clarity screens designed for quick browsing and transparent educator evaluation in Guwahati.'
                : 'Simple profile creation and direct contact management built to empower local teachers.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {role === 'student' ? (
              <>
                <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0">
                    <PhoneMockup screen="discovery" size="sm" />
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Search & Filters</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0F172A]">
                      Guwahati Locality Search
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Filter by Zoo Road, Beltola, Chandmari, Jalukbari, and more. Select CBSE, SEBA, or AHSEC syllabi and class levels.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#0F172A] font-medium pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Instant radius filtering</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Home & online modes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0">
                    <PhoneMockup screen="profile" size="sm" />
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 text-[#0284C7] text-xs font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Transparent Profile</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0F172A]">
                      Direct Educator Contact
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      View qualifications, degrees, subjects taught, and experience. Tap directly to Call or WhatsApp the tutor.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#0F172A] font-medium pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Direct phone & WhatsApp</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>0% commission on fees</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0">
                    <PhoneMockup screen="tutor-onboarding" size="sm" />
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Easy Registration</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0F172A]">
                      Step-by-Step Onboarding
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      List your degrees, subjects, teaching modes (Home tuition / Tutor place / Online), and locations you can cover.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#0F172A] font-medium pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Takes under 3 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Customizable locality list</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0">
                    <PhoneMockup screen="profile" size="sm" />
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Public Presence</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0F172A]">
                      Keep 100% of Your Earnings
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Students contact you directly. You set your own hourly or monthly rates without any intermediary deduction.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#0F172A] font-medium pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Zero commission deducted</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Direct payment from parents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
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
