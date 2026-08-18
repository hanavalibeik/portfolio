"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

const links = [
  { href: "/work/", label: "Work" },
  { href: "/products/", label: "Products" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Route change closes the menu.
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Escape closes it and hands focus back to the trigger.
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`site-header${isHome ? " site-header--home" : ""}${
        open ? " site-header--open" : ""
      }`}
    >
      <div className="container">
        <Link href="/" className="brand" aria-label={`${site.fullName} — home`}>
          <img
            className="site-logo"
            src={assetPath("/brand/hana-logo.svg")}
            alt=""
            width="200"
            height="200"
          />
        </Link>

        <button
          ref={triggerRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bars" aria-hidden="true">
            <span />
            <span />
          </span>
          {open ? "Close" : "Menu"}
        </button>

        {/* Always present in the HTML — the mobile treatment is CSS only, so
            the links stay reachable when JavaScript hasn't run. */}
        <nav className="site-nav" id="site-nav" aria-label="Main">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={close}
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
