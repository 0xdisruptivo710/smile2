import Image from "next/image";
import { clinicalRecords } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function ClinicalRecords() {
  return (
    <section id="registros" className="section bg-sand">
      <div className="wrap">
        <SectionHeading
          index="09"
          eyebrow="Registros de acompanhamento"
          title="A tricoscopia documenta o que o acompanhamento revela."
          lede="Registrar o couro cabeludo ao longo do tempo é parte do método: permite comparar com critério e ajustar o protocolo com base no que de fato mudou."
        />

        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {clinicalRecords.map((record, i) => (
            <Reveal key={record.src} delay={(i % 4) * 0.07}>
              <figure className="group h-full border-b border-r border-line bg-white p-3">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <Image
                    src={record.src}
                    alt={`${record.caption} — registro de tricoscopia do instituto SmileSkin.`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover transition-transform duration-[800ms] ease-out-quint group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 bg-ink/85 px-2.5 py-1 mono text-[0.625rem] uppercase tracking-[0.14em] text-paper">
                    REG · 0{i + 1}
                  </span>
                </div>
                <figcaption className="flex items-center gap-2.5 px-1 pb-1 pt-3">
                  <span aria-hidden className="h-1.5 w-1.5 bg-gold" />
                  <span className="text-sm text-ink-soft">{record.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[70ch] text-sm text-ink-mute">
            Imagens de tricoscopia de paciente real, utilizadas com autorização.
            São registros do processo de acompanhamento, não uma promessa de
            resultado: cada caso é único e a resposta capilar varia conforme a
            causa, o organismo e a adesão ao protocolo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
