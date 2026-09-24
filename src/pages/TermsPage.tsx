import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight, Scale, ShieldAlert, Award, FileCheck, CheckCircle2, Mail, Phone, MapPin, Building } from 'lucide-react';
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
            <span className="text-[#0F172A] font-semibold">Terms &amp; Conditions</span>
          </nav>
        </div>
      </div>

      {/* Document Header */}
      <section className="pt-14 pb-10 border-b border-[#E2E8F0] text-left bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <PillBadge
            text="Platform Terms of Service"
            bgColor="#EFF6FF"
            dotColor="#0EA5E9"
            textColor="#0F172A"
            borderColor="#DBEAFE"
          />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
            Terms &amp; Conditions
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
              <Scale className="w-5 h-5 text-[#2563EB]" />
              <span>Platform Agreement &amp; Intermediary Notice</span>
            </div>
            <p className="text-xs text-[#64748B] leading-normal">
              By downloading, browsing, or using the TutoConnect Android mobile app or our website, you agree to be bound by these Terms. If you do not accept these Terms, do not register, browse, or arrange tuition via TutoConnect.
            </p>
          </div>

          {/* Clause 1 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">1. Acceptance of Terms &amp; Legal Capacity</h2>
            <p>
              By accessing or using TutoConnect, you confirm that you are at least <strong>18 years of age</strong>, or if you are under 18, that you are accessing the platform with the active consent and supervision of your parent or lawful guardian. If you register an account on behalf of a school, educational centre, or legal entity, you warrant that you hold authorized legal authority to bind that entity to these Terms.
            </p>
          </div>

          {/* Clause 2 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">2. Platform Scope &amp; Intermediary Status (Section 79, IT Act)</h2>
            <p>
              TutoConnect operates strictly as an <strong>intermediary software platform</strong> under Section 79 of the Information Technology Act, 2000:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#64748B]">
              <li>
                TutoConnect is a technology-enabled discovery venue that facilitates direct peer-to-peer introductions between independent tutors and prospective students/parents in Guwahati and Assam.
              </li>
              <li>
                <strong className="text-[#0F172A]">No Employer-Employee Relationship:</strong> Tutors are independent contractors. TutoConnect is not an employer, coaching institute, school, or staffing agency. We do not supervise, control, or direct the methods, pedagogical quality, or hours of tutors.
              </li>
              <li>
                TutoConnect does not endorse, guarantee, or underwrite any individual educator or student.
              </li>
            </ul>
          </div>

          {/* Clause 3 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">3. User Registration, Profile Verification &amp; Screening</h2>
            <p>
              Educators can create a tutor profile and submit verification documents (degrees, certificates, masked identity proof):
            </p>
            <div className="p-4 rounded-xl bg-[#EFF6FF] border-l-4 border-[#2563EB] text-xs text-[#1E40AF] space-y-2">
              <p className="font-bold flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#2563EB]" />
                Verification Status Badges
              </p>
              <p>
                Profiles marked <strong>&apos;Verified&apos;</strong> indicate that our administration has reviewed basic government ID (Masked Aadhaar) and educational credentials provided by the tutor. Verification does not constitute a character certificate, police background clearance, or warranty of instructional quality.
              </p>
            </div>
            <p className="text-xs text-[#64748B]">
              Submitting forged or altered academic degrees will result in immediate permanent account termination and referral to appropriate law enforcement authorities.
            </p>
          </div>

          {/* Clause 4 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">4. Educator Conduct &amp; Professional Ethics</h2>
            <p>Tutors using TutoConnect agree to adhere to strict ethical and legal standards:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#64748B]">
              <li>
                <strong className="text-[#0F172A]">Child Safety &amp; Non-Violence:</strong> Zero tolerance for physical punishment, emotional mistreatment, harassment, discrimination, or inappropriate verbal/physical behavior toward minors.
              </li>
              <li>
                <strong className="text-[#0F172A]">Punctuality &amp; Professionalism:</strong> Tutors must fulfill agreed tuition schedules and maintain respectful communication with students and parents.
              </li>
              <li>
                <strong className="text-[#0F172A]">Content Standards:</strong> In-app messaging must not be used to distribute spam, abusive media, academic dishonesty services (e.g., impersonation in examinations), or offensive content.
              </li>
            </ul>
          </div>

          {/* Clause 5 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">5. Direct Fee Negotiations &amp; Peer-to-Peer Payments</h2>
            <p>
              All financial arrangements, hourly fees, monthly billing cycles, and modes of payment (UPI, cash, bank transfer) are negotiated and completed <strong>directly and solely between the tutor and the student/parent</strong>:
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] space-y-1.5">
              <p className="font-bold text-[#0F172A]">Zero Platform Commission / Direct Settlement:</p>
              <p>
                TutoConnect does not process tuition fees, collect platform cuts from lessons, act as an escrow agent, or mediate financial disagreements between users. Users assume all responsibility for verifying payment terms before starting tuition sessions.
              </p>
            </div>
          </div>

          {/* Clause 6 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">6. Disclaimers, Limitation of Liability &amp; Safety Guidelines</h2>
            <div className="p-4 rounded-xl bg-[#FFFBEB] border-l-4 border-[#F59E0B] text-xs text-[#92400E] space-y-2">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#F59E0B]" />
                Parent &amp; Learner Safety Advisory
              </p>
              <p>
                Parents and adult learners are strongly advised to independently verify tutor identity, conduct introductory meetings in monitored common areas, and supervise home tuition sessions. TutoConnect disclaims any liability for personal injury, property loss, or contractual breaches arising from offline interactions.
              </p>
            </div>
          </div>

          {/* Clause 7 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">7. Account Striking, Suspension &amp; Termination</h2>
            <p>
              To maintain quality and safety, TutoConnect enforces a <strong>Three-Strike System</strong> for verified user complaints regarding unexcused no-shows, abusive language, or fraudulent claims. TutoConnect reserves the right to immediately suspend or permanently ban any user account without refund for safety or policy violations.
            </p>
          </div>

          {/* Clause 8 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">8. Governing Law &amp; Exclusive Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the <strong>laws of India</strong>. Any legal dispute, claim, or controversy arising out of or relating to TutoConnect shall be subject to the exclusive jurisdiction of the competent courts situated in <strong>Guwahati, Assam, India</strong>.
            </p>
          </div>

          {/* Clause 9: Grievance Redressal */}
          <div className="space-y-4 pt-2">
            <h2 className="font-display text-xl font-bold text-[#0F172A]">9. Grievance Redressal &amp; Mandatory Disclosures</h2>
            <p className="text-xs text-[#64748B]">
              In compliance with the <strong>Information Technology (Intermediary Guidelines) Rules, 2021</strong>, and the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>:
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
