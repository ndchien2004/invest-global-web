"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Các phần tử được "hiện dần khi cuộn tới". Phải khớp với bộ chọn trong globals.css (html.motion …).
 * Hero / đầu trang ([data-hero]) có hiệu ứng riêng nên bỏ qua.
 */
export const REVEAL_SELECTOR = [
  "main section h2",
  "main section .wrap > p",
  "main :is(ul, ol):is(.grid, .flex-wrap) > li",
  "main figure",
  "main [data-reveal]",
]
  .map((s) => `${s}:not([data-hero] *)`)
  .join(",");

/** Bật hiệu ứng hiện dần khi cuộn; tự chạy lại mỗi lần đổi trang. */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    (window as unknown as { __motionReady?: boolean }).__motionReady = true;
    if (!root.classList.contains("motion")) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter((el) => !el.classList.contains("is-in"));

    // trễ lần lượt cho các phần tử anh em trong cùng một lưới
    for (const el of els) {
      const parent = el.parentElement;
      if (!parent) continue;
      const i = Array.prototype.indexOf.call(parent.children, el);
      el.style.setProperty("--rd", `${Math.min(i, 7) * 70}ms`);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          io.unobserve(el);
          // sau khi hiện xong, bỏ độ trễ để hiệu ứng rê chuột không bị chậm
          window.setTimeout(() => el.style.removeProperty("--rd"), 1200);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
