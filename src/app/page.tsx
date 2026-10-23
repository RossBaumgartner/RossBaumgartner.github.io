import { Background, Contact, Skills } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Work } from "@/components/Work";
import { profile } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Background />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl px-5 pb-10 text-center font-mono text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, Tailwind & Motion, with help from Claude Code
      </footer>
    </>
  );
}
