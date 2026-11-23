import Image from "next/image";
import Link from "next/link";
import SeaChart from "@/components/SeaChart";
import { CtaBand, IllustrationImage, Section, StepNo } from "@/components/ui";
import { differentiators, events, founders, org, processSteps, strategicPartners, strategy } from "@/content/org";
import { blueEconomy, pillars } from "@/content/pillars";
import { sectors } from "@/content/sectors";

export default function HomePage() {
  const latestEvents = [...events].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      {/* HERO: hải đồ */}
      <section className="on-dark relative overflow-hidden bg-abyss text-foam">
        <div className="wrap pb-12 pt-12 md:pt-16 lg:pb-16">
          <p className="chart-note text-[0.95rem] text-brass">{org.initiative}</p>
          <h1 className="mt-4 text-[1.95rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.5rem]">
            {org.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-4 lg:pb-10">
              <p className="max-w-[44ch] text-lg leading-relaxed text-foam/90">
                Liên minh các tổ chức, hiệp hội, doanh nghiệp và chuyên gia trong nước và quốc tế, kết nối và thu xếp
                nguồn vốn FDI thế hệ mới vào Việt Nam.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Link href="/lien-he" className="btn btn-primary">
                  Gửi nhu cầu đầu tư
                </Link>
                <Link href="/kinh-te-bien-xanh" className="btn btn-ghost-dark">
                  Xem 9 trụ cột Kinh tế Biển Xanh
                </Link>
              </div>
            </div>
            <figure className="lg:col-span-8">
              <SeaChart className="h-auto w-full" />
              <figcaption className="chart-note mt-2 text-fine text-foam/55">
                Mạng lưới đối tác của Liên minh tại 7 quốc gia, cùng các chuyên gia, quỹ đầu tư và hiệp hội quốc tế.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Liên minh */}
      <section className="border-b border-rule bg-white">
        <div className="wrap grid gap-8 py-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <h2 className="text-[1.5rem]">Các tổ chức trong Liên minh</h2>
            <p className="mt-2 text-slate">
              Đại diện Liên minh: <span className="font-semibold text-ink">{org.representative}</span>
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:col-span-8 lg:grid-cols-5">
            {founders.map((f) => (
              <li key={f.short} className="flex flex-col items-start gap-2">
                <div className="relative h-14 w-24">
                  <Image src={f.logo} alt={`Logo ${f.short}`} fill sizes="96px" className="object-contain object-left" />
                </div>
                <span className="text-[0.85rem] leading-snug text-slate">{f.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mô hình chiến lược */}
      <Section title="Mô hình chiến lược 2026–2035" lead={strategy.lead}>
        <div className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule md:grid-cols-3">
          <div className="bg-white p-6 md:p-8">
            <p className="chart-note text-teal">3 trục chiến lược</p>
            <ul className="mt-4 space-y-2 text-[1.35rem] font-bold text-navy">
              {strategy.axes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 md:p-8">
            <p className="chart-note text-teal">6 nền tảng</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[1.05rem] font-medium">
              {strategy.platforms.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 md:p-8">
            <p className="chart-note text-teal">4 nhóm kết quả</p>
            <ul className="mt-4 space-y-2 text-[1.05rem]">
              {strategy.outcomes.map((a) => (
                <li key={a} className="border-b border-rule pb-2 last:border-0">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Lĩnh vực */}
      <Section tone="shoal" title="Sáu lĩnh vực hoạt động trọng tâm" lead="Kết nối cơ hội đầu tư với công nghệ, nguồn vốn, thị trường và triển khai thực tế tại Việt Nam.">
        <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <li key={s.slug}>
              <Link href={`/linh-vuc/${s.slug}`} className="group block">
                <IllustrationImage src={s.image} alt={s.title} className="aspect-[16/9] rounded-md" sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw" />
                <h3 className="mt-4 text-[1.25rem] group-hover:text-teal group-hover:underline">{s.title}</h3>
                <p className="mt-2 text-slate">{s.summary.join(", ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Kinh tế Biển Xanh */}
      <Section tone="dark" title={blueEconomy.title} lead={blueEconomy.subtitle}>
        <ol className="grid border-t border-white/15 md:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.slug} className="border-b border-white/15 md:[&:not(:nth-child(3n))]:border-r">
              <Link href={`/kinh-te-bien-xanh/${p.slug}`} className="group flex h-full gap-4 p-5 hover:bg-white/5 md:p-6">
                <span className="chart-note text-[1.75rem] leading-none text-brass">{p.no}</span>
                <span>
                  <span className="block font-bold text-white group-hover:underline">{p.shortTitle}</span>
                  <span className="mt-1 block text-[0.95rem] text-foam/75">{p.excerpt}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link href="/kinh-te-bien-xanh" className="link">
            Xem định hướng trọng tâm của 9 trụ cột
          </Link>
        </div>
      </Section>

      {/* Vì sao */}
      <Section title="Chuyên sâu tạo sự khác biệt">
        <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <div key={d.title} className="border-t-2 border-navy pt-4">
              <dt className="text-[1.15rem] font-bold text-navy">{d.title}</dt>
              <dd className="mt-2 text-slate">{d.desc}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Quy trình */}
      <Section tone="shoal" title="Quy trình 6 bước theo vòng đời dự án" lead="Từ tiếp nhận nhu cầu đến hỗ trợ triển khai.">
        <ol className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="bg-white p-6">
              <StepNo n={i + 1} className="text-[1.5rem] text-teal" />
              <h3 className="mt-2 text-[1.15rem]">{s.title}</h3>
              <p className="mt-2 text-slate">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link href="/dich-vu" className="link">
            Xem chuỗi dịch vụ chi tiết
          </Link>
        </div>
      </Section>

      {/* Đối tác chiến lược */}
      <Section title="Đại diện tại Việt Nam của các tập đoàn Ấn Độ">
        <div className="grid gap-10 md:grid-cols-2">
          {strategicPartners.map((p) => (
            <figure key={p.id}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-shoal">
                <Image src={p.image} alt={p.caption} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-4">
                <p className="text-[1.25rem] font-bold text-navy">
                  {p.name}, <span className="font-medium text-slate">{p.field}</span>
                </p>
                <p className="mt-1 text-slate">{p.text}</p>
                <p className="mt-2 text-fine text-slate">
                  {p.caption} {p.credit}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Sự kiện */}
      <Section tone="shoal" title="Hoạt động gần đây">
        <ul className="divide-y divide-rule border-y border-rule">
          {latestEvents.map((e) => (
            <li key={e.slug} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
              <p className="chart-note text-teal md:col-span-2">{e.dateLabel}</p>
              <div className="md:col-span-10">
                <p className="font-bold text-navy">{e.title}</p>
                <p className="text-slate">{e.venue}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/tin-tuc" className="link">
            Xem tất cả sự kiện
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
