"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/data";
import { FiExternalLink, FiAward, FiStar, FiActivity } from "react-icons/fi";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Certifications & Recognition" />
        
        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="h-24 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center group-hover:brightness-110 transition-all">
                  <FiAward className="text-4xl text-white opacity-80" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-mono text-sm text-textcol-light/60 dark:text-textcol-dark/60 mb-2">{cert.provider}</span>
                  <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary transition-colors">{cert.name}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <Badge variant="accent">{cert.date}</Badge>
                    <Button variant="outline" size="sm" className="gap-2" disabled={!cert.verifyUrl} asChild={!!cert.verifyUrl}>
                      {cert.verifyUrl ? (
                        <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                          <FiExternalLink /> Verify
                        </a>
                      ) : (
                        <span><FiExternalLink /> Verify</span>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Subsection */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-8 text-center md:text-left">Achievements</h3>
          <div className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((ach, i) => {
              const iconMap: any = {
                "Hackathon": <FiAward className="text-indigo-500" />,
                "Workshop": <FiStar className="text-sky-500" />,
                "Sports": <FiActivity className="text-emerald-500" />
              };
              const colorMap: any = {
                "Hackathon": "border-indigo-500/20 hover:border-indigo-500/50",
                "Workshop": "border-sky-500/20 hover:border-sky-500/50",
                "Sports": "border-emerald-500/20 hover:border-emerald-500/50"
              };

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border bg-black/5 dark:bg-white/5 transition-colors ${colorMap[ach.type] || ""}`}
                >
                  <div className="p-3 bg-white dark:bg-black/20 rounded-lg shrink-0">
                    {iconMap[ach.type] || <FiAward />}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold">{ach.title}</h4>
                    <p className="text-sm text-textcol-light/70 dark:text-textcol-dark/70">{ach.description}</p>
                  </div>
                  <div className="shrink-0 text-sm font-mono text-textcol-light/50 dark:text-textcol-dark/50 hidden sm:block">
                    {ach.date}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
