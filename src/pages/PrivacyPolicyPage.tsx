import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight } from 'lucide-react';
import { PillBadge } from '../components/ui/Decorations';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
            <span className="text-[#0F172A] font-semibold">Privacy Policy</span>
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
            Privacy Policy
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
              TutoConnect ("we," "our," or "us") provides a tutor discovery platform connecting students, parents, and tutors for tuition in Guwahati, Assam. This Privacy Policy describes how we collect, use, and protect your information when you access or use the TutoConnect Android mobile application and associated web services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">1. Information We Collect</h2>
            <p>We collect information necessary to enable tutor discovery and direct communication:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#64748B]">
              <li>
                <strong className="text-[#0F172A]">Account Information:</strong> Name, phone number, email address, and authentication credentials upon registration in the Android app.
              </li>
              <li>
                <strong className="text-[#0F172A]">Tutor Profile Details:</strong> Educational qualifications, degrees, academic institutions, subjects offered, preferred student grade levels, tuition arrangements (home tuition, tutor’s place, centre-based, or online), and preferred localities in Guwahati.
              </li>
              <li>
                <strong className="text-[#0F172A]">Search & Inquiry Data:</strong> Search queries, subject selections, and locality preferences used to find matching tutors.
              </li>
              <li>
                <strong className="text-[#0F172A]">Device & Technical Information:</strong> Device model, operating system version, app version, and basic performance logs to keep the mobile app stable.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">2. How We Use Information</h2>
            <p>We use collected data strictly for operational platform features:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#64748B]">
              <li>To present public tutor profiles to students and parents searching within Guwahati.</li>
              <li>To facilitate direct communication between prospective learners and educators.</li>
              <li>To verify tutor credentials and ensure platform reliability.</li>
              <li>To diagnose technical errors, improve performance, and protect platform safety.</li>
              <li>We do not sell personal information to third-party advertisers.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">3. Public Profile Visibility</h2>
            <p className="text-xs text-[#64748B]">
              Information you choose to include in your public educator profile (such as name, degrees, teaching subjects, and designated teaching zones in Guwahati) is visible to registered and browsing app users searching for tuition.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">4. Data Retention & Deletion</h2>
            <p className="text-xs text-[#64748B]">
              We retain account and profile information for as long as your account remains active. You can request account deactivation and data deletion at any time by contacting our support team at{' '}
              <a href="mailto:tutoconnect.support@gmail.com" className="font-semibold text-[#2563EB] underline">
                tutoconnect.support@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
