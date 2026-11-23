import Image from "next/image";
import Link from "next/link";
import { org } from "@/content/org";

const links = [
  { href: "/kinh-te-bien-xanh", label: "9 trụ cột Kinh tế Biển Xanh" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/linh-vuc", label: "Lĩnh vực hoạt động trọng tâm" },
  { href: "/dich-vu", label: "Chuỗi dịch vụ" },
  { href: "/giai-phap-so", label: "Cổng thông tin đầu tư quốc tế" },
  { href: "/xuc-tien-ngoai-giao", label: "Xúc tiến đầu tư & ngoại giao quốc tế" },
  { href: "/mang-luoi", label: "Mạng lưới" },
  { href: "/doi-tac", label: "Đối tác" },
  { href: "/tin-tuc", label: "Sự kiện" },
  { href: "/nang-luc", label: "Bản quyền tác giả" },
  { href: "/lien-he", label: "Liên hệ" },
];

/** Theo slide 43 */
export default function SiteFooter() {
  return (
    <footer className="on-dark bg-navy text-foam">
      <div className="wrap grid gap-12 py-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-white p-2">
              <Image src="/images/brand/logo.webp" alt="Logo Invest Global" width={159} height={129} className="h-16 w-auto" />
            </div>
            <div>
              <p className="text-[1.25rem] font-bold uppercase text-white">Liên minh Tư vấn và Đầu tư Quốc tế</p>
              <p className="text-[2.25rem] font-bold uppercase leading-none text-[#3ecf8e]">Invest Global</p>
            </div>
          </div>
          <dl className="mt-8 grid gap-6 border-t border-white/20 pt-6 text-[1.1rem] sm:grid-cols-2">
            <div>
              <dt className="font-bold text-[#3ecf8e]">Email</dt>
              <dd>
                <a className="hover:underline" href={`mailto:${org.contact.email}`}>
                  {org.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#3ecf8e]">Hotline</dt>
              <dd>
                <a className="hover:underline" href={org.contact.hotlineHref}>
                  {org.contact.hotline}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#3ecf8e]">Trụ sở chính</dt>
              <dd>{org.contact.headquarters}</dd>
            </div>
            <div>
              <dt className="font-bold text-[#3ecf8e]">Văn phòng</dt>
              <dd>{org.contact.office}</dd>
            </div>
          </dl>
          <p className="mt-8 border-t border-white/20 pt-6 text-[1.1rem] font-bold text-white">{org.taglineText}</p>
        </div>
        <nav aria-label="Liên kết chân trang" className="lg:col-span-5">
          <ul className="grid gap-x-8 gap-y-3 text-[1.1rem] sm:grid-cols-2">
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
        <div className="wrap py-5 text-[1rem] text-foam/80">{org.sloganVi}</div>
      </div>
    </footer>
  );
}
