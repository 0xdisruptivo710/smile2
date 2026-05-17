"use client";

import { useRef, useState } from "react";
import { Search, Info } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

type ZoneId = "frontal" | "vertex" | "occipital" | "scalp_health";

const tricoscopiaData: Record<
  ZoneId,
  {
    title: string;
    description: string;
    macroLabel: string;
    findings: { type: string; text: string; color: string }[];
  }
> = {
  frontal: {
    title: "Zona frontal (linha de recuo)",
    description:
      "Área sensível à ação hormonal (DHT). Ideal para observar os primeiros sinais de recuo das entradas.",
    macroLabel: "Vista macro: recuo ligeiro nas entradas bilaterais.",
    findings: [
      {
        type: "Miniaturização",
        text: "Fios extremamente finos e curtos misturados com fios espessos.",
        color: "#c98a3a",
      },
      {
        type: "Unidades foliculares",
        text: "Predomínio de apenas 1 fio por unidade (o normal são 2 a 3).",
        color: "#b4524a",
      },
      {
        type: "Pontos amarelos",
        text: "Folículos vazios em repouso prolongado, visíveis como pequenos halos.",
        color: "#a87f33",
      },
    ],
  },
  vertex: {
    title: "Vértice (coroa da cabeça)",
    description:
      "Topo da cabeça, onde a perda de densidade costuma criar uma abertura circular progressiva.",
    macroLabel: "Vista macro: rarefação visível sob luz direta.",
    findings: [
      {
        type: "Anisotricose",
        text: "Grande variação no diâmetro dos fios adjacentes, sinal clássico de calvície.",
        color: "#c98a3a",
      },
      {
        type: "Pontos brancos",
        text: "Pequenas áreas de fibrose onde o folículo já cicatrizou.",
        color: "#7a6f9c",
      },
      {
        type: "Sinal peripilar",
        text: "Halos acastanhados ao redor do poro que indicam inflamação ativa.",
        color: "#b4524a",
      },
    ],
  },
  occipital: {
    title: "Zona occipital (dadora)",
    description:
      "Zona posterior, geneticamente protegida da calvície padrão. Usada como base de comparação saudável.",
    macroLabel: "Vista macro: densidade robusta e fios uniformes.",
    findings: [
      {
        type: "Densidade ideal",
        text: "Elevada concentração de folículos por cm² com distribuição harmoniosa.",
        color: "#5f7d52",
      },
      {
        type: "Unidades triplas",
        text: "Predomínio de grupos com 3 a 4 fios espessos saindo do mesmo poro.",
        color: "#5f7d52",
      },
      {
        type: "Couro cabeludo saudável",
        text: "Tom pálido, sem vermelhidão ou descamação visíveis.",
        color: "#1f1f1f",
      },
    ],
  },
  scalp_health: {
    title: "Solo clínico (dermatite / oleosidade)",
    description:
      "Análise do ambiente onde o fio nasce. Inflamação e descamação sufocam o desenvolvimento saudável.",
    macroLabel: "Vista macro: brilho excessivo e ligeira descamação.",
    findings: [
      {
        type: "Escamação peri-folicular",
        text: "Acumulação de sebo seco ao redor da base dos fios.",
        color: "#c98a3a",
      },
      {
        type: "Eritema (vermelhidão)",
        text: "Microcirculação congestionada indicando processo inflamatório.",
        color: "#b4524a",
      },
      {
        type: "Hiperprodução sebácea",
        text: "Glândulas sebáceas hiperativas obstruindo os poros capilares.",
        color: "#c98a3a",
      },
    ],
  },
};

const zones: { id: ZoneId; name: string; badge: string }[] = [
  { id: "frontal", name: "Zona frontal (entradas)", badge: "Androgénica" },
  { id: "vertex", name: "Vértice (coroa)", badge: "Rarefação" },
  { id: "occipital", name: "Zona occipital (traseira)", badge: "Saudável" },
  { id: "scalp_health", name: "Saúde do couro cabeludo", badge: "Solo" },
];

