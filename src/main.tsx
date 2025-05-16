import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './pages/MainPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TerminadasPage from './pages/TerminadasPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/terminadas" element={ <TerminadasPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
