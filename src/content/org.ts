import type { Certificate, EventItem, Member, Milestone, NetworkNode, PartnerGroup } from "./types";

export const org = {
  name: "Liên minh Tư vấn và Đầu tư Quốc tế Invest Global",
  shortName: "Invest Global",
  initiative: "Liên minh Kinh tế Biển Xanh",
  slogan: "Code to Success",
  sloganVi: "Mã khóa thành công",
  tagline: ["Kết nối nguồn lực quốc tế", "Kiến tạo cơ hội đầu tư", "Thúc đẩy phát triển bền vững"],
  domain: "InvestGlobal.vn",
  representative: "Công ty Cổ phần Marina Capital",
  leader: { name: "TS. Nguyễn Thị Thu Hà", title: "Tổng giám đốc Invest Global" },
  definition:
    "Liên minh Tư vấn và Đầu tư Quốc tế Invest Global (Liên minh Invest Global) là liên minh giữa các tổ chức, hiệp hội, doanh nghiệp và chuyên gia hàng đầu trong nước và quốc tế, xây dựng chuỗi cung ứng dịch vụ hỗ trợ xúc tiến đầu tư, thương mại, kết nối và thu xếp nguồn vốn đầu tư nước ngoài (FDI) thế hệ mới vào Việt Nam.",
  positioning: "Kinh tế xanh, Kinh tế biển xanh, Kinh tế bạc",
  vision: "Trở thành tổ chức nghiên cứu, tư vấn và kết nối đầu tư, thương mại có uy tín với mạng lưới toàn cầu.",
  mission: "Gia tăng giá trị cho đối tác với dịch vụ tư vấn theo tiêu chuẩn quốc tế.",
  coreValues: ["Tin cậy", "Kết nối", "Chuyên nghiệp", "Bền vững"],
  contact: {
    email: "investglobalvn@gmail.com",
    hotline: "098 273 76 79",
    hotlineHref: "tel:+84982737679",
    headquarters: "Tầng 3, Trung tâm Hội nghị Quốc tế (Văn phòng Chính phủ), 35 Hùng Vương, Ba Đình, Hà Nội",
    office: "Tầng 10, tòa nhà 98 Hoàng Quốc Việt, Nghĩa Đô, Hà Nội",
  },
};

export const founders = [
  { short: "VAFIE", name: "Hiệp hội Doanh nghiệp đầu tư nước ngoài", logo: "/images/partners/vafie.webp" },
  { short: "VPBA", name: "Hội Doanh nhân Tư nhân Việt Nam", logo: "/images/partners/vpba.webp" },
  { short: "VSA", name: "Hiệp hội Nuôi biển Việt Nam", logo: "/images/partners/vsa.webp" },
  { short: "VnEconomy", name: "Tạp chí Kinh tế Việt Nam", logo: "/images/partners/vneconomy.webp" },
  { short: "VACNE", name: "Hội Bảo vệ Thiên nhiên và Môi trường Việt Nam", logo: "/images/partners/vacne.webp" },
];

export const strategy = {
  lead: "Ba trục chiến lược được hỗ trợ bởi sáu nền tảng và tạo bốn nhóm kết quả trọng tâm.",
  axes: ["Kinh tế xanh", "Kinh tế biển xanh", "Kinh tế bạc"],
  platforms: ["Dữ liệu", "Công nghệ", "Tài sản trí tuệ", "Tài chính", "Thương mại toàn cầu", "ESG"],
  outcomes: [
    "FDI thế hệ mới",
    "Chuyển giao và ứng dụng công nghệ",
    "Doanh nghiệp Việt Nam tham gia sâu chuỗi giá trị",
    "Sản phẩm Việt mở rộng thị trường quốc tế",
  ],
};

