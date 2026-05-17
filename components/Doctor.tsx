import { doctor, clinic } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function Doctor() {
  return (
    <section id="dr-deli" className="section bg-sand">
      <div className="wrap">
        <Reveal>
          <div className="grid border border-line lg:grid-cols-[0.82fr_1.18fr]">
            {/* Identidade */}
            <div className="relative overflow-hidden border-b border-line bg-ink p-9 lg:border-b-0 lg:border-r lg:p-12">
              <div
                aria-hidden
                className="dot-grid absolute inset-0 opacity-30"
              />
              <div className="relative">
                <div className="flex items-center gap-4 border-t border-paper/20 pt-4">
                  <span className="mono text-xs text-gold">[ 07 ]</span>
                  <span className="eyebrow text-paper/55">Quem conduz</span>
                </div>
                <h2 className="serif mt-9 text-4xl text-paper lg:text-5xl">
                  {doctor.name}
                </h2>
                <p className="mt-2 text-base text-gold">{doctor.role}</p>
                <ul className="mt-9 flex flex-col">
                  {doctor.credentials.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 border-t border-paper/15 py-3.5 mono text-xs text-paper/75"
                    >
                      <span className="text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Texto */}
            <div className="flex flex-col justify-center bg-white p-9 lg:p-14">
              {doctor.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-lg leading-relaxed text-ink-soft ${
                    i !== 0 ? "mt-5" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
              <div className="mt-10">
                <Button href={clinic.whatsappHref} external withArrow>
                  Agendar avaliação com o Dr. Deli
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
