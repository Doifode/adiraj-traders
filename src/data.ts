// Language-independent data. All translatable text lives in i18n.tsx.
import flonix from "./assets/flonix.jpg";
import installed from "./assets/installed.jpg";
import banner from "./assets/banner.jpg";
import chakki from "./assets/chakki.jpg";
import solar from "./assets/solar.jpg";
import instantGeyser from "./assets/instant-geyser.jpg";
import gasGeyser from "./assets/gas-geyser.jpg";

export const CONTACT = {
  phone: "9595102500",
  phoneDisplay: "+91 95951 02500",
  whatsapp: "https://wa.me/919595102500",
  mapQuery: "Ankalkhop, Palus, Sangli, Maharashtra",
};

export { banner, flonix, installed };

/** Big photos used in the hero slider (same order as dict.slider.items). */
export const SLIDE_IMAGES = [flonix, installed, banner];

/** Product category media (same order as dict.products.items). */
export const PRODUCT_MEDIA = [
  { emoji: "💧", img: flonix, fit: "cover" },
  { emoji: "🚿", img: instantGeyser, fit: "contain" },
  { emoji: "⚙️", img: chakki, fit: "contain" },
  { emoji: "☀️", img: solar, fit: "contain" },
  { emoji: "🔥", img: gasGeyser, fit: "contain" },
] as const;

export const FEATURE_ICONS = ["🏷️", "🛠️", "💬", "📍"];
export const DETAIL_ICONS = ["🏢", "🧑‍💼", "📞", "📍", "🛒"];
export const HIGHLIGHT_ICONS = ["💧", "🛠️", "🏷️"];
