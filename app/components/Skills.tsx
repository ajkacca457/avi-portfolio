import { skillColumns } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-vsc-border-light">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">

        {/* Section header */}
        <div className="text-vsc-green text-xs font-mono mb-1">
          {`// skills.ts`}
        </div>
        <div className="text-vsc-yellow text-xl font-mono mb-8">
          const skills = {"{"}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillColumns.map((col) => (
            <div
              key={col.comment}
              className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-5"
            >
              {/* Column title */}
              <div className="text-vsc-green text-xs font-mono mb-4 pb-3 border-b border-vsc-border">
                {col.comment}
              </div>

              {/* Skills */}
              <div className="flex flex-col">
                {col.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-2 py-1.5 text-xs font-mono"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        skill.active ? "bg-vsc-teal" : "bg-vsc-faint"
                      }`}
                    />
                    <span className={skill.active ? "text-vsc-muted" : "text-vsc-faint"}>
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Security note */}
              {col.note && (
                <div className="mt-4 bg-[#1a2a1a] border border-[#2a4a2a] rounded-sm p-3 text-xs font-mono text-vsc-muted leading-relaxed">
                  <span className="text-vsc-teal">MSc Cybersecurity</span>
                  {" — JAMK University of Applied Sciences, 2025–. Security column expands as studies progress."}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-vsc-muted text-xs font-mono mt-4">{"}"}</div>

      </div>
    </section>
  );
}