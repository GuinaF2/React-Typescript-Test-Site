import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.css'; // ✅ este import é necessário

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
