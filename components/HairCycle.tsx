"use client";

import { useState, useEffect } from "react";
import { Play, Pause, AlertCircle, Activity } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

// Cores dos vetores SVG — paleta SmileSkin.
const C = {
  ink: "#1f1f1f",
  gold: "#c9a560",
  line: "#e8e0d1",
  lineStrong: "#d8cdb4",
  channel: "#fcf8f2",
};

type CycleInfo = {
  phase: string;
  duration: string;
  desc: string;
  follicleDepth: string;
  thickness: string;
  activePercent: number;
  svg: React.ReactNode;
};

export function HairCycle() {
  const [cycleProgress, setCycleProgress] = useState(0);
  const [isMiniaturized, setIsMiniaturized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(120);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCycleProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, playbackSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const getDynamicCycleDetails = (): CycleInfo => {
    const follicleMaxDepth = isMiniaturized ? 130 : 185;
    const follicleMinDepth = isMiniaturized ? 95 : 115;
    const hairThickness = isMiniaturized ? 1.4 : 5;
    const hairColor = isMiniaturized ? "#8b8d8b" : "#111411";

    if (cycleProgress < 40) {
      const ratio = cycleProgress / 40;
      const currentBulbY = follicleMaxDepth;
      const maxHairLengthY = isMiniaturized ? 40 : -40;
      const currentHairTopY =
        follicleMaxDepth - ratio * (follicleMaxDepth - maxHairLengthY);

      return {
        phase: "Anágena (Crescimento ativo)",
        duration: isMiniaturized
          ? "3 a 9 meses (drasticamente encurtado)"
          : "2 a 7 anos (ciclo saudável)",
        desc: "Nesta fase ativa, o bulbo está ancorado profundamente e nutrido por uma rica rede vascular. Sob o efeito da miniaturização, esta fase encurta progressivamente, impedindo que o fio ganhe comprimento e espessura.",
        follicleDepth: isMiniaturized
          ? "Superficial (derme superior)"
          : "Profundo (derme inferior)",
        thickness: isMiniaturized
          ? "Muito fino (velus / penugem)"
          : "Fio terminal espesso",
        activePercent: Math.round(ratio * 100),
        svg: (
          <g>
            <path
              d={`M 85,220 Q 100,210 115,220 Q 100,205 100,${currentBulbY + 12}`}
              fill="none"
              stroke="#c2554d"
              strokeWidth="2.5"
              opacity={isMiniaturized ? 0.4 : 1}
            />
            <circle
              cx="100"
              cy={currentBulbY + 10}
              r="5"
              fill="#b4524a"
              opacity={isMiniaturized ? 0.5 : 1}
            />
            <path
              d={`M 90,60 C 90,90 85,130 85,${currentBulbY} C 85,${currentBulbY + 16} 115,${currentBulbY + 16} 115,${currentBulbY} C 115,130 110,90 110,60`}
              fill={C.channel}
              stroke={C.lineStrong}
              strokeWidth="1.5"
            />
            <ellipse
              cx="100"
              cy={currentBulbY}
              rx={isMiniaturized ? 10 : 15}
              ry={isMiniaturized ? 8 : 13}
              fill="#e3d6c3"
              stroke={C.gold}
              strokeWidth="1.5"
            />
            {currentHairTopY < currentBulbY && (
              <path
                d={`M 100,${currentBulbY} Q 98,${(currentBulbY + currentHairTopY) / 2} 100,${currentHairTopY}`}
                fill="none"
                stroke={hairColor}
                strokeWidth={hairThickness}
                strokeLinecap="round"
              />
            )}
            {!isMiniaturized && (
              <g className="animate-pulse">
                <circle cx="98" cy={currentBulbY + 4} r="2.5" fill="#cf6f66" />
                <circle cx="102" cy={currentBulbY + 2} r="1.5" fill="#cf6f66" />
              </g>
            )}
          </g>
        ),
      };
    }

    if (cycleProgress < 70) {
      const ratio = (cycleProgress - 40) / 30;
      const currentBulbY =
        follicleMaxDepth - ratio * (follicleMaxDepth - follicleMinDepth);
      const currentHairTopY = isMiniaturized ? 40 : -40;
      const originalPapilaY = follicleMaxDepth + 10;

      return {
        phase: "Catágena (Regressão e atrofia)",
        duration: "2 a 3 semanas (fase rápida)",
        desc: "O crescimento cessa de imediato. O bulbo desliga-se do suprimento de sangue e regride para cima. A base da raiz começa a queratinizar-se de forma rígida, formando a clava.",
        follicleDepth: "Em subida progressiva",
        thickness: "Estável, mas sem nutrição",
        activePercent: Math.round(ratio * 100),
        svg: (
          <g>
            <path
              d="M 85,220 Q 100,210 115,220"
              fill="none"
              stroke="#cbc6ba"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy={originalPapilaY}
              r="3"
              fill="#d6a39d"
              opacity={0.6 - ratio * 0.4}
            />
            <line
              x1="100"
              y1={originalPapilaY}
              x2="100"
              y2={currentBulbY + 8}
              stroke="#cbc6ba"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
            <path
              d={`M 92,60 C 92,80 88,110 88,${currentBulbY} C 88,${currentBulbY + 10} 112,${currentBulbY + 10} 112,${currentBulbY} C 112,110 108,80 108,60`}
              fill={C.channel}
              stroke={C.lineStrong}
              strokeWidth="1"
            />
            <ellipse
              cx="100"
              cy={currentBulbY}
              rx={isMiniaturized ? 8 : 11}
              ry={isMiniaturized ? 6 : 9}
              fill="#ebdcc7"
              stroke="#a9a397"
              strokeWidth="1"
            />
            <path
              d={`M 100,${currentBulbY} Q 98,${(currentBulbY + currentHairTopY) / 2} 100,${currentHairTopY}`}
              fill="none"
              stroke={hairColor}
              strokeWidth={hairThickness}
              strokeLinecap="round"
            />
            <path
              d="M 100,205 L 100,195 M 97,199 L 100,195 L 103,199"
              fill="none"
              stroke="#a9a397"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        ),
      };
    }

    const ratio = (cycleProgress - 70) / 30;
    const currentBulbY = follicleMinDepth;
    const initialHairTopY = isMiniaturized ? 40 : -40;
    const isShedding = ratio > 0.7;
    const sheddingRatio = isShedding ? (ratio - 0.7) / 0.3 : 0;
    const oldHairOffset = isShedding ? sheddingRatio * 120 : 0;
    const oldHairOpacity = isShedding ? 1 - sheddingRatio : 1;
    const newBulbY = follicleMaxDepth;
    const newHairTopY = follicleMaxDepth - ratio * 20;

    return {
      phase: isShedding
        ? "Exógena (Fase de queda ativa)"
        : "Telógena (Repouso completo)",
      duration: "3 a 4 meses (fio pronto para sair)",
      desc: isShedding
        ? "O ciclo reinicia-se. Um novo fio anágeno começa a crescer na base profunda, empurrando o fio antigo para fora do poro, o que resulta na queda visível."
        : "O folículo permanece inativo e encolhido. O fio está preso apenas por atrito mecânico na epiderme. Qualquer escovagem ou lavagem pode libertá-lo.",
      follicleDepth: "Extremamente superficial",
      thickness: "Raiz seca (clava queratinizada)",
      activePercent: Math.round(ratio * 100),
      svg: (
        <g>
          <g opacity={ratio}>
            <circle cx="100" cy={newBulbY + 10} r="4" fill="#b4524a" />
            <path
              d={`M 92,100 C 92,130 88,160 88,${newBulbY} C 88,${newBulbY + 8} 112,${newBulbY + 8} 112,${newBulbY} C 112,160 108,130 108,100`}
              fill={C.channel}
              stroke={C.lineStrong}
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            <path
              d={`M 100,${newBulbY} L 100,${newHairTopY}`}
              fill="none"
              stroke={hairColor}
              strokeWidth={hairThickness * 0.7}
              strokeLinecap="round"
            />
          </g>
          <path
            d={`M 92,60 C 92,75 90,95 90,${currentBulbY} C 90,${currentBulbY + 8} 110,${currentBulbY + 8} 110,${currentBulbY} C 110,95 108,75 108,60`}
            fill={C.channel}
            stroke={C.lineStrong}
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy={currentBulbY - oldHairOffset}
            r={isMiniaturized ? 5 : 8}
            fill="#f1efe9"
            stroke="#cbc6ba"
            strokeWidth="1.5"
            opacity={oldHairOpacity}
          />
          <path
            d={`M 100,${currentBulbY - oldHairOffset} Q 98,${(currentBulbY + initialHairTopY - oldHairOffset * 2) / 2} 100,${initialHairTopY - oldHairOffset}`}
            fill="none"
            stroke="#7c776e"
            strokeWidth={hairThickness}
            strokeLinecap="round"
            opacity={oldHairOpacity}
          />
          {isShedding && (
            <g opacity={oldHairOpacity}>
              <path
                d="M 115,30 L 122,25 M 115,25 L 120,28"
                stroke="#b4524a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <text x="125" y="24" fill="#b4524a" fontSize="7" fontWeight="bold">
                Queda
              </text>
            </g>
          )}
        </g>
      ),
    };
  };

  const info = getDynamicCycleDetails();

  return (
    <section id="ciclo" className="section bg-sand">
      <div className="wrap">
        <SectionHeading
          index="↻"
          eyebrow="Laboratório · Ciclo do fio"
          title="Veja o ciclo de vida do cabelo acontecer."
          lede="Cada fio nasce, cresce, regride e cai de forma cíclica. Controle a linha do tempo, ou ative o ciclo automático, e observe como a miniaturização sabota esse processo."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Controles */}
          <div className="flex flex-col gap-4">
            <div className="border border-line bg-white p-7 lg:p-8">
              <span className="eyebrow text-gold-deep">A fisiologia</span>
              <h3 className="serif mt-4 text-2xl text-ink">
                O ciclo de vida do fio
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Arraste a barra para controlar a linha temporal ou inicie o
                ciclo automático para ver a transformação em tempo real.
              </p>

              {/* Autoplay */}
              <div className="mt-6 border border-line bg-sand p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-ink">
                    Ciclo automático
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying((v) => !v)}
                    className="inline-flex items-center gap-2 bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-gold hover:text-ink"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-3.5 w-3.5" /> Pausar
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5" /> Iniciar
                      </>
                    )}
                  </button>
                </div>
                {isPlaying && (
                  <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-xs">
                    <span className="text-ink-mute">Velocidade</span>
                    <div className="flex gap-1.5">
                      {[
                        { label: "Lento", speed: 220 },
                        { label: "Normal", speed: 120 },
                        { label: "Rápido", speed: 45 },
                      ].map((v) => (
                        <button
                          key={v.speed}
                          type="button"
                          onClick={() => setPlaybackSpeed(v.speed)}
                          className={`border px-2.5 py-1 transition-colors ${
                            playbackSpeed === v.speed
                              ? "border-ink bg-ink text-paper"
                              : "border-line bg-white text-ink hover:border-ink"
                          }`}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Slider */}
              <div className="mt-6 border-t border-line pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink">
                    Arraste para ver a evolução
                  </span>
                  <span className="mono bg-sand px-2 py-0.5 text-xs font-bold text-ink">
                    {cycleProgress}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={cycleProgress}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setCycleProgress(Number(e.target.value));
                  }}
                  aria-label="Progresso do ciclo capilar"
                  className="mt-3 h-1.5 w-full cursor-pointer appearance-none bg-line accent-ink"
                />
                <div className="mt-2 flex justify-between mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-mute">
                  <span className={cycleProgress < 40 ? "text-gold-deep" : ""}>
                    Anágena
                  </span>
                  <span
                    className={
                      cycleProgress >= 40 && cycleProgress < 70
                        ? "text-gold-deep"
                        : ""
                    }
                  >
                    Catágena
                  </span>
                  <span className={cycleProgress >= 70 ? "text-gold-deep" : ""}>
                    Telógena
                  </span>
                </div>
              </div>

              {/* Miniaturização */}
              <div className="mt-6 flex items-center justify-between border border-line bg-sand p-4">
                <div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                    <AlertCircle className="h-3.5 w-3.5 text-gold-deep" />
                    Simular calvície
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-mute">
                    Atrofia o folículo e enfraquece o fio
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMiniaturized((v) => !v)}
                  aria-pressed={isMiniaturized}
                  aria-label="Simular miniaturização capilar"
                  className={`h-6 w-12 rounded-full p-1 transition-colors ${
                    isMiniaturized ? "bg-gold-deep" : "bg-line-strong"
                  }`}
                >
                  <span
                    className={`block h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
                      isMiniaturized ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex gap-3 border border-line bg-white p-5">
              <Activity className="h-4 w-4 shrink-0 text-gold-deep" />
              <p className="text-xs leading-relaxed text-ink-soft">
                Na alopécia androgénica o folículo não morre de imediato: ele
                encolhe de forma invisível ao longo de anos. Intervir enquanto
                o folículo ainda está vivo é o pilar do trabalho da SmileSkin.
              </p>
            </div>
          </div>

          {/* Visualização */}
          <div className="flex flex-col border border-line bg-white p-6 lg:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-5">
              <div>
                <span className="eyebrow text-ink-mute">Fase biológica</span>
                <h3 className="serif mt-2 text-2xl text-ink">{info.phase}</h3>
              </div>
              <span className="mono border border-line bg-sand px-2.5 py-1 text-xs font-bold text-gold-deep">
                {info.duration}
              </span>
            </div>

            <div className="relative my-5 flex flex-1 items-center justify-center border border-line bg-paper">
              <span className="absolute left-4 top-5 mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-mute">
                Epiderme
              </span>
              <span className="absolute bottom-5 left-4 mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-mute">
                Derme profunda
              </span>
              <svg viewBox="0 0 200 240" className="h-auto w-full max-w-[300px]">
                <line
                  x1="0"
                  y1="60"
                  x2="200"
                  y2="60"
                  stroke={C.lineStrong}
                  strokeWidth="2"
                  strokeDasharray="4,2"
                />
                <text
                  x="10"
                  y="52"
                  fill="#8a7f70"
                  fontSize="7.5"
                  fontWeight="bold"
                  letterSpacing="0.1em"
                >
                  SUPERFÍCIE DO COURO CABELUDO
                </text>
                {info.svg}
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-px border border-line bg-line">
              <div className="bg-white p-4">
                <span className="mono block text-[0.625rem] uppercase tracking-[0.12em] text-ink-mute">
                  Profundidade do bulbo
                </span>
                <span className="mt-1 block text-sm font-semibold text-ink">
                  {info.follicleDepth}
                </span>
              </div>
              <div className="bg-white p-4">
                <span className="mono block text-[0.625rem] uppercase tracking-[0.12em] text-ink-mute">
                  Espessura do fio
                </span>
                <span className="mt-1 block text-sm font-semibold text-ink">
                  {info.thickness}
                </span>
              </div>
              <div className="col-span-2 bg-white p-4">
                <span className="mono block text-[0.625rem] uppercase tracking-[0.12em] text-ink-mute">
                  Morfologia desta fase
                </span>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {info.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
