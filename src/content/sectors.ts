import type { Sector } from "./types";

/* Slide 11 */
export const sectorsTitle = "Lĩnh vực hoạt động trọng tâm";
export const sectorsLead =
  "Kết nối cơ hội đầu tư với công nghệ, nguồn vốn, thị trường và triển khai thực tế tại Việt Nam.";
export const roleTitle = "Vai trò của Invest Global";

/* Slide 12–17 */
export const sectors: Sector[] = [
  {
    slug: "nang-luong-sach",
    source: "slide 12",
    no: 1,
    title: "Năng lượng sạch & chuyển đổi xanh",
    overviewTitle: "Năng lượng sạch và chuyển đổi xanh",
    lead: "Kết nối địa điểm - Công nghệ - Vốn - Thị trường cho các cơ hội đầu tư dài hạn",
    summary: ["Điện gió, điện mặt trời.", "Hydrogen/Amoniac xanh.", "Lưu trữ năng lượng và giải pháp linh hoạt."],
    items: [
      {
        title: "Trọng tâm",
        body: [
          "Điện gió, điện mặt trời và lưu trữ năng lượng.",
          "Hydrogen/amoniac xanh và giải pháp năng lượng cho công nghiệp.",
          "Năng lượng cho hạ tầng biển và chuỗi cung ứng xanh.",
          "Sàng lọc địa điểm, công nghệ, thị trường; cấu trúc dự án và hồ sơ đầu tư.",
        ],
      },
    ],
    connectTargets: ["Nhà phát triển.", "Nhà sản xuất thiết bị.", "EPC.", "Quỹ hạ tầng, ngân hàng và khách hàng tiêu thụ."],
    role: "Sàng lọc cơ hội - Chuẩn hóa hồ sơ - Kết nối nguồn lực - Hỗ trợ đối thoại triển khai.",
    images: ["/images/sectors/lv1.webp"],
  },
  {
    slug: "ha-tang-logistics",
    source: "slide 13",
    no: 2,
    title: "Hạ tầng, giao thông & logistics",
    overviewTitle: "Hạ tầng, giao thông và logistics",
    lead: "Tích hợp quy hoạch, hạ tầng kết nối, công nghệ, cấu trúc vốn và xúc tiến đầu tư",
    summary: ["Đường sắt, cao tốc, sân bay.", "Cảng biển, trung tâm logistics.", "Chuỗi lạnh và logistics thông minh."],
    items: [
      { title: "Hạ tầng giao thông", body: ["Đường sắt, metro, giao thông đô thị, cảng và kết nối vùng."] },
      { title: "Logistics", body: ["Trung tâm logistics, kho bãi, chuỗi lạnh, cảng cạn và hạ tầng thương mại."] },
      { title: "Đô thị & TOD", body: ["Phát triển đô thị gắn hạ tầng và khai thác giá trị đất."] },
      { title: "Dịch vụ tư vấn", body: ["Pre-FS/FS, đối tác công nghệ, cấu trúc vốn và xúc tiến đầu tư."] },
    ],
    role: "Sàng lọc cơ hội - chuẩn hóa hồ sơ - kết nối nguồn lực - hỗ trợ đối thoại triển khai.",
    images: ["/images/sectors/lv2.webp"],
  },
  {
    slug: "cong-nghe-so",
    source: "slide 14",
    no: 3,
    title: "Công nghệ số, AI, bán dẫn và trung tâm dữ liệu",
    overviewTitle: "Công nghệ số, AI, điện tử – bán dẫn & trung tâm dữ liệu",
    lead: "Hạ tầng số làm nền tảng cho FDI thế hệ mới và các ngành công nghệ chiến lược",
    summary: ["Hạ tầng AI và trung tâm dữ liệu.", "Bán dẫn, điện tử và thiết bị thông minh.", "IoT, nền tảng số và an ninh mạng."],
    items: [
      { title: "Trung tâm dữ liệu", body: ["Điện, kết nối, đất, hạ tầng, thiết kế, khách hàng và cấu trúc đầu tư."] },
      { title: "AI và hạ tầng số", body: ["Hệ thống tính toán, dữ liệu, nền tảng số và ứng dụng doanh nghiệp."] },
      { title: "Điện tử và bán dẫn", body: ["Chuỗi cung ứng, vật liệu, đóng gói/kiểm thử, nhân lực và công nghệ."] },
      { title: "Nhân lực", body: ["Kết nối đào tạo và nhu cầu kỹ sư, chuyên gia công nghệ cao."] },
    ],
    role: "Sàng lọc cơ hội - Chuẩn hóa hồ sơ - Kết nối nguồn lực - Hỗ trợ triển khai.",
    images: ["/images/sectors/lv3.webp"],
  },
  {
    slug: "cong-nghiep-nong-nghiep",
    source: "slide 15",
    no: 4,
    title: "Công nghiệp, nông nghiệp & chuỗi cung ứng",
    overviewTitle: "Công nghiệp, nông nghiệp & chuỗi cung ứng",
    lead: "Kết nối FDI với năng lực sản xuất trong nước và thị trường quốc tế",
    summary: ["Sản xuất công nghệ cao.", "Nông nghiệp công nghệ cao và chế biến.", "Chuỗi cung ứng, xuất khẩu và truy xuất nguồn gốc."],
    items: [
      {
        title: "Năng lực kết nối đa ngành",
        body: [
          "Phạm vi từ công nghiệp chế tạo, ô tô, phụ tùng, dược phẩm, nông nghiệp, chế biến thực phẩm, gỗ, điện, điện tử đến các ngành công nghiệp hỗ trợ.",
        ],
      },
      { title: "Công nghiệp chế tạo", body: ["Nhà máy, dây chuyền, vật liệu, tự động hóa."] },
      { title: "Nông nghiệp CNC", body: ["Vùng nguyên liệu, nuôi trồng, chế biến sâu, truy xuất."] },
      {
        title: "Chuỗi cung ứng & thương mại quốc tế",
        body: ["Nhà cung cấp, logistics, xuất nhập khẩu, tiêu chuẩn; hội chợ, triển lãm, phân phối."],
      },
    ],
    role: "Sàng lọc cơ hội - Chuẩn hóa hồ sơ - Kết nối nguồn lực - Hỗ trợ đối thoại triển khai.",
    images: ["/images/sectors/lv4.webp", "/images/sectors/lv4-2.webp"],
  },
  {
    slug: "thuong-mai-du-lich-y-te",
    source: "slide 16",
    no: 5,
    title: "Thương mại, dịch vụ, du lịch và chăm sóc sức khỏe",
    overviewTitle: "Thương mại, dịch vụ, du lịch & chăm sóc sức khỏe",
    lead: "Nhóm lĩnh vực có khả năng kết hợp đầu tư, thương mại, trải nghiệm và phát triển thị trường",
    summary: [
      "Thương mại, bán lẻ và dịch vụ cao cấp.",
      "Du lịch, nghỉ dưỡng và bất động sản dịch vụ.",
      "Y tế chất lượng cao và giáo dục quốc tế.",
    ],
    items: [
      { title: "Du lịch & nghỉ dưỡng", body: ["Dự án điểm đến, sinh thái, trải nghiệm và dịch vụ."] },
      { title: "Y tế & sức khỏe", body: ["Dịch vụ chăm sóc sức khỏe, dược phẩm và công nghệ y tế."] },
      { title: "Thương mại", body: ["Trung tâm thương mại, phân phối và kết nối thị trường."] },
      { title: "Giáo dục & nhân lực", body: ["Đào tạo, kỹ năng, hợp tác quốc tế và nguồn nhân lực."] },
    ],
    role: "Sàng lọc cơ hội - Chuẩn hóa hồ sơ - Kết nối nguồn lực - Hỗ trợ đối thoại triển khai.",
    images: ["/images/sectors/lv5.webp"],
  },
  {
    slug: "von-xanh-esg",
    source: "slide 17",
    no: 6,
    title: "Thu xếp vốn xanh gắn với ESG",
    overviewTitle: "Thu xếp vốn xanh gắn với ESG",
    lead: "Tiêu chuẩn hóa để dự án đáp ứng điều kiện giải ngân",
    summary: [
      "ESG, đánh giá tác động và phát triển bền vững.",
      "Dữ liệu, minh bạch và đo lường hiệu quả.",
      "Chuẩn hóa hồ sơ và kết nối dòng vốn xanh.",
    ],
    items: [
      {
        title: "Giá trị tư vấn",
        body: [
          "Chuẩn hóa dữ liệu và hồ sơ dự án.",
          "Xác định tiêu chuẩn và điều kiện huy động vốn.",
          "Kết nối cấu trúc tài chính, định chế và nhà đầu tư phù hợp.",
          "Tích hợp ESG, chuyển đổi xanh và giá trị đầu tư dài hạn.",
        ],
      },
    ],
    message: "Dự án tốt cần đồng thời có dữ liệu, cấu trúc, tiêu chuẩn, khả năng thẩm định và cơ chế triển khai.",
    role: "Sàng lọc cơ hội - Chuẩn hóa hồ sơ - Kết nối nguồn lực - Hỗ trợ triển khai.",
    images: ["/images/sectors/lv6.webp"],
  },
];
