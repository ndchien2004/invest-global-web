import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bullets, Num, PageHeader, Photo } from "@/components/ui";
import { roleTitle, sectors } from "@/content/sectors";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.lead } : {};
}

/** Slide 12–17 */
export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  if (!s) notFound();
  const idx = sectors.indexOf(s);
  const next = sectors[(idx + 1) % sectors.length];
  let n = 0;

  return (
    <>
      <PageHeader
        tag={`Lĩnh vực ${s.no}`}
        title={s.title}
        lead={s.lead}
        crumbs={[
          { href: "/linh-vuc", label: "Lĩnh vực" },
          { href: `/linh-vuc/${s.slug}`, label: `Lĩnh vực ${s.no}` },
        ]}
      />
      <section className="bg-white py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-4">
            {s.images.map((src) => (
              <Photo key={src} src={src} alt={s.overviewTitle} className="aspect-[4/3] rounded-lg" />
            ))}
            <div className="rounded-lg bg-shoal p-6">
              <h2 className="text-[1.35rem] text-kelp">
                {String(s.no).padStart(2, "0")}. {s.overviewTitle}
              </h2>
              <Bullets items={s.summary} className="mt-3 text-[1.1rem]" />
            </div>
          </aside>
          <div className="lg:col-span-8">
            <ol className={`grid gap-6 ${s.items.length > 1 ? "md:grid-cols-2" : ""}`}>
              {s.items.map((it) => {
                n += 1;
                return (
                  <li key={it.title} className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                    <div className="flex items-center gap-3">
                      <Num n={n} />
                      <h2 className="text-[1.5rem]">{it.title}</h2>
                    </div>
                    <Bullets items={it.body} className="mt-4 text-[1.15rem]" />
                  </li>
                );
              })}
              {s.connectTargets && (
                <li className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                  <div className="flex items-center gap-3">
                    <Num n={++n} />
                    <h2 className="text-[1.5rem]">Đối tượng kết nối</h2>
                  </div>
                  <Bullets items={s.connectTargets} className="mt-4 text-[1.15rem]" />
                </li>
              )}
              {s.message && (
                <li className="rounded-lg bg-white p-6 shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                  <div className="flex items-center gap-3">
                    <Num n={++n} />
                    <h2 className="text-[1.5rem]">Thông điệp</h2>
                  </div>
                  <p className="mt-4 text-[1.3rem] font-bold leading-snug text-navy">{s.message}</p>
                </li>
              )}
            </ol>
            <div className="on-dark mt-8 rounded-lg bg-navy p-6 text-white">
              <h2 className="text-[1.5rem]">{roleTitle}</h2>
              <p className="mt-2 text-[1.25rem] font-bold">{s.role}</p>
            </div>
          </div>
        </div>
        <div className="wrap mt-14 border-t border-rule pt-6 text-[1.15rem]">
          <Link href={`/linh-vuc/${next.slug}`} className="link">
            Lĩnh vực {next.no}: {next.title} →
          </Link>
        </div>
      </section>
    </>
  );
}
