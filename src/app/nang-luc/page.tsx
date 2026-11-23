import type { Metadata } from "next";
import { CtaBand, PageHeader, Section } from "@/components/ui";
import { certificates } from "@/content/org";

export const metadata: Metadata = {
  title: "Bản quyền tác giả và nghiên cứu",
  description: "Các công trình nghiên cứu và phần mềm của Liên minh Invest Global đã được cấp giấy chứng nhận đăng ký quyền tác giả.",
};

export default function CapabilityPage() {
  return (
    <>
      <PageHeader
        title="Bản quyền tác giả của Liên minh"
        lead="Các công trình nghiên cứu và phần mềm đã được Cục Bản quyền tác giả, Bộ Văn hóa, Thể thao và Du lịch cấp giấy chứng nhận đăng ký quyền tác giả."
        crumbs={[{ href: "/nang-luc", label: "Bản quyền và nghiên cứu" }]}
      />
      <Section>
        <ol className="relative border-l border-rule">
          {certificates.map((c) => (
            <li key={c.title} className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-teal" aria-hidden="true" />
              <p className="chart-note text-teal">{c.date}</p>
              <p className="mt-1 max-w-[60ch] text-[1.15rem] font-semibold text-navy">{c.title}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-[60ch] text-fine text-slate">
          Bản sao giấy chứng nhận được cung cấp theo yêu cầu cho đối tác. Ảnh chụp giấy chứng nhận chứa thông tin cá nhân
          của tác giả nên không đăng công khai.
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
