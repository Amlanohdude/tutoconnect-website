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
  Bell,
  Settings,
  Check,
  Star,
  Briefcase,
  Menu,
  X,
  User,
  Award,
  Info,
  Send,
  CheckCheck,
  MoreVertical,
} from 'lucide-react';

export type ScreenType = 'discovery' | 'profile' | 'tutor-onboarding' | 'chat';

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
    size === 'sm' ? 'w-[280px]' : size === 'lg' ? 'w-[310px] sm:w-[330px]' : 'w-[285px] sm:w-[305px]';
  const screenHeightClass =
    size === 'sm' ? 'h-[515px]' : size === 'lg' ? 'h-[630px]' : 'h-[580px]';

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
        <div className={`relative rounded-[40px] overflow-hidden bg-white text-[#0F172A] border border-black/10 flex flex-col ${screenHeightClass}`}>
          {/* Dynamic Island (21st.dev Signature Hardware Cutout) */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-30 flex items-center justify-between px-2.5 pointer-events-none shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#141414] ring-1 ring-white/15 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#0a192f]/60" />
            </div>
            <div className="w-2 h-2 rounded-full bg-[#0e0e0e]" />
          </div>

          {/* Standardized Real-Time Status Bar across all screens */}
          {screen === 'discovery' ? (
            <div className="h-8 bg-[#1D4ED8] px-5 pt-1.5 flex items-center justify-between text-[11px] font-semibold text-white relative z-20 shrink-0">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-white">5G</span>
                <div className="w-4 h-2.5 rounded-[3px] border border-white p-[1px] flex items-center">
                  <div className="w-full h-full bg-white rounded-2xs" />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-8 bg-white px-5 pt-1.5 flex items-center justify-between text-[11px] font-semibold text-[#0F172A] relative z-20 shrink-0">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#0F172A]">5G</span>
                <div className="w-4 h-2.5 rounded-[3px] border border-[#0F172A] p-[1px] flex items-center">
                  <div className="w-full h-full bg-[#0F172A] rounded-2xs" />
                </div>
              </div>
            </div>
          )}

          {/* SCREEN CONTENT: EXACT TUTOCONNECT APP DISCOVERY */}
          {screen === 'discovery' && (
            <div className="flex-1 min-h-0 flex flex-col bg-[#F8FAFC] text-left overflow-hidden">
              {/* App Blue Header Banner */}
              <div className="bg-gradient-to-b from-[#1D4ED8] via-[#2563EB] to-[#2563EB] pt-1 pb-3 px-3 rounded-b-[22px] shadow-sm flex-shrink-0 relative z-20">
                {/* Title & Actions Row */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight">
                      TutoConnect
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-blue-100/90 font-normal mt-0.5">
                      Find top certified tutors near you
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer">
                      <Settings className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Search Bar & Filter Row */}
                <div className="mt-2.5 flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-xs">
                    <Search className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                    <span className="text-[11px] text-[#94A3B8] font-normal truncate">
                      Search subject or location...
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#2563EB] shadow-xs flex-shrink-0 hover:bg-blue-50 transition-colors cursor-pointer">
                    <SlidersHorizontal className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Scrollable Tutor Feeds by Subject */}
              <div className="flex-1 overflow-y-auto no-scrollbar px-3 pt-2 pb-1.5 space-y-2">
                {/* CATEGORY 1: Mathematics Tutors */}
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#0F172A] tracking-tight mb-1">
                    Mathematics Tutors
                  </h4>
                  {/* Horizontal Scroll Row showing Card 1 + Peeking Card 2 */}
                  <div className="flex gap-2 overflow-x-hidden -mr-3 pr-3">
                    {/* Card 1: Nitin Das */}
                    <div className="w-[195px] sm:w-[205px] flex-shrink-0 bg-white rounded-2xl p-2 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Top Profile Header with Vector Illustrated Persona */}
                        <div className="flex items-start gap-2">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <img
                              src="/tutors/avatar-1.svg"
                              alt="Nitin Das"
                              className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                            />
                            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center ring-1.5 ring-white">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[12px] text-[#0F172A] truncate">Nitin Das</div>
                            <div className="flex items-center gap-1 text-[8.5px] text-[#64748B]">
                              <span className="flex items-center gap-0.5 text-[#F59E0B] font-bold">
                                <Star className="w-2.5 h-2.5 fill-[#F59E0B]" /> 5.0
                              </span>
                              <span className="text-[#94A3B8]">(1)</span>
                              <span className="flex items-center gap-0.5 text-[#2563EB] font-medium ml-0.5 truncate">
                                <Briefcase className="w-2.5 h-2.5 flex-shrink-0" /> 2 yrs exp
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Location & Badge */}
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-0.5 text-[8.5px] text-[#0284C7] font-medium truncate">
                            <MapPin className="w-2.5 h-2.5 text-[#0284C7] flex-shrink-0" />
                            <span>koliabor</span>
                          </div>
                          <span className="text-[7.5px] font-semibold px-1.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7]">
                            Tuto Centre
                          </span>
                        </div>

                        {/* Bio Quote */}
                        <p className="text-[8.5px] text-[#64748B] line-clamp-2 mt-1 leading-tight">
                          i like engineering stuff and i like sharing my knowledge through tutoconnect
                        </p>

                        {/* Subject Pills */}
                        <div className="flex items-center gap-1 mt-1 flex-wrap text-[7.5px]">
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            Chemistry
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            Physics
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            +1 more
                          </span>
                        </div>
                      </div>

                      {/* Bottom Rate & Book Action */}
                      <div className="mt-1.5 pt-1 border-t border-[#F1F5F9] flex items-center justify-between">
                        <div>
                          <div className="text-[7px] tracking-wider text-[#94A3B8] font-bold uppercase">
                            RATE
                          </div>
                          <div className="font-extrabold text-[11px] text-[#0F172A]">₹300 / hr</div>
                        </div>
                        <button className="px-2 py-1 rounded-lg bg-[#2563EB] text-white text-[8px] font-extrabold tracking-wider uppercase shadow-xs hover:bg-[#1D4ED8] transition-colors">
                          BOOK NOW
                        </button>
                      </div>
                    </div>

                    {/* Card 2: Amlanjyoti Das (Peeking Card) */}
                    <div className="w-[195px] sm:w-[205px] flex-shrink-0 bg-white rounded-2xl p-2 border border-[#E2E8F0] shadow-xs flex flex-col justify-between opacity-95">
                      <div>
                        <div className="flex items-start gap-2">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <img
                              src="/tutors/avatar-2.svg"
                              alt="Amlanjyoti Das"
                              className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                            />
                            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center ring-1.5 ring-white">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[12px] text-[#0F172A] truncate">Amlanjyoti Das</div>
                            <div className="flex items-center gap-1 text-[8.5px] text-[#64748B]">
                              <span className="flex items-center gap-0.5 text-[#F59E0B] font-bold">
                                <Star className="w-2.5 h-2.5 fill-[#F59E0B]" /> 5.0
                              </span>
                              <span className="text-[#94A3B8]">(1)</span>
                              <span className="flex items-center gap-0.5 text-[#2563EB] font-medium ml-0.5">
                                <Briefcase className="w-2.5 h-2.5 flex-shrink-0" /> 2 yrs...
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-0.5 text-[8.5px] text-[#0284C7] font-medium mt-1 truncate">
                          <MapPin className="w-2.5 h-2.5 text-[#0284C7] flex-shrink-0" />
                          <span>Sewali path, Hatigaon</span>
                        </div>

                        <p className="text-[8.5px] text-[#64748B] line-clamp-2 mt-1 leading-tight">
                          I Love Teaching Mathematics to school students...
                        </p>

                        <div className="flex items-center gap-1 mt-1 flex-wrap text-[7.5px]">
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            Mathematics
                          </span>
                        </div>
                      </div>

                      <div className="mt-1.5 pt-1 border-t border-[#F1F5F9] flex items-center justify-between">
                        <div>
                          <div className="text-[7px] tracking-wider text-[#94A3B8] font-bold uppercase">RATE</div>
                          <div className="font-extrabold text-[11px] text-[#0F172A]">₹320 / hr</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CATEGORY 2: English Tutors */}
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#0F172A] tracking-tight mb-1">
                    English Tutors
                  </h4>
                  {/* Horizontal Scroll Row showing Card 1 + Peeking Card 2 */}
                  <div className="flex gap-2 overflow-x-hidden -mr-3 pr-3">
                    {/* Card 1: Amlanjyoti Das */}
                    <div className="w-[195px] sm:w-[205px] flex-shrink-0 bg-white rounded-2xl p-2 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Top Profile Header with Vector Illustrated Persona */}
                        <div className="flex items-start gap-2">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <img
                              src="/tutors/avatar-2.svg"
                              alt="Amlanjyoti Das"
                              className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                            />
                            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center ring-1.5 ring-white">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[12px] text-[#0F172A] truncate">Amlanjyoti Das</div>
                            <div className="flex items-center gap-1 text-[8.5px] text-[#64748B]">
                              <span className="flex items-center gap-0.5 text-[#F59E0B] font-bold">
                                <Star className="w-2.5 h-2.5 fill-[#F59E0B]" /> 5.0
                              </span>
                              <span className="text-[#94A3B8]">(1)</span>
                              <span className="flex items-center gap-0.5 text-[#2563EB] font-medium ml-0.5">
                                <Briefcase className="w-2.5 h-2.5 flex-shrink-0" /> 2 yrs exp
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Location & Badge */}
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-0.5 text-[8.5px] text-[#0284C7] font-medium truncate">
                            <MapPin className="w-2.5 h-2.5 text-[#0284C7] flex-shrink-0" />
                            <span>Sewali path, Hatigaon</span>
                          </div>
                          <span className="text-[7.5px] font-semibold px-1.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669]">
                            Home Tuition
                          </span>
                        </div>

                        {/* Bio Quote */}
                        <p className="text-[8.5px] text-[#64748B] line-clamp-2 mt-1 leading-tight">
                          I Love Teaching Mathematics to school students. I am currently pursuing my bachel...
                        </p>

                        {/* Subject Pills */}
                        <div className="flex items-center gap-1 mt-1 flex-wrap text-[7.5px]">
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            Mathematics
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            English
                          </span>
                        </div>
                      </div>

                      {/* Bottom Rate & Book Action */}
                      <div className="mt-1.5 pt-1 border-t border-[#F1F5F9] flex items-center justify-between">
                        <div>
                          <div className="text-[7px] tracking-wider text-[#94A3B8] font-bold uppercase">
                            RATE
                          </div>
                          <div className="font-extrabold text-[11px] text-[#0F172A]">₹320 / hr</div>
                        </div>
                        <button className="px-2 py-1 rounded-lg bg-[#2563EB] text-white text-[8px] font-extrabold tracking-wider uppercase shadow-xs hover:bg-[#1D4ED8] transition-colors">
                          BOOK NOW
                        </button>
                      </div>
                    </div>

                    {/* Card 2: Mayank (Peeking Card) */}
                    <div className="w-[195px] sm:w-[205px] flex-shrink-0 bg-white rounded-2xl p-2 border border-[#E2E8F0] shadow-xs flex flex-col justify-between opacity-95">
                      <div>
                        <div className="flex items-start gap-2">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <img
                              src="/tutors/avatar-3.svg"
                              alt="Mayank"
                              className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                            />
                            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center ring-1.5 ring-white">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[12px] text-[#0F172A] truncate">Mayank</div>
                            <div className="flex items-center gap-1 text-[8.5px] text-[#64748B]">
                              <span className="flex items-center gap-0.5 text-[#F59E0B] font-bold">
                                <Star className="w-2.5 h-2.5 fill-[#F59E0B]" /> New
                              </span>
                              <span className="text-[#94A3B8]">(0)</span>
                              <span className="flex items-center gap-0.5 text-[#2563EB] font-medium ml-0.5">
                                <Briefcase className="w-2.5 h-2.5 flex-shrink-0" /> 2 y...
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-0.5 text-[8.5px] text-[#0284C7] font-medium mt-1 truncate">
                          <MapPin className="w-2.5 h-2.5 text-[#0284C7] flex-shrink-0" />
                          <span>Guwahati</span>
                        </div>

                        <p className="text-[8.5px] text-[#64748B] mt-1 leading-tight">
                          English Tutor
                        </p>

                        <div className="flex items-center gap-1 mt-1 flex-wrap text-[7.5px]">
                          <span className="px-1.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[#2563EB] font-medium">
                            English
                          </span>
                        </div>
                      </div>

                      <div className="mt-1.5 pt-1 border-t border-[#F1F5F9] flex items-center justify-between">
                        <div>
                          <div className="text-[7px] tracking-wider text-[#94A3B8] font-bold uppercase">RATE</div>
                          <div className="font-extrabold text-[11px] text-[#0F172A]">₹200 / hr</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CATEGORY 3: EVS Tutors Heading (Peeking above bottom nav) */}
                <div className="pt-0.5 pb-1">
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#0F172A] tracking-tight">
                    Environmental Science (EVS) Tutors
                  </h4>
                </div>
              </div>

              {/* Slim Android App Bottom Navigation - EXACTLY 1 Navigation Line */}
              <div className="bg-white border-t border-[#E2E8F0] px-3 pt-1 pb-1 z-30 relative flex-shrink-0">
                <div className="flex items-end justify-around text-[9px]">
                  {/* Active Home Tab with Floating Circle */}
                  <div className="flex flex-col items-center cursor-pointer">
                    <div className="-mt-5 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-md ring-2 ring-white hover:bg-[#1D4ED8] transition-transform active:scale-95">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#2563EB] text-[8.5px] mt-0.5">Home</span>
                  </div>

                  {/* Bookings */}
                  <div className="flex flex-col items-center text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer py-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium text-[8px] mt-0.5">Bookings</span>
                  </div>

                  {/* Messages */}
                  <div className="flex flex-col items-center text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer py-0.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="font-medium text-[8px] mt-0.5">Messages</span>
                  </div>

                  {/* Menu */}
                  <div className="flex flex-col items-center text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer py-0.5">
                    <Menu className="w-3.5 h-3.5" />
                    <span className="font-medium text-[8px] mt-0.5">Menu</span>
                  </div>
                </div>

                {/* The Single Clean Android Bottom Home Bar Indicator */}
                <div className="w-20 h-1 bg-[#64748B]/30 rounded-full mx-auto mt-1 mb-0.5" />
              </div>
            </div>
          )}

          {screen === 'profile' && (
            <div className="flex-1 min-h-0 flex flex-col bg-white text-left overflow-hidden">
              {/* Modal Sheet Drag Handle & Header */}
              <div className="pt-2 px-4 pb-2 bg-white flex flex-col border-b border-slate-100 flex-shrink-0">
                <div className="w-9 h-1 bg-slate-300 rounded-full mx-auto mb-2" />
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-[14px] text-[#0F172A] tracking-tight">
                    Teacher Profile
                  </h3>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                    <X className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Profile Scrollable Body */}
              <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar p-3 space-y-2.5 bg-white">
                {/* 1. Educator Hero Summary Card */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/70 text-center flex flex-col items-center shadow-2xs">
                  {/* Circular Vector Avatar with Verified Checkmark */}
                  <div className="relative w-14 h-14 mb-2">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-xs">
                      <svg viewBox="0 0 72 72" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="72" height="72" fill="#E0F2FE" />
                        <circle cx="36" cy="36" r="32" fill="#BAE6FD" opacity="0.6" />
                        {/* Shoulders & Dark Shirt */}
                        <path d="M14 68 C16 52, 26 48, 36 48 C46 48, 56 52, 58 68" fill="#1E293B" />
                        <path d="M29 48 L36 56 L43 48 Z" fill="#334155" />
                        {/* Neck */}
                        <rect x="31.5" y="38" width="9" height="12" rx="3.5" fill="#FDBA74" />
                        {/* Head */}
                        <ellipse cx="36" cy="30" rx="12.5" ry="14.5" fill="#FED7AA" />
                        {/* Ears */}
                        <circle cx="23" cy="31" r="3" fill="#FDBA74" />
                        <circle cx="49" cy="31" r="3" fill="#FDBA74" />
                        {/* Modern Haircut */}
                        <path d="M23 27 C23 18, 28 15, 36 15 C44 15, 49 18, 49 27 C49 24, 46 22, 43 21 C39 20, 33 21, 29 23 C26 25, 24 27, 23 27 Z" fill="#0F172A" />
                        {/* Modern Spectacles */}
                        <rect x="25.5" y="27" width="8.5" height="7" rx="2.5" stroke="#0F172A" strokeWidth="1.4" fill="white" fillOpacity="0.5" />
                        <rect x="38" y="27" width="8.5" height="7" rx="2.5" stroke="#0F172A" strokeWidth="1.4" fill="white" fillOpacity="0.5" />
                        <line x1="34" y1="30" x2="38" y2="30" stroke="#0F172A" strokeWidth="1.4" />
                        {/* Eyes */}
                        <circle cx="29.7" cy="30.5" r="1.2" fill="#0F172A" />
                        <circle cx="42.2" cy="30.5" r="1.2" fill="#0F172A" />
                        {/* Eyebrows */}
                        <path d="M26.5 25 Q29.5 24 33 25" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M39 25 Q42.5 24 45.5 25" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
                        {/* Gentle Smile */}
                        <path d="M32.5 38 Q36 41 39.5 38" stroke="#9A3412" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                      </svg>
                    </div>
                    {/* Blue Verified Badge */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center ring-2 ring-white shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  </div>

                  {/* Name & ID Screened Pill */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mb-1">
                    <h4 className="font-extrabold text-[13.5px] text-[#0F172A] tracking-tight">
                      Mauchum Datta Lahkar
                    </h4>
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#DBEAFE] text-[#2563EB] text-[9px] font-bold">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                      <span>ID SCREENED</span>
                      <Info className="w-2.5 h-2.5 text-[#3B82F6]" />
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-center gap-1 text-[10.5px] text-[#64748B] font-medium mb-2.5">
                    <MapPin className="w-2.5 h-2.5 text-[#64748B]" />
                    <span>Guwahati</span>
                  </div>

                  {/* Tags Row */}
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706] font-bold text-[9.5px]">
                      <Star className="w-2.5 h-2.5 fill-[#D97706]" />
                      <span>New</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-bold text-[9.5px]">
                      3+ Yrs Exp
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] font-bold text-[9.5px]">
                      Tuto Centre
                    </span>
                  </div>
                </div>

                {/* 2. About Me Card */}
                <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/70 text-left space-y-1.5 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                    <User className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>About Me</span>
                  </div>
                  <p className="text-[9.5px] text-[#475569] leading-relaxed">
                    I am a dedicated Maths teacher from Guwahati, helping students build strong basics from Class 6–12 with clear explanations and lots of practice. I focus on making concepts easy, step-by-step, so that even “weak in maths” students gain confidence, improve their marks, and stop fearing the subject.
                  </p>
                </div>

                {/* 3. Subjects Offered Card */}
                <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/70 text-left space-y-2 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Subjects Offered</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-bold text-[9.5px]">
                    Mathematical Science
                  </span>
                </div>

                {/* 4. Education & Credentials Card */}
                <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/70 text-left space-y-1.5 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                    <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Education &amp; Credentials</span>
                  </div>
                  <div>
                    <div className="text-[8.5px] font-bold uppercase tracking-wider text-[#64748B]">
                      Highest Qualification
                    </div>
                    <div className="text-[11px] font-bold text-[#0F172A]">
                      BS in Data Science • IIT Madras
                    </div>
                  </div>
                  <div className="pt-1 border-t border-[#E2E8F0]/60">
                    <div className="text-[8.5px] font-bold uppercase tracking-wider text-[#64748B]">
                      Classes Taught
                    </div>
                    <div className="text-[9.5px] text-[#475569]">
                      Class 6–10 (Basics) • Class 11–12 (Advanced)
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Bottom Action Bar */}
              <div className="px-3.5 py-2.5 bg-white border-t border-[#E2E8F0] flex items-center justify-between shadow-md flex-shrink-0 z-20">
                <div>
                  <div className="text-[8px] font-bold uppercase tracking-wider text-[#64748B]">
                    HOURLY RATE
                  </div>
                  <div className="font-extrabold text-[15px] text-[#0F172A] leading-tight">
                    ₹300 / hr
                  </div>
                </div>
                <button className="px-3.5 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[9.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-transform active:scale-95">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>BOOK TUITION</span>
                </button>
              </div>
            </div>
          )}

          {screen === 'tutor-onboarding' && (
            <div className="flex-1 min-h-0 flex flex-col bg-[#F8FAFC] text-left">
              {/* App Bar */}
              <div className="px-4 py-2.5 bg-white border-b border-[#E2E8F0] flex items-center justify-between flex-shrink-0">
                <span className="font-bold text-xs text-[#0F172A]">Create Tutor Profile</span>
                <span className="text-[10px] text-[#2563EB] font-semibold">Step 2 of 3</span>
              </div>

              {/* Form Content */}
              <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 space-y-3">
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

          {/* SCREEN CONTENT: CHAT / DIRECT MESSAGING */}
          {screen === 'chat' && (
            <div className="flex-1 min-h-0 flex flex-col bg-[#F8FAFC] text-left">
              {/* Chat Top App Bar */}
              <div className="px-3.5 py-2 bg-white border-b border-[#E2E8F0] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 shrink-0">
                    <img
                      src="/tutors/avatar-1.svg"
                      alt="Nitin Das"
                      className="w-8 h-8 rounded-full object-cover border border-[#E2E8F0]"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-1.5 ring-white" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-[12px] text-[#0F172A] leading-none">Nitin Das</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center ring-1 ring-white">
                        <Check className="w-2 h-2 stroke-[3]" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-[#64748B] mt-0.5 font-medium">
                      <span className="text-[#10B981] font-bold">Online</span>
                      <span>• Mathematics Tutor</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[#64748B]">
                  <div className="w-7 h-7 rounded-full bg-blue-50/80 flex items-center justify-center text-[#2563EB] shadow-2xs hover:bg-blue-100 transition-colors cursor-pointer">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer">
                    <MoreVertical className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Chat Scrollable Conversation */}
              <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar p-3 space-y-2.5 bg-[#F8FAFC]">
                {/* Date Divider */}
                <div className="flex justify-center my-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E2E8F0]/70 text-[8px] font-bold text-[#64748B] uppercase tracking-wider">
                    Today
                  </span>
                </div>

                {/* Direct Connect Assurance Pill */}
                <div className="flex justify-center">
                  <div className="px-2.5 py-1 rounded-full bg-blue-50 border border-[#BFDBFE] text-[8px] text-[#1D4ED8] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#2563EB] shrink-0" />
                    <span>Direct connection • 0% commission on tuition</span>
                  </div>
                </div>

                {/* Message 1: Student (Outgoing) */}
                <div className="flex flex-col items-end pt-1">
                  <div className="max-w-[84%] bg-[#2563EB] text-white rounded-2xl rounded-tr-xs px-3 py-2 shadow-2xs text-[10px] leading-relaxed text-left font-normal">
                    Hello Sir! I saw your profile on TutoConnect for Class 10 Maths near Zoo Road. Are you available for home tuition?
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-[#94A3B8] mt-0.5 mr-1 font-medium">
                    <span>4:15 PM</span>
                    <CheckCheck className="w-2.5 h-2.5 text-[#2563EB]" />
                  </div>
                </div>

                {/* Message 2: Tutor (Incoming) */}
                <div className="flex flex-col items-start">
                  <div className="max-w-[84%] bg-white text-[#0F172A] border border-[#E2E8F0] rounded-2xl rounded-tl-xs px-3 py-2 shadow-2xs text-[10px] leading-relaxed text-left font-normal">
                    Hello! Yes, I cover Zoo Road and Beltola. We can start with a demo class this Thursday at 5 PM if that works for you?
                  </div>
                  <span className="text-[8px] text-[#94A3B8] mt-0.5 ml-1 font-medium">4:17 PM</span>
                </div>

                {/* Message 3: Student (Outgoing) */}
                <div className="flex flex-col items-end">
                  <div className="max-w-[84%] bg-[#2563EB] text-white rounded-2xl rounded-tr-xs px-3 py-2 shadow-2xs text-[10px] leading-relaxed text-left font-normal">
                    Thursday 5 PM works great! Do we need to keep any specific textbooks ready?
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-[#94A3B8] mt-0.5 mr-1 font-medium">
                    <span>4:19 PM</span>
                    <CheckCheck className="w-2.5 h-2.5 text-[#2563EB]" />
                  </div>
                </div>

                {/* Message 4: Tutor (Incoming) */}
                <div className="flex flex-col items-start">
                  <div className="max-w-[84%] bg-white text-[#0F172A] border border-[#E2E8F0] rounded-2xl rounded-tl-xs px-3 py-2 shadow-2xs text-[10px] leading-relaxed text-left font-normal">
                    Just the NCERT book and school notebook. Looking forward to our session!
                  </div>
                  <span className="text-[8px] text-[#94A3B8] mt-0.5 ml-1 font-medium">4:21 PM</span>
                </div>
              </div>

              {/* Chat Input Dock */}
              <div className="px-3 py-2 bg-white border-t border-[#E2E8F0] shrink-0">
                <div className="flex items-center gap-2 bg-[#F1F5F9] rounded-full px-3 py-1.5 border border-[#E2E8F0]">
                  <span className="flex-1 text-[10px] text-[#94A3B8] text-left">Message Nitin...</span>
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-2xs hover:bg-[#1D4ED8] transition-colors cursor-pointer">
                    <Send className="w-3 h-3 translate-x-px" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Android Home Navigation Bar (only on screens without their own bottom bar) */}
          {screen !== 'discovery' && (
            <div className="h-4 bg-white flex items-center justify-center pb-1 shrink-0">
              <div className="w-24 h-1 bg-[#64748B]/30 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
