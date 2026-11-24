import type { Metadata, Viewport } from "next";
import Motion from "@/components/Motion";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { org } from "@/content/org";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://investglobal.vn"),
  title: {
    default: "Invest Global | Liên minh Tư vấn và Đầu tư Quốc tế",
    template: "%s | Invest Global",
  },
  description:
    "Kết nối nguồn lực quốc tế – Kiến tạo cơ hội đầu tư – Thúc đẩy phát triển bền vững. Kinh tế Biển Xanh: 9 trụ cột chiến lược cho tương lai bền vững của kinh tế biển Việt Nam.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Invest Global",
  },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#061A3A",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: org.name,
  alternateName: "Invest Global",
  slogan: org.slogan,
  email: org.contact.email,
  telephone: "+84982737679",
  address: {
    "@type": "PostalAddress",
    streetAddress: "35 Hùng Vương",
    addressLocality: "Ba Đình, Hà Nội",
    addressCountry: "VN",
  },
};

const MOTION_BOOT = `(function(){try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;var d=document.documentElement;d.classList.add("motion");setTimeout(function(){if(!window.__motionReady)d.classList.remove("motion")},4000)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* bật hiệu ứng trước khi vẽ để không nháy; tự tắt nếu JS lỗi hoặc người dùng chọn giảm chuyển động */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT }} />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <SiteHeader />
        <main id="noi-dung" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Motion />
      </body>
    </html>
  );
}
