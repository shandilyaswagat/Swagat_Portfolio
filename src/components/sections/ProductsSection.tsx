import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ExternalLink } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="relative bg-[#0C0C0C] z-10 px-4 sm:px-8 md:px-10 py-20 pb-32 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#B600A8] mb-3">
              Upcoming Innovations
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 120px)' }}
            >
              Products
            </h2>
          </div>
        </FadeIn>

        {/* Product Showcase Card */}
        <FadeIn delay={0.2} y={40} className="w-full">
          <div className="w-full bg-[#121418] border-2 border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[44px] md:rounded-[56px] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Header / Info Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#D7E2EA]/15">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#D7E2EA] tracking-tight">
                    Washrooms
                  </h3>
                  {/* Coming Soon Pill */}
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#B600A8]/20 border border-[#B600A8] text-[#F3E5F5] shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B600A8] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B600A8]"></span>
                    </span>
                    <span>Coming Soon</span>
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mt-1">
                  Next-generation smart locator, hygiene analytics, and public utility management platform. Designed for modern urban navigation and seamless facility discovery.
                </p>
              </div>

              {/* Launch Page Button */}
              <a
                href="https://washrooms-launch-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-widest px-6 py-3 text-xs sm:text-sm hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
              >
                <span>Launch Page</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Product Live Preview Iframe Container */}
            <div className="mt-6 sm:mt-8 w-full h-[320px] sm:h-[450px] md:h-[550px] rounded-[24px] sm:rounded-[36px] overflow-hidden bg-[#0C0C0C] border border-[#D7E2EA]/15 relative shadow-inner">
              <iframe
                src="https://washrooms-launch-page.vercel.app/"
                title="Washrooms Launch Page Preview"
                className="w-full h-full border-none rounded-[24px] sm:rounded-[36px]"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
