import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  link?: string;
  htmlPath?: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    name: "JobHunt Automation Pipeline",
    category: "n8n & Web App",
    description: "End-to-end automated job search, filtering, and application pipeline built using n8n workflow automation and a custom web dashboard.",
    link: "https://topmate.io/swagat_shandilya/2235452?utm_source=public_profile&utm_campaign=swagat_shandilya",
    htmlPath: "/dashboards/jobhunt_dashboard.html",
    col1Img1: "/dashboards/JobHuntPipeline.png",
    col1Img2: "/dashboards/Resume_generator.png",
    col2Img: "/dashboards/JobHuntPipeline.png",
  },
  {
    id: "02",
    name: "ColdMail Automation",
    category: "n8n & AI Workflow",
    description: "Automated personalized cold outreach pipeline leveraging n8n, AI lead enrichment, and targeted email sequence triggers.",
    link: "https://topmate.io/swagat_shandilya/2238129?utm_source=public_profile&utm_campaign=swagat_shandilya",
    htmlPath: "/dashboards/coldmail_dashboard.html",
    col1Img1: "/dashboards/ColdMailSender.png",
    col1Img2: "/dashboards/Claim_Risk_Analysis.png",
    col2Img: "/dashboards/ColdMailSender.png",
  },
  {
    id: "03",
    name: "Resume Generator",
    category: "Web & Automation",
    description: "Dynamic web application and automated generator that tailors, formats, and exports resumes specifically matched to target job descriptions.",
    htmlPath: "/dashboards/resume_gen_dashboard.html",
    col1Img1: "/dashboards/Resume_generator.png",
    col1Img2: "/dashboards/Delay_DashboardPNG.PNG",
    col2Img: "/dashboards/Resume_generator.png",
  },
  {
    id: "04",
    name: "Customer Retention & Churn Analytics",
    category: "PwC BI Suite",
    description: "Interactive Power BI dashboard suite and Python EDA cohort analysis identifying high-risk customer behavior and boosting dashboard speed by 35%.",
    col1Img1: "/dashboards/Claim_Risk_Analysis.png",
    col1Img2: "/dashboards/Insurance_Performance_Dashboard.png",
    col2Img: "/dashboards/Uber_dashboard.png",
  },
  {
    id: "05",
    name: "Flight & Airport Operations Analytics",
    category: "Power BI Suite",
    description: "Comprehensive Power BI suite tracking flight delays, cancellation rates, and operational efficiency metrics.",
    col1Img1: "/dashboards/Airport_Dashboard.PNG",
    col1Img2: "/dashboards/Cancellation_Dashboard.PNG",
    col2Img: "/dashboards/Overall_Dashboard.PNG",
  },
];

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: any;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
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
        {/* Top Row Header - Clean with title, category, and live topmate link */}
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
          {/* Left Column (40% width / 5 cols) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-shrink-0"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>

            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-grow"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - Cleanly fitted HTML Dashboard view or tall image */}
          <div className="md:col-span-7 h-full min-h-[220px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#0C0C0C] relative">
            {project.htmlPath ? (
              <div className="w-full h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
                <iframe
                  src={project.htmlPath}
                  title={`${project.name} HTML Dashboard`}
                  className="w-full h-full border-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] pointer-events-auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '0',
                  }}
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={project.col2Img}
                alt={`${project.name} full preview`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
