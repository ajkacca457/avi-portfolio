"use client";
import { useState } from "react";
import FadeIn from "./animations/FadeIn";
import { clients } from "../data/clients";

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 4;

export default function ClientWork() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleClients = clients.slice(0, visibleCount);
  const hasMore = visibleCount < clients.length;

  return (
    <section className="border-b border-vsc-border-light">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">

        <FadeIn>
          <div className="text-vsc-green text-xs font-mono mb-1">
            {`// client_work.ts — sites built & delivered`}
          </div>
          <div className="text-vsc-yellow text-xl font-mono mb-1">
            const clientWork = [
          </div>
          <p className="text-vsc-muted text-xs font-mono border-l-2 border-vsc-border-light pl-4 mb-8">
            {`// Custom React / Gutenberg sites developed for Finnish organisations · 150+ sites maintained separately`}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {visibleClients.map((client, index) => (
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
                {client.description && (
                  <p className="text-vsc-muted text-xs font-sans leading-relaxed mb-2">
                    {client.description}
                  </p>
                )}
                {client.work && (
                  <p className="text-vsc-green text-xs font-mono leading-relaxed border-l-2 border-vsc-green pl-2">
                    {client.work}
                  </p>
                )}
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Load more */}
        <FadeIn>
          <div className="mt-6 flex items-center gap-4">
            {hasMore ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
                className="bg-transparent border border-vsc-border hover:border-vsc-blue text-vsc-muted hover:text-vsc-text text-xs font-mono px-4 py-2 rounded-sm transition-colors duration-150"
              >
                {`loadMore() // ${clients.length - visibleCount} remaining`}
              </button>
            ) : (
              <span className="text-vsc-faint text-xs font-mono">
                {`// all ${clients.length} clients loaded`}
              </span>
            )}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-vsc-yellow text-xl font-mono mt-4">];</div>
        </FadeIn>

      </div>
    </section>
  );
}