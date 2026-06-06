import FadeIn from "./animations/FadeIn";
import { clients } from "../data/clients";

export default function ClientWork() {
  return (
    <section className="border-b border-vsc-border-light">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">

        <FadeIn>
          <div className="text-vsc-green text-xs font-mono mb-1">
            {`// client_work.ts — production sites shipped`}
          </div>
          <div className="text-vsc-yellow text-xl font-mono mb-1">
            const clientWork = [
          </div>
          <p className="text-vsc-muted text-xs font-mono border-l-2 border-vsc-border-light pl-4 mb-8">
            {`// Custom React / Gutenberg block development · 150+ sites maintained across monthly cycles`}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {clients.map((client, index) => (
            <FadeIn key={client.name} delay={index * 0.05}>
              <a
                href={client.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-4 hover:border-vsc-blue transition-colors duration-150 block h-full"
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
              </a>
            </FadeIn>
          ))}

          <FadeIn delay={clients.length * 0.05}>
            <div className="bg-vsc-bg-secondary border border-dashed border-vsc-border rounded-sm p-4 flex items-center justify-center h-full">
              <span className="text-vsc-faint text-xs font-mono">{`// + many more`}</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="text-vsc-muted text-xs font-mono mt-4">];</div>
        </FadeIn>

      </div>
    </section>
  );
}