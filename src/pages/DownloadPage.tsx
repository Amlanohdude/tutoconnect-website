import React from 'react';
import { PageRoute } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import { Check, ChevronRight, ArrowRight, Download, Smartphone } from 'lucide-react';

interface DownloadPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
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
            <span className="text-[#0F172A] font-semibold">Download App</span>
          </nav>
        </div>
      </div>

      {/* Main Download Hero */}
      <section className="pt-14 pb-20 md:pt-18 md:pb-24 border-b border-[#E2E8F0] bg-white text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 relative z-10">
              <PillBadge
                text="Android App • Free on Google Play"
                bgColor="#EFF6FF"
                dotColor="#0EA5E9"
                textColor="#0F172A"
                borderColor="#DBEAFE"
              />

              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
                Download TutoConnect for Android
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] max-w-xl leading-relaxed">
                Connect with educators, explore profiles, and arrange tuition in Guwahati directly from your smartphone with 0% platform commission.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#0F172A]">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold text-xs border border-[#DBEAFE]">
                    ✓
                  </span>
                  <span>Find tutors by subject, class, and Guwahati locality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold text-xs border border-[#DBEAFE]">
                    ✓
                  </span>
                  <span>Connect directly with educators without agency commissions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 font-bold text-xs border border-[#DBEAFE]">
                    ✓
                  </span>
                  <span>Educators can build profiles and get discovered by local families</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tutoconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tuto-primary px-8 py-3.5 font-semibold text-sm inline-flex items-center gap-2.5 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Get on Google Play</span>
                </a>
                <div className="text-xs font-medium text-[#64748B]">
                  Android only • Compatible with Android 7.0 and up • Free install
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-[#F0F6FF] rounded-[30px] p-6 border border-[#DBEAFE] shadow-xs">
                <PhoneMockup screen="discovery" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup Guide */}
      <section className="py-20 bg-[#F8FAFC] text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#0F172A] mb-8">
            Getting started is straightforward
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EFF6FF] text-xs font-semibold uppercase tracking-wider text-[#2563EB] border border-[#DBEAFE]">
                FOR LEARNERS
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0F172A]">Students & Parents</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Open the app, choose your subject and locality in Guwahati, browse educator profiles, and message or call tutors directly.
              </p>
            </div>

            <div className="p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E0F2FE] text-xs font-semibold uppercase tracking-wider text-[#0284C7] border border-[#BAE6FD]">
                FOR EDUCATORS
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0F172A]">Tutors & Teachers</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Select "Become a Tutor", add your qualifications, subjects taught, teaching modes (home, center, or online), and published areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
