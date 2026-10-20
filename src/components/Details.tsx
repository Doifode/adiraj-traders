import { CONTACT, DETAIL_ICONS, PRODUCT_MEDIA, banner } from "../data";
import { useLang } from "../i18n";

export default function Details() {
  const { t } = useLang();
  const values = [t.company, t.details.proprietor, CONTACT.phoneDisplay, t.location.address, t.details.offer];
  const ticker = t.products.items.map((p, i) => `${PRODUCT_MEDIA[i].emoji} ${p.name}`);

  return (
    <section id="details" className="py-16 px-4 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center reveal">{t.details.title}</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <img src={banner} alt={t.company} loading="lazy" className="reveal rounded-2xl shadow-2xl w-full" />
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`reveal bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition ${i >= 3 ? "sm:col-span-2" : ""}`}
              >
                <div className="text-2xl">{DETAIL_ICONS[i]}</div>
                <div className="text-sky-200 text-sm mt-1">{t.details.labels[i]}</div>
                <div className="font-semibold wrap-break-word">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 -mx-4 overflow-hidden border-y border-white/20 py-3">
        <div className="flex w-max animate-marquee text-lg font-semibold text-sky-200">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10 pr-10 shrink-0">
              {ticker.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
