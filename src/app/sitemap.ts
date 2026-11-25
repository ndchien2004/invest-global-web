import type { MetadataRoute } from "next";

const base = "https://investglobal.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${base}/` }];
}
