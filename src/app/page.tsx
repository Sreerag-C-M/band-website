import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MusicSection } from "@/components/MusicSection";
import { Videos } from "@/components/Videos";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative bg-[#050508] text-white selection:bg-accent-purple/30 selection:text-white">
      {/* Dynamic Background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div className="relative z-10 space-y-0">
        <Hero />
        <About />
        <MusicSection />
        <Videos />
        <Gallery />
        <Contact />
      </div>

      {/* Aesthetic Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[20px] md:border-[40px] border-white/5 opacity-10" />
      <div className="fixed top-0 left-0 w-full h-[150px] bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-20" />
      <div className="fixed bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20" />
    </main>
  );
}
