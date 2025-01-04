import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'fototim1': "url('/assets/fototim1.jpeg')",
        'fototim2': "url('/assets/fototim2.jpeg')",
        'fototim3': "url('/assets/fototim3.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;