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

/** Ảnh xếp theo hàng: 1 → 1 ảnh full; 2 → xếp chồng; số lẻ → ảnh đầu full, còn lại 2 ảnh/hàng */
function galleryRows(images: string[]): string[][] {
  if (images.length <= 2) return images.map((x) => [x]);
  const rows: string[][] = [];
  let rest = images;
  if (images.length % 2 === 1) {
    rows.push([images[0]]);
    rest = images.slice(1);
  }
  for (let i = 0; i < rest.length; i += 2) rows.push(rest.slice(i, i + 2));
  return rows;
}

/** Slide 34–42 */
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

      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Cột trái: ảnh + định hướng trọng tâm (như slide 34) */}
            <div className="space-y-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {galleryRows(p.images).map((row, r) =>
                  row.map((src, i) => {
                    const ar = row.reduce((a, x) => a + (imageAspect[x] ?? 4 / 3), 0) / row.length;
                    return (
                      <div
                        key={src}
                        data-reveal
                        className={`relative overflow-hidden rounded-lg bg-shoal ${row.length === 1 ? "col-span-2" : ""}`}
                        style={{ aspectRatio: row.length === 1 ? Math.max(imageAspect[src] ?? 4 / 3, 1.5) : ar }}
                      >
                        <Image
                          src={src}
                          alt={`${p.title} – ảnh ${r * 2 + i + 1}`}
                          fill
                          sizes={row.length === 1 ? "(min-width:1024px) 40vw, 100vw" : "(min-width:1024px) 20vw, 50vw"}
                          className="object-cover"
                          priority={r === 0}
                        />
                      </div>
                    );
                  }),
                )}
              </div>
              <div className="rounded-lg bg-shoal p-6">
                <h2 className="text-[1.4rem] text-kelp md:text-[1.5rem]">Định hướng trọng tâm</h2>
                <Bullets items={p.focus} className="mt-4 text-[1.15rem]" />
              </div>
            </div>

            {/* Cột phải: nội dung chi tiết */}
            <div className="space-y-6 lg:col-span-7">
              <ol className="grid gap-5 md:grid-cols-2">
                {p.items.map((it, i) => (
                  <li
                    key={it.title}
                    className={`rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)] ${
                      p.items.length % 2 === 1 && i === p.items.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Num n={i + 1} />
                      <h2 className="text-[1.35rem] md:text-[1.45rem]">{it.title}</h2>
                    </div>
                    <Bullets items={it.body} className="mt-4 text-[1.1rem]" />
                  </li>
                ))}
              </ol>

              {p.highlight && (
                <p className="rounded-lg border-l-4 border-kelp bg-shoal p-6 text-[1.25rem] font-medium leading-snug text-navy">
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
                  <h2 className="text-[1.45rem]">{p.sidePanel.title}</h2>
                  <ol className="mt-5 grid gap-5 sm:grid-cols-2">
                    {p.sidePanel.items.map((x, i) => (
                      <li key={x.title} className="flex items-start gap-3">
                        <Num n={i + 1} />
                        <div>
                          <p className="text-[1.15rem] font-bold">{x.title}</p>
                          {x.desc && <p className="text-[1.05rem] text-foam">{x.desc}</p>}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
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
