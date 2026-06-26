// app/empa/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empa — Case Study | Avijit Karmaker",
  description:
    "How I solo-architected a custom WordPress theme system over 1+ year, used by major Finnish clients.",
};

const stack = [
  "React",
  "WordPress",
  "Gutenberg",
  "PHP",
  "ACF",
  "REST API",
  "Multisite",
  "TypeScript",
];

const features = [
  {
    id: "01",
    title: "Clean-slate editor",
    color: "text-vsc-blue",
    desc: "The editor starts with only p and h1. No default blocks, no noise. Every block is intentional — added on demand by the content editor, not dumped in by default.",
  },
  {
    id: "02",
    title: "React block manager",
    color: "text-vsc-teal",
    desc: "A React-powered admin panel lets editors browse and install blocks from a remote library. Blocks are registered automatically on install — no manual PHP required.",
  },
  {
    id: "03",
    title: "Pattern dependency resolver",
    color: "text-vsc-yellow",
    desc: "Gutenberg patterns can declare block dependencies. If a required block is not installed, the pattern installation is blocked until the dependency is satisfied — automatically.",
  },
  {
    id: "04",
    title: "Block usage tracking",
    color: "text-vsc-purple",
    desc: "The system tracks which blocks are used across which pages. Before removing a block, editors can see exactly where it is in use — preventing silent content breakage.",
  },
  {
    id: "05",
    title: "React + ACF block support",
    color: "text-vsc-orange",
    desc: "Blocks can be built in React with ACF field groups, or as standard Gutenberg blocks. Both are first-class citizens in the block manager.",
  },
  {
    id: "06",
    title: "Multisite + child theme creator",
    color: "text-vsc-light-blue",
    desc: "Empa supports WordPress Multisite out of the box. A built-in child theme creator lets new sites spin up with a consistent base while maintaining independence.",
  },
];

const timeline = [
  { phase: "Architecture design", detail: "Mapped the full block system — library, manager, resolver, tracking" },
  { phase: "Core theme build", detail: "Clean-slate WordPress theme with minimal editor defaults" },
  { phase: "React admin panel", detail: "Block manager UI — browse, install, remove, track" },
  { phase: "Dependency resolver", detail: "Pattern-level dependency logic with install blocking" },
  { phase: "Block usage tracker", detail: "Cross-page tracking to prevent silent content breakage" },
  { phase: "Multisite support", detail: "Network-level block sharing + child theme creator" },
  { phase: "Production deployment", detail: "Live across major Finnish client sites via JJ-NET OY" },
];

const clients = [
  { name: "Helsinki City", detail: "Custom Gutenberg blocks for kettutesti.hel.fi" },
  { name: "Finnish Museums Association", detail: "Full site build — museoliitto.fi" },
  { name: "Netox", detail: "All custom Gutenberg blocks — netox.com" },
  { name: "Enjoynature.fi", detail: "Full site + booking system" },
  { name: "150+ sites", detail: "Maintained via JJ-NET OY infrastructure" },
];

const steps = [
  {
    step: "01",
    title: "Editor opens WordPress",
    detail: "Sees only p and h1. No block noise. Clean slate.",
    color: "text-vsc-blue",
  },
  {
    step: "02",
    title: "Editor opens Block Manager",
    detail: "React UI lists all available blocks from the remote library with descriptions and previews.",
    color: "text-vsc-teal",
  },
  {
    step: "03",
    title: "Editor installs a block",
    detail: "Block is registered automatically. No PHP changes, no developer needed.",
    color: "text-vsc-yellow",
  },
  {
    step: "04",
    title: "Editor installs a pattern",
    detail: "Dependency resolver checks if required blocks are installed. Blocks with missing deps are blocked until resolved.",
    color: "text-vsc-purple",
  },
  {
    step: "05",
    title: "Editor removes a block",
    detail: "Usage tracker shows which pages use it. If pages depend on it, removal is surfaced before it happens.",
    color: "text-vsc-orange",
  },
];

const outcomes = [
  {
    key: "scope",
    value: "1 system",
    desc: "One theme architecture replaces dozens of one-off solutions. Any new client site extends Empa rather than starting from scratch.",
    color: "text-vsc-teal",
  },
  {
    key: "ownership",
    value: "solo",
    desc: "Designed, architected, and built entirely alone over 1+ year — no team, no spec, no prior system to reference.",
    color: "text-vsc-blue",
  },
  {
    key: "reach",
    value: "150+",
    desc: "Sites in the JJ-NET OY ecosystem. Major Finnish clients including Helsinki City and the Finnish Museums Association.",
    color: "text-vsc-yellow",
  },
  {
    key: "codeVisibility",
    value: "private",
    desc: "Code is company property and cannot be open-sourced. The case study documents the architecture and technical decisions.",
    color: "text-vsc-muted",
  },
];

