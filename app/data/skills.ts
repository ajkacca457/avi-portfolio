export type Skill = {
  label: string;
  active: boolean;
};

export type SkillColumn = {
  comment: string;
  skills: Skill[];
  note?: string;
};

export const skillColumns: SkillColumn[] = [
  {
    comment: "// frontend",
    skills: [
      { label: "React / Next.js", active: true },
      { label: "TypeScript", active: true },
      { label: "Gutenberg blocks", active: true },
      { label: "Tailwind CSS", active: true },
      { label: "CSS / SCSS", active: true },
      { label: "Bootstrap", active: true },
      { label: "React Native", active: true },
      { label: "WordPress theme architecture", active: true },
      { label: "Vue.js", active: false },
    ],
  },
  {
    comment: "// backend & data",
    skills: [
      { label: "Node.js / Express", active: true },
      { label: "ASP.NET Core", active: true },
      { label: "PHP", active: true },
      { label: "Ruby on Rails", active: true },
      { label: "MongoDB / Mongoose", active: true },
      { label: "Supabase / Postgres", active: true },
      { label: "REST API design", active: true },
      { label: "PHP / WordPress REST API", active: true },
      { label: "SQL Server", active: false },
    ],
  },
  {
    comment: "// ai & security",
    skills: [
      { label: "CrewAI / multi-agent", active: true },
      { label: "Azure Cognitive (TTS/STT)", active: true },
      { label: "Vector DB / embeddings", active: true },
      { label: "JWT / Auth flows", active: true },
      { label: "Azure deployment", active: true },
      { label: "OWASP fundamentals", active: false },
      { label: "Network security", active: false },
    ],
    note: "MSc Cybersecurity — JAMK University of Applied Sciences, 2025–. Security column expands as studies progress.",
  },
];