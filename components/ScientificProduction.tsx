import { scientificAreas } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Rings } from "./Decor";

export function ScientificProduction() {
  return (
    <section id="ciencia" className="section relative overflow-hidden">
      <Rings className="pointer-events-none absolute -bottom-28 -left-32 h-[480px] w-[480px] text-ink opacity-[0.06]" />
      <div className="wrap relative">
        <SectionHeading
          index="08"
          eyebrow="Estudo e produção"
          title="Tricologia séria se sustenta em estudo contínuo."
          lede="O que embasa a prática do instituto: produção acadêmica, formação permanente e compartilhamento de conhecimento. Esta área reúne essa trajetória."
        />

        <div className="mt-16 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {scientificAreas.map((area, i) => (
            <Reveal key={area.label} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col border-b border-r border-line p-8 transition-colors duration-300 hover:bg-sand">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mono border border-line px-2 py-1 text-[0.625rem] uppercase tracking-[0.14em] text-ink-mute">
                    em breve
                  </span>
                </div>
                <h3 className="display mt-8 text-lg text-ink">{area.label}</h3>
                <p className="mt-2.5 text-sm text-ink-soft">{area.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 mono text-xs uppercase tracking-[0.12em] text-ink-mute">
            Espaço preparado para artigos · monografia · certificações · aulas ·
            entrevistas · produção acadêmica
          </p>
        </Reveal>
      </div>
    </section>
  );
}
