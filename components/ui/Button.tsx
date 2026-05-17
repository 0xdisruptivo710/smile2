import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 font-semibold tracking-[-0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out-quint focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold-deep";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-[0.9375rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-gold hover:text-ink active:translate-y-px",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-gold-deep",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  withArrow?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "lg",
  href,
  external,
  className = "",
  ariaLabel,
  withArrow,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variant === "ghost" ? "" : sizes[size]} ${
    variants[variant]
  } ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <span
          aria-hidden
          className="transition-transform duration-200 ease-out-quint group-hover/btn:translate-x-1"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
