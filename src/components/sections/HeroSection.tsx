import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';
import { Magnet } from '../ui/Magnet';
import { Download } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <nav className="flex justify-between items-center w-full">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 px-2 sm:px-4 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m swagat
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/floating_face.png"
              alt="Swagat Shandilya - Data Analyst & Automation Specialist"
              className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex flex-wrap justify-between items-end gap-4 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[300px]" style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.4rem)' }}>
            a data analyst & automation specialist driven by crafting striking bi dashboards, web apps, and n8n workflows
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Download Resume Button - Matching Contact Button sizing and scale animation */}
          <a
            href="/Swagat_DA.pdf"
            download="Swagat_Shandilya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded-full 
              border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest 
              px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
              text-xs sm:text-sm md:text-base
              hover:bg-[#D7E2EA]/10
              transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg
            "
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#BBCCD7]" />
            <span>Resume</span>
          </a>

          {/* Contact Me Button */}
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
