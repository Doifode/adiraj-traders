import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "mr" | "en";

const mr = {
  company: "आदिराज ट्रेडर्स",
  pageTitle: "आदिराज ट्रेडर्स | वॉटर प्युरिफायर, गिझर, आटा चक्की व सोलर – अंकलखोप, सांगली",
  tagline: "सर्व कंपन्यांचे वॉटर प्युरिफायर, इन्स्टंट गिझर, आटा चक्की, सोलर व गॅस गिझर – विक्री व सेवा एकाच ठिकाणी.",
  nav: ["मुख्यपृष्ठ", "उत्पादने", "आमच्याबद्दल", "माहिती", "पत्ता"],
  menu: "मेनू",
  switchLabel: "English",
  hero: {
    welcome: "स्वागत आहे 🙏",
    viewProducts: "उत्पादने पहा",
    call: "📞 कॉल करा",
    whatsapp: "WhatsApp",
  },
  highlights: [
    { title: "सर्व कंपन्यांचे प्युरिफायर", text: "RO, UV, UF व मिनरल मॉडेल" },
    { title: "इन्स्टॉलेशन व सेवा", text: "बसवणे व दुरुस्ती कामे करून मिळेल" },
    { title: "५ उत्पादन श्रेणी", text: "एकाच दुकानात सर्व काही" },
  ],
  slider: {
    items: [
      { name: "Flonix FX1.0", desc: "झिंक + कॉपर अल्कलाईन वॉटर प्युरिफायर – आकर्षक डिझाईन, शुद्ध व आरोग्यदायी पाणी." },
      { name: "P&A Fighter 1.0", desc: "RO + UV + UF + CU प्युरिफायर – ISI मार्क असलेले, घरी बसवून दिलेले मॉडेल." },
      { name: "आमची सर्व उत्पादने", desc: "प्युरिफायर, गिझर, आटा चक्की व सोलर – एकाच ठिकाणी." },
    ],
  },
  products: {
    title: "आमची उत्पादने",
    subtitle: "आमच्याकडे सर्व कंपनीची उत्पादने उपलब्ध",
    prev: "मागे",
    next: "पुढे",
    items: [
      { name: "वॉटर प्युरिफायर", desc: "सर्व कंपन्यांचे RO / UV / UF वॉटर प्युरिफायर." },
      { name: "इन्स्टंट गिझर", desc: "झटपट गरम पाण्यासाठी इन्स्टंट गिझर." },
      { name: "आटा चक्की", desc: "घरगुती व व्यावसायिक वापरासाठी आटा चक्की." },
      { name: "सोलर वॉटर हीटर", desc: "वीज बचत करणारी सोलर प्रणाली." },
      { name: "गॅस गिझर", desc: "सुरक्षित व जलद गॅस गिझर." },
    ],
  },
  about: {
    title: "आमच्याबद्दल",
    p1: "आदिराज ट्रेडर्स हे अंकलखोप (विठ्ठलनगर), ता. पलूस, जि. सांगली येथील वॉटर प्युरिफायर, इन्स्टंट गिझर, आटा चक्की विक्री तसेच सोलर व गॅस गिझर इत्यादी उत्पादनांचे विश्वासार्ह दुकान आहे.",
    p2: "विक्रीसोबतच ही सर्व उत्पादने बसवून देणे व संबंधित कामे करून देणे ही आमची खासियत आहे. प्रोप्रायटर अक्षय कुराडे स्वतः ग्राहकांशी थेट संपर्कात असतात.",
    installedCaption: "ग्राहकाच्या घरी बसवलेले P&A Fighter 1.0 प्युरिफायर",
    features: [
      { title: "सर्व कंपनीचा माल", text: "विविध ब्रँडमधून आपल्या गरजेनुसार निवड." },
      { title: "बसवणे व सेवा", text: "इन्स्टॉलेशन व दुरुस्तीची कामे करून मिळतील." },
      { title: "थेट संपर्क", text: "WhatsApp वर सहज चौकशी करा." },
      { title: "स्थानिक दुकान", text: "अंकलखोप, पलूस परिसरातील हक्काचे दुकान." },
    ],
  },
  details: {
    title: "कंपनीची माहिती",
    labels: ["कंपनीचे नाव", "प्रोप्रायटर", "फोन / WhatsApp", "पत्ता", "आम्ही देतो"],
    proprietor: "अक्षय कुराडे",
    offer: "वॉटर प्युरिफायर, इन्स्टंट गिझर, आटा चक्की, सोलर, गॅस गिझर व संबंधित कामे",
  },
  location: {
    title: "आमचा पत्ता",
    address: "अंकलखोप (विठ्ठलनगर), ता. पलूस, जि. सांगली",
    mapTitle: "नकाशा",
    directions: "🧭 दिशा मिळवा",
  },
  dussehra: {
    title: "दसऱ्याच्या हार्दिक शुभेच्छा!",
    message: "सोनं घ्या, सोन्यासारखे रहा! विजयादशमीचा हा सण आपणास व आपल्या परिवारास सुख, समृद्धी व आरोग्य घेऊन येवो.",
    from: "– अक्षय कुराडे व आदिराज ट्रेडर्स परिवार",
    close: "धन्यवाद 🙏",
  },
  floatingWhatsapp: "WhatsApp वर चौकशी करा",
  footer: "सर्व हक्क राखीव.",
};

