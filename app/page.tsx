"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Clients from "./components/Clients";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-vsc-bg">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Clients />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}