"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const mainNav = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/linh-vuc", label: "Lĩnh vực" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/mang-luoi", label: "Mạng lưới" },
  { href: "/doi-tac", label: "Đối tác" },
  { href: "/tin-tuc", label: "Sự kiện" },
  { href: "/nang-luc", label: "Bản quyền tác giả" },
  { href: "/kinh-te-bien-xanh", label: "9 trụ cột Kinh tế Biển Xanh" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar?.style.setProperty("--p", String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-[box-shadow,border-color] duration-300 supports-[backdrop-filter]:bg-white/85 ${
        scrolled ? "border-transparent shadow-[0_6px_20px_-12px_rgba(10,46,99,0.35)]" : "border-rule"
      }`}
    >
      <a
        href="#noi-dung"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-white"
      >
        Bỏ qua tới nội dung
      </a>
      <div className={`wrap flex items-center gap-6 transition-[height] duration-300 ${scrolled ? "h-16" : "h-[4.75rem]"}`}>
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Invest Global, về trang chủ">
          <Image src="/images/brand/logo.webp" alt="" width={159} height={129} className={`w-auto transition-[height] duration-300 ${scrolled ? "h-11" : "h-14"}`} priority />
          <span className="hidden leading-tight sm:block lg:hidden 2xl:block">
            <span className="block text-[1.15rem] font-bold uppercase text-navy">Invest Global</span>
            <span className="block text-[0.9rem] text-slate">Liên minh Tư vấn và Đầu tư Quốc tế</span>
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`nav-link whitespace-nowrap rounded px-2 py-2 text-[1.05rem] font-bold transition-colors hover:text-teal ${
                    isActive(item.href) ? "text-teal" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/lien-he" className="btn btn-primary ml-auto hidden whitespace-nowrap md:inline-flex lg:ml-2">
          Liên hệ
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded text-navy md:ml-2 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-di-dong"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Đóng menu" : "Mở menu"}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-di-dong" aria-label="Điều hướng di động" className="border-t border-rule bg-white lg:hidden">
          <ul className="wrap py-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block border-b border-rule py-3 text-[1.1rem] font-bold text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/lien-he" className="btn btn-primary w-full justify-center">
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div id="scroll-progress" aria-hidden="true" className="scroll-progress" />
    </header>
  );
}
