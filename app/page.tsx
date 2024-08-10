import Hero from "./components/Hero";
import { BentoGridThirdDemo } from "./components/Grid";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black">
      <Hero />
      <BentoGridThirdDemo />
      <Experience />
    </main>
  );
}
