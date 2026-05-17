"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos — usar 0.08 × index para stagger. */
  delay?: number;
  /** Distância vertical inicial em px. */
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: reduce ? 0.2 : 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
