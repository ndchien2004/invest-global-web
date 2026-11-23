import type { Metadata } from "next";
import { CtaBand, PageHeader, Section } from "@/components/ui";
import { partnerGroups } from "@/content/org";

export const metadata: Metadata = {
  title: "Đối tác",
  description: "Bộ ngành, định chế tài chính, tập đoàn, doanh nghiệp, cơ quan ngoại giao và tổ chức quốc tế đồng hành cùng Invest Global.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        title="Đối tác đồng hành"
        lead="Kết nối nguồn lực cho các dự án FDI quy mô lớn: cảng biển, năng lượng tái tạo, đô thị biển, logistics và chuyển đổi số."
        crumbs={[{ href: "/doi-tac", label: "Đối tác" }]}
      >
        <nav aria-label="Nhóm đối tác" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {partnerGroups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-[0.9rem] text-foam hover:bg-white/10">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <Section>
        <div className="space-y-14">
          {partnerGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-24 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 id={`${g.id}-h`} className="text-[1.4rem]">
                  {g.title}
                </h2>
                {g.note && <p className="mt-2 text-slate">{g.note}</p>}
              </div>
              <ul className="grid gap-px self-start overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 md:col-span-8">
                {g.partners.map((p) => (
                  <li key={p} className="bg-white px-5 py-4 font-medium">
                    {p}
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
