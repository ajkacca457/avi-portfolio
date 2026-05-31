import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-8 md:px-12 lg:px-16 py-16 border-b border-vsc-border-light">

      {/* Section header */}
      <div className="text-vsc-green text-xs font-mono mb-1">
        {`// experience.ts`}
      </div>
      <div className="text-vsc-yellow text-xl font-mono mb-8">
        const experience = [
      </div>

      {/* Experience list */}
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-6 py-6 border-b border-vsc-border-light last:border-b-0"
          >
            {/* Date + type */}
            <div>
              <div className="text-vsc-muted text-xs font-mono">{exp.date}</div>
              <div className="text-vsc-faint text-xs font-mono mt-1">{exp.type}</div>
            </div>

            {/* Content */}
            <div>
              {/* Role */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-vsc-yellow text-sm font-mono">{exp.role}</span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 bg-[#0d2a0d] border border-[#2a4a2a] text-vsc-teal text-xs px-2 py-0.5 rounded-sm font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-vsc-teal" />
                    current
                  </span>
                )}
                {exp.closed && (
                  <span className="bg-[#2a0d0d] border border-[#4a2a2a] text-vsc-red text-xs px-2 py-0.5 rounded-sm font-mono">
                    closed
                  </span>
                )}
              </div>

              {/* Company */}
              <div className="text-vsc-teal text-sm font-mono mb-3">{exp.company}</div>

              {/* Description */}
              <p className="text-vsc-muted text-sm font-sans leading-relaxed mb-3">
                {exp.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-vsc-bg border border-vsc-border text-vsc-light-blue text-xs px-2 py-0.5 rounded-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-vsc-muted text-xs font-mono mt-4">];</div>

    </section>
  );
}