function MicroscopicView({ zone }: { zone: ZoneId }) {
  if (zone === "occipital") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect width="200" height="200" fill="#f4eee2" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#e0d7c4" strokeWidth="1" />
        <path d="M 10 40 Q 40 45, 80 30 T 150 50" fill="none" stroke="#e8d2c4" strokeWidth="0.8" />
        <path d="M 50 160 Q 90 140, 130 170 T 190 150" fill="none" stroke="#e8d2c4" strokeWidth="0.8" />
        {[
          { t: "60,50", paths: ["M 0 0 C 10 -20, 25 -50, 45 -80", "M -2 -1 C 5 -18, 15 -42, 30 -72", "M 2 1 C 12 -15, 30 -38, 55 -68"] },
          { t: "140,90", paths: ["M 0 0 C 15 -15, 30 -40, 40 -70", "M -1 -1 C 8 -16, 18 -36, 25 -64"] },
          { t: "50,130", paths: ["M 0 0 C 8 -22, 18 -55, 35 -85", "M 2 1 C 14 -18, 28 -48, 48 -78"] },
          { t: "110,150", paths: ["M 0 0 C 12 -20, 28 -45, 48 -75", "M -3 -1 C 4 -22, 12 -48, 28 -78", "M 2 2 C 18 -15, 35 -38, 58 -65"] },
        ].map((g, i) => (
          <g key={i} transform={`translate(${g.t})`}>
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#ddd3c0" />
            {g.paths.map((d, j) => (
              <path key={j} d={d} fill="none" stroke="#1c2420" strokeWidth="3" strokeLinecap="round" />
            ))}
          </g>
        ))}
        <circle cx="26" cy="26" r="13" fill="#e3ece0" />
        <text x="26" y="30" textAnchor="middle" fill="#5f7d52" fontSize="10" fontWeight="bold">OK</text>
      </svg>
    );
  }
  if (zone === "frontal") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect width="200" height="200" fill="#f4eee2" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#e0d7c4" strokeWidth="1" />
        <circle cx="100" cy="100" r="8" fill="#f3e3a6" opacity="0.7" />
        <ellipse cx="100" cy="100" rx="4" ry="2" fill="#c98a3a" opacity="0.5" />
        <g transform="translate(100,100)">
          <path d="M 0 0 C 5 -10, 12 -22, 18 -35" fill="none" stroke="#9a9388" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="1,1" />
        </g>
        <g transform="translate(60,120)">
          <ellipse cx="0" cy="0" rx="5" ry="3" fill="#ddd3c0" />
          <path d="M 0 0 C 10 -20, 22 -45, 35 -70" fill="none" stroke="#27241f" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M -2 -1 C 2 -10, 6 -20, 8 -30" fill="none" stroke="#9a9388" strokeWidth="1" strokeLinecap="round" />
        </g>
        <g transform="translate(140,60)">
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#ddd3c0" />
          <path d="M 0 0 C 12 -18, 22 -38, 30 -60" fill="none" stroke="#1c2420" strokeWidth="2.6" strokeLinecap="round" />
        </g>
        <circle cx="50" cy="50" r="7" fill="#f3e3a6" opacity="0.6" />
        <text x="100" y="118" textAnchor="middle" fill="#a87f33" fontSize="8" fontWeight="bold">Ponto amarelo</text>
        <text x="60" y="142" textAnchor="middle" fill="#a87f33" fontSize="8" fontWeight="bold">Miniaturização</text>
      </svg>
    );
  }
  if (zone === "vertex") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect width="200" height="200" fill="#f4eee2" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#e0d7c4" strokeWidth="1" />
        <circle cx="80" cy="70" r="30" fill="#efd9d6" opacity="0.7" />
        <circle cx="130" cy="130" r="25" fill="#efd9d6" opacity="0.6" />
        <g transform="translate(60,70)">
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#ddd3c0" />
          <path d="M 0 0 C 10 -20, 20 -40, 28 -60" fill="none" stroke="#3a352d" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(100,110)">
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#e7c4bf" stroke="#b4524a" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="6" fill="none" stroke="#b4524a" strokeWidth="1" opacity="0.5" />
          <path d="M 0 0 C 8 -18, 18 -42, 25 -65" fill="none" stroke="#1c1a17" strokeWidth="3.2" strokeLinecap="round" />
        </g>
        <g transform="translate(140,80)">
          <ellipse cx="0" cy="0" rx="3" ry="1.5" fill="#ddd3c0" />
          <path d="M 0 0 C 5 -12, 10 -25, 12 -40" fill="none" stroke="#a8a297" strokeWidth="0.8" strokeLinecap="round" />
        </g>
        <circle cx="130" cy="140" r="6" fill="#ffffff" stroke="#ddd3c0" strokeWidth="1" />
        <text x="130" y="156" textAnchor="middle" fill="#8a7f70" fontSize="8" fontWeight="bold">Fibrose</text>
        <text x="100" y="128" textAnchor="middle" fill="#b4524a" fontSize="8" fontWeight="bold">Peripilar</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <rect width="200" height="200" fill="#f3ead1" />
      <circle cx="100" cy="100" r="95" fill="none" stroke="#ddd0b0" strokeWidth="1" />
      <path d="M 10 30 Q 30 50, 70 20 T 130 60" fill="none" stroke="#d98a7e" strokeWidth="1.2" opacity="0.8" />
      <path d="M 15 100 Q 60 70, 110 110 T 185 90" fill="none" stroke="#d98a7e" strokeWidth="1.5" opacity="0.9" />
      <path d="M 40 160 Q 80 120, 120 180 T 170 140" fill="none" stroke="#d98a7e" strokeWidth="1" opacity="0.8" />
      <path d="M 50 115 Q 60 110, 70 115 T 80 125 T 60 135 Z" fill="#f3e3a6" stroke="#c98a3a" strokeWidth="0.5" opacity="0.8" />
      <path d="M 110 65 Q 120 60, 135 65 T 145 75 T 120 85 Z" fill="#f3e3a6" stroke="#c98a3a" strokeWidth="0.5" opacity="0.8" />
      <g transform="translate(65,120)">
        <ellipse cx="0" cy="0" rx="9" ry="5" fill="#f3e3a6" stroke="#a87f33" strokeWidth="1" />
        <path d="M 0 0 C 10 -25, 20 -50, 30 -75" fill="none" stroke="#27241f" strokeWidth="3" strokeLinecap="round" />
        <path d="M -3 1 C 4 -22, 10 -45, 15 -68" fill="none" stroke="#27241f" strokeWidth="2.7" strokeLinecap="round" />
      </g>
      <g transform="translate(130,75)">
        <ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#f3e3a6" stroke="#a87f33" strokeWidth="1" />
        <path d="M 0 0 C 15 -15, 25 -35, 30 -55" fill="none" stroke="#27241f" strokeWidth="2.9" strokeLinecap="round" />
      </g>
      <text x="65" y="136" textAnchor="middle" fill="#a87f33" fontSize="8" fontWeight="bold">Dermatite</text>
      <text x="133" y="56" textAnchor="middle" fill="#b4524a" fontSize="8" fontWeight="bold">Eritema</text>
    </svg>
  );
}

