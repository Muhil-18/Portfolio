"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/data";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const filters = ["All", "Cloud", "AI/ML", "Data Engineering"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Cloud" && project.id === "cloudster") return true;
    if (activeFilter === "AI/ML" && (project.id === "cloudster" || project.id === "ml-stock-analysis")) return true;
    if (activeFilter === "Data Engineering" && (project.id === "stock-vision-ai" || project.id === "ml-stock-analysis")) return true;
    return false;
  });

  const featuredProject = filteredProjects.find(p => p.featured);
  const gridProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-textcol-light/80 dark:text-textcol-dark/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout">
            {featuredProject && (
              <motion.div
                key={featuredProject.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FeaturedProjectCard project={featuredProject} />
              </motion.div>
            )}

            <motion.div layout className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {gridProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <GridProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: any }) {
  return (
    <Card className="flex flex-col lg:flex-row gap-8 p-6 lg:p-8 relative overflow-hidden group">
      <div className="lg:w-1/2 relative min-h-[300px] rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center">
           <span className="font-display font-bold text-2xl opacity-50 text-center">{project.title}</span>
           <span className="font-mono text-sm opacity-50 mt-2">Preview Graphic</span>
        </div>
      </div>
      
      <div className="lg:w-1/2 flex flex-col justify-center">
        <span className="text-primary font-mono text-sm mb-2">Featured Project</span>
        <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        
        <ul className="space-y-3 mb-8 text-textcol-light/80 dark:text-textcol-dark/80 text-sm md:text-base">
          {project.longDescription.map((desc: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-auto">
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <FiGithub /> Source Code
              </a>
            </Button>
          )}
          <Badge variant="accent">Jan 2026</Badge>
        </div>
      </div>
    </Card>
  );
}

function GridProjectCard({ project }: { project: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="flex flex-col h-full relative group">
      <div className="relative h-48 rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 mb-6 group-hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex flex-col items-center justify-center">
           <span className="font-display font-bold text-lg opacity-50 text-center px-4">{project.title}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 3).map((tech: string) => (
          <Badge key={tech} variant="secondary">{tech}</Badge>
        ))}
        {project.techStack.length > 3 && (
          <Badge variant="secondary">+{project.techStack.length - 3}</Badge>
        )}
      </div>

      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-textcol-light/80 dark:text-textcol-dark/80 text-sm mb-4">
        {project.description}
      </p>

      <div className="mt-auto">
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-mono text-primary mb-4 hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-6"
            >
              <ul className="space-y-2 text-sm text-textcol-light/70 dark:text-textcol-dark/70">
                {project.longDescription.map((desc: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 min-w-[6px]">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-textcol-light/60 dark:text-textcol-dark/60 hover:text-primary transition-colors">
              <FiGithub size={20} />
            </a>
          )}
          <Badge variant="accent">Oct 2025</Badge>
        </div>
      </div>
    </Card>
  );
}
