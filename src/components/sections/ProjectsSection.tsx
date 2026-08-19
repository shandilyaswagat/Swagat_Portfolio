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
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    id: "02",
    name: "ColdMail Automation",
    category: "n8n & AI Workflow",
    description: "Automated personalized cold outreach pipeline leveraging n8n, AI lead enrichment, and targeted email sequence triggers.",
    link: "https://topmate.io/swagat_shandilya/2238129?utm_source=public_profile&utm_campaign=swagat_shandilya",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    id: "03",
    name: "Resume Generator",
    category: "Web & Automation",
    description: "Dynamic web application and automated generator that tailors, formats, and exports resumes specifically matched to target job descriptions.",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
  {
    id: "04",
    name: "Customer Retention & Churn Analytics",
    category: "PwC BI Suite",
    description: "Interactive Power BI dashboard suite and Python EDA cohort analysis identifying high-risk customer behavior and boosting dashboard speed by 35%.",
    col1Img1: "/dashboards/Claim_Risk_Analysis.png",
    col1Img2: "/dashboards/Indigo_Overall_Dashboard.jpg",
    col2Img: "/dashboards/Uber_dashboard.png",
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

          <LiveProjectButton href={project.link} />
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

          {/* Right Column (60% width / 7 cols) - 1 tall image */}
          <div className="md:col-span-7 h-full min-h-[220px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img
              src={project.col2Img}
              alt={`${project.name} full preview`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
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
