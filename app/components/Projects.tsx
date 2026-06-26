import FadeIn from "./animations/FadeIn";
import { projects, type Project } from "../data/projects";


const badgeStyles: Record<string, string> = {
    funded: "bg-[#0d2a0d] border border-[#2a5a2a] text-vsc-teal",
    lead: "bg-[#0a1a2e] border border-[#1a4a7e] text-vsc-blue",
    live: "bg-[#1a0a2e] border border-[#3a1a5e] text-vsc-purple",
    wip: "bg-[#1c1300] border border-[#4a3500] text-vsc-yellow",
    company: "bg-[#0d1a0d] border border-[#2a3a2a] text-vsc-teal",
    ai: "bg-[#1a0a1a] border border-[#4a2a4a] text-vsc-purple",
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-6 hover:border-vsc-blue transition-colors duration-150">

            {/* File comment */}
            <div className="text-vsc-muted text-xs mb-3 font-mono">{project.file}</div>

            {/* Name */}
            <div className="text-vsc-yellow text-base font-mono mb-3">{project.name}</div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge) => (
                    <span
                        key={badge.label}
                        className={`text-xs px-2 py-0.5 rounded-sm font-mono ${badgeStyles[badge.type]}`}
                    >
                        {badge.label}
                    </span>
                ))}
            </div>

            {/* Highlight */}
            {project.highlight && (
                <div className="bg-[#1a2a1a] border-l-2 border-vsc-teal rounded-r-sm px-4 py-3 mb-4 text-vsc-muted text-sm font-sans leading-relaxed">
                    <strong className="text-vsc-text font-medium">{project.highlight.split(" and ")[0]}</strong>
                    {project.highlight.includes(" and ") && " and " + project.highlight.split(" and ").slice(1).join(" and ")}
                </div>
            )}

            {/* Description */}
            {project.description && (
                <p className="text-vsc-muted text-sm font-sans leading-relaxed mb-4">
                    {project.description}
                </p>
            )}

            {/* Features */}
            {project.features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                    {project.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-vsc-muted font-sans">
                            <span className="w-1 h-1 rounded-full bg-vsc-teal flex-shrink-0 mt-1.5" />
                            {feat}
                        </div>
                    ))}
                </div>
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="bg-vsc-bg border border-vsc-border text-vsc-light-blue text-xs px-2 py-0.5 rounded-sm font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-xs font-mono transition-colors duration-150 ${link.private
                            ? "text-vsc-muted cursor-default pointer-events-none"
                            : "text-vsc-blue hover:text-vsc-light-blue"
                            }`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="px-4 sm:px-8 md:px-12 lg:px-16 py-16 border-b border-vsc-border-light">
            <div className="container-main px-4 sm:px-6 lg:px-8 py-16 md:py-24">


                {/* Section header */}
                <FadeIn>
                    <div className="text-vsc-green text-xs font-mono mb-1">
                        {`// featured_projects.tsx`}
                    </div>
                    <div className="text-vsc-yellow text-xl font-mono mb-1">
                        const projects = [
                    </div>
                    <p className="text-vsc-muted text-sm font-sans mb-8">
                        Personal,startup and company projects.
                    </p>
                </FadeIn>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <FadeIn key={project.name} delay={index * 0.1}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>

                <div className="text-vsc-yellow text-xl font-mono mt-4">];</div>
            </div>

        </section>
    );
}