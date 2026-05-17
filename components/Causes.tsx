"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { causes } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Strands } from "./Decor";

const ease = [0.16, 1, 0.3, 1] as const;

export function Causes() {
  const [active, setActive] = useState(0);
  const current = causes[active];

  return (
    <section id="causas" className="section relative overflow-hidden">
      <Strands className="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.05]" />
      <div className="wrap relative">
        <SectionHeading
          index="01"
          eyebrow="A queda é multifatorial"
          title="Nem toda queda de cabelo é genética."
          lede="Genética é a explicação mais repetida, mas raramente é a única. Estes são fatores que investigamos, e a maioria dos casos combina mais de um."
        />

        <div className="mt-16 grid border-t border-line lg:grid-cols-[1fr_1fr]">
          {/* Lista interativa */}
          <ul className="border-line lg:border-r">
            {causes.map((cause, i) => {
              const on = i === active;
              return (
                <li key={cause.title} className="border-b border-line">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group flex w-full items-center gap-5 py-5 pr-4 text-left"
                  >
                    <span
                      className={`mono text-xs transition-colors duration-200 ${
                        on ? "text-gold-deep" : "text-ink-mute"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-lg transition-colors duration-200 ${
                        on ? "text-ink" : "text-ink-soft group-hover:text-ink"
                      }`}
                    >
                      {cause.title}
                    </span>
                    <span
                      aria-hidden
                      className={`h-px transition-all duration-300 ease-out-quint ${
                        on ? "w-8 bg-gold" : "w-3 bg-line-strong"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Painel de detalhe */}
          <div className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden border-b border-line bg-sand p-9 lg:min-h-0 lg:border-b-0 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease }}
              >
                <span className="display block text-[6rem] leading-none text-ink/8">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="serif mt-6 text-3xl text-ink">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-base text-ink-soft">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex gap-1.5">
              {causes.map((c, i) => (
                <span
                  key={c.title}
                  className={`h-1 transition-all duration-300 ${
                    i === active ? "w-7 bg-gold" : "w-3 bg-line-strong"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
