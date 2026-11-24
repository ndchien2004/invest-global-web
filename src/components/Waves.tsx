/** Sóng biển trang trí ở đáy phần đầu trang — 3 lớp trôi ngang với tốc độ khác nhau. */
const WAVE =
  "M0 40 C 150 10 350 10 500 40 S 850 70 1000 40 S 1350 10 1500 40 S 1850 70 2000 40 V120 H0 Z";

export function Waves({ tall = false }: { tall?: boolean }) {
  return (
    <div aria-hidden="true" className={`waves pointer-events-none absolute inset-x-0 bottom-0 ${tall ? "h-28 md:h-36" : "h-16 md:h-20"}`}>
      <svg className="wave wave-1" viewBox="0 0 2000 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
      <svg className="wave wave-2" viewBox="0 0 2000 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
      <svg className="wave wave-3" viewBox="0 0 2000 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
    </div>
  );
}
