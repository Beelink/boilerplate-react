import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from '@assets/locales/en.json';
import ruTranslation from '@assets/locales/ru.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ru: {
    translation: ruTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    lng: __config.lang.defaultLang,
    resources,
    fallbackLng: __config.lang.defaultLang,
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
