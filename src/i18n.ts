import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: (en as any).default || en },
            de: { translation: (de as any).default || de },
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        detection: {
            order: ['navigator', 'htmlTag', 'localStorage'],
            caches: ['localStorage'],
        },
    });

export default i18n;
