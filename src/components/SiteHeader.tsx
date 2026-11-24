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
    <>
      <div id="scroll-progress" aria-hidden="true" className="scroll-progress" />
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <a
          href="#noi-dung"
          className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-white"
        >
          Bỏ qua tới nội dung
        </a>
        <div
          className={`float-nav pointer-events-auto mx-auto flex max-w-[82rem] items-center gap-4 rounded-full border border-white/60 bg-white/95 pl-3 pr-2 backdrop-blur-md transition-all duration-300 supports-[backdrop-filter]:bg-white/88 ${
            scrolled ? "h-14 shadow-[0_10px_30px_-12px_rgba(6,26,58,0.45)]" : "h-16 shadow-[0_8px_28px_-14px_rgba(6,26,58,0.6)]"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-full" aria-label="Invest Global, về trang chủ">
            <Image
              src="/images/brand/logo.webp"
              alt=""
              width={159}
              height={129}
              className={`w-auto transition-[height] duration-300 ${scrolled ? "h-9" : "h-11"}`}
              priority
            />
            <span className="hidden text-[1.05rem] font-bold uppercase leading-none text-navy sm:block lg:hidden 2xl:block">Invest Global</span>
          </Link>

          <nav aria-label="Điều hướng chính" className="ml-auto hidden lg:block">
            <ul className="flex items-center">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`nav-pill whitespace-nowrap rounded-full px-2.5 py-2 text-[1rem] font-bold transition-colors xl:px-3 xl:text-[1.05rem] ${
                      isActive(item.href) ? "bg-navy text-white" : "text-ink hover:bg-navy/8 hover:text-teal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/lien-he" className="btn btn-primary ml-auto hidden whitespace-nowrap rounded-full md:inline-flex lg:ml-1">
            Liên hệ
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-navy/8 md:ml-1 lg:hidden"
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
          <nav
            id="menu-di-dong"
            aria-label="Điều hướng di động"
            className="menu-pop pointer-events-auto mx-auto mt-2 max-w-[82rem] overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-[0_16px_40px_-16px_rgba(6,26,58,0.55)] backdrop-blur-md lg:hidden"
          >
            <ul className="px-5 py-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block border-b border-rule py-3 text-[1.1rem] font-bold ${isActive(item.href) ? "text-teal" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 pb-2 md:hidden">
                <Link href="/lien-he" className="btn btn-primary w-full justify-center rounded-full">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
