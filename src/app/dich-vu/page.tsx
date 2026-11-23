import type { Metadata } from "next";
import { CtaBand, PageHeader, Section, StepNo } from "@/components/ui";
import { processSteps, services } from "@/content/org";

export const metadata: Metadata = {
  title: "Dịch vụ và quy trình",
  description: "Chuỗi dịch vụ pháp lý và dự án, tài chính và M&A, nhân lực và truyền thông; quy trình 6 bước theo vòng đời dự án.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Chuỗi dịch vụ cho nhà đầu tư"
        lead="Ba nhóm dịch vụ nối liền nghiên cứu, pháp lý, dự án, vốn, đối tác, nhân lực và truyền thông, vận hành theo quy trình 6 bước."
        crumbs={[{ href: "/dich-vu", label: "Dịch vụ" }]}
      />

      <Section title="Ba nhóm dịch vụ">
        <div className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule lg:grid-cols-3">
          {services.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="bg-white p-6 md:p-8">
              <h3 id={`${s.id}-h`} className="text-[1.4rem]">
                {s.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section id="quy-trinh" tone="shoal" title="Quy trình 6 bước theo vòng đời dự án" lead="Quy trình được tổ chức theo logic từ tiếp nhận nhu cầu đến hỗ trợ triển khai.">
        <ol className="space-y-px overflow-hidden rounded-md border border-rule bg-rule">
          {processSteps.map((s, i) => (
            <li key={s.title} className="grid items-baseline gap-2 bg-white p-6 md:grid-cols-12 md:gap-6">
              <StepNo n={i + 1} className="text-[2rem] leading-none text-teal md:col-span-1" />
              <h3 className="text-[1.25rem] md:col-span-4">{s.title}</h3>
              <p className="text-slate md:col-span-7">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title="Bước 1 bắt đầu từ bạn" />
    </>
  );
}
