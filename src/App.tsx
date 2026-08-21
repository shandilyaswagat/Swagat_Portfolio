import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProductsSection />
      <ContactSection />
    </main>
  );
};

export default App;
