import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, IllustrationImage, PageHeader, Section } from "@/components/ui";
import { blueEconomy, pillars } from "@/content/pillars";

export const metadata: Metadata = {
  title: "Kinh tế Biển Xanh: 9 trụ cột chiến lược",
  description: blueEconomy.subtitle,
};

export default function BlueEconomyPage() {
  return (
    <>
      <PageHeader title={blueEconomy.title} lead={blueEconomy.subtitle} crumbs={[{ href: "/kinh-te-bien-xanh", label: "Kinh tế Biển Xanh" }]}>
        <ul className="mt-10 flex flex-wrap gap-2">
          {blueEconomy.goals.map((g) => (
            <li key={g} className="rounded-full border border-white/25 px-4 py-1.5 text-[0.95rem] text-foam">
              {g}
            </li>
          ))}
        </ul>
      </PageHeader>

      <Section title="Chín trụ cột">
        <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.slug}>
              <Link href={`/kinh-te-bien-xanh/${p.slug}`} className="group block">
                <div className="relative">
                  <IllustrationImage src={p.image} alt={p.title} className="aspect-[16/10] rounded-md" sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" />
                  <span className="chart-note absolute left-3 top-2 text-[2.25rem] leading-none text-white drop-shadow">{p.no}</span>
                </div>
                <h3 className="mt-4 text-[1.2rem] group-hover:text-teal group-hover:underline">{p.title}</h3>
                <p className="mt-1 text-slate">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="shoal" title="Định hướng trọng tâm của từng trụ cột">
        <div className="divide-y divide-rule border-y border-rule">
          {pillars.map((p) => (
            <div key={p.slug} className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
              <p className="md:col-span-4">
                <span className="chart-note mr-3 text-teal">Trụ cột {p.no}</span>
                <Link href={`/kinh-te-bien-xanh/${p.slug}`} className="font-bold text-navy hover:text-teal hover:underline">
                  {p.title}
                </Link>
              </p>
              <ul className="space-y-1.5 md:col-span-8">
                {p.focus.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Đề xuất dự án Kinh tế Biển Xanh" text="Bạn có dự án hoặc nhu cầu hợp tác thuộc một trong 9 trụ cột? Gửi thông tin để Invest Global sàng lọc, chuẩn hóa hồ sơ và kết nối nguồn lực phù hợp." />
    </>
  );
}
