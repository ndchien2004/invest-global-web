import type { ReactNode } from "react";
import { Waves } from "@/components/Waves";

/** Tách câu thành từng từ để sáng dần theo cuộn. */
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(/(\s+)/);
  return (
    <p data-words className={className} aria-label={text}>
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          w
        ) : (
          <span key={i} className="w" aria-hidden="true">
            {w}
          </span>
        ),
      )}
    </p>
  );
}

/** Khối chữ lớn đứng yên giữa màn hình, chữ sáng dần khi cuộn qua. */
export function WordStage({ text, foot, tone = "light" }: { text: string; foot?: ReactNode; tone?: "light" | "dark" }) {
  return (
    <div data-words-scope className={`relative h-[200vh] ${tone === "dark" ? "on-dark bg-abyss text-white" : "bg-white text-navy"}`}>
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="wrap">
          <WordReveal text={text} className="word-stage max-w-[42ch] text-[1.45rem] font-bold leading-[1.35] md:text-[1.95rem] lg:text-[2.35rem]" />
          {foot && <div className="mt-8">{foot}</div>}
        </div>
      </div>
    </div>
  );
}

/** Màn mở chương: số chương lớn + tiêu đề. */
export function ChapterOpener({ no, title, lead, tone = "navy" }: { no: number; title: string; lead?: string; tone?: "navy" | "abyss" }) {
  const n = String(no).padStart(2, "0");
  return (
    <header data-opener className={`opener on-dark relative overflow-hidden ${tone === "abyss" ? "bg-abyss" : "bg-navy"} text-white`}>
      <Waves />
      <div className="wrap relative grid min-h-[72svh] items-end gap-6 pb-24 pt-32 md:pb-28 lg:grid-cols-12">
        <p data-opener-num aria-hidden="true" className="opener-num lg:col-span-5">
          {n}
        </p>
        <div className="lg:col-span-7">
          <div className="overflow-hidden">
            <p data-opener-line className="text-[1.15rem] font-bold uppercase tracking-[0.2em] text-[#3ecf8e]">
              Phần {n}
            </p>
          </div>
          <div className="overflow-hidden pb-1">
            <h2 data-opener-line className="mt-3 text-[2.4rem] leading-[1.05] md:text-[3.5rem] lg:text-[4.25rem]">
              {title}
            </h2>
          </div>
          {lead && (
            <div className="overflow-hidden">
              <p data-opener-line className="mt-5 max-w-[48ch] text-[1.25rem] font-medium leading-snug text-foam md:text-[1.45rem]">
                {lead}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/** Bảng chi tiết mở ngay trên trang (dialog gốc của trình duyệt). */
export function Sheet({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <dialog id={`dlg-${id}`} data-sheet data-lenis-prevent aria-label={label} className="sheet">
      <form method="dialog" className="sheet-close-wrap">
        <button type="submit" className="sheet-close" aria-label="Đóng">
          ✕
        </button>
      </form>
      <div className="sheet-body">{children}</div>
    </dialog>
  );
}
