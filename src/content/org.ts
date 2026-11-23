import type { Certificate, EventItem, Member, Milestone, NetworkNode, PartnerGroup } from "./types";

/* Slide 1, 2, 43 */
export const org = {
  name: "Liên minh Tư vấn và Đầu tư Quốc tế Invest Global",
  shortName: "Invest Global",
  subtitle: "Liên minh Tư vấn và Đầu tư Quốc tế",
  initiative: "Invest Global | Liên minh Kinh tế Biển Xanh",
  slogan: "Code to Success",
  sloganVi: "INVEST GLOBAL – “Mã khóa thành công”",
  tagline: ["Kết nối nguồn lực quốc tế", "Kiến tạo cơ hội đầu tư", "Thúc đẩy phát triển bền vững"],
  taglineText: "Kết nối nguồn lực quốc tế – Kiến tạo cơ hội đầu tư – Thúc đẩy phát triển bền vững",
  domain: "InvestGlobal.vn",
  leader: { name: "TS. Nguyễn Thị Thu Hà", title: "Tổng giám đốc Invest Global" },
  definition:
    "Liên minh Tư vấn và Đầu tư Quốc tế Invest Global (Liên minh Invest Global) là Liên minh giữa các Tổ chức, Hiệp hội, Doanh nghiệp và Chuyên gia hàng đầu trong nước và quốc tế để xây dựng chuỗi cung ứng dịch vụ, hỗ trợ thúc đẩy hoạt động xúc tiến đầu tư, thương mại, kết nối và thu xếp nguồn vốn đầu tư nước ngoài FDI vào Việt Nam.",
  contact: {
    email: "investglobalvn@gmail.com",
    hotline: "098 273 76 79",
    hotlineHref: "tel:+84982737679",
    headquarters: "Tầng 3, Trung tâm Hội nghị Quốc tế (Văn phòng Chính phủ), 35 Hùng Vương, Ba Đình, Hà Nội",
    office: "Tầng 10, tòa nhà 98 Hoàng Quốc Việt, Nghĩa Đô, Hà Nội",
  },
};

/* Slide 2 */
export const founders = [
  { short: "VAFIE", name: "Hiệp hội Doanh nghiệp đầu tư nước ngoài (VAFIE)", logo: "/images/partners/vafie.webp" },
  { short: "VPBA", name: "Hội Doanh nhân Tư nhân Việt Nam (VPBA)", logo: "/images/partners/vpba.webp" },
  { short: "VSA", name: "Hiệp hội Nuôi biển Việt Nam (VSA)", logo: "/images/partners/vsa.webp" },
  { short: "VnEconomy", name: "Tạp chí Kinh tế Việt Nam (Vneconomy)", logo: "/images/partners/vneconomy.webp" },
  { short: "VACNE", name: "Hội bảo vệ Thiên nhiên và Môi trường Việt Nam (VACNE)", logo: "/images/partners/vacne.webp" },
];

/* Slide 3 */
export const foundation = {
  title: "Nền tảng Liên minh Invest Global",
  items: [
    { title: "Định vị 2026–2035", text: "Kinh tế xanh, Kinh tế biển xanh, Kinh tế bạc." },
    { title: "Tầm nhìn", text: "Trở thành tổ chức nghiên cứu, tư vấn và kết nối đầu tư, thương mại có uy tín với mạng lưới toàn cầu" },
    { title: "Sứ mệnh", text: "Gia tăng giá trị cho đối tác với dịch vụ tư vấn theo tiêu chuẩn quốc tế;" },
  ],
  valuesTitle: "Giá trị cốt lõi",
  values: ["Tin cậy", "Kết nối", "Chuyên nghiệp", "Bền vững"],
};

