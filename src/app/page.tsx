import Image from "next/image";
import type { ReactNode } from "react";
import { CertificateGallery } from "@/components/CertificateGallery";
import InquiryForm from "@/components/InquiryForm";
import { NetworkMap } from "@/components/NetworkMap";
import { GoalsStrip } from "@/components/pillars";
import StrategicPartners from "@/components/StrategicPartners";
import { ChapterOpener, Sheet, WordReveal, WordStage } from "@/components/story/blocks";
import { PillarDetail, SectorDetail } from "@/components/story/details";
import HScroll from "@/components/story/HScroll";
import { Waves } from "@/components/Waves";
import { Bullets, Num } from "@/components/ui";
import { chapters } from "@/content/chapters";
import {
  ambassadorVisits,
  certificates,
  differentiators,
  differentiatorsTitle,
  foundation,
  founders,
  indiaEvents,
  indiaEventsTitle,
  leaderQuote,
  members,
  milestones,
  milestonesTitle,
  modules,
  network,
  networkPage,
  org,
  partnerGroups,
  processLead,
  processSteps,
  processTitle,
  promotion,
  services,
  strategy,
} from "@/content/org";
import { blueEconomy, pillars } from "@/content/pillars";
import { sectors } from "@/content/sectors";

const ch = (id: string) => {
  const i = chapters.findIndex((c) => c.id === id);
  return { ...chapters[i], no: i + 1 };
};

function Title({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h3 className={`section-title text-[2rem] md:text-[2.75rem] ${dark ? "text-white" : ""}`}>
      <span className="section-title-inner">{children}</span>
    </h3>
  );
}

