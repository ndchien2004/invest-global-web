# Invest Global web — ghi chú thiết kế

## Chủ đề, người xem, nhiệm vụ
- **Chủ đề:** liên minh xúc tiến đầu tư FDI, trọng tâm Kinh tế Biển Xanh.
- **Người xem:** nhà đầu tư nước ngoài (Ấn Độ, Canada, Nhật…), doanh nghiệp Việt Nam, cơ quan nhà nước.
- **Nhiệm vụ chính:** tạo uy tín (mạng lưới, ngoại giao, sự kiện thật) và dẫn tới hành động “Gửi nhu cầu đầu tư”.

## Ý tưởng: hải đồ (nautical chart)
Điểm nhấn duy nhất là **hải đồ** ở hero: các đường đẳng sâu mảnh, lưới kinh vĩ độ và các tuyến hải trình nối Hà Nội tới 7 điểm trong mạng lưới quốc tế. Các tuyến tự vẽ ra một lần khi tải trang. Ghi chú trên hải đồ (toạ độ, tên điểm, năm, số bước) dùng Roboto Condensed, giống chữ chú thích trên hải đồ thật. Phần còn lại của trang giữ yên tĩnh, kỷ luật.

## Màu
| Tên | Hex | Vai trò |
|---|---|---|
| Abyss | `#061A3A` | Nền tối: hero, hub Kinh tế Biển Xanh, footer |
| Navy | `#0A2E63` | Tiêu đề, thương hiệu (màu dùng nhiều nhất trong deck) |
| Chart teal | `#0F6E7A` | Đường kẻ, link, tuyến hải trình trên nền sáng |
| Kelp | `#0B7A54` | Nút hành động chính (chữ trắng 5.4:1) |
| Brass | `#C9A45C` | Điểm gốc Hà Nội, mốc 2026, chi tiết trên nền tối (không dùng trên nền sáng) |
| Shoal | `#EAF4F7` | Nền xen kẽ |
| Ink / Slate | `#0B1D3A` / `#4E5E78` | Chữ thân / chữ phụ |

## Chữ
- **Be Vietnam Pro** (thiết kế cho tiếng Việt): tiêu đề 800, thân 400/500, 17px/1.65.
- **Roboto Condensed** 500: chỉ dùng cho ghi chú hải đồ, ngày tháng, số bước. Viết thường theo câu, không IN HOA giãn chữ.
- Thang 1.25: 14 · 17 · 21 · 26 · 33 · 41 · 52 · 64.

## Bố cục
Căn trái, cột chữ ≤ 68ch, khung 1200px. Danh sách dùng hàng kẻ mảnh thay cho lưới card bo góc giống nhau. Chỉ đánh số khi nội dung là chuỗi thật: quy trình 6 bước, hành trình, 9 trụ cột (tên chính thức “Trụ cột 1…9”).

## Ảnh
- **Ảnh minh họa** (lĩnh vực, trụ cột): duotone abyss → teal → foam. Cách này thống nhất tông màu, che độ phân giải thấp và giảm cảm giác ảnh AI.
- **Ảnh tư liệu thật** (đại sứ, sự kiện, ACME, Suzlon, trụ sở): giữ màu gốc, có chú thích. Đây là bằng chứng.

## Tự soát so với mặc định
- Bỏ eyebrow IN HOA trên mỗi heading (mặc định chung) → heading đứng một mình, ghi chú hải đồ chỉ dùng khi có dữ liệu thật (toạ độ, ngày).
- Bỏ lưới card bóng mờ giống nhau → hàng kẻ, bảng, và một số khối nền tối.
- Bỏ hiệu ứng fade-up cho từng section → chỉ một chuyển động: tuyến hải trình vẽ ra ở hero.

## Pháp lý (brief §10.4)
Không dùng hình Quốc huy; logo đối tác ẩn (`SHOW_PARTNER_LOGOS=false`) cho tới khi được phép; giấy chứng nhận bản quyền chỉ hiển thị dạng danh sách (ảnh có thông tin cá nhân); ảnh báo chí ghi nguồn.