export default function EmpaCaseStudy() {
  return (
    <main className="min-h-screen bg-vsc-bg font-mono text-vsc-text">

      {/* ── Top bar ── */}
      <div className="border-b border-vsc-border bg-vsc-bg-secondary px-6 py-2 flex items-center justify-between text-xs text-vsc-muted">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hover:text-vsc-text transition-colors flex items-center gap-1"
          >
            <span className="text-vsc-blue">←</span>
            <span>avijitkarmaker.com</span>
          </Link>
          <span className="text-vsc-border">/</span>
          <span className="text-vsc-teal">empa</span>
          <span className="text-vsc-border">/</span>
          <span className="text-vsc-orange">case_study.tsx</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-vsc-yellow">● Company project</span>
          <span>JJ-NET OY</span>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="border-b border-vsc-border bg-vsc-bg-secondary flex text-xs">
        <div className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border bg-vsc-bg text-vsc-text border-t-2 border-t-vsc-blue">
          <span className="text-vsc-teal">TSX</span>
          <span>case_study.tsx</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border text-vsc-muted hover:text-vsc-text transition-colors">
          <span className="text-vsc-blue">TS</span>
          <span>architecture.ts</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 text-vsc-muted hover:text-vsc-text transition-colors">
          <span className="text-vsc-orange">PHP</span>
          <span>block-manager.php</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── Hero ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-4">
            {"// company project · solo build · 1 year+ · JJ-NET OY"}
          </div>

          <h1 className="text-3xl md:text-4xl text-vsc-text font-mono mb-4 leading-tight">
            <span className="text-vsc-blue">const </span>
            <span className="text-vsc-yellow">project</span>
            <span className="text-vsc-text"> = </span>
            <span className="text-vsc-orange">&quot;Empa&quot;</span>
            <span className="text-vsc-text">;</span>
          </h1>

          <p className="text-vsc-muted text-sm mb-10 max-w-xl leading-relaxed">
            A custom WordPress theme system built solo from scratch over 1+ year at
            JJ-NET OY. Empa gives content editors a clean, intentional editing
            experience — blocks are installed on demand, patterns enforce their
            dependencies, and usage is tracked across pages. Now powering major
            Finnish client sites.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-vsc-border bg-vsc-border">
            {[
              { value: "1+", label: "year to build" },
              { value: "solo", label: "architect & developer" },
              { value: "150+", label: "sites in ecosystem" },
              { value: "live", label: "major Finnish clients" },
            ].map((s) => (
              <div key={s.label} className="bg-vsc-bg-secondary px-5 py-5">
                <div className="text-2xl text-vsc-teal mb-1">{s.value}</div>
                <div className="text-xs text-vsc-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// the_problem.ts"}</div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-vsc-yellow text-sm mb-3">
                <span className="text-vsc-blue">const </span>
                <span>problem</span>
                <span className="text-vsc-text"> = {"{"}</span>
              </h2>
              <div className="border-l-2 border-vsc-border pl-4 text-vsc-muted text-sm leading-relaxed space-y-3">
                <p>
                  The default Gutenberg editor gives every site the same cluttered
                  block library — dozens of blocks content editors do not need, cannot
                  control, and often misuse. For an agency maintaining 150+ client
                  sites, this creates inconsistency, content breakage, and constant
                  maintenance overhead.
                </p>
                <p>
                  There was no clean way to give each client a curated, intentional
                  editing experience without forking themes repeatedly or writing
                  one-off solutions per site.
                </p>
              </div>
              <div className="text-vsc-yellow text-sm mt-3">
                <span className="text-vsc-text">{"}"}</span>
              </div>
            </div>

            <div>
              <h2 className="text-vsc-yellow text-sm mb-3">
                <span className="text-vsc-blue">const </span>
                <span>goal</span>
                <span className="text-vsc-text"> = {"{"}</span>
              </h2>
              <div className="border-l-2 border-vsc-border pl-4 text-vsc-muted text-sm leading-relaxed space-y-3">
                <p>
                  Build a single theme architecture that any client site could extend —
                  with a clean editing baseline, a managed block library, dependency
                  resolution, and multisite support. One system, maintained in one
                  place, deployed everywhere.
                </p>
                <p>
                  The system had to be operable by non-technical content editors
                  without developer involvement for day-to-day block management.
                </p>
              </div>
              <div className="text-vsc-yellow text-sm mt-3">
                <span className="text-vsc-text">{"}"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── What I Built ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// what_i_built.ts"}</div>

          <div className="grid md:grid-cols-2 gap-px border border-vsc-border bg-vsc-border">
            {features.map((f) => (
              <div key={f.id} className="bg-vsc-bg-secondary p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-vsc-muted">{f.id}</span>
                  <span className={`text-sm font-bold ${f.color}`}>{f.title}</span>
                </div>
                <p className="text-xs text-vsc-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technical Architecture ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// architecture.ts"}</div>

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6 text-xs leading-relaxed">
            <div className="text-vsc-muted mb-4">{"// system overview"}</div>
            <pre className="text-vsc-text overflow-x-auto">
{`  ┌──────────────────────────────────────────────────────────┐
  │                     Empa Theme System                     │
  ├──────────────────────────┬───────────────────────────────┤
  │     WordPress / PHP      │     React Admin Panel         │
  │                          │                               │
  │  ┌────────────────────┐  │  ┌─────────────────────────┐ │
  │  │  Clean-slate theme │  │  │  Block Manager UI        │ │
  │  │  (p + h1 only)     │  │  │  Browse · Install · Remove│ │
  │  └────────────────────┘  │  └─────────────────────────┘ │
  │                          │                               │
  │  ┌────────────────────┐  │  ┌─────────────────────────┐ │
  │  │  Block Registry    │  │  │  Dependency Resolver     │ │
  │  │  Auto-register     │  │  │  Pattern install guard   │ │
  │  └────────────────────┘  │  └─────────────────────────┘ │
  │                          │                               │
  │  ┌────────────────────┐  │  ┌─────────────────────────┐ │
  │  │  Usage Tracker     │  │  │  Multisite Support       │ │
  │  │  Per-page index    │  │  │  Child theme creator     │ │
  │  └────────────────────┘  │  └─────────────────────────┘ │
  └──────────────────────────┴───────────────────────────────┘
                    │               │
            ┌───────┴───┐   ┌───────┴──────┐
            │  ACF Blocks│   │ Gutenberg    │
            │  (React)   │   │ Native Blocks│
            └────────────┘   └─────────────┘`}
            </pre>
          </div>

          {/* Stack tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 border border-vsc-border text-vsc-light-blue bg-vsc-bg-secondary"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// how_it_works.ts"}</div>

          <div className="space-y-px border border-vsc-border">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-vsc-bg-secondary p-5 flex gap-5 items-start border-b border-vsc-border last:border-b-0"
              >
                <span className={`text-sm font-bold shrink-0 ${item.color}`}>{item.step}</span>
                <div>
                  <div className="text-sm text-vsc-text mb-1">{item.title}</div>
                  <div className="text-xs text-vsc-muted leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// timeline.ts"}</div>

          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-vsc-border" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-vsc-teal bg-vsc-bg shrink-0 mt-0.5 z-10" />
                  <div>
                    <div className="text-sm text-vsc-teal">{t.phase}</div>
                    <div className="text-xs text-vsc-muted mt-0.5">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Outcome / Impact ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// outcome.ts"}</div>

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6 mb-6">
            <div className="text-xs text-vsc-muted mb-6">
              <span className="text-vsc-blue">const </span>
              <span className="text-vsc-yellow">outcome</span>
              <span className="text-vsc-text"> = {"{"}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((o) => (
                <div key={o.key} className="border-l-2 border-vsc-border pl-4">
                  <div className="text-xs text-vsc-muted mb-1">
                    <span className="text-vsc-light-blue">{o.key}</span>
                    <span className="text-vsc-text">: </span>
                  </div>
                  <div className={`text-xl mb-2 ${o.color}`}>{o.value}</div>
                  <p className="text-xs text-vsc-muted leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-xs text-vsc-muted mt-6">
              <span className="text-vsc-text">{"}"}</span>
            </div>
          </div>

          {/* Client list */}
          <div className="text-xs text-vsc-green mb-3">{"// deployed_on"}</div>
          <div className="space-y-px border border-vsc-border">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-vsc-bg-secondary px-5 py-3 flex items-center justify-between border-b border-vsc-border last:border-b-0"
              >
                <span className="text-vsc-teal text-xs">{c.name}</span>
                <span className="text-vsc-muted text-xs">{c.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Note on code privacy ── */}
        <section className="mb-20">
          <div className="bg-vsc-bg-tertiary border border-vsc-border px-5 py-4 text-xs text-vsc-muted">
            <span className="text-vsc-green">{"// "}</span>
            Code for Empa is private company property and cannot be shared publicly.
            This case study documents the architecture, decisions, and outcomes.
            Happy to walk through the system in detail during an interview.
          </div>
        </section>

        {/* ── Footer nav ── */}
        <section className="border-t border-vsc-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs text-vsc-muted hover:text-vsc-text transition-colors flex items-center gap-2"
          >
            <span className="text-vsc-blue">←</span>
            <span>back to portfolio</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/godoc"
              className="text-xs text-vsc-muted hover:text-vsc-text transition-colors"
            >
              ← godoc case study
            </Link>
          </div>
        </section>

      </div>

      {/* ── Status bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-vsc-statusbar text-white text-2xs px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>⎇ main</span>
          <span>Empa — Case Study</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TypeScript</span>
          <span>UTF-8</span>
        </div>
      </div>

    </main>
  );
}