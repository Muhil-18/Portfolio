"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StatsBanner() {
  return (
    <section className="py-12 bg-[#0A0F1E] border-y border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <StatCounter value={3} label="Projects Built" />
          <StatCounter value={2} label="Certifications" />
          <StatCounter value={10} suffix="+" label="Technologies" />
          <StatCounter value={2} label="Events / Hackathons" />
          <StatCounter value={8.05} decimals={2} label="CGPA" className="col-span-2 md:col-span-1" />
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, label, suffix = "", decimals = 0, className = "" }: { value: number, label: string, suffix?: string, decimals?: number, className?: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <motion.div 
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className={className}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {count.toFixed(decimals)}{suffix}
      </div>
      <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
