/** Cờ nội dung — xem brief §4. `needsReview` = khách hàng cần xác nhận trước khi go-live. */
export interface Meta {
  needsReview?: boolean;
  source?: string;
}

export interface NumberedItem {
  title: string;
  body: string[];
}

export interface Sector extends Meta {
  slug: string;
  no: number;
  title: string;
  lead: string;
  summary: string[];
  items: NumberedItem[];
  connectTargets?: string[];
  message?: string;
  relatedPillars: number[];
  image: string;
}

export interface ValueItem {
  title: string;
  desc?: string;
}

export interface Pillar extends Meta {
  slug: string;
  no: number;
  title: string;
  shortTitle: string;
  excerpt: string;
  focus: string[];
  tagline: string;
  values?: ValueItem[];
  items: NumberedItem[];
  sidePanel?: { title: string; items: ValueItem[] };
  chips?: string[];
  chain?: { title: string; steps: string[] };
  vision?: string;
  benefitsTitle: string;
  benefits: ValueItem[];
  image: string;
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
  id: string;
  country: string;
  sectors: string[];
  /** toạ độ trên hải đồ (lon, lat) */
  lon: number;
  lat: number;
}

export interface PartnerGroup {
  id: string;
  title: string;
  note?: string;
  partners: string[];
}

export interface EventItem extends Meta {
  slug: string;
  date: string; // ISO
  dateLabel: string;
  title: string;
  venue: string;
  organizers: string;
  detail?: string;
  image?: string;
  kind: "su-kien" | "ngoai-giao" | "doi-tac";
  credit?: string;
}

export interface Certificate {
  date: string;
  title: string;
}
