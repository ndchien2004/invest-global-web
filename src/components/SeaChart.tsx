import { network, origin } from "@/content/org";

/**
 * Hải đồ: lưới kinh vĩ độ, đường đẳng sâu, đường bờ biển Việt Nam (có Hoàng Sa, Trường Sa)
 * và các tuyến hải trình từ Hà Nội tới 7 điểm trong mạng lưới.
 * Phép chiếu equirectangular, kinh độ âm được cộng 360 để đi qua Thái Bình Dương.
 */
const W = 800;
const H = 520;
const LON0 = 30;
const LON1 = 290;
const LAT0 = 66;
const LAT1 = -6;

const wrapLon = (lon: number) => (lon < 0 ? lon + 360 : lon);
export const project = (lon: number, lat: number) => ({
  x: ((wrapLon(lon) - LON0) / (LON1 - LON0)) * W,
  y: ((LAT0 - lat) / (LAT0 - LAT1)) * H,
});

const coast: [number, number][] = [
  [107.9, 21.5], [106.7, 20.9], [106.0, 19.9], [105.7, 18.9], [106.5, 17.6], [107.2, 16.6], [108.3, 15.9],
  [108.9, 15.0], [109.3, 13.5], [109.2, 12.2], [108.9, 11.3], [107.8, 10.6], [106.8, 10.3], [106.2, 9.5],
  [105.2, 8.6], [104.8, 9.3], [104.5, 10.4],
];

const labelSide: Record<string, { dx: number; dy: number; anchor: "start" | "end" }> = {
  nga: { dx: 10, dy: -10, anchor: "start" },
  "an-do": { dx: -10, dy: -10, anchor: "end" },
  "nhat-ban": { dx: 10, dy: -8, anchor: "start" },
  singapore: { dx: -10, dy: 16, anchor: "end" },
  "thai-lan": { dx: -10, dy: 4, anchor: "end" },
  canada: { dx: -10, dy: -10, anchor: "end" },
  "hoa-ky": { dx: -10, dy: 20, anchor: "end" },
};

