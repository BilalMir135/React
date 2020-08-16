import i18next from 'i18next';
import Backend from 'i18next-http-backend'; //this will load translations using http requests
import LanguageDetector from 'i18next-browser-languagedetector'; //this will detect language
import { initReactI18next } from 'react-i18next';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'], //the browser will check rules first in queryString first then in cookie
      cache: ['cookie'], //store the detected language in cookie
      interpolation: {
        escapeValue: false,
      },
    },
  });

export default i18next;
