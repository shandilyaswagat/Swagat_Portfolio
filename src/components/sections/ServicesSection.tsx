import React from 'react';
import { FadeIn } from '../ui/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "01",
    name: "Power BI & Dashboards",
    description: "Building interactive, real-time Power BI dashboards with advanced DAX calculations, star schema models, and Row-Level Security for business intelligence.",
  },
  {
    id: "02",
    name: "Workflow Automation (n8n)",
    description: "Designing end-to-end automated workflows using n8n, API integrations, and smart engines like JobHunt, ColdMail, and Resume Generators.",
  },
  {
    id: "03",
    name: "Web Creation & Design",
    description: "Developing modern, responsive, and performant web applications with clean typography, UI aesthetics, and smooth user experiences.",
  },
  {
    id: "04",
    name: "SQL & Data Modeling",
    description: "Writing complex SQL/DAX queries, data validation, and dataset reconciliation across Azure Databricks, MySQL, and cloud data warehouses.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-10 bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={30} className="w-full">
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                {/* Number */}
                <span
                  className="font-black text-[#0C0C0C] leading-none min-w-[120px] sm:min-w-[160px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </span>

                {/* Name & Description Stack */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
