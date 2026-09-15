import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const DesertCandlesLogo: React.FC<LogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  showSubtitle = false,
}) => {
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: { symbol: 'w-7 h-9', text: 'text-base', sub: 'text-[9px]' },
    md: { symbol: 'w-9 h-11 sm:w-10 sm:h-12', text: 'text-lg sm:text-xl', sub: 'text-[10px]' },
    lg: { symbol: 'w-12 h-14', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact "dc" Candle Icon Mark from reference image */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses.symbol}`}>
        <svg
          viewBox="0 0 100 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
        >
          <defs>
            {/* Top-to-bottom yellow-to-terracotta gradient matching the exact photo */}
            <linearGradient id="exactDcBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F9D048" />
              <stop offset="15%" stopColor="#F4BF33" />
              <stop offset="38%" stopColor="#EB9026" />
              <stop offset="68%" stopColor="#D5611B" />
              <stop offset="100%" stopColor="#B53E14" />
            </linearGradient>

            {/* Flame gradient with warm orange-red glow matching the photo */}
            <radialGradient id="exactDcFlameGrad" cx="50%" cy="65%" r="60%">
              <stop offset="0%" stopColor="#F4832D" />
              <stop offset="65%" stopColor="#D34B19" />
              <stop offset="100%" stopColor="#9C270A" />
            </radialGradient>
          </defs>

          {/* Candle Flame (Teardrop leaf above candle top) */}
          <path
            d="
              M 37 6
              C 43.5 15 44.5 22 43 25.5
              C 41.8 28.5 39.5 30 37 30
              C 34.5 30 32.2 28.5 31 25.5
              C 29.5 22 30.5 15 37 6
              Z
            "
            fill="url(#exactDcFlameGrad)"
            stroke="#3B1C10"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />

          {/* Letter "d" with candle rim collar, tall stem, circular bowl, and flat baseline */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="
              M 30.5 34.5
              C 29 34.5 28 35.5 28 37
              C 28 38.5 29 39.5 30.5 40
              L 32 40.5
              L 32 54
              C 27.5 53 22 55.5 17 60.5
              C 11.5 66 8.5 73.5 8.5 83.5
              C 8.5 93 11.5 100.5 17 105.5
              C 21.5 109.5 26.5 111 32 111
              L 42 111
              L 42 40.5
              L 43.5 40
              C 45 39.5 46 38.5 46 37
              C 46 35.5 45 34.5 43.5 34.5
              L 30.5 34.5
              Z
              M 32 68
              L 32 97
              C 29.5 97 27.5 96 25 93.5
              C 22 90.5 20.5 86.5 20.5 82.5
              C 20.5 78.5 22 74.5 25 71.5
              C 27.5 69 29.5 68 32 68
              Z
            "
            fill="url(#exactDcBodyGrad)"
            stroke="#3B1C10"
            strokeWidth="2.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Letter "c" matching x-height and flat baseline from photo */}
          <path
            d="
              M 67.5 69
              C 64.5 58 57.5 54 49.5 54
              C 38 54 33.5 66 33.5 82.5
              C 33.5 99 38 111 50.5 111
              L 67.5 111
              L 67.5 98
              L 59 98
              C 55 98 52.5 93 52.5 82.5
              C 52.5 72 55 67 59 67
              C 62.5 67 65 69.5 66 73
              Z
            "
            fill="url(#exactDcBodyGrad)"
            stroke="#3B1C10"
            strokeWidth="2.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-serif font-semibold tracking-tight ${sizeClasses.text} ${
              isDark ? 'text-[#F5F2EB]' : 'text-[#1E1C1A]'
            }`}
          >
            Desert Candles
          </span>
          <span
            className={`font-serif text-sm sm:text-base font-normal ${
              isDark ? 'text-[#D4A373]' : 'text-[#2A2622]'
            }`}
          >
            Est.
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`font-sans uppercase text-[9px] tracking-[0.16em] font-medium -mt-0.5 ${
              isDark ? 'text-[#B8AA99]' : 'text-[#8A7D6F]'
            }`}
          >
            HR Consultancy & E-Services
          </span>
        )}
      </div>
    </div>
  );
};


