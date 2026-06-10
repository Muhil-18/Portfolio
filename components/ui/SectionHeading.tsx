"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 flex flex-col items-center text-center", className)}
    >
      {subtitle && (
        <span className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold relative inline-block text-textcol-light dark:text-textcol-dark">
        {title}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full origin-left"
        />
      </h2>
    </motion.div>
  );
}
