import { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCT_MEDIA, SLIDE_IMAGES } from "../data";
import { useLang } from "../i18n";

export default function ProductSlider() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const slides = t.slider.items.map((s, i) => ({ ...s, img: SLIDE_IMAGES[i] }));
  const n = slides.length;

  const go = useCallback((d: number) => setIndex((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 4500);
    return () => clearInterval(id);
  }, [paused, go]);

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto reveal">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-brand-dark">{t.products.title}</h2>
        <p className="text-center text-stone-600 mt-2 mb-10">{t.products.subtitle}</p>

        <div
          className="relative overflow-hidden rounded-3xl shadow-xl bg-slate-900"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="min-w-full relative h-80 sm:h-[28rem]">
                <img
                  src={s.img}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60"
                />
                <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-contain" />
                <div className="absolute inset-x-0 bottom-0 pt-16 pb-6 px-6 pr-24 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold">{s.name}</h3>
                  <p className="mt-1 max-w-xl text-sm sm:text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => go(-1)} aria-label={t.products.prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-xl shadow">‹</button>
          <button onClick={() => go(1)} aria-label={t.products.next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-xl shadow">›</button>
          <div className="absolute bottom-4 right-4 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={i}
                aria-label={s.name}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2.5 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {t.products.items.map((p, i) => {
            const m = PRODUCT_MEDIA[i];
            return (
              <div key={m.emoji} className="group bg-cream rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="relative h-36 sm:h-48 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={m.img}
                    alt={p.name}
                    loading="lazy"
                    className={`w-full h-full group-hover:scale-110 transition duration-500 ${
                      m.fit === "cover" ? "object-cover" : "object-contain p-3"
                    }`}
                  />
                  <span className="absolute top-2 left-2 text-2xl bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow">
                    {m.emoji}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-brand-dark">{p.name}</h3>
                  <p className="text-sm text-stone-600 mt-1">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
