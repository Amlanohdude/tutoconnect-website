import React, { useState } from 'react';
import { TutoConnectLogo } from './TutoConnectLogo';
import { PageRoute } from '../types';
import { GooglePlayButton } from './GooglePlayButton';
import { MapPin, Mail, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tutoconnect.support@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="site-footer"
      className="bg-white text-[#0F172A] pt-16 pb-12 border-t border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="container-edufy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Col 1: Logo + Short description */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <TutoConnectLogo size={32} textColor="text-[#0F172A]" />
            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm leading-relaxed">
              TutoConnect is a tutor discovery platform connecting students, parents, and educators
              directly across Guwahati.
            </p>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563EB]">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Guwahati, Assam</span>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="lg:col-span-3 text-left space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Platform
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tuition/guwahati/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Find Tuition (Guwahati)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/become-a-tutor/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Become a Tutor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/how-it-works/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Legal */}
          <div className="lg:col-span-2 text-left space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Support &amp; Legal
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy-policy/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/download/')}
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Download App
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: App & Direct Email */}
          <div className="lg:col-span-3 text-left space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Get the App
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Find educators and manage your teaching availability directly on Android.
            </p>
            <div>
              <GooglePlayButton variant="dark" size="sm" />
            </div>

            <div className="pt-1">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] border border-[#DBEAFE] px-3.5 py-1.5 rounded-full hover:bg-[#DBEAFE] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Email copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>tutoconnect.support@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {new Date().getFullYear()} TutoConnect. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/privacy-policy/')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/terms/')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
