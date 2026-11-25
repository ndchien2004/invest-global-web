import { blueEconomy } from "./pillars";
import { certificatesTitle, networkPage, servicesTitle } from "./org";
import { sectorsLead, sectorsTitle } from "./sectors";

/** Các chương của trang đơn — thứ tự theo menu. Tiêu đề lấy từ deck. */
export interface Chapter {
  id: string;
  nav: string;
  title: string;
  lead?: string;
}

export const chapters: Chapter[] = [
  { id: "gioi-thieu", nav: "Giới thiệu", title: "Giới thiệu Liên minh Invest Global" },
  { id: "linh-vuc", nav: "Lĩnh vực", title: sectorsTitle, lead: sectorsLead },
  { id: "dich-vu", nav: "Dịch vụ", title: servicesTitle },
  { id: "mang-luoi", nav: "Mạng lưới", title: networkPage.title, lead: networkPage.lead },
  { id: "doi-tac", nav: "Đối tác", title: "Đối tác" },
  { id: "su-kien", nav: "Sự kiện", title: "Sự kiện" },
  { id: "ban-quyen", nav: "Bản quyền tác giả", title: certificatesTitle },
  { id: "tru-cot", nav: "9 trụ cột Kinh tế Biển Xanh", title: blueEconomy.title, lead: blueEconomy.subtitle },
];
