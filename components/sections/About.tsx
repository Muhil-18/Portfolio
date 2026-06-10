"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TypeAnimation } from "react-type-animation";
import { Card } from "@/components/ui/Card";

export function About() {
  const interests = ["Cloud Architecture", "Machine Learning", "Data Engineering", "Edge Computing", "Full-Stack Development", "AI Analytics"];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="About Me" className="items-start text-left mb-8 md:items-start" />
            
            <div className="space-y-6 text-textcol-light/80 dark:text-textcol-dark/80 text-lg leading-relaxed">
              <p>
                I am a passionate Cloud Engineering student specializing in Cloud Computing at SRM IST. 
                My focus lies in building robust systems that function seamlessly at the edge of connectivity, 
                bridging the gap between distributed infrastructure and localized intelligence.
              </p>
              <p>
                I am deeply interested in how AI transforms raw data into actionable decisions. 
                My goal is to become a Cloud Solutions Architect, designing scalable, secure, and 
                intelligent platforms that solve real-world problems.
              </p>
              
              <div className="pt-4">
                <h3 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-3">Core Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map(interest => (
                    <Badge key={interest} variant="secondary">{interest}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-6">
                <p className="text-base italic text-textcol-light/60 dark:text-textcol-dark/60">
                  "When I'm not building cloud systems, I compete at district-level badminton — precision and strategy on the court, the same I bring to engineering."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#0A0F1E] dark:bg-[#0A0F1E] border-white/10 text-white p-0 overflow-hidden font-mono text-sm md:text-base">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-2 text-white/50 text-xs">about.sh</div>
              </div>
              <div className="p-6 h-[320px] overflow-y-auto">
                <div className="flex items-center text-primary mb-2">
                  <span className="mr-2">$</span>
                  <span>whoami</span>
                </div>
                <div className="mb-4 text-white/80">&gt; S Muhilan</div>
                
                <div className="flex items-center text-primary mb-2">
                  <span className="mr-2">$</span>
                  <span>cat about.json</span>
                </div>
                <div className="text-white/80 whitespace-pre">
                  <TypeAnimation
                    sequence={[
                      500,
                      `{\n  "role": "Cloud Engineer (aspiring)",\n  "college": "SRM IST Ramapuram",\n  "cgpa": 8.05,\n  "specialisation": "Cloud Computing",\n  "interests": ["AWS", "Apache Spark", "Edge AI", "DevOps"],\n  "currently_learning": "Kubernetes, Terraform",\n  "open_to": "Internships & Entry-Level Roles"\n}`
                    ]}
                    wrapper="div"
                    cursor={true}
                    speed={70}
                    repeat={1}
                  />
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
