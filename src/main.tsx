import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './pages/MainPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
