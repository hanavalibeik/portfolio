"use client";

import Script from "next/script";

const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export function Analytics() {
  if (!websiteId) {
    return null;
  }

  function trackVisit() {
    try {
      window.umami?.track("visit", {
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        lang: navigator.language,
        offset: -new Date().getTimezoneOffset(),
      });
    } catch {
      // Analytics must never affect the visitor experience.
    }
  }

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={websiteId}
      strategy="afterInteractive"
      defer
      onLoad={trackVisit}
    />
  );
}
