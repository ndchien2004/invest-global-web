"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
// thanh địa chỉ trên điện thoại co giãn không làm tính lại toàn bộ vị trí (tránh giật)
ScrollTrigger.config({ ignoreMobileResize: true });

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

const NAV_OFFSET = 0;

/** Phát sự kiện chương đang xem để menu / thanh mục lục đánh dấu. */
function emitActive(id: string) {
  window.dispatchEvent(new CustomEvent("chapter:active", { detail: id }));
}

export function scrollToId(id: string) {
  const el = id === "top" ? document.body : document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(id === "top" ? 0 : el, { offset: id === "top" ? 0 : NAV_OFFSET, duration: 1.4 });
  else {
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "start" });
  }
}

/**
 * Bộ điều khiển chung của trang đơn:
 * cuộn mượt (Lenis), bấm neo cuộn tới chương, đánh dấu chương đang xem,
 * mở/đóng bảng chi tiết, và các hiệu ứng GSAP gắn theo thuộc tính data-*.
 */
export default function StoryRuntime() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // ── Cuộn mượt
    let lenis: Lenis | undefined;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 });
      window.__lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis!.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => {
        gsap.ticker.remove(tick);
        lenis!.destroy();
        window.__lenis = undefined;
      });
    }

    // ── Bấm liên kết neo (#...) → cuộn tới; bấm nút mở bảng chi tiết
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const opener = t.closest<HTMLElement>("[data-open]");
      if (opener) {
        e.preventDefault();
        openDialog(opener.dataset.open!, opener);
        return;
      }
      const a = t.closest<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.replace(/^\/?#/, "");
      if (!id) return;
      if (id === "top" || document.getElementById(id)) {
        e.preventDefault();
        const dlg = a.closest("dialog");
        if (dlg) (dlg as HTMLDialogElement).close();
        scrollToId(id);
        history.replaceState(null, "", id === "top" ? location.pathname : `#${id}`);
      }
    };
    document.addEventListener("click", onClick);
    cleanups.push(() => document.removeEventListener("click", onClick));

    // ── Bảng chi tiết (dialog)
    let lastOpener: HTMLElement | null = null;
    let hashBefore = "";
    function openDialog(id: string, from?: HTMLElement | null) {
      const dlg = document.getElementById(`dlg-${id}`) as HTMLDialogElement | null;
      if (!dlg || dlg.open) return;
      lastOpener = from ?? null;
      hashBefore = location.hash;
      dlg.showModal();
      dlg.scrollTop = 0;
      lenis?.stop();
      history.replaceState(null, "", `#${id}`);
    }
    const dialogs = Array.from(document.querySelectorAll<HTMLDialogElement>("dialog[data-sheet]"));
    for (const dlg of dialogs) {
      const onClose = () => {
        lenis?.start();
        history.replaceState(null, "", hashBefore || location.pathname);
        lastOpener?.focus({ preventScroll: true });
      };
      const onBackdrop = (e: MouseEvent) => {
        if (e.target === dlg) dlg.close();
      };
      dlg.addEventListener("close", onClose);
      dlg.addEventListener("click", onBackdrop);
      cleanups.push(() => {
        dlg.removeEventListener("close", onClose);
        dlg.removeEventListener("click", onBackdrop);
      });
    }

    // ── Đánh dấu chương đang xem
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const spy = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) emitActive((vis[0].target as HTMLElement).id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));
    cleanups.push(() => spy.disconnect());

    // ── Mở đúng chỗ khi vào bằng đường dẫn có #
    const initial = location.hash.slice(1);
    if (initial) {
      requestAnimationFrame(() => {
        if (document.getElementById(`dlg-${initial}`)) {
          const owner = document.querySelector<HTMLElement>(`[data-open="${initial}"]`);
          const chapter = owner?.closest<HTMLElement>("[data-chapter]");
          if (chapter) window.scrollTo(0, chapter.offsetTop + 40);
          openDialog(initial, owner);
        } else if (document.getElementById(initial)) {
          setTimeout(() => scrollToId(initial), 200);
        }
      });
    }

    // ── Hiệu ứng GSAP
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // chữ sáng dần từng từ theo cuộn
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        const words = el.querySelectorAll(".w");
        gsap.fromTo(
          words,
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: el.closest("[data-words-scope]") ?? el,
              start: el.closest("[data-words-scope]") ? "top 70%" : "top 80%",
              end: el.closest("[data-words-scope]") ? "bottom 95%" : "bottom 45%",
              scrub: 0.6,
            },
          },
        );
      });

      // màn mở chương: số lớn trôi chậm, tiêu đề trồi lên
      gsap.utils.toArray<HTMLElement>("[data-opener]").forEach((el) => {
        const num = el.querySelector("[data-opener-num]");
        const lines = el.querySelectorAll("[data-opener-line]");
        if (num)
          gsap.fromTo(
            num,
            { yPercent: 18, opacity: 0.2 },
            { yPercent: -22, opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
          );
        gsap.from(lines, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 70%" },
        });
      });

      // ảnh trôi chậm hơn nội dung
      gsap.utils.toArray<HTMLElement>("[data-parallax-y]").forEach((el) => {
        const amt = Number(el.dataset.parallaxY || 12);
        gsap.fromTo(
          el,
          { yPercent: -amt },
          { yPercent: amt, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      // thẻ chồng (màn hình lớn): thẻ trước thu nhỏ & tối dần khi thẻ sau phủ lên
      const cards = window.matchMedia("(min-width: 1024px)").matches ? gsap.utils.toArray<HTMLElement>("[data-stack-card]") : [];
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const st = { trigger: next, start: "top 90%", end: "top 20%", scrub: 0.4 };
        gsap.fromTo(card.firstElementChild, { scale: 1 }, { scale: 0.93, ease: "none", force3D: true, scrollTrigger: st });
        const dim = card.querySelector(".pillar-card-dim");
        if (dim) gsap.fromTo(dim, { opacity: 0 }, { opacity: 0.45, ease: "none", scrollTrigger: { ...st } });
      });

      // đường kẻ tự vẽ theo cuộn
      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          { scaleX: 1, ease: "none", scrollTrigger: { trigger: el.parentElement?.parentElement ?? el, start: "top 80%", end: "bottom 55%", scrub: true } },
        );
      });

      // số đếm
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number(el.dataset.count);
        const o = { v: 0 };
        gsap.to(o, {
          v: to,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => (el.textContent = String(Math.round(o.v)).padStart(el.dataset.pad ? Number(el.dataset.pad) : 1, "0")),
        });
      });
    });
    cleanups.push(() => mm.revert());

    // ảnh tải xong thì tính lại vị trí các hiệu ứng
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = setTimeout(onLoad, 1200);
    cleanups.push(() => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
    });

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
