import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHeader, Section } from "@/components/ui";
import { events } from "@/content/org";

export const metadata: Metadata = {
  title: "Sự kiện và hoạt động",
  description: "Sự kiện xúc tiến đầu tư, hoạt động ngoại giao kinh tế và tin đối tác của Liên minh Invest Global.",
};

const kindLabel = { "su-kien": "Sự kiện xúc tiến", "ngoai-giao": "Ngoại giao kinh tế", "doi-tac": "Đối tác" } as const;

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));
  const byYear = sorted.reduce<Record<string, typeof sorted>>((acc, e) => {
    const y = e.date.slice(0, 4);
    (acc[y] ||= []).push(e);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <>
      <PageHeader
        title="Sự kiện và hoạt động"
        lead="Các chương trình xúc tiến đầu tư, buổi làm việc với cơ quan ngoại giao và hoạt động cùng đối tác chiến lược."
        crumbs={[{ href: "/tin-tuc", label: "Sự kiện" }]}
      />
      <Section>
        <div className="space-y-16">
          {years.map((y) => (
            <section key={y} aria-labelledby={`nam-${y}`}>
              <h2 id={`nam-${y}`} className="chart-note text-[2rem] text-teal">
                {y}
              </h2>
              <ul className="mt-4 divide-y divide-rule border-y border-rule">
                {byYear[y].map((e) => (
                  <li key={e.slug} className="grid gap-5 py-7 md:grid-cols-12 md:gap-8">
                    {e.image && (
                      <div className="relative aspect-[3/2] overflow-hidden rounded border border-rule bg-shoal md:col-span-4">
                        <Image src={e.image} alt={e.title} fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
                      </div>
                    )}
                    <div className={e.image ? "md:col-span-8" : "md:col-span-12"}>
                      <p className="chart-note text-slate">
                        {e.dateLabel}, {kindLabel[e.kind]}
                      </p>
                      <h3 className="mt-2 text-[1.3rem]">{e.title}</h3>
                      <p className="mt-2 text-slate">{e.venue}</p>
                      <p className="text-slate">{e.organizers}</p>
                      {e.detail && <p className="mt-3 max-w-[64ch]">{e.detail}</p>}
                      {e.credit && <p className="mt-2 text-fine text-slate">{e.credit}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
