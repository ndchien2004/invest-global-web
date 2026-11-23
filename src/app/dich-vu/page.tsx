import type { Metadata } from "next";
import { Bullets, Num, PageHeader, Section } from "@/components/ui";
import { processLead, processSteps, processTitle, services, servicesTitle } from "@/content/org";

export const metadata: Metadata = {
  title: "Chuỗi dịch vụ và quy trình 06 bước",
  description: processLead,
};

/** Slide 9, 10 */
export default function ServicesPage() {
  return (
    <>
      <PageHeader title={servicesTitle} crumbs={[{ href: "/dich-vu", label: "Dịch vụ" }]} />
      <Section>
        <ol className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.id} id={s.id} className="rounded-lg border-t-4 border-kelp bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
              <div className="flex items-center gap-3">
                <Num n={i + 1} />
                <h2 className="text-[1.6rem]">{s.title}</h2>
              </div>
              <Bullets items={s.items} className="mt-5 text-[1.15rem]" />
            </li>
          ))}
        </ol>
      </Section>
      <Section id="quy-trinh" tone="shoal" title={processTitle} lead={processLead}>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="rounded-lg bg-white p-6">
              <Num n={i + 1} />
              <h3 className="mt-4 text-[1.5rem]">{s.title}</h3>
              <p className="mt-2 text-[1.15rem] text-slate">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
