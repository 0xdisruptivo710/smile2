const terms = [
  "Tricoscopia digital",
  "Eflúvio telógeno",
  "Miniaturização folicular",
  "Fase anágena",
  "Anamnese capilar",
  "Densidade folicular",
  "Fotobiomodulação",
  "Couro cabeludo",
  "Investigação multifatorial",
  "Ciclo capilar",
];

export function Ticker() {
  const loop = [...terms, ...terms];

  return (
    <div
      aria-hidden
      className="group overflow-hidden border-y border-line bg-white py-3.5"
    >
      <div
        className="flex w-max items-center group-hover:[animation-play-state:paused]"
        style={{ animation: "ticker 46s linear infinite" }}
      >
        {loop.map((term, i) => (
          <span key={i} className="flex items-center">
            <span className="mono whitespace-nowrap px-7 text-xs uppercase tracking-[0.16em] text-ink-mute">
              {term}
            </span>
            <span aria-hidden className="text-gold">
              &#47;&#47;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
