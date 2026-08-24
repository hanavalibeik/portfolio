type CtaArrowDirection = "right" | "down" | "external";

export function CtaArrow({
  direction = "right",
  className = "",
}: {
  direction?: CtaArrowDirection;
  className?: string;
}) {
  const classes = ["cta-arrow", `cta-arrow--${direction}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    </span>
  );
}
