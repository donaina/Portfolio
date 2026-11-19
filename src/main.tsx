import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Opt-in, privacy-friendly analytics: nothing loads unless VITE_PLAUSIBLE_DOMAIN
// is set in the deploy environment (e.g. "donaina.netlify.app").
const analyticsDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
if (analyticsDomain) {
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = analyticsDomain;
  script.src = 'https://plausible.io/js/script.js';
  document.head.appendChild(script);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
