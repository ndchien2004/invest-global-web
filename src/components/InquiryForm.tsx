"use client";

import { useState, type FormEvent } from "react";
import { org } from "@/content/org";
import { pillars } from "@/content/pillars";
import { sectors } from "@/content/sectors";

const scales = ["Dưới 1 triệu USD", "1–10 triệu USD", "10–50 triệu USD", "50–200 triệu USD", "Trên 200 triệu USD", "Chưa xác định"];
const partnerTypes = ["Nhà đầu tư", "Ngân hàng, quỹ", "Đối tác công nghệ", "Địa phương, khu công nghiệp", "Đối tác phân phối, thị trường"];

const field =
  "mt-1.5 w-full rounded-md border border-[#9fb7c2] bg-white px-3.5 py-2.5 text-ink placeholder:text-slate/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30";

/**
 * Website tĩnh chưa có máy chủ gửi thư: form soạn sẵn một email tới địa chỉ của Liên minh.
 * Khi có dịch vụ gửi thư (Resend/SMTP), thay `handleSubmit` bằng route handler.
 */
export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const all = (k: string) => fd.getAll(k).map(String).join(", ");
    const lines = [
      `Tổ chức: ${get("org")}`,
      `Quốc gia: ${get("country")}`,
      `Người liên hệ: ${get("name")}`,
      `Email: ${get("email")}`,
      `Điện thoại: ${get("phone")}`,
      "",
      `Mục tiêu đầu tư: ${get("goal")}`,
      `Lĩnh vực quan tâm: ${all("sectors") || "(chưa chọn)"}`,
      `Quy mô dự kiến: ${get("scale")}`,
      `Thị trường mục tiêu: ${get("market")}`,
      `Loại đối tác cần kết nối: ${all("partners") || "(chưa chọn)"}`,
      `Nhu cầu vốn: ${get("capital")}`,
      "",
      "Mô tả thêm:",
      get("message"),
    ];
    const subject = `Nhu cầu đầu tư: ${get("org") || get("name")}`;
    window.location.href = `mailto:${org.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate={false}>
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-4 text-[1.25rem] font-bold text-navy">Thông tin liên hệ</legend>
        <label className="block">
          <span className="font-medium">Tên tổ chức, doanh nghiệp</span>
          <input name="org" required autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="font-medium">Quốc gia</span>
          <input name="country" autoComplete="country-name" className={field} />
        </label>
        <label className="block">
          <span className="font-medium">Người liên hệ</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="font-medium">Điện thoại</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-4 text-[1.25rem] font-bold text-navy">Nhu cầu đầu tư</legend>
        <label className="block sm:col-span-2">
          <span className="font-medium">Mục tiêu đầu tư</span>
          <input name="goal" required placeholder="Ví dụ: xây nhà máy, góp vốn, tìm đối tác phân phối" className={field} />
        </label>
        <div className="sm:col-span-2">
          <p className="font-medium">Lĩnh vực quan tâm</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {[...sectors.map((s) => s.title), ...pillars.map((p) => `Kinh tế Biển Xanh: ${p.shortTitle}`)].map((t) => (
              <label key={t} className="flex items-start gap-2.5 text-[0.95rem]">
                <input type="checkbox" name="sectors" value={t} className="mt-1 h-4 w-4 accent-[#0B7A54]" />
                {t}
              </label>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="font-medium">Quy mô dự kiến</span>
          <select name="scale" className={field} defaultValue="Chưa xác định">
            {scales.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-medium">Thị trường mục tiêu</span>
          <input name="market" placeholder="Ví dụ: Việt Nam, ASEAN, Ấn Độ" className={field} />
        </label>
        <div className="sm:col-span-2">
          <p className="font-medium">Loại đối tác cần kết nối</p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {partnerTypes.map((t) => (
              <label key={t} className="flex items-center gap-2.5 text-[0.95rem]">
                <input type="checkbox" name="partners" value={t} className="h-4 w-4 accent-[#0B7A54]" />
                {t}
              </label>
            ))}
          </div>
        </div>
        <label className="block sm:col-span-2">
          <span className="font-medium">Nhu cầu vốn</span>
          <input name="capital" placeholder="Ví dụ: cần thu xếp 30% vốn vay" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="font-medium">Mô tả thêm</span>
          <textarea name="message" rows={5} className={field} />
        </label>
      </fieldset>

      <div className="space-y-3">
        <button type="submit" className="btn btn-primary">
          Soạn email gửi nhu cầu
        </button>
        <p className="max-w-[60ch] text-fine text-slate">
          Nút này mở ứng dụng email của bạn với nội dung đã điền sẵn, gửi tới {org.contact.email}. Thông tin chỉ dùng để
          Invest Global liên hệ lại về nhu cầu của bạn.
        </p>
        <p role="status" className="font-medium text-kelp">
          {sent && "Đã mở email soạn sẵn. Hãy bấm Gửi trong ứng dụng email để hoàn tất."}
        </p>
      </div>
    </form>
  );
}
