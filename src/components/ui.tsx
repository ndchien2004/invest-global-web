import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  lead,
  tag,
  crumbs,
  children,
}: {
  title: string;
  lead?: string;
  /** nhãn xanh lá giống slide, ví dụ “Trụ cột 1”, “Lĩnh vực 2” */
  tag?: string;
  crumbs?: { href: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section data-hero className="on-dark relative overflow-hidden bg-navy text-foam">
      <div className="wrap relative py-10 md:py-14">
        {crumbs && (
          <nav aria-label="Đường dẫn" className="mb-5 text-[1.2rem] font-medium text-foam md:text-[1.3rem]">
            <ol className="flex flex-wrap gap-x-2">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Trang chủ
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex gap-x-2">
                  <span aria-hidden="true">/</span>
                  <Link href={c.href} className="hover:text-white hover:underline">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {tag && (
          <p className="mb-4 inline-block rounded-sm bg-kelp px-4 py-1.5 text-[1.2rem] font-bold uppercase text-white md:text-[1.35rem]">
            {tag}
          </p>
        )}
        <h1 className="max-w-[40ch] text-[2rem] md:text-[2.6rem] lg:text-[2.9rem]">{title}</h1>
        {lead && <p className="mt-4 max-w-[60ch] text-[1.25rem] font-medium leading-snug text-foam md:text-[1.45rem]">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function Section({
  id,
  title,
  lead,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  lead?: string;
  tone?: "white" | "shoal" | "dark";
  children: ReactNode;
  className?: string;
}) {
  const toneClass = tone === "shoal" ? "bg-shoal" : tone === "dark" ? "on-dark bg-abyss text-foam" : "bg-white";
  return (
    <section id={id} className={`${toneClass} scroll-mt-20 py-12 md:py-16 ${className}`}>
      <div className="wrap">
        {title && <h2 className="max-w-[26ch] text-[2.25rem] md:text-[3.25rem]">{title}</h2>}
        {lead && (
          <p className={`mt-3 max-w-[64ch] text-[1.3rem] font-medium leading-snug md:text-[1.5rem] ${tone === "dark" ? "text-foam" : "text-slate"}`}>
            {lead}
          </p>
        )}
        <div className={title || lead ? "mt-5 md:mt-7" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`relative overflow-hidden bg-shoal ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={fit === "cover" ? "object-cover" : "object-contain"} priority={priority} />
    </div>
  );
}

export function Num({ n, className = "" }: { n: number; className?: string }) {
  return <span className={`num-badge ${className}`}>{String(n).padStart(2, "0")}</span>;
}

export function Bullets({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-kelp" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
