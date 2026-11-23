import type { Pillar } from "./types";

/* Slide 31–33 */
export const blueEconomy = {
  title: "Kinh tế Biển Xanh",
  subtitle: "9 trụ cột chiến lược cho tương lai bền vững của kinh tế biển Việt Nam",
  focusTitle15: "Định hướng trọng tâm của các trụ cột 1 – 5",
  focusTitle69: "Định hướng trọng tâm của các trụ cột 6 – 9",
  goalsTitle: "Mục tiêu hướng tới",
  goals: [
    "Bảo vệ hệ sinh thái biển",
    "Thúc đẩy đổi mới sáng tạo",
    "Tạo việc làm chất lượng cao",
    "Tăng khả năng thích ứng khí hậu",
    "Thúc đẩy tăng trưởng vùng",
    "Hướng tới Net Zero và SDGs",
  ],
};

const IMG = (f: string) => `/images/pillars/${f}.webp`;

/* Slide 34–42 */
export const pillars: Pillar[] = [
  {
    slug: "nuoi-bien-offshore",
    source: "slide 34",
    no: 1,
    title: "Nuôi biển công nghiệp offshore",
    shortTitle: "Nuôi biển công nghiệp offshore",
    excerpt: "Trung tâm nuôi biển xa bờ quy mô lớn, vận hành bằng năng lượng tái tạo.",
    focusTitle: "Nuôi biển công nghiệp ngoài khơi",
    focus: [
      "Trung tâm nuôi biển quy mô lớn, xa bờ, vận hành bằng năng lượng tái tạo.",
      "Chuẩn hóa chuỗi giá trị từ con giống, quy trình nuôi đến chế biến sâu.",
      "Tích hợp nhà máy chế biến và kho lạnh đa tầng ngay trên biển.",
    ],
    tagline: "Trung tâm nuôi biển xa bờ – xanh, thông minh, bền vững",
    items: [
      {
        title: "Mô hình xa bờ",
        body: [
          "Trung tâm công nghiệp nuôi biển quy mô lớn, xa bờ.",
          "Vận hành hoàn toàn bằng năng lượng tái tạo, có hệ thống lưu trữ năng lượng xanh.",
        ],
      },
      {
        title: "Chuẩn hóa chuỗi giá trị",
        body: [
          "Chuẩn hóa từ nguồn giống, quy trình nuôi trồng đến khâu chế biến.",
          "Năng suất cao, ổn định; chất lượng an toàn, truy xuất minh bạch.",
        ],
      },
      {
        title: "Vận hành thông minh",
        body: ["Ứng dụng IoT, AI, Blockchain và dữ liệu thời gian thực.", "Tối ưu chi phí, hiệu quả vận hành và giảm tác động môi trường."],
      },
      {
        title: "Hạ tầng tại chỗ",
        body: ["Tích hợp nhà máy chế biến sâu ngay tại thực địa.", "Hệ thống kho lạnh đa tầng, bảo quản khép kín."],
      },
    ],
    highlight:
      "Xây dựng các trung tâm nuôi biển công nghiệp offshore hiện đại, ứng dụng công nghệ cao, sử dụng 100% năng lượng tái tạo, kiến tạo nền kinh tế biển xanh và bền vững.",
    chain: {
      title: "Chuỗi giá trị khép kín – từ biển đến bàn ăn",
      steps: ["Nguồn giống chất lượng cao", "Nuôi trồng thông minh", "Chế biến sâu", "Bảo quản lạnh", "Vận chuyển lạnh", "Phân phối toàn cầu"],
    },
    benefits: [],
    thumb: IMG("tc1-thumb"),
    images: [IMG("tc1-1")],
  },
  {
    slug: "nang-luong-tai-tao-tren-bien",
    source: "slide 35",
    no: 2,
    title: "Năng lượng sạch và tái tạo trên biển",
    shortTitle: "Năng lượng tái tạo trên biển",
    excerpt: "Điện gió ngoài khơi, điện mặt trời nổi, Hydrogen và Ammonia xanh.",
    focusTitle: "Năng lượng biển sạch và tái tạo",
    focus: [
      "Điện gió ngoài khơi – trụ cột năng lượng của kinh tế biển.",
      "Điện mặt trời nổi, tối ưu diện tích mặt biển.",
      "Năng lượng sóng, thủy triều; Hydrogen và Ammonia xanh.",
    ],
    tagline: "Năng lượng xanh – động lực cho kinh tế biển bền vững",
    values: [
      { title: "Sạch", desc: "Giảm phát thải carbon" },
      { title: "Hiện đại", desc: "Công nghệ tiên tiến, vận hành tối ưu" },
      { title: "Tự chủ", desc: "Tự chủ năng lượng, an ninh quốc gia" },
    ],
    items: [
      { title: "Điện gió ngoài khơi", body: ["Trang trại gió quy mô lớn, công suất cao.", "Sản lượng ổn định, vận hành dài hạn."] },
      { title: "Điện mặt trời nổi", body: ["Tận dụng diện tích mặt biển rộng lớn.", "Kết hợp nuôi trồng thủy sản và công trình nổi."] },
      { title: "Sóng biển & thủy triều", body: ["Nguồn năng lượng tự nhiên, ổn định, dự báo được.", "Tiềm năng lớn tại vùng ven bờ và hải đảo."] },
      {
        title: "Hydrogen & Ammonia xanh",
        body: ["Điện phân nước tạo H₂ xanh, tổng hợp NH₃ xanh.", "Ứng dụng cho công nghiệp, hàng hải, xuất khẩu năng lượng."],
      },
      {
        title: "Điện hạt nhân nhỏ (SMR)",
        body: ["Công suất lớn, an toàn, phát thải thấp.", "Nguồn điện ổn định cho dự án trọng điểm ven biển, hải đảo."],
      },
    ],
    benefitsTitle: "Giá trị mang lại",
    benefits: [
      { title: "Giảm phát thải", desc: "Đóng góp mục tiêu Net Zero" },
      { title: "An ninh năng lượng", desc: "Tự chủ, độc lập, bền vững" },
      { title: "Phát triển kinh tế biển", desc: "Tạo việc làm, thu hút đầu tư" },
      { title: "Đổi mới công nghệ", desc: "Làm chủ công nghệ mới" },
      { title: "Bảo vệ môi trường", desc: "Bảo tồn hệ sinh thái biển" },
    ],
    thumb: IMG("tc2-thumb"),
    images: [IMG("tc2-1"), IMG("tc2-2")],
  },
  {
    slug: "ha-tang-bien-thong-minh",
    source: "slide 36",
    no: 3,
    title: "Hạ tầng biển thông minh, thích ứng khí hậu",
    shortTitle: "Hạ tầng biển thông minh",
    excerpt: "Cảng nước sâu, hạ tầng kết nối, đô thị biển thích ứng khí hậu.",
    focusTitle: "Hạ tầng biển thông minh",
    focus: [
      "Cảng nước sâu, cảng trung chuyển và cảng chuyên dụng.",
      "Hạ tầng giao thông kết nối đồng bộ đất liền với biển, đảo.",
      "Đô thị biển thông minh, thích ứng biến đổi khí hậu.",
    ],
    tagline: "Hạ tầng thông minh – kết nối liên hoàn – thích ứng khí hậu – phát triển bền vững",
    items: [
      {
        title: "Cảng biển quốc tế",
        body: [
          "Cảng nước sâu, cảng trung chuyển và cảng chuyên dụng.",
          "Cảng thông minh, năng lực tiếp nhận tàu trọng tải lớn.",
          "Kết nối logistics toàn cầu.",
        ],
      },
      {
        title: "Hạ tầng kết nối",
        body: [
          "Giao thông đồng bộ giữa đất liền và hải đảo.",
          "Đường bộ ven biển, đường sắt tốc độ cao, cảng hàng không quốc tế.",
          "Cáp quang biển, viễn thông phủ sóng vùng biển.",
        ],
      },
      {
        title: "Đô thị biển thông minh",
        body: [
          "Khu đô thị ven biển thông minh, quy hoạch xanh.",
          "Tích hợp năng lượng tái tạo, quản lý môi trường thông minh.",
          "An ninh, an toàn và dịch vụ công thông minh.",
        ],
      },
    ],
    sidePanel: {
      title: "Chống chịu biến đổi khí hậu",
      items: [
        { title: "Bờ kè & đê biển thông minh", desc: "Bảo vệ vùng ven biển trước triều cường, nước biển dâng." },
        { title: "Thoát nước thông minh", desc: "Hệ thống thoát nước đô thị vận hành theo dữ liệu." },
        { title: "Cảnh báo sớm thiên tai", desc: "Giám sát, dự báo và ứng phó kịp thời." },
        { title: "Bảo tồn hệ sinh thái ven biển", desc: "Rừng ngập mặn, đầm phá, thảm cỏ biển." },
      ],
    },
    benefits: [],
    thumb: IMG("tc3-thumb"),
    images: [IMG("tc3-1"), IMG("tc3-2"), IMG("tc3-3")],
  },
  {
    slug: "cong-nghiep-bien-hien-dai",
    source: "slide 37",
    no: 4,
    title: "Công nghiệp biển hiện đại",
    shortTitle: "Công nghiệp biển hiện đại",
    excerpt: "Đóng tàu, cơ khí biển, chế biến hải sản, vật liệu và hóa chất xanh.",
    focusTitle: "Công nghiệp biển hiện đại",
    focus: [
      "Kỹ thuật hàng hải, đóng tàu và cơ khí biển chuyên dụng.",
      "Chế biến thủy hải sản công nghệ cao gắn với chuỗi lạnh.",
      "Vật liệu tiên tiến và hóa chất xanh.",
    ],
    tagline: "Nền tảng cho chuỗi giá trị biển bền vững và hội nhập toàn cầu",
    values: [
      { title: "Hiện đại", desc: "Công nghệ tiên tiến, tự động hóa cao" },
      { title: "Bền vững", desc: "Sản xuất xanh, thân thiện môi trường" },
      { title: "Hội nhập", desc: "Đáp ứng tiêu chuẩn quốc tế" },
      { title: "Giá trị cao", desc: "Gia tăng giá trị chuỗi cung ứng" },
    ],
    items: [
      {
        title: "Đóng tàu & cơ khí biển",
        body: [
          "Đóng mới, sửa chữa, nâng cấp tàu biển hiện đại, tiết kiệm năng lượng.",
          "Chế tạo kết cấu thép, giàn khoan, thiết bị và công trình biển.",
          "Tự động hóa, chuyển đổi số trong thiết kế và sản xuất.",
        ],
      },
      {
        title: "Chế biến thủy hải sản",
        body: [
          "Công nghệ chế biến tiên tiến, bảo toàn dinh dưỡng và hương vị.",
          "Kho lạnh, bảo quản hiện đại, chuỗi lạnh khép kín.",
          "Truy xuất nguồn gốc, an toàn thực phẩm theo chuẩn quốc tế.",
        ],
      },
      {
        title: "Vật liệu mới & hóa chất xanh",
        body: [
          "Vật liệu siêu bền, nhẹ, chống ăn mòn: composite, hợp kim.",
          "Hóa chất xanh, thân thiện môi trường, giảm phát thải.",
          "Ứng dụng trong hàng hải, năng lượng, xây dựng.",
        ],
      },
    ],
    benefitsTitle: "Đóng góp chiến lược",
    benefits: [
      { title: "Nâng cao năng lực công nghiệp biển" },
      { title: "Tạo việc làm chất lượng cao" },
      { title: "Thúc đẩy đổi mới, làm chủ công nghệ" },
      { title: "Tăng sức cạnh tranh, hội nhập quốc tế" },
    ],
    thumb: IMG("tc4-thumb"),
    images: [IMG("tc4-1"), IMG("tc4-2"), IMG("tc4-3")],
  },
  {
    slug: "logistics-toan-cau",
    source: "slide 38",
    no: 5,
    title: "Chuỗi cung ứng và logistics toàn cầu",
    shortTitle: "Logistics toàn cầu",
    excerpt: "Vận tải đa phương thức, kho lạnh đa tầng, giao vận bằng UAV.",
    focusTitle: "Chuỗi cung ứng & logistics",
    focus: [
      "Vận tải biển quốc tế, dịch vụ logistics trọn gói.",
      "Vận tải đa phương thức: biển, bộ, sắt, hàng không.",
      "Ứng dụng UAV trong khảo sát và giao vận; kho lạnh đa tầng.",
    ],
    tagline: "Kết nối thông minh – vận hành hiệu quả – vươn tầm toàn cầu",
    items: [
      {
        title: "Vận tải biển quốc tế",
        body: ["Kết nối các thị trường lớn trên thế giới.", "Dịch vụ logistics trọn gói: vận tải, thủ tục, bảo hiểm, phân phối."],
      },
      {
        title: "Vận tải đa phương thức",
        body: ["Liên thông đường biển, đường bộ, đường sắt và hàng không.", "Tối ưu tuyến, thời gian và chi phí logistics."],
      },
      {
        title: "Thiết bị không người lái",
        body: ["UAV trên không và dưới nước cho khảo sát, giám sát môi trường biển.", "Giao vận tới khu vực xa xôi, khó tiếp cận."],
      },
      {
        title: "Chuỗi phân phối an toàn",
        body: ["Mạng lưới kho lạnh đa tầng đạt chuẩn quốc tế.", "Giám sát nhiệt độ, chất lượng hàng hóa 24/7."],
      },
    ],
    benefitsTitle: "Giá trị mang lại",
    benefits: [
      { title: "Tối ưu chi phí logistics" },
      { title: "Rút ngắn thời gian vận chuyển" },
      { title: "Nâng cao độ tin cậy và an toàn" },
      { title: "Mở rộng kết nối toàn cầu" },
    ],
    thumb: IMG("tc5-thumb"),
    images: [IMG("tc5-1"), IMG("tc5-2")],
  },
  {
    slug: "du-lieu-bien-chuyen-doi-so",
    source: "slide 39",
    no: 6,
    title: "Cơ sở dữ liệu biển quốc gia & chuyển đổi số",
    shortTitle: "Dữ liệu biển & chuyển đổi số",
    excerpt: "Cơ sở dữ liệu biển quốc gia, giám sát bằng IoT, AI, Blockchain.",
    focusTitle: "Cơ sở dữ liệu biển quốc gia & chuyển đổi số",
    focus: [
      "Xây dựng và đồng bộ Cơ sở dữ liệu biển quốc gia.",
      "Giám sát, quản lý nuôi biển và truy xuất nguồn gốc bằng IoT, AI, Blockchain.",
      "Quản lý minh bạch, kết nối xuyên suốt chuỗi giá trị.",
    ],
    tagline: "Dữ liệu kết nối – công nghệ dẫn đường – phát triển bền vững",
    chips: { title: "Nền tảng công nghệ", items: ["BIG DATA", "IoT", "AI", "BLOCKCHAIN"] },
    items: [
      {
        title: "Hệ sinh thái số",
        body: ["Chuyển đổi số toàn diện cho kinh tế biển.", "Kết nối, tích hợp đa ngành, đa lĩnh vực.", "Nền tảng mở, linh hoạt, bảo mật."],
      },
      {
        title: "Kho dữ liệu tập trung",
        body: [
          "Thiết lập, đồng bộ Cơ sở dữ liệu biển quốc gia.",
          "Thu thập – chuẩn hóa – lưu trữ – chia sẻ.",
          "Dữ liệu “đúng – đủ – sạch – sống”.",
        ],
      },
      {
        title: "Giám sát & truy xuất",
        body: [
          "Giám sát môi trường, thiết bị, sản lượng theo thời gian thực.",
          "Cảnh báo sớm rủi ro, dịch bệnh, ô nhiễm.",
          "Truy xuất nguồn gốc, chống gian lận.",
        ],
      },
      {
        title: "Quản trị minh bạch",
        body: ["Ra quyết định dựa trên dữ liệu.", "Công khai, minh bạch, trách nhiệm giải trình.", "Kết nối thông suốt chuỗi giá trị."],
      },
    ],
    benefitsTitle: "Giá trị mang lại",
    benefits: [
      { title: "Tối ưu nguồn lực", desc: "Sử dụng dữ liệu hiệu quả" },
      { title: "Năng lực cạnh tranh", desc: "Thúc đẩy đổi mới sáng tạo" },
      { title: "Phát triển bền vững", desc: "Khai thác hợp lý tài nguyên" },
      { title: "An toàn – an ninh", desc: "Phòng ngừa rủi ro, thiên tai" },
      { title: "Hội nhập quốc tế", desc: "Nâng tầm vị thế số" },
    ],
    thumb: IMG("tc6-thumb"),
    images: [IMG("tc6-1"), IMG("tc6-2"), IMG("tc6-3"), IMG("tc6-4")],
  },
  {
    slug: "tai-chinh-xanh-tin-chi-carbon",
    source: "slide 40",
    no: 7,
    title: "Tài chính xanh và tín chỉ carbon",
    shortTitle: "Tài chính xanh & tín chỉ carbon",
    excerpt: "Tín dụng, trái phiếu xanh, quỹ PPP và tín chỉ carbon xanh.",
    focusTitle: "Tài chính xanh & tín chỉ carbon",
    focus: [
      "Thu hút dòng vốn xanh: tín dụng xanh, trái phiếu xanh.",
      "Quỹ đầu tư theo mô hình đối tác công tư (PPP) cho kinh tế biển.",
      "Khai thác, thương mại hóa tín chỉ carbon xanh từ hệ sinh thái biển.",
    ],
    tagline: "Dòng vốn xanh – giá trị xanh – tương lai bền vững cho kinh tế biển",
    items: [
      {
        title: "Nguồn vốn bền vững",
        body: ["Thu hút dòng vốn xanh, phát triển tín dụng xanh và trái phiếu xanh cho các dự án kinh tế biển."],
      },
      {
        title: "Hợp tác công tư (PPP)",
        body: ["Thành lập các quỹ đầu tư theo mô hình đối tác công tư chuyên biệt cho kinh tế biển."],
      },
      {
        title: "Tín chỉ carbon xanh",
        body: ["Khai thác và thương mại hóa tín chỉ carbon từ hệ sinh thái biển tự nhiên, tạo nguồn thu mới gắn với bảo tồn."],
      },
    ],
    sidePanel: {
      title: "Công cụ tài chính xanh",
      items: [
        { title: "Tín dụng xanh", desc: "Hỗ trợ dự án đầu tư bền vững" },
        { title: "Trái phiếu xanh", desc: "Huy động vốn cho dự án thân thiện môi trường" },
        { title: "Quỹ đầu tư biển", desc: "Quỹ PPP chuyên biệt cho kinh tế biển" },
        { title: "Chia sẻ rủi ro", desc: "Phân bổ nguồn lực, giảm thiểu rủi ro" },
      ],
    },
    benefitsTitle: "Tác động",
    benefits: [
      { title: "Thúc đẩy tài chính xanh" },
      { title: "Thu hút đầu tư chất lượng" },
      { title: "Bảo vệ hệ sinh thái biển" },
      { title: "Tạo giá trị lan tỏa cho cộng đồng" },
      { title: "Hướng tới Net Zero 2050" },
    ],
    thumb: IMG("tc7-thumb"),
    images: [IMG("tc7-1"), IMG("tc7-2"), IMG("tc7-3")],
  },
  {
    slug: "cong-nghe-sinh-hoc-nhan-luc",
    source: "slide 41",
    no: 8,
    title: "Công nghệ sinh học biển & nguồn nhân lực",
    shortTitle: "Sinh học biển & nhân lực",
    excerpt: "Trung tâm R&D, chuyển giao công nghệ, đào tạo nhân lực chất lượng cao.",
    focusTitle: "Công nghệ sinh học biển & nhân lực",
    focus: [
      "Chiết xuất sản phẩm biển cho dược phẩm, thực phẩm chức năng, mỹ phẩm.",
      "Thành lập trung tâm R&D công nghệ sinh học biển tiên tiến.",
      "Hợp tác quốc tế, chuyển giao công nghệ, đào tạo nhân lực.",
    ],
    tagline: "Khai thác giá trị từ biển – kiến tạo tri thức – phát triển con người",
    items: [
      {
        title: "Công nghệ sinh học biển",
        body: ["Nghiên cứu chế biến sâu, chiết xuất sản phẩm nuôi biển.", "Phát triển sản phẩm giá trị cao từ tài nguyên biển."],
      },
      {
        title: "Trung tâm R&D",
        body: ["Thành lập viện, trung tâm nghiên cứu công nghệ sinh học biển.", "Phòng thí nghiệm hiện đại, chuẩn quốc tế."],
      },
      {
        title: "Chuyển giao tri thức",
        body: ["Hợp tác quốc tế, chuyển giao công nghệ lõi.", "Dự án liên kết, bảo hộ sở hữu trí tuệ."],
      },
      {
        title: "Phát triển con người",
        body: ["Đào tạo chuyên sâu nhân lực chất lượng cao cho kinh tế biển.", "Phát triển kỹ năng, kết nối việc làm cho thế hệ trẻ."],
      },
    ],
    sidePanel: {
      title: "Lĩnh vực ứng dụng",
      items: [{ title: "Dược phẩm" }, { title: "Thực phẩm chức năng" }, { title: "Mỹ phẩm" }, { title: "Vật liệu sinh học" }],
    },
    benefitsTitle: "Giá trị mang lại",
    benefits: [
      { title: "Nâng cao giá trị tài nguyên biển" },
      { title: "Thúc đẩy đổi mới sáng tạo" },
      { title: "Phát triển xanh, tuần hoàn" },
      { title: "Khẳng định vị thế quốc gia" },
      { title: "Nhân lực chất lượng cao" },
    ],
    thumb: IMG("tc8-thumb"),
    images: [IMG("tc8-1")],
  },
  {
    slug: "du-lich-bien-xanh",
    source: "slide 42",
    no: 9,
    title: "Du lịch biển xanh và trải nghiệm sinh thái",
    shortTitle: "Du lịch biển xanh",
    excerpt: "Du lịch sinh thái, nghiên cứu, trải nghiệm nghề biển và văn hóa bản địa.",
    focusTitle: "Du lịch biển xanh & sinh thái",
    focus: [
      "Du lịch sinh thái bền vững tại các vùng biển, đảo.",
      "Du lịch nghiên cứu, trải nghiệm tại vùng nuôi biển công nghệ cao.",
      "Gắn du lịch với bảo tồn đa dạng sinh học và văn hóa bản địa.",
    ],
    tagline: "Kết nối thiên nhiên – khám phá biển xanh – trải nghiệm bền vững",
    items: [
      {
        title: "Du lịch sinh thái biển đảo",
        body: ["Mô hình du lịch sinh thái bền vững tại các vùng biển, đảo.", "Ngắm cảnh, nghỉ dưỡng thân thiện môi trường."],
      },
      {
        title: "Trải nghiệm nghề biển",
        body: ["Tham quan vùng nuôi biển công nghệ cao.", "Tham gia chăm sóc, thu hoạch, thưởng thức hải sản tại chỗ."],
      },
      {
        title: "Du lịch nghiên cứu",
        body: ["Tham gia nghiên cứu sinh học và môi trường biển.", "Bảo tồn rạn san hô, rừng ngập mặn."],
      },
      {
        title: "Văn hóa bản địa",
        body: ["Gìn giữ, quảng bá văn hóa vùng biển.", "Làng chài, lễ hội, ẩm thực và sản phẩm OCOP."],
      },
    ],
    benefitsTitle: "Giá trị mang lại",
    benefits: [
      { title: "Phát triển bền vững", desc: "Hài hòa kinh tế – xã hội – môi trường" },
      { title: "Nâng tầm thương hiệu", desc: "Biển Việt Nam xanh – sạch – đẹp" },
      { title: "Kết nối & hội nhập", desc: "Thu hút du khách quốc tế" },
      { title: "Sinh kế cộng đồng", desc: "Nâng cao thu nhập địa phương" },
    ],
    thumb: IMG("tc9-thumb"),
    images: [IMG("tc9-1"), IMG("tc9-2"), IMG("tc9-3"), IMG("tc9-4")],
  },
];
