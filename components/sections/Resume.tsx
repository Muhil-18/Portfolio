"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FiDownload, FiMaximize2 } from "react-icons/fi";
import { Card } from "@/components/ui/Card";

export function Resume() {
  return (
    <section id="resume" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <SectionHeading title="Resume" className="mb-0 !items-start" />
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Button variant="outline" asChild>
              <a href="/assets/resume/resume.pdf" target="_blank" rel="noreferrer">
                <FiMaximize2 /> View Full Screen
              </a>
            </Button>
            <Button variant="primary" asChild>
              <a href="/assets/resume/resume.pdf" download>
                <FiDownload /> Download Resume
              </a>
            </Button>
          </div>
        </div>

        <Card className="p-2 md:p-4 bg-white/5 dark:bg-white/5 border-black/10 dark:border-white/10 h-[600px] md:h-[800px] overflow-hidden">
          <iframe 
            src="/assets/resume/resume.pdf#toolbar=0" 
            className="w-full h-full rounded-lg border-0 bg-white"
            title="S Muhilan Resume"
          />
        </Card>
      </div>
    </section>
  );
}
