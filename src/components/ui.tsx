import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  lead,
  crumbs,
  children,
}: {
  title: string;
  lead?: string;
  crumbs?: { href: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-abyss text-foam">
      <ContourLines className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="wrap relative py-14 md:py-20">
        {crumbs && (
          <nav aria-label="Đường dẫn" className="chart-note mb-6 text-fine text-foam/70">
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
        <h1 className="max-w-[22ch] text-[2.25rem] md:text-[3.25rem]">{title}</h1>
        {lead && <p className="measure mt-5 text-lg leading-relaxed text-foam/90 md:text-xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

/** Đường đẳng sâu mảnh làm nền cho các dải tối (không phải hải đồ chính). */
export function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="#B9E3EF" strokeOpacity="0.09" strokeWidth="1">
        <path d="M0,330 C200,300 320,350 520,320 S860,250 1200,290" />
        <path d="M0,360 C220,335 360,380 560,352 S880,290 1200,326" />
        <path d="M0,392 C240,370 400,404 600,384 S900,330 1200,362" />
        <path d="M700,0 C760,60 900,80 960,40 S1120,0 1200,30" />
      </g>
    </svg>
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
    <section id={id} className={`${toneClass} scroll-mt-20 py-16 md:py-24 ${className}`}>
      <div className="wrap">
        {title && <h2 className="max-w-[24ch] text-[1.875rem] md:text-[2.5rem]">{title}</h2>}
        {lead && (
          <p className={`measure mt-4 text-lg leading-relaxed ${tone === "dark" ? "text-foam/85" : "text-slate"}`}>{lead}</p>
        )}
        <div className={title || lead ? "mt-10 md:mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}

/** Ảnh minh họa đã xử lý duotone — có nhãn “Ảnh minh họa” cho người đọc màn hình và chú thích nhỏ. */
export function IllustrationImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-abyss ${className}`}>
      <Image src={src} alt={`Ảnh minh họa: ${alt}`} fill sizes={sizes} className="object-cover" priority={priority} />
    </div>
  );
}

export function CtaBand({
  title = "Bắt đầu từ nhu cầu của bạn",
  text = "Cho chúng tôi biết mục tiêu đầu tư, ngành, quy mô và thị trường bạn quan tâm. Đội ngũ Invest Global sẽ liên hệ lại để trao đổi bước tiếp theo.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy text-foam">
      <ContourLines className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="wrap relative flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div>
          <h2 className="text-[1.875rem] md:text-[2.5rem]">{title}</h2>
          <p className="measure mt-4 text-lg text-foam/90">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link href="/lien-he" className="btn btn-primary">
            Gửi nhu cầu đầu tư
          </Link>
          <a href="tel:+84982737679" className="btn btn-ghost-dark">
            Gọi 098 273 76 79
          </a>
        </div>
      </div>
    </section>
  );
}

export function StepNo({ n, className = "" }: { n: number | string; className?: string }) {
  return <span className={`chart-note tabular-nums ${className}`}>{typeof n === "number" ? String(n).padStart(2, "0") : n}</span>;
}
