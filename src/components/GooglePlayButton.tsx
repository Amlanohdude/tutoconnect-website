import React from 'react';

interface GooglePlayButtonProps {
  variant?: 'primary' | 'dark' | 'outline' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  labelPrefix?: string;
}

export const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  labelPrefix = 'GET IT ON',
}) => {
  const baseStyles =
    'inline-flex items-center gap-3 rounded-xl font-medium transition-all duration-200 shadow-sm active:scale-95 group select-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-4.5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const variantStyles = {
    dark: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/50 shadow-md hover:shadow-slate-900/20',
    primary: 'bg-[#1E3A8A] hover:bg-[#1e40af] text-white border border-[#2563EB]/40 shadow-md',
    outline: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 shadow-sm',
    white: 'bg-white hover:bg-slate-100 text-slate-900 border border-transparent shadow-lg',
  };

  return (
    <a
      id="google-play-cta-btn"
      href="https://play.google.com/store/apps/details?id=com.tutoconnect"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label="Download TutoConnect on Google Play"
    >
      {/* Official styled Google Play Vector Icon */}
      <svg
        className={size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-7 h-7' : 'w-6 h-6'}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.7 13.1c-6.7 6.4-10.7 16.5-10.7 28.9v428c0 12.4 4 22.5 10.7 28.9l1.6 1.4 240.2-240.2v-5.6L50.3 11.7l-1.6 1.4z"
          fill="#00D3FF"
        />
        <path
          d="M371.3 331.6l-80.8-80.8v-5.6l80.8-80.8 1.8 1 95.8 54.4c27.3 15.5 27.3 40.8 0 56.4l-95.8 54.4-1.8 1z"
          fill="#FFCE00"
        />
        <path
          d="M290.5 247.6L48.7 470.4c8.9 9.5 23.5 10.6 39.9 1.3l284.5-161.7-82.6-62.4z"
          fill="#FF334C"
        />
        <path
          d="M290.5 264.4l82.6-62.4L88.6 40.3C72.2 31 57.6 32.1 48.7 41.6l241.8 222.8z"
          fill="#00E676"
        />
      </svg>
      <div className="flex flex-col items-start leading-none text-left">
        <span
          className={`font-semibold tracking-wider text-[10px] uppercase opacity-75 ${
            variant === 'white' ? 'text-slate-600' : ''
          }`}
        >
          {labelPrefix}
        </span>
        <span className="font-bold tracking-tight text-sm md:text-base mt-0.5">Google Play</span>
      </div>
    </a>
  );
};
