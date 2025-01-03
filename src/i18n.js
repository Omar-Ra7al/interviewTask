// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // لتحميل ملفات JSON

i18n
  .use(initReactI18next) // ربط i18next مع React
  .use(Backend) // لتحميل ملفات الترجمة من الخادم
  .init({
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en", // اللغة البديلة في حالة عدم العثور على الترجمة
    backend: {
      loadPath: "/locales/{{lng}}.json", // المسار إلى ملفات JSON الخاصة بالترجمات
    },
    interpolation: {
      escapeValue: false, // لتحسين الأمان
    },
  });

export default i18n;
