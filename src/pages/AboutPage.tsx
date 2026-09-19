import React from 'react';
import { PageRoute } from '../types';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import { MapPin, ChevronRight, Check, X, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <span className="text-[#0F172A] font-semibold">About Us</span>
          </nav>
        </div>
      </div>

      {/* Main Story & Purpose */}
      <section className="pt-14 pb-18 border-b border-[#E2E8F0] bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <PillBadge
            text="Our Story • Guwahati, Assam"
            bgColor="#EFF6FF"
            dotColor="#0EA5E9"
            textColor="#0F172A"
            borderColor="#DBEAFE"
          />

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#0F172A] tracking-tight leading-tight">
            About TutoConnect
          </h1>

          <p className="text-xl sm:text-2xl text-[#0F172A] leading-relaxed font-semibold">
            TutoConnect is a tutor discovery platform connecting students, parents, and tutors for tuition across Guwahati.
          </p>

          <div className="text-[#64748B] text-base sm:text-lg leading-relaxed space-y-4 pt-2">
            <p>
              Finding a reliable tutor through word-of-mouth, outdated leaflets, or fragmented classifieds has always been stressful for parents and students in Guwahati. At the same time, passionate educators, university graduates, and subject teachers often struggle to let nearby families know they are available to teach.
            </p>
            <p>
              We built TutoConnect to solve this exact disconnect. Our platform provides a transparent, dedicated mobile space where educators can showcase their qualifications, subjects, and teaching preferences, and where students can easily discover educators nearby.
            </p>
          </div>
        </div>
      </section>

      {/* What TutoConnect Is vs. What It Is NOT */}
      <section className="py-20 bg-[#F8FAFC] text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-white text-xs font-semibold text-[#2563EB] border border-[#DBEAFE]">
              Transparency
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Our principles and platform boundaries
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              Clear expectations on how TutoConnect operates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What TutoConnect IS */}
            <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 font-display font-bold text-xl text-[#0F172A]">
                <div className="w-7 h-7 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-xs border border-[#DBEAFE]">
                  <Check className="w-4 h-4" />
                </div>
                <span>What TutoConnect is</span>
              </div>
              <ul className="space-y-3 text-sm text-[#64748B] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>A discovery platform for tutor profiles in Guwahati.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Direct connection channel between parents/students and educators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Transparent listing of subjects, degrees, and teaching arrangements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Built specifically as an accessible Android smartphone application.</span>
                </li>
              </ul>
            </div>

            {/* What TutoConnect IS NOT */}
            <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 font-display font-bold text-xl text-[#0F172A]">
                <div className="w-7 h-7 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center font-bold text-xs">
                  <X className="w-4 h-4" />
                </div>
                <span>What TutoConnect is not</span>
              </div>
              <ul className="space-y-3 text-sm text-[#64748B] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#64748B] font-bold">•</span>
                  <span>Not an agency taking cuts or commissions from tutor earnings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64748B] font-bold">•</span>
                  <span>Not an in-app virtual classroom or video conference provider.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64748B] font-bold">•</span>
                  <span>Not a bureaucratic middleman dictating lesson rates or schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64748B] font-bold">•</span>
                  <span>Not a national spam directory—we are deeply focused on Guwahati.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community Anchor */}
      <section className="py-20 bg-[#1E3A8A] text-white text-left relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#0EA5E9] border border-white/10">
            Rooted in Guwahati, Assam
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built with deep local context
          </h3>
          <p className="text-base text-white/80 leading-relaxed">
            We chose to launch exclusively in Guwahati because localized education requires real geographic and curriculum understanding. By focusing on local school boards (SEBA and AHSEC) alongside central boards (CBSE and ICSE), and indexing tutors across Guwahati neighbourhoods, we ensure high relevance for families and teachers alike.
          </p>
        </div>

        <div className="absolute -bottom-8 right-12 opacity-10 pointer-events-none">
          <BrandStar size={96} color="#0EA5E9" />
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Try TutoConnect on Android
          </h3>
          <p className="text-[#64748B] text-base max-w-md mx-auto leading-relaxed">
            Discover tutors or connect with learners across Guwahati.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('/download/')}
              className="btn-tuto-primary px-8 py-3.5 font-semibold text-sm cursor-pointer inline-flex items-center gap-2"
            >
              <span>Download Android App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
