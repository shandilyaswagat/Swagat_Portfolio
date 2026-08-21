import React from 'react';
import { BarChart3, Code2, Database, Cpu, Bot, Terminal, ShieldCheck, Layers, Workflow, Globe } from 'lucide-react';

const SKILLS = [
  { name: "Power BI & DAX Modeling", icon: BarChart3 },
  { name: "Python & EDA Analytics", icon: Code2 },
  { name: "n8n Workflow Automation", icon: Workflow },
  { name: "SQL & Relational Databases", icon: Database },
  { name: "AI Lead Enrichment", icon: Bot },
  { name: "Streamlit & Flask Apps", icon: Terminal },
  { name: "REST APIs & Webhooks", icon: Cpu },
  { name: "PostgreSQL & Cloud DBs", icon: ShieldCheck },
  { name: "Excel & Process Automation", icon: Layers },
  { name: "Web Creation & UI Design", icon: Globe },
];

const DASHBOARD_IMAGES = [
  "/dashboards/Airport_Dashboard.PNG",
  "/dashboards/Claim_Risk_Analysis.png",
  "/dashboards/Insurance_Performance_Dashboard.png",
  "/dashboards/Uber_dashboard.png",
  "/dashboards/Overall_Dashboard.PNG",
  "/dashboards/Cancellation_Dashboard.PNG",
  "/dashboards/Delay_DashboardPNG.PNG",
  "/dashboards/Maven_Space_Analytics.png",
  "/dashboards/JobHuntPipeline.png",
  "/dashboards/ColdMailSender.png",
  "/dashboards/Resume_generator.png",
];

// Duplicate items twice for 100% seamless infinite CSS loop from 0% to -50%
const SKILL_TILES = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];
const DASHBOARD_TILES = [...DASHBOARD_IMAGES, ...DASHBOARD_IMAGES, ...DASHBOARD_IMAGES, ...DASHBOARD_IMAGES];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-36 pb-12 overflow-hidden flex flex-col gap-4 sm:gap-6 relative z-10">
      {/* Inline Keyframes style to guarantee 100% continuous loop without gaps */}
      <style>{`
        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-right {
          animation: marquee-scroll-right 85s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-scroll-left 85s linear infinite;
        }
      `}</style>

      {/* Row 1: Skills & Tech Stack Badges (Moves RIGHT) */}
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-3 sm:gap-4 whitespace-nowrap animate-marquee-right shrink-0">
          {SKILL_TILES.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <div
                key={`skill-${index}`}
                className="bg-[#14171C]/90 border border-[#D7E2EA]/15 rounded-2xl px-5 sm:px-7 py-3 sm:py-4 flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] shadow-xl flex-shrink-0 backdrop-blur-md hover:border-[#B600A8]/50 transition-colors"
              >
                <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#B600A8]" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Glassmorphic Dashboard & Pipeline Gallery (Moves LEFT) */}
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-3 sm:gap-4 whitespace-nowrap animate-marquee-left shrink-0">
          {DASHBOARD_TILES.map((src, index) => (
            <div
              key={`dash-${index}`}
              className="w-[260px] sm:w-[340px] md:w-[420px] h-[170px] sm:h-[220px] md:h-[270px] rounded-2xl sm:rounded-3xl flex-shrink-0 border border-[#D7E2EA]/15 shadow-2xl p-1 bg-[#14171C] overflow-hidden"
            >
              <img
                src={src}
                alt={`Dashboard preview ${index}`}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
