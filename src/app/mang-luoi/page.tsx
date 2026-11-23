import type { Metadata } from "next";
import { Num, PageHeader } from "@/components/ui";
import { members, network, networkPage } from "@/content/org";

export const metadata: Metadata = { title: networkPage.title, description: networkPage.lead };

function Pin() {
  return (
    <svg width="28" height="36" viewBox="0 0 28 36" aria-hidden="true" className="shrink-0">
      <path d="M14 0C6.3 0 0 6.2 0 13.9 0 24.3 14 36 14 36s14-11.7 14-22.1C28 6.2 21.7 0 14 0z" fill="#0A2E63" />
      <circle cx="14" cy="14" r="5.5" fill="#fff" />
    </svg>
  );
}

/** Slide 19 — nội dung nguyên văn */
export default function NetworkPage() {
  return (
    <>
      <PageHeader title={networkPage.title} lead={networkPage.lead} crumbs={[{ href: "/mang-luoi", label: "Mạng lưới" }]} />
      <section className="bg-white py-14 md:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[1.75rem] md:text-[2.25rem]">{networkPage.vnTitle}</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {members.map((m, i) => (
                <li key={m.name} className={`rounded-lg bg-shoal p-5 ${i === members.length - 1 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-start gap-3">
                    <Num n={i + 1} />
                    <h3 className="text-[1.25rem] normal-case">{m.name}</h3>
                  </div>
                  <p className="mt-3 text-[1.1rem] text-slate">{m.role}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-[1.75rem] md:text-[2.25rem]">{networkPage.globalTitle}</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {network.map((n) => (
                <li key={n.country} className="rounded-lg border-2 border-shoal p-5">
                  <div className="flex items-center gap-3">
                    <Pin />
                    <h3 className="text-[1.4rem] normal-case">{n.country}</h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-12 text-[1.1rem] text-slate">
                    {n.sectors.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
