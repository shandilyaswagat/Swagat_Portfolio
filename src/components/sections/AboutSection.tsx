import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative 3D Images in Corners */}
      
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-40 sm:opacity-100">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon Icon"
            className="w-[75px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[5%] left-[2%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none opacity-40 sm:opacity-100">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object"
            className="w-[65px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-40 sm:opacity-100">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego Icon"
            className="w-[75px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[5%] right-[2%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none opacity-40 sm:opacity-100">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group"
            className="w-[80px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="mt-8 sm:mt-14 md:mt-16 mb-12 sm:mb-20 md:mb-24 w-full flex justify-center">
          <AnimatedText
            text="With over 3 years of experience as a Data Analyst at PwC, I bridge business intelligence, web creation, and workflow automation. I specialize in building high-impact Power BI dashboards, developing modern web applications, and engineering n8n automations like JobHunt to turn complex data into actionable insights."
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] text-center"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton onClick={scrollToContact} />
        </FadeIn>
      </div>
    </section>
  );
};
