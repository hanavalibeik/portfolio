"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { LinkGroupId } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

type TrackedLinkProps = {
  href: string;
  label: string;
  ariaLabel?: string;
  group: LinkGroupId;
  className?: string;
  children: ReactNode;
};

export function TrackedLink({
  href,
  label,
  ariaLabel,
  group,
  className,
  children,
}: TrackedLinkProps) {
  const isExternal = /^https?:\/\//i.test(href);
  const isDownload = href.toLowerCase().endsWith(".pdf");

  function trackClick() {
    try {
      window.umami?.track("link_click", { label, group });
    } catch {
      // Analytics must never interrupt navigation.
    }
  }

  if (isExternal || isDownload || href.startsWith("mailto:")) {
    return (
      <a
        className={className}
        href={isDownload ? assetPath(href) : href}
        aria-label={ariaLabel ?? label}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        download={isDownload || undefined}
        onClick={trackClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={className}
      href={href}
      aria-label={ariaLabel ?? label}
      onClick={trackClick}
    >
      {children}
    </Link>
  );
}
