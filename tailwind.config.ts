import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        surface: {
          light: "var(--color-surface-light)",
          dark: "var(--color-surface-dark)",
        },
        textcol: {
          light: "var(--color-text-light)",
          dark: "var(--color-text-dark)",
        }
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
