import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-10 py-20 border-t border-[#D7E2EA]/15">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side: Call to action */}
        <FadeIn delay={0} y={30} className="flex flex-col gap-4 max-w-xl">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase hero-heading leading-tight">
            Ready to collaborate on Data, Web, or Automations?
          </h2>
          <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70">
            Feel free to reach out for business intelligence consulting, custom web development, or n8n workflow automations.
          </p>
        </FadeIn>

        {/* Right Side: Contact Links */}
        <FadeIn delay={0.2} y={30} className="flex flex-col gap-4 w-full md:w-auto">
          {/* Email */}
          <a
            href="mailto:shandilyaswagat@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#B600A8]" />
              <span className="font-medium text-sm sm:text-base">shandilyaswagat@gmail.com</span>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          {/* Social Links Row */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/swagatshandilya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-all duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-[#BBCCD7]" />
              <span className="font-medium uppercase tracking-wider text-xs sm:text-sm">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shandilyaswagat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-all duration-200 group"
            >
              <Github className="w-5 h-5 text-[#BBCCD7]" />
              <span className="font-medium uppercase tracking-wider text-xs sm:text-sm">GitHub</span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#D7E2EA]/50 gap-4">
        <span>© {new Date().getFullYear()} Swagat Shandilya. All rights reserved.</span>
        <span>Data Analytics • Web Creation • n8n Automations</span>
      </div>
    </footer>
  );
};
