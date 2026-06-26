export type Project = {
  file: string;
  name: string;
  badges: { label: string; type: "funded" | "lead" | "live" | "wip" | "company" | "ai" }[];
  highlight?: string;
  description: string;
  features?: string[];
  stack: string[];
  links: { label: string; href: string; private?: boolean }[];
};

export const projects: Project[] = [
  {
    file: "// startup · part time · tech lead",
    name: "GoDoc — Fintech Document Courier",
    badges: [
      { label: "€10k Funded", type: "funded" },
      { label: "CTO", type: "lead" },
      { label: "Live", type: "live" },
    ],
    highlight: "Rescued a failing codebase and became sole technical lead. Rebuilt and now runs the full stack across API, web client, and mobile app.",
    description: "GoDoc connects banks with courier networks to handle physical document delivery securely. I own all technical decisions, architecture, and delivery — from backend API design to mobile release.",
    stack: ["ASP.NET", "React", "React Native", "SQL Server", "REST API", "Azure"],
    links: [
      { label: "↗ godoccourier.com", href: "https://godoccourier.com" },
      { label: "→ case_study.md", href: "#" },
    ],
  },
  {
    file: "// company project · solo build · 1 year+",
    name: "Empa — WordPress Theme System",
    badges: [
      { label: "Company project", type: "company" },
      { label: "Architect", type: "lead" },
      { label: "Deployed", type: "live" },
    ],
    highlight: "Built from scratch over 1+ year. Clean-slate WordPress theme — editor starts with only p and h1. Everything else is on-demand via a React-powered block manager.",
    description: "",
    features: [
      "Remote block library + auto-registration",
      "Pattern dependency resolver",
      "Blocked install until deps satisfied",
      "Block usage tracking across pages",
      "React + ACF block support",
      "Multisite + child theme creator",
    ],
    stack: ["React", "WordPress", "Gutenberg", "PHP", "ACF", "REST API", "Multisite"],
    links: [
      { label: "→ case_study.md", href: "#" },
      { label: "// code private — company property", href: "#", private: true },
    ],
  },
  {
    file: "// personal project · full stack",
    name: "Home Accounts — Finance Tracker",
    badges: [
      { label: "Live", type: "live" },
      { label: "MERN", type: "lead" },
    ],
    description: "Personal finance tracker with authentication, income/expense logging, and statistics dashboard. Upgrading with improved data visualisation, budget categories, and cleaner UI.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Recharts"],
    links: [
      { label: "↗ live demo", href: "https://home-accounts-front.vercel.app/" },
      { label: "⌥ github", href: "https://github.com/ajkacca457/home_accounts" },
    ],
  },
  {
    file: "// personal project · full stack + payments",
    name: "CurtainCalls — Event Booking Platform",
    badges: [
      { label: "Live", type: "live" },
      { label: "MERN", type: "lead" },
      { label: "Stripe", type: "lead" },
    ],
    description: "Full MERN booking platform for live events — seat selection, Stripe payment integration, booking confirmation logic, and admin dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT Auth"],
    links: [
      { label: "↗ live demo", href: "https://curtain-call-front.vercel.app/" },
      { label: "⌥ github", href: "https://github.com/ajkacca457/curtain-call" },
    ],
  }
];