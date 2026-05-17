"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, clinic } from "@/lib/data";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-out-quint ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[76px] items-center justify-between">
        <Link href="#topo" aria-label="SmileSkin Tricologia — início" className="rounded-xs">
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={clinic.whatsappHref} external size="md">
            Agendar avaliação
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <div className="flex w-6 flex-col gap-[6px]">
            <span
              className={`h-[2px] w-full bg-ink transition-all duration-300 ease-out-quint ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-ink transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-ink transition-all duration-300 ease-out-quint ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Navegação principal" className="flex-1">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.08 + i * 0.06,
                    }}
                    className="border-b border-line"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="display flex items-baseline gap-3 py-5 text-3xl text-ink"
                    >
                      <span className="text-sm font-semibold text-gold-deep">
                        0{i + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 + navLinks.length * 0.06,
              }}
            >
              <Button href={clinic.whatsappHref} external className="w-full">
                Agendar avaliação
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