/* Slide 4 */
export const strategy = {
  title: "Mô hình chiến lược 2026 - 2035",
  lead: "Ba trục chiến lược được hỗ trợ bởi sáu nền tảng dữ liệu và tạo bốn nhóm kết quả trọng tâm.",
  axesTitle: "03 trục chiến lược",
  axes: ["Kinh tế xanh", "Kinh tế biển xanh", "Kinh tế bạc"],
  platformsTitle: "06 nền tảng",
  platforms: ["Dữ liệu", "Công nghệ", "Tài sản trí tuệ", "Tài chính", "Thương mại toàn cầu", "ESG"],
  outcomesTitle: "04 nhóm kết quả",
  outcomes: [
    "FDI thế hệ mới",
    "Chuyển giao & ứng dụng công nghệ",
    "Doanh nghiệp Việt Nam tham gia sâu chuỗi giá trị",
    "Sản phẩm Việt mở rộng thị trường quốc tế",
  ],
};

/* Slide 5 */
export const milestonesTitle = "Các cột mốc phát triển";
export const milestones: Milestone[] = [
  { year: "2017", text: "Nghiên cứu khu nghỉ dưỡng và chăm sóc sức khỏe cho người cao tuổi." },
  { year: "2020", text: "Phát triển cổng thông tin xúc tiến đầu tư, thương mại và du lịch quốc tế." },
  { year: "2023", text: "Nghiên cứu hệ sinh thái Du lịch, Dịch vụ và Công viên nông nghiệp trong quy hoạch phân khu Đô thị Sông Hồng." },
  { year: "2024", text: "Thúc đẩy ngoại giao kinh tế, kết nối doanh nghiệp Việt Nam-Ấn Độ." },
  { year: "2025", text: "Nghiên cứu sản phẩm tài chính cho hệ sinh thái đường sắt và chiến lược chuyển đổi xanh" },
  { year: "2026", text: "Nghiên cứu kinh tế biển xanh; Kinh tế xanh; Kinh tế bạc", current: true },
  { year: "2027-2030", text: "Thương mại hóa công nghệ lõi, công nghệ chiến lược, công nghệ cao" },
];
export const leaderQuote = "Mỗi giai đoạn phát triển gắn kết giữa hiệu quả và giá trị phát triển bền vững";

/* Slide 6–7 */
export const modules = {
  title: "Cổng thông tin đầu tư quốc tế",
  lead: "Nền tảng số hóa hoạt động xúc tiến đầu tư, thương mại, ESG và kết nối chuỗi giá trị",
  systemTitle: "Hệ thống giải pháp xúc tiến đầu tư quốc tế",
  items: [
    { module: "Module 1", name: "Invest Portal", desc: "Cổng thông tin xúc tiến đầu tư" },
    { module: "Module 2", name: "Invest Service", desc: "Dịch vụ tư vấn đầu tư" },
    { module: "Module 3", name: "Invest Link", desc: "Kết nối đối tác và địa phương" },
    { module: "Module 4", name: "Invest Club", desc: "Câu lạc bộ nhà đầu tư" },
    { module: "Module 5", name: "Invest Green", desc: "Đầu tư xanh ESG" },
    { module: "Module 6", name: "Invest Space", desc: "Không gian kết nối sự kiện" },
  ],
};

/* Slide 8 */
export const differentiatorsTitle = "Invest Global “Chuyên sâu tạo sự khác biệt”";
export const differentiators = [
  { title: "Am hiểu thị trường Việt Nam", desc: "Thông tin, chính sách, quy hoạch, địa phương và hệ sinh thái doanh nghiệp." },
  { title: "Mạng lưới quốc tế", desc: "Cơ quan ngoại giao, hiệp hội, doanh nghiệp, nhà đầu tư và tổ chức xúc tiến." },
  { title: "Chuỗi dịch vụ", desc: "Nghiên cứu, pháp lý, dự án, vốn, đối tác, nhân lực, truyền thông." },
  { title: "Khả năng điều phối", desc: "Tập hợp chuyên gia và đối tác theo yêu cầu cụ thể từng dự án." },
  { title: "Nền tảng truyền thông", desc: "Cổng thông tin, diễn đàn, sự kiện và hệ sinh thái nội dung đầu tư." },
  { title: "Định hướng bền vững", desc: "Chuyển đổi xanh, công nghệ, hạ tầng hiện đại và giá trị dài hạn." },
];

