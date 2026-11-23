import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, IllustrationImage, PageHeader, Section } from "@/components/ui";
import { sectorRole, sectors, sectorsLead } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Lĩnh vực hoạt động trọng tâm",
  description: sectorsLead,
};

export default function SectorsPage() {
  return (
    <>
      <PageHeader title="Lĩnh vực hoạt động trọng tâm" lead={sectorsLead} crumbs={[{ href: "/linh-vuc", label: "Lĩnh vực" }]} />
      <Section>
        <ul className="divide-y divide-rule border-y border-rule">
          {sectors.map((s) => (
            <li key={s.slug}>
              <Link href={`/linh-vuc/${s.slug}`} className="group grid gap-6 py-8 md:grid-cols-12 md:items-center">
                <IllustrationImage src={s.image} alt={s.title} className="aspect-[16/9] rounded-md md:col-span-4" sizes="(min-width:768px) 33vw, 100vw" />
                <div className="md:col-span-8">
                  <h2 className="text-[1.5rem] group-hover:text-teal group-hover:underline md:text-[1.75rem]">{s.title}</h2>
                  <p className="mt-2 text-lg text-slate">{s.lead}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.summary.map((x) => (
                      <li key={x} className="rounded bg-shoal px-3 py-1 text-[0.9rem]">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="shoal" title="Vai trò của Invest Global trong mọi lĩnh vực">
        <ol className="flex flex-col gap-3 md:flex-row md:items-stretch">
          {sectorRole.map((r, i) => (
            <li key={r} className="flex flex-1 items-center gap-3 rounded-md bg-white p-5 font-semibold text-navy">
              <span className="chart-note text-teal">{i + 1}</span>
              {r}
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}
