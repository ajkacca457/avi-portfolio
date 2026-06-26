// app/godoc/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoDoc — Case Study | Avijit Karmaker",
  description:
    "How I rescued a failing fintech codebase, became sole CTO, and helped GoDoc secure €10k in funding.",
};

const stack = [
  "ASP.NET Core",
  "ASP.NET Framework",
  "SQL Server",
  "REST API",
  "Java (Android)",
  "React",
  "Azure",
];

const challenges = [
  {
    id: "01",
    problem: "Inherited a broken codebase with no documentation",
    solution:
      "Conducted a full audit across the API, web client, and mobile app. Mapped dependencies, identified critical failure points, and established a priority fix list before writing a single line of new code.",
  },
  {
    id: "02",
    problem: "API endpoints returning inconsistent or incorrect data",
    solution:
      "Rewrote the core API layer in ASP.NET Core with consistent response contracts. Added validation, error handling, and proper HTTP status codes throughout — bringing the API to a state where the mobile team could reliably integrate against it.",
  },
  {
    id: "03",
    problem: "Android app disconnected from live API",
    solution:
      "Reconnected the Java Android app to the production API, resolved auth flow issues, and audited the app for Google Play Store compliance. App is now live on Google Play.",
  },
  {
    id: "04",
    problem: "No deployment process or environment separation",
    solution:
      "Set up Azure deployment pipeline with environment separation between staging and production. Established a release process so the team could ship updates without breaking live traffic.",
  },
  {
    id: "05",
    problem: "Business emails failing to deliver",
    solution:
      "Configured SmarterMail on Plesk with correct PTR records, SPF, DKIM, and DMARC to resolve shared IP reputation issues causing Gmail delivery failures.",
  },
];

const timeline = [
  { phase: "Inherited codebase", detail: "Audited all three layers — API, web client, Android app" },
  { phase: "Stabilised API", detail: "Rewrote core endpoints, added validation and error contracts" },
  { phase: "Reconnected mobile", detail: "Android app live on Google Play with working auth flow" },
  { phase: "Infra & deployment", detail: "Azure pipeline, environment separation, email delivery fixed" },
  { phase: "€10k funding secured", detail: "Company received investment after codebase rescue" },
  { phase: "Ongoing — sole CTO", detail: "All architecture, deployment, and technical decisions" },
];

export default function GoDocCaseStudy() {
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
          <span className="text-vsc-teal">godoc</span>
          <span className="text-vsc-border">/</span>
          <span className="text-vsc-orange">case_study.md</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-vsc-green">● Live</span>
          <span>godoccourier.com</span>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="border-b border-vsc-border bg-vsc-bg-secondary flex text-xs">
        <div className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border bg-vsc-bg text-vsc-text border-t-2 border-t-vsc-blue">
          <span className="text-vsc-orange">MD</span>
          <span>case_study.md</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border text-vsc-muted hover:text-vsc-text transition-colors">
          <span className="text-vsc-blue">TS</span>
          <span>architecture.ts</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 text-vsc-muted hover:text-vsc-text transition-colors">
          <span className="text-vsc-yellow">JS</span>
          <span>challenges.js</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── Hero ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-4">
            {"// startup · part time · tech lead · bangladesh"}
          </div>

          <h1 className="text-3xl md:text-4xl text-vsc-text font-mono mb-4 leading-tight">
            <span className="text-vsc-blue">const </span>
            <span className="text-vsc-yellow">project</span>
            <span className="text-vsc-text"> = </span>
            <span className="text-vsc-orange">&quot;GoDoc&quot;</span>
            <span className="text-vsc-text">;</span>
          </h1>

          <p className="text-vsc-muted text-sm mb-10 max-w-xl leading-relaxed">
            Secure physical document courier platform connecting banks with courier
            networks across Bangladesh. I inherited a failing codebase, rescued it,
            and became the sole CTO — after which the company secured €10k in funding.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-vsc-border bg-vsc-border">
            {[
              { value: "€10k", label: "funding secured" },
              { value: "3", label: "platforms owned" },
              { value: "50+", label: "banks served" },
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
                  GoDoc had an existing codebase across three layers — an ASP.NET API,
                  an ASP.NET Framework web client, and a Java Android app. The previous
                  development team had left it in a non-functional state.
                </p>
                <p>
                  Endpoints were broken, the mobile app was disconnected from the API,
                  there was no deployment pipeline, and no documentation. The business
                  had a working product concept but no working product.
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
                  GoDoc connects banks and financial institutions with a courier
                  network for secure physical document delivery — loan agreements,
                  legal paperwork, KYC documents. The platform handles the full
                  lifecycle: request, pickup, tracking, delivery confirmation, and
                  electronic proof of delivery.
                </p>
                <p>
                  Operating in Bangladesh with 50+ bank clients. Android app
                  available on Google Play.
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
                  "Rewrote broken endpoints",
                  "Consistent response contracts",
                  "Auth, validation, error handling",
                  "REST API for web + mobile",
                ],
              },
              {
                label: "ASP.NET Web Client",
                color: "text-vsc-teal",
                points: [
                  "Admin dashboard",
                  "Bank portal interface",
                  "Shipment management",
                  "Real-time tracking UI",
                ],
              },
              {
                label: "Java Android App",
                color: "text-vsc-yellow",
                points: [
                  "Reconnected to live API",
                  "Fixed auth flow",
                  "Google Play Store audit",
                  "Push notifications (POD)",
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
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// architecture.ts"}</div>

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6 text-xs leading-relaxed">
            <div className="text-vsc-muted mb-4">{"// system overview"}</div>
            <pre className="text-vsc-text overflow-x-auto">
{`  ┌─────────────────────────────────────────────────────┐
  │                    GoDoc Platform                    │
  ├──────────────┬──────────────────┬───────────────────┤
  │  Web Client  │   ASP.NET Core   │  Android App      │
  │  (ASP.NET    │   REST API       │  (Java)           │
  │  Framework)  │                  │                   │
  │              │  ┌────────────┐  │  ┌─────────────┐ │
  │  Bank Portal │  │ Auth layer │  │  │ Courier App │ │
  │  Admin Panel │  │ Validation │  │  │ POD capture │ │
  │  Shipment Mg.│  │ SQL Server │  │  │ Live track  │ │
  └──────────────┴──┴────────────┴──┴──┴─────────────┴─┘
                          │
                    ┌─────┴──────┐
                    │ SQL Server │
                    │  Database  │
                    └─────┬──────┘
                          │
                    ┌─────┴──────┐
                    │   Azure    │
                    │ Deployment │
                    └────────────┘`}
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
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// challenges.ts"}</div>

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
                  desc: "Company received investment after codebase was rescued and stabilised. The working product was a direct prerequisite for funding.",
                  color: "text-vsc-teal",
                },
                {
                  key: "platform",
                  value: "3 layers",
                  desc: "Full ownership across API, web client, and Android app. All architecture, deployment, and technical decisions made solely by me.",
                  color: "text-vsc-blue",
                },
                {
                  key: "clients",
                  value: "50+ banks",
                  desc: "Platform serving banks and financial institutions across Bangladesh for secure physical document courier services.",
                  color: "text-vsc-yellow",
                },
                {
                  key: "status",
                  value: "Live",
                  desc: "godoccourier.com is live. Android app is on Google Play. Platform is in active use with real clients.",
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