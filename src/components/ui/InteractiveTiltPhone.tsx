import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface InteractiveTiltPhoneProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scaleOnHover?: number;
  enableGlare?: boolean;
  restingRotateY?: number;
  restingRotateX?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onHoverChange?: (hovered: boolean) => void;
}

export const InteractiveTiltPhone: React.FC<InteractiveTiltPhoneProps> = ({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1200,
  scaleOnHover = 1.025,
  enableGlare = true,
  restingRotateY = 0,
  restingRotateX = 0,
  onClick,
  onHoverChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Motion values normalized between -1 and 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics configuration for natural, high-performance dampening
  const springConfig = { stiffness: 280, damping: 22, mass: 0.6 };

  // 3D rotation transforms
  const rawRotateX = useTransform(mouseY, (y) => {
    if (prefersReducedMotion) return 0;
    return restingRotateX - y * maxTilt;
  });

  const rawRotateY = useTransform(mouseX, (x) => {
    if (prefersReducedMotion) return 0;
    return restingRotateY + x * maxTilt;
  });

  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);
  const scale = useSpring(isHovered && !prefersReducedMotion ? scaleOnHover : 1, springConfig);

  // Dynamic light reflection / glare coordinates (percentage based)
  const glareX = useTransform(mouseX, (x) => `${50 + x * 40}%`);
  const glareY = useTransform(mouseY, (y) => `${50 + y * 40}%`);
  const glareOpacity = useSpring(isHovered && enableGlare && !prefersReducedMotion ? 0.35 : 0, {
    stiffness: 220,
    damping: 25,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || prefersReducedMotion) return;

      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      // Calculate cursor position normalized to [-1, 1] relative to center
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const normalizedX = Math.max(-1, Math.min(1, (currentX / width) * 2 - 1));
      const normalizedY = Math.max(-1, Math.min(1, (currentY / height) * 2 - 1));

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    },
    [mouseX, mouseY, prefersReducedMotion]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(false);
    // Smoothly spring back to rest position
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: `${perspective}px` }}
      className={`relative inline-block transition-shadow duration-300 ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="relative will-change-transform"
      >
        {children}

        {/* Dynamic Specular Glare Reflection on Screen Surface */}
        {enableGlare && !prefersReducedMotion && (
          <motion.div
            style={{
              opacity: glareOpacity,
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle at ${gx} ${gy}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 35%, transparent 75%)`
              ),
            }}
            className="absolute inset-[10px] rounded-[40px] pointer-events-none z-35 mix-blend-overlay transition-opacity duration-200"
            aria-hidden="true"
          />
        )}
      </motion.div>
    </div>
  );
};
