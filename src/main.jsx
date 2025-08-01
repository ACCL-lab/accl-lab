// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ IMPORTANT
import App from './App.jsx';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './styles/style.css';

import AOS from 'aos';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ⬅️ wrap everything */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
