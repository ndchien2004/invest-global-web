import Image from "next/image";
import { Bullets, Num, Photo } from "@/components/ui";
import { imageAspect } from "@/content/imageAspect";
import type { Pillar, Sector } from "@/content/types";
import { roleTitle } from "@/content/sectors";

/** Ảnh xếp theo hàng: 1–2 ảnh → mỗi ảnh một hàng; số lẻ → ảnh đầu full, còn lại 2 ảnh/hàng */
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

function SheetHead({ tag, title, lead }: { tag: string; title: string; lead?: string }) {
  return (
    <div className="on-dark bg-navy px-6 pb-8 pt-10 text-white md:px-10">
      <p className="inline-block rounded-sm bg-kelp px-3 py-1 text-[1.1rem] font-bold uppercase">{tag}</p>
      <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.6rem]">{title}</h2>
      {lead && <p className="mt-3 text-[1.2rem] font-medium text-foam md:text-[1.35rem]">{lead}</p>}
    </div>
  );
}

/** Slide 34–42 — nội dung đầy đủ một trụ cột */
export function PillarDetail({ p }: { p: Pillar }) {
  return (
    <>
      <SheetHead tag={`Trụ cột ${p.no}`} title={p.title} lead={p.tagline} />

      {(p.values || p.chips) && (
        <div className="border-b border-rule bg-shoal px-6 py-6 md:px-10">
          {p.chips && (
            <div className="flex flex-wrap items-center gap-3">
              <p className="mr-3 text-[1.25rem] font-bold uppercase text-kelp">{p.chips.title}</p>
              {p.chips.items.map((c) => (
                <span key={c} className="rounded-full bg-navy px-5 py-1.5 text-[1.1rem] font-bold text-white">
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
                    <dt className="text-[1.2rem] font-bold uppercase text-kelp">{v.title}</dt>
                    <dd className="text-[1.05rem] text-slate">{v.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}

      <div className="grid gap-8 px-6 py-8 md:px-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            {galleryRows(p.images).map((row, r) =>
              row.map((src, i) => {
                const ar = row.reduce((a, x) => a + (imageAspect[x] ?? 4 / 3), 0) / row.length;
                return (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-lg bg-shoal ${row.length === 1 ? "col-span-2" : ""}`}
                    style={{ aspectRatio: row.length === 1 ? Math.max(imageAspect[src] ?? 4 / 3, 1.5) : ar }}
                  >
                    <Image
                      src={src}
                      alt={`${p.title} – ảnh ${r * 2 + i + 1}`}
                      fill
                      sizes={row.length === 1 ? "(min-width:1024px) 36vw, 100vw" : "(min-width:1024px) 18vw, 50vw"}
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              }),
            )}
          </div>
          <div className="rounded-lg bg-shoal p-6">
            <h3 className="text-[1.35rem] text-kelp">Định hướng trọng tâm</h3>
            <Bullets items={p.focus} className="mt-4 text-[1.1rem]" />
          </div>
        </div>

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
                  <h3 className="text-[1.3rem] md:text-[1.4rem]">{it.title}</h3>
                </div>
                <Bullets items={it.body} className="mt-4 text-[1.08rem]" />
              </li>
            ))}
          </ol>

          {p.highlight && (
            <p className="rounded-lg border-l-4 border-kelp bg-shoal p-6 text-[1.2rem] font-medium leading-snug text-navy">
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
              <h3 className="text-[1.4rem]">{p.sidePanel.title}</h3>
              <ol className="mt-5 grid gap-5 sm:grid-cols-2">
                {p.sidePanel.items.map((x, i) => (
                  <li key={x.title} className="flex items-start gap-3">
                    <Num n={i + 1} />
                    <div>
                      <p className="text-[1.12rem] font-bold">{x.title}</p>
                      {x.desc && <p className="text-[1.02rem] text-foam">{x.desc}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      {p.chain && (
        <div className="px-6 pb-8 md:px-10">
          <h3 className="text-[1.5rem] text-kelp md:text-[1.8rem]">{p.chain.title}</h3>
          <ol className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {p.chain.steps.map((s) => (
              <li key={s} className="bg-kelp px-4 py-4 text-[1.1rem] font-bold text-white [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)]">
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}

      {p.benefits.length > 0 && (
        <div className="on-dark grid gap-6 bg-navy px-6 py-8 text-white md:px-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
          <h3 className="text-[1.6rem]">{p.benefitsTitle}</h3>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.benefits.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-kelp" aria-hidden="true" />
                <span>
                  <span className="block text-[1.15rem] font-bold">{b.title}</span>
                  {b.desc && <span className="block text-[1.02rem] text-foam">{b.desc}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

/** Slide 12–17 — nội dung đầy đủ một lĩnh vực */
export function SectorDetail({ s }: { s: Sector }) {
  let n = 0;
  return (
    <>
      <SheetHead tag={`Lĩnh vực ${s.no}`} title={s.title} lead={s.lead} />
      <div className="grid gap-8 px-6 py-8 md:px-10 lg:grid-cols-12">
        <aside className="space-y-5 lg:col-span-4">
          {s.images.map((src) => (
            <Photo key={src} src={src} alt={s.overviewTitle} className="aspect-[4/3] rounded-lg" sizes="(min-width:1024px) 30vw, 100vw" />
          ))}
          <div className="rounded-lg bg-shoal p-6">
            <h3 className="text-[1.3rem] text-kelp">
              {String(s.no).padStart(2, "0")}. {s.overviewTitle}
            </h3>
            <Bullets items={s.summary} className="mt-3 text-[1.08rem]" />
          </div>
        </aside>
        <div className="lg:col-span-8">
          <ol className={`grid gap-5 ${s.items.length > 1 ? "md:grid-cols-2" : ""}`}>
            {s.items.map((it) => {
              n += 1;
              return (
                <li key={it.title} className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                  <div className="flex items-center gap-3">
                    <Num n={n} />
                    <h3 className="text-[1.35rem]">{it.title}</h3>
                  </div>
                  <Bullets items={it.body} className="mt-4 text-[1.1rem]" />
                </li>
              );
            })}
            {s.connectTargets && (
              <li className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                <div className="flex items-center gap-3">
                  <Num n={++n} />
                  <h3 className="text-[1.35rem]">Đối tượng kết nối</h3>
                </div>
                <Bullets items={s.connectTargets} className="mt-4 text-[1.1rem]" />
              </li>
            )}
            {s.message && (
              <li className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                <div className="flex items-center gap-3">
                  <Num n={++n} />
                  <h3 className="text-[1.35rem]">Thông điệp</h3>
                </div>
                <p className="mt-4 text-[1.25rem] font-bold leading-snug text-navy">{s.message}</p>
              </li>
            )}
          </ol>
          <div className="on-dark mt-6 rounded-lg bg-navy p-6 text-white">
            <h3 className="text-[1.4rem]">{roleTitle}</h3>
            <p className="mt-2 text-[1.2rem] font-bold">{s.role}</p>
          </div>
        </div>
      </div>
    </>
  );
}
