// Elementos gráficos de fundo — referências ao nicho de tricologia.
// Decorativos: sempre aria-hidden, pointer-events-none, baixa opacidade.

type DecorProps = { className?: string };

/** Fios fluindo — motivo capilar. Usar como pano de fundo de seção. */
export function Strands({ className = "" }: DecorProps) {
  const W = 1440;
  const H = 900;
  const N = 26;
  const paths = Array.from({ length: N }, (_, i) => {
    const x = (W / (N - 1)) * i;
    const sway = 26 + (i % 5) * 13;
    const dir = i % 2 === 0 ? 1 : -1;
    return `M ${x - 70} -50 C ${x - 70 + sway * dir} ${H * 0.3}, ${
      x + 50 - sway * dir
    } ${H * 0.66}, ${x + 70} ${H + 50}`;
  });

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className={className}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  );
}

/** Anéis de tricoscopia — motivo de lente / análise. Usar como acento de canto. */
export function Rings({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 420 420"
      fill="none"
      className={className}
    >
      {[198, 158, 118, 78, 38].map((r) => (
        <circle
          key={r}
          cx="210"
          cy="210"
          r={r}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      <circle cx="210" cy="210" r="198" stroke="currentColor" strokeWidth="1" strokeDasharray="2 11" />
      <line x1="210" y1="0" x2="210" y2="420" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="210" x2="420" y2="210" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Folículo em corte — diagrama científico minimalista. */
export function Follicle({ className = "" }: DecorProps) {
  return (
    <svg aria-hidden viewBox="0 0 200 320" fill="none" className={className}>
      <path
        d="M100 10 C100 90 100 150 100 200 C100 250 70 280 100 310"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M100 200 C140 230 150 270 130 312"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse cx="100" cy="232" rx="34" ry="44" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="262" r="11" stroke="currentColor" strokeWidth="1" />
      <line x1="40" y1="150" x2="160" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
    </svg>
  );
}
