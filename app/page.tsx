import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Resume } from "@/components/sections/Resume";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <StatsBanner />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
