import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Earth tones from the design
        "earth-green-1": "#a5b27c",
        "earth-green-2": "#bdc991",
        "earth-green-3": "#ccd5ae",
        "earth-green-4": "#ccc48e",
        "earth-green-5": "#e7edd6",
        "earth-green-6": "#e9edc9",
        "earth-green-7": "#f8faeb",
        "earth-cream-1": "#cab686",
        "earth-cream-2": "#eac7a5",
        "earth-cream-3": "#faedcd",
        "earth-cream-4": "#faf5e9",
        "earth-cream-5": "#fcfbf0",
        "earth-cream-6": "#fefae0",
        "earth-brown": "#a97746",
        "earth-tan": "#d4a373",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