export const milestones: Milestone[] = [
  { year: "2017", text: "Nghiên cứu khu nghỉ dưỡng và chăm sóc sức khỏe cho người cao tuổi." },
  { year: "2020", text: "Phát triển cổng thông tin xúc tiến đầu tư, thương mại và du lịch quốc tế." },
  { year: "2023", text: "Nghiên cứu hệ sinh thái Du lịch, Dịch vụ và Công viên nông nghiệp trong quy hoạch phân khu Đô thị Sông Hồng." },
  { year: "2024", text: "Thúc đẩy ngoại giao kinh tế, kết nối doanh nghiệp Việt Nam – Ấn Độ." },
  { year: "2025", text: "Nghiên cứu sản phẩm tài chính cho hệ sinh thái đường sắt và chiến lược chuyển đổi xanh." },
  { year: "2026", text: "Nghiên cứu Kinh tế biển xanh, Kinh tế xanh và Kinh tế bạc.", current: true },
  { year: "2027–2030", text: "Thương mại hóa công nghệ lõi, công nghệ chiến lược, công nghệ cao." },
];

export const leaderQuote = "Mỗi giai đoạn phát triển gắn kết giữa hiệu quả và giá trị phát triển bền vững.";

export const modules = {
  name: "Hệ thống giải pháp xúc tiến đầu tư quốc tế",
  lead: "Nền tảng số hóa hoạt động xúc tiến đầu tư, thương mại, ESG và kết nối chuỗi giá trị.",
  items: [
    { name: "Invest Portal", desc: "Cổng thông tin xúc tiến đầu tư" },
    { name: "Invest Service", desc: "Dịch vụ tư vấn đầu tư" },
    { name: "Invest Link", desc: "Kết nối đối tác và địa phương" },
    { name: "Invest Club", desc: "Câu lạc bộ nhà đầu tư" },
    { name: "Invest Green", desc: "Đầu tư xanh ESG", needsReview: true },
    { name: "Invest Space", desc: "Không gian kết nối sự kiện" },
  ],
};

export const differentiators = [
  { title: "Am hiểu thị trường Việt Nam", desc: "Thông tin, chính sách, quy hoạch, địa phương và hệ sinh thái doanh nghiệp." },
  { title: "Mạng lưới quốc tế", desc: "Cơ quan ngoại giao, hiệp hội, doanh nghiệp, nhà đầu tư và tổ chức xúc tiến." },
  { title: "Chuỗi dịch vụ liền mạch", desc: "Nghiên cứu, pháp lý, dự án, vốn, đối tác, nhân lực, truyền thông." },
  { title: "Khả năng điều phối", desc: "Tập hợp chuyên gia và đối tác theo yêu cầu cụ thể của từng dự án." },
  { title: "Nền tảng truyền thông", desc: "Cổng thông tin, diễn đàn, sự kiện và hệ sinh thái nội dung đầu tư." },
  { title: "Định hướng bền vững", desc: "Chuyển đổi xanh, công nghệ, hạ tầng hiện đại và giá trị dài hạn." },
];

export const services = [
  {
    id: "phap-ly-du-an",
    title: "Pháp lý và dự án",
    items: [
      "Điều kiện tiếp cận thị trường, sở hữu nước ngoài.",
      "Cấu trúc đầu tư, doanh nghiệp, ngành nghề, vốn.",
      "Đề xuất đầu tư; Pre-FS/FS; phân tích kỹ thuật, thị trường, tài chính.",
      "Lộ trình thủ tục và phân bổ trách nhiệm.",
    ],
  },
  {
    id: "tai-chinh-ma",
    title: "Tài chính và M&A",
    items: [
      "Xác định nhu cầu vốn và cơ cấu nguồn vốn.",
      "Chuẩn hóa hồ sơ gọi vốn và dữ liệu thẩm định.",
      "Kết nối ngân hàng, quỹ, nhà đầu tư chiến lược.",
      "Sàng lọc mục tiêu, cấu trúc giao dịch và hỗ trợ đàm phán.",
    ],
  },
  {
    id: "nhan-luc-truyen-thong",
    title: "Nhân lực và truyền thông",
    items: [
      "Khảo sát nhu cầu nhân lực theo ngành và dự án.",
      "Kết nối cơ sở đào tạo, chuyên gia và doanh nghiệp.",
      "Xây dựng hồ sơ xúc tiến và nội dung giới thiệu dự án.",
      "Tổ chức hội nghị, diễn đàn, hội thảo và kết nối doanh nghiệp.",
    ],
  },
];

