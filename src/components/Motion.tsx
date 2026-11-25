"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Các phần tử được "hiện dần khi cuộn tới". Phải khớp với bộ chọn trong globals.css (html.motion …).
 * Hero / đầu trang ([data-hero]) có hiệu ứng riêng nên bỏ qua.
 */
export const REVEAL_SELECTOR = [
  "main section h2",
  "main .section-title",
  "main section .wrap > p",
  "main :is(ul, ol):is(.grid, .flex-wrap) > li",
  "main figure",
  "main [data-reveal]",
]
  .map((s) => `${s}:not([data-hero] *):not([data-opener] *)`)
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

    const cleanups: (() => void)[] = [() => io.disconnect()];
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Thẻ nghiêng 3D theo con trỏ + vệt sáng
    if (fine) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--ry", `${(px - 0.5) * 8}deg`);
          card.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
          card.style.setProperty("--gx", `${px * 100}%`);
          card.style.setProperty("--gy", `${py * 100}%`);
          card.classList.add("is-tilting");
        };
        const leave = () => {
          card.classList.remove("is-tilting");
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });
    }

    // Hero: ảnh và chữ dịch nhẹ theo chuột
    const hero = document.querySelector<HTMLElement>("[data-parallax]");
    if (hero && fine) {
      let raf = 0;
      const move = (e: PointerEvent) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r = hero.getBoundingClientRect();
          hero.style.setProperty("--mx", `${((e.clientX - r.left) / r.width - 0.5) * 2}`);
          hero.style.setProperty("--my", `${((e.clientY - r.top) / r.height - 0.5) * 2}`);
        });
      };
      const leave = () => {
        hero.style.setProperty("--mx", "0");
        hero.style.setProperty("--my", "0");
      };
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", leave);
        cancelAnimationFrame(raf);
      });
    }

    // Mốc thời gian: đường kẻ vẽ dần theo cuộn
    const lines = Array.from(document.querySelectorAll<HTMLElement>("[data-timeline]"));
    if (lines.length) {
      let raf = 0;
      const update = () => {
        const vh = window.innerHeight;
        for (const el of lines) {
          const r = el.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / r.height));
          el.style.setProperty("--tl", p.toFixed(3));
        }
      };
      const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    return () => cleanups.forEach((f) => f());
  }, [pathname]);

  return null;
}
