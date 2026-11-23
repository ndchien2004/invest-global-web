import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import { PageHeader } from "@/components/ui";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `${org.name}. Hotline ${org.contact.hotline}. Email ${org.contact.email}.`,
};

/** Slide 43 + form tiếp nhận nhu cầu (bước 01, slide 10) */
export default function ContactPage() {
  return (
    <>
      <PageHeader title="Liên hệ" crumbs={[{ href: "/lien-he", label: "Liên hệ" }]} />
      <section className="bg-white py-14 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image src="/images/photos/tru-so.webp" alt="Trung tâm Hội nghị Quốc tế, 35 Hùng Vương" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-[1.2rem] font-bold uppercase text-navy">{org.subtitle}</p>
              <p className="text-[2.25rem] font-bold uppercase leading-none text-kelp">{org.shortName}</p>
            </div>
            <dl className="space-y-5 text-[1.15rem]">
              <div>
                <dt className="font-bold text-kelp">Email</dt>
                <dd>
                  <a href={`mailto:${org.contact.email}`} className="link">
                    {org.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-kelp">Hotline</dt>
                <dd className="text-[1.6rem] font-bold text-navy">
                  <a href={org.contact.hotlineHref} className="hover:underline">
                    {org.contact.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-kelp">Trụ sở chính</dt>
                <dd>{org.contact.headquarters}</dd>
              </div>
              <div>
                <dt className="font-bold text-kelp">Văn phòng</dt>
                <dd>{org.contact.office}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
