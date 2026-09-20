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

const VALID_ROUTES: readonly PageRoute[] = [
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
] as const;

// Defensive Open-Redirect & Path Traversal Sanitizer
function normalizePath(rawPathname: string): PageRoute {
  if (!rawPathname || typeof rawPathname !== 'string') {
    return '/';
  }

  let path = rawPathname.trim().toLowerCase();

  // 1. Strip trailing hash and query parameters (neutralizes ?redirect=... or #redirect=...)
  path = path.split('?')[0].split('#')[0];

  // 2. Decode URI components safely to catch double-encoding bypasses (e.g., %2f%2fevil.com)
  try {
    path = decodeURIComponent(path);
  } catch {
    // Malformed URI sequence — reject immediately
    return '/';
  }

  // 3. Reject any protocol schemes, javascript execution, or external slashes
  if (
    path.includes(':') ||
    path.startsWith('//') ||
    path.startsWith('\\\\') ||
    path.includes('javascript') ||
    path.includes('data:')
  ) {
    return '/';
  }

  // 4. Strip all leading slashes, backslashes, and control characters to prevent protocol-relative redirects
  path = path.replace(/[\0\r\n]/g, '').replace(/^[/\\]+/, '');

  if (!path || path === '') {
    return '/';
  }

  // 5. Ensure safe single leading slash and trailing slash for directory routes
  path = '/' + path;
  if (!path.endsWith('/')) {
    path = path + '/';
  }

  // 6. Check against strict whitelist
  if (VALID_ROUTES.includes(path as PageRoute)) {
    return path as PageRoute;
  }

  // 7. Controlled alias mappings (internal only)
  if (path.includes('guwahati') || path.includes('tuition')) {
    return '/tuition/guwahati/';
  }
  if (path.includes('tutor') || path.includes('teach')) {
    return '/become-a-tutor/';
  }
  if (path.includes('download') || path.includes('app')) {
    return '/download/';
  }

  // 8. Safe default fallback
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
    // Defense-in-depth: sanitize and whitelist route before pushing to history
    const safeRoute = normalizePath(route);
    if (safeRoute !== currentRoute) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', safeRoute);
      }
      setCurrentRoute(safeRoute);
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
    </div>
  );
}
