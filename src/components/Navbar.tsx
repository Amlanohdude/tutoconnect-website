import React, { useState, useEffect } from 'react';
import { TutoConnectLogo } from './TutoConnectLogo';
import { PageRoute } from '../types';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavHeader } from './ui/nav-header';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Find Tuition', route: '/tuition/guwahati/' },
    { label: 'Become a Tutor', route: '/become-a-tutor/' },
    { label: 'How It Works', route: '/how-it-works/' },
    { label: 'About', route: '/about/' },
    { label: 'Contact', route: '/contact/' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3'
          : 'bg-white py-4 sm:py-5'
      }`}
    >
      <div className="container-edufy">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 cursor-pointer focus:outline-none transition-transform hover:opacity-90"
            aria-label="TutoConnect Home"
          >
            <TutoConnectLogo size={32} />
          </button>

          {/* 21st.dev-inspired Magnetic Sliding Pill Nav with Active-Aware Memory & SEO Anchors */}
          <div className="hidden lg:flex items-center">
            <NavHeader
              items={navItems}
              currentRoute={currentRoute}
              onNavigate={handleLinkClick}
              variant="edufy"
            />
          </div>

          {/* Right Action CTA (Download App Pill) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-download-cta"
              onClick={() => handleLinkClick('/download/')}
              className="btn-pill-primary text-xs py-2 px-5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => handleLinkClick('/download/')}
              className="sm:hidden btn-pill-primary text-xs py-1.5 px-3.5"
            >
              <span>App</span>
            </button>

            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] cursor-pointer hover:bg-[#E2E8F0] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="lg:hidden border-b border-[#E2E8F0] bg-white px-5 pt-3 pb-6 space-y-3"
          >
            <div className="bg-[#F8FAFC] rounded-2xl p-2 space-y-1 border border-[#E2E8F0]">
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    currentRoute === item.route
                      ? 'bg-white text-[#2563EB] font-semibold shadow-xs'
                      : 'text-[#0F172A] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleLinkClick('/download/')}
              className="w-full btn-pill-primary py-3 text-sm font-semibold cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download TutoConnect Android App</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
