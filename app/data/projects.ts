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
    file: "// company project · solo build · 1 year+",
    name: "Empa — WordPress Theme System",
    badges: [
      { label: "Company project", type: "company" },
      { label: "Architect", type: "lead" },
      { label: "Deployed", type: "live" },
    ],
    highlight: "Built from scratch over 1+ year — a clean-slate WordPress theme where the editor starts with only p and h1, everything else added on demand.",
    description: "A React-powered block manager handles remote block registration, dependency resolution between patterns, and usage tracking across every page, with full multisite and child theme support.",
    stack: ["React", "WordPress", "Gutenberg", "PHP", "ACF", "Multisite"],
    links: [
      { label: "→ case_study", href: "/empa" },
      { label: "// code private — company property", href: "#", private: true },
    ],
  },
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
      { label: "→ case_study", href: "/godoc" },
    ],
  },
  {
    file: "// personal project · full stack + payments",
    name: "EcoRides — Vehicle Rental Marketplace",
    badges: [
      { label: "Live", type: "live" },
      { label: "Next.js", type: "lead" },
      { label: "Stripe", type: "lead" },
    ],
    highlight: "Dual-sided marketplace where owners list vehicles and renters book them — the entire data layer runs on Next.js Server Actions instead of a separate REST API.",
    description: "Calendar-based availability, Stripe Embedded Checkout, and per-vehicle reviews on the renter side, with a role-based admin dashboard tracking bookings and revenue across the platform.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Clerk", "Stripe"],
    links: [
      { label: "↗ live demo", href: "https://ecorides-nu.vercel.app/" },
      { label: "⌥ github", href: "https://github.com/ajkacca457/ecorides" },
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
    highlight: "Full booking platform for live theatre and events, with real-time seat holds during checkout so two people can never buy the same seat.",
    description: "Stripe handles payment end-to-end, with booking confirmation logic and an admin dashboard for managing shows, showtimes, and reservations.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT Auth"],
    links: [
      { label: "↗ live demo", href: "https://curtain-call-front.vercel.app/" },
      { label: "⌥ github", href: "https://github.com/ajkacca457/curtain-call" },
    ],
  },
  {
    file: "// personal project · full stack",
    name: "Home Accounts — Finance Tracker",
    badges: [
      { label: "Live", type: "live" },
      { label: "MERN", type: "lead" },
      { label: "Solo project", type: "lead" },
    ],
    highlight: "Personal finance tracker built to replace a spreadsheet habit — income and expense logging with a statistics dashboard for a clearer monthly picture.",
    description: "Currently upgraded with improved data visualisation, custom budget categories, and a cleaner UI pass across the whole app.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Recharts"],
    links: [
      { label: "↗ live demo", href: "https://home-accounts-front.vercel.app/" },
      { label: "⌥ github", href: "https://github.com/ajkacca457/home_accounts" },
    ],
  }
];