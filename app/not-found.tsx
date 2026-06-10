import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FiCloudDrizzle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface-light dark:bg-surface-dark text-textcol-light dark:text-textcol-dark p-6 text-center">
      <div className="mb-8 animate-bounce">
        <FiCloudDrizzle className="text-primary opacity-80" size={120} />
      </div>
      <h1 className="text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">404</h1>
      <p className="text-xl md:text-2xl font-mono text-textcol-light/80 dark:text-textcol-dark/80 mb-8 max-w-md">
        Page not found in any availability zone.
      </p>
      <Button variant="primary" asChild>
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
}