function fmt(lat: number, lon: number) {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lon >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(1)}°${ns} ${Math.abs(lon).toFixed(1)}°${ew}`;
}

export default function SeaChart({ animate = true, className = "" }: { animate?: boolean; className?: string }) {
  const o = project(origin.lon, origin.lat);
  const lonLines = [60, 90, 120, 150, 180, 210, 240, 270];
  const latLines = [60, 45, 30, 15, 0];
  const coastPath = coast.map(([lon, lat], i) => {
    const p = project(lon, lat);
    return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" ");
  const hs = project(112, 16.5);
  const ts = project(114, 10);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="Hải đồ mạng lưới Invest Global: các tuyến kết nối từ Hà Nội tới Nga, Ấn Độ, Nhật Bản, Singapore, Thái Lan, Canada và Hoa Kỳ"
    >
      {/* lưới kinh vĩ độ */}
      <g stroke="#B9E3EF" strokeOpacity="0.12" strokeWidth="1">
        {lonLines.map((lon) => {
          const { x } = project(lon, 0);
          return <line key={lon} x1={x} y1={0} x2={x} y2={H} />;
        })}
        {latLines.map((lat) => {
          const { y } = project(LON0, lat);
          return <line key={lat} x1={0} y1={y} x2={W} y2={y} />;
        })}
      </g>
      <g className="chart-note" fill="#B9E3EF" fillOpacity="0.45" fontSize="10">
        {lonLines.map((lon) => {
          const { x } = project(lon, 0);
          const label = lon <= 180 ? `${lon}°E` : `${360 - lon}°W`;
          return (
            <text key={lon} x={x + 4} y={H - 8}>
              {label}
            </text>
          );
        })}
        {latLines.map((lat) => {
          const { y } = project(LON0, lat);
          return (
            <text key={lat} x={6} y={y - 5}>
              {lat === 0 ? "0°" : `${lat}°N`}
            </text>
          );
        })}
      </g>

      {/* đường đẳng sâu */}
      <g fill="none" stroke="#B9E3EF" strokeOpacity="0.16" strokeWidth="1">
        <path d="M120,470 C220,430 300,452 360,420 S470,360 560,388 S700,430 800,400" />
        <path d="M100,500 C230,470 320,486 400,456 S520,410 600,428 S720,462 800,446" strokeDasharray="2 5" />
      </g>
      <g className="chart-note" fill="#B9E3EF" fillOpacity="0.4" fontSize="9">
        <text x={566} y={382}>200 m</text>
        <text x={606} y={422}>1000 m</text>
      </g>

      {/* bờ biển Việt Nam */}
      <path d={coastPath} fill="none" stroke="#B9E3EF" strokeOpacity="0.85" strokeWidth="1.6" strokeLinejoin="round" />
      <g fill="#B9E3EF" fillOpacity="0.85">
        <circle cx={hs.x} cy={hs.y} r="1.8" />
        <circle cx={hs.x + 3} cy={hs.y + 2} r="1.2" />
        <circle cx={ts.x} cy={ts.y} r="1.8" />
        <circle cx={ts.x + 4} cy={ts.y + 3} r="1.2" />
        <circle cx={ts.x - 2} cy={ts.y + 5} r="1.2" />
      </g>
      <g className="chart-note" fill="#B9E3EF" fillOpacity="0.7" fontSize="9">
        <text x={hs.x + 8} y={hs.y + 3}>Q. Hoàng Sa</text>
        <text x={ts.x + 8} y={ts.y + 6}>Q. Trường Sa</text>
      </g>

      {/* tuyến hải trình */}
      <g fill="none" stroke="#C9A45C" strokeWidth="1.4" strokeLinecap="round">
        {network.map((n, i) => {
          const p = project(n.lon, n.lat);
          const mx = (o.x + p.x) / 2;
          const dist = Math.hypot(p.x - o.x, p.y - o.y);
          const my = Math.min(o.y, p.y) - Math.max(24, dist * 0.28);
          return (
            <path
              key={n.id}
              d={`M${o.x.toFixed(1)},${o.y.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`}
              pathLength={1}
              className={animate ? "route" : undefined}
              style={{ ["--len" as string]: 1, ["--delay" as string]: `${0.3 + i * 0.12}s` }}
              strokeOpacity="0.8"
            />
          );
        })}
      </g>

      {/* điểm đến */}
      {network.map((n, i) => {
        const p = project(n.lon, n.lat);
        const s = labelSide[n.id];
        return (
          <g
            key={n.id}
            className={animate ? "route-node" : undefined}
            style={{ ["--delay" as string]: `${1.3 + i * 0.12}s` }}
          >
            <circle cx={p.x} cy={p.y} r="3.5" fill="#061A3A" stroke="#C9A45C" strokeWidth="1.5" />
            <text x={p.x + s.dx} y={p.y + s.dy} textAnchor={s.anchor} fill="#FFFFFF" fontSize="13" fontWeight="700">
              {n.country}
            </text>
            <text
              x={p.x + s.dx}
              y={p.y + s.dy + 13}
              textAnchor={s.anchor}
              className="chart-note"
              fill="#B9E3EF"
              fillOpacity="0.6"
              fontSize="9"
            >
              {fmt(n.lat, n.lon)}
            </text>
          </g>
        );
      })}

      {/* gốc: Hà Nội */}
      <circle cx={o.x} cy={o.y} r="10" fill="#C9A45C" fillOpacity="0.18" />
      <circle cx={o.x} cy={o.y} r="4.5" fill="#C9A45C" />
      <text x={o.x - 12} y={o.y + 18} textAnchor="end" fill="#C9A45C" fontSize="13" fontWeight="700">
        {origin.label}
      </text>
    </svg>
  );
}
