import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import { init, miniApp } from '@telegram-apps/sdk';
import { BrowserRouter } from "react-router";
import "./styles/main.css"


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