const en: typeof mr = {
  company: "Adiraj Traders",
  pageTitle: "Adiraj Traders | Water Purifiers, Geysers, Flour Mills & Solar – Ankalkhop, Sangli",
  tagline: "Water purifiers of all brands, instant geysers, flour mills, solar and gas geysers – sales and service under one roof.",
  nav: ["Home", "Products", "About Us", "Details", "Location"],
  menu: "Menu",
  switchLabel: "मराठी",
  hero: {
    welcome: "Welcome 🙏",
    viewProducts: "View Products",
    call: "📞 Call Us",
    whatsapp: "WhatsApp",
  },
  highlights: [
    { title: "Purifiers of All Brands", text: "RO, UV, UF & mineral models" },
    { title: "Installation & Service", text: "Fitting and repair work undertaken" },
    { title: "5 Product Categories", text: "Everything in one shop" },
  ],
  slider: {
    items: [
      { name: "Flonix FX1.0", desc: "Zinc + Copper Alkaline water purifier – sleek design, pure and healthy water." },
      { name: "P&A Fighter 1.0", desc: "RO + UV + UF + CU purifier – ISI-marked model, installed at a customer's home." },
      { name: "All Our Products", desc: "Purifiers, geysers, flour mills and solar – all in one place." },
    ],
  },
  products: {
    title: "Our Products",
    subtitle: "Products of all companies available with us",
    prev: "Previous",
    next: "Next",
    items: [
      { name: "Water Purifier", desc: "RO / UV / UF water purifiers of all brands." },
      { name: "Instant Geyser", desc: "Instant geysers for quick hot water." },
      { name: "Flour Mill (Atta Chakki)", desc: "Atta chakki for home and commercial use." },
      { name: "Solar Water Heater", desc: "Electricity-saving solar system." },
      { name: "Gas Geyser", desc: "Safe and fast gas geysers." },
    ],
  },
  about: {
    title: "About Us",
    p1: "Adiraj Traders is a trusted shop in Ankalkhop (Vitthalnagar), Tal. Palus, Dist. Sangli for water purifiers, instant geysers and flour mills (atta chakki), as well as solar and gas geysers.",
    p2: "Along with sales, we install these products and carry out related work. Proprietor Akshay Kurade stays in direct touch with every customer.",
    installedCaption: "P&A Fighter 1.0 purifier installed at a customer's home",
    features: [
      { title: "All-brand Products", text: "Choose from many brands as per your need." },
      { title: "Installation & Service", text: "Fitting and repair work undertaken." },
      { title: "Direct Contact", text: "Enquire easily on WhatsApp." },
      { title: "Local Shop", text: "Your own shop in Ankalkhop & Palus area." },
    ],
  },
  details: {
    title: "Company Details",
    labels: ["Company Name", "Proprietor", "Phone / WhatsApp", "Address", "We Offer"],
    proprietor: "Akshay Kurade",
    offer: "Water purifiers, instant geysers, flour mills, solar, gas geysers and related work",
  },
  location: {
    title: "Our Location",
    address: "Ankalkhop (Vitthalnagar), Tal. Palus, Dist. Sangli",
    mapTitle: "Map",
    directions: "🧭 Get Directions",
  },
  dussehra: {
    title: "Happy Dussehra!",
    message: "Exchange the golden leaves and stay golden! May this Vijayadashami bring happiness, prosperity and good health to you and your family.",
    from: "– Akshay Kurade & the Adiraj Traders family",
    close: "Thank you 🙏",
  },
  floatingWhatsapp: "Enquire on WhatsApp",
  footer: "All rights reserved.",
};

export const dict = { mr, en };
export type Dict = typeof mr;

interface LangCtx {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = "adiraj-lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "mr" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "mr"; // default: Marathi
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = dict[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, t]);

  return (
    <Ctx.Provider value={{ lang, t, toggle: () => setLang((l) => (l === "mr" ? "en" : "mr")) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang(): LangCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used inside LangProvider");
  return c;
}
