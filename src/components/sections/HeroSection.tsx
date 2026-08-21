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
    <section className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-3 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 z-30">
        <nav className="flex justify-between items-center w-full max-w-7xl mx-auto gap-2">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Projects", id: "projects" },
            { label: "Products", id: "products" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[10px] xs:text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden text-center z-10 px-2 sm:px-4 mt-2 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10.5vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m swagat
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 w-[200px] xs:w-[250px] sm:w-[350px] md:w-[440px] lg:w-[520px] bottom-28 xs:bottom-32 sm:bottom-0 pointer-events-auto">
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
      <div className="w-full px-4 sm:px-6 md:px-10 pb-4 sm:pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 sm:gap-4 z-30 max-w-7xl mx-auto">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto text-center sm:text-left">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug mx-auto sm:mx-0 max-w-[280px] sm:max-w-[240px] md:max-w-[300px] text-xs sm:text-sm md:text-base">
            a data analyst & automation specialist driven by crafting striking bi dashboards, web apps, and n8n workflows
          </p>
        </FadeIn>

        {/* Action Buttons: Resume Download & Contact Me */}
        <FadeIn delay={0.45} y={20} className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="/Swagat_DA.pdf"
            download="Swagat_Shandilya_Resume.pdf"
            className="
              inline-flex items-center justify-center gap-1.5 rounded-full 
              border-2 border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-widest 
              px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5
              text-[11px] sm:text-xs md:text-sm
              hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg
            "
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Download Resume</span>
          </a>

          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
