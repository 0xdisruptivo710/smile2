type LogoProps = {
  tone?: "ink" | "paper";
  className?: string;
};

export function Logo({ tone = "ink", className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`serif text-2xl leading-none tracking-[-0.01em] ${
          tone === "paper" ? "text-paper" : "text-ink"
        }`}
      >
        SmileSkin
      </span>
      <span
        aria-hidden
        className="h-3 w-px bg-gold"
      />
      <span className="eyebrow text-[0.6875rem] text-gold-deep">
        Tricologia
      </span>
    </span>
  );
}
