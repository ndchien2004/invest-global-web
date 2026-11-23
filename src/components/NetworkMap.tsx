"use client";

import { useEffect, useRef, useState } from "react";
import type { NetworkNode } from "@/content/types";

/** Kích thước bản đồ chấm (public/images/world-dots.svg, sinh bằng dotted-map). */
const W = 139.5;
const H = 70.28;

/**
 * Vị trí thủ đô (theo tọa độ địa lý thực) của các quốc gia trên slide 19, quy về lưới bản đồ.
 * label: vị trí nhãn so với điểm, để các nước gần nhau không đè chữ.
 */
const PINS: Record<string, { x: number; y: number; label: [number, number, "start" | "end" | "middle"] }> = {
  "Việt Nam": { x: 113.5, y: 32.91, label: [2.2, 0.8, "start"] },
  "Ấn Độ": { x: 101.5, y: 29.44, label: [-2, 0.8, "end"] },
  Nga: { x: 85, y: 14.72, label: [0, -2.4, "middle"] },
  "Nhật Bản": { x: 127, y: 26.85, label: [2, 0.8, "start"] },
  Singapore: { x: 112.5, y: 41.57, label: [2, 1.6, "start"] },
  "Thái Lan": { x: 111.5, y: 36.37, label: [-2, 0.9, "end"] },
  Canada: { x: 38.5, y: 20.78, label: [0, -2.4, "middle"] },
  "Hoa Kỳ": { x: 38, y: 25.11, label: [-2, 1.8, "end"] },
};
const HUB = PINS["Việt Nam"];

function arcPath(to: { x: number; y: number }) {
  const dx = to.x - HUB.x;
  const dy = to.y - HUB.y;
  const dist = Math.hypot(dx, dy);
  const cx = HUB.x + dx / 2;
  const cy = HUB.y + dy / 2 - Math.min(dist * 0.35, 18);
  return `M${HUB.x} ${HUB.y} Q${cx.toFixed(2)} ${cy.toFixed(2)} ${to.x} ${to.y}`;
}

/** Phải khớp với .netmap-stage / .netmap-plane trong globals.css */
const PERSPECTIVE_PX = 1600;
const TILT = (22 * Math.PI) / 180;
const ORIGIN_Y = 0.6;

export function NetworkMap({ nodes }: { nodes: NetworkNode[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [px, setPx] = useState(1200);
  const stageRef = useRef<HTMLDivElement>(null);
  const places = nodes.map((n) => n.country).filter((c) => PINS[c]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setPx(el.offsetWidth || 1200));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // chiếu điểm trên mặt phẳng nghiêng ra màn hình (đơn vị viewBox), để điểm + nhãn vẽ phẳng, không nhòe
  const k = px / W;
  const P = PERSPECTIVE_PX / k;
  const ox = W / 2;
  const oy = H * ORIGIN_Y;
  const project = (x: number, y: number) => {
    const dy = y - oy;
    const z = -dy * Math.sin(TILT);
    const s = P / (P - z);
    return { x: ox + (x - ox) * s, y: oy + dy * Math.cos(TILT) * s, s };
  };
  const hub = project(HUB.x, HUB.y);

  return (
    <div>
      <div ref={stageRef} className="netmap-stage relative">
        <div className="netmap-plane">
          <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label="Bản đồ các quốc gia trong mạng lưới quốc tế">
            <image href="/images/world-dots.svg" x="0" y="0" width={W} height={H} opacity="0.85" />
            {places.map((c) => (
              <path
                key={`arc-${c}`}
                d={arcPath(PINS[c])}
                className={`netmap-arc ${active && active !== c ? "opacity-20" : ""}`}
                fill="none"
                stroke={active === c ? "#c9a45c" : "#c9a45c"}
                strokeWidth={active === c ? 0.45 : 0.25}
              />
            ))}
          </svg>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            {places.map((c) => {
              const p = { ...PINS[c], ...project(PINS[c].x, PINS[c].y) };
              const on = active === c;
              return (
                <g key={c} className={active && !on ? "opacity-40" : ""}>
                  <circle cx={p.x} cy={p.y} r="1.6" className="netmap-pulse" fill="#3ecf8e" />
                  <circle cx={p.x} cy={p.y} r={on ? 1.1 : 0.8} fill="#3ecf8e" stroke="#061a3a" strokeWidth="0.2" />
                  <text
                    x={p.x + p.label[0]}
                    y={p.y + p.label[1]}
                    textAnchor={p.label[2]}
                    className="netmap-label"
                    fill={on ? "#c9a45c" : "#ffffff"}
                  >
                    {c}
                  </text>
                </g>
              );
            })}
            <g>
              <circle cx={hub.x} cy={hub.y} r="2.4" className="netmap-pulse" fill="#c9a45c" />
              <circle cx={hub.x} cy={hub.y} r="1.25" fill="#c9a45c" stroke="#061a3a" strokeWidth="0.25" />
              <text x={hub.x + HUB.label[0]} y={hub.y + HUB.label[1]} textAnchor={HUB.label[2]} className="netmap-label netmap-label-hub" fill="#c9a45c">
                Việt Nam
              </text>
            </g>
        </svg>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((n) => (
          <li key={n.country}>
            <button
              type="button"
              onMouseEnter={() => setActive(n.country)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n.country)}
              onBlur={() => setActive(null)}
              className={`h-full w-full rounded-lg border px-5 py-4 text-left transition-colors ${
                active === n.country ? "border-brass bg-white/10" : "border-white/15"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`h-3 w-3 shrink-0 rounded-full ${PINS[n.country] ? "bg-[#3ecf8e]" : "bg-brass"}`} aria-hidden="true" />
                <span className="text-[1.3rem] font-bold text-white">{n.country}</span>
              </span>
              <span className="mt-2 block space-y-0.5 pl-6 text-[1.02rem] text-foam">
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
