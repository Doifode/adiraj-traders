import { useState } from "react";
import { useLang } from "../i18n";

// Dussehra 2026 falls on 20 October. The greeting shows on that day only.
// Append ?preview=dussehra to the URL to test it on any other day.
function isGreetingDay(): boolean {
  if (new URLSearchParams(window.location.search).get("preview") === "dussehra") return true;
  const d = new Date();
  return d.getFullYear() === 2026 && d.getMonth() === 9 && d.getDate() === 20;
}

const FLOWERS = ["🌼", "🏵️", "🌼", "🪔", "🌼"];

export default function DussehraGreeting() {
  const { t } = useLang();
  const [open, setOpen] = useState(isGreetingDay);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 overflow-hidden">
      {Array.from({ length: 24 }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className="falling pointer-events-none absolute top-0 text-2xl sm:text-3xl"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 8) * 0.7}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        >
          {FLOWERS[i % FLOWERS.length]}
        </span>
      ))}
      <div className="relative max-w-md w-full rounded-3xl bg-gradient-to-b from-orange-400 via-amber-300 to-yellow-200 p-8 text-center shadow-2xl animate-pop">
        <div className="text-6xl animate-float">🪔</div>
        <h2 className="mt-3 text-3xl font-extrabold text-red-800">{t.dussehra.title}</h2>
        <p className="mt-4 text-stone-800 leading-relaxed">{t.dussehra.message}</p>
        <p className="mt-3 text-sm font-semibold text-red-900">{t.dussehra.from}</p>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 px-6 py-2 rounded-full bg-red-700 text-white font-semibold hover:bg-red-800 hover:scale-105 transition"
        >
          {t.dussehra.close}
        </button>
      </div>
    </div>
  );
}
