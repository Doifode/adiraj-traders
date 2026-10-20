import { useState } from "react";
import { useLang } from "../i18n";

const HREFS = ["#home", "#products", "#about", "#details", "#location"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, toggle } = useLang();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16 gap-3">
        <a href="#home" className="text-lg sm:text-xl font-extrabold text-brand-dark">
          <span className="inline-block bg-brand text-white text-xs font-black rounded-full px-2 py-0.5 mr-2 align-middle">AK</span>
          {t.company}
        </a>
        <ul className="hidden md:flex gap-6 font-medium">
          {HREFS.map((href, i) => (
            <li key={href}>
              <a href={href} className="hover:text-brand transition-colors">{t.nav[i]}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-3 py-1 rounded-full border-2 border-brand text-brand text-sm font-bold hover:bg-brand hover:text-white transition"
          >
            {t.switchLabel}
          </button>
          <button
            className="md:hidden text-2xl w-9"
            aria-label={t.menu}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden bg-white border-t px-4 py-2">
          {HREFS.map((href, i) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-3 font-medium">
                {t.nav[i]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
