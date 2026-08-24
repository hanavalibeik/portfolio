"use client";

import { useEffect, useRef, useState } from "react";
import { CtaArrow } from "@/components/CtaArrow";
import { site } from "@/data/site";
import type { Collection, Product } from "@/data/products";

/**
 * Ordering happens in Instagram DMs — there is no cart and no checkout.
 *
 * Instagram's ig.me links do NOT reliably support pre-filled message text
 * (Meta doesn't document a `?text=` parameter and it can't be depended on),
 * so the flow is: copy a ready-made message, then open the DM and paste.
 * WhatsApp *does* support pre-filled text, so that path skips the copy step.
 *
 * The two links are plain anchors present in the static HTML. Only the copy
 * button needs JavaScript, and it renders after mount so it never appears
 * as a dead control when scripts are unavailable.
 */

function orderMessage(product?: Product, collection?: Collection) {
  if (product) {
    return [
      "سلام! از سایت اومدم 👋",
      "مایل به سفارش این محصول هستم:",
      "",
      `• ${product.nameFa} — ${product.name}`,
      "• تعداد: ۱",
      "",
      "لطفاً هزینه ارسال و روش پرداخت رو بفرمایید. ممنون!",
      "",
      "---",
      `Hi! I came from your website. I'd like to order: ${product.name} (${product.nameFa}), qty 1.`,
      "Could you confirm shipping cost and payment details? Thank you!",
    ].join("\n");
  }

  const name = collection?.nameFa ?? "محصولات";
  return [
    "سلام! از سایت اومدم 👋",
    `درباره‌ی ${name} سؤال داشتم.`,
    "",
    "---",
    `Hi! I came from your website — I have a question about the ${
      collection?.name ?? "products"
    }.`,
  ].join("\n");
}

type Status = "idle" | "copied" | "manual";

export function OrderButton({
  product,
  collection,
  variant = "full",
}: {
  product?: Product;
  collection?: Collection;
  variant?: "full" | "compact";
}) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const manualRef = useRef<HTMLTextAreaElement>(null);

  const message = orderMessage(product, collection);
  const dmUrl = `https://ig.me/m/${site.instagram.handle}`;
  const waUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
    : null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (status !== "copied") return;
    const t = setTimeout(() => setStatus("idle"), 3200);
    return () => clearTimeout(t);
  }, [status]);

  useEffect(() => {
    if (status === "manual") manualRef.current?.select();
  }, [status]);

  async function copy() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("no clipboard");
      await navigator.clipboard.writeText(message);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  }

  return (
    <div className={`order${variant === "compact" ? " order--compact" : ""}`}>
      {mounted && (
        <button type="button" className="site-cta order__copy" onClick={copy}>
          {status === "copied" ? "Copied — now paste it in the DM" : "Copy order details"}
        </button>
      )}

      <a className="site-cta order__dm" href={dmUrl} target="_blank" rel="noreferrer">
        Order on Instagram <CtaArrow direction="external" />
      </a>

      {waUrl && (
        <a className="site-cta order__alt" href={waUrl} target="_blank" rel="noreferrer">
          Or message on WhatsApp
        </a>
      )}

      <p className="order__live" role="status" aria-live="polite">
        {status === "copied" ? "Order details copied to the clipboard." : ""}
      </p>

      {status === "manual" && (
        <div className="order__manual">
          <label htmlFor="order-manual">
            Copy this message, then open the DM:
          </label>
          <textarea
            id="order-manual"
            ref={manualRef}
            readOnly
            rows={8}
            value={message}
          />
        </div>
      )}
    </div>
  );
}
