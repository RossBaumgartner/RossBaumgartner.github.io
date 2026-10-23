import Image from "next/image";
import { education, profile, project, skills } from "@/data/resume";
import { asset } from "@/lib/asset";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading index="03" label="Skills" title="What I work with" />
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 2) * 0.1}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Background() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading index="04" label="Background" title="Education & earlier projects" />
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="h-full rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">{education.date}</p>
            <h3 className="mt-3 text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
              {education.honours}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-3">
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card sm:flex-row">
            <div className="flex aspect-square items-center overflow-hidden bg-black sm:aspect-auto sm:w-2/5 sm:shrink-0">
              <Image
                src={asset(project.image)}
                alt="Screenshot of Dungeoneer"
                width={300}
                height={300}
                className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{project.subtitle}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.body}</p>
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 pb-16 pt-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
          <div className="glow pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full" aria-hidden />
          <p className="relative font-mono text-xs uppercase tracking-widest text-accent">05 · Contact</p>
          <h2 className="relative mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s talk</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Want to chat about AI agents or backend systems? The best way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="relative mt-8 inline-block rounded-lg bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            {profile.email}
          </a>
          <div className="relative mt-6 flex justify-center gap-6 text-sm font-medium text-muted">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">GitHub ↗</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
