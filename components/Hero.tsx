"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { clinic } from "@/lib/data";
import { Button } from "./ui/Button";
import { Strands } from "./Decor";

const ease = [0.16, 1, 0.3, 1] as const;

const meta = [
  "Instituto de Tricologia Clínica",
  "Investigação multifatorial",
  "Moema · São Paulo",
];

const pillars = [
  { n: "01", label: "Investigação", text: "Antes do protocolo, o estudo do caso." },
  { n: "02", label: "Individual", text: "Cada couro cabeludo pede uma estratégia." },
  { n: "03", label: "Acompanhamento", text: "Resposta medida com critério, ao longo de meses." },
];

function ClipLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? { opacity: 0 } : { y: "108%" }}
        animate={reduce ? { opacity: 1 } : { y: "0%" }}
        transition={{ duration: 1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const lensY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section
      ref={ref}
      id="topo"
      className="relative overflow-hidden border-b border-line pt-[76px]"
    >
      {/* Grafismo — lente de tricoscopia */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: lensY }}
        className="pointer-events-none absolute -right-24 -top-10 hidden h-[560px] w-[560px] md:block"
      >
        <motion.svg
          viewBox="0 0 560 560"
          fill="none"
          className="h-full w-full"
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.6, ease }}
        >
          {[260, 200, 140, 80].map((r) => (
            <circle
              key={r}
              cx="280"
              cy="280"
              r={r}
              stroke="#1f1f1f"
              strokeOpacity="0.1"
            />
          ))}
          <motion.circle
            cx="280"
            cy="280"
            r="230"
            stroke="#c9a560"
            strokeOpacity="0.5"
            strokeDasharray="2 12"
            initial={{ rotate: 0 }}
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 90, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "280px 280px" }}
          />
          <line x1="280" y1="20" x2="280" y2="540" stroke="#1f1f1f" strokeOpacity="0.08" />
          <line x1="20" y1="280" x2="540" y2="280" stroke="#1f1f1f" strokeOpacity="0.08" />
        </motion.svg>
      </motion.div>

      <Strands className="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.04]" />

      {/* Meta-barra técnica */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        className="relative border-b border-line"
      >
        <div className="wrap flex flex-wrap items-center gap-x-8 gap-y-1 py-3">
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-8">
              {i > 0 && (
                <span aria-hidden className="h-1 w-1 bg-gold" />
              )}
              <span className="mono text-xs uppercase tracking-[0.14em] text-ink-mute">
                {m}
              </span>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="wrap relative py-16 lg:py-24">
        <h1 className="serif text-[clamp(2.85rem,6.6vw,5.5rem)] text-ink">
          <ClipLine delay={0.25}>A queda de cabelo</ClipLine>
          <ClipLine delay={0.34} className="text-ink-mute">
            é um sintoma.
          </ClipLine>
          <span className="mt-2 block">
            <ClipLine delay={0.46}>
              <span className="relative inline-block">
                A causa é o que investigamos
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease, delay: 1.3 }}
                />
              </span>
              .
            </ClipLine>
          </span>
        </h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="lede mt-9 max-w-[56ch]"
        >
          Cada queda tem uma origem, e quase nunca é só uma. Antes de qualquer
          protocolo, estudamos o seu caso: tricoscopia, histórico e os fatores
          que, juntos, explicam o que acontece com o seu cabelo.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.82 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button href={clinic.whatsappHref} external>
            Agendar avaliação capilar
          </Button>
          <Button href="#pre-avaliacao" variant="secondary" withArrow>
            Fazer a pré-avaliação
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 1 }}
          className="mt-16 grid border-t border-line sm:grid-cols-3"
        >
          {pillars.map((p, i) => (
            <li
              key={p.n}
              className={`py-7 sm:py-8 ${
                i > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-7" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="mono text-xs text-gold-deep">{p.n}</span>
                <span className="eyebrow text-ink">{p.label}</span>
              </div>
              <p className="mt-3 max-w-[30ch] text-sm text-ink-soft sm:pr-6">
                {p.text}
              </p>
            </li>
          ))}
        </motion.ul>

        <motion.figure
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.1 }}
          className="group relative mt-6 aspect-[16/9] overflow-hidden border border-line"
        >
          <Image
            src="/images/extra-1.png"
            alt="Ambiente do instituto de tricologia SmileSkin, em Moema."
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.04]"
          />
          <figcaption className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-paper/90 px-3.5 py-2 backdrop-blur-sm">
            <span aria-hidden className="h-1.5 w-1.5 bg-gold" />
            <span className="mono text-xs uppercase tracking-[0.16em] text-ink">
              Instituto SmileSkin · Moema
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