export const processSteps = [
  { title: "Tiếp nhận nhu cầu", desc: "Mục tiêu đầu tư, ngành, quy mô, thị trường, đối tác, nhu cầu vốn." },
  { title: "Nghiên cứu và sàng lọc", desc: "Chính sách, địa điểm, quy hoạch, thị trường và rủi ro." },
  { title: "Cấu trúc dự án", desc: "Mô hình đầu tư, đối tác, công nghệ, pháp lý và lộ trình." },
  { title: "Lập hồ sơ", desc: "Đề xuất đầu tư, Pre-FS/FS, hồ sơ giới thiệu và dữ liệu thẩm định." },
  { title: "Kết nối và huy động vốn", desc: "Nhà đầu tư, ngân hàng, quỹ, đối tác chiến lược và công nghệ." },
  { title: "Hỗ trợ triển khai", desc: "Thủ tục, đối thoại các bên, truyền thông và xử lý vướng mắc." },
];

export const promotion = {
  lead: "Phối hợp cơ quan ngoại giao, hiệp hội và tổ chức quốc tế để tạo các hoạt động xúc tiến có mục tiêu.",
  activities: [
    "Diễn đàn Đầu tư Quốc tế",
    "Làm việc với Đại sứ quán",
    "Kết nối doanh nghiệp (B2B)",
    "Xúc tiến đầu tư quốc tế",
    "Giao lưu và kết nối quốc tế",
  ],
  channels: [
    {
      title: "Cơ quan ngoại giao",
      desc: "Kênh phối hợp giúp kết nối chương trình xúc tiến, làm việc song phương và giới thiệu cơ hội đầu tư có chọn lọc.",
    },
    {
      title: "Hiệp hội và tổ chức quốc tế",
      desc: "Phát triển mạng lưới chuyên gia, doanh nghiệp, tổ chức xúc tiến và định chế tài chính theo từng lĩnh vực.",
    },
    {
      title: "Diễn đàn và B2B matching",
      desc: "Tổ chức sự kiện, hội thảo, chương trình kết nối doanh nghiệp và truyền thông cơ hội đầu tư; kết nối quốc tế và làm việc với đại diện cơ quan ngoại giao.",
    },
  ],
};

export const members: Member[] = [
  { name: "Trung tâm Nghiên cứu, Tư vấn Đầu tư, Thương mại và Du lịch", role: "Nghiên cứu chiến lược, tư vấn chính sách và phát triển thị trường." },
  { name: "Trung tâm Thông tin và Tư vấn Đầu tư", role: "Cung cấp thông tin, dữ liệu và tư vấn hỗ trợ nhà đầu tư." },
  { name: "Công ty Cổ phần Marina Capital", role: "Đầu tư tài chính, quản lý vốn và phát triển dự án." },
  { name: "Công ty Cổ phần Phát triển Công nghệ Sinh Phú", role: "Phát triển, ứng dụng và chuyển giao công nghệ xanh và bền vững." },
  { name: "Công ty Cổ phần Phát triển Cộng đồng An Sinh Việt", role: "Phát triển cộng đồng an sinh xã hội và nâng cao chất lượng sống." },
  { name: "Công ty Cổ phần Tư vấn và Đầu tư Invest Global", role: "Tư vấn đầu tư, thẩm định và hỗ trợ triển khai dự án." },
  { name: "Công ty Cổ phần Tư vấn Synectics", role: "Tư vấn chiến lược, chuyển đổi số và đổi mới mô hình quản trị dự án trong lĩnh vực đường sắt." },
];

/** Hà Nội — điểm gốc của hải đồ */
export const origin = { lon: 105.85, lat: 21.03, label: "Hà Nội" };

