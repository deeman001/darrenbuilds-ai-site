import { Container } from "./Container";

const principles = [
  "Systems over features",
  "Distribution matters",
  "Delete more than you add",
  "Real world experience informs better software",
];

export function HowIBuild() {
  return (
    <section id="principles" className="border-t border-[#1c1c1c] py-20">
      <Container>
        <p className="font-[var(--font-inter)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[#444444]">
          How I Build
        </p>
        <h2 className="mt-4 font-[var(--font-dm-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-[#f0f0f0]">
          How I Build
        </h2>

        <ul className="mt-8 divide-y divide-[#1c1c1c] border-y border-[#1c1c1c]">
          {principles.map((item) => (
            <li key={item} className="flex items-center gap-4 py-5 font-[var(--font-inter)] text-[1rem] text-[#e8e8e8]">
              <span className="inline-block h-px w-[22px] bg-[#333333]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
