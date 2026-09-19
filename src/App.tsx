/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GuwahatiPage } from './pages/GuwahatiPage';
import { BecomeTutorPage } from './pages/BecomeTutorPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DownloadPage } from './pages/DownloadPage';
import { ExternalLink } from 'lucide-react';

// SEO metadata dictionary matching the specific page purposes
const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'TutoConnect | Find Tuition & Tutors in Guwahati',
    description:
      'Discover tutors, explore tuition options, and connect with educators in Guwahati. TutoConnect also helps tutors connect with students looking for tuition.',
  },
  '/tuition/guwahati/': {
    title: 'Tuition & Tutors in Guwahati | TutoConnect',
    description:
      'Find home tuition, school tutors, and exam preparation in Guwahati. Connect directly with tutors or join as an educator on TutoConnect.',
  },
  '/become-a-tutor/': {
    title: 'Find Tuition Students in Guwahati | Become a Tutor | TutoConnect',
    description:
      'Looking for students in Guwahati? Join TutoConnect to create your tutor profile, showcase your subjects, and connect with students and parents.',
  },
  '/how-it-works/': {
    title: 'How It Works | TutoConnect',
    description:
      'Learn how students find tutors and how educators get discovered in Guwahati through the TutoConnect Android app.',
  },
  '/about/': {
    title: 'About Us | TutoConnect',
    description:
      'TutoConnect is a tutor discovery platform launching initially in Guwahati, Assam, dedicated to connecting learners and educators.',
  },
  '/contact/': {
    title: 'Contact Support | TutoConnect',
    description:
      'Contact TutoConnect support team at tutoconnect.support@gmail.com for help with the Android app and tutor onboarding in Guwahati.',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | TutoConnect',
    description:
      'Privacy Policy for the TutoConnect Android application and website, detailing data collection, usage, and deletion rights.',
  },
  '/terms/': {
    title: 'Terms & Conditions | TutoConnect',
    description:
      'Terms of service and platform agreement for students, parents, and tutors using TutoConnect in Guwahati.',
  },
  '/download/': {
    title: 'Download TutoConnect Android App | Google Play',
    description:
      'Download the official TutoConnect Android app on Google Play to discover tutors and connect with students in Guwahati.',
  },
  '/find-a-tutor/': {
    title: 'Find a Tutor in Guwahati | TutoConnect App',
    description:
      'Discover and connect with qualified tutors in Guwahati on the TutoConnect Android application.',
  },
};

// Normalize path to match PageRoute
function normalizePath(pathname: string): PageRoute {
  let path = pathname.toLowerCase();
  // Strip trailing hash/query
  path = path.split('?')[0].split('#')[0];

  if (!path || path === '' || path === '/') {
    return '/';
  }

  // Ensure trailing slash for directory routes
  if (!path.endsWith('/')) {
    path = path + '/';
  }

  const validRoutes: PageRoute[] = [
    '/',
    '/tuition/guwahati/',
    '/become-a-tutor/',
    '/how-it-works/',
    '/about/',
    '/contact/',
    '/privacy-policy/',
    '/terms/',
    '/download/',
    '/find-a-tutor/',
  ];

  if (validRoutes.includes(path as PageRoute)) {
    return path as PageRoute;
  }

  // Handle common aliases
  if (path.includes('guwahati') || path.includes('tuition')) {
    return '/tuition/guwahati/';
  }
  if (path.includes('tutor') || path.includes('teach')) {
    return '/become-a-tutor/';
  }
  if (path.includes('download') || path.includes('app')) {
    return '/download/';
  }

  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    return typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/';
  });

  // Keep route synced with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title and Meta Description for SEO dynamically
  useEffect(() => {
    const meta = routeMetadata[currentRoute] || routeMetadata['/'];
    document.title = meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentRoute]);

  const handleNavigate = (route: PageRoute) => {
    if (route !== currentRoute) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', route);
      }
      setCurrentRoute(route);
    }
  };

  // Render active page
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/tuition/guwahati/':
        return <GuwahatiPage onNavigate={handleNavigate} />;
      case '/become-a-tutor/':
        return <BecomeTutorPage onNavigate={handleNavigate} />;
      case '/how-it-works/':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case '/about/':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/contact/':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/privacy-policy/':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case '/terms/':
        return <TermsPage onNavigate={handleNavigate} />;
      case '/download/':
      case '/find-a-tutor/':
        return <DownloadPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#0EA5E9] selection:text-white">
      {/* Top Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">{renderPage()}</main>

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Dev Testing Button: Open in New Tab */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          id="dev-floating-open-new-tab"
          href={typeof window !== 'undefined' ? window.location.href : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1E3A8A] text-white text-xs font-semibold shadow-xl hover:bg-[#2563EB] hover:shadow-2xl transition-all duration-200 border border-white/20 active:scale-95 cursor-pointer group"
          title="Open this application in a new browser tab for testing"
        >
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse"></span>
          <span>Dev: Open in New Tab</span>
          <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
}
