import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import smoothscroll from 'smoothscroll-polyfill';


import './i18n';

import './index.css'
import App from './App.tsx'

smoothscroll.polyfill();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <React.Suspense fallback="loading">
    <App />
  </React.Suspense>
  </StrictMode>,
)
