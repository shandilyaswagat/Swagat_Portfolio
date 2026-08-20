import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { LightboxModal } from '../ui/LightboxModal';
import { Maximize2 } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  link?: string;
  htmlPath?: string;
  images: string[];
  mainImage?: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    name: "JobHunt Automation Pipeline",
    category: "n8n & Web App",
    description: "End-to-end automated job search, filtering, and application pipeline built using n8n workflow automation and a custom web dashboard.",
    link: "https://topmate.io/swagat_shandilya/2235452?utm_source=public_profile&utm_campaign=swagat_shandilya",
    htmlPath: "/dashboards/jobhunt_dashboard.html",
    images: ["/dashboards/JobHuntPipeline.png"],
  },
  {
    id: "02",
    name: "ColdMail Automation",
    category: "n8n & AI Workflow",
    description: "Automated personalized cold outreach pipeline leveraging n8n, AI lead enrichment, and targeted email sequence triggers.",
    link: "https://topmate.io/swagat_shandilya/2238129?utm_source=public_profile&utm_campaign=swagat_shandilya",
    htmlPath: "/dashboards/coldmail_dashboard.html",
    images: ["/dashboards/ColdMailSender.png"],
  },
  {
    id: "03",
    name: "Resume Generator",
    category: "Web & Automation",
    description: "Dynamic web application and automated generator that tailors, formats, and exports resumes specifically matched to target job descriptions.",
    htmlPath: "/dashboards/resume_gen_dashboard.html",
    images: ["/dashboards/Resume_generator.png"],
  },
  {
    id: "04",
    name: "Customer Retention & Churn Analytics",
    category: "PwC BI Suite",
    description: "Interactive Power BI dashboard suite and Python EDA cohort analysis identifying high-risk customer behavior and boosting dashboard speed by 35%.",
    images: [
      "/dashboards/Claim_Risk_Analysis.png",
      "/dashboards/Insurance_Performance_Dashboard.png",
    ],
    mainImage: "/dashboards/Insurance_Performance_Dashboard.png",
  },
  {
    id: "05",
    name: "Flight & Airport Operations Analytics",
    category: "Power BI Suite",
    description: "Comprehensive Power BI suite tracking flight delays, cancellation rates, and operational efficiency metrics.",
    images: [
      "/dashboards/Airport_Dashboard.PNG",
      "/dashboards/Cancellation_Dashboard.PNG",
    ],
    mainImage: "/dashboards/Overall_Dashboard.PNG",
  },
];

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: any;
  onEnlarge: (title: string, imgSrc?: string, htmlPath?: string) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress, onEnlarge }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center mb-12 sm:mb-16"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top Row Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Topmate Live Project Button */}
          {project.link && <LiveProjectButton href={project.link} />}
        </div>

        {/* Bottom Row Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 h-full min-h-0">
          {/* Left Column (40% width / 5 cols) - Dynamically renders project images with Enlarge button */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            {project.images.map((imgSrc, imgIndex) => (
              <div
                key={imgIndex}
                className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden flex-grow relative bg-[#141414] border border-[#D7E2EA]/10 shadow-md group"
                style={{
                  height: project.images.length === 1 ? '100%' : 'calc(50% - 0.5rem)',
                }}
              >
                <img
                  src={imgSrc}
                  alt={`${project.name} photo ${imgIndex + 1}`}
                  className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                  loading="lazy"
                />

                {/* Enlarge Hover Overlay */}
                <button
                  onClick={() => onEnlarge(`${project.name} — Image ${imgIndex + 1}`, imgSrc)}
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-medium uppercase tracking-widest cursor-pointer rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                >
                  <Maximize2 className="w-4 h-4 text-[#B600A8]" />
                  <span>Enlarge Image</span>
                </button>
              </div>
            ))}
          </div>

          {/* Right Column (60% width / 7 cols) - Fitted HTML Dashboard or Tall Image with Enlarge Button */}
          <div className="md:col-span-7 h-full min-h-[220px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#0C0C0C] relative border border-[#D7E2EA]/10 shadow-inner isolate group">
            {project.htmlPath ? (
              <div className="w-full h-full relative overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#0C0C0C] isolate">
                <iframe
                  src={project.htmlPath}
                  title={`${project.name} HTML Rebuild`}
                  className="w-[125%] h-[125%] border-0 scale-[0.8] origin-top-left rounded-[30px] sm:rounded-[40px] md:rounded-[50px] pointer-events-auto bg-[#0C0C0C]"
                  style={{
                    border: 'none',
                    outline: 'none',
                  }}
                  loading="lazy"
                />

                {/* Enlarge Dashboard Button */}
                <button
                  onClick={() => onEnlarge(`${project.name} HTML Dashboard`, undefined, project.htmlPath)}
                  className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-[#B600A8] text-white text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge View</span>
                </button>
              </div>
            ) : (
              project.mainImage && (
                <div className="w-full h-full relative group">
                  <img
                    src={project.mainImage}
                    alt={`${project.name} main preview`}
                    className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                    loading="lazy"
                  />
                  <button
                    onClick={() => onEnlarge(`${project.name} Main View`, project.mainImage)}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-medium uppercase tracking-widest cursor-pointer rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                  >
                    <Maximize2 className="w-4 h-4 text-[#B600A8]" />
                    <span>Enlarge Image</span>
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    title: string;
    imageSrc?: string;
    htmlPath?: string;
  }>({
    isOpen: false,
    title: '',
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 pb-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div ref={containerRef} className="w-full relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
              onEnlarge={(title, imgSrc, htmlPath) =>
                setLightboxState({
                  isOpen: true,
                  title,
                  imageSrc: imgSrc,
                  htmlPath,
                })
              }
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, title: '' })}
        title={lightboxState.title}
        imageSrc={lightboxState.imageSrc}
        htmlPath={lightboxState.htmlPath}
      />
    </section>
  );
};
