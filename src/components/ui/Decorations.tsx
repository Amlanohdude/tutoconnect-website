import React from 'react';
import { motion } from 'motion/react';

interface HighlightWordProps {
  children: React.ReactNode;
  color?: string;
  rotation?: number;
  showUnderline?: boolean;
  showSparkle?: boolean;
  className?: string;
}

export const HighlightWord: React.FC<HighlightWordProps> = ({
  children,
  color = '#2563EB',
  rotation = 0,
  showUnderline = false,
  showSparkle = false,
  className = '',
}) => {
  return (
    <span className={`relative inline-block whitespace-nowrap mx-1 ${className}`}>
      {/* Optional Top Sparkle in TutoConnect Cyan */}
      {showSparkle && (
        <span
          className="absolute -top-3.5 -right-3.5 w-5 h-5 pointer-events-none select-none text-[#0EA5E9]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>
        </span>
      )}

      {/* Styled Word */}
      <span
        style={{
          color,
          transform: rotation ? `rotate(${rotation}deg)` : undefined,
          display: 'inline-block',
        }}
        className="font-bold tracking-tight"
      >
        {children}
      </span>

      {/* Underline accent in TutoConnect Cyan if requested */}
      {showUnderline && (
        <span
          className="absolute -bottom-1.5 left-0 right-0 h-2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 100 12"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full text-[#0EA5E9]"
          >
            <path
              d="M2 8C25 2 75 2 98 9"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </span>
  );
};

interface PillBadgeProps {
  text: string;
  dotColor?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
}

export const PillBadge: React.FC<PillBadgeProps> = ({
  text,
  dotColor = '#0EA5E9',
  bgColor = '#EFF6FF',
  textColor = '#0F172A',
  borderColor = '#DBEAFE',
  className = '',
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor, borderColor, color: textColor }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border tracking-wide transition-colors ${className}`}
    >
      <span
        style={{ backgroundColor: dotColor }}
        className="w-2 h-2 rounded-full flex-shrink-0"
      />
      <span className="font-semibold text-[#2563EB]">{text}</span>
    </div>
  );
};

/* 4-pointed Star SVG in TutoConnect Cyan/Blue */
export const BrandStar: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 48,
  color = '#0EA5E9',
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 61 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M30.5 0C30.5 25.5 5.5 25.5 0 25.5C5.5 25.5 30.5 25.5 30.5 51C30.5 25.5 55.5 25.5 61 25.5C55.5 25.5 30.5 25.5 30.5 0Z"
      fill={color}
    />
  </svg>
);
export const EdufyStar = BrandStar;

/* Playful floating pills in Hero */
interface PlayfulTagProps {
  text: string;
  bg: string;
  rotation?: number;
  className?: string;
}

export const PlayfulTag: React.FC<PlayfulTagProps> = ({
  text,
  bg,
  rotation = 0,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: rotation * 0.7 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      style={{
        backgroundColor: bg,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold text-[#0F172A] shadow-xs cursor-default select-none inline-flex items-center justify-center whitespace-nowrap border border-black/5 ${className}`}
    >
      {text}
    </motion.div>
  );
};

export const TickerRibbon: React.FC = () => {
  const items = [
    'SEBA & AHSEC Curricula',
    'CBSE & ICSE Boards',
    'Home Tuition across Guwahati',
    'Direct Phone & WhatsApp Access',
    'Verified Academic Degrees',
    'Zero Middleman Commissions',
    'Beltola • Chandmari • Zoo Road • Dispur',
  ];

  return (
    <div className="w-full overflow-hidden py-3">
      <div className="animate-ticker-marquee flex items-center gap-10">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-sm font-medium text-[#64748B] whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ScallopBorder: React.FC = () => null;
