"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        className={cn(
          "bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
