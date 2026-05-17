"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  quizQuestions,
  quizFactors,
  clinic,
  type QuizFactorId,
} from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

type Phase = "intro" | "quiz" | "result";

const ease = [0.16, 1, 0.3, 1] as const;
const total = quizQuestions.length;

export function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const choose = (optionIndex: number) => {
    const next = [...answers];
    next[current] = optionIndex;
    setAnswers(next);
    if (current + 1 < total) setCurrent(current + 1);
    else setPhase("result");
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
    else setPhase("intro");
  };

  const restart = () => {
    setPhase("intro");
    setCurrent(0);
    setAnswers([]);
  };

  const factors: QuizFactorId[] = Array.from(
    new Set(
      answers.flatMap((optIdx, qIdx) =>
        optIdx === undefined ? [] : quizQuestions[qIdx].options[optIdx].factors,
      ),
    ),
  );

  const filled = phase === "intro" ? 0 : phase === "result" ? total : current + 1;
  const stepLabel =
    phase === "intro"
      ? "00"
      : phase === "result"
        ? String(total).padStart(2, "0")
        : String(current + 1).padStart(2, "0");
  const note =
    phase === "intro"
      ? "Comece quando quiser. Nenhum dado é salvo."
      : phase === "result"
        ? "Leve este resultado para a sua avaliação presencial."
        : "Sem cadastro. As respostas ficam apenas no seu navegador.";

  return (
    <section id="pre-avaliacao" className="section bg-sand">
      <div className="wrap">
        <SectionHeading
          index="11"
          eyebrow="Questionário inteligente"
          title="Pré-avaliação capilar: descubra o que investigar."
          lede="Sete perguntas que apontam os possíveis fatores por trás do seu caso. É um conteúdo educativo e orientativo, nunca um diagnóstico."
        />

        <div className="mt-12 grid border border-ink lg:grid-cols-[0.82fr_1.18fr]">
          {/* Painel — instrumento */}
          <div className="relative overflow-hidden border-b border-ink bg-ink p-8 lg:border-b-0 lg:p-10">
            <div aria-hidden className="dot-grid absolute inset-0 opacity-30" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-gold">Pré-avaliação</span>
                <span className="mono text-xs text-paper/45">SS · TRIC</span>
              </div>

              <div className="mt-10 flex items-end gap-2">
                <span className="display text-6xl leading-[0.8] text-paper">
                  {stepLabel}
                </span>
                <span className="mono mb-1 text-sm text-paper/45">
                  / {String(total).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 flex gap-1.5">
                {Array.from({ length: total }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 transition-colors duration-300 ${
                      i < filled ? "bg-gold" : "bg-paper/15"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-auto pt-10 max-w-[34ch] text-sm text-paper/55">
                {note}
              </p>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="relative bg-white">
            <AnimatePresence mode="wait">
              {phase === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease }}
                  className="p-8 lg:p-12"
                >
                  <span className="mono text-xs uppercase tracking-[0.16em] text-gold-deep">
                    Instrumento educativo
                  </span>
                  <h3 className="serif mt-5 max-w-[22ch] text-3xl text-ink lg:text-4xl">
                    Quais fatores podem estar por trás da sua queda?
                  </h3>
                  <p className="mt-4 max-w-[54ch] text-base text-ink-soft">
                    Responda 7 perguntas sobre o seu cabelo e a sua rotina. No
                    fim, você verá os fatores que merecem investigação, e como
                    levá-los para uma avaliação presencial.
                  </p>
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button onClick={() => setPhase("quiz")} withArrow>
                      Começar a pré-avaliação
                    </Button>
                    <span className="mono text-xs uppercase tracking-[0.12em] text-ink-mute">
                      7 perguntas · ~1 min
                    </span>
                  </div>
                </motion.div>
              )}

              {phase === "quiz" && (
                <motion.div
                  key={`q-${current}`}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.32, ease }}
                  className="flex min-h-[26rem] flex-col p-8 lg:p-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs uppercase tracking-[0.14em] text-gold-deep">
                      Pergunta {current + 1} de {total}
                    </span>
                    <button
                      type="button"
                      onClick={back}
                      className="mono text-xs uppercase tracking-[0.12em] text-ink-mute transition-colors hover:text-ink"
                    >
                      ← Voltar
                    </button>
                  </div>

                  <h3 className="serif mt-7 max-w-[24ch] text-3xl text-ink">
                    {quizQuestions[current].question}
                  </h3>

                  <div className="mt-7 flex flex-col">
                    {quizQuestions[current].options.map((opt, oi) => {
                      const active = answers[current] === oi;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => choose(oi)}
                          className={`group flex items-center gap-4 border-t border-line py-4 text-left transition-colors duration-200 last:border-b hover:bg-sand ${
                            active ? "bg-sand" : ""
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-200 ${
                              active
                                ? "border-gold bg-gold"
                                : "border-line-strong group-hover:border-ink"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 transition-colors ${
                                active ? "bg-ink" : "bg-transparent"
                              }`}
                            />
                          </span>
                          <span className="text-base text-ink">
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {phase === "result" && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease }}
                  className="p-8 lg:p-12"
                >
                  <span className="mono text-xs uppercase tracking-[0.16em] text-gold-deep">
                    Sua pré-avaliação
                  </span>
                  <h3 className="serif mt-5 max-w-[26ch] text-3xl text-ink lg:text-4xl">
                    {factors.length > 0
                      ? "Fatores que merecem investigação no seu caso"
                      : "Vale uma investigação tricoscópica do seu caso"}
                  </h3>

                  {factors.length > 0 ? (
                    <ul className="mt-7 grid border-l border-t border-line sm:grid-cols-2">
                      {factors.map((id) => (
                        <li
                          key={id}
                          className="border-b border-r border-line p-5"
                        >
                          <div className="flex items-center gap-2.5">
                            <span aria-hidden className="h-2 w-2 bg-gold" />
                            <p className="display text-base text-ink">
                              {quizFactors[id].label}
                            </p>
                          </div>
                          <p className="mt-2 text-sm text-ink-soft">
                            {quizFactors[id].note}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-5 max-w-[56ch] text-base text-ink-soft">
                      Mesmo sem fatores evidentes nas suas respostas, a leitura
                      do couro cabeludo no tricoscópio é a forma de entender o
                      seu caso com precisão.
                    </p>
                  )}

                  <div className="mt-7 flex gap-3 border border-line bg-sand p-5">
                    <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 bg-gold" />
                    <p className="text-sm text-ink-soft">
                      Esta pré-avaliação é educativa e orientativa. Aponta
                      caminhos a investigar, não um diagnóstico. O entendimento
                      real do seu caso acontece na avaliação presencial.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button href={clinic.whatsappHref} external withArrow>
                      Agendar avaliação capilar
                    </Button>
                    <button
                      type="button"
                      onClick={restart}
                      className="mono text-xs uppercase tracking-[0.12em] text-ink-mute transition-colors hover:text-ink"
                    >
                      Refazer a pré-avaliação
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
