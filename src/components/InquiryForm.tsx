"use client";

import { useState, type FormEvent } from "react";
import { org } from "@/content/org";
import { pillars } from "@/content/pillars";
import { sectors } from "@/content/sectors";

const field =
  "mt-2 w-full rounded-md border-2 border-[#b9cdd6] bg-white px-4 py-3 text-[1.1rem] text-ink focus:border-teal focus:outline-none";

/**
 * Các trường của bước 01 “Tiếp nhận nhu cầu” (slide 10):
 * mục tiêu đầu tư, ngành, quy mô, thị trường, đối tác, nhu cầu vốn.
 * Website tĩnh chưa có máy chủ gửi thư: nút Gửi mở email soạn sẵn tới địa chỉ của Liên minh.
 */
export default function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [other, setOther] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const topics = fd.getAll("topics").map(String);
    const lines = [
      `Tổ chức, doanh nghiệp: ${get("org")}`,
      `Quốc gia: ${get("country")}`,
      `Người liên hệ: ${get("name")}`,
      `Email: ${get("email")}`,
      `Điện thoại: ${get("phone")}`,
      "",
      `Mục tiêu đầu tư: ${get("goal")}`,
      `Ngành, lĩnh vực: ${topics.join("; ")}`,
      ...(other ? [`Khác: ${get("otherText")}`] : []),
      `Quy mô: ${get("scale")}`,
      `Thị trường: ${get("market")}`,
      `Đối tác: ${get("partner")}`,
      `Nhu cầu vốn: ${get("capital")}`,
      "",
      "Ghi chú:",
      get("note"),
    ];
    const subject = `Gửi thông tin: ${get("org") || get("name")}`;
    window.location.href = `mailto:${org.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  const label = "text-[1.15rem] font-bold text-navy";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 text-[1.6rem] font-bold uppercase text-navy">Thông tin liên hệ</legend>
        <label className="block">
          <span className={label}>Tổ chức, doanh nghiệp</span>
          <input name="org" required autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className={label}>Quốc gia</span>
          <input name="country" autoComplete="country-name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Người liên hệ</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Điện thoại</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 text-[1.6rem] font-bold uppercase text-navy">Tiếp nhận nhu cầu</legend>
        <label className="block sm:col-span-2">
          <span className={label}>Mục tiêu đầu tư</span>
          <input name="goal" className={field} />
        </label>

        <div className="sm:col-span-2">
          <p className={label}>Ngành, lĩnh vực</p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {[...pillars.map((p) => `Trụ cột ${p.no}: ${p.title}`), ...sectors.map((s) => `Lĩnh vực ${s.no}: ${s.title}`)].map((t) => (
              <label key={t} className="flex items-start gap-3 text-[1.05rem]">
                <input type="checkbox" name="topics" value={t} className="mt-1 h-5 w-5 shrink-0 accent-[#0B7A54]" />
                {t}
              </label>
            ))}
            <label className="flex items-start gap-3 text-[1.05rem] font-bold">
              <input
                type="checkbox"
                name="topics"
                value="Khác"
                checked={other}
                onChange={(e) => setOther(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-[#0B7A54]"
              />
              Khác
            </label>
          </div>
          {other && (
            <label className="mt-4 block">
              <span className={label}>Nội dung khác</span>
              <input name="otherText" required className={field} autoFocus />
            </label>
          )}
        </div>

        <label className="block">
          <span className={label}>Quy mô</span>
          <input name="scale" className={field} />
        </label>
        <label className="block">
          <span className={label}>Thị trường</span>
          <input name="market" className={field} />
        </label>
        <label className="block">
          <span className={label}>Đối tác</span>
          <input name="partner" className={field} />
        </label>
        <label className="block">
          <span className={label}>Nhu cầu vốn</span>
          <input name="capital" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Ghi chú</span>
          <textarea name="note" rows={5} className={field} />
        </label>
      </fieldset>

      <div className="space-y-3">
        <button type="submit" className="btn btn-primary px-10 text-[1.2rem]">
          Gửi
        </button>
        <p className="max-w-[60ch] text-[1rem] text-slate">
          Nút Gửi mở ứng dụng email của bạn với nội dung đã điền, gửi tới {org.contact.email}.
        </p>
        <p role="status" className="text-[1.05rem] font-bold text-kelp">
          {sent && "Đã mở email soạn sẵn. Bấm Gửi trong ứng dụng email để hoàn tất."}
        </p>
      </div>
    </form>
  );
}
