// app/empa/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empa — Case Study | Avijit Karmaker",
  description:
    "How I built a custom WordPress theme system with a remote block ecosystem, dependency resolver, and full admin toolkit — used across major Finnish client sites.",
};

const stack = [
  "WordPress",
  "PHP",
  "React",
  "ACF",
  "Gutenberg",
  "REST API",
  "Multisite",
  "FSE",
  "Polylang",
];

const dashboardWidgets = [
  {
    id: "01",
    title: "Welcome Banner",
    color: "text-vsc-blue",
    desc: "Personalised greeting by username, shows role, posts and pages owned, last login time, session duration, and most recent activity (last created or edited page/post). Every user sees their own context on login — not generic site stats.",
  },
  {
    id: "02",
    title: "Block Intelligence",
    color: "text-vsc-teal",
    desc: "Real-time block inventory — total blocks, core, custom, enabled, disabled, patterns, reusable, remote. Top 5 most used blocks shown in widget. Full report page shows every block with usage count, exact pages and posts where used (with links), and search/filter. Built for safe block removal — see where a block lives before you touch it.",
  },
  {
    id: "03",
    title: "Quick Access",
    color: "text-vsc-yellow",
    desc: "One-click access to the Full Site Editor directly from the dashboard. Solves a real pain point — WordPress users are consistently confused about the difference between the page editor and FSE. This removes the friction entirely.",
  },
  {
    id: "04",
    title: "Content Overview",
    color: "text-vsc-purple",
    desc: "Posts, pages, custom post types, taxonomies, publishing activity, recently published content with author and timestamp. When something breaks on a client site, the first question is always who touched it last. This answers that in one glance.",
  },
  {
    id: "05",
    title: "User Insights",
    color: "text-vsc-orange",
    desc: "Users broken down by role — admin, editor, author, contributor, subscriber. Registration activity, most active author with publish count, recent registrations, recent activity feed. Essential for multi-user agency sites.",
  },
  {
    id: "06",
    title: "Site Health",
    color: "text-vsc-light-blue",
    desc: "Three tabs: Server (PHP version, MySQL, nginx, memory limit, disk usage with warnings), Security (HTTPS, failed logins, WP version, file permissions audit, inactive plugins, debug mode), Cleanup (post revisions, auto-saves, trash, expired transients, orphaned metadata — all with one-click clean buttons).",
  },
  {
    id: "07",
    title: "Media Statistics",
    color: "text-vsc-green",
    desc: "Images, video, audio, documents breakdown with percentages, total library size, unattached files warning with review link, recent uploads. Unattached media is a common hidden bloat issue on agency sites — this surfaces it immediately.",
  },
];

const themeFeatures = [
  {
    id: "01",
    title: "Block Manager",
    color: "text-vsc-blue",
    desc: "Activate or deactivate any block — individually or in bulk. Filter by status (installed, not installed, active, inactive) and namespace (acf, core, empa, woocommerce). Interactive search. Covers everything from core WordPress blocks to WooCommerce to custom ACF blocks. The editor sees only what you enable.",
  },
  {
    id: "02",
    title: "Remote Block Library",
    color: "text-vsc-teal",
    desc: "JJ-NET custom blocks (ACF and React) stored on a remote server, fetched via API and browsable with visual previews. Download a block — it installs and activates automatically, appears in the block manager with correct namespace. Delete a block — it deactivates, then removes every instance from every page and post. No broken block warnings, ever. Modal confirmation on delete.",
  },
  {
    id: "03",
    title: "Pattern Library with Dependency Resolver",
    color: "text-vsc-yellow",
    desc: "Remote pattern library with visual previews. Before a pattern can be installed, the system checks all block dependencies. If core blocks are inactive — activate them first. If custom blocks are missing — download and activate them first. Install button stays locked until all dependencies are satisfied. Delete pattern removes all traces from all pages and posts.",
  },
  {
    id: "04",
    title: "Child Theme Creator",
    color: "text-vsc-purple",
    desc: "Create a new child theme by typing a name and clicking create. Generates all necessary folder structure and files following Empa conventions automatically — ensuring block downloads and pattern installs work correctly on every new site. Supports WordPress Multisite. Multiple child themes can coexist, each independently activated.",
  },
  {
    id: "05",
    title: "License Manager",
    color: "text-vsc-orange",
    desc: "License key management per installation — status, expiration, domain binding, updates toggle. Foundation for commercial distribution — license keys will gate access to the remote block and pattern libraries, enabling JJ-NET to distribute Empa to other agencies as a licensed product.",
  },
  {
    id: "06",
    title: "Permissions Matrix",
    color: "text-vsc-light-blue",
    desc: "Role-based capability control — toggle matrix with WordPress roles as columns and Empa capabilities as rows. Administrator controls exactly which roles can access FSE, block manager, site scripts, template parts, and other Empa features. Granular access without any plugin.",
  },
];

