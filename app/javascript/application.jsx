import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});