import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import uz from './lang/uz.json';
import ru from './lang/ru.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'uz',
  resources: {
    uz: {
      global: uz
    },
    ru: {
      global: ru
    }
  }
}).then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
});