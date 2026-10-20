import { FEATURE_ICONS, installed } from "../data";
import { useLang } from "../i18n";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">{t.about.title}</h2>
          <p className="mt-4 text-stone-700 leading-relaxed">{t.about.p1}</p>
          <p className="mt-3 text-stone-700 leading-relaxed">{t.about.p2}</p>
          <figure className="mt-6 max-w-xs mx-auto md:mx-0">
            <img src={installed} alt={t.about.installedCaption} loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover object-top" />
            <figcaption className="text-xs text-stone-500 mt-2">{t.about.installedCaption}</figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {t.about.features.map((f, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 120}ms` }}
              className="reveal bg-white rounded-2xl p-5 shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-3xl">{FEATURE_ICONS[i]}</div>
              <h3 className="font-bold mt-2 text-brand-dark">{f.title}</h3>
              <p className="text-sm text-stone-600 mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
