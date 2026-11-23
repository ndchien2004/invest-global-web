import Image from "next/image";
import Link from "next/link";
import { org } from "@/content/org";

const links = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/linh-vuc", label: "Lĩnh vực" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/mang-luoi", label: "Mạng lưới" },
  { href: "/doi-tac", label: "Đối tác" },
  { href: "/tin-tuc", label: "Sự kiện" },
  { href: "/giai-phap-so", label: "Cổng thông tin" },
  { href: "/xuc-tien-ngoai-giao", label: "Xúc tiến & ngoại giao" },
  { href: "/nang-luc", label: "Bản quyền tác giả" },
  { href: "/kinh-te-bien-xanh", label: "9 trụ cột Kinh tế Biển Xanh" },
  { href: "/lien-he", label: "Liên hệ" },
];

/** Theo slide 43 — bản gọn */
export default function SiteFooter() {
  return (
    <footer className="on-dark bg-navy text-foam">
      <div className="wrap grid gap-6 py-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-white p-1.5">
              <Image src="/images/brand/logo.webp" alt="Logo Invest Global" width={159} height={129} className="h-10 w-auto" />
            </div>
            <div className="leading-tight">
              <p className="text-[0.95rem] font-bold uppercase text-white">Liên minh Tư vấn và Đầu tư Quốc tế</p>
              <p className="text-[1.5rem] font-bold uppercase text-[#3ecf8e]">Invest Global</p>
            </div>
          </div>
          <dl className="mt-4 grid gap-x-8 gap-y-1.5 text-[1rem] sm:grid-cols-2">
            <div>
              <dt className="inline font-bold text-[#3ecf8e]">Email: </dt>
              <dd className="inline">
                <a className="hover:underline" href={`mailto:${org.contact.email}`}>
                  {org.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-[#3ecf8e]">Hotline: </dt>
              <dd className="inline">
                <a className="hover:underline" href={org.contact.hotlineHref}>
                  {org.contact.hotline}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="inline font-bold text-[#3ecf8e]">Trụ sở chính: </dt>
              <dd className="inline">{org.contact.headquarters}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="inline font-bold text-[#3ecf8e]">Văn phòng: </dt>
              <dd className="inline">{org.contact.office}</dd>
            </div>
          </dl>
        </div>
        <nav aria-label="Liên kết chân trang" className="lg:col-span-5">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[1rem]">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-foam hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="wrap flex flex-wrap justify-between gap-2 py-3 text-[0.95rem] text-foam/85">
          <span className="font-bold">{org.taglineText}</span>
          <span>{org.sloganVi}</span>
        </div>
      </div>
    </footer>
  );
}
