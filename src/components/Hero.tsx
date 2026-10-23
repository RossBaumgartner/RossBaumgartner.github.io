"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/resume";
import { asset } from "@/lib/asset";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full" aria-hidden />

      <motion.div
        className="relative mx-auto max-w-5xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={item} className="flex items-center gap-4">
          <Image
            src={asset(profile.photo)}
            alt={profile.name}
            width={64}
            height={64}
            priority
            className="h-16 w-16 rounded-full border border-border object-cover"
          />
          <div>
            <h1 className="text-lg font-semibold">{profile.name}</h1>
            <p className="text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
        >
          {profile.headline.split("AI agents")[0]}
          <span className="bg-gradient-to-r from-accent to-fuchsia-500 bg-clip-text text-transparent">
            AI agents
          </span>
          {profile.headline.split("AI agents")[1]}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.summary}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
