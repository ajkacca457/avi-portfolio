import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vsc-bg": "#1e1e1e",
        "vsc-bg-secondary": "#252526",
        "vsc-bg-tertiary": "#2d2d2d",
        "vsc-border": "#3e3e42",
        "vsc-border-light": "#2d2d2d",
        "vsc-blue": "#569cd6",
        "vsc-orange": "#ce9178",
        "vsc-teal": "#4ec9b0",
        "vsc-green": "#6a9955",
        "vsc-yellow": "#dcdcaa",
        "vsc-purple": "#c586c0",
        "vsc-red": "#f44747",
        "vsc-light-blue": "#9cdcfe",
        "vsc-text": "#d4d4d4",
        "vsc-muted": "#858585",
        "vsc-faint": "#3e3e42",
        "vsc-statusbar": "#007acc",
        "vsc-selection": "#264f78",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Consolas", "Courier New", "monospace"],
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": "11px",
        xs: "12px",
        sm: "13px",
        base: "14px",
      },
    },
  },
  plugins: [],
};

export default config;