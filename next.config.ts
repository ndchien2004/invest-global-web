import type { NextConfig } from "next";

/** Website là một trang duy nhất — đường dẫn cũ chuyển về đúng phần (hoặc đúng bảng chi tiết). */
const old: [string, string][] = [
  ["/gioi-thieu", "/#gioi-thieu"],
  ["/giai-phap-so", "/#gioi-thieu"],
  ["/linh-vuc", "/#linh-vuc"],
  ["/linh-vuc/:slug", "/#:slug"],
  ["/dich-vu", "/#dich-vu"],
  ["/mang-luoi", "/#mang-luoi"],
  ["/xuc-tien-ngoai-giao", "/#mang-luoi"],
  ["/doi-tac", "/#doi-tac"],
  ["/tin-tuc", "/#su-kien"],
  ["/nang-luc", "/#ban-quyen"],
  ["/kinh-te-bien-xanh", "/#tru-cot"],
  ["/kinh-te-bien-xanh/:slug", "/#:slug"],
  ["/lien-he", "/#lien-he"],
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], qualities: [90] },
  async redirects() {
    return old.map(([source, destination]) => ({ source, destination, permanent: false }));
  },
};

export default nextConfig;
