import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import { PageHeader, Section } from "@/components/ui";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "Liên hệ và gửi nhu cầu đầu tư",
  description: "Gửi nhu cầu đầu tư hoặc liên hệ hợp tác với Liên minh Invest Global. Hotline 098 273 76 79.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Gửi nhu cầu đầu tư"
        lead="Các trường thông tin dưới đây tương ứng bước 1 trong quy trình của chúng tôi: tiếp nhận nhu cầu. Điền càng rõ, bước sàng lọc càng nhanh."
        crumbs={[{ href: "/lien-he", label: "Liên hệ" }]}
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                <Image src="/images/photos/tru-so.webp" alt="Trung tâm Hội nghị Quốc tế, 35 Hùng Vương, Hà Nội" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-fine text-slate">Trụ sở chính tại Trung tâm Hội nghị Quốc tế, 35 Hùng Vương.</figcaption>
            </figure>
            <dl className="space-y-5">
              <div>
                <dt className="chart-note text-teal">Hotline</dt>
                <dd className="text-[1.5rem] font-bold text-navy">
                  <a href={org.contact.hotlineHref} className="hover:underline">
                    {org.contact.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="chart-note text-teal">Email</dt>
                <dd>
                  <a href={`mailto:${org.contact.email}`} className="link">
                    {org.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="chart-note text-teal">Trụ sở chính</dt>
                <dd>{org.contact.headquarters}</dd>
              </div>
              <div>
                <dt className="chart-note text-teal">Văn phòng</dt>
                <dd>{org.contact.office}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
