import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a
            href="mailto:hello@darrenbuilds.ai"
            className="border-b border-[#333] pb-1 font-[var(--font-inter)] text-[0.82rem] text-[#e8e8e8] hover:text-[#f0f0f0]"
          >
            hello@darrenbuilds.ai
          </a>

          <div className="flex items-center gap-4 font-[var(--font-inter)] text-[0.82rem] text-[#555555]">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e8]">X</a>
            <span>·</span>
            <a href="https://instagram.com/darren_builds" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e8]">Instagram</a>
            <span>·</span>
            <a href="https://linkedin.com/in/darrenpeterson" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e8]">LinkedIn</a>
          </div>
        </div>

        <p className="mt-10 text-center font-[var(--font-inter)] text-[0.72rem] tracking-[0.02em] text-[#2a2a2a]">
          © 2026 Darren Peterson · darrenbuilds.ai
        </p>
      </Container>
    </footer>
  );
}
