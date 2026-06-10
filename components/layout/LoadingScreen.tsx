"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-surface-dark" />; // fallback
  }

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0F1E] text-primary font-mono text-lg md:text-xl"
          >
            <TypeAnimation
              sequence={[
                "> Initialising portfolio...", 1000,
                "> Connection established.", 500,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={loading ? "hidden" : "block"}>
        {children}
      </div>
    </>
  );
}
