import React from 'react';
import { TutoConnectLogo } from './TutoConnectLogo';
import {
  Search,
  MapPin,
  BookOpen,
  Phone,
  MessageSquare,
  GraduationCap,
  SlidersHorizontal,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  Home,
  Laptop,
} from 'lucide-react';

export type ScreenType = 'discovery' | 'profile' | 'tutor-onboarding';

interface PhoneMockupProps {
  screen?: ScreenType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screen = 'discovery',
  className = '',
  size = 'md',
}) => {
  const widthClass =
    size === 'sm' ? 'w-[260px]' : size === 'lg' ? 'w-[310px] sm:w-[330px]' : 'w-[285px] sm:w-[305px]';

  return (
    <div
      className={`relative mx-auto select-none ${widthClass} ${className}`}
      style={{ filter: 'drop-shadow(0 25px 45px rgba(0, 0, 0, 0.25))' }}
    >
      {/* 21st.dev Exact Phone Hardware Shell */}
      <div className="relative rounded-[50px] p-[10px] bg-[#18181b] border border-neutral-800 ring-1 ring-white/10 shadow-2xl">
        {/* Left Side Hardware Buttons (Mute, Volume Up, Volume Down) */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-6 bg-neutral-700 rounded-l-xs" />
        <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-neutral-700 rounded-l-xs" />
        <div className="absolute -left-[3px] top-40 w-[3px] h-10 bg-neutral-700 rounded-l-xs" />
        {/* Right Side Power / Action Button */}
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-neutral-700 rounded-r-xs" />

        {/* Screen Bezel & Display */}
        <div className="relative rounded-[40px] overflow-hidden bg-white text-[#0F172A] border border-black/10">
          {/* Dynamic Island (21st.dev Signature Hardware Cutout) */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-30 flex items-center justify-between px-2.5 pointer-events-none shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#141414] ring-1 ring-white/15 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#0a192f]/60" />
            </div>
            <div className="w-2 h-2 rounded-full bg-[#0e0e0e]" />
          </div>

          {/* Status Bar */}
          <div className="h-8 bg-white px-5 pt-1.5 flex items-center justify-between text-[11px] font-semibold text-[#0F172A] relative z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-[#0F172A]">5G</span>
              <div className="w-4 h-2.5 rounded-[3px] border border-[#0F172A] p-[1px] flex items-center">
                <div className="w-full h-full bg-[#0F172A] rounded-2xs" />
              </div>
            </div>
          </div>

          {/* SCREEN CONTENT BY TYPE */}
          {screen === 'discovery' && (
            <div className="h-[540px] flex flex-col bg-[#F8FAFC] text-left">
              {/* App Bar */}
              <div className="px-4 py-2.5 bg-white border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TutoConnectLogo size={22} showText={false} />
                  <span className="font-bold text-sm text-[#0F172A] tracking-tight">
                    Tuto<span className="text-[#2563EB]">Connect</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0F172A] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#DBEAFE]">
                  <MapPin className="w-3 h-3 text-[#2563EB]" />
                  <span>Guwahati</span>
                </div>
              </div>

              {/* In-app Search */}
              <div className="p-3 bg-white border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#F0F6FF] border border-[#DBEAFE] text-xs text-[#64748B]">
                  <Search className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="font-medium text-[#0F172A]">Class 10 Maths, Science</span>
                </div>
                {/* Mode Filter Chips */}
                <div className="flex items-center gap-1.5 mt-2.5 overflow-x-hidden text-[10px]">
                  <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white font-semibold shadow-2xs">
                    All Tutors
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] font-medium">
                    Home Tuition
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] font-medium">
                    Online
                  </span>
                </div>
              </div>

              {/* Tutor Listing Feed */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2.5">
                {/* Tutor Card 1 */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0 border border-[#DBEAFE]">
                      PS
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-[#0F172A] truncate">Pranjal Sarma</div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-semibold border border-[#DBEAFE]">
                          M.Sc · 6y exp
                        </span>
                      </div>
                      <div className="text-[10px] text-[#64748B]">M.Sc. Mathematics, Gauhati Univ</div>
                      <div className="text-[10px] text-[#64748B] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-[#2563EB]" />
                        <span>Zoo Road & Beltola, Guwahati</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex gap-1 text-[9px]">
                      <span className="px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-medium">
                        Maths
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-medium">
                        Physics
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-medium">
                        Class 9-12
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#2563EB]">View Profile →</span>
                  </div>
                </div>

                {/* Tutor Card 2 */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      AB
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-[#0F172A] truncate">Ananya Borah</div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-semibold">
                          Home Tuition
                        </span>
                      </div>
                      <div className="text-[10px] text-[#64748B]">B.Tech · 4 yrs experience</div>
                      <div className="text-[10px] text-[#64748B] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-[#2563EB]" />
                        <span>Chandmari & Uzan Bazar</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex gap-1 text-[9px]">
                      <span className="px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#0F172A] font-medium">
                        Science
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#0F172A] font-medium">
                        English
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#2563EB]">View Profile →</span>
                  </div>
                </div>

                {/* Tutor Card 3 (Compact) */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      HB
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs text-[#0F172A]">Dr. Hemanta Baruah</div>
                      <div className="text-[10px] text-[#64748B]">Chemistry (AHSEC / CBSE) · Dispur</div>
                    </div>
                    <span className="text-[10px] font-bold text-[#2563EB]">Connect</span>
                  </div>
                </div>
              </div>

              {/* Android App Bottom Navigation */}
              <div className="h-12 bg-white border-t border-[#E2E8F0] px-6 flex items-center justify-around text-[10px] text-[#64748B]">
                <div className="flex flex-col items-center text-[#2563EB] font-bold">
                  <Search className="w-4 h-4" />
                  <span>Discover</span>
                </div>
                <div className="flex flex-col items-center hover:text-[#2563EB]">
                  <BookOpen className="w-4 h-4" />
                  <span>Tuition</span>
                </div>
                <div className="flex flex-col items-center hover:text-[#2563EB]">
                  <MessageSquare className="w-4 h-4" />
                  <span>Messages</span>
                </div>
              </div>
            </div>
          )}

          {screen === 'profile' && (
            <div className="h-[540px] flex flex-col bg-white text-left">
              {/* Profile Top Bar */}
              <div className="px-4 py-2.5 bg-white border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-bold text-xs">Tutor Profile</span>
                </div>
                <Share2 className="w-3.5 h-3.5 text-[#64748B]" />
              </div>

              {/* Profile Body */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3.5">
                {/* Header info */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-base flex-shrink-0 border border-[#DBEAFE]">
                    PS
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-[#0F172A]">Pranjal Sarma</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="text-[11px] text-[#64748B]">M.Sc. Mathematics · Gauhati Univ</div>
                    <div className="text-[10px] text-[#64748B] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#2563EB]" />
                      <span>Zoo Road, Beltola, Chandmari</span>
                    </div>
                  </div>
                </div>

                {/* Teaching Preferences */}
                <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    Tuition Arrangements
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] font-medium text-[#0F172A] flex items-center gap-1">
                      <Home className="w-2.5 h-2.5 text-[#2563EB]" />
                      <span>Home Tuition</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] font-medium text-[#0F172A] flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#2563EB]" />
                      <span>Tutor's Location</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] font-medium text-[#0F172A] flex items-center gap-1">
                      <Laptop className="w-2.5 h-2.5 text-[#2563EB]" />
                      <span>Online Available</span>
                    </span>
                  </div>
                </div>

                {/* Subjects Taught */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    Subjects & Classes
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    <span className="px-2.5 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] font-semibold border border-[#DBEAFE]">
                      Class 10 Mathematics (SEBA / CBSE)
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#0F172A] font-medium border border-[#E2E8F0]">
                      Class 11 & 12 Mathematics (AHSEC)
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#0F172A] font-medium border border-[#E2E8F0]">
                      Class 9 General Science
                    </span>
                  </div>
                </div>

                {/* About & Approach */}
                <div className="text-[11px] text-[#64748B] leading-relaxed bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0]">
                  <div className="font-bold text-[10px] uppercase tracking-wider text-[#0F172A] mb-1">
                    About the Tutor
                  </div>
                  Over 6 years of private tuition experience in Guwahati. Focuses on foundational clarity, step-by-step problem solving, and regular syllabus revision.
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-3 bg-white border-t border-[#E2E8F0] flex items-center gap-2">
                <button className="flex-1 py-2.5 px-3 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>Connect Directly</span>
                </button>
                <button className="p-2.5 rounded-full border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F0F6FF]">
                  <MessageSquare className="w-4 h-4 text-[#2563EB]" />
                </button>
              </div>
            </div>
          )}

          {screen === 'tutor-onboarding' && (
            <div className="h-[540px] flex flex-col bg-[#F8FAFC] text-left">
              {/* App Bar */}
              <div className="px-4 py-2.5 bg-white border-b border-[#E2E8F0] flex items-center justify-between">
                <span className="font-bold text-xs text-[#0F172A]">Create Tutor Profile</span>
                <span className="text-[10px] text-[#2563EB] font-semibold">Step 2 of 3</span>
              </div>

              {/* Form Content */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-[#64748B] block mb-1">
                    Your Teaching Subjects
                  </label>
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] text-[11px] text-[#0F172A] font-medium shadow-2xs">
                    Mathematics, Physics (Class 9 - 12)
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#64748B] block mb-1">
                    Academic Qualifications
                  </label>
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] text-[11px] text-[#0F172A] font-medium shadow-2xs">
                    M.Sc. Mathematics, Gauhati University
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#64748B] block mb-1">
                    Preferred Areas in Guwahati
                  </label>
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2E8F0] text-[11px] text-[#0F172A] flex items-center justify-between shadow-2xs">
                    <span>Beltola, Zoo Road, Chandmari</span>
                    <MapPin className="w-3 h-3 text-[#2563EB]" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#64748B] block mb-1">
                    Teaching Preferences
                  </label>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2.5 bg-white rounded-xl border border-[#2563EB]/30 text-[#0F172A] flex items-center justify-between font-medium shadow-2xs">
                      <span>Home Tuition</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#2563EB]/30 text-[#0F172A] flex items-center justify-between font-medium shadow-2xs">
                      <span>At Tutor's Location</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3 bg-white border-t border-[#E2E8F0]">
                <button className="w-full py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold text-center shadow-xs">
                  Save & Get Discovered
                </button>
              </div>
            </div>
          )}

          {/* Android Home Navigation Bar */}
          <div className="h-4 bg-white flex items-center justify-center pb-1">
            <div className="w-24 h-1 bg-[#64748B]/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
