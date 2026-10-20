import { CONTACT, HIGHLIGHT_ICONS, flonix, wordmark } from "../data";
import { useLang } from "../i18n";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200 overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-red-200/40 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="reveal visible">
          <p className="inline-block bg-white/70 px-4 py-1 rounded-full text-sm font-semibold text-brand mb-4">
            {t.hero.welcome}
          </p>
          <h1>
            <img src={wordmark} alt={t.company} className="w-full max-w-md rounded-2xl shadow-lg" />
          </h1>
          <p className="mt-4 text-lg text-stone-700">{t.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="px-6 py-3 rounded-full bg-brand text-white font-semibold shadow-lg hover:bg-brand-dark hover:scale-105 transition">
              {t.hero.viewProducts}
            </a>
            <a href={`tel:+91${CONTACT.phone}`} className="px-6 py-3 rounded-full bg-white text-brand font-semibold shadow hover:scale-105 transition">
              {t.hero.call}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:scale-105 transition">
              💬 {t.hero.whatsapp}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={flonix}
            alt="Flonix FX1.0"
            className="w-72 sm:w-96 rounded-3xl shadow-2xl animate-float"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-14 grid sm:grid-cols-3 gap-4">
        {t.highlights.map((s, i) => (
          <div key={s.title} className="bg-white/80 rounded-2xl p-4 text-center shadow hover:-translate-y-1 transition">
            <div className="text-3xl">{HIGHLIGHT_ICONS[i]}</div>
            <div className="font-bold text-brand mt-1">{s.title}</div>
            <div className="text-sm text-stone-600">{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