/* Slide 9 */
export const servicesTitle = "Chuỗi dịch vụ";
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
      "Khảo sát nhu cầu nhân lực theo ngành/dự án.",
      "Kết nối cơ sở đào tạo, chuyên gia và doanh nghiệp.",
      "Xây dựng hồ sơ xúc tiến và nội dung giới thiệu dự án.",
      "Tổ chức hội nghị, diễn đàn, hội thảo và kết nối doanh nghiệp.",
    ],
  },
];

/* Slide 10 */
export const processTitle = "Quy trình 06 bước vòng đời dự án";
export const processLead = "Quy trình được tổ chức theo logic từ tiếp nhận nhu cầu đến hỗ trợ triển khai.";
export const processSteps = [
  { title: "Tiếp nhận nhu cầu", desc: "Mục tiêu đầu tư, ngành, quy mô, thị trường, đối tác, nhu cầu vốn." },
  { title: "Nghiên cứu và sàng lọc", desc: "Chính sách, địa điểm, quy hoạch, thị trường và rủi ro." },
  { title: "Cấu trúc dự án", desc: "Mô hình đầu tư, đối tác, công nghệ, pháp lý và lộ trình." },
  { title: "Lập hồ sơ", desc: "Đề xuất đầu tư, Pre-FS/FS, hồ sơ giới thiệu và dữ liệu thẩm định." },
  { title: "Kết nối và huy động vốn", desc: "Nhà đầu tư, ngân hàng, quỹ, đối tác chiến lược và công nghệ." },
  { title: "Hỗ trợ triển khai", desc: "Thủ tục, đối thoại các bên, truyền thông và xử lý vướng mắc." },
];

/* Slide 18 */
export const promotion = {
  title: "Xúc tiến đầu tư & ngoại giao quốc tế",
  lead: "Phối hợp cơ quan ngoại giao, hiệp hội và tổ chức quốc tế để tạo các xúc tiến có mục tiêu",
  activitiesTitle: "Hoạt động xúc tiến & kết nối quốc tế",
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
      desc: ["Kênh phối hợp giúp kết nối chương trình xúc tiến, làm việc song phương và giới thiệu cơ hội đầu tư có chọn lọc."],
    },
    {
      title: "Hiệp hội & tổ chức quốc tế",
      desc: ["Phát triển mạng lưới chuyên gia, doanh nghiệp, tổ chức xúc tiến và định chế tài chính theo từng lĩnh vực."],
    },
    {
      title: "Diễn đàn & B2B matching",
      desc: [
        "Tổ chức sự kiện, hội thảo, chương trình kết nối doanh nghiệp và truyền thông cơ hội đầu tư.",
        "Kết nối quốc tế và làm việc với đại diện cơ quan ngoại giao.",
      ],
    },
  ],
};

