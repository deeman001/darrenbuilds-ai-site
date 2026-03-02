import { Container } from "./Container";

export function Nav() {
  return (
    <nav className="border-b border-[#1c1c1c]" aria-label="Primary">
      <Container>
        <div className="flex items-center justify-between py-5">
          <a
            href="/"
            className="font-[var(--font-inter)] text-[0.8rem] font-medium uppercase tracking-[0.2em] text-[#e8e8e8]"
            aria-label="Darren Builds home"
          >
            darrenbuilds.ai
          </a>
          <div className="hidden items-center gap-8 font-[var(--font-inter)] text-[0.82rem] font-normal tracking-[0.02em] text-[#555555] md:flex">
            <a href="#arc" className="hover:text-[#e8e8e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]">About</a>
            <a href="#build" className="hover:text-[#e8e8e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]">Building</a>
            <a href="#principles" className="hover:text-[#e8e8e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]">How</a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
