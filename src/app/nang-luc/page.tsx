import type { Metadata } from "next";
import { CertificateGallery } from "@/components/CertificateGallery";
import { PageHeader, Section } from "@/components/ui";
import { certificates, certificatesTitle, org } from "@/content/org";

export const metadata: Metadata = { title: certificatesTitle, description: certificatesTitle };

/** Slide 27–30 */
export default function CapabilityPage() {
  return (
    <>
      <PageHeader title={certificatesTitle} lead={org.sloganVi} crumbs={[{ href: "/nang-luc", label: "Bản quyền tác giả" }]} />
      <Section>
        <CertificateGallery items={certificates} />
      </Section>
    </>
  );
}