/* Slide 19 */
export const networkPage = {
  title: "Hệ thống thành viên mạng lưới toàn cầu",
  lead: "Năng lực được tổ chức theo mô hình: Doanh nghiệp thành viên, đối tác quốc tế và các chuyên gia quốc tế",
  vnTitle: "Hệ thống tại Việt Nam",
  globalTitle: "Mạng lưới toàn cầu & đối tác",
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

export const network: NetworkNode[] = [
  { country: "Ấn Độ", sectors: ["Năng lượng tái tạo", "Công nghệ thông tin", "Dược phẩm"] },
  { country: "Nga", sectors: ["Năng lượng, dầu khí", "Công nghiệp nặng", "Khoa học và công nghệ"] },
  { country: "Nhật Bản", sectors: ["Công nghệ", "Tài chính"] },
  { country: "Singapore", sectors: ["Tài chính, ngân hàng", "Logistics và hạ tầng", "Đổi mới sáng tạo"] },
  { country: "Thái Lan", sectors: ["Nông nghiệp công nghệ cao", "Du lịch"] },
  { country: "Canada", sectors: ["Nông nghiệp công nghệ cao", "Khoáng sản và năng lượng", "Giáo dục và đào tạo"] },
  { country: "Hoa Kỳ", sectors: ["Công nghệ cao", "Năng lượng", "Tài chính"] },
  { country: "Quốc tế", sectors: ["Mạng lưới chuyên gia", "Quỹ đầu tư và các tổ chức, định chế tài chính", "Hiệp hội và tổ chức quốc tế"] },
];

/* Slide 20–22. Tên lấy từ chữ trên slide; với logo không kèm chữ, tên lấy từ chính logo. */
const L = (f: string) => `/images/logos/${f}.webp`;
export const partnerGroups: PartnerGroup[] = [
  {
    id: "bo-nganh",
    source: "slide 20",
    title: "Hỗ trợ và đồng hành của các Bộ ngành",
    partners: [
      { name: "Văn phòng Chính phủ", logo: L("vpcp") },
      { name: "Bộ Nông nghiệp và Môi trường", logo: L("bo-nn-mt") },
      { name: "Bộ Tài chính", logo: L("bo-tai-chinh") },
      { name: "Bộ Công thương", logo: L("bo-cong-thuong") },
      { name: "Bộ Y tế", logo: L("bo-y-te") },
      { name: "Bộ Khoa học và Công nghệ", logo: L("bo-khcn") },
      { name: "Bộ Tài chính\nCục Đầu tư nước ngoài", logo: L("fia") },
      { name: "Bộ Công thương\nCục xúc tiến thương mại", logo: L("vietrade") },
    ],
  },
  {
    id: "dinh-che-tap-doan",
    source: "slide 21",
    title: "Đối tác chiến lược: Định chế tài chính, Tập đoàn và doanh nghiệp",
    note: "Kết nối nguồn lực cho các dự án quy mô lớn FDI: Cảng biển, năng lượng tái tạo, đô thị biển, logistics và chuyển đổi số.",
    partners: [
      { name: "International Finance Corporation", logo: L("ifc") },
      { name: "Asian Development Bank", logo: L("adb") },
      { name: "International Investment Bank", logo: L("iib") },
      { name: "ACME", logo: L("acme") },
      { name: "Suzlon", logo: L("suzlon") },
      { name: "World Trade Center Mumbai", logo: L("wtc-mumbai") },
      { name: "Stavian Group", logo: L("stavian") },
      { name: "Hoa Lac Hi-tech Park", logo: L("hhtp") },
      { name: "DEEP C Industrial Zones", logo: L("deep-c") },
      { name: "MB Bank", logo: L("mb-bank") },
      { name: "Deloitte", logo: L("deloitte") },
      { name: "BIDV", logo: L("bidv") },
      { name: "VietinBank", logo: L("vietinbank") },
      { name: "Vietcombank", logo: L("vietcombank") },
      { name: "GAET", logo: L("gaet") },
      { name: "Tạp chí Kinh tế Việt Nam", logo: L("tap-chi-ktvn") },
      { name: "Eureka Linh Trường", logo: L("eureka") },
      { name: "Binh đoàn 15", logo: L("binh-doan-15") },
      { name: "Minh Trung Group", logo: L("minh-trung") },
      { name: "Dabaco Group", logo: L("dabaco") },
      { name: "IDI Group", logo: L("idi") },
    ],
  },
  {
    id: "ngoai-giao",
    source: "slide 22",
    title: "Cơ quan ngoại giao và tổ chức quốc tế",
    note: "Các Đại sứ quán, tổ chức phi Chính phủ, tổ chức hiệp hội quốc tế đồng hành trong hoạt động xúc tiến đầu tư và ngoại giao kinh tế.",
    banner: "Invest Global là cổng kết nối quốc tế cho dòng vốn FDI và kinh tế biển xanh",
    partners: [
      { name: "Viet Nam Embassy in India", logo: L("dsq-vn-an-do") },
      { name: "Indian Importers Chambers of Commerce and Industry", logo: L("iicci") },
      { name: "Indian Small Business & Franchise Association", logo: L("isfa") },
      { name: "Infrastructure Asia", logo: L("infrastructure-asia") },
      { name: "Federation of Indian Industry", logo: L("fii") },
      { name: "Viet Nam Embassy in Canada", logo: L("dsq-vn-canada") },
      { name: "Embassy of India Hanoi, Viet Nam", logo: L("dsq-an-do") },
      { name: "Canada-ASEAN Business Council", logo: L("cabc") },
      { name: "IMC Chamber of Commerce and Industry", logo: L("imc") },
      { name: "Automotive Component Manufacturers Association of India", logo: L("acma") },
      { name: "CanCham Vietnam", logo: L("cancham") },
      { name: "Canada Embassy in Viet Nam", logo: L("dsq-canada") },
    ],
  },
];

/* Slide 23 — giữ nguyên chữ và font (Tahoma Bold) */
export const strategicPartners = {
  title: "Đối tác chiến lược: Tập đoàn đa quốc gia có quy mô lớn trên thế giới",
  items: [
    {
      id: "acme",
      logo: "/images/logos/acme.webp",
      image: "/images/photos/acme-pm.webp",
      caption:
        "Thủ tướng Chính phủ Lê Minh Hưng tiếp ông Sanjay Dhawan, Phó Chủ tịch Tập đoàn ACME tại Ấn Độ. Invest Global là đại diện tại Việt Nam của Tập đoàn ACME (Ấn Độ) trong lĩnh vực Hydrogen và Ammonia xanh",
    },
    {
      id: "suzlon",
      logo: "/images/logos/suzlon.webp",
      image: "/images/photos/suzlon.webp",
      caption: "Invest Global là đại diện tại Việt Nam của Tập đoàn Suzlon (Ấn Độ) trong lĩnh vực điện gió",
    },
  ],
};

/* Slide 24 — thông tin đọc từ chính các poster trong slide */
export const indiaEventsTitle = "Đồng tổ chức xúc tiến thương mại và đầu tư giữa Ấn Độ - Việt Nam";
export const indiaEvents: EventItem[] = [
  {
    slug: "wtc-mumbai-2026",
    source: "slide 24",
    dateLabel: "8th May 2026 | 11.00 AM",
    title: "Interactive Meeting with International Investment, Trade & Tourism Alliance (Invest Global), Vietnam",
    venue: "Board Room, 31st Floor, Center 1, MVIRDC World Trade Center Mumbai Cuffe Parade - 400005.",
    organizers: "Dr. Vijay Kalantri, Chairman, MVIRDC World Trade Center Mumbai and President, All India Association of Industries",
    detail:
      "Key Sectors: Energy, Technology & Digital Economy, Processing and Manufacturing Industry, Pharmaceuticals & Healthcare, Logistics & Connectivity, Tourism & Aviation, Agriculture & Aquaculture",
    image: "/images/events/2026-05-08-wtc-mumbai.webp",
  },
  {
    slug: "duoc-pham-2026",
    source: "slide 24",
    dateLabel: "Hanoi, 25 March 2026",
    title: "Kết nối doanh nghiệp Ấn Độ - Việt Nam trong lĩnh vực dược phẩm & thiết bị y tế",
    subtitle: "India - Viet Nam Pharmaceutical & Medical Equipment Business Meet",
    venue: "Embassy of India, Vietnam",
    image: "/images/events/2026-03-25-duoc-pham.webp",
  },
  {
    slug: "cii-2026",
    source: "slide 24",
    dateLabel: "Hanoi, 7 April 2026",
    title: "Kết nối doanh nghiệp đa ngành nhân chuyến thăm của đoàn doanh nghiệp của Liên đoàn Công nghiệp Ấn Độ",
    subtitle: "Multi-sectoral Business Meet on the occasion of visit of delegation from Confederation of Indian Industry",
    venue: "Embassy of India, Vietnam",
    image: "/images/events/2026-04-07-cii.webp",
  },
  {
    slug: "icc-2024",
    source: "slide 24",
    dateLabel: "10th Sept 2024 at 15.00 - 17.00 hrs.",
    title: "Gặp gỡ doanh nghiệp đa ngành Ấn Độ - Việt Nam nhân chuyến thăm của đoàn đại biểu Phòng Thương mại Ấn Độ",
    subtitle: "India Vietnam Multi-sectoral Business Meet on the occasion of the visit of delegation from Indian Chamber of Commerce",
    venue: "Investglobal Meeting Room, 98 Hoang Quoc Viet Street, Hanoi",
    image: "/images/events/2024-09-10-icc.webp",
  },
  {
    slug: "business-meet-2023",
    source: "slide 24",
    dateLabel: "Hanoi, 24 November 2023",
    title: "India – Vietnam Business Meet",
    venue: "Embassy of India Hanoi",
    image: "/images/events/2023-11-24-business-meet.webp",
  },
  {
    slug: "auto-2022",
    source: "slide 24",
    dateLabel: "Hanoi, 22 August 2022",
    title: "Giao thương doanh nghiệp Ấn Độ - Việt Nam trong lĩnh vực công nghiệp ô tô",
    subtitle: "India Vietnam Business Meet on Auto Sector",
    venue: "Embassy of India, Vietnam",
    image: "/images/events/2022-08-22-auto.webp",
  },
];

/* Slide 25–26 */
export const ambassadorVisits = [
  {
    id: "an-do",
    source: "slide 25",
    title: "Đại sứ Đặc mệnh Toàn quyền Ấn Độ tại Việt Nam thăm VnEconomy/Invest Global",
    images: ["/images/photos/an-do-1.webp", "/images/photos/an-do-2.webp"],
  },
  {
    id: "canada",
    source: "slide 26",
    title: "Đại sứ Đặc mệnh Toàn quyền Canada tại Việt Nam thăm VnEconomy/Invest Global",
    images: ["/images/photos/canada-1.webp", "/images/photos/canada-2.webp"],
  },
];

/* Slide 27–30 */
export const certificatesTitle = "Bản quyền tác giả của Liên minh Invest Global";
export const certificates: Certificate[] = [
  { date: "Tháng 9 năm 2026", title: "Bản quyền Hệ sinh thái kinh tế biển xanh (Blue Ocean Economy Ecosystem)" },
  { date: "Tháng 9 năm 2026", title: "Bản quyền phần mềm Hệ quản trị Cổng thông tin Invest Global" },
  { date: "Tháng 10 năm 2025", title: "Bản quyền Nghiên cứu Chiến lược chuyển đổi xanh cho tỉnh Phú Thọ" },
  {
    date: "Tháng 9 năm 2025",
    title: "Bản quyền Nghiên cứu sản phẩm tín dụng và dịch vụ tài chính đặc thù, đặc biệt cho hệ sinh thái công nghiệp đường sắt Việt Nam",
  },
  {
    date: "Năm 2023",
    title: "Bản quyền Nghiên cứu Phát triển Hệ sinh thái Du lịch, Dịch vụ và Công viên nông nghiệp trong quy hoạch phân khu Đô thị Sông Hồng",
  },
  { date: "Năm 2020", title: "Bản quyền Nghiên cứu Cổng thông tin xúc tiến đầu tư, thương mại và du lịch quốc tế Trade Global" },
  { date: "Năm 2019", title: "Bản quyền Nghiên cứu Cổng thông tin xúc tiến đầu tư, thương mại và du lịch quốc tế" },
  { date: "Năm 2017", title: "Bản quyền Nghiên cứu Khu nghỉ dưỡng và chăm sóc sức khỏe cho người cao tuổi" },
];
