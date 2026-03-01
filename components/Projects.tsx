import { Container } from "./Container";

const projects = [
  { name: "PaletteCheck", desc: "AI powered brand compliance.", status: "Live" },
  { name: "PolicyPhile", desc: "AI policy Q&A for teams.", status: "Beta" },
  { name: "Social API", desc: "API driven distribution infrastructure.", status: "Building" },
  { name: "Experiments", desc: "Always something in progress.", status: "Always" },
] as const;

const badgeStyles: Record<string, string> = {
  Live: "text-[#4aab74] border-[#1a3d2a] bg-[#0a1f14]",
  Beta: "text-[#6a8fc5] border-[#1a2a40] bg-[#0a1220]",
  Building: "text-[#c09050] border-[#3d2a10] bg-[#1f1408]",
  Always: "text-[#555555] border-[#1e1e1e] bg-[#0d0d0d]",
};

export function Projects() {
  return (
    <section id="build" className="border-t border-[#1c1c1c] py-20">
      <Container>
        <p className="font-[var(--font-inter)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[#444444]">
          What I&apos;m Building Now
        </p>
        <h2 className="mt-4 font-[var(--font-dm-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-[#f0f0f0]">
          What I&apos;m Building Now
        </h2>

        <div className="mt-8 grid border border-[#1c1c1c] md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`p-6 ${i % 2 === 0 ? "md:border-r md:border-[#1c1c1c]" : ""} ${i > 1 ? "border-t border-[#1c1c1c]" : ""} hover:bg-[#0f0f0f]`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-[var(--font-inter)] text-base font-medium text-[#e0e0e0]">{project.name}</h3>
                <span className={`rounded border px-2.5 py-1 font-[var(--font-inter)] text-[0.65rem] font-medium uppercase tracking-[0.1em] ${badgeStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>
              <p className="mt-3 font-[var(--font-inter)] text-[0.88rem] font-light text-[#555555]">
                {project.desc}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
