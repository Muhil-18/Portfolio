"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/Button";
import { FiDownload, FiArrowRight, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Interactive Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-40 transition-opacity duration-300"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Available for Internships & Roles</span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight text-textcol-light dark:text-textcol-dark"
          >
            S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Muhilan</span>
          </motion.h1>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl md:text-2xl font-mono text-textcol-light/80 dark:text-textcol-dark/80 mb-6 h-[40px] md:h-auto"
          >
            <span className="text-primary mr-2">&gt;</span>
            <TypeAnimation
              sequence={[
                "Cloud Engineer", 2000,
                "AI & Data Enthusiast", 2000,
                "Full-Stack Developer", 2000,
                "Edge Computing Builder", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-textcol-light/70 dark:text-textcol-dark/70 mb-10 max-w-2xl leading-relaxed"
          >
            I build scalable cloud systems, AI-driven analytics tools, and offline-first edge platforms. 
            Currently pursuing B.Tech CSE (Cloud Computing) at SRM IST, Chennai.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Button variant="primary" asChild>
              <a href="/assets/resume/resume.pdf" download>
                <FiDownload />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">
                <FiArrowRight />
                View Projects
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">
                <FiMail />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4"
          >
            <a href="https://github.com/Muhil-18" target="_blank" rel="noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-textcol-light dark:text-textcol-dark">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/muhilan-sivaraman" target="_blank" rel="noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-textcol-light dark:text-textcol-dark">
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-12 mt-12 lg:mt-0">
          
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated spinning ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary animate-spin-slow opacity-70 blur-md" />
            
            <div className="absolute inset-2 rounded-full overflow-hidden bg-surface-light dark:bg-surface-dark border-2 border-black/5 dark:border-white/10 z-10 flex items-center justify-center">
              <Image
                src="/assets/profile/profile.jpg"
                alt="S Muhilan"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <StatCard value={3} label="Projects Built" />
            <StatCard value={2} label="Certifications" />
            <StatCard value={10} suffix="+" label="Technologies" />
            <StatCard value={2} label="Hackathons" />
          </div>

        </div>

      </div>
    </section>
  );
}

function StatCard({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
      <div className="text-3xl font-display font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-textcol-light/60 dark:text-textcol-dark/60 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
