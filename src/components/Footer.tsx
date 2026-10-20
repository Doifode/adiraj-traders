import { CONTACT } from "../data";
import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <>
      <footer className="bg-stone-900 text-stone-300 text-center py-6 px-4 text-sm">
        © {new Date().getFullYear()} {t.company}. {t.footer}
      </footer>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={t.floatingWhatsapp}
        title={t.floatingWhatsapp}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 text-white text-2xl flex items-center justify-center shadow-xl hover:scale-110 transition animate-float"
      >
        💬
      </a>
    </>
  );
}
