import { site } from "@/data/site";

const footerLinks = [
  { label: "WhatsApp", icon: "whatsapp", url: `https://wa.me/${site.whatsapp}` },
  { label: "Email", icon: "email", url: `mailto:${site.email}` },
  { label: "LinkedIn", icon: "linkedin", url: site.socials[1].url },
  { label: "Dribbble", icon: "dribbble", url: site.socials[2].url },
  { label: "Instagram", icon: "instagram", url: site.socials[0].url },
  { label: "Behance", icon: "behance", url: "https://www.behance.net/hanavalibeik" },
] as const;

function FooterIcon({ name }: { name: (typeof footerLinks)[number]["icon"] }) {
  if (name === "behance") {
    return <strong className="unified-footer__behance" aria-hidden="true">Be</strong>;
  }

  return (
    <svg
      className={`${name === "linkedin" ? "brand-fill" : "brand-stroke"} icon-${name}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {name === "whatsapp" && <>
        <path
          d="M5.5 3.8c.6-.4 1.4-.3 1.9.2l2.3 2.3c.45.45.55 1.15.22 1.7L8.7 10.1c1.4 2.45 3.25 4.3 5.7 5.7l2.1-1.22c.55-.32 1.25-.23 1.7.22l2.3 2.3c.5.5.58 1.3.2 1.9l-1.15 1.8c-.75 1.16-2.2 1.67-3.5 1.2C9.65 19.7 4.3 14.35 2 7.95c-.47-1.3.04-2.75 1.2-3.5L5.5 3.8Z"
          fill="currentColor"
          stroke="none"
        />
        <path d="M14.1 3.3a6.6 6.6 0 0 1 6.6 6.6" />
        <path d="M14.1 6.2a3.7 3.7 0 0 1 3.7 3.7" />
      </>}
      {name === "email" && <><rect x="3" y="5.5" width="18" height="13" rx="1.8" /><path d="m4.5 7 7.5 6 7.5-6" /></>}
      {name === "linkedin" && <><path d="M5.15 9.1h3.2V19h-3.2V9.1Zm1.6-4.6a1.86 1.86 0 1 1 0 3.72 1.86 1.86 0 0 1 0-3.72Z" /><path d="M10.35 9.1h3.07v1.35h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.14 3.84 4.91V19h-3.2v-4.71c0-1.13-.02-2.57-1.57-2.57-1.57 0-1.81 1.23-1.81 2.49V19h-3.2l-.2-9.9Z" /></>}
      {name === "dribbble" && <><circle cx="12" cy="12" r="8.5" /><path d="M7.2 5.4c3 3.2 5 6.7 6.2 12.9M4 11.2c4.6.2 9.3-.8 13.4-3.3M7.2 17.9c2.7-3.3 6-4.7 11.9-3.6" /></>}
      {name === "instagram" && <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.7" /><circle className="icon-dot" cx="17.2" cy="6.8" r=".8" /></>}
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="unified-footer" aria-labelledby="footer-cta-heading">
      <span className="unified-footer__glow" aria-hidden="true" />
      <svg
        className="unified-footer__curve"
        viewBox="0 0 1496 513"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M 0 221.5 H 1044 C 1220 221.5 1364 350 1364 513"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="unified-footer__shell">
        <h2 className="unified-footer__cta-heading" id="footer-cta-heading">
          <a className="site-cta unified-footer__cta" href={`mailto:${site.email}`}>
            <span>Got a vision? Let&rsquo;s bring it to life</span>
            <span className="unified-footer__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </h2>
        <p className="unified-footer__note">{site.availability}</p>

        <div className="unified-footer__bottom">
          <div className="unified-footer__identity">
            <strong>{site.fullName}</strong>
            <span>{site.role}</span>
          </div>
          <nav className="unified-footer__socials" aria-label="Social media">
            {footerLinks.map((link) => {
              const external = link.url.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                >
                  <FooterIcon name={link.icon} />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
