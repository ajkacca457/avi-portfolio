"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { label: "about.ts", href: "#about" },
    { label: "projects.tsx", href: "#projects" },
    { label: "experience.ts", href: "#experience" },
    { label: "skills.ts", href: "#skills" },
    { label: "contact.ts", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-vsc-bg-tertiary border-b border-vsc-border">
            <div className="container-main px-4 sm:px-6 lg:px-8">


                {/* Desktop nav */}
                <div className="flex items-stretch justify-between h-11">

                    {/* Logo */}
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            window.history.pushState(null, "", "/");
                        }}
                        className="flex items-center px-4 border-r border-vsc-border text-sm cursor-pointer hover:text-vsc-teal transition-colors duration-150"
                    >
                        <span className="text-vsc-muted">{"<"}</span>
                        <span className="text-vsc-yellow">Avijit</span>
                        <span className="text-vsc-muted">{" />"}</span>
                    </button>

                    {/* File tabs — hidden on mobile */}
                    <div className="hidden md:flex items-stretch flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 px-4 text-vsc-muted text-xs border-r border-vsc-border hover:text-vsc-text hover:bg-vsc-bg transition-colors duration-150 border-t-2 border-t-transparent hover:border-t-vsc-blue"
                            >
                                <span className="text-vsc-muted text-2xs">TS</span>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 px-4 ml-auto">
                        {/* CV button */}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:block text-vsc-teal border border-vsc-border text-xs px-3 py-1 rounded-sm hover:bg-vsc-bg transition-colors duration-150 font-mono"
                        >
                            $ download cv
                        </a>

                        {/* Hamburger — mobile only */}
                        <button
                            className="md:hidden text-vsc-muted hover:text-vsc-text transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                {menuOpen ? (
                                    <>
                                        <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="2" y1="4" x2="16" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <line x1="2" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="container-main px-4 sm:px-6 lg:px-8">

                    <div className="md:hidden border-t border-vsc-border bg-vsc-bg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-vsc-muted text-xs border-b border-vsc-border hover:text-vsc-text hover:bg-vsc-bg-secondary transition-colors duration-150"
                            >
                                <span className="text-vsc-faint text-2xs">TS</span>
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-3 text-vsc-teal text-xs hover:bg-vsc-bg-secondary transition-colors duration-150"
                        >
                            $ download cv
                        </a>
                    </div>
                </div>
            )}

        </header>
    );
}