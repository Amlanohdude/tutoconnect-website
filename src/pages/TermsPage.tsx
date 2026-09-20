import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight } from 'lucide-react';
import { PillBadge } from '../components/ui/Decorations';
import { getSupportEmail, getSupportMailto } from '../utils/security';

interface TermsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A]">
      {/* Breadcrumbs */}
      <div className="border-b border-[#E2E8F0] py-3.5 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-[#2563EB] cursor-pointer transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]/40" />
            <span className="text-[#0F172A] font-semibold">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Document Header */}
      <section className="pt-14 pb-10 border-b border-[#E2E8F0] text-left bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <PillBadge
            text="Legal & Compliance"
            bgColor="#EFF6FF"
            dotColor="#0EA5E9"
            textColor="#0F172A"
            borderColor="#DBEAFE"
          />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-[#64748B]">
            Effective Date: September 2026 • TutoConnect Android Application and Website
          </p>
        </div>
      </section>

      {/* Document Body */}
      <section className="py-14 text-left bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#64748B] leading-relaxed">
          <div className="p-6 rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
            <p>
              By accessing or using the TutoConnect Android application or our website, you agree to be bound by these Terms of Service. If you do not agree, do not access or use TutoConnect.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">1. Nature of the Platform</h2>
            <p className="text-xs text-[#64748B]">
              TutoConnect is a software discovery venue launched in Guwahati, Assam. It enables students and parents to discover independent tutors and connect directly with them for tuition.
            </p>
            <p className="text-xs text-[#0F172A] font-semibold">
              TutoConnect is not a tuition agency, school, coaching institute, or employer of tutors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">2. Independent Arrangements & Payments</h2>
            <p className="text-xs text-[#64748B]">
              All teaching engagements, class schedules, syllabi coverage, hourly fees, and payment transactions are agreed upon solely and directly between the tutor and the student or their parent/guardian.
            </p>
            <p className="text-xs text-[#64748B]">
              TutoConnect does not process tuition fees, collect platform cuts, act as escrow, or mediate financial disagreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">3. Accuracy of Profile Information</h2>
            <p className="text-xs text-[#64748B]">
              Educators certify that all qualifications, degrees, experience records, and identity documents submitted are truthful and accurate. Misrepresentation of educational credentials may lead to profile suspension.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">4. Offline Safety & Verification</h2>
            <p className="text-xs text-[#64748B]">
              Parents and adult learners are encouraged to independently verify tutor credentials and evaluate safety when arranging in-person home tuition or study sessions in Guwahati.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">5. Contact & Inquiries</h2>
            <p className="text-xs text-[#64748B]">
              For questions concerning these Terms, contact our administration team at{' '}
              <a href={getSupportMailto()} className="font-semibold text-[#2563EB] underline">
                {getSupportEmail()}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
