// app/godoc/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoDoc — Case Study | Avijit Karmaker",
  description:
    "How I revived a dormant fintech codebase, became sole CTO, and helped GoDoc secure €10k in funding.",
};

const stack = [
  "ASP.NET Core",
  "ASP.NET Framework",
  "C#",
  "SQL Server",
  "REST API",
  "Java (Android)",
  "Bootstrap",
  "Plesk",
];

const challenges = [
  {
    id: "01",
    problem: "Inherited a dormant codebase with no documentation",
    solution:
      "Conducted a full audit across all three layers — API, web client, admin site, and Android app. Had multiple sessions with the founder to understand how the platforms were supposed to work together. Mapping the intended workflow before touching any code was one of the biggest challenges of the project.",
  },
  {
    id: "02",
    problem: "MySQL dev database had to be migrated to SQL Server",
    solution:
      "The only available database was a dev dump in MySQL format. Converted the entire schema and data to SQL Server, resolved type mismatches and relation issues, and validated data integrity before reconnecting the API.",
  },
  {
    id: "03",
    problem: "API endpoints broken or returning incorrect data",
    solution:
      "Debugged and fixed broken endpoints across the ASP.NET Core API. Added missing validation, fixed auth errors, and standardised HTTP responses so both the web client and Android app could reliably connect.",
  },
  {
    id: "04",
    problem: "Android app disconnected from the live API",
    solution:
      "Reconnected the Java Android app to the production API, resolved auth flow issues, and audited the app for Google Play Store compliance. App is fixed and ready for resubmission.",
  },
  {
    id: "05",
    problem: "Web client UI was outdated and unusable",
    solution:
      "Rebuilt and modernised every UI component across the web client — restructured forms, improved the bank portal interface, and gave the site a professional, story-driven design. For a courier platform in Bangladesh, this level of UI is uncommon and has received strong feedback.",
  },
];

const timeline = [
  { phase: "Took over the project", detail: "8 months ago — platform had been dormant for years due to lack of technical support" },
  { phase: "Workflow mapping", detail: "Multiple sessions with the founder to fully understand how the three platforms work together" },
  { phase: "Database migration", detail: "Converted MySQL dev database to SQL Server and restored data integrity" },
  { phase: "API stabilisation", detail: "Fixed broken endpoints, auth errors, and validation across the ASP.NET Core API" },
  { phase: "Web client + admin rebuild", detail: "Fixed API connections, restructured UI, modernised every component" },
  { phase: "Android app reconnected", detail: "Resolved auth flow, reconnected to live API, audited for Play Store compliance" },
  { phase: "Deployed to Plesk", detail: "All three platforms live on ASPHostPortal Plesk server" },
  { phase: "€10k funding secured", detail: "Company received investment after the platform was rescued and made presentable" },
  { phase: "Ongoing — sole CTO", detail: "Pilot with first bank in final setup. In discussion with several others under NDA" },
];

