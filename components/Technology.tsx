import { technologies } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Rings } from "./Decor";

export function Technology() {
  return (
    <section id="tecnologia" className="section relative overflow-hidden">
      <Rings className="pointer-events-none absolute -right-28 top-12 h-[440px] w-[440px] text-ink opacity-[0.06]" />
      <div className="wrap relative">
        <SectionHeading
          index="03"
          eyebrow="Tecnologia aplicada"
          title="Recursos que mostram o que o olho não vê."
          lede="A tecnologia não substitui o raciocínio clínico, ela o sustenta. Cada recurso é usado conforme a leitura do seu caso, nunca como pacote padrão."
        />

        <div className="mt-16 grid border-t border-line md:grid-cols-2">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={(i % 2) * 0.08}>
              <article
                className={`group relative h-full border-b border-line p-9 transition-colors duration-300 hover:bg-sand lg:p-11 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="display text-4xl text-ink/12 transition-colors duration-300 group-hover:text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mono text-xs uppercase tracking-[0.16em] text-ink-mute">
                    Recurso
                  </span>
                </div>
                <h3 className="display mt-8 text-xl text-ink">{tech.name}</h3>
                <p className="mt-3 max-w-[44ch] text-base text-ink-soft">
                  {tech.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
