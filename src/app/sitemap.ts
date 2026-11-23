import type { MetadataRoute } from "next";
import { pillars } from "@/content/pillars";
import { sectors } from "@/content/sectors";

const base = "https://investglobal.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/gioi-thieu", "/dich-vu", "/linh-vuc", "/kinh-te-bien-xanh", "/xuc-tien-ngoai-giao", "/mang-luoi", "/doi-tac", "/giai-phap-so", "/nang-luc", "/tin-tuc", "/lien-he"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}` })),
    ...sectors.map((s) => ({ url: `${base}/linh-vuc/${s.slug}` })),
    ...pillars.map((p) => ({ url: `${base}/kinh-te-bien-xanh/${p.slug}` })),
  ];
}
