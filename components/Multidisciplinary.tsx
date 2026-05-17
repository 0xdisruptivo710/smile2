import { multidisciplinary } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Multidisciplinary() {
  return (
    <section id="multiprofissional" className="section">
      <div className="wrap">
        <SectionHeading
          index="06"
          eyebrow="Visão integrada"
          title="O cabelo não vive isolado do resto do corpo."
          lede="Quando a investigação aponta para fora da tricologia, o caminho responsável é articular o cuidado com outras áreas, e não insistir sozinho."
        />

        <div className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {multidisciplinary.map((item, i) => (
            <Reveal key={item.area} delay={(i % 3) * 0.06}>
              <article
                className={`group h-full border-b border-line py-8 transition-colors duration-300 sm:px-7 ${
                  i % 2 === 1 ? "sm:border-l lg:border-l-0" : ""
                } ${i % 3 !== 0 ? "lg:border-l" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="mono text-xs text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-5 bg-line-strong transition-all duration-300 group-hover:w-9 group-hover:bg-gold"
                  />
                </div>
                <h3 className="display mt-5 text-xl text-ink">{item.area}</h3>
                <p className="mt-2.5 max-w-[34ch] text-base text-ink-soft">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
