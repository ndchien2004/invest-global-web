import type { Metadata } from "next";
import SeaChart from "@/components/SeaChart";
import { CtaBand, PageHeader, Section } from "@/components/ui";
import { internationalNetwork, members, network } from "@/content/org";

export const metadata: Metadata = {
  title: "Mạng lưới thành viên và đối tác toàn cầu",
  description: "Bảy đơn vị thành viên tại Việt Nam và mạng lưới đối tác tại Nga, Ấn Độ, Nhật Bản, Singapore, Thái Lan, Canada, Hoa Kỳ.",
};

export default function NetworkPage() {
  return (
    <>
      <PageHeader
        title="Hệ thống thành viên và mạng lưới toàn cầu"
        lead="Năng lực được tổ chức theo mô hình: doanh nghiệp thành viên, đối tác quốc tế và các chuyên gia quốc tế."
        crumbs={[{ href: "/mang-luoi", label: "Mạng lưới" }]}
      />

      <Section title="Hệ thống tại Việt Nam">
        <ul className="divide-y divide-rule border-y border-rule">
          {members.map((m) => (
            <li key={m.name} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
              <p className="font-bold text-navy md:col-span-5">{m.name}</p>
              <p className="text-slate md:col-span-7">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" title="Mạng lưới toàn cầu và đối tác">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SeaChart animate={false} className="h-auto w-full" />
          </div>
          <dl className="grid content-start gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-2">
            {network.map((n) => (
              <div key={n.id} className="border-t border-white/20 pt-3">
                <dt className="font-bold text-white">{n.country}</dt>
                <dd className="text-[0.95rem] text-foam/80">{n.sectors.join(", ")}</dd>
              </div>
            ))}
            <div className="border-t border-brass/60 pt-3">
              <dt className="font-bold text-brass">Quốc tế</dt>
              <dd className="text-[0.95rem] text-foam/80">{internationalNetwork.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <CtaBand title="Tham gia mạng lưới" text="Tổ chức, hiệp hội, doanh nghiệp hoặc chuyên gia muốn hợp tác cùng Liên minh Invest Global, hãy để lại thông tin để chúng tôi liên hệ." />
    </>
  );
}
