import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHeader, Section } from "@/components/ui";
import { differentiators, founders, leaderQuote, milestones, org, strategy } from "@/content/org";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Liên minh Tư vấn và Đầu tư Quốc tế Invest Global: tầm nhìn, sứ mệnh, mô hình chiến lược 2026–2035 và hành trình phát triển.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Liên minh Tư vấn và Đầu tư Quốc tế Invest Global" lead={org.definition} crumbs={[{ href: "/gioi-thieu", label: "Giới thiệu" }]} />

      <Section id="lien-minh" title="Các tổ chức trong Liên minh">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {founders.map((f) => (
            <li key={f.short} className="rounded-md border border-rule p-5">
              <div className="relative h-16 w-full">
                <Image src={f.logo} alt={`Logo ${f.short}`} fill sizes="200px" className="object-contain object-left" />
              </div>
              <p className="mt-4 font-bold text-navy">{f.short}</p>
              <p className="text-[0.95rem] text-slate">{f.name}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg">
          Đại diện Liên minh Invest Global: <strong className="text-navy">{org.representative}</strong>
        </p>
      </Section>

      <Section id="tam-nhin-su-menh" tone="shoal" title="Định vị, tầm nhìn và sứ mệnh">
        <dl className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule md:grid-cols-3">
          {[
            { t: "Định vị 2026–2035", d: org.positioning },
            { t: "Tầm nhìn", d: org.vision },
            { t: "Sứ mệnh", d: org.mission },
          ].map((x) => (
            <div key={x.t} className="bg-white p-6 md:p-8">
              <dt className="chart-note text-teal">{x.t}</dt>
              <dd className="mt-3 text-[1.2rem] font-semibold leading-snug text-navy">{x.d}</dd>
            </div>
          ))}
        </dl>
        <h3 className="mt-14 text-[1.5rem]">Giá trị cốt lõi</h3>
        <ul className="mt-5 flex flex-wrap gap-3">
          {org.coreValues.map((v) => (
            <li key={v} className="rounded-full border border-navy px-5 py-2 font-semibold text-navy">
              {v}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="mo-hinh-chien-luoc" title="Mô hình chiến lược 2026–2035" lead={strategy.lead}>
        <div className="space-y-px overflow-hidden rounded-md border border-rule bg-rule">
          <div className="grid gap-4 bg-white p-6 md:grid-cols-12 md:p-8">
            <p className="font-bold text-navy md:col-span-3">3 trục chiến lược</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[1.3rem] font-bold text-teal md:col-span-9">
              {strategy.axes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 bg-white p-6 md:grid-cols-12 md:p-8">
            <p className="font-bold text-navy md:col-span-3">6 nền tảng</p>
            <ul className="flex flex-wrap gap-2 md:col-span-9">
              {strategy.platforms.map((a) => (
                <li key={a} className="rounded bg-shoal px-3 py-1.5 font-medium">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 bg-white p-6 md:grid-cols-12 md:p-8">
            <p className="font-bold text-navy md:col-span-3">4 nhóm kết quả</p>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 md:col-span-9">
              {strategy.outcomes.map((a) => (
                <li key={a} className="text-[1.05rem]">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="hanh-trinh" tone="dark" title="Các cột mốc phát triển">
        <div className="grid gap-12 lg:grid-cols-12">
          <ol className="relative border-l border-white/20 lg:col-span-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative pb-8 pl-8 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    m.current ? "border-brass bg-brass" : "border-foam bg-abyss"
                  }`}
                  aria-hidden="true"
                />
                <p className={`chart-note text-[1.1rem] ${m.current ? "text-brass" : "text-foam"}`}>
                  {m.year}
                  {m.current && <span className="ml-2 text-fine">hiện tại</span>}
                </p>
                <p className="mt-1 text-[1.05rem] text-white">{m.text}</p>
              </li>
            ))}
          </ol>
          <figure className="self-start border-l-2 border-brass pl-6 lg:col-span-4">
            <blockquote className="text-[1.4rem] font-semibold leading-snug text-white">“{leaderQuote}”</blockquote>
            <figcaption className="mt-4 text-foam/80">
              <span className="block font-bold text-white">{org.leader.name}</span>
              {org.leader.title}
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="khac-biet" title="Chuyên sâu tạo sự khác biệt">
        <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <div key={d.title} className="border-t-2 border-navy pt-4">
              <dt className="text-[1.15rem] font-bold text-navy">{d.title}</dt>
              <dd className="mt-2 text-slate">{d.desc}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand />
    </>
  );
}
