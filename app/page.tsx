"use client"
import Hero from "./components/Hero";
import { BentoGridThirdDemo } from "./components/Grid";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <BentoGridThirdDemo />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
