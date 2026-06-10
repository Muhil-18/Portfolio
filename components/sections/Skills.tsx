"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";
import * as SiIcons from "react-icons/si";
import { FaAws } from "react-icons/fa";

const categories = ["Cloud & DevOps", "Programming", "Data & AI", "Tools"];

const categoryColors: Record<string, string> = {
  "Cloud & DevOps": "var(--color-primary)",
  "Programming": "var(--color-secondary)",
  "Data & AI": "var(--color-accent)",
  "Tools": "#8b5cf6" // purple-500
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const activeSkills = SKILLS.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Flash */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundColor: categoryColors[activeTab] }}
        />
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading title="Technical Skills" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === category
                  ? "text-white"
                  : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-textcol-light/80 dark:text-textcol-dark/80"
              }`}
            >
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: categoryColors[category] }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div layout className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {activeSkills.map((skill, i) => {
                const IconComponent = skill.icon === "FaAws" ? FaAws : (SiIcons as any)[skill.icon];
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group relative bg-white dark:bg-[#0A0F1E] border border-black/5 dark:border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-transparent transition-colors overflow-hidden"
                  >
                    {/* Hover Border Gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ 
                      background: `linear-gradient(45deg, transparent, ${categoryColors[activeTab]}20, transparent)`,
                      border: `1px solid ${categoryColors[activeTab]}50`,
                      borderRadius: '1rem'
                    }} />

                    {/* Progress Ring Background */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500 delay-100" style={{
                      borderRight: `4px solid ${categoryColors[activeTab]}`,
                      borderTop: `4px solid ${categoryColors[activeTab]}`,
                      borderTopRightRadius: '1rem',
                      transform: 'scale(1.5) translate(20%, -20%)'
                    }} />

                    <div className="relative z-10 text-4xl text-textcol-light/70 dark:text-textcol-dark/70 group-hover:text-current transition-colors" style={{
                      color: 'inherit'
                    }}>
                      <div className="group-hover:hidden">{IconComponent ? <IconComponent /> : <SiIcons.SiReact />}</div>
                      <div className="hidden group-hover:block" style={{ color: categoryColors[activeTab] }}>{IconComponent ? <IconComponent /> : <SiIcons.SiReact />}</div>
                    </div>
                    <span className="relative z-10 font-medium text-sm text-center">{skill.name}</span>
                    
                    {/* Animated Progress Bar on Hover */}
                    <div className="absolute bottom-0 left-0 h-1 bg-black/5 dark:bg-white/5 w-full">
                       <div 
                         className="h-full w-0 group-hover:w-[85%] transition-all duration-1000 ease-out"
                         style={{ backgroundColor: categoryColors[activeTab] }}
                       />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
