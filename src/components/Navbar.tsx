import React, { useState, useEffect, useRef } from 'react';
import { TutoConnectLogo } from './TutoConnectLogo';
import { PageRoute } from '../types';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavHeader } from './ui/nav-header';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillMenuOpen, setPillMenuOpen] = useState(false);
  const pillMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close pill dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pillMenuRef.current && !pillMenuRef.current.contains(event.target as Node)) {
        setPillMenuOpen(false);
      }
    };
    if (pillMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [pillMenuOpen]);

  // Auto-close pill menu on scroll up to top
  useEffect(() => {
    if (!scrolled) {
      setPillMenuOpen(false);
    }
  }, [scrolled]);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setPillMenuOpen(false);
  };

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Find Tuition', route: '/tuition/guwahati/' },
    { label: 'Become a Tutor', route: '/become-a-tutor/' },
    { label: 'How It Works', route: '/how-it-works/' },
    { label: 'About', route: '/about/' },
    { label: 'Contact', route: '/contact/' },
  ];

  const activeItem = navItems.find((item) => item.route === currentRoute);

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 w-full pointer-events-none transition-all duration-300"
    >
      <div className="w-full px-3 sm:px-6 lg:px-8">
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
          className={`pointer-events-auto transition-all duration-300 ${
            scrolled
              ? 'mx-auto max-w-4xl mt-2.5 sm:mt-3 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]'
              : 'container-edufy py-3.5 sm:py-5 bg-transparent border-none'
          }`}
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Brand Logo */}
            <button
              id="nav-logo-btn"
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-2 cursor-pointer focus:outline-none transition-transform hover:opacity-90 shrink-0"
              aria-label="TutoConnect Home"
            >
              <TutoConnectLogo size={scrolled ? 28 : 32} />
            </button>

            {/* Central Navigation Area: Full Magnetic Sliding Pill when at rest, compact Pill-Burger when scrolled */}
            <div className="hidden lg:flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!scrolled ? (
                  <motion.div
                    key="full-nav"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <NavHeader
                      items={navItems}
                      currentRoute={currentRoute}
                      onNavigate={handleLinkClick}
                      variant="edufy"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="pill-burger"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.18 }}
                    ref={pillMenuRef}
                    className="relative"
                  >
                    {/* Compact Interactive Pill-Burger */}
                    <button
                      id="pill-burger-btn"
                      onClick={() => setPillMenuOpen(!pillMenuOpen)}
                      className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs ${
                        pillMenuOpen
                          ? 'bg-[#0F172A] text-white border-transparent'
                          : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] border-[#E2E8F0] text-[#0F172A]'
                      }`}
                      aria-label="Open navigation menu"
                      aria-expanded={pillMenuOpen}
                    >
                      <span className="flex flex-col gap-0.75 w-3.5 items-center justify-center">
                        <span
                          className={`w-3.5 h-0.5 rounded-full transition-colors ${
                            pillMenuOpen ? 'bg-white' : 'bg-[#2563EB]'
                          }`}
                        />
                        <span
                          className={`w-2.5 h-0.5 rounded-full transition-colors ${
                            pillMenuOpen ? 'bg-white' : 'bg-[#0F172A]'
                          }`}
                        />
                        <span
                          className={`w-3.5 h-0.5 rounded-full transition-colors ${
                            pillMenuOpen ? 'bg-white' : 'bg-[#2563EB]'
                          }`}
                        />
                      </span>
                      <span className="text-xs font-semibold tracking-tight">
                        {activeItem ? activeItem.label : 'Explore'}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                          pillMenuOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>

                    {/* Scrolled Pill Dropdown Popover */}
                    <AnimatePresence>
                      {pillMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.95 }}
                          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                          className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 z-50 p-1.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.14)] min-w-[220px]"
                        >
                          <ul role="menu" className="space-y-0.5">
                            {navItems.map((item) => {
                              const isActive = currentRoute === item.route;
                              return (
                                <li key={item.route} role="none">
                                  <a
                                    role="menuitem"
                                    href={item.route}
                                    onClick={(e) => {
                                      if (
                                        e.metaKey ||
                                        e.ctrlKey ||
                                        e.shiftKey ||
                                        e.altKey ||
                                        e.button !== 0
                                      )
                                        return;
                                      e.preventDefault();
                                      handleLinkClick(item.route);
                                    }}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                                      isActive
                                        ? 'bg-blue-50 text-[#2563EB] font-semibold'
                                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                                  >
                                    <span>{item.label}</span>
                                    {isActive && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                                    )}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Action CTA (Download App Pill - Kept prominent and un-shrunk) */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                id="nav-download-cta"
                onClick={() => handleLinkClick('/download/')}
                className="btn-pill-primary text-xs py-2 px-4 sm:px-5 cursor-pointer shadow-xs hover:shadow-md transition-all shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download App</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden gap-2 shrink-0">
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
        </motion.div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="pointer-events-auto lg:hidden mx-3 sm:mx-6 mt-2 rounded-3xl border border-[#E2E8F0] bg-white/95 backdrop-blur-xl p-4 shadow-xl space-y-3"
          >
            <div className="bg-[#F8FAFC] rounded-2xl p-2 space-y-1 border border-[#E2E8F0]">
              {navItems.map((item) => (
                <a
                  key={item.route}
                  href={item.route}
                  onClick={(e) => {
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                    e.preventDefault();
                    handleLinkClick(item.route);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    currentRoute === item.route
                      ? 'bg-white text-[#2563EB] font-semibold shadow-xs'
                      : 'text-[#0F172A] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </a>
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
