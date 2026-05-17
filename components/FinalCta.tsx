import { clinic } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden className="dot-grid absolute inset-0 opacity-[0.35]" />
      <div className="wrap relative py-24 lg:py-36">
        <Reveal>
          <div className="flex items-center gap-4 border-t border-paper/20 pt-4">
            <span className="mono text-xs font-medium text-gold">[ → ]</span>
            <span className="eyebrow text-paper/55">O próximo passo</span>
            <span aria-hidden className="h-px flex-1 bg-paper/15" />
          </div>
          <h2 className="serif mt-9 max-w-[18ch] text-5xl text-paper lg:text-6xl">
            Toda investigação séria começa por uma avaliação.
          </h2>
          <p className="mt-7 max-w-[58ch] text-lg text-paper/70">
            A avaliação capilar é a porta de entrada do instituto: anamnese
            detalhada, leitura do couro cabeludo no tricoscópio e uma devolutiva
            honesta sobre o seu caso. Sem promessa fora da realidade.
          </p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={clinic.whatsappHref}
              external
              className="bg-gold text-ink hover:bg-paper"
            >
              Agendar avaliação capilar
            </Button>
            <a
              href="#pre-avaliacao"
              className="group inline-flex items-center gap-2 px-2 py-4 text-base font-semibold text-paper"
            >
              Antes, fazer a pré-avaliação
              <span
                aria-hidden
                className="transition-transform duration-200 ease-out-quint group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
