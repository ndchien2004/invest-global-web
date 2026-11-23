import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, IllustrationImage, PageHeader, Section } from "@/components/ui";
import { pillars } from "@/content/pillars";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = pillars.find((x) => x.slug === slug);
  return p ? { title: `Trụ cột ${p.no}: ${p.title}`, description: p.tagline } : {};
}

export default async function PillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pillars.find((x) => x.slug === slug);
  if (!p) notFound();
  const idx = pillars.indexOf(p);
  const prev = pillars[idx - 1];
  const next = pillars[idx + 1];

  return (
    <>
      <PageHeader
        title={p.title}
        lead={p.tagline}
        crumbs={[
          { href: "/kinh-te-bien-xanh", label: "Kinh tế Biển Xanh" },
          { href: `/kinh-te-bien-xanh/${p.slug}`, label: `Trụ cột ${p.no}` },
        ]}
      >
        {p.chips && (
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Nền tảng công nghệ">
            {p.chips.map((c) => (
              <li key={c} className="chart-note rounded border border-brass/60 px-3 py-1 text-brass">
                {c}
              </li>
            ))}
          </ul>
        )}
      </PageHeader>

      {p.values && (
        <section className="border-b border-rule bg-shoal">
          <dl className="wrap grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.map((v) => (
              <div key={v.title}>
                <dt className="text-[1.15rem] font-bold text-kelp">{v.title}</dt>
                <dd className="text-slate">{v.desc}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ol className="divide-y divide-rule border-y border-rule">
              {p.items.map((it, i) => (
                <li key={it.title} className="py-6">
                  <h2 className="flex items-baseline gap-3 text-[1.3rem]">
                    <span className="chart-note text-teal">{String(i + 1).padStart(2, "0")}</span>
                    {it.title}
                  </h2>
                  <ul className="mt-3 space-y-2 pl-9">
                    {it.body.map((b) => (
                      <li key={b} className="text-slate">
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <IllustrationImage src={p.image} alt={p.title} className="aspect-[4/3] rounded-md" priority />
            {p.vision && (
              <div className="rounded-md bg-shoal p-6">
                <h2 className="text-[1.1rem]">Tầm nhìn</h2>
                <p className="mt-2 text-[1.05rem]">{p.vision}</p>
              </div>
            )}
            {p.sidePanel && (
              <div className="on-dark rounded-md bg-navy p-6 text-foam">
                <h2 className="text-[1.15rem]">{p.sidePanel.title}</h2>
                <ul className="mt-4 space-y-4">
                  {p.sidePanel.items.map((s) => (
                    <li key={s.title}>
                      <p className="font-bold text-white">{s.title}</p>
                      {s.desc && <p className="text-[0.95rem] text-foam/80">{s.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {p.chain && (
          <div className="mt-16">
            <h2 className="text-[1.5rem]">{p.chain.title}</h2>
            <ol className="mt-6 grid gap-px overflow-hidden rounded-md bg-rule sm:grid-cols-3 lg:grid-cols-6">
              {p.chain.steps.map((s, i) => (
                <li key={s} className="bg-kelp p-4 text-white">
                  <span className="chart-note text-fine text-white/70">{i + 1}</span>
                  <p className="mt-1 font-semibold leading-snug">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </Section>

      {p.benefits.length > 0 && (
        <Section tone="dark" title={p.benefitsTitle}>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {p.benefits.map((b) => (
              <li key={b.title} className="border-t border-brass/60 pt-3">
                <p className="font-bold text-white">{b.title}</p>
                {b.desc && <p className="mt-1 text-[0.95rem] text-foam/80">{b.desc}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <nav aria-label="Trụ cột khác" className="border-t border-rule bg-white">
        <div className="wrap flex flex-wrap justify-between gap-4 py-8">
          {prev ? (
            <Link href={`/kinh-te-bien-xanh/${prev.slug}`} className="link">
              Trụ cột {prev.no}: {prev.shortTitle}
            </Link>
          ) : (
            <Link href="/kinh-te-bien-xanh" className="link">
              Về tổng quan 9 trụ cột
            </Link>
          )}
          {next ? (
            <Link href={`/kinh-te-bien-xanh/${next.slug}`} className="link">
              Trụ cột {next.no}: {next.shortTitle}
            </Link>
          ) : (
            <Link href="/kinh-te-bien-xanh" className="link">
              Về tổng quan 9 trụ cột
            </Link>
          )}
        </div>
      </nav>

      <CtaBand title="Đề xuất dự án Kinh tế Biển Xanh" text="Gửi thông tin dự án hoặc nhu cầu hợp tác để Invest Global sàng lọc, chuẩn hóa hồ sơ và kết nối nguồn lực phù hợp." />
    </>
  );
}