export default function HomePage() {
  const allLogos = Array.from(new Map(partnerGroups.flatMap((g) => g.partners).map((p) => [p.logo, p])).values());

  return (
    <>
      {/* ───────────── Slide 1 ───────────── */}
      <section id="top" data-hero data-parallax className="hero on-dark relative overflow-hidden bg-navy text-white">
        <Waves tall />
        <div aria-hidden="true" className="hero-art pointer-events-none absolute inset-y-0 right-0 hidden aspect-[771/847] lg:block">
          <Image src="/images/hero/cover-slide1.webp" alt="" fill priority sizes="50vw" className="object-cover object-right" />
        </div>
        <div className="wrap relative grid min-h-[100svh] items-center pb-32 pt-28 lg:grid-cols-12">
          <div className="hero-copy lg:col-span-7">
            <p className="text-[1.15rem] font-bold text-[#3ecf8e]">{org.initiative}</p>
            <h1 className="hero-title mt-4 text-[3.5rem] leading-none md:text-[5.5rem]" aria-label={org.shortName}>
              {org.shortName.split("").map((c, i) => (
                <span key={i} aria-hidden="true" className="hero-char" style={{ animationDelay: `${120 + i * 45}ms` }}>
                  {c === " " ? " " : c}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-[1.6rem] font-bold uppercase md:text-[2.1rem]">{org.subtitle}</p>
            <p className="mt-6 max-w-[40ch] text-[1.3rem] font-medium text-foam md:text-[1.5rem]">{org.taglineText}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#tru-cot" className="btn btn-primary btn-sheen text-[1.15rem]">
                9 trụ cột Kinh tế Biển Xanh
              </a>
              <a href="#lien-he" className="btn btn-ghost-dark text-[1.15rem]">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
        <a href="#gioi-thieu" className="scroll-cue" aria-label="Cuộn xuống: Giới thiệu">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path d="M5 8l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* ───────────── Phần 01 · Giới thiệu — slide 2–8 ───────────── */}
      {(() => {
        const c = ch("gioi-thieu");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} />
            <WordStage text={org.definition} />

            <div className="bg-white pb-16 md:pb-24">
              <div className="wrap">
                <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                  {founders.map((f) => (
                    <li key={f.short} className="flex flex-col items-center rounded-lg border-2 border-shoal p-5 text-center">
                      <div className="relative h-24 w-24">
                        <Image src={f.logo} alt={`Logo ${f.short}`} fill sizes="96px" className="object-contain" />
                      </div>
                      <span className="mt-4 text-[1.1rem] font-bold leading-snug text-navy">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="bg-shoal py-16 md:py-24">
              <div className="wrap">
                <Title>{foundation.title}</Title>
                <dl className="mt-8 grid gap-6 md:grid-cols-3">
                  {foundation.items.map((x) => (
                    <div key={x.title} data-reveal className="rounded-lg bg-white p-7">
                      <dt className="text-[1.6rem] font-bold uppercase text-kelp">{x.title}</dt>
                      <dd className="mt-3 text-[1.25rem] font-medium leading-snug text-navy">{x.text}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-14 text-[1.4rem] font-bold uppercase text-navy">{foundation.valuesTitle}</p>
                <ul className="values-row mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {foundation.values.map((v) => (
                    <li key={v} className="value-word">
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="bg-white py-16 md:py-24">
              <div className="wrap">
                <Title>{strategy.title}</Title>
                <p className="mt-3 max-w-[64ch] text-[1.3rem] font-medium text-slate">{strategy.lead}</p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {[
                    { t: strategy.axesTitle, list: strategy.axes },
                    { t: strategy.platformsTitle, list: strategy.platforms },
                    { t: strategy.outcomesTitle, list: strategy.outcomes },
                  ].map((g, i) => (
                    <div key={g.t} data-reveal className="relative overflow-hidden rounded-lg border-2 border-shoal p-7">
                      <span aria-hidden="true" className="num-3d absolute right-5 top-4 text-[4.5rem] font-bold leading-none">
                        {i + 1}
                      </span>
                      <h4 className="relative pr-16 text-[1.6rem] text-kelp">{g.t}</h4>
                      <ul className="relative mt-4 space-y-2 text-[1.2rem] font-bold uppercase text-navy">
                        {g.list.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide 6–7 */}
            <div className="on-dark relative overflow-hidden bg-abyss py-16 text-white md:py-24">
              <div className="wrap grid items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Title dark>{modules.title}</Title>
                  <p className="mt-4 text-[1.3rem] font-medium text-foam">{modules.lead}</p>
                  <p className="mt-6 inline-block rounded-full border border-white/40 px-5 py-2 text-[1.15rem] font-bold">{org.domain}</p>
                  <div className="mx-auto mt-10 w-full max-w-[24rem]">
                    <svg viewBox="-210 -210 420 420" role="img" aria-label={modules.systemTitle} className="module-ring h-auto w-full">
                      {modules.items.map((m, i) => {
                        const r = 150;
                        const a = (-90 + i * 60) * (Math.PI / 180);
                        const b = (-90 + ((i + 1) % 6) * 60) * (Math.PI / 180);
                        return <line key={m.name} x1={Math.cos(a) * r} y1={Math.sin(a) * r} x2={Math.cos(b) * r} y2={Math.sin(b) * r} stroke="#F0A030" strokeWidth="4" />;
                      })}
                      {modules.items.map((m, i) => {
                        const r = 150;
                        const a = (-90 + i * 60) * (Math.PI / 180);
                        return (
                          <g key={m.name} className="module-node">
                            {/* cả khối (vòng tròn + chữ + số) xoay ngược quanh tâm vòng tròn → chữ luôn đứng thẳng, không lệch nhau */}
                            <g className="module-face">
                              <circle cx={Math.cos(a) * r} cy={Math.sin(a) * r} r={40} fill="#D7261E" stroke="#F0A030" strokeWidth="4" />
                              <text x={Math.cos(a) * r} y={Math.sin(a) * r - 3} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">
                                MODULE
                              </text>
                              <text x={Math.cos(a) * r} y={Math.sin(a) * r + 15} textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">
                                {i + 1}
                              </text>
                            </g>
                          </g>
                        );
                      })}
                      <circle r="78" fill="#fff" />
                      <image href="/images/brand/logo.webp" x={-55} y={-45} width={110} height={90} />
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[1.3rem] font-bold uppercase text-[#3ecf8e]">{modules.systemTitle}</p>
                  <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                    {modules.items.map((m) => (
                      <li key={m.name} className="rounded-lg border border-white/15 bg-white/[0.04] p-5">
                        <p className="text-[0.95rem] font-bold uppercase text-foam">{m.module}</p>
                        <p className="text-[1.5rem] font-bold uppercase text-[#F0A030]">{m.name}</p>
                        <p className="mt-1 text-[1.12rem] text-white">{m.desc}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Slide 5 — cột mốc chạy ngang */}
            <div className="on-dark bg-navy pt-16 text-white md:pt-20">
              <HScroll head={<Title dark>{milestonesTitle}</Title>} className="pb-16 md:pb-20">
                <ol className="milestone-track">
                  {milestones.map((m) => (
                    <li key={m.year} className={`milestone ${m.current ? "is-current" : ""}`}>
                      <span className="milestone-dot" aria-hidden="true" />
                      <p className="milestone-year">{m.year}</p>
                      <p className="milestone-text">{m.text}</p>
                    </li>
                  ))}
                  <li className="milestone milestone-quote">
                    <blockquote>
                      <WordReveal text={`“${leaderQuote}”`} className="text-[1.6rem] font-bold leading-snug md:text-[1.9rem]" />
                    </blockquote>
                    <p className="mt-5 text-[1.15rem] text-foam">
                      <span className="block font-bold text-white">{org.leader.name}</span>
                      {org.leader.title}
                    </p>
                  </li>
                </ol>
              </HScroll>
            </div>

            {/* Slide 8 */}
            <div className="bg-white py-16 md:py-24">
              <div className="wrap">
                <Title>{differentiatorsTitle}</Title>
                <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {differentiators.map((d, i) => (
                    <li key={d.title} className="rounded-lg border-2 border-shoal p-6">
                      <Num n={i + 1} />
                      <h4 className="mt-4 text-[1.5rem]">{d.title}</h4>
                      <p className="mt-2 text-[1.15rem] text-slate">{d.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ───────────── Phần 02 · Lĩnh vực — slide 11–17 ───────────── */}
      {(() => {
        const c = ch("linh-vuc");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} lead={c.lead} tone="abyss" />
            <div className="on-dark bg-abyss pb-16 text-white md:pb-24">
              <div className="wrap">
                <p className="mb-5 text-[1rem] font-bold uppercase tracking-wide text-foam/80">Bấm vào từng lĩnh vực để xem chi tiết</p>
                <ul className="sector-panels">
                  {sectors.map((s) => (
                    <li key={s.slug} className="sector-panel">
                      <button type="button" data-open={s.slug} className="sector-panel-btn" aria-label={`Xem chi tiết lĩnh vực ${s.no}: ${s.title}`}>
                        <Image src={s.images[0]} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                        <span className="sector-panel-shade" aria-hidden="true" />
                        <span className="sector-panel-no">{String(s.no).padStart(2, "0")}</span>
                        <span className="sector-panel-body">
                          <span className="sector-panel-title">{s.overviewTitle}</span>
                          <span className="sector-panel-more">
                            {s.summary.map((x) => (
                              <span key={x} className="block">
                                {x}
                              </span>
                            ))}
                            <span className="mt-3 inline-flex items-center gap-2 font-bold text-brass">Xem chi tiết +</span>
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {sectors.map((s) => (
              <Sheet key={s.slug} id={s.slug} label={s.title}>
                <SectorDetail s={s} />
              </Sheet>
            ))}
          </section>
        );
      })()}

      {/* ───────────── Phần 03 · Dịch vụ — slide 9–10 ───────────── */}
      {(() => {
        const c = ch("dich-vu");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} />
            <div className="bg-white py-16 md:py-24">
              <div className="wrap">
                <ol className="grid gap-6 lg:grid-cols-3">
                  {services.map((s, i) => (
                    <li key={s.id} className="service-card rounded-lg bg-white p-7 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                      <div className="flex items-center gap-3">
                        <Num n={i + 1} />
                        <h3 className="text-[1.6rem]">{s.title}</h3>
                      </div>
                      <Bullets items={s.items} className="mt-5 text-[1.15rem]" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bg-shoal py-16 md:py-24">
              <div className="wrap">
                <Title>{processTitle}</Title>
                <p className="mt-3 max-w-[64ch] text-[1.3rem] font-medium text-slate">{processLead}</p>
                <div className="relative mt-12">
                  <div aria-hidden="true" className="absolute left-0 right-0 top-[1.375rem] hidden h-[3px] rounded bg-white lg:block">
                    <div data-draw className="h-full origin-left rounded bg-gradient-to-r from-kelp to-brass" />
                  </div>
                  <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
                    {processSteps.map((s, i) => (
                      <li key={s.title} className="process-step">
                        <Num n={i + 1} />
                        <h4 className="mt-5 text-[1.35rem] leading-snug">{s.title}</h4>
                        <p className="mt-2 text-[1.08rem] text-slate">{s.desc}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ───────────── Phần 04 · Mạng lưới — slide 18–19 ───────────── */}
      {(() => {
        const c = ch("mang-luoi");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} lead={c.lead} tone="abyss" />
            <div className="on-dark bg-abyss pb-16 text-white md:pb-24">
              <div className="wrap">
                <Title dark>{networkPage.globalTitle}</Title>
                <div className="mt-8">
                  <NetworkMap nodes={network} />
                </div>
              </div>
            </div>
            <div className="bg-white py-16 md:py-24">
              <div className="wrap">
                <Title>{networkPage.vnTitle}</Title>
                <ol className="mt-8 flex flex-wrap justify-center gap-5">
                  {members.map((m, i) => (
                    <li key={m.name} className="w-full rounded-lg bg-shoal p-5 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
                      <div className="flex items-start gap-3">
                        <Num n={i + 1} />
                        <h4 className="text-[1.25rem] normal-case">{m.name}</h4>
                      </div>
                      <p className="mt-3 text-[1.1rem] text-slate">{m.role}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bg-shoal py-16 md:py-24">
              <div className="wrap">
                <Title>{promotion.title}</Title>
                <p className="mt-3 max-w-[64ch] text-[1.3rem] font-medium text-slate">{promotion.lead}</p>
                <p className="mt-10 text-[1.4rem] font-bold uppercase text-navy">{promotion.activitiesTitle}</p>
                <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                  {promotion.activities.map((a) => (
                    <li key={a} className="flex min-h-[4.5rem] items-center justify-center rounded-lg bg-white px-4 py-3 text-center text-[1.15rem] font-bold leading-snug text-navy">
                      {a}
                    </li>
                  ))}
                </ul>
                <ol className="mt-10 grid gap-6 md:grid-cols-3">
                  {promotion.channels.map((x, i) => (
                    <li key={x.title} className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                      <div className="flex items-center gap-3">
                        <Num n={i + 1} />
                        <h4 className="text-[1.45rem]">{x.title}</h4>
                      </div>
                      <Bullets items={x.desc} className="mt-4 text-[1.12rem]" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ───────────── Phần 05 · Đối tác — slide 20–23 ───────────── */}
      {(() => {
        const c = ch("doi-tac");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} />
            <div aria-hidden="true" className="logo-marquee bg-white py-4">
              {[0, 1].map((row) => (
                <div key={row} className={`logo-marquee-row ${row ? "is-reverse" : ""}`}>
                  {[...allLogos, ...allLogos].map((p, i) => (
                    <span key={`${p.logo}-${i}`} className="logo-marquee-item">
                      <Image src={p.logo} alt="" fill sizes="120px" className="object-contain" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {partnerGroups.map((g, gi) => {
              const big = g.id === "bo-nganh";
              return (
                <div key={g.id} id={g.id} className={`scroll-mt-28 py-14 md:py-20 ${gi % 2 ? "bg-white" : "bg-shoal"}`}>
                  <div className="wrap">
                    <Title>{g.title}</Title>
                    {g.note && <p className="mt-4 max-w-[70ch] text-[1.25rem] font-medium text-slate">{g.note}</p>}
                    <ul className={`mt-8 flex flex-wrap justify-center ${big ? "mx-auto max-w-[62rem] gap-5" : "gap-3"}`}>
                      {g.partners.map((p) => (
                        <li
                          key={p.name}
                          className={`flex flex-col items-center justify-center rounded-md bg-white text-center shadow-[0_1px_4px_rgba(10,46,99,0.12)] ${
                            big
                              ? "w-[calc((100%-1.25rem)/2)] px-4 py-7 sm:w-[calc((100%-3.75rem)/4)]"
                              : "w-[calc((100%-0.75rem)/2)] px-3 py-5 sm:w-[calc((100%-2.25rem)/4)] lg:w-[calc((100%-3.75rem)/6)]"
                          }`}
                        >
                          <div className={`relative w-full ${big ? "h-20" : "h-14"}`}>
                            <Image src={p.logo} alt={`Logo ${p.name.replace("\n", " ")}`} fill sizes="140px" className="object-contain" />
                          </div>
                          <p
                            className={`mt-4 flex min-h-[2.5em] items-center justify-center whitespace-pre-line font-bold leading-tight text-navy ${
                              big ? "text-[1.15rem]" : "text-[0.95rem]"
                            }`}
                          >
                            {p.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                    {g.banner && <p className="on-dark mt-10 rounded-lg bg-navy px-6 py-5 text-center text-[1.35rem] font-bold text-white">{g.banner}</p>}
                  </div>
                </div>
              );
            })}
            <StrategicPartners />
          </section>
        );
      })()}

      {/* ───────────── Phần 06 · Sự kiện — slide 24–26 ───────────── */}
      {(() => {
        const c = ch("su-kien");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} tone="abyss" />
            <div className="on-dark bg-abyss text-white">
              <HScroll head={<Title dark>{indiaEventsTitle}</Title>} className="pb-16 md:pb-24">
                <ul className="event-track">
                  {indiaEvents.map((e) => {
                    const body = (
                      <>
                        <span className="relative block aspect-[16/9] overflow-hidden rounded-lg bg-white">
                          <Image src={e.image} alt={`Poster: ${e.title}`} fill sizes="(min-width:1024px) 28rem, 85vw" className="object-cover" />
                        </span>
                        <span className="mt-3 block text-[1.05rem] font-bold text-[#3ecf8e]">{e.dateLabel}</span>
                        <span className="event-title mt-1 block text-[1.25rem] font-bold leading-snug text-white">{e.title}</span>
                        {e.subtitle && <span className="event-sub mt-1 block text-[1rem] italic text-foam">{e.subtitle}</span>}
                        {e.venue && <span className="event-meta mt-2 block text-[1.05rem] text-foam">{e.venue}</span>}
                        {e.organizers && <span className="event-meta mt-1 block text-[1.05rem] text-foam">{e.organizers}</span>}
                        {e.detail && <span className="event-meta mt-2 block text-[1.05rem] text-foam">{e.detail}</span>}
                        {e.article && (
                          <span className="mt-3 block text-[1.05rem] font-bold text-brass">
                            Đọc bài báo trên {e.article.source} <span aria-hidden="true">↗</span>
                          </span>
                        )}
                      </>
                    );
                    return (
                      <li key={e.slug} className="event-card">
                        {e.article ? (
                          <a href={e.article.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${e.title} – đọc bài báo trên ${e.article.source} (mở tab mới)`}>
                            {body}
                          </a>
                        ) : (
                          <div>{body}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </HScroll>
            </div>
            {ambassadorVisits.map((v, i) => (
              <div key={v.id} className={`py-16 md:py-24 ${i === 0 ? "bg-white" : "bg-shoal"}`}>
                <div className="wrap">
                  <Title>{v.title}</Title>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {v.images.map((src, j) => (
                      <figure key={src} className="relative aspect-[3/2] overflow-hidden rounded-lg">
                        <div data-parallax-y="6" className="absolute -inset-y-[8%] inset-x-0">
                          <Image src={src} alt={`${v.title} – ảnh ${j + 1}`} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        );
      })()}

      {/* ───────────── Phần 07 · Bản quyền tác giả — slide 27–30 ───────────── */}
      {(() => {
        const c = ch("ban-quyen");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} lead={org.sloganVi} />
            <div className="bg-white py-16 md:py-24">
              <div className="wrap">
                <CertificateGallery items={certificates} />
              </div>
            </div>
          </section>
        );
      })()}

      {/* ───────────── Phần 08 · 9 trụ cột Kinh tế Biển Xanh — slide 31–42 ───────────── */}
      {(() => {
        const c = ch("tru-cot");
        return (
          <section id={c.id} data-chapter aria-label={c.nav}>
            <ChapterOpener no={c.no} title={c.title} lead={c.lead} tone="abyss" />
            <div className="on-dark bg-abyss pb-10 text-white">
              <div className="wrap">
                <p className="pillar-count" aria-label="9 trụ cột">
                  <span data-count="9">9</span>
                  <span className="text-[1.4rem] font-bold uppercase tracking-wide text-foam md:text-[1.8rem]">trụ cột chiến lược</span>
                </p>
              </div>
            </div>
            <div className="on-dark bg-abyss pb-24 text-white">
              <ol className="wrap pillar-stack">
                {pillars.map((p) => (
                  <li key={p.slug} data-stack-card className="pillar-stack-item" style={{ top: `calc(6.5rem + ${p.no - 1} * 0.9rem)` }}>
                    <article className="pillar-card">
                      <span className="pillar-card-dim" aria-hidden="true" />
                      <div className="pillar-card-media">
                        <Image src={p.images[0]} alt={p.title} fill loading="eager" sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
                        <span className="pillar-card-no" aria-hidden="true">
                          {String(p.no).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="pillar-card-body">
                        <p className="text-[1.05rem] font-bold uppercase tracking-[0.18em] text-kelp">Trụ cột {String(p.no).padStart(2, "0")}</p>
                        <h3 className="mt-2 text-[1.8rem] leading-tight text-navy md:text-[2.3rem]">{p.title}</h3>
                        <p className="mt-2 text-[1.2rem] font-medium italic text-slate">{p.tagline}</p>
                        <Bullets items={p.focus} className="mt-5 text-[1.12rem] text-ink" />
                        <button type="button" data-open={p.slug} className="btn btn-primary mt-7 rounded-full">
                          Xem chi tiết trụ cột {p.no}
                        </button>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
              <div className="wrap mt-6">
                <GoalsStrip />
              </div>
            </div>
            {pillars.map((p) => (
              <Sheet key={p.slug} id={p.slug} label={`Trụ cột ${p.no}: ${p.title}`}>
                <PillarDetail p={p} />
              </Sheet>
            ))}
          </section>
        );
      })()}

      {/* ───────────── Kết · Liên hệ — slide 43 ───────────── */}
      <section id="lien-he" data-chapter aria-label="Liên hệ" className="bg-white">
        <div className="on-dark relative overflow-hidden bg-navy text-white">
          <Waves />
          <div className="wrap relative pb-20 pt-24">
            <p className="text-[1.15rem] font-bold uppercase tracking-[0.2em] text-[#3ecf8e]">Kết</p>
            <h2 className="mt-3 text-[2.4rem] md:text-[3.5rem]">Liên hệ</h2>
            <p className="mt-4 max-w-[48ch] text-[1.3rem] font-medium text-foam">{org.taglineText}</p>
          </div>
        </div>
        <div className="wrap grid gap-14 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image src="/images/photos/tru-so.webp" alt="Trung tâm Hội nghị Quốc tế, 35 Hùng Vương" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-[1.2rem] font-bold uppercase text-navy">{org.subtitle}</p>
              <p className="text-[2.25rem] font-bold uppercase leading-none text-kelp">{org.shortName}</p>
            </div>
            <dl className="space-y-5 text-[1.15rem]">
              <div>
                <dt className="font-bold text-kelp">Email</dt>
                <dd>
                  <a href={`mailto:${org.contact.email}`} className="link">
                    {org.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-kelp">Hotline</dt>
                <dd className="text-[1.6rem] font-bold text-navy">
                  <a href={org.contact.hotlineHref} className="hover:underline">
                    {org.contact.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-kelp">Trụ sở chính</dt>
                <dd>{org.contact.headquarters}</dd>
              </div>
              <div>
                <dt className="font-bold text-kelp">Văn phòng</dt>
                <dd>{org.contact.office}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
