import { videos, clinic } from "@/lib/data";
import { VideoPlayer } from "./ui/VideoPlayer";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function VideoShowcase() {
  const [v1, v2, v3] = videos;

  return (
    <section id="instituto" className="section bg-sand">
      <div className="wrap">
        <SectionHeading
          index="▸"
          eyebrow="Por dentro do instituto"
          title="O instituto em movimento."
          lede="Transparência também é mostrar a rotina real: a avaliação, a tecnologia e o cuidado acontecendo. Veja por dentro."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="h-full">
            <VideoPlayer
              src={v1.src}
              poster={v1.poster}
              label={v1.caption}
              className="aspect-[4/5] lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <VideoPlayer
                src={v2.src}
                poster={v2.poster}
                label={v2.caption}
                className="aspect-[16/9]"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <VideoPlayer
                  src={v3.src}
                  poster={v3.poster}
                  label={v3.caption}
                  className="aspect-square"
                />
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex aspect-square flex-col justify-between border border-ink bg-ink p-7 transition-colors duration-300 hover:bg-ink/90"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs uppercase tracking-[0.16em] text-gold">
                      Instagram
                    </span>
                    <span
                      aria-hidden
                      className="text-paper transition-transform duration-300 ease-out-quint group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      &#8599;
                    </span>
                  </div>
                  <div>
                    <p className="display text-xl text-paper">
                      Conteúdo educativo, toda semana.
                    </p>
                    <p className="mt-2 mono text-xs text-paper/55">
                      {clinic.instagramHandle}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 mono text-xs uppercase tracking-[0.1em] text-ink-mute">
            Vídeos do instituto · legendas e ordem ajustáveis conforme o conteúdo
          </p>
        </Reveal>
      </div>
    </section>
  );
}
