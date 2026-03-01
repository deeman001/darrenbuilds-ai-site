import { BuilderArc } from "@/components/BuilderArc";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIBuild } from "@/components/HowIBuild";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <BuilderArc />
      <Projects />
      <HowIBuild />
      <Footer />
    </main>
  );
}
