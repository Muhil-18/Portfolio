"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Get In Touch" />

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Open to opportunities</span>
              </div>

              <p className="text-textcol-light/80 dark:text-textcol-dark/80 text-lg mb-8">
                Whether you have an internship opportunity, a project idea, or just want to connect — my inbox is always open.
              </p>

              <div className="space-y-6 mb-10">
                <a href="mailto:muhilansivaraman@gmail.com" className="flex items-center gap-4 text-textcol-light/80 dark:text-textcol-dark/80 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FiMail size={20} className="group-hover:text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-textcol-light/50 dark:text-textcol-dark/50 mb-1">Email</div>
                    <div className="font-medium">muhilansivaraman@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-textcol-light/80 dark:text-textcol-dark/80">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-textcol-light/50 dark:text-textcol-dark/50 mb-1">Location</div>
                    <div className="font-medium">Chennai, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/5">
                <a href="https://github.com/Muhil-18" target="_blank" rel="noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors hover:scale-110">
                  <FiGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/muhilan-sivaraman" target="_blank" rel="noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors hover:scale-110">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                    placeholder="Hello Muhilan, I'd like to talk about..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full gap-2"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p className="text-accent text-center text-sm font-medium mt-4">
                    Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center text-sm font-medium mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
