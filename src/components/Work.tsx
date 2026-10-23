import { featured, highlights } from "@/data/resume";
import { Reveal, SectionHeading } from "./Reveal";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading index="01" label={featured.eyebrow} title={featured.title} />

      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{featured.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {featured.points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <Tags items={featured.stack} />
      </Reveal>

      <div className="mt-24 grid gap-5 md:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.1} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_30px_-12px_var(--accent)]">
              <h3 className="font-semibold">{h.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{h.body}</p>
              <div className="mt-5">
                <Tags items={h.stack} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
