import type { Metadata } from "next";
import { GoalsStrip, PillarFocus, PillarGrid } from "@/components/pillars";
import { PageHeader, Section } from "@/components/ui";
import { blueEconomy } from "@/content/pillars";

export const metadata: Metadata = {
  title: "Kinh tế Biển Xanh – 9 trụ cột chiến lược",
  description: blueEconomy.subtitle,
};

/** Slide 31–33 */
export default function BlueEconomyPage() {
  return (
    <>
      <PageHeader title={blueEconomy.title} lead={blueEconomy.subtitle} crumbs={[{ href: "/kinh-te-bien-xanh", label: blueEconomy.title }]} />
      <Section tone="shoal">
        <PillarGrid />
      </Section>
      <Section>
        <PillarFocus />
        <div className="mt-12">
          <GoalsStrip />
        </div>
      </Section>
    </>
  );
}
