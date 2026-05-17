import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  className?: string;
  tone?: "ink" | "paper";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  className = "",
  tone = "ink",
}: SectionHeadingProps) {
  const dark = tone === "paper";

  return (
    <Reveal className={className}>
      <div
        className={`flex items-center gap-4 border-t pt-4 ${
          dark ? "border-paper/20" : "border-line-strong"
        }`}
      >
        {index && (
          <span className="mono text-xs font-medium text-gold-deep">
            [ {index} ]
          </span>
        )}
        <span
          className={`eyebrow ${dark ? "text-paper/55" : "text-ink-mute"}`}
        >
          {eyebrow}
        </span>
        <span
          aria-hidden
          className={`h-px flex-1 ${dark ? "bg-paper/20" : "bg-line"}`}
        />
      </div>
      <h2
        className={`serif mt-7 max-w-[22ch] text-4xl lg:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`lede mt-6 max-w-[58ch] ${
            dark ? "text-paper/70" : ""
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