export function Tricoscopy() {
  const [selectedZone, setSelectedZone] = useState<ZoneId>("frontal");
  const [magnifierPos, setMagnifierPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const scalpRef = useRef<HTMLDivElement>(null);

  const moveTo = (clientX: number, clientY: number) => {
    const el = scalpRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMagnifierPos({
      x: Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)),
      y: Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100)),
    });
  };

  const data = tricoscopiaData[selectedZone];

  return (
    <section id="microscopio" className="section">
      <div className="wrap">
        <SectionHeading
          index="⊕"
          eyebrow="Laboratório · Tricoscopia"
          title="Microscópio virtual: veja o couro cabeludo de perto."
          lede="A tricoscopia amplia a superfície do couro cabeludo em até 120x. Escolha uma região e passe a lente para enxergar o que o olho não vê."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          {/* Seleção de zona */}
          <div className="flex flex-col gap-4">
            <div className="border border-line bg-white p-7">
              <span className="eyebrow text-gold-deep">Selecione a região</span>
              <p className="mt-3 text-sm text-ink-soft">
                A queda padrão manifesta-se de forma diferente em cada zona da
                cabeça. Escolha uma área para analisar os folículos.
              </p>
              <div className="mt-5 flex flex-col">
                {zones.map((zone) => {
                  const on = zone.id === selectedZone;
                  return (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSelectedZone(zone.id)}
                      aria-pressed={on}
                      className={`flex items-center justify-between gap-3 border-t border-line py-4 text-left transition-colors last:border-b ${
                        on ? "bg-sand" : "hover:bg-sand/60"
                      }`}
                    >
                      <span
                        className={`text-sm ${on ? "font-semibold text-ink" : "text-ink-soft"}`}
                      >
                        {zone.name}
                      </span>
                      <span
                        className={`mono shrink-0 px-2 py-0.5 text-[0.625rem] uppercase tracking-[0.1em] ${
                          on ? "bg-ink text-paper" : "bg-sand text-ink-mute"
                        }`}
                      >
                        {zone.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3 border border-line bg-white p-5">
              <Info className="h-4 w-4 shrink-0 text-gold-deep" />
              <p className="text-xs leading-relaxed text-ink-soft">
                A tricoscopia é um exame não invasivo que permite ver a
                qualidade de cada folículo antes que o fio caia, ajudando a
                planear o tratamento no momento ideal.
              </p>
            </div>
          </div>

          {/* Simulador */}
          <div className="border border-line bg-white p-6 lg:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-5">
              <div>
                <h3 className="serif text-2xl text-ink">{data.title}</h3>
                <p className="mt-1 text-xs text-ink-soft">{data.description}</p>
              </div>
              <span className="mono shrink-0 border border-line bg-sand px-2.5 py-1 text-[0.625rem] uppercase text-gold-deep">
                Ampliação 60x
              </span>
            </div>

            <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
              {/* Área do couro cabeludo */}
              <div className="flex flex-col items-center">
                <span className="mono mb-3 text-[0.625rem] uppercase tracking-[0.14em] text-ink-mute">
                  Passe o cursor / toque para focar
                </span>
                <div
                  ref={scalpRef}
                  onMouseMove={(e) => moveTo(e.clientX, e.clientY)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onTouchStart={() => setIsHovering(true)}
                  onTouchMove={(e) => {
                    const t = e.touches[0];
                    if (t) moveTo(t.clientX, t.clientY);
                  }}
                  className="relative aspect-square w-full max-w-[280px] cursor-crosshair touch-none overflow-hidden rounded-full border border-line-strong bg-paper"
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(#d8cdb4 1.2px, transparent 1.2px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-wrap justify-around p-4">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-12 w-1.5 rounded-full bg-ink"
                        style={{
                          transform: `rotate(${((i * 13) % 25) - 12.5}deg) scale(${((i * 7) % 5) / 10 + 0.6})`,
                          opacity:
                            selectedZone === "occipital"
                              ? 0.55
                              : selectedZone === "scalp_health"
                                ? 0.4
                                : 0.26,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="pointer-events-none absolute h-24 w-24 -translate-x-12 -translate-y-12 overflow-hidden rounded-full border-2 border-ink bg-white"
                    style={{
                      left: `${magnifierPos.x}%`,
                      top: `${magnifierPos.y}%`,
                      boxShadow: "0 0 24px rgba(31,28,24,0.3)",
                    }}
                  >
                    <div className="h-full w-full scale-110">
                      <MicroscopicView zone={selectedZone} />
                    </div>
                  </div>
                  {!isHovering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper">
                        <Search className="h-5 w-5" />
                      </span>
                    </div>
                  )}
                </div>
                <span className="mt-4 text-center text-[0.6875rem] italic text-ink-mute">
                  {data.macroLabel}
                </span>
              </div>

              {/* Achados */}
              <div className="flex flex-col gap-3">
                <span className="eyebrow text-ink-mute">Achados clínicos</span>
                {data.findings.map((f) => (
                  <div
                    key={f.type}
                    className="flex items-start gap-3 border border-line bg-paper p-4"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0"
                      style={{ backgroundColor: f.color }}
                    />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.06em] text-ink">
                        {f.type}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                        {f.text}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-2.5 border border-line bg-sand p-3.5 text-[0.6875rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-1 h-2 w-2 shrink-0 bg-gold" />
                  <span>
                    {selectedZone === "occipital"
                      ? "Esta área dá a garantia da capacidade dadora, caso um dia se avalie um microtransplante."
                      : "Identificar estes marcadores indica o grau exato de reversibilidade dos folículos."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
