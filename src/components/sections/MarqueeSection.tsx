import React, { useEffect, useRef, useState } from 'react';

const ROW1_IMAGES = [
  "/dashboards/Airport_Dashboard.PNG",
  "/dashboards/Cancellation_Dashboard.PNG",
  "/dashboards/Claim_Risk_Analysis.png",
  "/dashboards/Delay_DashboardPNG.PNG",
];

const ROW2_IMAGES = [
  "/dashboards/Insurance_Performance_Dashboard.png",
  "/dashboards/Maven_Space_Analytics.png",
  "/dashboards/Overall_Dashboard.PNG",
  "/dashboards/Uber_dashboard.png",
];

// Repeat images for seamless continuous scrolling
const ROW1_TILES = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const ROW2_TILES = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (scrollPos - sectionTop + windowHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {ROW1_TILES.map((src, index) => (
          <img
            key={`row1-${index}`}
            src={src}
            alt={`Dashboard preview ${index}`}
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 border border-[#D7E2EA]/10 shadow-lg"
            loading="lazy"
          />
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {ROW2_TILES.map((src, index) => (
          <img
            key={`row2-${index}`}
            src={src}
            alt={`Dashboard preview ${index}`}
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 border border-[#D7E2EA]/10 shadow-lg"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
