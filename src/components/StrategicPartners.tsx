import Image from "next/image";
import { strategicPartners } from "@/content/org";

/** Slide 23 — giữ nguyên bố cục, chữ và font (Tahoma Bold) */
export default function StrategicPartners() {
  return (
    <section className="font-tahoma bg-[#F2F8FB]">
      <div className="bg-navy">
        <h2 className="wrap py-5 text-center text-[1.6rem] text-white md:text-[2.25rem]" style={{ fontFamily: "var(--font-tahoma)" }}>
          {strategicPartners.title}
        </h2>
      </div>
      <div className="wrap grid gap-12 py-12 md:grid-cols-2 md:py-16">
        {strategicPartners.items.map((p) => (
          <figure key={p.id} className="flex flex-col items-center">
            <div className="relative h-24 w-64 bg-white">
              <Image src={p.logo} alt={`Logo ${p.id.toUpperCase()}`} fill sizes="256px" className="object-contain p-2" />
            </div>
            {p.article ? (
              <a
                href={p.article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-3 block aspect-[3/2] w-full max-w-[34rem] overflow-hidden"
                aria-label={`Đọc bài báo trên ${p.article.source} (mở tab mới)`}
              >
                <Image src={p.image} alt={p.caption} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </a>
            ) : (
              <div className="relative mt-3 aspect-[3/2] w-full max-w-[34rem] overflow-hidden">
                <Image src={p.image} alt={p.caption} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
              </div>
            )}
            <figcaption className="mt-6 max-w-[34rem] text-center text-[1.3rem] leading-snug text-navy md:text-[1.45rem]">
              {p.caption}
            </figcaption>
            {p.article && (
              <a
                href={p.article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-[1.05rem] font-bold text-teal hover:text-navy"
              >
                Đọc bài báo trên {p.article.source} ↗
              </a>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
