import type { Metadata } from "next";
import Image from "next/image";
import { Num, PageHeader, Section } from "@/components/ui";
import {
  differentiators,
  differentiatorsTitle,
  foundation,
  founders,
  leaderQuote,
  milestones,
  milestonesTitle,
  org,
  strategy,
} from "@/content/org";

export const metadata: Metadata = {
  title: "Giới thiệu Liên minh Invest Global",
  description: org.definition,
};

/** Slide 2, 3, 4, 5, 8 */
export default function AboutPage() {
  return (
    <>
      <PageHeader title="Giới thiệu Liên minh Invest Global" crumbs={[{ href: "/gioi-thieu", label: "Giới thiệu" }]} />

      <Section>
        <p className="max-w-[70ch] text-[1.35rem] font-medium leading-relaxed text-navy">{org.definition}</p>
        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {founders.map((f) => (
            <li key={f.short} className="flex flex-col items-center rounded-lg border-2 border-shoal p-5 text-center">
              <div className="relative h-24 w-24">
                <Image src={f.logo} alt={`Logo ${f.short}`} fill sizes="96px" className="object-contain" />
              </div>
              <span className="mt-4 text-[1.1rem] font-bold leading-snug text-navy">{f.name}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="shoal" title={foundation.title}>
        <dl className="grid gap-6 md:grid-cols-3">
          {foundation.items.map((x) => (
            <div key={x.title} className="rounded-lg bg-white p-6">
              <dt className="text-[1.6rem] font-bold uppercase text-kelp">{x.title}</dt>
              <dd className="mt-3 text-[1.25rem] font-medium leading-snug text-navy">{x.text}</dd>
            </div>
          ))}
        </dl>
        <h3 className="mt-14 text-[1.75rem]">{foundation.valuesTitle}</h3>
        <ul className="mt-5 flex flex-wrap gap-4">
          {foundation.values.map((v) => (
            <li key={v} className="rounded-lg bg-white px-8 py-4 text-[1.3rem] font-bold text-navy">
              {v}
            </li>
          ))}
        </ul>
      </Section>

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

      <Section tone="dark" title={milestonesTitle}>
        <div className="grid gap-10 lg:grid-cols-12">
          <ol className="relative border-l-2 border-white/25 lg:col-span-8">
            {milestones.map((m) => (
              <li key={m.year} className="group relative cursor-default pb-5 pl-8 last:pb-0 md:grid md:grid-cols-[8.75rem_1fr] md:items-baseline md:gap-4">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[10px] top-2 h-[18px] w-[18px] rounded-full border-[3px] transition-colors duration-200 ${
                    m.current ? "border-brass bg-brass" : "border-foam bg-abyss group-hover:border-brass group-hover:bg-brass"
                  }`}
                />
                <p
                  className={`whitespace-nowrap text-[1.6rem] font-bold leading-tight transition-colors duration-200 md:text-[1.75rem] ${
                    m.current ? "text-brass" : "text-foam group-hover:text-brass"
                  }`}
                >
                  {m.year}
                </p>
                <p
                  className={`text-[1.25rem] leading-snug transition-colors duration-200 md:text-[1.35rem] ${
                    m.current ? "text-brass" : "text-white group-hover:text-brass"
                  }`}
                >
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
          <figure className="self-start border-l-4 border-brass pl-8 lg:col-span-4">
            <blockquote className="text-[1.5rem] font-bold leading-snug text-white">“{leaderQuote}”</blockquote>
            <figcaption className="mt-6 text-[1.25rem] text-foam">
              <span className="block font-bold text-white">{org.leader.name}</span>
              {org.leader.title}
            </figcaption>
          </figure>
        </div>
      </Section>

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
    </>
  );
}
