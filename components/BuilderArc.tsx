import { Container } from "./Container";

export function BuilderArc() {
  return (
    <section id="arc" className="border-t border-[#1c1c1c] py-20" aria-labelledby="arc-title">
      <Container>
        <p className="font-[var(--font-inter)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[#444444]">
          The Builder Arc
        </p>
        <h2
          id="arc-title"
          className="mt-4 font-[var(--font-dm-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-[#f0f0f0]"
        >
          The Builder Arc
        </h2>
        <div className="mt-8 max-w-[70ch] space-y-7 font-[var(--font-inter)] text-[1.05rem] font-light leading-[1.85] text-[#888888]">
          <p>
            I started coding at 11.<br />
            Computer science was always home.
          </p>
          <p>
            Then I built Finley&apos;s Barbershop … an idea that became 18 years of building and refining a multi-location brand.
          </p>
          <p>
            After leading its growth and transition, I returned to software … fully focused, at a time when AI is redefining what&apos;s possible.
          </p>
          <p>Same builder. Different tools.</p>
          <p className="pt-6 font-normal text-[#e8e8e8]">
            This might be the most exciting time to build.
          </p>
        </div>
      </Container>
    </section>
  );
}
