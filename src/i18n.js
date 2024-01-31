import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './Locales/russian.json'
import en from './Locales/english.json'
const resources = {
    ru: { translation: ru },
    en: { translation: en },
  };
  
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;