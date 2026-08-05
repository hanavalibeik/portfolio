import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.url);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <span style={{ color: "var(--ink)", fontWeight: 600 }}>
            {site.fullName}
          </span>
          <span>{site.role}</span>
          <span>{site.location}</span>
        </div>
        <div className="footer-col">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="footer-col colophon">
          <span>© {year} {site.fullName}</span>
          <span>Set in Archivo & Spline Sans Mono</span>
          <span>Built with Next.js, deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
