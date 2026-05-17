// Divisor ornamental — assinatura da marca SmileSkin (DNA: img-divisao).
// Respiração entre seções narrativas.

type DividerProps = {
  tone?: "paper" | "sand";
};

const lineStyle = {
  background:
    "linear-gradient(90deg, transparent, var(--color-gold) 50%, transparent)",
};

export function OrnamentalDivider({ tone = "paper" }: DividerProps) {
  return (
    <div className={tone === "sand" ? "bg-sand" : "bg-paper"}>
      <div className="wrap flex items-center justify-center gap-5 py-12 lg:py-16">
        <span
          aria-hidden
          className="h-px w-full max-w-[110px] flex-1"
          style={lineStyle}
        />
        <svg
          aria-hidden
          viewBox="0 0 52 16"
          width="52"
          height="16"
          fill="none"
          className="text-gold-deep"
        >
          <path
            d="M3 8 Q13 0, 26 8 T49 8"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <circle cx="26" cy="8" r="2.4" fill="currentColor" />
        </svg>
        <span
          aria-hidden
          className="h-px w-full max-w-[110px] flex-1"
          style={lineStyle}
        />
      </div>
    </div>
  );
}
