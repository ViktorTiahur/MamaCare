import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './i18n';

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <React.Suspense fallback="loading">
    <App />
  </React.Suspense>
  </StrictMode>,
)
