export type Experience = {
  date: string;
  type: string;
  role: string;
  company: string;
  description: string;
  stack: string[];
  current?: boolean;
  closed?: boolean;
};

export const experiences: Experience[] = [
  {
    date: "2023 – Present",
    type: "// full time",
    role: "Full-Stack Developer",
    company: "JJ-NET OY · Finland",
    description:
      "Maintaining and developing 150+ WordPress sites for major Finnish clients including Miltton, Castrén, Netox, Proventia, BusinessNokia. Monthly maintenance cycles, legacy codebase debugging, feature development. Built custom React/Gutenberg systems for Helsinki City and the Finnish Museums Association. Solo-architected the Empa theme system over 1+ year.",
    stack: ["React", "Gutenberg", "TypeScript", "PHP", "WordPress", "Multisite"],
    current: true,
  },
  {
    date: "2024 – Present",
    type: "// part time · startup",
    role: "Tech Lead / CTO",
    company: "GoDoc · Helsinki (€10k funded fintech)",
    description:
      "Sole technical lead. Rescued failing codebase left by previous team. Rebuilt and maintains ASP.NET API, React web client, and React Native mobile app. Owns all architecture, deployment, and technical decisions.",
    stack: ["ASP.NET", "React", "React Native", "SQL Server", "Azure"],
    current: true,
  },
  {
    date: "Oct 2024 – Oct 2025",
    type: "// part time · startup",
    role: "Full-Stack Developer",
    company: "Aika · AI Chatbot Startup · Helsinki",
    description:
      "Joined as UI developer, scope expanded rapidly. Implemented Microsoft Azure TTS/STT. Redesigned entire UI. Stepped in when lead backend architect left — restored system to working order. Built multi-agent AI prototype using CrewAI and vector DB for investor demonstrations.",
    stack: ["React", "Node.js", "Azure TTS/STT", "CrewAI", "FAISS", "Python"],
    closed: true,
  },
  {
    date: "2021 – 2023",
    type: "// full time",
    role: "Full-Stack Developer",
    company: "Miltton OY · Finland",
    description:
      "Headless CMS architectures and custom WordPress solutions for corporate clients. Delivered rightware.com (Vue + headless WordPress) and multiple client sites with custom Gutenberg block development.",
    stack: ["Vue", "React", "WordPress", "Headless CMS", "Node.js"],
  },
];