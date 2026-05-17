"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TwoDoors from "@/components/sections/TwoDoors";
import Academy from "@/components/sections/Academy";
import About from "@/components/sections/About";
import Agency from "@/components/sections/Agency";
import Bridge from "@/components/sections/Bridge";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <TwoDoors />
        <Academy />
        <About />
        <Agency />
        <Bridge />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
