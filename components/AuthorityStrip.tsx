import { authorityPoints } from "@/lib/data";

export function AuthorityStrip() {
  return (
    <section aria-label="Credenciais do instituto" className="bg-ink">
      <div className="wrap grid sm:grid-cols-2 lg:grid-cols-4">
        {authorityPoints.map((point, i) => (
          <div
            key={point.label}
            className={`flex flex-col gap-4 py-9 ${
              i > 0
                ? "border-t border-paper/12 sm:[&:nth-child(2)]:border-t-0 lg:border-l lg:border-t-0 lg:pl-8"
                : ""
            } ${i === 1 ? "sm:border-l sm:border-paper/12 sm:pl-8 lg:pl-8" : ""} ${
              i === 3 ? "sm:border-l sm:border-paper/12 sm:pl-8" : ""
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-2 w-2 bg-gold" />
              <span className="mono text-xs text-paper/45">
                0{i + 1}
              </span>
            </div>
            <div>
              <p className="eyebrow text-paper/45">{point.label}</p>
              <p className="mt-2.5 text-base text-paper">{point.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
