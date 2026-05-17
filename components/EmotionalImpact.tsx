import Image from "next/image";
import { emotionalPoints } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function EmotionalImpact() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden className="dot-grid absolute inset-0 opacity-[0.4]" />
      <div className="wrap relative section">
        <Reveal>
          <div className="flex items-center gap-4 border-t border-paper/20 pt-4">
            <span className="mono text-xs font-medium text-gold">[ 04 ]</span>
            <span className="eyebrow text-paper/55">O lado que ninguém mede</span>
          </div>
          <p className="serif mt-8 max-w-[18ch] text-4xl text-paper lg:text-5xl">
            Cabelo é identidade. Cuidar dele é cuidar de como você se vê.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <figure className="group relative aspect-[2/1] overflow-hidden border border-paper/15">
            <Image
              src="/images/extra-3.png"
              alt="O cuidado humano por trás do tratamento capilar na SmileSkin."
              fill
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="object-cover transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.04]"
            />
          </figure>
        </Reveal>

        <div className="mt-5 grid gap-px border border-paper/15 bg-paper/15 md:grid-cols-2">
          {emotionalPoints.map((point, i) => (
            <Reveal key={point} delay={i * 0.1}>
              <div className="h-full bg-ink p-9 lg:p-11">
                <span className="mono text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-lg leading-relaxed text-paper/80">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
