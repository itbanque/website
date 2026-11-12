import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { splitLocale } from './locale';
import './styles.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are prerendered by scripts/prerender.js; the dev server serves an empty root.
// 404.html is prerendered in English only, so a missing /zh/... URL renders fresh instead of hydrating.
const prerenderedLocale = container.firstElementChild?.dataset.locale;
if (prerenderedLocale === splitLocale(window.location.pathname).locale) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
