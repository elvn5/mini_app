import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import { init, miniApp } from '@telegram-apps/sdk';
import { BrowserRouter } from "react-router";
import "./styles/main.scss"
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./translations/en.json"
import ru from "./translations/ru.json"

i18next
  .use(initReactI18next)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      }
    },
    lng: "ru", // if you're using a language detector, do not define the lng option
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


const initializeTelegramSDK = async () => {
  try {
    void init();


    if (miniApp.ready.isAvailable()) {
      miniApp.ready();
      console.log('Mini App готово');
    }


  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};

void initializeTelegramSDK();

createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)