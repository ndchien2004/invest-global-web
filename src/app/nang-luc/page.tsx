import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Section } from "@/components/ui";
import { certificates, certificatesTitle, org } from "@/content/org";

export const metadata: Metadata = { title: certificatesTitle, description: certificatesTitle };

/** Slide 27–30 */
export default function CapabilityPage() {
  return (
    <>
      <PageHeader title={certificatesTitle} lead={org.sloganVi} crumbs={[{ href: "/nang-luc", label: "Bản quyền tác giả" }]} />
      <Section>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c) => (
            <li key={c.title} className="flex flex-col">
              <a
                href={c.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[5/7] overflow-hidden rounded-lg border border-rule bg-white shadow-[0_1px_6px_rgba(10,46,99,0.12)]"
                aria-label={`Xem ảnh lớn: ${c.title} (mở tab mới)`}
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <p className="mt-4 text-[1.15rem] font-bold leading-snug text-navy">{c.title}</p>
              <p className="mt-1 text-[1.05rem] font-bold text-kelp">({c.date})</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
