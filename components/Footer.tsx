import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] py-12">
      <Container>
        <div className="flex justify-end">
          <div className="flex items-center gap-4 font-[var(--font-inter)] text-[0.82rem] text-[#555555]">
            <a href="https://x.com/Darren_Builds" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e8]">X</a>
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
