"use client";
import { useState } from "react";
import FadeIn from "./animations/FadeIn";

const locationTargets = [
  { flag: "🇫🇮", country: "Finland", type: "onsite or remote", onsite: true },
  { flag: "🇩🇪", country: "Germany", type: "remote", onsite: false },
  { flag: "🇳🇴", country: "Norway", type: "remote", onsite: false },
  { flag: "🇸🇪", country: "Sweden", type: "remote", onsite: false },
  { flag: "🇬🇧", country: "UK", type: "remote", onsite: false },
  { flag: "🇩🇰", country: "Denmark", type: "remote", onsite: false },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-b border-vsc-border-light">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">

        <FadeIn>
          <div className="text-vsc-green text-xs font-mono mb-1">
            {`// contact.ts`}
          </div>
          <div className="text-vsc-yellow text-xl font-mono mb-8">
            openToWork(true)
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — info */}
          <FadeIn delay={0.1} direction="left">
            <div>
              <p className="text-vsc-muted text-sm font-sans leading-relaxed mb-6">
                Looking for a full-stack developer who can lead, rescue, and ship? Let&apos;s talk.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
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

              <div className="text-vsc-muted text-xs font-mono bg-vsc-bg-secondary border border-vsc-border rounded-sm px-4 py-3 mb-6">
                <span className="text-vsc-green">{`// `}</span>
                Finnish citizen — EEA right to work, no visa needed anywhere in the list above.
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vsc-blue hover:text-vsc-light-blue text-sm font-mono transition-colors duration-150"
                >
                  ↗ linkedin
                </a>
                <a
                  href="https://github.com/ajkacca457"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vsc-blue hover:text-vsc-light-blue text-sm font-mono transition-colors duration-150"
                >
                  ↗ github
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vsc-blue hover:text-vsc-light-blue text-sm font-mono transition-colors duration-150"
                >
                  ↗ download cv
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2} direction="right">
            <div className="bg-vsc-bg-secondary border border-vsc-border rounded-sm p-6">
              <div className="text-vsc-green text-xs font-mono mb-4">{`// sendMessage()`}</div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-vsc-muted text-xs font-mono block mb-1">name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-vsc-bg border border-vsc-border rounded-sm px-3 py-2 text-vsc-text text-sm font-mono placeholder:text-vsc-faint focus:outline-none focus:border-vsc-blue transition-colors duration-150"
                  />
                </div>

                <div>
                  <label className="text-vsc-muted text-xs font-mono block mb-1">email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-vsc-bg border border-vsc-border rounded-sm px-3 py-2 text-vsc-text text-sm font-mono placeholder:text-vsc-faint focus:outline-none focus:border-vsc-blue transition-colors duration-150"
                  />
                </div>

                <div>
                  <label className="text-vsc-muted text-xs font-mono block mb-1">message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Avijit, we have a role that might interest you..."
                    rows={5}
                    className="w-full bg-vsc-bg border border-vsc-border rounded-sm px-3 py-2 text-vsc-text text-sm font-mono placeholder:text-vsc-faint focus:outline-none focus:border-vsc-blue transition-colors duration-150"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="bg-[#0e639c] hover:bg-[#1177bb] disabled:opacity-50 text-vsc-text text-sm font-mono px-5 py-2 rounded-sm transition-colors duration-150 text-left"
                >
                  {status === "sending"
                    ? "// sending..."
                    : status === "success"
                      ? "// message sent ✓"
                      : "sendMessage()"}
                </button>

                {status === "error" && (
                  <p className="text-vsc-red text-xs font-mono">
                    {`// error — please try again or email directly`}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}