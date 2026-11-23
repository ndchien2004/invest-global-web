"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Certificate } from "@/content/types";

const MIN = 1;
const MAX = 5;
const STEP = 0.5;

export function CertificateGallery({ items }: { items: Certificate[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const moved = useRef(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const reset = () => {
    setZoom(1);
    setPos({ x: 0, y: 0 });
  };
  const close = useCallback(() => {
    setOpen(null);
    reset();
    lastTrigger.current?.focus();
  }, []);
  const go = useCallback(
    (d: number) => {
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length));
      reset();
    },
    [items.length],
  );
  const zoomBy = (d: number) =>
    setZoom((z) => {
      const nz = Math.min(MAX, Math.max(MIN, z + d));
      if (nz === 1) setPos({ x: 0, y: 0 });
      return nz;
    });

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "+" || e.key === "=") zoomBy(STEP);
      else if (e.key === "-") zoomBy(-STEP);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, go]);

  const c = open === null ? null : items[open];

  return (
    <>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <li key={it.title} className="flex flex-col">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpen(i);
              }}
              className="group relative block aspect-[5/7] w-full cursor-zoom-in overflow-hidden rounded-lg border border-rule bg-white shadow-[0_1px_6px_rgba(10,46,99,0.12)]"
              aria-label={`Xem ảnh lớn: ${it.title}`}
            >
              <Image
                src={it.image}
                alt={it.title}
                fill
                sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
            <p className="mt-4 text-[1.15rem] font-bold leading-snug text-navy">{it.title}</p>
            <p className="mt-1 text-[1.05rem] font-bold text-kelp">({it.date})</p>
          </li>
        ))}
      </ol>

      {c && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={c.title}
          className="fixed inset-0 z-[100] flex flex-col bg-abyss/[0.97] text-white"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-center gap-3 px-4 py-3 md:px-6">
            <p className="min-w-0 flex-1 truncate text-[1.05rem] font-bold md:text-[1.15rem]">
              {open! + 1}/{items.length} · {c.title}
            </p>
            <button type="button" onClick={() => zoomBy(-STEP)} disabled={zoom <= MIN} className="lb-btn" aria-label="Thu nhỏ">
              −
            </button>
            <span className="w-14 text-center text-[1rem] tabular-nums">{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => zoomBy(STEP)} disabled={zoom >= MAX} className="lb-btn" aria-label="Phóng to">
              +
            </button>
            <button type="button" onClick={reset} className="lb-btn px-3 text-[0.95rem]" aria-label="Về kích thước ban đầu">
              1:1
            </button>
            <button ref={closeBtn} type="button" onClick={close} className="lb-btn" aria-label="Đóng">
              ✕
            </button>
          </div>

          <div
            className={`relative flex-1 touch-none overflow-hidden ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
            onClick={(e) => {
              if (moved.current) {
                moved.current = false;
                return;
              }
              if (e.target === e.currentTarget) close();
            }}
            onWheel={(e) => zoomBy(e.deltaY < 0 ? STEP / 2 : -STEP / 2)}
            onDoubleClick={() => (zoom > 1 ? reset() : setZoom(2))}
            onPointerDown={(e) => {
              moved.current = false;
              if (zoom <= 1 || (e.target as HTMLElement).closest("button")) return;
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
              drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
            }}
            onPointerMove={(e) => {
              const d = drag.current;
              if (!d) return;
              if (Math.abs(e.clientX - d.x) + Math.abs(e.clientY - d.y) > 4) moved.current = true;
              setPos({ x: d.px + (e.clientX - d.x), y: d.py + (e.clientY - d.y) });
            }}
            onPointerUp={() => (drag.current = null)}
            onPointerCancel={() => (drag.current = null)}
          >
            <div
              className="absolute inset-4 transition-transform duration-150 ease-out md:inset-8"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})` }}
            >
              <Image src={c.image} alt={c.title} fill sizes="100vw" className="pointer-events-none select-none object-contain" draggable={false} />
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              className="lb-btn absolute left-3 top-1/2 h-12 w-12 -translate-y-1/2 text-[1.5rem]"
              aria-label="Ảnh trước"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="lb-btn absolute right-3 top-1/2 h-12 w-12 -translate-y-1/2 text-[1.5rem]"
              aria-label="Ảnh sau"
            >
              ›
            </button>
          </div>
          <p className="pb-3 text-center text-[0.95rem] text-foam">Cuộn chuột hoặc nhấn đúp để phóng to · kéo để di chuyển · Esc để đóng</p>
        </div>
      )}
    </>
  );
}
