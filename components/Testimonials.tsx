import { testimonials } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Strands } from "./Decor";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section relative overflow-hidden">
      <Strands className="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.05]" />
      <div className="wrap relative">
        <SectionHeading
          index="10"
          eyebrow="Quem foi atendido"
          title="A confiança vem da seriedade, não da promessa."
          lede="Avaliações reais de pacientes do Dr. Deli, publicadas no perfil do Google da clínica."
        />

        <div className="mt-14 grid border-l border-t border-line md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="group flex h-full flex-col border-b border-r border-line bg-white p-9 transition-colors duration-300 hover:bg-sand lg:p-11">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className="display text-4xl leading-none text-gold"
                  >
                    &ldquo;
                  </span>
                  <span className="mono text-xs text-ink-mute">
                    {String(i + 1).padStart(2, "0")} / Google
                  </span>
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                  <span aria-hidden className="h-2 w-2 shrink-0 bg-gold" />
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block mono text-xs text-ink-mute">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
