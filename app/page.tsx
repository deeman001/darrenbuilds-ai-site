import { BuilderArc } from "@/components/BuilderArc";
import { Container } from "@/components/Container";
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
      <section className="border-t border-[#1c1c1c] py-14 md:py-16">
        <Container>
          <blockquote className="max-w-[70ch] font-[var(--font-dm-serif)] text-[clamp(1.2rem,2.3vw,1.8rem)] leading-[1.45] text-[#cfcfcf]">
            “Different zones of thought produce different kinds of minds.”
          </blockquote>
          <p className="mt-4 font-[var(--font-inter)] text-[0.78rem] tracking-[0.08em] uppercase text-[#5b5b5b]">
            — Inspired by A Fire Upon the Deep, Vernor Vinge
          </p>
        </Container>
      </section>
      <Projects />
      <HowIBuild />
      <Footer />
    </main>
  );
}
