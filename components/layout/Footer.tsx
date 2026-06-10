import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-primary/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col items-start">
            <Link href="#" className="flex items-center gap-2 group mb-4">
              <span className="font-display font-bold text-2xl tracking-tight">S Muhilan</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </Link>
            <p className="text-textcol-light/70 dark:text-textcol-dark/70 text-sm max-w-xs">
              Building scalable systems from Chennai to the cloud. Let's create something amazing together.
            </p>
          </div>

          <div className="flex flex-col md:items-center">
            <h4 className="font-bold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-sm text-textcol-light/70 dark:text-textcol-dark/70">
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#experience" className="hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col md:items-end">
            <h4 className="font-bold mb-4 font-display">Connect</h4>
            <div className="flex items-center gap-4 mb-6">
              <a href="https://github.com/Muhil-18" target="_blank" rel="noreferrer" className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/muhilan-sivaraman" target="_blank" rel="noreferrer" className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
            <Button variant="primary" size="sm" className="gap-2" asChild>
              <a href="/Muhilan_S_Resume.pdf" download>
                <FiDownload size={16} /> Download Resume
              </a>
            </Button>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-black/5 dark:border-white/5 text-xs text-textcol-light/50 dark:text-textcol-dark/50">
          © 2026 S Muhilan. Built with Next.js & deployed on Vercel.
        </div>
      </div>
    </footer>
  );
}
