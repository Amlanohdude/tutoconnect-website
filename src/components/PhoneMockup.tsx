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

          {/* Status Bar (Omitted for discovery screen to keep header clean & seamless under Dynamic Island) */}
          {screen !== 'discovery' && (
            <div className="h-8 bg-white px-5 pt-1.5 flex items-center justify-between text-[11px] font-semibold text-[#0F172A] relative z-20">
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
            <div className="h-[545px] sm:h-[555px] flex flex-col bg-[#F8FAFC] text-left overflow-hidden">
              {/* App Blue Header Banner */}
              <div className="bg-gradient-to-b from-[#1D4ED8] via-[#2563EB] to-[#2563EB] pt-8 pb-3 px-3 rounded-b-[22px] shadow-sm flex-shrink-0 relative z-20">
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

          {/* Android Home Navigation Bar (only on screens without their own bottom bar) */}
          {screen !== 'discovery' && (
            <div className="h-4 bg-white flex items-center justify-center pb-1">
              <div className="w-24 h-1 bg-[#64748B]/30 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
