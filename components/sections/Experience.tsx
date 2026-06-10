"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Experience" />
        
        <div ref={containerRef} className="relative mt-16 pb-12">
          {/* Timeline Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              const roleBadgeColor = index === 0 ? "accent" : index === 1 ? "primary" : "secondary";

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between group">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-light dark:border-surface-dark z-10 -translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_0_4px_var(--color-primary)] opacity-80 shadow-primary/20"
                  />

                  {/* Left spacer for alternating layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-3'}`} />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'order-3 md:text-left' : 'order-1 md:text-right'}`}
                  >
                    <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-[#0f172a] border-t border-r border-black/5 dark:border-white/5 rotate-45 ${isEven ? '-left-2 border-l-0 border-b-0' : '-right-2 border-t-0 border-l-0'}`} />
                      
                      <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                        <Badge variant={roleBadgeColor as any}>{exp.role}</Badge>
                        <h3 className="text-xl font-bold font-display">{exp.company}</h3>
                        <div className="text-primary font-mono text-sm">{exp.duration}</div>
                      </div>
                      
                      <ul className={`space-y-2 text-textcol-light/80 dark:text-textcol-dark/80 text-sm ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className={`flex ${isEven ? 'items-start md:flex-row' : 'items-start md:flex-row-reverse'} gap-2`}>
                            <span className="text-primary mt-1 md:mt-1.5 min-w-[6px]">
                              {isEven ? '▹' : <span className="md:hidden">▹</span>}
                              {!isEven && <span className="hidden md:inline">◃</span>}
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.outcomes.length > 0 && (
                        <div className={`mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-sm font-medium text-accent ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                          {exp.outcomes.map((outcome, i) => (
                            <p key={i}>{outcome}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
