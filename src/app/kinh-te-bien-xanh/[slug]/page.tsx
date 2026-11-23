import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Bullets, Num, PageHeader } from "@/components/ui";
import { imageAspect } from "@/content/imageAspect";
import { blueEconomy, pillars } from "@/content/pillars";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = pillars.find((x) => x.slug === slug);
  return p ? { title: `Trụ cột ${p.no}: ${p.title}`, description: p.tagline } : {};
}

/** Slide 34–42 */
export default async function PillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pillars.find((x) => x.slug === slug);
  if (!p) notFound();
  const idx = pillars.indexOf(p);
  const prev = pillars[idx - 1];
  const next = pillars[idx + 1];
  const aside = p.sidePanel || p.highlight;

  return (
    <>
      <PageHeader
        tag={`Trụ cột ${p.no}`}
        title={p.title}
        lead={p.tagline}
        crumbs={[
          { href: "/kinh-te-bien-xanh", label: blueEconomy.title },
          { href: `/kinh-te-bien-xanh/${p.slug}`, label: `Trụ cột ${p.no}` },
        ]}
      />

      {(p.values || p.chips) && (
        <section className="border-b border-rule bg-shoal">
          <div className="wrap py-8">
            {p.chips && (
              <div className="flex flex-wrap items-center gap-3">
                <p className="mr-3 text-[1.35rem] font-bold uppercase text-kelp">{p.chips.title}</p>
                {p.chips.items.map((c) => (
                  <span key={c} className="rounded-full bg-navy px-6 py-2 text-[1.15rem] font-bold text-white">
                    {c}
                  </span>
                ))}
              </div>
            )}
            {p.values && (
              <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {p.values.map((v, i) => (
                  <div key={v.title} className="flex items-start gap-3 rounded-lg bg-white p-4">
                    <Num n={i + 1} />
                    <div>
                      <dt className="text-[1.3rem] font-bold uppercase text-kelp">{v.title}</dt>
                      <dd className="text-[1.1rem] text-slate">{v.desc}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>
      )}

      <section className="bg-white py-14 md:py-20">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="rounded-lg bg-shoal p-6 lg:col-span-5">
              <h2 className="text-[1.4rem] text-kelp md:text-[1.5rem]">Định hướng trọng tâm</h2>
              <Bullets items={p.focus} className="mt-4 text-[1.15rem]" />
            </div>
            <div className="lg:col-span-7">
              <div
                className="flex gap-3"
                style={{ maxWidth: `calc(15rem * ${p.images.reduce((a, src) => a + (imageAspect[src] ?? 4 / 3), 0).toFixed(3)} + ${(p.images.length - 1) * 0.75}rem)` }}
              >
                {p.images.map((src, i) => {
                  const ar = imageAspect[src] ?? 4 / 3;
                  return (
                    <div
                      key={src}
                      className="relative overflow-hidden rounded-lg bg-shoal"
                      style={{ flex: `${ar} 1 0`, aspectRatio: ar }}
                    >
                      <Image
                        src={src}
                        alt={`${p.title} – ảnh ${i + 1}`}
                        fill
                        sizes="(min-width:1024px) 30vw, 50vw"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`mt-12 grid gap-10 ${aside ? "lg:grid-cols-12" : ""}`}>
            <ol className={`grid gap-6 md:grid-cols-2 ${aside ? "lg:col-span-8" : p.items.length === 3 ? "lg:grid-cols-3" : p.items.length === 5 ? "lg:grid-cols-3" : ""}`}>
              {p.items.map((it, i) => (
                <li key={it.title} className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                  <div className="flex items-center gap-3">
                    <Num n={i + 1} />
                    <h2 className="text-[1.45rem] md:text-[1.6rem]">{it.title}</h2>
                  </div>
                  <Bullets items={it.body} className="mt-4 text-[1.15rem]" />
                </li>
              ))}
            </ol>

            {aside && (
              <aside className="space-y-6 lg:col-span-4">
                {p.highlight && (
                  <p className="rounded-lg bg-shoal p-6 text-[1.25rem] font-medium leading-snug text-navy">
                    {p.highlight.split("100% năng lượng tái tạo")[0]}
                    {p.highlight.includes("100% năng lượng tái tạo") && (
                      <>
                        <strong className="text-kelp">100% năng lượng tái tạo</strong>
                        {p.highlight.split("100% năng lượng tái tạo")[1]}
                      </>
                    )}
                  </p>
                )}
                {p.sidePanel && (
                  <div className="on-dark rounded-lg bg-navy p-6 text-white">
                    <h2 className="text-[1.5rem]">{p.sidePanel.title}</h2>
                    <ol className="mt-5 space-y-5">
                      {p.sidePanel.items.map((s, i) => (
                        <li key={s.title} className="flex items-start gap-3">
                          <Num n={i + 1} />
                          <div>
                            <p className="text-[1.2rem] font-bold">{s.title}</p>
                            {s.desc && <p className="text-[1.05rem] text-foam">{s.desc}</p>}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </aside>
            )}
          </div>

          {p.chain && (
            <div className="mt-14">
              <h2 className="text-[1.6rem] text-kelp md:text-[2rem]">{p.chain.title}</h2>
              <ol className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {p.chain.steps.map((s) => (
                  <li key={s} className="bg-kelp px-4 py-4 text-[1.15rem] font-bold text-white [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)]">
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      {p.benefits.length > 0 && (
        <section className="on-dark bg-navy text-white">
          <div className="wrap grid gap-6 py-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
            <h2 className="text-[1.75rem]">{p.benefitsTitle}</h2>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.benefits.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-kelp" aria-hidden="true" />
                  <span>
                    <span className="block text-[1.2rem] font-bold">{b.title}</span>
                    {b.desc && <span className="block text-[1.05rem] text-foam">{b.desc}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav aria-label="Trụ cột khác" className="border-t border-rule bg-white">
        <div className="wrap flex flex-wrap justify-between gap-4 py-8 text-[1.15rem]">
          {prev ? (
            <Link href={`/kinh-te-bien-xanh/${prev.slug}`} className="link">
              ← Trụ cột {prev.no}: {prev.shortTitle}
            </Link>
          ) : (
            <Link href="/kinh-te-bien-xanh" className="link">
              ← {blueEconomy.title}
            </Link>
          )}
          {next ? (
            <Link href={`/kinh-te-bien-xanh/${next.slug}`} className="link">
              Trụ cột {next.no}: {next.shortTitle} →
            </Link>
          ) : (
            <Link href="/kinh-te-bien-xanh" className="link">
              {blueEconomy.title} →
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
