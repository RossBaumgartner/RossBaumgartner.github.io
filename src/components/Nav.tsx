"use client";

import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium">
          rb<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </nav>
      <motion.div
        className="h-px origin-left bg-accent"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
