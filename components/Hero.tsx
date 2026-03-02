import Image from "next/image";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="pt-16">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 pb-10 md:order-1 md:pb-20">
            <h1 className="font-[var(--font-dm-serif)] text-[clamp(3.5rem,5.5vw,5rem)] leading-none text-[#f0f0f0]">
              Darren Builds
            </h1>
            <p className="mt-6 max-w-[42ch] font-[var(--font-inter)] text-[1.05rem] font-light leading-[1.7] text-[#777777]">
              I build businesses and software. From brick and mortar to AI-powered systems.
            </p>
            <div className="mt-10 flex items-center gap-6 font-[var(--font-inter)] text-sm">
              <a href="#build" className="border-b border-[#333] pb-1 text-[#e8e8e8] hover:text-[#f0f0f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]">
                See what I&apos;m building
              </a>
              <a
                href="https://instagram.com/darren_builds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] hover:text-[#e8e8e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div
              className="group relative h-[420px] overflow-hidden md:h-[680px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 72%, transparent 100%), linear-gradient(to right, black 0%, black 55%, transparent 100%)",
                WebkitMaskComposite: "destination-in",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 72%, transparent 100%), linear-gradient(to right, black 0%, black 55%, transparent 100%)",
                maskComposite: "intersect",
              }}
            >
              <Image
                src="/images/darren-hero-v2.jpg"
                alt="Black and white portrait of Darren"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
                quality={85}
                style={{
                  objectFit: "cover",
                  objectPosition: "center 15%",
                  filter: "grayscale(100%) brightness(0.8) contrast(1.1)",
                }}
                className="motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:motion-safe:scale-[1.025]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
