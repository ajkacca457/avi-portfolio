"use client";
import FadeIn from "./animations/FadeIn";

const paragraphs = [
  "I got into development because I like understanding how things work under the hood — and fixing them when they don't. Over four years in Finland I've shipped custom WordPress and React systems for organisations like Helsinki City, built a funded fintech product from the ground up, and delivered 25+ complex client sites from scratch alongside maintaining 150+ production WordPress sites.",
  "The work I'm most proud of tends to be the unglamorous kind — rescuing a codebase nobody else wanted to touch, debugging a legacy system at midnight, building a theme architecture that makes clients' lives easier. That's where I do my best thinking. Alongside my day job I've worked across multiple startups — stepping in as tech lead at a funded fintech, keeping an AI chatbot platform running after the lead architect left, and building a multi-agent AI prototype for investor demos.",
  "Currently leading engineering at GoDoc alongside my day job, and starting an MSc in Cybersecurity at JAMK. Looking for a team where I can keep building things that matter.",
];

const highlights = [
  { value: "25+", label: "sites built at JJ-NET" },
  { value: "3", label: "startups worked with" },
  { value: "1+", label: "year building Empa" },
  { value: "4+", label: "years in Finland" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-vsc-border-light">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">

        {/* Section header */}
        <FadeIn>
          <div className="text-vsc-green text-xs font-mono mb-1">
            {`// about.ts`}
          </div>
          <div className="text-vsc-yellow text-xl font-mono mb-8">
            const about = {"{"}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — multi-line comment block */}
          <div>
            {/* Opening comment */}
            <FadeIn delay={0.1}>
              <div className="text-vsc-muted text-xs font-mono mb-3">
                {"/*"}
              </div>
            </FadeIn>

            {/* Paragraphs */}
            {paragraphs.map((para, index) => (
              <FadeIn key={index} delay={0.15 + index * 0.1}>
                <p className="text-vsc-muted text-xs font-mono leading-6 mb-4 pl-4 border-l border-vsc-border">
                  <span className="text-vsc-faint mr-2">*</span>
                  <span className="font-sans text-sm text-vsc-muted leading-relaxed">
                    {para}
                  </span>
                </p>
              </FadeIn>
            ))}

            {/* Closing comment */}
            <FadeIn delay={0.5}>
              <div className="text-vsc-muted text-xs font-mono mt-2">
                {"*/"}
              </div>
            </FadeIn>
          </div>

          {/* Right — highlights + quick facts */}
          <div className="flex flex-col gap-6">

            {/* Highlight stats */}
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-4 hover:border-vsc-blue transition-colors duration-150"
                  >
                    <div className="text-2xl text-vsc-teal font-mono mb-1">{h.value}</div>
                    <div className="text-xs text-vsc-muted font-sans">{h.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Currently block */}
            <FadeIn delay={0.3} direction="left">
              <div className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-5">
                <div className="text-vsc-green text-xs font-mono mb-4 pb-3 border-b border-vsc-border">
                  {`// currently`}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vsc-teal flex-shrink-0 mt-1.5" />
                    <span className="text-xs font-sans text-vsc-muted leading-relaxed">
                      Tech Lead / CTO at <span className="text-vsc-teal font-mono">GoDoc</span> — funded fintech, Helsinki
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vsc-teal flex-shrink-0 mt-1.5" />
                    <span className="text-xs font-sans text-vsc-muted leading-relaxed">
                      Full-Stack Developer at <span className="text-vsc-teal font-mono">JJ-NET OY</span> — building & maintaining 150+ sites
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vsc-blue flex-shrink-0 mt-1.5" />
                    <span className="text-xs font-sans text-vsc-muted leading-relaxed">
                      Starting <span className="text-vsc-blue font-mono">MSc Cybersecurity</span> at JAMK University, 2025
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vsc-green flex-shrink-0 mt-1.5" />
                    <span className="text-xs font-sans text-vsc-muted leading-relaxed">
                      <span className="text-vsc-green font-mono">Open to roles</span> — Finland onsite, remote across Europe
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Outside work */}
            <FadeIn delay={0.4} direction="left">
              <div className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-5">
                <div className="text-vsc-green text-xs font-mono mb-4 pb-3 border-b border-vsc-border">
                  {`// outside_work`}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AI tooling", "multi-agent systems", "cybersecurity", "open source", "side projects"].map((item) => (
                    <span
                      key={item}
                      className="bg-vsc-bg border border-vsc-border text-vsc-light-blue text-xs px-2 py-0.5 rounded-sm font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="text-vsc-yellow text-xl font-mono mt-8">{"}"}</div>
        </FadeIn>

      </div>
    </section>
  );
}