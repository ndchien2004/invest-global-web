import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHeader, Section } from "@/components/ui";
import { events, promotion, strategicPartners } from "@/content/org";

export const metadata: Metadata = {
  title: "Xúc tiến đầu tư và ngoại giao quốc tế",
  description: promotion.lead,
};

export default function PromotionPage() {
  const indiaEvents = events
    .filter((e) => e.kind === "su-kien")
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader title="Xúc tiến đầu tư và ngoại giao quốc tế" lead={promotion.lead} crumbs={[{ href: "/xuc-tien-ngoai-giao", label: "Xúc tiến và ngoại giao" }]} />

      <Section title="Ba kênh phối hợp">
        <div className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule md:grid-cols-3">
          {promotion.channels.map((c) => (
            <div key={c.title} className="bg-white p-6 md:p-8">
              <h3 className="text-[1.25rem]">{c.title}</h3>
              <p className="mt-3 text-slate">{c.desc}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-14 text-[1.35rem]">Hoạt động xúc tiến và kết nối quốc tế</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {promotion.activities.map((a) => (
            <li key={a} className="rounded bg-shoal px-4 py-2 font-medium">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="an-do-viet-nam" tone="shoal" title="Hành lang hợp tác Ấn Độ – Việt Nam" lead="Invest Global đồng tổ chức nhiều hoạt động xúc tiến cùng Đại sứ quán Ấn Độ, các phòng thương mại và hiệp hội ngành của Ấn Độ, đồng thời là đại diện tại Việt Nam của hai tập đoàn năng lượng ACME và Suzlon.">
        <div className="grid gap-10 md:grid-cols-2">
          {strategicPartners.map((p) => (
            <figure key={p.id} className="rounded-md bg-white p-5">
              <div className="relative aspect-[3/2] overflow-hidden rounded">
                <Image src={p.image} alt={p.caption} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-4">
                <p className="text-[1.2rem] font-bold text-navy">{p.name}</p>
                <p className="mt-1">{p.text}</p>
                <p className="mt-2 text-fine text-slate">
                  {p.caption} {p.credit}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="mt-16 text-[1.5rem]">Sự kiện đồng tổ chức</h3>
        <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {indiaEvents.map((e) => (
            <li key={e.slug} className="flex flex-col">
              {e.image && (
                <div className="relative aspect-[3/2] overflow-hidden rounded border border-rule bg-white">
                  <Image src={e.image} alt={`Poster: ${e.title}`} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="object-cover" />
                </div>
              )}
              <p className="chart-note mt-3 text-teal">{e.dateLabel}</p>
              <p className="mt-1 font-bold leading-snug text-navy">{e.title}</p>
              <p className="mt-1 text-[0.95rem] text-slate">{e.venue}</p>
              <p className="text-[0.95rem] text-slate">{e.organizers}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="/tin-tuc" className="link">
            Xem tất cả sự kiện và hoạt động ngoại giao
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
