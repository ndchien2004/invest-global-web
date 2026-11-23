import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui";
import { partnerGroups } from "@/content/org";

export const metadata: Metadata = {
  title: "Đối tác",
  description: partnerGroups[1].note,
};

/** Slide 20, 21, 22 — logo kèm tên */
export default function PartnersPage() {
  return (
    <>
      <PageHeader title="Đối tác" crumbs={[{ href: "/doi-tac", label: "Đối tác" }]}>
        <nav aria-label="Nhóm đối tác" className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {partnerGroups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="inline-block rounded-full border border-white/40 px-5 py-2 text-[1.05rem] font-bold text-white hover:bg-white/10">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {partnerGroups.map((g, gi) => (
        <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className={`scroll-mt-24 py-14 md:py-20 ${gi % 2 ? "bg-white" : "bg-shoal"}`}>
          <div className="wrap">
            <h2 id={`${g.id}-h`} className="text-[1.9rem] md:text-[2.6rem]">
              {g.title}
            </h2>
            {g.note && <p className="mt-4 max-w-[70ch] text-[1.25rem] font-medium text-slate">{g.note}</p>}
            <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {g.partners.map((p) => (
                <li key={p.name} className="flex flex-col items-center justify-center rounded-lg bg-white p-5 text-center shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
                  <div className="relative h-20 w-full">
                    <Image src={p.logo} alt={`Logo ${p.name.replace("\n", " ")}`} fill sizes="200px" className="object-contain" />
                  </div>
                  <p className="mt-4 whitespace-pre-line text-[1.1rem] font-bold leading-snug text-navy">{p.name}</p>
                </li>
              ))}
            </ul>
            {g.banner && (
              <p className="on-dark mt-10 rounded-lg bg-navy px-6 py-5 text-center text-[1.35rem] font-bold text-white">{g.banner}</p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
