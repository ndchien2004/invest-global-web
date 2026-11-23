import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, PageHeader, Photo, Section } from "@/components/ui";
import { sectors, sectorsLead, sectorsTitle } from "@/content/sectors";

export const metadata: Metadata = { title: sectorsTitle, description: sectorsLead };

/** Slide 11 */
export default function SectorsPage() {
  return (
    <>
      <PageHeader title={sectorsTitle} lead={sectorsLead} crumbs={[{ href: "/linh-vuc", label: "Lĩnh vực" }]} />
      <Section>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <li key={s.slug} className="overflow-hidden rounded-lg border-2 border-shoal">
              <Link href={`/linh-vuc/${s.slug}`} className="group block">
                <Photo src={s.images[0]} alt={s.overviewTitle} className="aspect-[2/1]" sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw" />
                <div className="p-5">
                  <h2 className="text-[1.4rem] group-hover:text-teal group-hover:underline">
                    {String(s.no).padStart(2, "0")}. {s.overviewTitle}
                  </h2>
                  <Bullets items={s.summary} className="mt-3 text-[1.1rem] text-slate" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
