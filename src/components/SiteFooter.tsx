import Link from "next/link";
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
      className={`${name === "whatsapp" || name === "linkedin" ? "brand-fill" : "brand-stroke"} icon-${name}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {name === "whatsapp" && <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-1.75-.87-2.9-1.56-4.06-3.54-.31-.53.31-.49.88-1.64.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-2.72 2.98-.7 7.3.39 8.79 1.48 2.02 3.27 3.04 5.33 3.94 1.74.75 3.33.65 4.58.39 1.4-.29 2.71-1.16 3.09-2.28.38-1.12.38-2.08.27-2.28-.11-.2-.41-.3-.71-.45M12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.6.94.96-3.5-.23-.36A9.47 9.47 0 0 1 2.52 12a9.5 9.5 0 1 1 9.52 9.5M20.1 3.91A11.38 11.38 0 0 0 12 0 12 12 0 0 0 1.53 17.82L0 23.69l6.05-1.59A12 12 0 1 0 20.1 3.91" />}
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
      <div className="unified-footer__shell">
        {/* The link sits inside the heading, not the other way round. An <a>
            wrapping an <h2> is valid HTML but announces as a link whose name is
            the whole heading, and it drops the heading out of the rotor in some
            screen readers. */}
        <h2 className="unified-footer__cta-heading" id="footer-cta-heading">
          <a className="site-cta unified-footer__cta" href={`mailto:${site.email}`}>
            <span>Got a vision? Let’s bring it to life</span>
            <span className="unified-footer__arrow" aria-hidden="true">
            {/* An SVG, not a "→" glyph. Text is centred on the font's ascent
                and descent, not on the ink of the character, and Archivo's
                arrow sits low in its em box — it landed 7px below the middle
                of a 57px circle. A path centred in its own viewBox cannot
                drift with the font. */}
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </span>
          </a>
        </h2>
        <p className="unified-footer__note">{site.availability}</p>
        <nav className="unified-footer__links" aria-label="Footer">
          <Link href="/work/">Work</Link>
          <Link href="/products/">Products</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
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
