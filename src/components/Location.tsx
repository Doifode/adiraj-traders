import { CONTACT } from "../data";
import { useLang } from "../i18n";

export default function Location() {
  const { t } = useLang();
  const q = encodeURIComponent(CONTACT.mapQuery);
  return (
    <section id="location" className="py-16 px-4">
      <div className="max-w-6xl mx-auto reveal">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-brand-dark">{t.location.title}</h2>
        <p className="text-center text-stone-700 mt-2 mb-8">📍 {t.location.address}</p>
        <div className="rounded-3xl overflow-hidden shadow-xl h-72 sm:h-96">
          <iframe
            title={t.location.mapTitle}
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-dark hover:scale-105 transition"
          >
            {t.location.directions}
          </a>
        </div>
      </div>
    </section>
  );
}
