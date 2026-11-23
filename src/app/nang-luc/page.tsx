import type { Metadata } from "next";
import { Num, PageHeader, Section } from "@/components/ui";
import { certificates, certificatesTitle, org } from "@/content/org";

export const metadata: Metadata = { title: certificatesTitle, description: certificatesTitle };

/** Slide 27–30 */
export default function CapabilityPage() {
  return (
    <>
      <PageHeader title={certificatesTitle} lead={org.sloganVi} crumbs={[{ href: "/nang-luc", label: "Bản quyền tác giả" }]} />
      <Section>
        <ol className="grid gap-5 md:grid-cols-2">
          {certificates.map((c, i) => (
            <li key={c.title} className="flex items-start gap-4 rounded-lg border-2 border-shoal p-5">
              <Num n={i + 1} />
              <div>
                <p className="text-[1.25rem] font-bold leading-snug text-navy">{c.title}</p>
                <p className="mt-1 text-[1.1rem] font-bold text-kelp">({c.date})</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