export const network: NetworkNode[] = [
  { id: "nga", country: "Nga", sectors: ["Năng lượng, dầu khí", "Công nghiệp nặng", "Khoa học và công nghệ"], lon: 37.6, lat: 55.75 },
  { id: "an-do", country: "Ấn Độ", sectors: ["Năng lượng tái tạo", "Công nghệ thông tin", "Dược phẩm"], lon: 77.2, lat: 28.6 },
  { id: "nhat-ban", country: "Nhật Bản", sectors: ["Công nghệ", "Tài chính"], lon: 139.7, lat: 35.7 },
  { id: "singapore", country: "Singapore", sectors: ["Tài chính, ngân hàng", "Logistics và hạ tầng", "Đổi mới sáng tạo"], lon: 103.8, lat: 1.35 },
  { id: "thai-lan", country: "Thái Lan", sectors: ["Nông nghiệp công nghệ cao", "Du lịch"], lon: 100.5, lat: 13.75 },
  { id: "canada", country: "Canada", sectors: ["Nông nghiệp công nghệ cao", "Khoáng sản và năng lượng", "Giáo dục và đào tạo"], lon: -75.7, lat: 45.4 },
  { id: "hoa-ky", country: "Hoa Kỳ", sectors: ["Công nghệ cao", "Năng lượng", "Tài chính"], lon: -77.0, lat: 38.9 },
];

export const internationalNetwork = [
  "Mạng lưới chuyên gia",
  "Quỹ đầu tư và các tổ chức, định chế tài chính",
  "Hiệp hội và tổ chức quốc tế",
];

/**
 * Brief §10.4: không dùng hình Quốc huy; logo đối tác chỉ hiển thị khi được phép.
 * Vì vậy trang Đối tác hiển thị TÊN; bật logo bằng SHOW_PARTNER_LOGOS khi có xác nhận.
 */
export const SHOW_PARTNER_LOGOS = false;

export const partnerGroups: PartnerGroup[] = [
  {
    id: "co-quan-nha-nuoc",
    title: "Bộ, ngành hỗ trợ và đồng hành",
    partners: [
      "Văn phòng Chính phủ",
      "Bộ Nông nghiệp và Môi trường",
      "Bộ Tài chính",
      "Bộ Công Thương",
      "Bộ Y tế",
      "Bộ Khoa học và Công nghệ",
      "Cục Đầu tư nước ngoài (FIA), Bộ Tài chính",
      "Cục Xúc tiến thương mại (Vietrade), Bộ Công Thương",
    ],
  },
  {
    id: "dinh-che-tai-chinh",
    title: "Định chế tài chính quốc tế",
    partners: ["IFC — International Finance Corporation", "ADB — Asian Development Bank", "IIB — International Investment Bank"],
  },
  {
    id: "ngan-hang",
    title: "Ngân hàng Việt Nam",
    partners: ["MB Bank", "BIDV", "VietinBank", "Vietcombank"],
  },
  {
    id: "tap-doan-quoc-te",
    title: "Tập đoàn và tổ chức quốc tế",
    partners: ["ACME (Ấn Độ)", "Suzlon (Ấn Độ)", "World Trade Center Mumbai", "Deloitte"],
  },
  {
    id: "doanh-nghiep-viet-nam",
    title: "Tập đoàn, khu công nghiệp và doanh nghiệp Việt Nam",
    partners: [
      "Stavian Group",
      "Khu Công nghệ cao Hòa Lạc",
      "DEEP C Industrial Zones",
      "GAET",
      "Eureka Linh Trường",
      "Minh Trung Group",
      "Dabaco Group",
      "IDI Group",
      "Tạp chí Kinh tế Việt Nam",
    ],
  },
  {
    id: "ngoai-giao",
    title: "Cơ quan ngoại giao và tổ chức quốc tế",
    note: "Các Đại sứ quán, tổ chức phi chính phủ và hiệp hội quốc tế đồng hành trong xúc tiến đầu tư và ngoại giao kinh tế.",
    partners: [
      "Đại sứ quán Việt Nam tại Ấn Độ",
      "Đại sứ quán Ấn Độ tại Việt Nam",
      "Đại sứ quán Việt Nam tại Canada",
      "Đại sứ quán Canada tại Việt Nam",
      "IICCI — Indian Importers Chambers of Commerce and Industry",
      "ISFA — Indian Small Business & Franchise Association",
      "Infrastructure Asia",
      "Federation of Indian Industry",
      "CABC — Canada-ASEAN Business Council",
      "CanCham Vietnam",
      "ACMA — Automotive Component Manufacturers Association of India",
      "IMC Chamber of Commerce and Industry",
    ],
  },
];

