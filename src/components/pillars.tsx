import Image from "next/image";
import Link from "next/link";
import { blueEconomy, pillars } from "@/content/pillars";
import { Bullets, Num } from "./ui";

/** Slide 31: lưới 3×3 — 9 trụ cột */
export function PillarGrid() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p) => (
        <li key={p.slug} className="rounded-lg bg-white shadow-[0_1px_6px_rgba(10,46,99,0.12)]">
          <Link href={`/kinh-te-bien-xanh/${p.slug}`} className="group flex h-full gap-4 p-4">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-shoal sm:h-32 sm:w-32">
              <Image src={p.thumb} alt={p.shortTitle} fill sizes="128px" className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Num n={p.no} />
                <h3 className="text-[1.3rem] leading-tight group-hover:text-teal group-hover:underline md:text-[1.4rem]">{p.shortTitle}</h3>
              </div>
              <p className="mt-3 text-[1.1rem] leading-snug text-slate">{p.excerpt}</p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** Slide 32–33: định hướng trọng tâm */
export function PillarFocus() {
  const groups = [
    { title: blueEconomy.focusTitle15, list: pillars.slice(0, 5) },
    { title: blueEconomy.focusTitle69, list: pillars.slice(5) },
  ];
  return (
    <div className="space-y-16">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="text-[1.75rem] md:text-[2.25rem]">{g.title}</h3>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {g.list.map((p) => (
              <li key={p.slug} className="on-dark rounded-lg bg-navy p-5 text-foam">
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">
                    <Image src={p.thumb} alt={p.focusTitle} fill sizes="96px" className="object-cover" />
                    <span className="absolute left-1.5 top-1.5 scale-75 origin-top-left">
                      <Num n={p.no} />
                    </span>
                  </div>
                  <h4 className="text-[1.25rem] leading-snug md:text-[1.35rem]">
                    <Link href={`/kinh-te-bien-xanh/${p.slug}`} className="hover:text-brass">
                      {p.focusTitle}
                    </Link>
                  </h4>
                </div>
                <Bullets items={p.focus} className="mt-4 text-[1.05rem] text-white" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Slide 33: dải “Mục tiêu hướng tới” */
export function GoalsStrip() {
  return (
    <div className="on-dark rounded-lg bg-navy px-6 py-6 text-white md:px-8">
      <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
        <p className="text-[1.5rem] font-bold uppercase">{blueEconomy.goalsTitle}</p>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {blueEconomy.goals.map((g) => (
            <li key={g} className="flex items-center gap-3 text-[1.15rem] font-bold">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-kelp" aria-hidden="true" />
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
