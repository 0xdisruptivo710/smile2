"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Follicle } from "./Decor";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="section relative overflow-hidden">
      <Follicle className="pointer-events-none absolute -right-12 top-1/2 hidden h-[440px] -translate-y-1/2 text-ink opacity-[0.07] lg:block" />
      <div className="wrap relative">
        <SectionHeading
          index="12"
          eyebrow="Dúvidas frequentes"
          title="O que costuma vir antes do agendamento."
        />

        <div className="mt-12 border-t border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span className="mono text-xs text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display flex-1 text-lg text-ink lg:text-xl">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border text-ink transition-colors duration-300 ${
                        isOpen
                          ? "border-gold bg-gold"
                          : "border-line-strong group-hover:border-ink"
                      }`}
                    >
                      <span
                        className={`relative block h-3 w-3 transition-transform duration-300 ease-out-quint ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                      </span>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[68ch] pb-7 pl-9 text-base text-ink-soft">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
