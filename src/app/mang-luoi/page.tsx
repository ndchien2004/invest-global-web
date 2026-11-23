import type { Metadata } from "next";
import { NetworkMap } from "@/components/NetworkMap";
import { Num, PageHeader } from "@/components/ui";
import { members, network, networkPage } from "@/content/org";

export const metadata: Metadata = { title: networkPage.title, description: networkPage.lead };

/** Slide 19 — nội dung nguyên văn */
export default function NetworkPage() {
  return (
    <>
      <PageHeader title={networkPage.title} lead={networkPage.lead} crumbs={[{ href: "/mang-luoi", label: "Mạng lưới" }]} />
      <section className="on-dark bg-abyss py-12 text-white md:py-16">
        <div className="wrap">
          <h2 className="text-[1.75rem] md:text-[2.25rem]">{networkPage.globalTitle}</h2>
          <div className="mt-8">
            <NetworkMap nodes={network} />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <div>
            <h2 className="text-[1.75rem] md:text-[2.25rem]">{networkPage.vnTitle}</h2>
            <ol className="mt-8 flex flex-wrap justify-center gap-5">
              {members.map((m, i) => (
                <li key={m.name} className="w-full rounded-lg bg-shoal p-5 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
                  <div className="flex items-start gap-3">
                    <Num n={i + 1} />
                    <h3 className="text-[1.25rem] normal-case">{m.name}</h3>
                  </div>
                  <p className="mt-3 text-[1.1rem] text-slate">{m.role}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
