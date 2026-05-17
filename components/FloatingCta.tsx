"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { clinic } from "@/lib/data";

function WhatsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" />
      <path d="M9 9.2c.3 2 3.3 5 5.3 5.3.8.1 1.7-.6 2-1.2.2-.4 0-.7-.3-.8l-1.9-1c-.3-.1-.5 0-.7.2l-.5.6c-1.3-.5-2.4-1.6-2.9-2.9l.6-.5c.2-.2.3-.4.2-.7l-1-1.9c-.1-.3-.4-.5-.8-.3-.6.3-1.3 1.2-1.2 2Z" />
    </svg>
  );
}

export function FloatingCta() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 760);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.a
            key="wa-circle"
            href={clinic.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com o instituto SmileSkin pelo WhatsApp"
            initial={{ opacity: 0, x: 56 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 56 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lift transition-colors duration-200 hover:bg-gold hover:text-ink sm:flex"
            style={
              reduce
                ? undefined
                : { animation: "wa-pulse 6s ease-in-out infinite" }
            }
          >
            <WhatsIcon className="h-7 w-7" />
          </motion.a>

          <motion.div
            key="cta-bar"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-xl sm:hidden"
          >
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center bg-ink py-3.5 text-sm font-semibold text-paper"
            >
              Agendar avaliação capilar
            </a>
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar pelo WhatsApp"
              className="flex h-12 w-12 shrink-0 items-center justify-center border border-line-strong text-ink"
            >
              <WhatsIcon className="h-6 w-6" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
