import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Photo, Section } from "@/components/ui";
import { ambassadorVisits, indiaEvents, indiaEventsTitle } from "@/content/org";

export const metadata: Metadata = { title: "Sự kiện", description: indiaEventsTitle };

/** Slide 24, 25, 26 */
export default function EventsPage() {
  return (
    <>
      <PageHeader title="Sự kiện" crumbs={[{ href: "/tin-tuc", label: "Sự kiện" }]} />
      <Section title={indiaEventsTitle}>
        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {indiaEvents.map((e) => {
            const body = (
              <>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-rule bg-white">
                  <Image
                    src={e.image}
                    alt={`Poster: ${e.title}`}
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-[1.15rem] font-bold text-kelp">{e.dateLabel}</p>
                <h3 className="mt-1 text-[1.3rem] normal-case leading-snug group-hover:text-teal group-hover:underline">{e.title}</h3>
                {e.subtitle && <p className="mt-1 text-[1.05rem] italic text-slate">{e.subtitle}</p>}
                {e.venue && <p className="mt-2 text-[1.05rem] text-slate">{e.venue}</p>}
                {e.organizers && <p className="mt-1 text-[1.05rem] text-slate">{e.organizers}</p>}
                {e.detail && <p className="mt-2 text-[1.05rem] text-slate">{e.detail}</p>}
                {e.article && (
                  <p className="mt-3 text-[1.05rem] font-bold text-teal">
                    Đọc bài báo trên {e.article.source}
                    <span aria-hidden="true"> ↗</span>
                  </p>
                )}
              </>
            );
            return (
              <li key={e.slug}>
                {e.article ? (
                  <a
                    href={e.article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`${e.title} – đọc bài báo trên ${e.article.source} (mở tab mới)`}
                  >
                    {body}
                  </a>
                ) : (
                  <div>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Section>
      {ambassadorVisits.map((v, i) => (
        <Section key={v.id} tone={i === 0 ? "shoal" : "white"} title={v.title}>
          <div className="grid gap-6 md:grid-cols-2">
            {v.images.map((src, j) => (
              <Photo key={src} src={src} alt={`${v.title} – ảnh ${j + 1}`} className="aspect-[3/2] rounded-lg" sizes="(min-width:768px) 45vw, 100vw" />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
