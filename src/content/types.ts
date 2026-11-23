/**
 * Quy ước nội dung: mọi chuỗi trong thư mục này là NGUYÊN VĂN từ hồ sơ năng lực
 * (PDF “(chỉnh) … V6”, 43 slide). Chỉ sửa lỗi chính tả, không thêm câu chữ mới.
 * `source` ghi số slide để đối chiếu.
 */
export interface Meta {
  source?: string;
}

export interface NumberedItem {
  title: string;
  body: string[];
}

export interface ValueItem {
  title: string;
  desc?: string;
}

export interface Sector extends Meta {
  slug: string;
  no: number;
  /** tiêu đề ở trang chi tiết (slide 12–17) */
  title: string;
  /** tiêu đề ở trang tổng quan (slide 11) */
  overviewTitle: string;
  lead: string;
  summary: string[];
  items: NumberedItem[];
  connectTargets?: string[];
  message?: string;
  role: string;
  images: string[];
}

export interface Pillar extends Meta {
  slug: string;
  no: number;
  /** tiêu đề trang chi tiết (slide 34–42) */
  title: string;
  /** tiêu đề ở slide 31 */
  shortTitle: string;
  /** mô tả 1 dòng ở slide 31 */
  excerpt: string;
  /** tiêu đề ở slide 32–33 */
  focusTitle: string;
  focus: string[];
  tagline: string;
  values?: ValueItem[];
  items: NumberedItem[];
  sidePanel?: { title: string; items: ValueItem[] };
  chips?: { title: string; items: string[] };
  chain?: { title: string; steps: string[] };
  highlight?: string;
  benefitsTitle?: string;
  benefits: ValueItem[];
  thumb: string;
  images: string[];
}

export interface Milestone {
  year: string;
  text: string;
  current?: boolean;
}

export interface Member {
  name: string;
  role: string;
}

export interface NetworkNode {
  country: string;
  sectors: string[];
}

export interface Partner {
  name: string;
  logo: string;
}

export interface PartnerGroup extends Meta {
  id: string;
  title: string;
  note?: string;
  banner?: string;
  partners: Partner[];
}

export interface EventItem extends Meta {
  slug: string;
  dateLabel: string;
  title: string;
  subtitle?: string;
  venue?: string;
  organizers?: string;
  detail?: string;
  image: string;
  /** bài báo thật về sự kiện — mở tab mới */
  article?: { url: string; source: string };
}

export interface Certificate {
  date: string;
  title: string;
  image: string;
}
