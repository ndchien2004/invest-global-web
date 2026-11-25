"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/content/chapters";

/** Mục lục chương dọc bên phải (màn hình lớn): số chương, tên hiện khi rê chuột, chương đang xem được tô. */
export default function ChapterRail() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const on = (e: Event) => setActive((e as CustomEvent<string>).detail);
    window.addEventListener("chapter:active", on);
    return () => window.removeEventListener("chapter:active", on);
  }, []);

  const visible = active !== "" && active !== "top";
  return (
    <nav aria-label="Mục lục các phần" className={`chapter-rail ${visible ? "is-visible" : ""}`}>
      <p className="chapter-rail-label">Mục lục</p>
      <ol>
        {chapters.map((c, i) => {
          const on = active === c.id;
          return (
            <li key={c.id}>
              <a href={`/#${c.id}`} aria-current={on ? "true" : undefined} className={`chapter-rail-link ${on ? "is-active" : ""}`}>
                <span className="chapter-rail-name">{c.nav}</span>
                <span className="chapter-rail-no">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
