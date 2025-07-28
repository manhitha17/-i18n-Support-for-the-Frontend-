import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import kn from './locales/kn/translation.json';
import fr from './locales/fr/translation.json';
import ja from './locales/ja/translation.json';
import ko from './locales/ko/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      kn: { translation: kn },
      fr: { translation: fr },
      ja: { translation: ja },
      ko: { translation: ko }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

