import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "S Muhilan | Cloud Engineer & CS Undergraduate",
  description: "Portfolio of S Muhilan — Cloud Engineer, AI enthusiast, and CS undergraduate at SRM IST Chennai. Explore projects in edge computing, ML, and data engineering.",
  keywords: "Cloud Engineer, AWS, Apache Spark, Edge Computing, Chennai, SRM IST, Python, Machine Learning",
  openGraph: {
    title: "S Muhilan | Cloud Engineer Portfolio",
    description: "Portfolio of S Muhilan — Cloud Engineer, AI enthusiast, and CS undergraduate at SRM IST Chennai.",
    url: "https://muhilan.vercel.app",
    siteName: "S Muhilan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-surface-light dark:bg-surface-dark text-textcol-light dark:text-textcol-dark transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen>
            {children}
          </LoadingScreen>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
