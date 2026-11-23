"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import type { NetworkNode } from "@/content/types";

/** Tọa độ thủ đô (địa lý thực) của các quốc gia có trên slide 19 — chỉ dùng để đặt điểm trên quả địa cầu. */
const COORDS: Record<string, [number, number]> = {
  "Việt Nam": [21.03, 105.85],
  "Ấn Độ": [28.61, 77.21],
  Nga: [55.76, 37.62],
  "Nhật Bản": [35.68, 139.69],
  Singapore: [1.35, 103.82],
  "Thái Lan": [13.76, 100.5],
  Canada: [45.42, -75.7],
  "Hoa Kỳ": [38.91, -77.04],
};

const toAngles = ([lat, lon]: [number, number]) => ({
  phi: Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2),
  theta: (lat * Math.PI) / 180,
});

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase();

export function NetworkGlobe({ nodes }: { nodes: NetworkNode[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const target = useRef<{ phi: number; theta: number } | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = toAngles(COORDS["Việt Nam"]);
    let phi = start.phi;
    let theta = 0.25;
    let width = canvas.offsetWidth;
    let dragX: number | null = null;
    let dragPhi = 0;

    const hub = COORDS["Việt Nam"];
    const places = nodes.map((n) => n.country).filter((c) => COORDS[c]);
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark: 1,
      scale: 1.08,
      diffuse: 1.3,
      mapSamples: 16000,
      mapBrightness: 5,
      mapBaseBrightness: 0.05,
      baseColor: [0.16, 0.3, 0.5],
      markerColor: [0.24, 0.81, 0.56],
      glowColor: [0.15, 0.3, 0.55],
      arcColor: [0.79, 0.64, 0.36],
      arcWidth: 0.6,
      arcHeight: 0.25,
      markerElevation: 0.01,
      markers: [
        { location: hub, size: 0.09, color: [0.79, 0.64, 0.36], id: "viet-nam" },
        ...places.map((c) => ({ location: COORDS[c], size: 0.06, id: slug(c) })),
      ],
      arcs: places.map((c) => ({ from: hub, to: COORDS[c], id: `vn-${slug(c)}` })),
    });

    let raf = 0;
    const tick = () => {
      const t = target.current;
      if (t) {
        // xoay mượt tới quốc gia được chọn
        let d = t.phi - phi;
        d = Math.atan2(Math.sin(d), Math.cos(d));
        phi += d * 0.08;
        theta += (t.theta - theta) * 0.08;
      } else if (dragX === null && !reduce) {
        phi += 0.0025;
      }
      globe.update({ phi, theta, width: width * 2, height: width * 2 });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => (width = canvas.offsetWidth);
    const onDown = (e: PointerEvent) => {
      dragX = e.clientX;
      dragPhi = phi;
      target.current = null;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (dragX === null) return;
      phi = dragPhi + (e.clientX - dragX) / 200;
    };
    const onUp = () => {
      dragX = null;
      canvas.style.cursor = "grab";
    };
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    requestAnimationFrame(() => (canvas.style.opacity = "1"));

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, [nodes]);

  const focus = (country: string) => {
    const c = COORDS[country];
    setActive(country);
    if (!c) {
      target.current = null;
      return;
    }
    const a = toAngles(c);
    target.current = { phi: a.phi, theta: Math.max(-0.4, Math.min(0.7, a.theta * 0.6)) };
  };

  const labels = ["Việt Nam", ...nodes.map((n) => n.country)].filter((c) => COORDS[c]);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="relative mx-auto aspect-square w-full max-w-[36rem] lg:col-span-6">
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-grab touch-none opacity-0 transition-opacity duration-700"
          aria-label="Quả địa cầu minh họa các quốc gia trong mạng lưới quốc tế"
          role="img"
        />
        {labels.map((c) => {
          const id = c === "Việt Nam" ? "viet-nam" : slug(c);
          return (
            <span
              key={c}
              aria-hidden="true"
              className={`globe-label ${c === "Việt Nam" ? "globe-label-hub" : ""} ${active === c ? "globe-label-active" : ""}`}
              style={
                {
                  positionAnchor: `--cobe-${id}`,
                  opacity: `var(--cobe-visible-${id}, 0)`,
                } as React.CSSProperties
              }
            >
              {c}
            </span>
          );
        })}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
        {nodes.map((n) => (
          <li key={n.country}>
            <button
              type="button"
              onClick={() => focus(n.country)}
              className={`h-full w-full rounded-lg border px-5 py-4 text-left transition-colors ${
                active === n.country ? "border-brass bg-white/10" : "border-white/15 hover:border-white/40"
              }`}
              aria-pressed={active === n.country}
            >
              <span className="flex items-center gap-3">
                <span className={`h-3 w-3 shrink-0 rounded-full ${COORDS[n.country] ? "bg-[#3ecf8e]" : "bg-brass"}`} aria-hidden="true" />
                <span className="text-[1.35rem] font-bold text-white">{n.country}</span>
              </span>
              <span className="mt-2 block space-y-0.5 pl-6 text-[1.05rem] text-foam">
                {n.sectors.map((x) => (
                  <span key={x} className="block">
                    {x}
                  </span>
                ))}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
