import Link from "next/link";
import { org } from "@/content/org";

const groups = [
  {
    title: "Liên minh",
    links: [
      { href: "/gioi-thieu", label: "Giới thiệu" },
      { href: "/mang-luoi", label: "Mạng lưới thành viên" },
      { href: "/doi-tac", label: "Đối tác" },
      { href: "/nang-luc", label: "Bản quyền và nghiên cứu" },
    ],
  },
  {
    title: "Hoạt động",
    links: [
      { href: "/dich-vu", label: "Dịch vụ và quy trình" },
      { href: "/linh-vuc", label: "Lĩnh vực trọng tâm" },
      { href: "/xuc-tien-ngoai-giao", label: "Xúc tiến và ngoại giao" },
      { href: "/giai-phap-so", label: "Giải pháp số" },
    ],
  },
  {
    title: "Kinh tế Biển Xanh",
    links: [
      { href: "/kinh-te-bien-xanh", label: "9 trụ cột chiến lược" },
      { href: "/tin-tuc", label: "Sự kiện và tin tức" },
      { href: "/lien-he", label: "Liên hệ" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-abyss text-foam">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xl font-extrabold tracking-tight text-white">{org.name}</p>
          <p className="mt-3 max-w-[44ch] text-[0.95rem] leading-relaxed text-foam/80">{org.tagline.join(". ")}.</p>
          <dl className="mt-6 space-y-3 text-[0.95rem]">
            <div>
              <dt className="chart-note text-fine text-foam/60">Trụ sở chính</dt>
              <dd>{org.contact.headquarters}</dd>
            </div>
            <div>
              <dt className="chart-note text-fine text-foam/60">Văn phòng</dt>
              <dd>{org.contact.office}</dd>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <dt className="chart-note text-fine text-foam/60">Hotline</dt>
                <dd>
                  <a className="link" href={org.contact.hotlineHref}>
                    {org.contact.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="chart-note text-fine text-foam/60">Email</dt>
                <dd>
                  <a className="link" href={`mailto:${org.contact.email}`}>
                    {org.contact.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <nav aria-label="Liên kết chân trang" className="grid gap-8 sm:grid-cols-3 md:col-span-7">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="font-bold text-white">{g.title}</p>
              <ul className="mt-3 space-y-2 text-[0.95rem]">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-foam/85 hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-5 text-fine text-foam/60">
          <p>
            © {new Date().getFullYear()} {org.shortName}. “{org.slogan}”
          </p>
          <p>Đại diện Liên minh: {org.representative}</p>
        </div>
      </div>
    </footer>
  );
}
