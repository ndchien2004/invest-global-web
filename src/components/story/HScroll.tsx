"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Cuộn dọc → nội dung chạy ngang (màn hình máy tính).
 * Khối được ghim bằng position: sticky; chiều cao khối = độ dài dải ngang.
 * Điện thoại / giảm chuyển động: dải ngang vuốt tay bình thường.
 */
export default function HScroll({
  children,
  head,
  hint = "Cuộn để đi tiếp →",
  className = "",
}: {
  children: ReactNode;
  head?: ReactNode;
  hint?: string;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = wrap.current!;
    const t = track.current!;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      w.classList.add("is-pinned");
      const dist = () => Math.max(0, t.scrollWidth - window.innerWidth);
      const setH = () => (w.style.height = `${dist() + window.innerHeight}px`);
      setH();
      const tween = gsap.to(t, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: w,
          start: "top top",
          end: () => `+=${dist()}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onRefreshInit: setH,
          onUpdate: (st) => bar.current && (bar.current.style.transform = `scaleX(${st.progress})`),
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        w.classList.remove("is-pinned");
        w.style.height = "";
        gsap.set(t, { x: 0 });
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={wrap} className={`hscroll ${className}`}>
      <div className="hscroll-sticky">
        {head && <div className="wrap">{head}</div>}
        <div className="hscroll-viewport">
          <div ref={track} className="hscroll-track">
            {children}
          </div>
        </div>
        <div className="wrap mt-6 flex items-center gap-4">
          <p className="hscroll-hint text-[1rem] font-bold uppercase tracking-wide opacity-70">{hint}</p>
          <div className="h-[3px] flex-1 overflow-hidden rounded bg-current/15">
            <div ref={bar} className="hscroll-bar h-full origin-left rounded bg-brass" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
