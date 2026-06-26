"use client";
import FadeIn from "./animations/FadeIn";
import CountUp from "./animations/CountUp";
import TypeWriter from "./animations/TypeWriter";
import DotGrid from "./animations/DotGrid";


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
        <section className="border-b border-vsc-border-light relative overflow-hidden">

            {/* Dot grid background */}
            <DotGrid />

            <div className="container-main px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">

                {/* Available badge */}
                <FadeIn delay={0}>
                    <div className="inline-flex items-center gap-2 bg-[#0d2a0d] border border-[#2a4a2a] rounded-sm px-3 py-1.5 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-vsc-teal flex-shrink-0" />
                        <span className="text-vsc-green text-xs">
                            {`// open to new roles · onsite & remote`}
                        </span>
                    </div>
                </FadeIn>

                {/* Code block */}
                <FadeIn delay={0.1}>
                    <div className="mb-8 space-y-0.5">
                        {[
                            { ln: "1", content: <><span className="text-vsc-blue">const</span> <span className="text-vsc-yellow">developer</span> <span className="text-vsc-text">=</span> <span className="text-vsc-orange">{"{"}</span></> },
                            { ln: "2", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">name</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">&quot;Avijit Karmaker&quot;</span><span className="text-vsc-text">,</span></> },
                            { ln: "3", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">title</span><span className="text-vsc-text">:</span> <TypeWriter /><span className="text-vsc-text">,</span></> },
                            { ln: "4", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">location</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">&quot;Helsinki, Finland&quot;</span><span className="text-vsc-text">,</span></> },
                            { ln: "5", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">dayJob</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">&quot;Full-Stack Developer @ JJ-NET OY&quot;</span><span className="text-vsc-text">,</span></> },
                            { ln: "6", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">techLead</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">&quot;Tech Lead @ GoDoc (€10k funded fintech)&quot;</span><span className="text-vsc-text">,</span></> },
                            { ln: "7", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">studying</span><span className="text-vsc-text">:</span> <span className="text-vsc-orange">&quot;MSc Cybersecurity, JAMK 2025–&quot;</span><span className="text-vsc-text">,</span></> },
                            { ln: "8", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">yearsExperience</span><span className="text-vsc-text">:</span> <span className="text-vsc-purple">4</span><span className="text-vsc-text">,</span></> },
                            { ln: "9", content: <>&nbsp;&nbsp;<span className="text-vsc-teal">sitesMaintained</span><span className="text-vsc-text">:</span> <span className="text-vsc-purple">150</span><span className="text-vsc-text">,</span></> },
                            { ln: "10", content: <><span className="text-vsc-orange">{"}"}</span><span className="text-vsc-text">;</span></> },
                        ].map((line) => (
                            <div key={line.ln} className="flex items-baseline gap-0 text-base md:text-lg leading-8">
                                <span className="text-vsc-faint text-xs w-8 text-right mr-5 select-none flex-shrink-0">
                                    {line.ln}
                                </span>
                                <span>{line.content}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Location chips */}
                <FadeIn delay={0.2}>
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
                </FadeIn>

                {/* Tech tags */}
                <FadeIn delay={0.3}>
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
                </FadeIn>

                {/* CTA buttons */}
                <FadeIn delay={0.4}>
                    <div className="flex flex-wrap gap-3 mb-12">
                        <a
                            href="#projects"
                            className="bg-[#0e639c] hover:bg-[#1177bb] text-vsc-text text-sm px-5 py-2 rounded-sm transition-colors duration-150 font-mono"
                        >
                            viewFeaturedProjects()
                        </a>
                        <a
                            href="#clients"
                            className="bg-[#0e639c] hover:bg-[#1177bb] text-vsc-text text-sm px-5 py-2 rounded-sm transition-colors duration-150 font-mono"
                        >
                            viewClientProjects()
                        </a>
                    </div>
                </FadeIn>

                {/* Stats */}
                <FadeIn delay={0.5}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <CountUp value={stat.value} />
                                <div className="text-xs text-vsc-muted mt-1 font-sans">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}