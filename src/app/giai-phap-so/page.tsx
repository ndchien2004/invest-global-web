import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Section } from "@/components/ui";
import { modules, org } from "@/content/org";

export const metadata: Metadata = { title: modules.title, description: modules.lead };

/** Slide 6–7 */
export default function DigitalPage() {
  const r = 150;
  return (
    <>
      <PageHeader title={modules.title} lead={modules.lead} crumbs={[{ href: "/giai-phap-so", label: modules.title }]}>
        <p className="mt-6 inline-block rounded-full border border-white/50 px-5 py-2 text-[1.2rem] font-bold text-white">{org.domain}</p>
      </PageHeader>
      <Section title={modules.systemTitle}>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="mx-auto w-full max-w-[28rem] lg:col-span-5">
            <svg viewBox="-210 -210 420 420" role="img" aria-label={modules.systemTitle} className="h-auto w-full">
              {modules.items.map((m, i) => {
                const a = (-90 + i * 60) * (Math.PI / 180);
                const b = (-90 + ((i + 1) % 6) * 60) * (Math.PI / 180);
                return <line key={m.name} x1={Math.cos(a) * r} y1={Math.sin(a) * r} x2={Math.cos(b) * r} y2={Math.sin(b) * r} stroke="#F0A030" strokeWidth="4" />;
              })}
              {modules.items.map((m, i) => {
                const a = (-90 + i * 60) * (Math.PI / 180);
                const x = Math.cos(a) * r;
                const y = Math.sin(a) * r;
                return (
                  <g key={m.name}>
                    <circle cx={x} cy={y} r={40} fill="#D7261E" stroke="#F0A030" strokeWidth="4" />
                    <text x={x} y={y - 3} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">
                      MODULE
                    </text>
                    <text x={x} y={y + 15} textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">
                      {i + 1}
                    </text>
                  </g>
                );
              })}
              <image href="/images/brand/logo.webp" x={-55} y={-45} width={110} height={90} />
            </svg>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {modules.items.map((m) => (
              <li key={m.name} className="rounded-lg bg-white p-5 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                <p className="text-[1rem] font-bold uppercase text-slate">{m.module}</p>
                <p className="text-[1.5rem] font-bold uppercase text-[#C8102E]">{m.name}</p>
                <p className="mt-1 text-[1.15rem] text-navy">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
