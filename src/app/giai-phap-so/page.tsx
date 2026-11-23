import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section } from "@/components/ui";
import { modules, org } from "@/content/org";

export const metadata: Metadata = {
  title: "Hệ thống giải pháp xúc tiến đầu tư quốc tế",
  description: modules.lead,
};

export default function DigitalPage() {
  const r = 150;
  return (
    <>
      <PageHeader title={modules.name} lead={modules.lead} crumbs={[{ href: "/giai-phap-so", label: "Giải pháp số" }]}>
        <p className="chart-note mt-6 text-brass">{org.domain}</p>
      </PageHeader>

      <Section title="Sáu module của cổng thông tin" lead="Các module đang được phát triển và sẽ ra mắt theo từng giai đoạn.">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="mx-auto w-full max-w-[26rem] lg:col-span-5">
            <svg viewBox="-200 -200 400 400" role="img" aria-label="Sơ đồ 6 module xoay quanh Invest Global" className="h-auto w-full">
              <circle r={r} fill="none" stroke="#0F6E7A" strokeOpacity="0.35" strokeDasharray="3 6" />
              {modules.items.map((m, i) => {
                const a = (-90 + i * 60) * (Math.PI / 180);
                const x = Math.cos(a) * r;
                const y = Math.sin(a) * r;
                return (
                  <g key={m.name}>
                    <line x1={0} y1={0} x2={x} y2={y} stroke="#D3E2E8" />
                    <circle cx={x} cy={y} r={34} fill="#0A2E63" />
                    <text x={x} y={y - 2} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">
                      {m.name.replace("Invest ", "")}
                    </text>
                    <text x={x} y={y + 13} textAnchor="middle" fill="#B9E3EF" fontSize="9" className="chart-note">
                      Invest
                    </text>
                  </g>
                );
              })}
              <circle r={52} fill="#fff" stroke="#D3E2E8" />
              <image href="/images/brand/logo.webp" x={-36} y={-30} width={72} height={58} />
            </svg>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:col-span-7">
            {modules.items.map((m) => (
              <li key={m.name} className="bg-white p-5">
                <p className="text-[1.15rem] font-bold text-navy">{m.name}</p>
                <p className="mt-1 text-slate">{m.desc}</p>
                <p className="chart-note mt-3 text-fine text-teal">Sắp ra mắt</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-md bg-shoal p-6">
          <Image src="/images/brand/logo.webp" alt="" width={56} height={45} />
          <p className="flex-1">Muốn nhận thông tin khi cổng thông tin ra mắt, hoặc tham gia Invest Club?</p>
          <Link href="/lien-he" className="btn btn-primary">
            Đăng ký nhận thông tin
          </Link>
        </div>
      </Section>
    </>
  );
}