const adminTools = [
  {
    title: "Site Scripts Manager",
    desc: "Custom post type for injecting tracking scripts (GTM, Matomo, GA etc) into header or footer — global or page-specific, with load order control. No plugin, no touching theme files. Any semi-technical admin can add or remove scripts safely.",
  },
  {
    title: "Template Parts Editor",
    desc: "Dedicated admin page listing all template parts (header, footer etc) with slug, area, location, and status — File only, DB only, or Customised (File + DB). Solves the Polylang compatibility problem: translation works with dynamic template parts, not patterns. One click to edit any template part directly.",
  },
  {
    title: "CPT Manager",
    desc: "Built-in custom post type registration — full configuration (publicly queryable, show in menu, REST API, archive, supported features). Edit and delete with modal confirmation. Reserved word validation blocks unsafe slugs before they cause silent breakage. Replaces the Custom Post Type UI plugin entirely.",
  },
  {
    title: "Taxonomy Manager",
    desc: "Same concept as CPT Manager for custom taxonomies. Full configuration, edit, delete with modal confirmation, and reserved word validation — blocks any taxonomy slug that conflicts with WordPress protected terms.",
  },
];

const timeline = [
  { phase: "Problem identified", detail: "Agency managing 150+ client sites with no consistent theme architecture — one-off solutions per site, growing maintenance overhead" },
  { phase: "Architecture design", detail: "Designed the full system — block manager, remote library, dependency resolver, dashboard widgets, admin toolkit" },
  { phase: "Core theme build", detail: "Clean-slate WordPress FSE theme — minimal editor defaults, consistent base for all child themes" },
  { phase: "Dashboard widgets", detail: "Block Intelligence, Welcome Banner, Content Overview, Site Health, User Insights, Media Statistics, Quick Access" },
  { phase: "React admin panel", detail: "Empa Theme Management — 6-tab React app embedded in WordPress admin" },
  { phase: "Remote block library", detail: "API-connected block library with auto-install, auto-activate, and clean uninstall" },
  { phase: "Pattern dependency resolver", detail: "Dependency checking system — blocks pattern install until all required blocks are present and active" },
  { phase: "Admin toolkit", detail: "Site Scripts, Template Parts editor, CPT Manager, Taxonomy Manager" },
  { phase: "Child theme creator + Multisite", detail: "Automated child theme generation with correct Empa folder structure, multisite support" },
  { phase: "License system foundation", detail: "License key management built — groundwork for commercial distribution" },
  { phase: "Production deployment", detail: "Live across 10+ Finnish client sites via JJ-NET OY" },
];

