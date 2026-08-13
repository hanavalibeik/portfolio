"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`site-header${isHome ? " site-header--home" : ""}`}>
      <div className="container">
        <Link href="/" className="brand" aria-label={`${site.fullName} — home`}>
          {isHome ? <span className="home-brand-mark">h</span> : <>{site.name}<sup>®</sup></>}
        </Link>
        <nav className="site-nav" aria-label="Main">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