export const strategicPartners = [
  {
    id: "acme",
    name: "ACME",
    country: "Ấn Độ",
    field: "Hydrogen và Ammonia xanh",
    text: "Invest Global là đại diện tại Việt Nam của Tập đoàn ACME trong lĩnh vực Hydrogen và Ammonia xanh.",
    image: "/images/photos/acme-pm.webp",
    caption:
      "Thủ tướng Chính phủ Lê Minh Hưng tiếp ông Sanjay Dhawan, Phó Chủ tịch Tập đoàn ACME, ngày 12/9/2026 tại New Delhi.",
    credit: "Ảnh: TTXVN",
  },
  {
    id: "suzlon",
    name: "Suzlon",
    country: "Ấn Độ",
    field: "Điện gió",
    text: "Invest Global là đại diện tại Việt Nam của Tập đoàn Suzlon trong lĩnh vực điện gió.",
    image: "/images/photos/suzlon.webp",
    caption: "Invest Global cùng Suzlon tại triển lãm năng lượng quốc tế.",
    needsReview: true,
  },
];

export const events: EventItem[] = [
  {
    slug: "ngai-dai-su-an-do-tham-vneconomy",
    date: "2026-04-01",
    dateLabel: "01/04/2026",
    title: "Đại sứ Ấn Độ Tshering W. Sherpa thăm VnEconomy và Invest Global",
    venue: "BMC Center, Hà Nội",
    organizers: "VnEconomy, Invest Global",
    image: "/images/photos/an-do-2.webp",
    kind: "ngoai-giao",
  },
  {
    slug: "dai-su-canada-tham-vneconomy",
    date: "2026-01-01",
    dateLabel: "2026",
    title: "Đại sứ Canada Jim Nickel thăm VnEconomy và Invest Global",
    venue: "BMC Center, Hà Nội",
    organizers: "VnEconomy, Invest Global",
    image: "/images/photos/canada-1.webp",
    kind: "ngoai-giao",
    needsReview: true,
  },
  {
    slug: "thu-tuong-tiep-acme",
    date: "2026-09-12",
    dateLabel: "12/09/2026",
    title: "Thủ tướng Lê Minh Hưng tiếp Phó Chủ tịch Tập đoàn ACME",
    venue: "New Delhi, Ấn Độ",
    organizers: "Bên lề Hội nghị Thượng đỉnh BRICS lần thứ 18",
    detail: "Invest Global là đại diện tại Việt Nam của ACME trong lĩnh vực Hydrogen và Ammonia xanh.",
    image: "/images/photos/acme-pm.webp",
    kind: "doi-tac",
    credit: "Ảnh: TTXVN",
  },
  {
    slug: "interactive-meeting-wtc-mumbai",
    date: "2026-05-08",
    dateLabel: "08/05/2026",
    title: "Interactive Meeting with International Investment, Trade & Tourism Alliance (Invest Global)",
    venue: "Board Room, tầng 31, MVIRDC World Trade Center Mumbai",
    organizers: "Chủ trì: Dr. Vijay Kalantri, Chủ tịch MVIRDC WTC Mumbai, Chủ tịch All India Association of Industries",
    detail:
      "Ngành trọng tâm: năng lượng; công nghệ và kinh tế số; chế biến và sản xuất; dược và y tế; logistics và kết nối; du lịch và hàng không; nông nghiệp và nuôi trồng thủy sản.",
    image: "/images/events/2026-05-08-wtc-mumbai.webp",
    kind: "su-kien",
  },
  {
    slug: "ket-noi-doanh-nghiep-cii",
    date: "2026-04-07",
    dateLabel: "07/04/2026",
    title: "Kết nối doanh nghiệp đa ngành nhân chuyến thăm của Liên đoàn Công nghiệp Ấn Độ (CII)",
    venue: "Đại sứ quán Ấn Độ, Hà Nội",
    organizers: "VPBA, CII, Invest Global",
    image: "/images/events/2026-04-07-cii.webp",
    kind: "su-kien",
  },
  {
    slug: "duoc-pham-thiet-bi-y-te",
    date: "2026-03-25",
    dateLabel: "25/03/2026",
    title: "Kết nối doanh nghiệp Ấn Độ – Việt Nam trong lĩnh vực dược phẩm và thiết bị y tế",
    venue: "Đại sứ quán Ấn Độ, Hà Nội",
    organizers: "INCHAM, Invest Global",
    image: "/images/events/2026-03-25-duoc-pham.webp",
    kind: "su-kien",
  },
  {
    slug: "gap-go-doanh-nghiep-icc",
    date: "2024-09-10",
    dateLabel: "10/09/2024",
    title: "Gặp gỡ doanh nghiệp đa ngành Ấn Độ – Việt Nam nhân chuyến thăm của Phòng Thương mại Ấn Độ (ICC)",
    venue: "Phòng họp Invest Global, 98 Hoàng Quốc Việt, Hà Nội",
    organizers: "ICC, INCHAM, Invest Global",
    image: "/images/events/2024-09-10-icc.webp",
    kind: "su-kien",
  },
  {
    slug: "india-vietnam-business-meet-2023",
    date: "2023-11-24",
    dateLabel: "24/11/2023",
    title: "India – Vietnam Business Meet",
    venue: "Hà Nội",
    organizers: "FICCI, INCHAM, Invest Global",
    image: "/images/events/2023-11-24-business-meet.webp",
    kind: "su-kien",
  },
  {
    slug: "giao-thuong-cong-nghiep-o-to",
    date: "2022-08-22",
    dateLabel: "22/08/2022",
    title: "Giao thương doanh nghiệp Ấn Độ – Việt Nam trong lĩnh vực công nghiệp ô tô",
    venue: "Đại sứ quán Ấn Độ, Hà Nội",
    organizers: "ACMA, VCCI, Invest Global",
    image: "/images/events/2022-08-22-auto.webp",
    kind: "su-kien",
  },
];