export default function EmpaCaseStudy() {
  return (
    <main className="min-h-screen bg-vsc-bg font-mono text-vsc-text pb-16">

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
          <span className="text-vsc-teal shrink-0">empa</span>
          <span className="text-vsc-border shrink-0">/</span>
          <span className="text-vsc-orange truncate">case_study.tsx</span>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-vsc-yellow">● Company project</span>
          <span className="hidden sm:inline">JJ-NET OY</span>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="border-b border-vsc-border bg-vsc-bg-secondary flex text-xs overflow-x-auto">
        <div className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border bg-vsc-bg text-vsc-text border-t-2 border-t-vsc-blue shrink-0">
          <span className="text-vsc-teal">TSX</span>
          <span>case_study.tsx</span>
        </div>
        <a href="#theme-management" className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border text-vsc-muted hover:text-vsc-text transition-colors shrink-0">
          <span className="text-vsc-blue">PHP</span>
          <span>theme-management.php</span>
        </a>
        <a href="#dashboard" className="flex items-center gap-2 px-4 py-2 border-r border-vsc-border text-vsc-muted hover:text-vsc-text transition-colors shrink-0">
          <span className="text-vsc-yellow">JSX</span>
          <span>dashboard-widgets.jsx</span>
        </a>
        <a href="#admin-tools" className="flex items-center gap-2 px-4 py-2 text-vsc-muted hover:text-vsc-text transition-colors shrink-0">
          <span className="text-vsc-orange">PHP</span>
          <span>admin-tools.php</span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── Hero ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-4">
            {"// company project · primary developer · 1 year+ · JJ-NET OY · Finland"}
          </div>

          <h1 className="text-3xl md:text-4xl text-vsc-text font-mono mb-4 leading-tight">
            <span className="text-vsc-blue">const </span>
            <span className="text-vsc-yellow">project</span>
            <span className="text-vsc-text"> = </span>
            <span className="text-vsc-orange">&quot;Empa&quot;</span>
            <span className="text-vsc-text">;</span>
          </h1>

          <p className="text-vsc-muted text-sm mb-10 max-w-xl leading-relaxed">
            A custom WordPress theme system built over 1+ year at JJ-NET OY — not just
            a theme, but a complete block ecosystem with a React-powered admin panel,
            remote block and pattern libraries with dependency resolution, a full
            dashboard widget suite, and built-in agency tools that replace entire plugins.
            Now live across 10+ Finnish client sites.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-vsc-border bg-vsc-border">
            {[
              { value: "1+", label: "year to build" },
              { value: "primary", label: "developer" },
              { value: "10+", label: "live client sites" },
              { value: "6", label: "plugins replaced" },
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
                  JJ-NET OY manages 150+ WordPress client sites. The default Gutenberg
                  editor gives every site the same cluttered block library — blocks
                  editors do not need, cannot control, and often misuse. Each new
                  client site needed one-off solutions, forked themes, and constant
                  developer intervention for basic content management tasks.
                </p>
                <p>
                  There was no consistent architecture. No shared block library.
                  No way to give clients a clean, intentional editing experience
                  without starting from scratch every time.
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
                  Build one theme architecture that any client site could extend.
                  A shared remote block library developers could contribute to and
                  sites could pull from. A pattern system that enforces its own
                  dependencies. An admin toolkit that replaces plugins. One system,
                  maintained in one place, deployed everywhere.
                </p>
                <p>
                  Non-technical content editors had to be able to manage blocks,
                  scripts, and content without developer involvement for day-to-day tasks.
                </p>
              </div>
              <div className="text-vsc-yellow text-sm mt-3">
                <span className="text-vsc-text">{"}"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Theme Management React App ── */}
        <section className="mb-20" id="theme-management">
          <div className="text-xs text-vsc-green mb-2">{"// theme-management.php"}</div>
          <div className="text-xs text-vsc-muted mb-6">{"// React app embedded in WordPress admin — 6 tabs, administrator-only"}</div>

          <div className="grid md:grid-cols-2 gap-px border border-vsc-border bg-vsc-border">
            {themeFeatures.map((f) => (
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

        {/* ── Dashboard Widgets ── */}
        <section className="mb-20" id="dashboard">
          <div className="text-xs text-vsc-green mb-2">{"// dashboard-widgets.jsx"}</div>
          <div className="text-xs text-vsc-muted mb-6">{"// 7 custom widgets — every one solves a real agency pain point"}</div>

          <div className="grid md:grid-cols-2 gap-px border border-vsc-border bg-vsc-border">
            {dashboardWidgets.map((w) => (
              <div key={w.id} className="bg-vsc-bg-secondary p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-vsc-muted">{w.id}</span>
                  <span className={`text-sm font-bold ${w.color}`}>{w.title}</span>
                </div>
                <p className="text-xs text-vsc-muted leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Admin Tools ── */}
        <section className="mb-20" id="admin-tools">
          <div className="text-xs text-vsc-green mb-2">{"// admin-tools.php"}</div>
          <div className="text-xs text-vsc-muted mb-6">{"// built-in tools that replace dedicated plugins"}</div>

          <div className="space-y-px border border-vsc-border">
            {adminTools.map((t) => (
              <div
                key={t.title}
                className="bg-vsc-bg-secondary p-5 grid md:grid-cols-3 gap-4 border-b border-vsc-border last:border-b-0"
              >
                <div className="text-sm text-vsc-teal">{t.title}</div>
                <div className="md:col-span-2 text-xs text-vsc-muted leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Architecture ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// architecture.ts"}</div>

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6 text-xs leading-relaxed">
            <div className="text-vsc-muted mb-4">{"// system overview"}</div>
            <pre className="text-vsc-text overflow-x-auto">
{`  ┌─────────────────────────────────────────────────────────────┐
  │                      Empa Theme System                       │
  ├─────────────────────────────┬───────────────────────────────┤
  │     WordPress / PHP         │     React Admin Panel         │
  │                             │     (Empa Theme Management)   │
  │  ┌─────────────────────┐    │                               │
  │  │  FSE Theme (base)   │    │  Blocks tab                   │
  │  │  Clean-slate editor │    │  Block Library (remote API)   │
  │  └─────────────────────┘    │  Pattern Library + resolver   │
  │                             │  License manager              │
  │  ┌─────────────────────┐    │  Child Theme creator          │
  │  │  Dashboard Widgets  │    │  Permissions matrix           │
  │  │  7 custom widgets   │    │                               │
  │  └─────────────────────┘    └───────────────────────────────┤
  │                             │     Admin Toolkit             │
  │  ┌─────────────────────┐    │                               │
  │  │  Child Theme(s)     │    │  Site Scripts (CPT)           │
  │  │  Auto-generated     │    │  Template Parts editor        │
  │  │  Multisite ready    │    │  CPT Manager                  │
  │  └─────────────────────┘    │  Taxonomy Manager             │
  └─────────────────────────────┴───────────────────────────────┘
                    │                         │
            ┌───────┴───────┐         ┌───────┴────────┐
            │  Remote Block │         │  Remote Pattern │
            │  Server (API) │         │  Server (API)   │
            └───────────────┘         └────────────────┘`}
            </pre>
          </div>

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

        {/* ── Outcome ── */}
        <section className="mb-20">
          <div className="text-xs text-vsc-green mb-6">{"// outcome.ts"}</div>

          <div className="bg-vsc-bg-secondary border border-vsc-border p-6 mb-6">
            <div className="text-xs text-vsc-muted mb-6">
              <span className="text-vsc-blue">const </span>
              <span className="text-vsc-yellow">outcome</span>
              <span className="text-vsc-text"> = {"{"}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  key: "reach",
                  value: "10+ sites",
                  desc: "Live across 10+ Finnish client sites via JJ-NET OY — including Helsinki City, Finnish Museums Association, and Netox.",
                  color: "text-vsc-teal",
                },
                {
                  key: "pluginsReplaced",
                  value: "6 plugins",
                  desc: "Site Scripts replaces Script inserter plugins. CPT Manager replaces Custom Post Type UI. Taxonomy Manager replaces add-on taxonomy plugins. Block Intelligence replaces block analytics plugins. All built into the theme.",
                  color: "text-vsc-blue",
                },
                {
                  key: "commercialPath",
                  value: "licensable",
                  desc: "License system foundation built. Empa is architected to be distributed to other agencies as a licensed product — block and pattern access gated by license key.",
                  color: "text-vsc-yellow",
                },
                {
                  key: "codeVisibility",
                  value: "private",
                  desc: "Code is company property and cannot be open-sourced. Happy to walk through the system in detail during an interview — a demo recording is also available.",
                  color: "text-vsc-muted",
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

          {/* Client list */}
          <div className="text-xs text-vsc-green mb-3">{"// deployed_on"}</div>
          <div className="space-y-px border border-vsc-border">
            {[
              { name: "JurvanJousi", detail: "Custom Gutenberg blocks" },
              { name: "Proventia", detail: "Full site build with empa theme" },
              { name: "Netox", detail: "All custom Gutenberg blocks — netox.com" },
              { name: "JamiJarvi", detail: "Full site build with empa theme" },
              { name: "10+ total", detail: "Live Empa installations via JJ-NET OY" },
            ].map((c) => (
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

        {/* ── Private code note ── */}
        <section className="mb-20">
          <div className="bg-vsc-bg-tertiary border border-vsc-border px-5 py-4 text-xs text-vsc-muted">
            <span className="text-vsc-green">{"// "}</span>
            Code is private company property and cannot be shared publicly.
            This case study documents the architecture, decisions, and outcomes.
            A demo recording is in progress. Happy to walk through the system
            in detail during an interview.
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