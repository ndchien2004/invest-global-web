import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, IllustrationImage, PageHeader, Section } from "@/components/ui";
import { pillars } from "@/content/pillars";
import { sectorRole, sectors } from "@/content/sectors";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.lead } : {};
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = pillars.filter((p) => s.relatedPillars.includes(p.no));
  const idx = sectors.indexOf(s);
  const next = sectors[(idx + 1) % sectors.length];

  return (
    <>
      <PageHeader
        title={s.title}
        lead={s.lead}
        crumbs={[
          { href: "/linh-vuc", label: "Lĩnh vực" },
          { href: `/linh-vuc/${s.slug}`, label: `Lĩnh vực ${s.no}` },
        ]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {s.items.length === 1 ? (
              <>
                <h2 className="text-[1.75rem]">{s.items[0].title}</h2>
                <ul className="mt-6 space-y-4">
                  {s.items[0].body.map((b) => (
                    <li key={b} className="flex gap-3 text-[1.1rem]">
                      <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <dl className="divide-y divide-rule border-y border-rule">
                {s.items.map((it) => (
                  <div key={it.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
                    <dt className="text-[1.15rem] font-bold text-navy md:col-span-5">{it.title}</dt>
                    <dd className="text-slate md:col-span-7">{it.body.join(" ")}</dd>
                  </div>
                ))}
              </dl>
            )}

            {s.connectTargets && (
              <div className="mt-12">
                <h2 className="text-[1.5rem]">Đối tượng kết nối</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.connectTargets.map((c) => (
                    <li key={c} className="rounded bg-shoal px-3 py-1.5 font-medium">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.message && (
              <blockquote className="mt-12 border-l-2 border-teal pl-6 text-[1.35rem] font-semibold leading-snug text-navy">
                “{s.message}”
              </blockquote>
            )}
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <IllustrationImage src={s.image} alt={s.title} className="aspect-[4/3] rounded-md" />
            <div className="rounded-md bg-shoal p-6">
              <h2 className="text-[1.15rem]">Vai trò của Invest Global</h2>
              <ol className="mt-4 space-y-2">
                {sectorRole.map((r, i) => (
                  <li key={r} className="flex gap-3">
                    <span className="chart-note text-teal">{i + 1}</span>
                    {r}
                  </li>
                ))}
              </ol>
            </div>
            {related.length > 0 && (
              <div>
                <h2 className="text-[1.15rem]">Trụ cột Kinh tế Biển Xanh liên quan</h2>
                <ul className="mt-3 space-y-2">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/kinh-te-bien-xanh/${p.slug}`} className="link">
                        Trụ cột {p.no}: {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <div className="mt-16 border-t border-rule pt-6">
          <Link href={`/linh-vuc/${next.slug}`} className="link">
            Lĩnh vực tiếp theo: {next.title}
          </Link>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
