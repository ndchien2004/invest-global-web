import Image from "next/image";
import Link from "next/link";
import { GoalsStrip, PillarFocus, PillarGrid } from "@/components/pillars";
import StrategicPartners from "@/components/StrategicPartners";
import { Bullets, Num, Photo, Section } from "@/components/ui";
import { differentiators, differentiatorsTitle, founders, org, strategy } from "@/content/org";
import { blueEconomy } from "@/content/pillars";
import { sectors, sectorsLead, sectorsTitle } from "@/content/sectors";

export default function HomePage() {
  return (
    <>
      {/* Slide 1 */}
      <section className="on-dark relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden aspect-[771/847] lg:block"
        >
          <Image src="/images/hero/cover-slide1.webp" alt="" fill priority sizes="50vw" className="object-cover object-right" />
        </div>
        <div className="wrap relative grid items-center py-14 md:py-20 lg:min-h-[38rem] lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[1.15rem] font-bold text-[#3ecf8e]">{org.initiative}</p>
            <h1 className="mt-4 text-[3.5rem] leading-none md:text-[5.5rem]">{org.shortName}</h1>
            <p className="mt-4 text-[1.6rem] font-bold uppercase md:text-[2.1rem]">{org.subtitle}</p>
            <p className="mt-6 max-w-[40ch] text-[1.3rem] font-medium text-foam md:text-[1.5rem]">{org.taglineText}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/kinh-te-bien-xanh" className="btn btn-primary text-[1.15rem]">
                9 trụ cột Kinh tế Biển Xanh
              </Link>
              <Link href="/lien-he" className="btn btn-ghost-dark text-[1.15rem]">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 31 */}
      <Section tone="shoal" title={blueEconomy.title} lead={blueEconomy.subtitle}>
        <PillarGrid />
      </Section>

      {/* Slide 32–33 */}
      <Section>
        <PillarFocus />
        <div className="mt-12">
          <GoalsStrip />
        </div>
      </Section>

      {/* Slide 2 */}
      <Section tone="shoal" title="Giới thiệu Liên minh Invest Global">
        <p className="max-w-[70ch] text-[1.3rem] font-medium leading-relaxed text-navy">{org.definition}</p>
        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {founders.map((f) => (
            <li key={f.short} className="flex flex-col items-center rounded-lg bg-white p-5 text-center">
              <div className="relative h-24 w-24">
                <Image src={f.logo} alt={`Logo ${f.short}`} fill sizes="96px" className="object-contain" />
              </div>
              <span className="mt-4 text-[1.1rem] font-bold leading-snug text-navy">{f.name}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Slide 4 */}
      <Section title={strategy.title} lead={strategy.lead}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: strategy.axesTitle, list: strategy.axes },
            { t: strategy.platformsTitle, list: strategy.platforms },
            { t: strategy.outcomesTitle, list: strategy.outcomes },
          ].map((g) => (
            <div key={g.t} className="rounded-lg border-2 border-shoal p-6">
              <h3 className="text-[1.6rem] text-kelp">{g.t}</h3>
              <ul className="mt-4 space-y-2 text-[1.2rem] font-bold uppercase text-navy">
                {g.list.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Slide 11 */}
      <Section tone="shoal" title={sectorsTitle} lead={sectorsLead}>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <li key={s.slug} className="overflow-hidden rounded-lg bg-white">
              <Link href={`/linh-vuc/${s.slug}`} className="group block">
                <Photo src={s.images[0]} alt={s.overviewTitle} className="aspect-[2/1]" sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw" />
                <div className="p-5">
                  <h3 className="text-[1.35rem] group-hover:text-teal group-hover:underline">
                    {String(s.no).padStart(2, "0")}. {s.overviewTitle}
                  </h3>
                  <Bullets items={s.summary} className="mt-3 text-[1.1rem] text-slate" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Slide 8 */}
      <Section title={differentiatorsTitle}>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <li key={d.title} className="rounded-lg border-2 border-shoal p-6">
              <Num n={i + 1} />
              <h3 className="mt-4 text-[1.5rem]">{d.title}</h3>
              <p className="mt-2 text-[1.15rem] text-slate">{d.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Slide 23 */}
      <StrategicPartners />
    </>
  );
}
