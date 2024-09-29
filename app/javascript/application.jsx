import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import axios from 'axios';

// CSRFトークンの設定
axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const root = createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});