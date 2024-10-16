import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './styles.css'
import { HeroesApp } from './HeroesApp.jsx'
import { BrowserRouter } from "react-router-dom";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)
