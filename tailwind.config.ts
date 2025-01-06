import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        poppins: ["var(--font-poppins)", "sans-serif"], 
        mono: ["var(--font-geist-mono)"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        superbold: "900",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        fototim1: "url('/assets/fototim1.jpeg')",
        fototim2: "url('/assets/fototim2.jpeg')",
        fototim3: "url('/assets/fototim3.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;