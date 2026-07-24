import { DashedCircle, Registration } from "./Marks";

/**
 * The site's signature element: the designer's name set like a logotype
 * mid-construction — type guides, a dashed circle guide and registration
 * marks, drawn in non-photo blue (the pencil designers sketch with).
 */
export function ConstructionWordmark({ name }: { name: string }) {
  return (
    <div className="construction">
      <span aria-hidden="true" className="guide guide--cap">
        <span className="guide-label">Cap height</span>
      </span>
      <span aria-hidden="true" className="guide guide--x">
        <span className="guide-label">X-height</span>
      </span>
      <span aria-hidden="true" className="guide guide--base">
        <span className="guide-label">Baseline</span>
      </span>

      <DashedCircle className="guide-circle" />

      <Registration className="crosshair crosshair--tl" />
      <Registration className="crosshair crosshair--tr" />
      <Registration className="crosshair crosshair--bl" />
      <Registration className="crosshair crosshair--br" />

      <h1 className="wordmark">
        {name}
        <sup>®</sup>
      </h1>
    </div>
  );
}
