import { protocols, clinic } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Strands } from "./Decor";

export function Protocols() {
  return (
    <section id="protocolos" className="section relative overflow-hidden bg-sand">
      <Strands className="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.05]" />
      <div className="wrap relative">
        <SectionHeading
          index="05"
          eyebrow="Protocolos personalizados"
          title="O protocolo nasce da investigação, não de um catálogo."
          lede="Não existe tratamento único que sirva a todos. O que oferecemos são frentes de cuidado que se combinam conforme o seu caso e a sua resposta ao longo do acompanhamento."
        />

        <div className="mt-16 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((p, i) => (
            <Reveal key={p.index} delay={(i % 3) * 0.06}>
              <article className="group relative h-full border-b border-r border-line bg-paper p-8 transition-colors duration-300 hover:bg-white lg:p-9">
                <div className="flex items-baseline justify-between">
                  <span className="display text-4xl text-ink/12 transition-colors duration-300 group-hover:text-gold-deep">
                    {p.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-2 w-2 bg-line-strong transition-colors duration-300 group-hover:bg-gold"
                  />
                </div>
                <h3 className="display mt-8 text-xl text-ink">{p.name}</h3>
                <p className="mt-2.5 text-base text-ink-soft">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-5 border border-ink bg-ink p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
            <p className="max-w-[52ch] text-lg text-paper/85">
              Qual frente faz sentido para você só se define depois da
              avaliação. É ela que orienta tudo.
            </p>
            <Button
              href={clinic.whatsappHref}
              external
              className="shrink-0 bg-gold text-ink hover:bg-paper"
            >
              Agendar avaliação capilar
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
