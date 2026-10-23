"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { experience } from "@/data/resume";
import { asset } from "@/lib/asset";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading index="02" label="Experience" title="Where I've worked" />

      <ol ref={ref} className="relative ml-2 space-y-14 border-l border-border pl-8 sm:pl-10">
        {/* Line that fills in as you scroll through the timeline. */}
        <motion.div
          aria-hidden
          className="absolute -left-px top-0 h-full w-px origin-top bg-accent"
          style={{ scaleY: scrollYProgress }}
        />
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full ring-4 ring-bg sm:-left-[calc(2.5rem+5px)] ${i === 0 ? "bg-accent" : "bg-muted"}`}
            />
            <Reveal>
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                <div className="flex items-center gap-3">
                  <Image
                    src={asset(job.logo)}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-md border border-border bg-white object-contain p-0.5"
                  />
                  <div>
                    <h3 className="font-semibold leading-tight">
                      {job.role}
                      {job.team && <span className="font-normal text-muted"> · {job.team}</span>}
                    </h3>
                    <p className="text-sm text-muted">
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}{" "}
                      · {job.type}
                    </p>
                  </div>
                </div>
                <p className="font-mono text-xs text-muted sm:text-right">
                  {job.dates}
                  <br />
                  {job.location}
                </p>
              </div>
              <ul className="mt-4 max-w-3xl space-y-2 text-[15px] leading-relaxed text-muted">
                {job.points.map((p) => (
                  <li key={p} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-border">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
