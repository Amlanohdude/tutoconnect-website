import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight, ShieldCheck, Lock, AlertTriangle, Trash2, Mail, Phone, MapPin, Building } from 'lucide-react';
import { PillBadge } from '../components/ui/Decorations';
import { getSupportEmail, getSupportMailto } from '../utils/security';

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
            text="DPDP Act &amp; Play Store Compliance"
            bgColor="#EFF6FF"
            dotColor="#0EA5E9"
            textColor="#0F172A"
            borderColor="#DBEAFE"
          />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#64748B]">
            Effective Date: September 2026 • Governing TutoConnect Android Application &amp; Web Platform
          </p>
        </div>
      </section>

      {/* Document Body */}
      <section className="py-14 text-left bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm text-[#475569] leading-relaxed">
          
          {/* Summary Box */}
          <div className="p-6 rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              <span>Lean Privacy &amp; Digital Personal Data Protection (DPDP) Commitment</span>
            </div>
            <p className="text-xs text-[#64748B] leading-normal">
              TutoConnect (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to transparent, secure data handling. We operate exclusively in Guwahati and Assam, connecting students and parents with qualified home, centre, and online tutors. We do not sell your personal data.
            </p>
          </div>

          {/* Clause 1: Data Collection & Use */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">1. Data Collection &amp; Purpose Specification</h2>
            <p>
              We collect only the minimum data strictly necessary to match learners with educators and maintain community trust:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#64748B]">
              <li>
                <strong className="text-[#0F172A]">Account &amp; Contact Information:</strong> Name, verified email address, phone number, and encrypted credentials upon registration in the Android app.
              </li>
              <li>
                <strong className="text-[#0F172A]">Educator Profile Data:</strong> Academic qualifications, degrees, awarding institutions, experience years, subjects taught, target boards (CBSE, SEBA, ICSE), and preferred tuition modes (home tuition, tutor&apos;s location, online).
              </li>
              <li>
                <strong className="text-[#0F172A]">Approximate Location:</strong> City, locality, and pincode in Guwahati/Assam, used strictly for hyper-local geographic matching. Precise background GPS is never collected or tracked.
              </li>
              <li>
                <strong className="text-[#0F172A]">Direct Communications &amp; Session Records:</strong> In-app lesson requests, chat messages, and session history necessary to facilitate peer-to-peer tutoring.
              </li>
            </ul>
          </div>

          {/* Clause 2: Minors' Data & Parental Consent */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">2. Minors&apos; Data &amp; Verifiable Parental Consent</h2>
            <p>
              In strict accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>:
            </p>
            <div className="p-4 rounded-xl bg-[#FFFBEB] border-l-4 border-[#F59E0B] text-xs text-[#92400E] space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                Parental Guardian Authorization Required
              </p>
              <p>
                By registering or searching for tuition on behalf of a minor (under age 18), the parent or lawful guardian provides verifiable consent for data processing. Accounts created directly by unassisted minors without parental authorization are purged immediately upon notification.
              </p>
            </div>
          </div>

          {/* Clause 3: Aadhaar & Identity Document Safeguards */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">3. Data Storage &amp; Identity Document Safeguards (Aadhaar &amp; Certificates)</h2>
            <p>
              For community safety, educators upload qualification certificates and an identity verification document during onboarding:
            </p>
            <div className="p-4 rounded-xl bg-[#EFF6FF] border-l-4 border-[#2563EB] text-xs text-[#1E40AF] space-y-2">
              <p className="font-bold flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#2563EB]" />
                Private Encrypted Cloud Storage Protection
              </p>
              <p>
                TutoConnect strictly mandates <strong>&apos;Masked Aadhaar&apos;</strong> (with only the last 4 digits visible). Uploaded identity documents and degrees are stored in private, access-restricted cloud storage solely for internal screening. <strong>Uploaded identity documents are never made publicly visible</strong> on tutor profiles, search feeds, or anywhere on the platform.
              </p>
            </div>
          </div>

          {/* Clause 4: Third-Party Advertising */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">4. Third-Party Advertising (Google AdMob)</h2>
            <p>
              TutoConnect uses third-party advertising services, specifically <strong>Google AdMob</strong>, to display non-intrusive advertisements in the Android mobile application:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#64748B]">
              <li>
                Google AdMob may collect and process device identifiers, such as the <strong>Google Advertising ID (AAID)</strong>, IP address, and coarse device performance telemetry to deliver relevant ads and detect click fraud.
              </li>
              <li>
                You can manage, reset, or opt out of personalized ad tracking anytime on your Android device via <em>Settings ➔ Google ➔ Ads</em>.
              </li>
              <li>
                Our platform enforces the official IAB Tech Lab <code>app-ads.txt</code> standard to protect users from fraudulent advertising and app spoofing.
              </li>
            </ul>
          </div>

          {/* Clause 5: User Rights & Account Deletion */}
          <div id="delete-account" className="space-y-3 scroll-mt-24">
            <h2 className="font-display text-xl font-bold text-[#0F172A] flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-[#EF4444]" />
              <span>5. User Rights, Account Deletion &amp; Data Erasure</span>
            </h2>
            <p>
              In accordance with Google Play Store policies and user privacy rights, TutoConnect grants users full ownership and erasure rights over their personal data at any time through either of the following mechanisms:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Method 1: In-App Self Service</span>
                <p className="text-xs text-[#475569]">
                  Open TutoConnect ➔ Go to <strong>Settings ➔ Account Closure &amp; Deactivation ➔ Delete Account</strong>. Enter the 6-digit OTP sent to your registered email to immediately anonymize and erase your account.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Method 2: Email Deletion Request</span>
                <p className="text-xs text-[#475569]">
                  Send an email from your registered address to{' '}
                  <a href={getSupportMailto()} className="font-semibold text-[#2563EB] underline">
                    {getSupportEmail()}
                  </a>{' '}
                  with the subject <em>&quot;Account Deletion Request&quot;</em>. Deletions are processed within <strong>24–48 hours</strong>.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#FEF2F2] border-l-4 border-[#EF4444] text-xs text-[#991B1B] space-y-1">
              <p className="font-bold">Data Deletion Scope:</p>
              <p>
                Upon account deletion, all personal data—including your name, email, phone number, profile photo, subject preferences, and uploaded screening documents—is permanently purged from our database and cloud storage. Session history is anonymized without identifying credentials.
              </p>
            </div>
          </div>

          {/* Clause 6: Grievance Redressal & Disclosures */}
          <div className="space-y-4 pt-2">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">6. Grievance Redressal &amp; Statutory Disclosures</h2>
            <p className="text-xs text-[#64748B]">
              In compliance with the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong> and the DPDP Act, 2023, TutoConnect has designated a Grievance Officer:
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border border-[#BFDBFE] space-y-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-base text-[#1E3A8A]">Designated Grievance Officer</h3>
                  <p className="text-xs text-[#64748B]">Complaints acknowledged within 24–48 hours; resolved within 15 days.</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#DBEAFE] text-[#1D4ED8]">
                  IT Rules 2021
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-[#64748B] uppercase text-[10px] tracking-wider block">Officer Name</span>
                  <span className="font-semibold text-[#0F172A] text-sm">Mauchum Datta Lahkar</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#64748B] uppercase text-[10px] tracking-wider block">Legal Entity</span>
                  <span className="font-semibold text-[#0F172A] text-sm flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#2563EB]" />
                    TutoConnect
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#64748B] uppercase text-[10px] tracking-wider block">Email Address</span>
                  <a href={getSupportMailto()} className="font-semibold text-[#2563EB] text-sm flex items-center gap-1.5 hover:underline">
                    <Mail className="w-3.5 h-3.5" />
                    {getSupportEmail()}
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#64748B] uppercase text-[10px] tracking-wider block">Contact Telephone</span>
                  <a href="tel:7636064162" className="font-semibold text-[#2563EB] text-sm flex items-center gap-1.5 hover:underline">
                    <Phone className="w-3.5 h-3.5" />
                    +91 7636064162
                  </a>
                </div>
                <div className="sm:col-span-2 space-y-1 pt-1">
                  <span className="font-bold text-[#64748B] uppercase text-[10px] tracking-wider block">Registered Address</span>
                  <span className="font-medium text-[#334155] flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 shrink-0" />
                    Marowa Kamalpur Road, Purnadoichapara, Lahkarpara, 781350, Nalbari, Assam, India
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
