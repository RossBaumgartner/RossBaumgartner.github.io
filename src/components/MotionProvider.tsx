"use client";

import { MotionConfig } from "motion/react";

// Respect the visitor's "reduce motion" OS setting for every animation.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
