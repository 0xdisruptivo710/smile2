"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { investigationSteps } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function Heading() {
  return (
    <div>
      <div className="flex items-center gap-4 border-t border-line-strong pt-4">
        <span className="mono text-xs font-medium text-gold-deep">[ 02 ]</span>
        <span className="eyebrow text-ink-mute">Como investigamos</span>
      </div>
      <h2 className="serif mt-7 max-w-[18ch] text-4xl text-ink lg:text-5xl">
        Existe um método científico por trás de cada protocolo.
      </h2>
    </div>
  );
}

function MethodPinned() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const n = investigationSteps.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n + 0.0001))));
  });

  const step = investigationSteps[active];

  return (
    <div ref={ref} className="hidden lg:block lg:h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="wrap grid w-full grid-cols-[0.95fr_1.05fr] gap-16">
          <div>
            <Heading />
            <div className="mt-12 flex gap-6">
              <div className="relative w-px shrink-0 bg-line">
                <motion.div
                  className="absolute left-0 top-0 w-px bg-gold"
                  style={{ height: fill }}
                />
              </div>
              <ul className="flex flex-col gap-6">
                {investigationSteps.map((s, i) => (
                  <li key={s.index}>
                    <span
                      className={`mono text-xs transition-colors duration-300 ${
                        i === active ? "text-gold-deep" : "text-ink-mute"
                      }`}
                    >
                      {s.index}
                    </span>
                    <span
                      className={`mt-1 block text-lg transition-colors duration-300 ${
                        i === active ? "text-ink" : "text-ink-mute"
                      }`}
                    >
                      {s.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex min-h-[24rem] flex-col justify-between border border-line bg-white p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease }}
              >
                <span className="display block text-[7rem] leading-none text-ink/8">
                  {step.index}
                </span>
                <h3 className="serif mt-4 text-4xl text-ink">{step.title}</h3>
                <p className="mt-5 max-w-[44ch] text-lg text-ink-soft">
                  {step.body}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex gap-1.5">
              {investigationSteps.map((s, i) => (
                <span
                  key={s.index}
                  className={`h-1 transition-all duration-500 ${
                    i === active ? "w-12 bg-gold" : "w-6 bg-line-strong"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MethodStacked() {
  return (
    <div className="wrap lg:hidden">
      <Heading />
      <ol className="mt-12 border-t border-line">
        {investigationSteps.map((s) => (
          <motion.li
            key={s.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.6, ease }}
            className="border-b border-line py-7"
          >
            <span className="mono text-xs text-gold-deep">{s.index}</span>
            <h3 className="serif mt-2 text-2xl text-ink">{s.title}</h3>
            <p className="mt-2.5 text-base text-ink-soft">{s.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function Investigation() {
  return (
    <section id="investigacao" className="bg-sand py-24 lg:py-0">
      <MethodPinned />
      <MethodStacked />
    </section>
  );
}