export default function GoDocCaseStudy() {
  return (
    <main className="min-h-screen bg-vsc-bg font-mono text-vsc-text">

      {/* ── Top bar ── */}
      <div className="border-b border-vsc-border bg-vsc-bg-secondary px-6 py-2 flex items-center justify-between text-xs text-vsc-muted overflow-hidden">
        <div className="flex items-center gap-2 min-w-0 truncate">
          <Link
            href="/"
            className="hover:text-vsc-text transition-colors flex items-center gap-1 shrink-0"
          >
            <span className="text-vsc-blue">←</span>
            <span className="hidden sm:inline">avijitkarmaker.com</span>
          </Link>
          <span className="text-vsc-border shrink-0">/</span>
          <span className="text-vsc-teal shrink-0">godoc</span>
          <span className="text-vsc-border shrink-0">/</span>
          <span className="text-vsc-orange truncate">case_study.tsx</span>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-vsc-green">● Live</span>
          <a
            href="https://godoccourier.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline hover:text-vsc-text transition-colors"
          >
            godoccourier.com
          </a>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="border-b border-vsc-border bg-vsc-bg-secondary flex text-xs overflow-x-auto">
        <div className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border bg-vsc-bg text-vsc-text border-t-2 border-t-vsc-blue shrink-0">
          <span className="text-vsc-teal">TSX</span>
          <span>case_study.tsx</span>
        </div>
        <a
          href="#architecture"
          className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border text-vsc-muted hover:text-vsc-text transition-colors shrink-0"
        >
          <span className="text-vsc-blue">TS</span>
          <span>architecture.ts</span>
        </a>
        <a
          href="#challenges"
          className="flex items-center gap-2 px-4 py-2 text-vsc-muted hover:text-vsc-text transition-colors shrink-0"
        >
          <span className="text-vsc-yellow">CS</span>
          <span>challenges.cs</span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── Hero ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-4">
            {"// startup · part time · sole CTO · bangladesh"}
          </div>

          <h1 className="text-3xl md:text-4xl text-vsc-text font-mono mb-4 leading-tight">
            <span className="text-vsc-blue">const </span>
            <span className="text-vsc-yellow">project</span>
            <span className="text-vsc-text"> = </span>
            <span className="text-vsc-orange">&quot;GoDoc&quot;</span>
            <span className="text-vsc-text">;</span>
          </h1>

          <p className="text-vsc-muted text-sm mb-10 max-w-xl leading-relaxed">
            Secure physical document courier platform connecting banks and organisations
            with courier networks across Bangladesh. The platform had been dormant for
            years. I took over the entire codebase, revived it across three layers, and
            helped the company secure €10k in funding — now in pilot with its first bank.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-vsc-border bg-vsc-border">
            {[
              { value: "€10k", label: "funding secured" },
              { value: "3", label: "platforms owned" },
              { value: "8mo", label: "to revive platform" },
              { value: "sole", label: "CTO / tech lead" },
            ].map((s) => (
              <div key={s.label} className="bg-vsc-bg-secondary px-5 py-5">
                <div className="text-2xl text-vsc-teal mb-1">{s.value}</div>
                <div className="text-xs text-vsc-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Overview / The Problem ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// overview.ts"}</div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-vsc-yellow text-sm mb-3">
                <span className="text-vsc-blue">const </span>
                <span>problem</span>
                <span className="text-vsc-text"> = {"{"}</span>
              </h2>
              <div className="border-l-2 border-vsc-border pl-4 text-vsc-muted text-sm leading-relaxed space-y-3">
                <p>
                  GoDoc had a working concept and an existing codebase across three
                  platforms — an ASP.NET Core API, an ASP.NET Framework web client
                  with admin site, and a Java Android app. But the project had been
                  on hold for years with no active developer.
                </p>
                <p>
                  The codebase was broken, undocumented, and even the founder was
                  uncertain about how the platforms were meant to work together.
                  There was no path to funding without a working product.
                </p>
              </div>
              <div className="text-vsc-yellow text-sm mt-3">
                <span className="text-vsc-text">{"}"}</span>
              </div>
            </div>

            <div>
              <h2 className="text-vsc-yellow text-sm mb-3">
                <span className="text-vsc-blue">const </span>
                <span>context</span>
                <span className="text-vsc-text"> = {"{"}</span>
              </h2>
              <div className="border-l-2 border-vsc-border pl-4 text-vsc-muted text-sm leading-relaxed space-y-3">
                <p>
                  GoDoc connects banks, financial institutions, and organisations with
                  a courier network for secure physical document delivery — loan
                  agreements, legal paperwork, KYC documents. The platform handles
                  the full lifecycle: order creation, package management, tracking,
                  and delivery confirmation.
                </p>
                <p>
                  Operating in Bangladesh with a pilot bank in final setup and
                  NDA-protected discussions underway with several others.
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

          <div className="grid md:grid-cols-3 gap-px border border-vsc-border bg-vsc-border">
            {[
              {
                label: "ASP.NET Core API",
                color: "text-vsc-blue",
                points: [
                  "Fixed broken endpoints",
                  "Resolved auth and validation errors",
                  "REST API connecting DB to all clients",
                  "Stable connection for web + mobile",
                ],
              },
              {
                label: "Web Client + Admin Site",
                color: "text-vsc-teal",
                points: [
                  "Fixed API and DB connections",
                  "Restructured bank portal forms",
                  "Role-based admin (super admin, regional manager, riders)",
                  "Modernised UI — every component rebuilt",
                  "Real-time tracking fixed",
                ],
              },
              {
                label: "Java Android App",
                color: "text-vsc-yellow",
                points: [
                  "Reconnected to live API",
                  "Fixed auth flow",
                  "Google Play Store audit complete",
                  "Ready for resubmission",
                ],
              },
            ].map((platform) => (
              <div key={platform.label} className="bg-vsc-bg-secondary p-5">
                <div className={`text-xs font-bold mb-4 ${platform.color}`}>
                  {platform.label}
                </div>
                <ul className="space-y-2">
                  {platform.points.map((p) => (
                    <li key={p} className="text-xs text-vsc-muted flex items-start gap-2">
                      <span className="text-vsc-green mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technical Architecture ── */}
        <section className="mb-20" id="architecture">
          <div className="text-xs text-vsc-green mb-6">{"// architecture.ts"}</div>

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6 text-xs leading-relaxed">
            <div className="text-vsc-muted mb-4">{"// system overview"}</div>
            <pre className="text-vsc-text overflow-x-auto">
{`  ┌─────────────────────────────────────────────────────────────┐
  │                       GoDoc Platform                         │
  ├───────────────────┬──────────────────┬───────────────────────┤
  │   Web Client      │  ASP.NET Core    │  Android App          │
  │   (ASP.NET FW)    │  REST API        │  (Java)               │
  │                   │                  │                       │
  │  Customer Portal  │  Auth + Routes   │  Courier App          │
  │  Real-time Track  │  DB connector    │  Order tracking       │
  │                   │                  │  Auth flow            │
  ├───────────────────┤                  ├───────────────────────┤
  │   Admin Site      │                  │                       │
  │   (ASP.NET FW)    │                  │                       │
  │                   │                  │                       │
  │  Super Admin      │                  │                       │
  │  Regional Manager │                  │                       │
  │  Rider Management │                  │                       │
  │  Order + Packages │                  │                       │
  └───────────────────┴──────────────────┴───────────────────────┘
                              │
                      ┌───────┴────────┐
                      │   SQL Server   │
                      │   Database     │
                      │ (migrated from │
                      │    MySQL)      │
                      └───────┬────────┘
                              │
                      ┌───────┴────────┐
                      │  ASPHostPortal │
                      │  Plesk Server  │
                      └────────────────┘`}
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

        {/* ── Key Challenges ── */}
        <section className="mb-20" id="challenges">
          <div className="text-xs text-vsc-green mb-6">{"// challenges.cs"}</div>

          <div className="space-y-px border border-vsc-border">
            {challenges.map((c) => (
              <div
                key={c.id}
                className="bg-vsc-bg-secondary p-5 grid md:grid-cols-2 gap-6 border-b border-vsc-border last:border-b-0"
              >
                <div>
                  <div className="text-xs text-vsc-muted mb-2">
                    <span className="text-vsc-orange">{c.id}</span>
                    {" // problem"}
                  </div>
                  <p className="text-sm text-vsc-text">{c.problem}</p>
                </div>
                <div>
                  <div className="text-xs text-vsc-muted mb-2">
                    <span className="text-vsc-green">→</span>
                    {" // solution"}
                  </div>
                  <p className="text-sm text-vsc-muted leading-relaxed">{c.solution}</p>
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

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6">
            <div className="text-xs text-vsc-muted mb-6">
              <span className="text-vsc-blue">const </span>
              <span className="text-vsc-yellow">outcome</span>
              <span className="text-vsc-text"> = {"{"}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  key: "funding",
                  value: "€10,000",
                  desc: "Company received investment after the platform was revived and made presentable. A working product was the direct prerequisite for securing funding.",
                  color: "text-vsc-teal",
                },
                {
                  key: "ownership",
                  value: "sole CTO",
                  desc: "Full technical ownership across API, web client, admin site, and Android app. All architecture and deployment decisions are mine.",
                  color: "text-vsc-blue",
                },
                {
                  key: "traction",
                  value: "pilot live",
                  desc: "First bank pilot in final setup. NDA-protected discussions underway with several banks and organisations across Bangladesh.",
                  color: "text-vsc-yellow",
                },
                {
                  key: "status",
                  value: "live",
                  desc: "godoccourier.com is live. Web client and admin site fully operational. Android app fixed and ready for Play Store resubmission.",
                  color: "text-vsc-green",
                },
              ].map((o) => (
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
            <a
              href="https://godoccourier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-vsc-teal hover:text-vsc-text transition-colors"
            >
              ↗ godoccourier.com
            </a>
            <Link
              href="/empa"
              className="text-xs text-vsc-muted hover:text-vsc-text transition-colors"
            >
              next: empa →
            </Link>
          </div>
        </section>

      </div>

      {/* ── Status bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-vsc-statusbar text-white text-2xs px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>⎇ main</span>
          <span>GoDoc — Case Study</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TypeScript</span>
          <span>UTF-8</span>
        </div>
      </div>

    </main>
  );
}