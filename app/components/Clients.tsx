import { clients } from "../data/clients";

export default function ClientWork() {
  return (
    <section className="border-b border-vsc-border-light">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">

        {/* Section header */}
        <div className="text-vsc-green text-xs font-mono mb-1">
          {`// client_work.ts — production sites shipped`}
        </div>
        <div className="text-vsc-yellow text-xl font-mono mb-1">
          const clientWork = [
        </div>
        <p className="text-vsc-muted text-xs font-mono border-l-2 border-vsc-border-light pl-4 mb-8">
          {`// Custom React / Gutenberg block development · 150+ sites maintained across monthly cycles`}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-4 hover:border-vsc-blue transition-colors duration-150"
            >
              <div className="text-vsc-light-blue text-sm font-mono mb-1">
                {client.name}
              </div>
              <div className="text-vsc-muted text-xs font-mono">
                {client.tech}
              </div>
              {client.badge && (
                <span className="inline-block mt-2 bg-[#0a1a2e] border border-[#1a3a5e] text-vsc-blue text-xs px-2 py-0.5 rounded-sm font-mono">
                  {client.badge}
                </span>
              )}
            </div>
          ))}

          {/* More card */}
          <div className="bg-vsc-bg-secondary border border-dashed border-vsc-border rounded-sm p-4 flex items-center justify-center">
            <span className="text-vsc-faint text-xs font-mono">{`// + many more`}</span>
          </div>
        </div>

        <div className="text-vsc-muted text-xs font-mono mt-4">];</div>

      </div>
    </section>
  );
}