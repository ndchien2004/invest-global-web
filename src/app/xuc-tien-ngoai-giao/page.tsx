import type { Metadata } from "next";
import StrategicPartners from "@/components/StrategicPartners";
import { Bullets, Num, PageHeader, Section } from "@/components/ui";
import { promotion } from "@/content/org";

export const metadata: Metadata = { title: promotion.title, description: promotion.lead };

/** Slide 18 + 23 */
export default function PromotionPage() {
  return (
    <>
      <PageHeader title={promotion.title} lead={promotion.lead} crumbs={[{ href: "/xuc-tien-ngoai-giao", label: promotion.title }]} />
      <Section>
        <h2 className="text-[1.75rem] md:text-[2.25rem]">{promotion.activitiesTitle}</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {promotion.activities.map((a) => (
            <li key={a} className="flex min-h-[4.5rem] items-center justify-center rounded-lg bg-shoal px-4 py-3 text-center text-[1.15rem] font-bold leading-snug text-navy">
              {a}
            </li>
          ))}
        </ul>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {promotion.channels.map((c, i) => (
            <li key={c.title} className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
              <div className="flex items-center gap-3">
                <Num n={i + 1} />
                <h3 className="text-[1.5rem]">{c.title}</h3>
              </div>
              <Bullets items={c.desc} className="mt-4 text-[1.15rem]" />
            </li>
          ))}
        </ol>
      </Section>
      <StrategicPartners />
    </>
  );
}
