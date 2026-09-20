import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PillBadge, BrandStar } from '../components/ui/Decorations';
import { Mail, ChevronRight, Check, Copy, ArrowRight } from 'lucide-react';
import { getSupportEmail, getSupportMailto } from '../utils/security';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const supportEmail = getSupportEmail();
  const supportMailto = getSupportMailto();

  const handleCopy = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <span className="text-[#0F172A] font-semibold">Contact</span>
          </nav>
        </div>
      </div>

      {/* Main Support Header */}
      <section className="pt-14 pb-16 border-b border-[#E2E8F0] bg-white text-left">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <PillBadge
            text="Support & Help • Direct Email"
            bgColor="#EFF6FF"
            dotColor="#0EA5E9"
            textColor="#0F172A"
            borderColor="#DBEAFE"
          />
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
            Contact TutoConnect
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Have questions about finding tuition, managing your educator profile, or using the TutoConnect Android app? Reach out to our team directly.
          </p>
        </div>
      </section>

      {/* Direct Contact Card */}
      <section className="py-20 bg-[#F8FAFC] text-left">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-[#E2E8F0] shadow-xs space-y-6">
            <div className="space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                Official Support Email
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A]">
                {supportEmail}
              </h2>
            </div>

            <p className="text-sm text-[#64748B] leading-relaxed">
              We respond to inquiries regarding tutor profiles, app feedback, account assistance, and general platform inquiries across Guwahati.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={supportMailto}
                className="btn-tuto-primary px-7 py-3.5 font-semibold text-xs inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopy}
                className="btn-tuto-white px-7 py-3.5 font-semibold text-xs flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#0F172A]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Practical Guidelines */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#64748B]">
            <div className="p-6 rounded-[20px] bg-white border border-[#E2E8F0] space-y-2 shadow-xs">
              <strong className="block font-display font-bold text-[#0F172A] text-base">
                For Students & Parents
              </strong>
              <p className="leading-relaxed">
                Need help searching for tutors in your area or have feedback on the Android app? Please mention your locality in Guwahati for faster assistance.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-[#E2E8F0] space-y-2 shadow-xs">
              <strong className="block font-display font-bold text-[#0F172A] text-base">
                For Tutors & Teachers
              </strong>
              <p className="leading-relaxed">
                Assistance with profile updates, qualifications, or subjects taught. Please mention your registered name and subject specializations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
