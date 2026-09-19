import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';

export interface NavItem {
  label: string;
  route: PageRoute;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Find Tuition', route: '/tuition/guwahati/' },
  { label: 'Become a Tutor', route: '/become-a-tutor/' },
  { label: 'How It Works', route: '/how-it-works/' },
  { label: 'About', route: '/about/' },
  { label: 'Contact', route: '/contact/' },
];

interface NavHeaderProps {
  items?: NavItem[];
  currentRoute?: PageRoute;
  onNavigate?: (route: PageRoute) => void;
  className?: string;
  variant?: 'edufy' | 'contrast';
}

interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  items = DEFAULT_NAV_ITEMS,
  currentRoute,
  onNavigate,
  className = '',
  variant = 'edufy',
}) => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const containerRef = useRef<HTMLUListElement>(null);
  const tabRefs = useRef<Map<PageRoute, HTMLElement>>(new Map());

  // Set position based on a specific route element (active tab)
  const syncToActiveRoute = useCallback(() => {
    if (!currentRoute) {
      setPosition((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const activeEl = tabRefs.current.get(currentRoute);
    if (activeEl) {
      setPosition({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    } else {
      setPosition((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [currentRoute]);

  // Sync cursor position whenever active route changes or on mount/resize
  useEffect(() => {
    syncToActiveRoute();

    const handleResize = () => {
      syncToActiveRoute();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [syncToActiveRoute]);

  const handleMouseEnterTab = (el: HTMLElement) => {
    setPosition({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  };

  const handleMouseLeaveNav = () => {
    // Gracefully spring back to the active page if one exists; otherwise fade out
    syncToActiveRoute();
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, route: PageRoute) => {
    // Preserve standard browser behavior for modifier clicks (e.g. Cmd/Ctrl + click opens in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    if (onNavigate) {
      e.preventDefault();
      onNavigate(route);
    }
  };

  const isContrast = variant === 'contrast';

  return (
    <nav aria-label="Main Navigation" className="relative flex items-center">
      <ul
        ref={containerRef}
        role="menubar"
        onMouseLeave={handleMouseLeaveNav}
        className={`relative flex items-center rounded-full p-1 border select-none transition-colors duration-200 ${
          isContrast
            ? 'border-slate-900 bg-white shadow-xs'
            : 'border-[#E2E8F0]/90 bg-[#F1F5F9]/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]'
        } ${className}`}
      >
        {items.map((item) => {
          const isActive = currentRoute === item.route;

          return (
            <li
              key={item.route}
              role="none"
              ref={(el) => {
                if (el) tabRefs.current.set(item.route, el);
                else tabRefs.current.delete(item.route);
              }}
              onMouseEnter={(e) => handleMouseEnterTab(e.currentTarget)}
              className="relative z-10 block"
            >
              {/* Semantic SEO Anchor Link for search crawlers & accessibility */}
              <a
                role="menuitem"
                href={item.route}
                onClick={(e) => handleItemClick(e, item.route)}
                aria-current={isActive ? 'page' : undefined}
                title={`Navigate to ${item.label}`}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative z-10 block px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-medium transition-colors duration-150 cursor-pointer ${
                  isContrast
                    ? isActive
                      ? 'text-white mix-blend-difference font-semibold'
                      : 'text-slate-800 hover:text-black font-medium'
                    : isActive
                    ? 'text-[#2563EB] font-semibold'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}

        {/* Dynamic 21st.dev-inspired Magnetic Sliding Cursor Pill */}
        <Cursor position={position} variant={variant} />
      </ul>
    </nav>
  );
};

interface CursorProps {
  position: CursorPosition;
  variant: 'edufy' | 'contrast';
}

const Cursor: React.FC<CursorProps> = ({ position, variant }) => {
  const isContrast = variant === 'contrast';

  return (
    <motion.div
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: 380,
        damping: 30,
        mass: 0.8,
      }}
      className={`absolute z-0 top-1 bottom-1 rounded-full pointer-events-none ${
        isContrast
          ? 'bg-black'
          : 'bg-white shadow-[0_2px_8px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)] border border-[#E2E8F0]/60'
      }`}
      aria-hidden="true"
    />
  );
};

export default NavHeader;
