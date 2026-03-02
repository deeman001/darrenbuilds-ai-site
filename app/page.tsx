import { BuilderArc } from "@/components/BuilderArc";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIBuild } from "@/components/HowIBuild";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://darrenbuilds.ai/#person",
        name: "Darren Peterson",
        alternateName: "Darren Builds",
        url: "https://darrenbuilds.ai/",
        image: "https://darrenbuilds.ai/images/darren-hero.jpg",
        jobTitle: "Founder and Builder",
        sameAs: [
          "https://x.com/Darren_Builds",
          "https://instagram.com/darren_builds",
          "https://linkedin.com/in/darrenpeterson",
        ],
        worksFor: {
          "@id": "https://darrenbuilds.ai/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://darrenbuilds.ai/#organization",
        name: "Darren Builds",
        url: "https://darrenbuilds.ai/",
        image: "https://darrenbuilds.ai/images/darren-hero.jpg",
        sameAs: [
          "https://x.com/Darren_Builds",
          "https://instagram.com/darren_builds",
          "https://linkedin.com/in/darrenpeterson",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://darrenbuilds.ai/#website",
        url: "https://darrenbuilds.ai/",
        name: "Darren Builds",
        inLanguage: "en-US",
        publisher: {
          "@id": "https://darrenbuilds.ai/#organization",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Nav />
        <Hero />
        <BuilderArc />
        <section className="border-t border-[#1c1c1c] py-14 md:py-16" aria-label="Builder inspiration">
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
    </>
  );
}
