/** Print-production marks used across the site's "construction" motif. */

export function Registration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <line x1="7.5" y1="0" x2="7.5" y2="15" />
      <line x1="0" y1="7.5" x2="15" y2="7.5" />
      <circle cx="7.5" cy="7.5" r="4" />
    </svg>
  );
}

export function DashedCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="49.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