export const certificates: Certificate[] = [
  { date: "09/2026", title: "Hệ sinh thái Kinh tế Biển Xanh (Blue Ocean Economy Ecosystem)" },
  { date: "09/2026", title: "Phần mềm Hệ quản trị Cổng thông tin Invest Global" },
  { date: "10/2025", title: "Nghiên cứu Chiến lược chuyển đổi xanh cho tỉnh Phú Thọ" },
  {
    date: "09/2025",
    title: "Nghiên cứu sản phẩm tín dụng và dịch vụ tài chính đặc thù cho hệ sinh thái công nghiệp đường sắt Việt Nam",
  },
  {
    date: "2023",
    title: "Nghiên cứu phát triển hệ sinh thái Du lịch, Dịch vụ và Công viên nông nghiệp trong quy hoạch phân khu Đô thị Sông Hồng",
  },
  { date: "2020", title: "Nghiên cứu Cổng thông tin xúc tiến đầu tư, thương mại và du lịch quốc tế Trade Global" },
  { date: "2019", title: "Nghiên cứu Cổng thông tin xúc tiến đầu tư, thương mại và du lịch quốc tế" },
  { date: "2017", title: "Nghiên cứu Khu nghỉ dưỡng và chăm sóc sức khỏe cho người cao tuổi" },
];
