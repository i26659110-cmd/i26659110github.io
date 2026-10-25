import React from 'react';
import ReactDOM from 'react-dom/client';
// Vazirmatn is bundled locally (no CDN), so it works offline after the first load.
import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/700.css';
import './styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
