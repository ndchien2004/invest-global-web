# Invest Global — website truyền thông

Website của **Liên minh Tư vấn và Đầu tư Quốc tế Invest Global** (Liên minh Kinh tế Biển Xanh).
Nội dung lấy từ hồ sơ năng lực bản V6 (PDF 43 slide, 23/11/2026) theo brief `INVEST_GLOBAL_WEBSITE_BRIEF` v1.2.

## Công nghệ
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Font tự host: Roboto Condensed (`@fontsource`) — font của hồ sơ năng lực; khối slide 23 dùng Tahoma
- Toàn bộ 31 trang được prerender tĩnh; deploy trên Vercel

## Chạy dự án
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # kiểm tra build production
```

## Cấu trúc
```
src/content/     # toàn bộ nội dung (TypeScript, có kiểu) — sửa chữ ở đây, không sửa trong component
  org.ts         # liên minh, chiến lược, dịch vụ, quy trình, mạng lưới, đối tác, sự kiện, bản quyền
  sectors.ts     # 6 lĩnh vực trọng tâm
  pillars.ts     # 9 trụ cột Kinh tế Biển Xanh
src/components/  # header, footer, khối 9 trụ cột, khối slide 23, form, khối dùng chung
src/app/         # các trang
public/images/   # ảnh, logo trích từ deck (WebP, giữ màu gốc)
DESIGN.md        # hệ thống thiết kế: màu, chữ, bố cục, nguyên tắc
```

## Việc còn chờ khách hàng xác nhận
- Module 05: “Invest Green” hay “InvestProgram”
- Quyền sử dụng logo đối tác và Quốc huy trên website công khai
- Logo vector, ảnh gốc độ phân giải cao, tên miền InvestGlobal.vn, email theo tên miền
- Dịch vụ gửi thư cho form (hiện form soạn sẵn email tới investglobalvn@gmail.com)
- Bản tiếng Anh

> Nguyên tắc: mọi chữ trên website là nguyên văn hồ sơ năng lực (xem `DESIGN.md`).
