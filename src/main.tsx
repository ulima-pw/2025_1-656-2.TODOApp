import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './views/pages/MainPage'
import LoginPage from './views/pages/LoginPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TerminadasPage from './views/pages/TerminadasPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/2025_1-656-2.TODOApp'>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/main" element={ <MainPage /> } />
        <Route path="/terminadas" element={ <TerminadasPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
