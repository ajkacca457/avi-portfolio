"use client";

const locationTargets = [
    { flag: "🇫🇮", country: "Finland", type: "onsite or remote", onsite: true },
    { flag: "🇩🇪", country: "Germany", type: "remote", onsite: false },
    { flag: "🇳🇴", country: "Norway", type: "remote", onsite: false },
    { flag: "🇸🇪", country: "Sweden", type: "remote", onsite: false },
    { flag: "🇬🇧", country: "UK", type: "remote", onsite: false },
    { flag: "🇩🇰", country: "Denmark", type: "remote", onsite: false },
];

const techTags = [
    "React", "Next.js", "TypeScript", "Node.js",
    "ASP.NET", "MongoDB", "Supabase", "WordPress/Gutenberg",
    "CrewAI", "Azure AI",
];

const stats = [
    { value: "4+", label: "years production React" },
    { value: "€10k", label: "funded startup (GoDoc)" },
    { value: "150+", label: "client sites maintained" },
    { value: "EEA", label: "Finnish citizen · no visa needed" },
];

export default function Hero() {
    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 border-b border-vsc-border-light">
            <div className="container-main px-4 sm:px-6 lg:px-8 py-16 md:py-24">


                {/* Available badge */}
                <div className="inline-flex items-center gap-2 bg-[#0d2a0d] border border-[#2a4a2a] rounded-sm px-3 py-1.5 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-vsc-teal flex-shrink-0" />
                    <span className="text-vsc-green text-xs">
                        {`// open to new roles · onsite & remote`}
                    </span>
                </div>

                {/* Code block */}
                <div className="mb-8 space-y-0.5">
                    {[
                        { ln: "1", content: <><span className="text-vsc-blue">const</span> <span className="text-vsc-yellow">developer</span> <span className="text-vsc-text">=</span> <span className="text-vsc-orange">{"{"}</span></> },
                        { ln: "2", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">name</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">"Avijit Karmaker"</span><span className="text-vsc-text">,</span></> },
                        { ln: "3", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">title</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">"Full-Stack Developer & Tech Lead"</span><span className="text-vsc-text">,</span></> },
                        { ln: "4", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">location</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">"Helsinki, Finland"</span><span className="text-vsc-text">,</span></> },
                        { ln: "5", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">current</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">"Tech Lead @ GoDoc (€10k funded fintech)"</span><span className="text-vsc-text">,</span></> },
                        { ln: "6", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">studying</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">"MSc Cybersecurity, JAMK 2025–"</span><span className="text-vsc-text">,</span></> },
                        { ln: "7", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">yearsExperience</span><span className="text-vsc-text">:</span> <span className="text-vsc-purple">4</span><span className="text-vsc-text">,</span></> },
                        { ln: "8", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">sitesMaintained</span><span className="text-vsc-text">:</span> <span className="text-vsc-purple">150</span><span className="text-vsc-text">,</span></> },
                        { ln: "9", content: <><span className="text-vsc-orange">{"}"}</span><span className="text-vsc-text">;</span></> },
                    ].map((line) => (
                        <div key={line.ln} className="flex items-baseline gap-0 text-sm md:text-base leading-7">
                            <span className="text-vsc-faint text-xs w-8 text-right mr-5 select-none flex-shrink-0">
                                {line.ln}
                            </span>
                            <span>{line.content}</span>
                        </div>
                    ))}
                </div>

                {/* Location chips */}
                <div className="flex flex-wrap gap-2 mb-8 items-center">
                    <span className="text-vsc-muted text-xs mr-1">{`// open to:`}</span>
                    {locationTargets.map((loc) => (
                        <span
                            key={loc.country}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-mono ${loc.onsite
                                ? "bg-[#0d2a0d] border border-[#2a4a2a] text-vsc-teal"
                                : "bg-[#1a1a2e] border border-[#2d2d4a] text-vsc-blue"
                                }`}
                        >
                            <span>{loc.flag}</span>
                            <span>{loc.country}</span>
                            <span className="text-vsc-muted">— {loc.type}</span>
                        </span>
                    ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {techTags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-vsc-bg-secondary border border-vsc-border text-vsc-light-blue text-xs px-2.5 py-1 rounded-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 mb-12">
                    <a
                        href="#projects"
                        className="bg-[#0e639c] hover:bg-[#1177bb] text-vsc-text text-sm px-5 py-2 rounded-sm transition-colors duration-150 font-mono"
                    >
                        viewProjects()
                    </a>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-vsc-border hover:bg-vsc-bg-secondary text-vsc-text text-sm px-5 py-2 rounded-sm transition-colors duration-150 font-mono"
                    >
                        downloadCV()
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl text-vsc-teal font-mono">{stat.value}</div>
                            <div className="text-xs text-vsc-muted mt-1 font-sans">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}